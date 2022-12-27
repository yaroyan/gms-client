/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { FormEvent, Fragment, useRef, useState } from 'react';
import { Prompt } from 'react-router-dom';

import Card from '../UI/Card';
import LoadingSpinner from '../UI/LoadingSpinner';

const QuoteForm = ({
  isLoading,
  onAddQuote,
}: {
  isLoading: boolean;
  onAddQuote: (arg: {
    author: string | undefined;
    text: string | undefined;
  }) => void;
}) => {
  const [isEntereing, setIsEntering] = useState(false);
  const authorInputRef = useRef<HTMLInputElement>(null);
  const textInputRef = useRef<HTMLTextAreaElement>(null);

  function submitFormHandler(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const enteredAuthor = authorInputRef.current?.value;
    const enteredText = textInputRef.current?.value;

    // optional: Could validate here

    onAddQuote({ author: enteredAuthor, text: enteredText });
  }

  const finishEnteringHandler = () => {
    setIsEntering(false);
  };

  const formFocusHandler = () => {
    setIsEntering(true);
  };

  return (
    <Fragment>
      <Prompt
        when={isEntereing}
        message={() =>
          'Are you sure you want to leave? All your entered dat will be lost!'
        }
      />
      <Card>
        <form
          css={styles.form}
          onFocus={formFocusHandler}
          onSubmit={submitFormHandler}
        >
          {isLoading && (
            <div css={styles.loading}>
              <LoadingSpinner />
            </div>
          )}

          <div css={styles.control}>
            <label htmlFor="author">Author</label>
            <input type="text" id="author" ref={authorInputRef} />
          </div>
          <div css={styles.control}>
            <label htmlFor="text">Text</label>
            <textarea id="text" rows={5} ref={textInputRef}></textarea>
          </div>
          <div css={styles.actions}>
            <button className="btn" onClick={finishEnteringHandler}>
              Add Quote
            </button>
          </div>
        </form>
      </Card>
    </Fragment>
  );
};

const styles = {
  form: css`
    position: relative;
  `,
  loading: css`
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  control: css`
    margin-bottom: 0.5rem;
    label {
      font-weight: bold;
      display: block;
      margin-bottom: 0.5rem;
    }

    input,
    textarea {
      font: inherit;
      padding: 0.35rem;
      border-radius: 4px;
      background-color: #f0f0f0;
      border: 1px solid #c1d1d1;
      display: block;
      width: 100%;
      font-size: 1.25rem;
    }

    input:focus,
    textarea:focus {
      background-color: #cbf8f8;
      outline-color: teal;
    }
  `,
  actions: css`
    text-align: right;

    button {
      font-size: 1.25rem;
    }
  `,
};

export default QuoteForm;
