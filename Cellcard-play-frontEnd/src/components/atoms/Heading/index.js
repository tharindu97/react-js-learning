/*
 * Author: Buwaneka Sumanasekara (bsumanasekara@mitrai.com)
 * Date: Monday, 10th August 2020 7:33:21 pm
 * Module: Cellcard Play Frontend
 * Copyright © 2020 Cellcard Play. All rights reserved.
 */

import React from 'react';
import './style.scss';
import clsx from 'clsx';

const Heading = ({ tag: Tag, className, children }) => (
  <Tag className={clsx('heading-default', className)}>{children}</Tag>
);

// Set default props
Heading.defaultProps = {
  tag: 'h1',
  className: [],
  center: false,
};

export default Heading;
