/*
 * File: index.js
 * Project: cellcard-play-pwa
 * Author: Dilum Sanjaya (dranasinghe@mitrai.com)
 * Copyright 2020 - 2020 Mitra Innovation Ltd., Mitra Innovation Ltd.
 */
import React, { useEffect, useRef } from 'react';
import './style.scss';
import Icon from 'components/atoms/Icon';
import Typography from 'components/atoms/Typography';
import { Spinner } from 'react-bootstrap';
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from 'body-scroll-lock';
import clsx from 'clsx';

const Dialog = (props) => {
  const { show, onClose, loading, title } = props;
  const elm = useRef();

  useEffect(() => {
    if (show) {
      disableBodyScroll(elm.current);
    } else {
      enableBodyScroll(elm.current);
    }
  }, [show]);

  useEffect(
    () => () => {
      clearAllBodyScrollLocks();
    },
    [],
  );

  return (
    <>
      <div
        className={clsx(
          'generic-dialog-backdrop',
          show && 'generic-dialog-backdrop-show',
        )}
        ref={elm}
      />
      <div
        className={clsx(
          'generic-dialog-body',
          show && 'generic-dialog-body-show',
        )}
      >
        <div className="generic-dialog-box">
          <div className="d-flex align-items-center generic-dialog-header">
            <div
              className="generic-dialogue-action-item"
              tabIndex="0"
              role="button"
              aria-pressed="false"
              onClick={onClose}
            >
              <Icon icon="times" />
            </div>
            <Typography
              value={title}
              color="white"
              variant="h2"
              weight="semi-bold"
              component="h2"
              textCenter
              className="flex-grow-1"
            />
            <div className="generic-dialogue-action-item" />
          </div>
          {props.children}
          {loading && (
            <div className="generic-dialog-spinner">
              <Spinner animation="border" variant="primary" />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Dialog;
