/*
 * File: index.js
 * Project: cellcard-play-pwa
 * File Created: Wednesday, 22nd July 2020 1:00 pm
 * Author: Jerobert (zjerobert@mitrai.com)
 * Copyright 2020 - 2020 Mitra Innovation Ltd., Mitra Innovation Ltd.
 */
import React from 'react';
import './style.scss';
import HeadingMain from 'components/atoms/HeadingMain';
import Typography from 'components/atoms/Typography';
import { useTranslation } from 'react-i18next';
import { Spacer } from '../../atoms/Spacer';

const HeroContent = (props) => {
  const { t } = useTranslation();
  return (
    <div className="hero-content">
      <Typography
        value={t('GP_PLANS_ALLYOUCANPLAY')}
        color="white"
        variant="h0"
        weight="extra-bold"
        component="div"
        className="px-3 mb-2"
      />
      <Typography
        value={t('GP_PLANS_UNLIMITEDHIGHSPEEDDATA')}
        color="gray"
        variant="body"
        weight="semi-bold"
        component="div"
        className="mb-2 px-3"
      />
      <Typography
        value={t('GP_PLANS_PUBGMOBILELEGENDS')}
        color="white"
        variant="body"
        weight="regular"
        component="div"
        className="mb-3 px-3"
      />
      {props.children}
    </div>
  );
};

export default HeroContent;
