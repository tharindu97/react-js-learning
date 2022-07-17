/*
 * File: index.js
 * Project: cellcard-play-pwa
 * File Created: Friday, 10th July 2020 12:28:09 am
 * Author: Jude Fernando (jfernando@mitrai.com)
 * -----
 * Last Modified: Tuesday, 14th July 2020 2:03:46 am
 * Modified By: Jude Fernando (jfernando@mitrai.com)
 * -----
 * Copyright 2020 - 2020 Mitra Innovation Ltd., Mitra Innovation Ltd.
 */

import React from 'react';
import { BRAND_LOGO } from 'constants/Images';
import { Link } from 'react-router-dom';
import './style.scss';

const goToTop = () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });
};

const BrandLogo = (props) => {
  const { alt } = props;
  return (
    <Link
      to={{
        pathname: '/',
      }}
      className="navbar-brand"
      onClick={goToTop}
    >
      <img
        alt={alt}
        src={`${process.env.REACT_APP_ASSESTS_URL}${BRAND_LOGO.src}`}
        className="navbar-brand-image"
      />
    </Link>
  );
};

export default BrandLogo;
