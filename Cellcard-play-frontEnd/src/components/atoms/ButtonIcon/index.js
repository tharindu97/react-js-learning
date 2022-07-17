/*
 * File: index.js
 * Project: cellcard-play-pwa
 * File Created: Friday, 10th July 2020 3:08:14 pm
 * Author: Jude Fernando (jfernando@mitrai.com)
 * -----
 * Last Modified: Monday, 13th July 2020 1:15:22 pm
 * Modified By: Jude Fernando (jfernando@mitrai.com)
 * -----
 * Modified: Monday, 9th September 2020 1:45:30 pm
 * Modified By: Jerobert (zjerobert@mitrai.com)
 * Copyright 2020 - 2020 Mitra Innovation Ltd., Mitra Innovation Ltd.
 */
import React from 'react';
import Button from 'react-bootstrap/Button';
import Icon from '../../atoms/Icon';
import './index.scss';

const ButtonIcon = (props) => {
  const { icon, filled, label, variant, ...otherProps } = props;

  return (
    <Button variant={`${variant} btn-icon`} {...otherProps}>
      <div className="btn-icon-wrapper">
      <Icon icon={icon} filled={filled} />
      <div className="btn-label">{label}</div>
      </div>
    </Button>
  );
};

export default ButtonIcon;
