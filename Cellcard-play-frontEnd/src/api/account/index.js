import { getToken, getMsisdn } from 'utils/authUtils';

export default (axios, base) => ({
  getAccountDetails: () => {
    axios.defaults.headers.common['Authorization'] = `Bearer ${getToken()}`;
    return axios.get(`${base}/${getMsisdn()}/account`);
  },
});
