import Banner from 'components/Banner';
import BackgroundImages from 'constants/background-images';
import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Table } from 'reactstrap';

interface ICart {
  cart: any
}

const Cart = () => {
  const cartList: any = useSelector<ICart>(state => state.cart.list);
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
              </tr>
            </thead>
            <tbody>
              {cartList.map((item: any, key: number) =>
                <tr>
                  <th scope="row">{key + 1}</th>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td>{item.adj}</td>
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