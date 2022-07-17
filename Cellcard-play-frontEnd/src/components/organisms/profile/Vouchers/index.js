/*
 * Author: Dilum Sanjaya (dranasinghe@mitrai.com)
 * Date: Friday 31 July 2020 5:00:00 pm
 * Module: Cellcard Play Frontend
 * Copyright © 2020 Cellcard Play. All rights reserved.
 */

import React from 'react';
import ProfileCard from 'components/organisms/profile/ProfileCard';
import { useTranslation } from 'react-i18next';
import { ROUTE_VOUCHER_LIST } from 'constants/Routes';

import './style.scss';

const Vouchers = () => {
  const { t } = useTranslation();
  return (
    <ProfileCard
      title={t('GP_NONCELLCARDPROFILE_MYVOUCHERSTITLE')}
      btnText={t('GP_NONCELLCARDPROFILE_MYVOUCHERSACTION')}
      icon={`${process.env.REACT_APP_ASSESTS_URL}/me_icons/Vouchers.png`}
      link={ROUTE_VOUCHER_LIST}
    >
      <div className="vouchers">
        {t('GP_NONCELLCARDPROFILE_MYVOUCHERSDESC')}
      </div>
    </ProfileCard>
  );
};

export default Vouchers;
