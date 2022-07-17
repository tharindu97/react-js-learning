/*
 * Author: Dilum Sanjaya (dranasinghe@mitrai.com)
 * Date: Tuesday 4th AUGUST 2020 9:00:00 am
 * Module: Cellcard Play Frontend
 * Copyright © 2020 Cellcard Play. All rights reserved.
 */

import React from 'react';
import ImageRounded from 'components/atoms/ImageRounded';

import './style.scss';

const HorizontalImageSet = ({ images }) => {
  return (
    <div className="horizontal-image-set">
      {images.map((image) => (
        <ImageRounded key={image} src={image} size={50} marginRight={4} />
      ))}
    </div>
  );
};

export default HorizontalImageSet;
