import _ from 'lodash';

export const getToken = () => JSON.parse(localStorage.getItem('auth')).idToken;
export const getMsisdn = () =>
  _.get(JSON.parse(localStorage.getItem('user')), 'msisdn', undefined);
