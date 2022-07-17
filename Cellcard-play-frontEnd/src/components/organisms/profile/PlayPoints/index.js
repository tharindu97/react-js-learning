/*
 * Author: Dilum Sanjaya (dranasinghe@mitrai.com)
 * Date: Friday 31 July 2020 5:00:00 pm
 * Module: Cellcard Play Frontend
 * Copyright © 2020 Cellcard Play. All rights reserved.
 */

import React from 'react';
import ProfileCard from 'components/organisms/profile/ProfileCard';
import { ROUTE_ME_PLAYPOINTS, ROUTE_PLAYPOINTS } from 'constants/Routes';
import { useTranslation } from 'react-i18next';
import './style.scss';

const PlayPoints = ({ profileDetails }) => {
  const { t } = useTranslation();
  return (
    <ProfileCard
      title={t('GP_NONCELLCARDPROFILE_PLAYPOINTSTITLE')}
      subTitle={profileDetails.user.points.toLocaleString()}
      btnText={t('GP_NONCELLCARDPROFILE_PLAYPOINTSACTIONTWO')}
      subButtonText={t('GP_NONCELLCARDPROFILE_PLAYPOINTSACTIONONE')}
      icon={`${process.env.REACT_APP_ASSESTS_URL}/me_icons/MyPlayPoints.png`}
      link={{
        pathname: ROUTE_PLAYPOINTS,
        state: { from: '/profile' },
      }}
      subLink={{
        pathname: ROUTE_ME_PLAYPOINTS,
        state: { from: '/profile' },
      }}
    >
      <div className="play-points">
        {t('GP_NONCELLCARDPROFILE_PLAYPOINTSDESC')}
      </div>
    </ProfileCard>
  );
};

export default PlayPoints;
