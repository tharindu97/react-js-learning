/*
 * File: index.js
 * Project: cellcard-play-pwa
 * Author: Dilum Sanjaya (dranasinghe@mitrai.com)
 * File Created: Friday, 01st October 2020 08:01 am
 * Module: Cellcard Play Frontend
 * Copyright 2020 - 2020 Mitra Innovation Ltd., Mitra Innovation Ltd.
 */
import React from 'react';
import Typography from 'components/atoms/Typography';
import { NOTIFICATION_TABS } from 'constants/Globals';
import { NOTIFICATIONS_FORYOU, NOTIFICATIONS_MESSAGES } from 'constants/Images';
import { useTranslation } from 'react-i18next';
import './style.scss';

const EmpltyList = ({ tab }) => {
  const { t } = useTranslation();
  const isExternal = tab === NOTIFICATION_TABS.EXTERNAL;
  return (
    <div className="notifications-empty-list-container">
      <div>
        <img
          src={
            isExternal ? NOTIFICATIONS_FORYOU.src : NOTIFICATIONS_MESSAGES.src
          }
          alt={
            isExternal ? NOTIFICATIONS_FORYOU.alt : NOTIFICATIONS_MESSAGES.alt
          }
          className="notifications-empty-list-image"
        />
        <Typography
          value={
            isExternal
              ? t('GP_SYSTEMMESSAGES_NOMESSAGES_TITLE')
              : t('GP_SYSTEMMESSAGES_NOPERSONALIZEDNOTIFS_TITLE')
          }
          color="white"
          variant="h3"
          weight="semi-bold"
          component="h3"
          className="px-5 mt-3"
          textCenter
        />

        <Typography
          value={
            isExternal
              ? t('GP_SYSTEMMESSAGES_NOMESSAGES_DESCRIPTION')
              : t('GP_SYSTEMMESSAGES_NOPERSONALIZEDNOTIFS_DESCRIPTION')
          }
          color="gray-3"
          variant="body"
          weight="regular"
          component="div"
          className="px-5 mt-3"
          textCenter
        />
      </div>
    </div>
  );
};

export default EmpltyList;
