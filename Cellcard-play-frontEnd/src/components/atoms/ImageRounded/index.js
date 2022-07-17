/*
 * Author: Dilum Sanjaya (dranasinghe@mitrai.com)
 * Date: Friday 31 July 2020 5:00:00 pm
 * Module: Cellcard Play Frontend
 * Copyright © 2020 Cellcard Play. All rights reserved.
 */

import React from 'react';

import './style.scss';

const ImageRounded = ({ src, size, roundedFull, marginRight, alt }) => {
  const sizeString = `${size}px`;
  return (
    <div
      className="image-rounded"
      style={{
        width: sizeString,
        height: sizeString,
        borderRadius: roundedFull ? '50%' : '0.5rem',
        marginRight: `${marginRight || 0}px`,
      }}
    >
      <img src={src} className="image-rounded-image" alt={alt} />
    </div>
  );
};

export default ImageRounded;
