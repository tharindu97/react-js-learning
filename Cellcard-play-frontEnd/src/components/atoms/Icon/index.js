/*
 * File: index.js
 * Project: cellcard-play-pwa
 * File Created: Friday, 10th July 2020 2:41:00 pm
 * Author: Jude Fernando (jfernando@mitrai.com)
 * -----
 * Last Modified: Tuesday, 14th July 2020 2:03:53 am
 * Modified By: Jude Fernando (jfernando@mitrai.com)
 * -----
 * Copyright 2020 - 2020 Mitra Innovation Ltd., Mitra Innovation Ltd.
 */
import React from 'react';
import './style.scss';

const Icon = (props) => {
  const { icon, filled } = props;
  const name = `icon-${icon}` + (filled ? '_filled' : '');
  return <i className={name}></i>;
};

export default Icon;
