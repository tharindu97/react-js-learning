/*
 * File: index.js
 * Project: cellcard-play-pwa
 * Author: Dilum Sanjaya (dranasinghe@mitrai.com)
 * File Created: Friday, 25th September 2020 00:44 am
 * Module: Cellcard Play Frontend
 * Copyright 2020 - 2020 Mitra Innovation Ltd., Mitra Innovation Ltd.
 */

import { getToken, getMsisdn } from 'utils/authUtils';
import { toQuery } from 'utils/helpers';

export default (axios, base) => ({
  getNotifications: (params) => {
    axios.defaults.headers.common.Authorization = `Bearer ${getToken()}`;
    return axios.get(
      `/notifications/${getMsisdn()}/notification${toQuery(params)}`,
    );
  },
  getNotificationStatus: () => {
    axios.defaults.headers.common.Authorization = `Bearer ${getToken()}`;
    return axios.get(`/notifications/${getMsisdn()}/notification/status`);
  },
  updateReadStatus: (params) => {
    axios.defaults.headers.common.Authorization = `Bearer ${getToken()}`;
    return axios.patch(`/notifications/${getMsisdn()}/notification`, params);
  },
});
