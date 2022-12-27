import React from 'react';
import CartContext from './cart-context';
import { useReducer } from 'react';

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item: CartItem) => {
    dispatchCartAction({ type: 'ADD', item });
  };

  const removeItemFromCartHandler = (id: string) => {
    dispatchCartAction({ type: 'REMOVE', id });
  };

  const clearCartHandler = () => {
    dispatchCartAction({ type: 'CLEAR' });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    clearCart: clearCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};

const cartReducer = (state: CartState, action: CartAction): CartState => {
  if (action.type === 'ADD') {
    return actAddAction(state, action as AddAction);
  } else if (action.type === 'REMOVE') {
    return actRemoveAction(state, action as RemoveAction);
  }
  if (action.type == 'CLEAR') {
    return actClearAction();
  }
  return state;
};

type RemoveAction = { type: string; id: string };
type AddAction = { type: string; item: CartItem };
type ClearAction = { type: string };
type CartAction = AddAction | RemoveAction | ClearAction;
type CartState = {
  items: CartItem[];
  totalAmount: number;
};

const actAddAction = (state: CartState, action: AddAction) => {
  const updatedTotalAmount =
    state.totalAmount + action.item.price * action.item.amount;

  const existingCartItemIndex = state.items.findIndex(
    (item) => item.id === action.item.id
  );
  const existingCartItem = state.items[existingCartItemIndex];
  let updatedItems;

  if (existingCartItem) {
    const updatedItem = {
      ...existingCartItem,
      amount: existingCartItem.amount + action.item.amount,
    };
    updatedItems = [...state.items];
    updatedItems[existingCartItemIndex] = updatedItem;
  } else {
    updatedItems = state.items.concat(action.item);
  }

  return { items: updatedItems, totalAmount: updatedTotalAmount };
};

const actRemoveAction = (state: CartState, action: RemoveAction) => {
  const existingCartItemIndex = state.items.findIndex(
    (item) => item.id === action.id
  );
  const existingCartItem = state.items[existingCartItemIndex];
  const updatedTotalAmount = state.totalAmount - existingCartItem.price;
  let updatedItems;
  if (existingCartItem.amount === 1) {
    updatedItems = state.items.filter((item) => item.id !== action.id);
  } else {
    const updateditem = {
      ...existingCartItem,
      amount: existingCartItem.amount - 1,
    };
    updatedItems = [...state.items];
    updatedItems[existingCartItemIndex] = updateditem;
  }
  return {
    items: updatedItems,
    totalAmount: updatedTotalAmount,
  };
};

const actClearAction = () => {
  return defaultCartState;
};

export default CartProvider;
