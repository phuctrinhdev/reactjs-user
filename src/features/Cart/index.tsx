import Banner from 'components/Banner';
import BackgroundImages from 'constants/background-images';
import React from 'react';
import { useSelector } from 'react-redux';
import { Button, Container, Table } from 'reactstrap';

interface ICart {
  cart: any
}

const Cart = () => {
  let cartList: any = useSelector<ICart>(state => state.cart.list);
  if (cartList.length === 0) {
    const carts_local: any = localStorage.getItem('carts');
    cartList = JSON.parse(carts_local);
  }

  return (
    <>
      <Banner title="🎉 Cart 🎉" backgroundUrl={BackgroundImages.ORANGE_BG} color="text-info" />
      {cartList && cartList.length > 0 && (
        <Container>
          <Table striped>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Price</th>
                <th>Adj</th>
                <th>Amount</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {cartList.map((item: any, key: number) =>
                <tr key={key}>
                  <th scope="row">{key + 1}</th>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td>{item.adj}</td>
                  <td>{item.amount}</td>
                  <td>
                    <Button className="btn btn-danger">&times;</Button>
                  </td>
                </tr>
              )}

            </tbody>
          </Table>
        </Container>
      )}
    </>
  );
}

Cart.propTypes = {};

export default Cart;