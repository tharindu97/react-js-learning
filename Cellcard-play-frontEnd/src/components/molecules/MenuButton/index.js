/*
 * File: index.js
 * Project: cellcard-play-pwa
 * File Created: Friday, 10th July 2020 3:08:14 pm
 * Author: Jude Fernando (jfernando@mitrai.com)
 * -----
 * Last Modified: Tuesday, 14th July 2020 2:04:23 am
 * Modified By: Jude Fernando (jfernando@mitrai.com)
 * -----
 * Copyright 2020 - 2020 Mitra Innovation Ltd., Mitra Innovation Ltd.
 */
import React from 'react';
import Button from 'react-bootstrap/Button';
import Icon from '../../atoms/Icon';
import './index.scss';

const IconButton = (props) => {
  return (
    <Button {...props} variant="dark menu-button">
      <Icon icon="menu" />
    </Button>
  );
};

export default IconButton;
