/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useRef, useState } from 'react';

const isEmpty = (value: string | undefined) => value?.trim() === '';
const isCharLengthOf = (value: string | undefined, length: number) =>
  value?.trim().length === length;

const Checkout = ({
  onCancel,
  onConfirm,
}: {
  onCancel: () => void;
  onConfirm: ({
    name,
    street,
    city,
    postalCode,
  }: {
    name: string | undefined;
    street: string | undefined;
    city: string | undefined;
    postalCode: string | undefined;
  }) => void;
}) => {
  const [formInputsValidity, setFormInputsValidity] = useState({
    name: true,
    street: true,
    city: true,
    postalCode: true,
  });
  const nameInputRef = useRef<HTMLInputElement>(null);
  const streetInputRef = useRef<HTMLInputElement>(null);
  const postalCodeInputRef = useRef<HTMLInputElement>(null);
  const cityInputRef = useRef<HTMLInputElement>(null);
  const confirmHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const enteredName = nameInputRef.current?.value;
    const enteredStreet = streetInputRef.current?.value;
    const enteredPostalCode = postalCodeInputRef.current?.value;
    const enteredCity = cityInputRef.current?.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredStreetIsValid = !isEmpty(enteredStreet);
    const enteredPostalCodeIsValid = isCharLengthOf(enteredPostalCode, 5);
    const enteredCityIsValid = !isEmpty(enteredCity);

    setFormInputsValidity({
      name: enteredNameIsValid,
      street: enteredStreetIsValid,
      city: enteredCityIsValid,
      postalCode: enteredPostalCodeIsValid,
    });

    const formIsValid =
      enteredNameIsValid &&
      enteredStreetIsValid &&
      enteredPostalCodeIsValid &&
      enteredCityIsValid;

    if (!formIsValid) {
      return;
    }

    onConfirm({
      name: enteredName,
      street: enteredStreet,
      city: enteredCity,
      postalCode: enteredPostalCode,
    });
  };

  const formCss = (validity: boolean) =>
    validity ? [styles.control] : [styles.control, styles.invalid];
  return (
    <form css={styles.form} onSubmit={confirmHandler}>
      <div css={formCss(formInputsValidity.name)}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameInputRef} />
        {!formInputsValidity.name && <p>Please enter a valid name!</p>}
      </div>
      <div css={formCss(formInputsValidity.street)}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetInputRef} />
        {!formInputsValidity.street && <p>Please enter a valid street!</p>}
      </div>
      <div css={formCss(formInputsValidity.postalCode)}>
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" ref={postalCodeInputRef} />
        {!formInputsValidity.postalCode && (
          <p>Please enter a valid postal code! (5 characters)</p>
        )}
      </div>
      <div css={formCss(formInputsValidity.city)}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityInputRef} />
        {!formInputsValidity.city && <p>Please enter a valid city!</p>}
      </div>
      <div css={styles.actions}>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
        <button className="submit">Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;

const styles = {
  form: css`
    margin: 1rem 0;
    height: 20rem;
    overflow: auto;
  `,

  control: css`
    margin-bottom: 0.5rem;

    label {
      font-weight: bold;
      margin-bottom: 0.25rem;
      display: block;
    }

    input {
      font: inherit;
      border: 1px solid #ccc;
      border-radius: 4px;
      width: 20rem;
      max-width: 100%;
    }
  `,

  actions: css`
    display: flex;
    justify-content: flex-end;
    gap: 1rem;

    button {
      font: inherit;
      color: #5a1a01;
      cursor: pointer;
      background-color: transparent;
      border: none;
      border-radius: 25px;
      padding: 0.5rem 2rem;
    }

    button:hover,
    button:active {
      background-color: #ffe6dc;
    }
    .submit {
      border: 1px solid #5a1a01;
      background-color: #5a1a01;
      color: white;
    }

    .submit:hover,
    .submit:active {
      background-color: #7a2706;
    }
  `,

  invalid: css`
    label {
      color: #ca3e51;
    }

    input {
      border-color: #aa0b20;
      background-color: #ffeff1;
    }
  `,
};
