/*
 * File: index.js
 * Project: cellcard-play-pwa
 * Author: Dilum Sanjaya (dranasinghe@mitrai.com)
 * Copyright 2020 - 2020 Mitra Innovation Ltd., Mitra Innovation Ltd.
 */
import React from 'react';
import Modal from 'components/molecules/Modal';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';

const Error = () => {
  const { t } = useTranslation();
  const history = useHistory();

  return (
    <Modal
      show
      confirmTitle={t('GP_SYSTEMMESSAGES_OKAY')}
      onConfirm={() => {
        history.replace('/');
      }}
      ModalTitle="Oops… something is not right"
      ModalBody="Message explaining the error. Default would be “We are experiencing technical issues, some features are not available at the moment.” "
      IconType="error"
    />
  );
};

export default Error;
