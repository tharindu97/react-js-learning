/*
 * Author: Jerobert (zjerobert@mitrai.com)
 * Date: Wednesday, 9th September 2020 11:20 am
 * Module: Cellcard Play Frontend
 * Copyright © 2020 Cellcard Play. All rights reserved.
 */
import { STORE_SLIDER_LOCATION } from 'constants/Defaults';

export default (axios) => ({
  getStoreSliderImages: () => {
    return axios.get(
      `${process.env.REACT_APP_CONTENT_URL}${STORE_SLIDER_LOCATION}`,
      {
        transformRequest: (data, headers) => {
          // eslint-disable-next-line no-param-reassign
          delete headers.common.Authorization;
        },
      },
    );
  },
});
