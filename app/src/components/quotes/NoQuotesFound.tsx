/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const NoQuotesFound = () => {
  return (
    <div css={styles.noquotes}>
      <p>No quotes found!</p>
      <a className="btn">Add a Quote</a>
    </div>
  );
};

const styles = {
  noquotes: css`
    height: 20rem;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    align-items: center;

    p {
      color: #262c2c;
      font-size: 3rem;
      font-weight: bold;
    }
  `,
};

export default NoQuotesFound;
