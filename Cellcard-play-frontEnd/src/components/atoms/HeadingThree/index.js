/*
 * Author: Jude Fernando (jfernando@mitrai.com)
 * Date: Tuesday, 21st July 2020 1:24:04 pm
 * Module: Cellcard Play Frontend
 * Copyright © 2020 Cellcard Play. All rights reserved.
 */

import React from 'react';

export default function HeadingThree(props) {
  const { children, ...otherProps } = props;
  return <h3 {...otherProps}>{children}</h3>;
}
