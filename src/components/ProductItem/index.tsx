import React from 'react';
import { Link } from "react-router-dom";
import { Card, CardBody, CardHeader } from "reactstrap";

const ProductItem = (props: any) => {
  const { name, price, id, adj, onHandelAddToCart } = props;
  
  return (
    <Card className="card mb-4 shadow-sm">
      <CardHeader>
        <h4 className="my-0 font-weight-normal">{name}</h4>
      </CardHeader>
      <CardBody>
        <h1 className="card-title pricing-card-title">${price}</h1>
        <ul className="list-unstyled mt-3 mb-4">
          <li>{adj}</li>
        </ul>
        <button className="btn btn-lg btn-block btn-outline-success" onClick={() => onHandelAddToCart()}>Add to cart</button>
        <Link to={"product/" + id} className="btn btn-lg btn-block btn-outline-primary">View detail</Link>
      </CardBody>
    </Card>
  )
}

export default ProductItem;