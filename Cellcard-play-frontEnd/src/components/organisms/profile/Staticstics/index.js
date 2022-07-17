/*
 * Author: Dilum Sanjaya (dranasinghe@mitrai.com)
 * Date: Friday 31 July 2020 5:00:00 pm
 * Module: Cellcard Play Frontend
 * Copyright © 2020 Cellcard Play. All rights reserved.
 */

import React from 'react';
import Card from 'components/atoms/Card';
import HorizontalImageSet from 'components/molecules/HorizontalImageSet';
import { useTranslation } from 'react-i18next';
import AccountTypes from 'constants/AccountTypes';
import _ from 'lodash';
import Typography from 'components/atoms/Typography';
import UsageItem from '../UsageItem';
import './style.scss';

const Summary = ({ profileDetails }) => {
  const images = [
    `${process.env.REACT_APP_ASSESTS_URL}/UnlimitedGaming_Logos/PUBGM.png`,
    `${process.env.REACT_APP_ASSESTS_URL}/UnlimitedGaming_Logos/MLLBB.png`,
    `${process.env.REACT_APP_ASSESTS_URL}/UnlimitedGaming_Logos/RoS.png`,
  ];
  const { plan } = profileDetails;
  const { t } = useTranslation();
  return (
    <Card removePadding>
      {[AccountTypes.INACTIVE, AccountTypes.TO_BE_DELETED].includes(
        _.get(profileDetails, 'account.status'),
      ) && (
        <Typography
          translationKey="GP_VOUCHERS_INACTIVE"
          color="white"
          variant="sub1"
          weight="semi-bold"
          component="div"
          textCenter
          className="bg-red-1 py-2 text-uppercase"
        />
      )}
      <div className="summary">
        <div className="summary-header">
          <div className="summary-header-title">
            {t('GP_PLANS_UNLIMITEDHIGHSPEEDDATA')}
          </div>
          <div className="summary-header-images">
            <HorizontalImageSet images={images} />
          </div>
        </div>
        {plan.usages.map((usage) => (
          <UsageItem key={usage.code} data={usage} />
        ))}
      </div>
    </Card>
  );
};

export default Summary;
