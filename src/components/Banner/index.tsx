import PropTypes from 'prop-types';
import React from 'react';
import './Banner.scss';



const Banner = (props: any) => {
  const { title, backgroundUrl, color } = props;

  const bannerStyle = backgroundUrl
    ? { backgroundImage: `url(${backgroundUrl})` }
    : {}

  return (
    <section className="banner" style={bannerStyle}>
      <h1 className={color ? `banner__title ${color}` : 'banner__title'}>{title}</h1>
    </section>
  );
}

Banner.propTypes = {
  title: PropTypes.string,
  backgroundUrl: PropTypes.string,
  color: PropTypes.string,
};

Banner.defaultProps = {
  title: '',
  backgroundUrl: '',
  color: '',
}

export default Banner;