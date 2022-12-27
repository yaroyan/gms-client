/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import React, { useContext, useState } from 'react';
import CartContext from '../../store/cart-context';
import Modal from '../UI/Modal';
import CartItem from './CartItem';
import Checkout from './Checkout';

const Cart = ({ onClose }: { onClose: () => void }) => {
  const [isCheckout, setIsCheckout] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);
  const cartContext = useContext(CartContext);

  const totalAmount = `${cartContext.totalAmount.toFixed(2)}`;
  const hasItems = cartContext.items.length > 0;

  const cartItemRemoveHandler = (id: string) => {
    cartContext.removeItem(id);
  };
  const cartItemAddHandler = (item: CartItem) => {
    return cartContext.addItem({ ...item, amount: 1 });
  };
  const orderHandler = () => {
    return setIsCheckout(true);
  };
  const submitOrderHandler = async (userData: {
    name: string | undefined;
    street: string | undefined;
    city: string | undefined;
    postalCode: string | undefined;
  }) => {
    setIsSubmitting(true);
    await fetch('http://localhost:8080/meal/order', {
      method: 'POST',
      body: JSON.stringify({
        user: userData,
        orderedItems: cartContext.items,
      }),
    });
    setIsSubmitting(false);
    setDidSubmit(true);
    cartContext.clearCart();
  };

  /**
   * ==============================
   * Modal contents
   * ==============================
   */

  const cartItems = (
    <ul css={styles.cartItems}>
      {cartContext.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  const modalActions = (
    <div css={styles.actions}>
      <button className="button--alt" onClick={onClose}>
        Close
      </button>
      {hasItems && (
        <button className="button" onClick={orderHandler}>
          Order
        </button>
      )}
    </div>
  );

  const cartModalContent = (
    <React.Fragment>
      {cartItems}
      <div css={styles.total}>
        <span>Total Amount</span>
        <span>${totalAmount}</span>
      </div>
      {isCheckout && (
        <Checkout onConfirm={submitOrderHandler} onCancel={onClose} />
      )}
      {!isCheckout && modalActions}
    </React.Fragment>
  );

  const isSubmittingModalContent = <p>Sending order data...</p>;
  const didSubmitModalContent = (
    <React.Fragment>
      <p>Successfully sent the order!</p>;
      <div css={styles.actions}>
        <button className="button--alt" onClick={onClose}>
          Close
        </button>
      </div>
    </React.Fragment>
  );

  return (
    <Modal onClose={onClose}>
      {!isSubmitting && !didSubmit && cartModalContent}
      {isSubmitting && isSubmittingModalContent}
      {!isSubmitting && didSubmit && didSubmitModalContent}
    </Modal>
  );
};

export default Cart;

/**
 * ==============================
 * CSS properties
 * ==============================
 */
const styles = {
  cartItems: css`
    list-style: none;
    margin: 0;
    padding: 0;
    max-height: 26rem;
    overflow: scroll;
  `,
  total: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: bold;
    font-size: 1.5rem;
    margin: 1rem 0;
  `,
  actions: css`
    text-align: right;
    button {
      font: inherit;
      cursor: pointer;
      background-color: transparent;
      border: 1px solid #8a2b06;
      padding: 0.5rem 2rem;
      border-radius: 25px;
      margin-left: 1rem;
    }

    button:hover,
    button:active {
      background-color: #5a1a01;
      border-color: #5a1a01;
      color: white;
    }

    .button--alt {
      color: #8a2b06;
    }

    .button {
      background-color: #8a2b06;
      color: white;
    }
  `,
};
