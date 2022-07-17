/*
 * Author: Dilum Sanjaya (dranasinghe@mitrai.com)
 * Date: Thursday, 13th August 2020 1:57:38 pm
 * Module: Cellcard Play Frontend
 * Copyright © 2020 Cellcard Play. All rights reserved.
 */
const getRefreshToken = () => {
  return JSON.parse(localStorage.getItem('auth')).idToken;
};
const getMsisdn = () => {
  return JSON.parse(localStorage.getItem('user')).msisdn; // TODO : (Dilum) Create common function
};

export default (axios, base) => ({
  order: (transactionId) => {
    axios.defaults.headers.common['Authorization'] = `Bearer ${getRefreshToken()}`;
    return axios.get(`${base}/${getMsisdn()}/order/${transactionId}/status`);
  },
  paymentTypes: () => {
    axios.defaults.headers.common['Authorization'] = `Bearer ${getRefreshToken()}`;
    return axios.get(`${base}/order/paymentTypes`);
  },
  paymentDetails: (data) => {
    axios.defaults.headers.common['Authorization'] = `Bearer ${getRefreshToken()}`;
    return axios.post(`${base}/${getMsisdn()}/order`, data);
  },
  product: (search) => {
    axios.defaults.headers.common['Authorization'] = `Bearer ${getRefreshToken()}`;
    return axios.get(`${base}/order/product?${search}`);
  },
  cellcardPurchase: (data) => {
    axios.defaults.headers.common['Authorization'] = `Bearer ${getRefreshToken()}`;
    return axios.patch(`${base}/${getMsisdn()}/order/${data.orderId}`, data);
  },
  cellcardInitPurchase: (data) => {
    axios.defaults.headers.common['Authorization'] = `Bearer ${getRefreshToken()}`;
    return axios.post(`${base}/${getMsisdn()}/order/balance`, data);
  },
});
