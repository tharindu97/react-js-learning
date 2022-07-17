/*
 * File: index.js
 * Project: cellcard-play-pwa
 * Author: Dilum Sanjaya (dranasinghe@mitrai.com)
 * File Created: Tuesday, 22nd September 2020 02:37 pm
 * Module: Cellcard Play Frontend
 * Copyright 2020 - 2020 Mitra Innovation Ltd., Mitra Innovation Ltd.
 */

import React from 'react';
import Typography from 'components/atoms/Typography';
import clsx from 'clsx';
import {
  REFERRAL_STEP_1,
  REFERRAL_STEP_2,
  REFERRAL_STEP_3,
} from 'constants/Images';
import { useTranslation } from 'react-i18next';
import './style.scss';

const Header = () => {
  const { t } = useTranslation();
  const steps = [
    { id: 1, image: REFERRAL_STEP_1, text: t('GP_REFERRAL_INSTRUCTION_ONE') },
    { id: 2, image: REFERRAL_STEP_2, text: t('GP_REFERRAL_INSTRUCTION_TWO') },
    { id: 3, image: REFERRAL_STEP_3, text: t('GP_REFERRAL_INSTRUCTION_THREE') },
  ];
  return (
    <div className="d-flex pb-3 mt-2">
      {steps.map((step, index) => (
        <div
          className={clsx(
            'w-33',
            'px-2',
            'referrals-head-image-container',
            index === 1 && 'referrals-head-dual-border',
          )}
          key={step.id}
        >
          <div className="referrals-head-step-indicator">
            <div className="">{index + 1}</div>
          </div>
          <img
            src={`${process.env.REACT_APP_ASSESTS_URL}${step.image.src}`}
            alt={step.image.src}
            style={{ width: '80%' }}
          />
          <Typography
            value={step.text}
            color="cellcard"
            variant="sub1"
            weight="regular"
            component="div"
          />
        </div>
      ))}
    </div>
  );
};

export default Header;
