import React, { useState, useEffect } from 'react';
import { Button, Col, Container, Row, Spinner } from 'reactstrap';
import Banner from 'components/Banner';
import BackgroundImages from 'constants/background-images';
import productApi from 'api/productApi';
import './Home.scss';
import ProductItem from 'components/ProductItem';
import PropTypes from 'prop-types';
import { LIMIT, PAGE } from 'constants/constant';
import { useDispatch } from 'react-redux';
import { addToCart } from 'actions/cart';

interface IHome {

}

const Home = () => {
  const [productList, setProductList] = useState<IHome[]>([]);
  const [page, setPage] = useState(PAGE);
  const [loading, setLoading] = useState(false);

  const limit = LIMIT;
  const fetchProductList = async (page: number, limit: number) => {
    try {
      const product_list: any = await productApi.getList({ page: page, limit: limit });
      setProductList(productList => [...productList, ...product_list]);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  const onHandelLoadMore = () => {
    setLoading(true);
    setPage((page) => page + 1);
  }

  const dispatch = useDispatch();

  const onHandelAddToCart = (item: any) => {
    let item_cart = item;
    item_cart.amount = 1;
    const carts_local: any = localStorage.getItem('carts');
    let carts = JSON.parse(carts_local);
    if(!carts) {
      carts = [item_cart];
    } else {
      let index = carts.findIndex((e: any) => e.id === item.id);
      if(index !== -1) {
        carts[index].amount = carts[index].amount + 1;
      } else {
        carts.push(item_cart);
      }
    }
    localStorage.setItem('carts', JSON.stringify(carts));
    const action = addToCart(carts);
    dispatch(action);
  }

  useEffect(() => {
    fetchProductList(page, limit);
  }, [page, limit]);

  return (
    <>
      <Banner title="🎉 Home 🎉" backgroundUrl={BackgroundImages.PINK_BG} />
      <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
        <h1 className="display-4">Pricing</h1>
        <p className="lead">Quickly build an effective pricing table for your potential customers with this Bootstrap example. It’s built with default Bootstrap components and utilities with little customization.</p>
      </div>
      <Container>
        <div className="card-deck mb-3 text-center">
          {productList.map((item: any, key: number) =>
            <ProductItem key={key} onHandelAddToCart={() => onHandelAddToCart(item)} {...item} />
          )}
        </div>
        {productList.length > 0 && (
          <Row>
            <Col sm="12">
              <div className="text-center">
                <Button color="primary" onClick={() => onHandelLoadMore()}>
                  {loading && (
                    <Spinner size="sm" />
                  )} Load more
              </Button>
              </div>
            </Col>
          </Row>
        )}
      </Container>
    </>
  );
}

Home.propTypes = {
  productList: PropTypes.array,
};

Home.defaultProps = {
  productList: [],
}

export default Home;