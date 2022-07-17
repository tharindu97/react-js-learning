/*
 * Author: Dilum Sanjaya (dranasinghe@mitrai.com)
 * Date: Friday 31 July 2020 5:00:00 pm
 * Module: Cellcard Play Frontend
 * Copyright © 2020 Cellcard Play. All rights reserved.
 */

import React from 'react';
import clsx from 'clsx';
import './style.scss';

const Card = ({ children, removePadding }) => {
  return <div className={clsx('card', !removePadding && 'card-padded')}>{children}</div>;
};

export default Card;
