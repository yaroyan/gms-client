/** @jsxImportSource @emotion/react */
import { css, keyframes } from '@emotion/react';
import { useContext, useEffect, useState } from 'react';
import CartContext from '../../store/cart-context';

import CartIcon from '../cart/CartIcon';

const HeaderCartButton = ({ onClick }: { onClick: () => void }) => {
  const [buttonIsHighLighted, setButtonIsHighLighted] = useState(false);
  const cartContext = useContext(CartContext);
  const { items } = cartContext;
  const numberOfCartItems = items.reduce((currentNumber, item) => {
    return currentNumber + item.amount;
  }, 0);

  const cartButtonCSS = buttonIsHighLighted
    ? [styles.cartButton, styles.bump]
    : [styles.cartButton];

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setButtonIsHighLighted(true);
    const timer = setTimeout(() => {
      setButtonIsHighLighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button css={cartButtonCSS} onClick={onClick}>
      <span css={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span css={styles.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;

const styles = {
  cartButton: css`
    cursor: pointer;
    font: inherit;
    border: none;
    background-color: #4d1601;
    color: white;
    padding: 0.75rem 3rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-radius: 25px;
    font-weight: bold;

    &:hover,
    &:active {
      background-color: #2c0d00;
    }
  `,

  bump: css`
    animation: ${keyframes`
      0% {
        transform: scale(1);
      }
      10% {
        transform: scale(0.9);
      }
      30% {
        transform: scale(1.1);
      }
      50% {
        transform: scale(1.15);
      }
      100% {
        transform: scale(1);
      }    
  `} 300ms ease-out;
  `,

  icon: css`
    width: 1.35rem;
    height: 1.35rem;
    margin-right: 0.5rem;
  `,

  badge: css`
    background-color: #b94517;
    padding: 0.25rem 1rem;
    border-radius: 25px;
    margin-left: 1rem;
    font-weight: bold;

    &:hover,
    &:active {
      background-color: #92320c;
    }
  `,
};
