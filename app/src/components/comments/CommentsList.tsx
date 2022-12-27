/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import CommentItem from './CommentItem';

const CommentsList = (comments: { id: string; text: string }[]) => {
  return (
    <ul css={styles.comments}>
      {comments.map((comment) => (
        <CommentItem key={comment.id} text={comment.text} />
      ))}
    </ul>
  );
};

const styles = {
  comments: css`
    list-style: none;
    margin: 2.5rem 0;
    padding: 0;
  `,
};

export default CommentsList;
