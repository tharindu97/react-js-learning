/*
 * File: index.js
 * Project: cellcard-play-pwa
 * Author: Dilum Sanjaya (dranasinghe@mitrai.com)
 * File Created: Friday, 25th September 2020 10:46 am
 * Module: Cellcard Play Frontend
 * Copyright 2020 - 2020 Mitra Innovation Ltd., Mitra Innovation Ltd.
 */

import { getToken, getMsisdn } from 'utils/authUtils';
import { toQuery } from 'utils/helpers';

export default (axios, base) => ({
  validateCode: (reqBody) => {
    axios.defaults.headers.common.Authorization = `Bearer ${getToken()}`;
    return axios.post(`${base}/${getMsisdn()}/referral/validate`, reqBody);
  },
  getHistory: (queryParams) => {
    axios.defaults.headers.common.Authorization = `Bearer ${getToken()}`;
    return axios.get(
      `${base}/${getMsisdn()}/referral/history${toQuery(queryParams)}`,
    );
  },
  getDetails: () => {
    axios.defaults.headers.common.Authorization = `Bearer ${getToken()}`;
    return axios.get(`${base}/${getMsisdn()}/referral`);
  },
});
