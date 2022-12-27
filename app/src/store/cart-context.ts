import React from 'react';

const CartContext = React.createContext<{
  items: CartItem[];
  totalAmount: number;
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
}>({
  items: [],
  totalAmount: 0,
  addItem: () => {
    throw new Error('Not Implemented.');
  },
  removeItem: () => {
    throw new Error('Not Implemented.');
  },
  clearCart: () => {
    throw new Error('Not Implemented.');
  },
});

export default CartContext;
