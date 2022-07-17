/*
 * File: index.js
 * Project: cellcard-play-pwa
 * File Created: Friday, 07th August 2020 3:08:14 pm
 * Author: Dilum Sanjaya (dranasinghe@mitrai.com)
 * Copyright 2020 - 2020 Mitra Innovation Ltd., Mitra Innovation Ltd.
 */
import React from 'react';
import { PLAYPOINTS_ICON } from 'constants/Images';
import clsx from 'clsx';
import './style.scss';

const Points = ({ size, className }) => {
  const pixelSize = `${size}px`;
  return (
    <img
      src={`${process.env.REACT_APP_ASSESTS_URL}${PLAYPOINTS_ICON.src}`}
      alt={PLAYPOINTS_ICON.alt}
      style={{
        width: pixelSize,
        height: pixelSize,
      }}
      className={clsx(className)}
    />
  );
};

export default Points;
