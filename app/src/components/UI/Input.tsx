/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';

type InputProp = {
  id: string;
  type: string;
  min: number;
  max: number;
  step: number;
  defaultValue: number;
};

type LabeledInputProp = {
  label: string;
  input: InputProp;
};

const Input = React.forwardRef<HTMLInputElement, LabeledInputProp>(
  (prop, ref) => {
    return (
      <div css={styles.input}>
        <label htmlFor={prop.input.id}>{prop.label}</label>
        <input ref={ref} {...prop.input} />
      </div>
    );
  }
);

export default Input;

const styles = {
  input: css`
    display: flex;
    align-items: center;
    margin-bottom: 0.5rem;

    label {
      font-weight: bold;
      margin-right: 1rem;
    }

    input {
      width: 3rem;
      border-radius: 5px;
      border: 1px solid #ccc;
      font: inherit;
      padding-left: 0.5rem;
    }
  `,
};
