/*
 * Author: jerobert (zjerobert@mitrai.com)
 * Date: Friday 26th AUGUST 2020 11:00:00 am
 * Module: Cellcard Play Frontend
 * Copyright © 2020 Cellcard Play. All rights reserved.
 */

import React from 'react';
import clsx from 'clsx';
import ActionItem from 'components/atoms/ActionItem';
import './style.scss';

const DialogFullDrawer = (props) => {
  const { children, buttonTitle, onClose, show } = props;

  return (
    <div className={clsx('dialog-full', show && 'dialog-full-show')}>
      <div className="dialog-full-top">{children}</div>
      <div className="dialog-full-bottom">
        <ActionItem
          variant="body"
          weight="semi-bold"
          rounded
          block
          className=".h-48"
          value={buttonTitle}
          onClick={onClose}
        />
      </div>
    </div>
  );
};

export default DialogFullDrawer;
