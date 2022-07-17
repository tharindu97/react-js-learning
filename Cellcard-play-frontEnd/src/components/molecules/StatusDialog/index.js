/*
 * Author: Buwaneka Sumanasekara (bsumanasekara@mitrai.com)
 * Date: Thursday, 27th August 2020 9:25:26 am
 * Module: Cellcard Play Frontend
 * -----
 * Last Modified: Thursday, 27th August 2020 12:04:05 pm
 * Modified By: Buwaneka Sumanasekara (bsumanasekara@mitrai.com>)
 * Copyright © 2020 Cellcard Play. All rights reserved.
 */

import React from 'react';
import Heading from 'components/atoms/Heading';
import Button from 'components/atoms/Button';
import Image from 'components/atoms/Image';
import Globals from 'constants/Globals';
import clsx from 'clsx';

import './style.scss';

const { ModalTypes } = Globals;
const renderDialogIcon = (props) => {
  const { IconType } = props;
  return (
    <>
      <Image
        source="/images/modal/success.svg"
        className={clsx(
          'modal-icon',
          'd-none',
          IconType === ModalTypes.MODAL_TYPE_SUCCESS && 'd-inline',
        )}
      />
      <Image
        source="/images/modal/success-2.svg"
        className={clsx(
          'modal-icon',
          'd-none',
          IconType === ModalTypes.MODAL_TYPE_SUCCESS_CHECK && 'd-inline',
        )}
      />
      <Image
        source="/images/modal/error-1.svg"
        className={clsx(
          'modal-icon',
          'd-none',
          IconType === ModalTypes.MODAL_TYPE_ERROR && 'd-inline',
        )}
      />
      <Image
        source="/images/modal/pending.svg"
        className={clsx(
          'modal-icon',
          'd-none',
          IconType === ModalTypes.MODAL_TYPE_PENDING && 'd-inline',
        )}
      />
    </>
  );
};
const StatusDialog = (props) => {
  const {
    show,
    confirmTitle = '',
    onClickConfirm,
    cancelTitle = '',
    onClickCancel,
    Title = '',
    Body = '',
  } = props;
  return (
    <div
      className={clsx(
        `status-dialog  ${show ? 'active' : 'inactive'} 'fade'`,
        'vh-100',
        'px-3',
        'py-3',
      )}
    >
      <div className="status-dialog-body">
        <div className={clsx('top', 'text-center')}>
          {renderDialogIcon(props)}

          <Heading
            tag="h3"
            className={clsx('status-dialog-body-text-title', 'pb-2')}
          >
            {Title}
          </Heading>
          <Heading
            tag="p"
            className={clsx('status-dialog-body-text-body', 'py-2')}
          >
            {Body}
          </Heading>
        </div>
        <div className={clsx('bottom')}>
          {confirmTitle !== '' && (
            <Button
              size="lg"
              label={confirmTitle}
              onClick={onClickConfirm}
              rounded
              block
            />
          )}
          {cancelTitle !== '' && (
            <Button
              size="lg"
              label={cancelTitle}
              className="btn-second"
              onClick={onClickCancel}
              rounded
              block
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default StatusDialog;
