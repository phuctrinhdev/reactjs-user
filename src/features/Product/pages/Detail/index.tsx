import React, { useEffect, useState } from 'react';
import Banner from 'components/Banner';
import BackgroundImages from 'constants/background-images';
import productApi from 'api/productApi';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

interface IProduct {
  adj: string;
  createdAt: string;
  description: string;
  id: string;
  image: string;
  name: string;
  price: string;
}

const ProductDetail = () => {
  const [productDetail, setProductDetail] = useState<IProduct>();
  const [isFetched, setIsFetched] = useState(false);
  const { product_id }: any = useParams();

  useEffect(() => {
    const fetchProductDetail = async () => {
      try {
        const product_detail: any = await productApi.getItem(product_id);
        if (product_detail) {
          setProductDetail(product_detail);
          setIsFetched(true);
        }
      } catch (error) {
        setIsFetched(true);
      }
    }

    !isFetched && fetchProductDetail();
  }, [isFetched, product_id]);
  return (
    <>
      {productDetail && (
        <>
          <Banner title={productDetail && productDetail.name} backgroundUrl={BackgroundImages.COLORFUL_BG} color="text-primary"/>
        </>
      )}
      {!productDetail && isFetched && (
        <Banner title="Something went wrong" backgroundUrl={BackgroundImages.COLORFUL_BG} />
      )}
    </>
  );
}

ProductDetail.propTypes = {
  productDetail: PropTypes.object,
  isFetched: PropTypes.bool,
};

ProductDetail.defaultProps = {
  productDetail: {},
  isFetched: false,
}

export default ProductDetail;