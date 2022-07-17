/*
 * File: index.js
 * Project: cellcard-play-pwa
 * Author: Dilum Sanjaya (dranasinghe@mitrai.com)
 * File Created: Monday, 21st September 2020 04:57 pm
 * Module: Cellcard Play Frontend
 * Copyright 2020 - 2020 Mitra Innovation Ltd., Mitra Innovation Ltd.
 */

import TagManager from 'react-gtm-module';
import gtm from 'constants/GTM';

const useGTM = () => {
  const push = (event, payload) => {
    TagManager.dataLayer({
      dataLayer: {
        event,
        ...payload,
      },
    });
  };

  return { push, ...gtm };
};

export default useGTM;
