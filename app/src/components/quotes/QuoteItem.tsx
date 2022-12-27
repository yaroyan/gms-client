/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Link } from 'react-router-dom';

const QuoteItem = ({
  id,
  text,
  author,
}: {
  id: string;
  text: string;
  author: string;
}) => {
  return (
    <li css={styles.item}>
      <figure>
        <blockquote>
          <p>{text}</p>
        </blockquote>
        <figcaption>{author}</figcaption>
      </figure>
      <Link className="btn" to={`/quotes/${id}`}>
        View Fullscreen
      </Link>
    </li>
  );
};

const styles = {
  item: css`
    margin: 1rem 0;
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    border-radius: 6px;
    background-color: #c2e7f0;

    &:last-of-type {
      border-bottom: none;
    }

    figure {
      margin: 0;
      padding: 0;
      width: 70%;
    }

    blockquote {
      margin: 0;
      text-align: left;
      font-size: 1.5rem;
      color: #212929;
    }

    p {
      margin: 0;
      margin-bottom: 0.25rem;
    }

    figcaption {
      font-style: italic;
      color: #566d6d;
    }
  `,
};

export default QuoteItem;
