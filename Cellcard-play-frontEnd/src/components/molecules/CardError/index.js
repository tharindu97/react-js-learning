/*
 * Author: Jerobert (zjerobert@mitrai.com)
 * Date: Tuesday, 8th August 2020 10.00 am
 * Module: Cellcard Play Frontend
 * Copyright © 2020 Cellcard Play. All rights reserved.
 */
import React from 'react';
import './style.scss';

const CardError = ({ title, children }) => {
  return (
    <div className="card-error">
      <div className="card-error-title">{title}</div>
      <div className="card-error-body">{children}</div>
    </div>
  );
};

export default CardError;
