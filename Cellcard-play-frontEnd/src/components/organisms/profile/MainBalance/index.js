/*
 * Author: Dilum Sanjaya (dranasinghe@mitrai.com)
 * Date: Friday 31 July 2020 5:00:00 pm
 * Module: Cellcard Play Frontend
 * Copyright © 2020 Cellcard Play. All rights reserved.
 */

import React from 'react';
import ProfileCard from 'components/organisms/profile/ProfileCard';
import { ROUTE_STORE_PRODUCT } from 'constants/Routes';
import { PRODUCT_MOBILE_TOPUP } from 'constants/NamedProducts';
import { useTranslation } from 'react-i18next';
import './style.scss';

const Vouchers = ({ profileDetails }) => {
  const { balance, isExpired } = profileDetails.account;
  const { t } = useTranslation();
  return (
    <ProfileCard
      title={t('GP_CELLCARDPROFILE_MAINBALTITLE')}
      btnText={t('GP_CELLCARDPROFILE_MAINBALBUYTOPUP')}
      link={`${ROUTE_STORE_PRODUCT.replace(':code', PRODUCT_MOBILE_TOPUP)}`}
    >
      <div className="text-gray">
        <h3 className="text-white">${balance}</h3>
        {isExpired && (
          <div className="text-red-1">
            {t('GP_CELLCARDPROFILE_MSISDNINACTIVE')}
          </div>
        )}
      </div>
    </ProfileCard>
  );
};

export default Vouchers;
