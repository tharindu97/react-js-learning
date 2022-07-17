/*
 * Author:  (jfernando@mitrai.com)
 * Date: Tuesday, 4th August 2020 1:57:38 pm
 * Module: Cellcard Play Frontend
 * Copyright © 2020 Cellcard Play. All rights reserved.
 */

const getRefreshToken = () => {
  return JSON.parse(localStorage.getItem('auth')).idToken;
};

export default (axios, base) => ({
  paymentTypes: () => {
    axios.defaults.headers.common['Authorization'] = `Bearer ${getRefreshToken()}`;
    return axios.get(`${base}/paymentTypes`);
  },
  paymentDetails: (data, msisdn) => {
    axios.defaults.headers.common['Authorization'] = `Bearer ${getRefreshToken()}`;
    return axios.post(`${base}/${msisdn}`, data);
  },
});
