import React, { useState, useEffect } from 'react';
import Banner from 'components/Banner';
import BackgroundImages from 'constants/background-images';
import { Button, Col, Container, Row } from 'reactstrap';
import PropTypes from 'prop-types';
import productApi from 'api/productApi';
import './styles.scss';
import ProductItem from 'components/ProductItem';
import { LIMIT, PAGE } from 'constants/constant';

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

  useEffect(() => {
    fetchProductList(page, limit);
  }, [page]);

  return (
    <>
      <Banner title="🎉 Your awesome photos 🎉" backgroundUrl={BackgroundImages.ORANGE_BG} />
      <Container className="mt-3">
        <div className="card-deck mb-3 text-center">
          {productList.map((item: any, key: number) =>
            <ProductItem key={key} {...item} />
          )}
        </div>
        {productList.length > 0 && (
          <Row>
            <Col sm="12">
              <div className="text-center">
                <Button color="primary" onClick={() => onHandelLoadMore()}>
                  {loading && (
                    <i className="fa fa-circle-o-notch fa-spin"></i>
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