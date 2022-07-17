/*
 * Author: Jude Fernando (jfernando@mitrai.com)
 * Date: Wednesday, 12th August 2020 11:32:10 am
 * Module: Cellcard Play Frontend
 * Copyright © 2020 Cellcard Play. All rights reserved.
 */
import React from 'react';
import './style.scss';
import { useTranslation } from 'react-i18next';
import Icon from 'components/atoms/Icon';
import { Link } from 'react-router-dom';

const ExclusiveOffersCta = (props) => {
  const { t } = useTranslation();
  return (
    <Link className="exclusive-offers-cta" {...props}>
      <div className="exclusive-offers-cta-image">
        <img
          src={`${process.env.REACT_APP_ASSESTS_URL}/Store/Exclusive_offer/exclusive+banner+img.png`}
          alt="exclusive-offers"
        />
      </div>
      <div className="exclusive-offers-cta-label">
        <div className="label-sub text-semibold">
          {t('EXCLUSIVE_BANNER_EXPLORE')}
        </div>
        <div className="label-main text-xxbold">
          {t('GP_EXCLUSIVEOFFERS_TITLE')}
        </div>
      </div>
      <div className="exclusive-offers-cta-icon">
        <Icon icon="chevron_right" />
      </div>
    </Link>
  );
};

export default ExclusiveOffersCta;
