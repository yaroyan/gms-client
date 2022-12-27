/** @jsxImportSource @emotion/react */

import { useHistory } from 'react-router-dom';
import QuoteForm from '../components/quotes/QuoteForm';

const NewQuote = () => {
  const history = useHistory();

  const addQuoteHandler = (quoteData: {
    author: string | undefined;
    text: string | undefined;
  }) => {
    console.log(quoteData);
    history.push('/quotes');
  };

  return <QuoteForm isLoading={false} onAddQuote={addQuoteHandler} />;
};

export default NewQuote;
