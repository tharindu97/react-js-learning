/* eslint-disable jsx-a11y/anchor-is-valid */
/*
 * Author: Jude Fernando (jfernando@mitrai.com)
 * Date: Wednesday, 22nd July 2020 1:13:14 pm
 * Module: Cellcard Play Frontend
 * Copyright © 2020 Cellcard Play. All rights reserved.
 */

import React from 'react';
import clsx from 'clsx';
import './style.scss';
import { Spinner } from 'react-bootstrap';
import ActionItem from 'components/atoms/ActionItem';
import Icon from '../../atoms/Icon';
import HeadingThree from '../../atoms/HeadingThree';
import Button from '../../atoms/Button';

const DialogBox = (props) => {
  const {
    show,
    title,
    children,
    onSubmit,
    submitTitle,
    onClose,
    loading,
    hideFooter,
    hideHeader = false,
    hideClose = false,
    backDropEnable = false,
    icon = 'times',
    style = {},
    className = '',
    btnSq,
  } = props;

  return (
    <div
      className={clsx(
        `dialog-box ${show ? 'active' : 'inactive'} 'fade' ${
          loading ? 'loading' : ''
        }`,
        className,
      )}
      onClick={backDropEnable ? onClose : () => {}}
      role="button"
      tabIndex={0}
      onKeyDown={() => {}}
    >
      <div className="dialog-box-wrapper" style={style}>
        {loading && (
          <div className="loader-spinner">
            <Spinner animation="border" variant="primary" />
          </div>
        )}
        {!hideHeader && (
          <div className="dialog-box-header">
            {!hideClose && (
              <a
                onClick={onClose}
                className="dialog-box-header-close"
                tabIndex={0}
                onKeyDown={() => {}}
                role="button"
              >
                <Icon icon={icon} />
              </a>
            )}
            <HeadingThree>{title}</HeadingThree>
          </div>
        )}
        <div className="dialog-box-body">{children}</div>
        {!hideFooter && (
          <div className={clsx(!btnSq && 'pb-4 px-3 pt-3')}>
            <ActionItem
              variant="body"
              weight="semi-bold"
              rounded={!btnSq}
              block
              disabled={!onSubmit}
              className=".h-48"
              value={submitTitle}
              onClick={onSubmit}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default DialogBox;
