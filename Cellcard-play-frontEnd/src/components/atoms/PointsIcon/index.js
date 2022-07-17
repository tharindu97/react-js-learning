/*
 * File: index.js
 * Project: cellcard-play-pwa
 * Author: Dilum Sanjaya (dranasinghe@mitrai.com)
 * File Created: Monday, 14th September 2020 03:22 pm
 * Module: Cellcard Play Frontend
 * Copyright 2020 - 2020 Mitra Innovation Ltd., Mitra Innovation Ltd.
 */
import React from 'react';
import { POINTS_ICON_IMAGE } from 'constants/Images';

const PointsIcon = ({ size }) => {
  const sizePixels = `${size}px`;
  return (
    <img
      src={POINTS_ICON_IMAGE.src}
      style={{ width: sizePixels, height: sizePixels }}
      alt={POINTS_ICON_IMAGE.alt}
    />
  );
};

export default PointsIcon;
