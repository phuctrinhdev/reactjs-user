import React from 'react';
import Banner from 'components/Banner';
import { Container, Row, Col } from 'reactstrap';
import BackgroundImages from 'constants/background-images';
import PropTypes from 'prop-types';

ProductDetail.propTypes = {
  product: PropTypes.object
};

function ProductDetail() {
  return (
    <>
      <Banner title="🎉 Your awesome photos 🎉" backgroundUrl={BackgroundImages.COLORFUL_BG} />
      <Container>
        <Row>
          <Col lg="6">
            Image
          </Col>
          <Col lg="6">
            Info
          </Col>
          <Col>
            Des
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default ProductDetail;