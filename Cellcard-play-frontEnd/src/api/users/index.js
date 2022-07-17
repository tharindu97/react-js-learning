/*
 * Author: Jude Fernando (jfernando@mitrai.com)
 * Date: Friday, 24th July 2020 1:57:38 pm
 * Module: Cellcard Play Frontend
 * Copyright © 2020 Cellcard Play. All rights reserved.
 */

const getRefreshToken = () => {
  return JSON.parse(localStorage.getItem('auth')).idToken;
};

export default (axios, base) => ({
  get: (data) => {
    axios.defaults.headers.common['Authorization'] = `Bearer ${getRefreshToken()}`;
    return axios.get(`${base}/${data.msisdn}`);
  },
  put: (data) => {
    axios.defaults.headers.common['Authorization'] = `Bearer ${getRefreshToken()}`;
    return axios.put(`${base}/${data.msisdn}`, data.data);
  },
  features: (data) => {
    axios.defaults.headers.common['Authorization'] = `Bearer ${getRefreshToken()}`;
    return axios.get(`${base}/${data.msisdn}/features`);
  },
  preferredLang: (data) => {
    axios.defaults.headers.common['Authorization'] = `Bearer ${getRefreshToken()}`;
    return axios.put(`${base}/${data.msisdn}`, { preferredLang: data.preferredLang });
  },
});
