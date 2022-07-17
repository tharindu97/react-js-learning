/*
 * File: index.js
 * Project: cellcard-play-pwa
 * File Created: Friday, 07th August 2020 3:08:14 pm
 * Author: Dilum Sanjaya (dranasinghe@mitrai.com)
 * Copyright 2020 - 2020 Mitra Innovation Ltd., Mitra Innovation Ltd.
 */
import React from 'react';
import './style.scss';

const Points = ({ size, fontSize, fontWeight, color, isCenter, value }) => {
  return (
    <div
      className="points"
      style={{ justifyContent: isCenter ? 'center' : 'start' }}
    >
      <img
        src="/images/header/play-points.png"
        alt="playpoints"
        className="points-image"
        style={{
          width: size,
          height: size,
        }}
      />
      <span
        className="points-text"
        style={{
          fontSize,
          color,
          fontWeight,
        }}
      >
        {value}
      </span>
    </div>
  );
};

export default Points;
