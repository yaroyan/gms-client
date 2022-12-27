/** @jsxImportSource @emotion/react */

import { Fragment } from 'react';
import { Link, Route, useParams, useRouteMatch } from 'react-router-dom';
import Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuotes';

const DUMMY_QUOTES: { id: string; author: string; text: string }[] = [
  { id: 'q1', author: 'author1', text: 'text 1' },
  { id: 'q2', author: 'author2', text: 'text 2' },
];

const QuoteDetail = () => {
  const routeMatch = useRouteMatch();
  const params = useParams<{ quoteId: string }>();
  const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);

  if (!quote) {
    return <p>No quote found!</p>;
  }
  return (
    <Fragment>
      <HighlightedQuote text={quote?.text} author={quote?.author} />
      <Route path={`${routeMatch.path}`} exact>
        <div className="centered">
          <Link className="btn--flat" to={`${routeMatch.url}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>
      <Route path={`${routeMatch.path}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QuoteDetail;
