/*
 * File: index.js
 * Project: cellcard-play-pwa
 * Author: Dilum Sanjaya (dranasinghe@mitrai.com)
 * Copyright 2020 - 2020 Mitra Innovation Ltd., Mitra Innovation Ltd.
 */
import React from 'react';
import { Link } from 'react-router-dom';

const Image = ({ src, alt, fallback }) => {
  return (
    <Link to={{ pathname: '/', hash: 'login' }}>
      <picture>
        <source srcSet={src} type="image/webp" />
        <img src={fallback} alt={alt} />
      </picture>
    </Link>
  );
};

export default Image;
