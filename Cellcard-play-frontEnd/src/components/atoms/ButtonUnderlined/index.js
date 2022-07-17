/*
 * Author: Dilum Sanjaya (dranasinghe@mitrai.com)
 * Date: Tuesday 4th AUGUST 2020 9:00:00 am
 * Module: Cellcard Play Frontend
 * Copyright © 2020 Cellcard Play. All rights reserved.
 */

import React from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

import './style.scss';

const ButtonUnderlined = (props) => {
  const { link, className, ...otherProps } = props;
  return (
    <>
      {link ? (
        <Link to={link}>
          <button
            type="button"
            {...otherProps}
            className={clsx('button-underlined', className)}
          >
            {props.children}
          </button>
        </Link>
      ) : (
        <button
          type="button"
          {...otherProps}
          className={clsx('button-underlined', className)}
        >
          {props.children}
        </button>
      )}
    </>
  );
};

export default ButtonUnderlined;
