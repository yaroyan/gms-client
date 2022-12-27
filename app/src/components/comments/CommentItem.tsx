/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const CommentItem = (props: { text: string }) => {
  return (
    <li css={styles.item}>
      <p>{props.text}</p>
    </li>
  );
};

const styles = {
  item: css`
    margin: 1rem 0;
    color: #4a5555;
    font-size: 1.25rem;
    padding-bottom: 0.5rem;
    border-bottom: 2px solid teal;
  `,
};

export default CommentItem;
