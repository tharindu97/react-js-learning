/* eslint-disable no-param-reassign */
export default (axios, base) => ({
  getMaintenanceInfo: () => {
    return axios.get(`${base}/healthCheck`, {
      transformRequest: (data, headers) => {
        delete headers.common.Authorization;
      },
    });
  },
});
