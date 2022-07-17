/*
 * Author: Jude Fernando (jfernando@mitrai.com)
 * Date: Friday, 24th July 2020 1:57:38 pm
 * Module: Cellcard Play Frontend
 * Copyright © 2020 Cellcard Play. All rights reserved.
 */
import { getToken, getMsisdn } from 'utils/authUtils';

export default (axios, base) => ({
  plan: () => {
    return axios.get(`${base}/plan`);
  },
  userPlan: (msisdn) => {
    axios.defaults.headers.common['Authorization'] = `Bearer ${getToken()}`;
    return axios.get(
      `${base}/${getMsisdn()}/plan/?receiver=${encodeURIComponent(msisdn || getMsisdn())}`
    );
  },
  getPlanSummary: () => {
    axios.defaults.headers.common['Authorization'] = `Bearer ${getToken()}`;
    return axios.get(`${base}/${getMsisdn()}/plan/summary`);
  },
  userPlanInfo: () => {
    axios.defaults.headers.common['Authorization'] = `Bearer ${getToken()}`;
    return axios.get(`${base}/${getMsisdn()}/plan/info`);
  },
  unsubscribe: (data) => {
    axios.defaults.headers.common['Authorization'] = `Bearer ${getToken()}`;
    return axios.post(`${base}/${getMsisdn()}/plan/unsubscribe`, data);
  },
});
