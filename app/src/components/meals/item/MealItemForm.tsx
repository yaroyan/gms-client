/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, { useRef, useState } from 'react';
import Input from '../../UI/Input';

const MealItemForm = ({
  id,
  onAddToCart,
}: {
  id: string;
  onAddToCart: (amount: number) => void;
}) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef<HTMLInputElement>(null);
  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!amountInputRef.current) {
      setAmountIsValid(false);
      return;
    }

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;
    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      return;
    }

    onAddToCart(enteredAmountNumber);
  };
  return (
    <form css={styles.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="amount"
        input={{
          id: id,
          type: 'number',
          min: 1,
          max: 5,
          step: 1,
          defaultValue: 1,
        }}
      />
      <button>+ Add</button>
      {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
    </form>
  );
};

export default MealItemForm;

const styles = {
  form: css`
    text-align: right;

    button {
      font: inherit;
      cursor: pointer;
      background-color: #8a2b06;
      border: 1px solid #8a2b06;
      color: white;
      padding: 0.25rem 2rem;
      border-radius: 20px;
      font-weight: bold;
    }

    button:hover,
    button:active {
      background-color: #641e03;
      border-color: #641e03;
    }
  `,
};
