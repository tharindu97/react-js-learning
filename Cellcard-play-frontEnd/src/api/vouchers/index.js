/*
 * Author: Buwaneka Sumanasekara (bsumanasekara@mitrai.com)
 * Date: Tuesday, 18th August 2020 12:13:09 pm
 * Module: Cellcard Play Frontend
 * -----
 * Last Modified: Tuesday, 25th August 2020 7:18:24 am
 * Modified By: Buwaneka Sumanasekara (bsumanasekara@mitrai.com>)
 * Copyright © 2020 Cellcard Play. All rights reserved.
 */

import { getToken, getMsisdn } from 'utils/authUtils';

export default (axios, base) => ({
  all: {
    get: (data) => {
      const params = new URLSearchParams(data).toString();
      axios.defaults.headers.common.Authorization = `Bearer ${getToken()}`;
      return axios.get(`${base}/${getMsisdn()}/voucher?${params}`);
    },
  },
  getVoucherDetails: (data) => {
    axios.defaults.headers.common.Authorization = `Bearer ${getToken()}`;
    return axios.get(`${base}/${getMsisdn()}/voucher/${data.code}`);
  },
  redeemVoucher: (data) => {
    axios.defaults.headers.common.Authorization = `Bearer ${getToken()}`;
    return axios.post(`${base}/${getMsisdn()}/voucher/redeem`, {
      voucherReference: data.code,
    });
  },
});
