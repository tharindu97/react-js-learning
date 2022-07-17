/*
 * File: index.js
 * Project: cellcard-play-pwa
 * Author: Dilum Sanjaya (dranasinghe@mitrai.com)
 * Copyright 2020 - 2020 Mitra Innovation Ltd., Mitra Innovation Ltd.
 */
import React from 'react';
import Typography from 'components/atoms/Typography';
import i18next from 'i18next';
import _ from 'lodash';
import { useTranslation } from 'react-i18next';

import { toDateString, toTimeString } from 'utils/timeOps';
import './style.scss';

const NotificationsItem = ({ item }) => {
  const { content, imageUrl, date } = item;
  const currentLanguage = i18next.language;
  const { t } = useTranslation();

  return (
    <div className="overflow-hidden mb-2 bg-gray-2 border-10 ">
      {/* {image && <img alt="alt" src="/images/placeholder.jpg" />} */}
      <div className="p-3 ">
        <Typography
          value={_.get(content, `${currentLanguage}.title`)}
          color="white"
          variant="h2"
          weight="semi-bold"
          component="h2"
          className="mt-1"
        />
        <Typography
          value={`${toDateString(t, date)} . ${toTimeString(date)}`}
          color="gray"
          variant="sub1"
          weight="regular"
          component="div"
          className="mt-1"
        />
        <Typography
          value={_.get(content, `${currentLanguage}.desc`)}
          color="gray-3"
          variant="body"
          weight="regular"
          component="div"
          className="mt-1"
        />
      </div>
    </div>
  );
};

export default NotificationsItem;
