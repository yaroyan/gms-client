/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { FormEvent, useRef } from 'react';

const NewCommentForm = () => {
  const commentTextRef = useRef<HTMLTextAreaElement>(null);

  const submitFormHandler = (
    event: FormEvent<HTMLFormElement> | FormEvent<HTMLDivElement>
  ) => {
    event.preventDefault();

    // optional: Could validate here

    // send comment to server
  };

  return (
    <form css={styles.form} onSubmit={submitFormHandler}>
      <div css={styles.control} onSubmit={submitFormHandler}>
        <label htmlFor="comment">Your Comment</label>
        <textarea id="comment" rows={5} ref={commentTextRef}></textarea>
      </div>
      <div css={styles.actions}>
        <button className="btn">Add Comment</button>
      </div>
    </form>
  );
};

const styles = {
  form: css`
    margin-top: 1rem;
    position: relative;
    text-align: center;
  `,
  control: css`
    margin-bottom: 0.5rem;

    label {
      font-weight: bold;
      display: block;
      margin-bottom: 0.5rem;
    }

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

    textarea:focus {
      background-color: #cbf8f8;
      outline-color: teal;
    }
  `,
  actions: css`
    button {
      font-size: 1.25rem;
    }
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
};

export default NewCommentForm;
