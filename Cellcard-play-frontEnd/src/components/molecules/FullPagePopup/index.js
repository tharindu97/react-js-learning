/*
 * File: index.js
 * Project: cellcard-play-pwa
 * Author: Dilum Sanjaya (dranasinghe@mitrai.com)
 * File Created: Monday, 31st August 2020 05:57 pm
 * Module: Cellcard Play Frontend
 * Copyright 2020 - 2020 Mitra Innovation Ltd., Mitra Innovation Ltd.
 */
import React from 'react';
import Icon from 'components/atoms/Icon';
import Typography from 'components/atoms/Typography';
import { useTranslation } from 'react-i18next';
import Globals from 'constants/Globals';
import clsx from 'clsx';

import './style.scss';

const FullPagePopup = ({ type, onClose }) => {
  const { t } = useTranslation();
  const isTerms = type === Globals.FullPagePopupTypes.TERMS_CONDITIONS;
  const items = t(
    isTerms
      ? 'GP_INFORMATION_TERMSANDCONDITIONS'
      : 'GP_INFORMATION_PRIVACYPOLICY',
  ).split(isTerms ? '\n' : '<br/>');
  const TitleTranslationKey = isTerms
    ? 'GP_BUY_TERMSCONDITIONS'
    : 'GP_BUY_PRIVACYPOLICY';

  return (
    <div className={clsx('full-page-popup', type && 'full-page-popup-show')}>
      <div className="px-3 pt-2">
        <div className="d-flex justify-content-between align-items-center">
          <div
            className=""
            style={{ fontSize: '24px' }}
            role="button"
            onClick={onClose}
            onKeyDown={onClose}
            tabIndex={0}
          >
            <Icon icon="times" />
          </div>
          <Typography
            value={t(TitleTranslationKey)}
            color="white"
            variant="h2"
            weight="semi-bold"
            component="h2"
          />
          <div className="" />
        </div>
        <div className="mt-3">
          {items.map((item) => (
            <div className="mt-1" key={item}>
              <Typography
                value={item}
                color="gray"
                variant="body"
                weight="regular"
                component="p"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FullPagePopup;
