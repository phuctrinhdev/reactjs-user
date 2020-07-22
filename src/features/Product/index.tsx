import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

Product.propTypes = {};

const ProductList = React.lazy(() => import('./pages/List'));
const ProductDetail = React.lazy(() => import('./pages/Detail'));

function Product() {
  let { path } = useRouteMatch();
  return (
    <Switch>
      <Route exact path={path}>
        <ProductList />
      </Route>
      <Route path={`${path}/:product_id`}>
        <ProductDetail />
      </Route>
    </Switch>
  );
}

export default Product;