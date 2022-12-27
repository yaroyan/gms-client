/** @jsxImportSource @emotion/react */

import QuoteList from '../components/quotes/QuoteList';

const DUMMY_QUOTES: { id: string; author: string; text: string }[] = [
  { id: 'q1', author: 'author1', text: 'text 1' },
  { id: 'q2', author: 'author2', text: 'text 2' },
];

const AllQuotes = () => {
  return <QuoteList quotes={DUMMY_QUOTES} />;
};

export default AllQuotes;
