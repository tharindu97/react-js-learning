/*
 * File: index.js
 * Project: cellcard-play-pwa
 * File Created: Monday, 13th July 2020 11:52:32 am
 * Author: Jude Fernando (jfernando@mitrai.com)
 * -----
 * Last Modified: Monday, 13th July 2020 1:43:51 pm
 * Modified By: Jude Fernando (jfernando@mitrai.com)
 * -----
 * Copyright 2020 - 2020 Mitra Innovation Ltd., Mitra Innovation Ltd.
 */

import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import './index.scss';

const ButtonRounded = (props) => {
  const { variant, link, eventKey, ...otherProps } = props;

  return (
    <React.Fragment>
      {link && (
        <Button as={Link} to={link} variant={`${variant} btn--rounded`} {...otherProps}>
          {props.children}
        </Button>
      )}
      {!link && (
        <Button variant={`${variant} btn--rounded`} {...otherProps}>
          {props.children}
        </Button>
      )}
    </React.Fragment>
  );
};

export default ButtonRounded;
