/*
 * Author: Jude Fernando (jfernando@mitrai.com)
 * Date: Friday, 24th July 2020 1:57:38 pm
 * Module: Cellcard Play Frontend
 * Copyright © 2020 Cellcard Play. All rights reserved.
 */

export default (axios, base) => ({
  signIn: (data) => {
    return axios.post(`${base}/signIn`, data);
  },
  signInVerify: (data) => {
    return axios.post(`${base}/signInVerify`, data);
  },
  refreshTokens: (data) => {
    return axios.post(`${base}/refreshTokens`, data);
  },
});
