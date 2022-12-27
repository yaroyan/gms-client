/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Fragment } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import QuoteItem from './QuoteItem';

const sortQuotes = (
  quotes: { id: string; author: string; text: string }[],
  ascending: boolean
) => {
  return quotes.sort((quoteA, quoteB) => {
    if (ascending) {
      return quoteA.id > quoteB.id ? 1 : -1;
    } else {
      return quoteA.id < quoteB.id ? 1 : -1;
    }
  });
};

const QuoteList = ({
  quotes,
}: {
  quotes: { id: string; author: string; text: string }[];
}) => {
  const history = useHistory();
  const location = useLocation();
  const queryParam = new URLSearchParams(location.search);
  const isSortingAscending = queryParam.get('sort') === 'asc';
  const sortedQuotes = sortQuotes(quotes, isSortingAscending);
  const order = isSortingAscending ? 'desc' : 'asc';
  const changeSortingHandler = () => {
    history.push(`${location.pathname}?sort=${order}`);
  };
  return (
    <Fragment>
      <div css={styles.sorting}>
        <button onClick={changeSortingHandler}>
          Sort {isSortingAscending ? 'Descending' : 'Ascending'}
        </button>
      </div>
      <ul css={styles.list}>
        {sortedQuotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

const styles = {
  list: css`
    list-style: none;
    margin: 0;
    padding: 0;
  `,
  sorting: css`
    padding-bottom: 1rem;
    border-bottom: 3px solid #b2d4d4;
    margin-bottom: 2rem;

    button {
      font: inherit;
      color: teal;
      border: 1px solid teal;
      background-color: transparent;
      border-radius: 4px;
      padding: 0.5rem 1.5rem;
      cursor: pointer;
    }

    button:hover {
      background-color: #c2fafa;
    }
  `,
};

export default QuoteList;
