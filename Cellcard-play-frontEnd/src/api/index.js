/*
 * Author: Jude Fernando (jfernando@mitrai.com)
 * Date: Friday, 24th July 2020 1:54:02 pm
 * Module: Cellcard Play Frontend
 * Copyright © 2020 Cellcard Play. All rights reserved.
 */
import axios from 'axios';
import auth from './auth';
import users from './users';
import plans from './plans';
import points from './points';
import stores from './stores';
import orders from './orders';
import account from './account';
import vouchers from './vouchers';
import payments from './payments';
import settings from './settings';
import content from './content';
import referrals from './referrals';
import notifications from './notifications';

const API_URL = process.env.REACT_APP_API_ENDPOINT;

axios.defaults.baseURL = API_URL;
const { appVersion, userAgent } = window.navigator;
const source = process.env.REACT_APP_PRODUCT;

const getRefreshToken = () => {
  const authData = JSON.parse(localStorage.getItem('auth'));
  return (authData && authData.refreshToken) || null;
};

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (err) => {
    return new Promise((resolve, reject) => {
      const originalReq = err.config;
      if (err.response && err.response.status === 401) {
        originalReq._retry = true;

        const res = fetch(
          `${process.env.REACT_APP_API_ENDPOINT}/auth/refreshTokens`,
          {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
              'Content-Type': 'application/json',
              'x-source': source,
              'x-device': appVersion,
              'x-browser': userAgent,
            },
            redirect: 'follow',
            referrer: 'no-referrer',
            body: JSON.stringify({
              refreshToken: getRefreshToken(),
            }),
          },
        )
          .then((res) => res.json())
          .then((res) => {
            if (res.idToken) {
              localStorage.setItem(
                'auth',
                JSON.stringify({ ...res, refreshToken: getRefreshToken() }),
              );
              originalReq.headers.Authorization = res.idToken;
              return axios(originalReq);
            }
            window.localStorage.removeItem('auth');
            window.localStorage.removeItem('user');
            window.localStorage.removeItem('features');
            window.location.replace('/#login');
          });

        resolve(res);
      }
      reject(err.response);
    });
  },
);

axios.defaults.headers.common['x-source'] = source;
axios.defaults.headers.common['x-device'] = appVersion;
axios.defaults.headers.common['x-browser'] = userAgent;

export default {
  auth: auth(axios, `/auth`),
  users: users(axios, `/users/user`),
  plans: plans(axios, `/plans`),
  payments: payments(axios, `/payments/payment`),
  points: points(axios, `/points`),
  stores: stores(axios, '/stores'),
  account: account(axios, '/accounts'),
  vouchers: vouchers(axios, `/vouchers`),
  orders: orders(axios, '/orders'),
  settings: settings(axios, '/settings'),
  referrals: referrals(axios, '/referrals'),
  notifications: notifications(axios, '/notifications'),
  content: content(axios),
};
