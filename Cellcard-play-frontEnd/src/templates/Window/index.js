/*
 * File: index.js
 * Project: cellcard-play-pwa
 * Author: Dilum Sanjaya (dranasinghe@mitrai.com)
 * File Created: Tuesday, 29th September 2020 03:04 pm
 * Module: Cellcard Play Frontend
 * Copyright 2020 - 2020 Mitra Innovation Ltd., Mitra Innovation Ltd.
 */
import React from 'react';
import clsx from 'clsx';
import './style.scss';

const Window = ({ children, className }) => {
  return <div className={clsx('template-window', className)}>{children}</div>;
};

export default Window;
