import React, { useState, useEffect } from 'react';
import Banner from 'components/Banner';
import BackgroundImages from 'constants/background-images';
import { Button, Col, Container, Row, Spinner } from 'reactstrap';
import PropTypes from 'prop-types';
import productApi from 'api/productApi';
import './styles.scss';
import ProductItem from 'components/ProductItem';
import { LIMIT, PAGE } from 'constants/constant';
import { useDispatch } from 'react-redux';
import { addToCart } from 'actions/cart';

interface IProductList {

}
const ProductList = () => {
  const [productList, setProductList] = useState<IProductList[]>([]);
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
      <Banner title="🎉 Product 🎉" backgroundUrl={BackgroundImages.ORANGE_BG} />
      <Container className="mt-3">
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

ProductList.propTypes = {
  productList: PropTypes.array
};

ProductList.defaultProps = {
  productList: []
};

export default ProductList;