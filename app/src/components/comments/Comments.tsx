/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState } from 'react';

import NewCommentForm from './NewCommentForm';

const Comments = () => {
  const [isAddingComment, setIsAddingComment] = useState(false);

  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };

  return (
    <section css={styles.comments}>
      <h2>User Comments</h2>
      {!isAddingComment && (
        <button className="btn" onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}
      {isAddingComment && <NewCommentForm />}
      <p>Comments...</p>
    </section>
  );
};

const styles = {
  comments: css`
    text-align: center;

    > button {
      font-size: 1.25rem;
    }
  `,
};

export default Comments;
