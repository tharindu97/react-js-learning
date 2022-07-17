/*
 * File: index.js
 * Project: cellcard-play-pwa
 * File Created: Monday, 13th July 2020 12:34:27 pm
 * Author: Jude Fernando (jfernando@mitrai.com)
 * -----
 * Last Modified: Monday, 13th July 2020 1:19:42 pm
 * Modified By: Jude Fernando (jfernando@mitrai.com)
 * -----
 * Copyright 2020 - 2020 Mitra Innovation Ltd., Mitra Innovation Ltd.
 */

import React from 'react';
import ActionItem from 'components/atoms/ActionItem';
import './index.scss';
import GEvent from 'components/atoms/GEvent';

const ConfirmAlert = (props) => {
  const {
    show,
    onConfirm,
    title,
    children,
    buttonTitle,
    gtmEvent,
    gtmPayload = {},
  } = props;
  const showClass = show ? 'active' : 'inactive';
  const GTMWrapper = ({ children }) => {
    if (gtmEvent) {
      return (
        <GEvent event={gtmEvent} payload={gtmPayload}>
          {children}
        </GEvent>
      );
    }
    return <>{children}</>;
  };
  return (
    <div className={`confirm-alert ${showClass}`}>
      <div className="confirm-alert-dialog">
        <div className="confirm-alert-title">{title || 'Confirmation'}</div>
        <div className="confirm-alert-body">{children}</div>
        <div className="confirm-alert-footer">
          <GTMWrapper>
            <ActionItem
              variant="body"
              weight="semi-bold"
              rounded
              block
              className=".h-48"
              value={buttonTitle || 'Confirm'}
              onClick={onConfirm}
            />
          </GTMWrapper>
        </div>
      </div>
    </div>
  );
};

export default ConfirmAlert;
