/*
 * File: index.js
 * Project: cellcard-play-pwa
 * File Created: Wednesday, 22th July 2020 1.30 pm
 * Author: Jerobert (zjerobert@mitrai.com)
 * Copyright 2020 - 2020 Mitra Innovation Ltd., Mitra Innovation Ltd.
 */
import React from 'react';
import './style.scss';
import { useTranslation } from 'react-i18next';

const Copyright = () => {
  const { t } = useTranslation();
  return (
    <React.Fragment>
      <p className="para-copyright">
        {t('GP_ABOUT_COPYRIGHTS_P1')} {new Date().getFullYear()} {t('GP_ABOUT_COPYRIGHTS_P2')} |
        Version {process.env.REACT_APP_VERSION}
      </p>
    </React.Fragment>
  );
};

export default Copyright;
