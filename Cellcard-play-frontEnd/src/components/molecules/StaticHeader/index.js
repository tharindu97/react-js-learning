/*
 * Author: Jude Fernando (jfernando@mitrai.com)
 * Date: Tuesday, 21st July 2020 1:39:16 pm
 * Module: Cellcard Play Frontend
 * Copyright © 2020 Cellcard Play. All rights reserved.
 */

import React from 'react';
import HeadingThree from '../../atoms/HeadingThree';
import './style.scss';

const StaticHeader = (props) => {
  const { title } = props;
  return (
    <div className="static-header">
      <HeadingThree className="text-center">{title}</HeadingThree>
    </div>
  );
};

export default StaticHeader;
