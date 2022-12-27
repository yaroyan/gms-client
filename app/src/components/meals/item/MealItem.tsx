/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useContext } from 'react';
import CartContext from '../../../store/cart-context';
import MealItemForm from './MealItemForm';

type MealItemProp = {
  id: string;
  name: string;
  description: string;
  price: number;
};

const MealItem = ({ id, name, description, price }: MealItemProp) => {
  const cartContext = useContext(CartContext);
  const formattedPrice = `$${price.toFixed(2)}`;
  const addToCartHandler = (amount: number) => {
    cartContext.addItem({ id: id, name: name, amount: amount, price: price });
  };
  return (
    <li css={styles.meal}>
      <div>
        <h3>{name}</h3>
        <div css={styles.description}>{description}</div>
        <div css={styles.price}>{formattedPrice}</div>
      </div>
      <div>
        <MealItemForm id={id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;

const styles = {
  meal: css`
    display: flex;
    justify-content: space-between;
    margin: 1rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid #ccc;

    h3 {
      margin: 0 0 0.25rem 0;
    }
  `,

  description: css`
    font-style: italic;
  `,

  price: css`
    margin-top: 0.25rem;
    font-weight: bold;
    color: #ad5502;
    font-size: 1.25rem;
  `,
};
