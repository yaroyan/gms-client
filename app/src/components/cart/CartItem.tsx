/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

type CartItemProp = {
  name: string;
  amount: number;
  price: number;
  onRemove: () => void;
  onAdd: () => void;
};

const CartItem = ({ name, amount, price, onRemove, onAdd }: CartItemProp) => {
  const fixedPrice = `$${price.toFixed(2)}`;

  return (
    <li css={styles.cartItem}>
      <div>
        <h2>{name}</h2>
        <div css={styles.summary}>
          <span css={styles.price}>{fixedPrice}</span>
          <span css={styles.amount}>x {amount}</span>
        </div>
      </div>
      <div css={styles.actions}>
        <button onClick={onRemove}>−</button>
        <button onClick={onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;

const styles = {
  cartItem: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid #8a2b06;
    padding: 1rem 0;
    margin: 1rem 0;

    h2 {
      margin: 0 0 0.5rem 0;
      color: #363636;
    }

    button {
      font: inherit;
      font-weight: bold;
      font-size: 1.25rem;
      color: #8a2b06;
      border: 1px solid #8a2b06;
      width: 3rem;
      text-align: center;
      border-radius: 6px;
      background-color: transparent;
      cursor: pointer;
      margin-left: 1rem;
      margin: 0.25rem;
    }

    button:hover,
    button:active {
      background-color: #8a2b06;
      color: white;
    }
  `,
  summary: css`
    width: 10rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
  price: css`
    font-weight: bold;
    color: #8a2b06;
  `,
  amount: css`
    font-weight: bold;
    border: 1px solid #ccc;
    padding: 0.25rem 0.75rem;
    border-radius: 6px;
    color: #363636;
  `,
  actions: css`
    display: flex;
    flex-direction: column;
    @media (min-width: 768px) {
      flex-direction: row;
    }
  `,
};
