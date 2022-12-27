import { useState } from 'react';
import Header from './components/layout/Header';
import Meals from './components/meals/Meals';
import Cart from './components/cart/Cart';
import CartProvider from './store/CartProvider';
import { Redirect, Route, Switch } from 'react-router-dom';
import AllQuotes from './pages/AllQuotes';
import QuoteDetail from './pages/QuoteDetail';
import NewQuote from './pages/NewQuote';
import Layout from './components/layout/Layout';
import NotFound from './pages/NotFound';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const showCartHandler = () => {
    setCartIsShown(true);
  };
  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <div>
      <Route path="/meal">
        <CartProvider>
          {cartIsShown && <Cart onClose={hideCartHandler} />}
          <Header onShowCart={showCartHandler} />
          <main>
            <Meals />
          </main>
        </CartProvider>
      </Route>
      <Layout>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/quotes" />
          </Route>
          <Route path="/quotes" exact>
            <AllQuotes />
          </Route>
          <Route path="/quotes/:quoteId">
            <QuoteDetail />
          </Route>
          <Route path="/new-quote">
            <NewQuote />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
