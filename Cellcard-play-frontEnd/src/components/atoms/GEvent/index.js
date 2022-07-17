/*
 * File: index.js
 * Project: cellcard-play-pwa
 * Author: Dilum Sanjaya (dranasinghe@mitrai.com)
 * File Created: Wednesday, 07th October 2020 02:19 pm
 * Module: Cellcard Play Frontend
 * Copyright 2020 - 2020 Mitra Innovation Ltd., Mitra Innovation Ltd.
 */
import React from 'react';
import TagManager from 'react-gtm-module';

const GEvent = ({ children, event, payload }) => {
  const onEventFire = () => {
    TagManager.dataLayer({
      dataLayer: {
        event,
        ...payload,
      },
    });
  };
  return <div onClick={onEventFire}>{children}</div>;
};

export default GEvent;
