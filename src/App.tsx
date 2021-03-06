import React, { Suspense } from 'react';
import './App.scss';
import { BrowserRouter, Switch, Redirect, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';

//Lazy load component
const Home = React.lazy(() => import('./features/Home'));
const Product = React.lazy(() => import('./features/Product'));
const Cart = React.lazy(() => import('./features/Cart'));
const Page404 = React.lazy(() => import('./components/Page404'));

function App() {
  return (
    <React.Fragment>
      <Suspense fallback={<div>Loading...</div>} >
        <BrowserRouter>
          <Header />

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Redirect exact from="/" to="/home"></Redirect>
            
            <Route path="/home" component={Home}></Route>
            <Route path="/product" component={Product}></Route>
            <Route path="/cart" component={Cart}></Route>
            <Route path="/404" component={Page404}></Route>

            <Redirect from='*' to='/404' />
          </Switch>

          <Footer />
        </BrowserRouter>
      </Suspense>
    </React.Fragment>
  );
}

export default App;
