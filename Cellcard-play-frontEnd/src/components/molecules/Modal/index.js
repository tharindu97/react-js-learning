/*
 * Author: Buwaneka Sumanasekara (bsumanasekara@mitrai.com)
 * Date: Friday, 14th August 2020 7:49:50 am
 * Module: Cellcard Play Frontend
 * -----
 * Last Modified: Thursday, 27th August 2020 9:09:57 am
 * Modified By: Buwaneka Sumanasekara (bsumanasekara@mitrai.com>)
 * Copyright © 2020 Cellcard Play. All rights reserved.
 */
import React from 'react';
import { Modal } from 'react-bootstrap';
import Image from 'components/atoms/Image';
import Button from 'components/atoms/Button';
import Heading from 'components/atoms/Heading';
import './style.scss';

import clsx from 'clsx';

const MODAL_TYPE_ERROR = 'error';
const MODAL_TYPE_SUCCESS = 'success';
const MODAL_TYPE_SUCCESS_CHECK = 'success-check';
const MODAL_TYPE_PENDING = 'pending';

const CustomModal = (props) => {
  const {
    className,
    IconType,
    show,
    backdrop,
    onHide,
    ModalTitle,
    ModalBody,
    confirmTitle,
    cancelTitle,
    onConfirm,
    onCancel,
  } = props;
  return (
    <Modal
      className={clsx('custom-modal-default', 'px-4', className)}
      show={show}
      backdrop={backdrop}
      onHide={onHide}
      {...props.OtherProps}
      centered
    >
      <Modal.Body className={clsx('text-center', 'px-4')}>
        <Image
          source={'/images/modal/success.svg'}
          className={clsx('modal-icon', 'd-none', IconType === MODAL_TYPE_SUCCESS && 'd-inline')}
        />
        <Image
          source={'/images/modal/success-2.svg'}
          className={clsx(
            'modal-icon',
            'd-none',
            IconType === MODAL_TYPE_SUCCESS_CHECK && 'd-inline'
          )}
        />
        <Image
          source={'/images/modal/error-1.svg'}
          className={clsx('modal-icon', 'd-none', IconType === MODAL_TYPE_ERROR && 'd-inline')}
        />
        <Image
          source={'/images/modal/pending.svg'}
          className={clsx('modal-icon', 'd-none', IconType === MODAL_TYPE_PENDING && 'd-inline')}
        />

        {ModalTitle !== '' && (
          <Heading tag={'h3'} className={('modal-text-title', 'mb-2')}>
            {ModalTitle}
          </Heading>
        )}

        {ModalBody !== '' && (
          <Heading tag={'p'} className={'modal-text-body'}>
            {ModalBody}
          </Heading>
        )}
      </Modal.Body>
      <Modal.Footer>
        {confirmTitle !== '' && (
          <Button size="lg" rounded onClick={onConfirm} label={confirmTitle} />
        )}
        {cancelTitle !== '' && (
          <Button size="lg" variant={'link'} rounded onClick={onCancel} label={cancelTitle} />
        )}
      </Modal.Footer>
    </Modal>
  );
};

// Set default props
CustomModal.defaultProps = {
  className: [], //[] or string
  onHide: () => {},
  show: false,
  confirmTitle: '',
  cancelTitle: '',
  onConfirm: () => {},
  onCancel: () => {},
  backdrop: 'static',
  ModalTitle: '',
  ModalBody: '',
  IconType: MODAL_TYPE_SUCCESS,
};

export default CustomModal;
