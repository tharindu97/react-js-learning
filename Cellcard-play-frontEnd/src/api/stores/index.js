/* eslint-disable no-param-reassign */
/*
 * Author: Jude Fernando (jfernando@mitrai.com)
 * Date: Friday, 24th July 2020 1:57:38 pm
 * Module: Cellcard Play Frontend
 * -----
 * Last Modified: Thursday, 27th August 2020 4:59:40 pm
 * Modified By: Buwaneka Sumanasekara (bsumanasekara@mitrai.com>)
 * Copyright © 2020 Cellcard Play. All rights reserved.
 */

import { getToken, getMsisdn } from 'utils/authUtils';
import { toQuery } from 'utils/helpers';

export default (axios, base) => ({
  get: (data) => {
    const query = toQuery(data);
    axios.defaults.headers.common.Authorization = `Bearer ${getToken()}`;
    return axios.get(`${base}/product/${query}`);
  },
  getProduct: (data) => {
    axios.defaults.headers.common.Authorization = `Bearer ${getToken()}`;
    return axios.get(`${base}/${getMsisdn()}/product/${data.code}`);
  },
  exclusive: {
    get: (data) => {
      const query = toQuery(data);
      axios.defaults.headers.common.Authorization = `Bearer ${getToken()}`;
      return axios.get(`${base}/product/exclusive${query}`);
    },
  },
  filters: {
    get: () => {
      axios.defaults.headers.common.Authorization = `Bearer ${getToken()}`;
      return axios.get(`${base}/product/filter`);
    },
  },
  eligible: (data) => {
    const query = toQuery(data.query);
    axios.defaults.headers.common.Authorization = `Bearer ${getToken()}`;
    return axios.get(
      `${base}/${getMsisdn()}/product/${data.code}/purchase/eligible${query}`,
    );
  },
  purchase: (data) => {
    const query = toQuery(data.query);
    axios.defaults.headers.common.Authorization = `Bearer ${getToken()}`;
    return axios.post(`${base}/${getMsisdn()}/product/purchase${query}`, {
      productCode: data.code,
    });
  },
  status: (data) => {
    axios.defaults.headers.common.Authorization = `Bearer ${getToken()}`;
    return axios.get(
      `${base}/${getMsisdn()}/product/purchase/${data.transactionId}/status`,
    );
  },
});
