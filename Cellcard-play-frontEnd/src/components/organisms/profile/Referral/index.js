/*
 * File: index.js
 * Project: cellcard-play-pwa
 * Author: Dilum Sanjaya (dranasinghe@mitrai.com)
 * Copyright 2020 - 2020 Mitra Innovation Ltd., Mitra Innovation Ltd.
 */
import React from 'react';
import ProfileCard from 'components/organisms/profile/ProfileCard';
import { ROUTE_REFERRAL_DETAILS } from 'constants/Routes';
import { REFER_FRIEND } from 'constants/Images';
import { useTranslation } from 'react-i18next';

const Referral = () => {
  const { t } = useTranslation();
  return (
    <ProfileCard
      title={t('GP_REFERRAL_PROFILE_TELLAFRIEND')}
      btnText={t('GP_REFERRAL_PROFILE_REFERFRIENDS')}
      icon={`${process.env.REACT_APP_ASSESTS_URL}${REFER_FRIEND.src}`}
      link={ROUTE_REFERRAL_DETAILS}
    >
      <div className="vouchers">{t('GP_REFERRAL_PROFILE_EARNREWARDS')}</div>
    </ProfileCard>
  );
};

export default Referral;
