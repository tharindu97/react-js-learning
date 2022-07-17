import React from 'react';
/*
 * Author: Jerobert (zjerobert@mitrai.com)
 * Date: Monday, 27 July 2020 12.30 pm
 * Module: Cellcard Play Frontend
 * Copyright © 2020 Cellcard Play. All rights reserved.
 */
import './style.scss';

const BoxTitle = (props) => {
  return (
    <div className="title-box">
      <div className="title-box-header">
        <h3>{props.title}</h3>
      </div>
      <hr className="title-box-divider" />
      <div className="title-box-content">{props.children}</div>
    </div>
  );
};

export default BoxTitle;
