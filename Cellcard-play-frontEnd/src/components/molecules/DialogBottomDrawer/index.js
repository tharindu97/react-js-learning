/* eslint-disable jsx-a11y/control-has-associated-label */
/*
 * Author: jerobert (zjerobert@mitrai.com)
 * Date: Friday 14th AUGUST 2020 13:00:00 pm
 * Module: Cellcard Play Frontend
 * Copyright © 2020 Cellcard Play. All rights reserved.
 */

import React from 'react';
import clsx from 'clsx';
import ActionItem from 'components/atoms/ActionItem';
import './style.scss';

const DialogBottomDrawer = (props) => {
  const { title, subTitle, buttonTitle, onConfirm, onClose, show } = props;

  return (
    <>
      <div
        className={clsx('backdrop', 'pb-4', show && 'backdrop-show')}
        onClick={onClose}
        role="button"
        tabIndex={0}
        onKeyDown={onClose}
      />
      <div className={clsx('dialog-logout', show && 'dialog-logout-show')}>
        <div className="dialog-logout-body">
          <h2 className="dialog-logout-body-title-main">{title}</h2>
          <h3 className="dialog-logout-body-title-sub">{subTitle}</h3>

          <ActionItem
            variant="body"
            weight="semi-bold"
            rounded
            block
            className=".h-48"
            value={buttonTitle}
            onClick={() => onConfirm()}
          />
        </div>
      </div>
    </>
  );
};

export default DialogBottomDrawer;
