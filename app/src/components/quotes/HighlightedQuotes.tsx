/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const HighlightedQuote = ({
  text,
  author,
}: {
  text: string | undefined;
  author: string | undefined;
}) => {
  return (
    <figure css={styles.quote}>
      <p>{text}</p>
      <figcaption>{author}</figcaption>
    </figure>
  );
};

const styles = {
  quote: css`
    background-color: #162b2b;
    color: white;
    border-radius: 6px;
    padding: 3rem;
    margin: 3rem auto;
    width: 90%;
    max-width: 40rem;

    p {
      font-size: 2.5rem;
    }

    figcaption {
      font-style: italic;
      font-size: 1.5rem;
      text-align: right;
      color: #a1e0e0;
    }
  `,
};

export default HighlightedQuote;
