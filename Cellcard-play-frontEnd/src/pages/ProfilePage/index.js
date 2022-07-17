/*
 * Author: Jude Fernando (jfernando@mitrai.com)
 * Date: Tuesday, 21st July 2020 1:18:13 pm
 * Module: Cellcard Play Frontend
 * -----
 * Last Modified: Friday 31 July 2020 5:00:00 pm
 * Modified By: Dilum Sanjaya (dranasinghe@mitrai.com)
 * -----
 * Copyright © 2020 Cellcard Play. All rights reserved.
 */

import React, { useEffect, useState, useContext } from 'react';
import { useTranslation } from 'react-i18next';

import MembershipCard from 'components/organisms/profile/MembershipCard';
import Vouchers from 'components/organisms/profile/Vouchers';
import PlayPoints from 'components/organisms/profile/PlayPoints';
import Staticstics from 'components/organisms/profile/Staticstics';
import MainBalance from 'components/organisms/profile/MainBalance';
import BuyUnlimited from 'components/organisms/profile/BuyUnlimited';
import Referral from 'components/organisms/profile/Referral';
import { getMsisdn } from 'utils/authUtils';
import { Spinner } from 'react-bootstrap';
import {
  SUBSCRIBE_TO_PLAY_MEMBERSHIP_FOR_SELF,
  VIEW_MAIN_BALANCE_DETAILS,
} from 'constants/Authorization';

import api from 'api';
import { UserContext } from 'providers/User';
import LoggedinTemplate from '../../templates/LoggedinTemplate';

const ProfilePage = () => {
  const [profileDetails, onProfileDetailsLoad] = useState({ loading: true });
  const { user } = useContext(UserContext);
  const canViewPlan = user.isAuthorizedTo(
    SUBSCRIBE_TO_PLAY_MEMBERSHIP_FOR_SELF,
  );
  const canViewBalance = user.isAuthorizedTo(VIEW_MAIN_BALANCE_DETAILS);
  const { t } = useTranslation();

  useEffect(() => {
    async function fetchData() {
      try {
        const [accountDetails, userDetails, planSummary] = await Promise.all([
          canViewBalance
            ? api.account.getAccountDetails()
            : Promise.resolve({}),
          api.points.getPoints(),
          canViewPlan ? api.plans.getPlanSummary() : Promise.resolve({}),
        ]);
        onProfileDetailsLoad({
          loading: false,
          account: accountDetails.data,
          user: userDetails.data,
          plan: planSummary.data,
        });
      } catch (error) {}
    }
    fetchData();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <LoggedinTemplate title={t('GP_CELLCARDPROFILE_TITLE')} active="me">
      {profileDetails.loading ? (
        <div className=" d-flex justify-content-center p-5 vh-100">
          <Spinner animation="border" variant="primary" />
        </div>
      ) : (
        <div className="px-3">
          <MembershipCard profileDetails={profileDetails} />
          <Referral />
          <Vouchers />
          <PlayPoints profileDetails={profileDetails} />
          {canViewPlan && profileDetails.plan && (
            <Staticstics profileDetails={profileDetails} />
          )}
          {canViewBalance && <MainBalance profileDetails={profileDetails} />}
          <BuyUnlimited forFriend={!canViewPlan || profileDetails.plan} />
        </div>
      )}
    </LoggedinTemplate>
  );
};

export default ProfilePage;
