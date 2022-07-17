/*
 * Author:  (dranasinghe@mitrai.com)
 * Date: Tuesday, 12th August 2020 11:52 pm
 * Module: Cellcard Play Frontend
 * Copyright © 2020 Cellcard Play. All rights reserved.
 */
import { getToken, getMsisdn } from 'utils/authUtils';

export default (axios, base) => ({
  pointTypes: () => {
    axios.defaults.headers.common.Authorization = `Bearer ${getToken()}`;
    return axios.get(`${base}/point/purchasable`);
  },
  pointSummary: () => {
    axios.defaults.headers.common.Authorization = `Bearer ${getToken()}`;
    return axios.get(`${base}/${getMsisdn()}/point/info`);
  },
  getPoints: () => {
    axios.defaults.headers.common.Authorization = `Bearer ${getToken()}`;
    return axios.get(`${base}/${getMsisdn()}/point`);
  },
});
