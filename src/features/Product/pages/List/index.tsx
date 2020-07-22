import React, { useState, useEffect } from 'react';
import Banner from 'components/Banner';
import BackgroundImages from 'constants/background-images';
import { Container, Card, CardHeader, CardBody } from 'reactstrap';
import PropTypes from 'prop-types';
import productApi from 'api/productApi';
import { Link } from 'react-router-dom';
import './styles.scss';

ProductList.propTypes = {
  productList: PropTypes.array
};

ProductList.defaultProps = {
  productList: []
};
function ProductList() {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    const fetchProductList = async () => {
      try {
        const product_list: any = await productApi.getList({ page: 1, limit: 12 });
        setProductList(product_list);
      } catch (error) {
        
      } 
    }

    fetchProductList();
  }, []);
  return (
    <>
      <Banner title="🎉 Your awesome photos 🎉" backgroundUrl={BackgroundImages.ORANGE_BG}/>
      <Container className="mt-3">
        <div className="card-deck mb-3 text-center">
          {productList.map((item: any, key: number) => 
            <Card className="card mb-4 shadow-sm" key={key}>
              <CardHeader>
                <h4 className="my-0 font-weight-normal">{ item.department }</h4>
              </CardHeader>
              <CardBody>
                <h1 className="card-title pricing-card-title">${ item.price }</h1>
                <ul className="list-unstyled mt-3 mb-4">
                  <li>{ item.name }</li>
                  <li>{ item.color }</li>
                  <li>{ item.adjective }</li>
                  <li>{ item.material }</li>
                </ul>
                <Link to={"product/" + item.id} className="btn btn-lg btn-block btn-outline-primary">View detail</Link>
              </CardBody>
            </Card>
          )}
        </div>
      </Container>
    </>
  );
}

export default ProductList;