/*
 * File: index.js
 * Project: cellcard-play-pwa
 * Author: Dilum Sanjaya (dranasinghe@mitrai.com)
 * File Created: Friday, 04th September 2020 04:45 pm
 * Module: Cellcard Play Frontend
 * Copyright 2020 - 2020 Mitra Innovation Ltd., Mitra Innovation Ltd.
 */
import { useContext } from 'react';
import { UserContext } from 'providers/User';

const useAuthorization = () => {
  const { user } = useContext(UserContext);

  const isAuthorizedTo = (authType) => user.isAuthorizedTo(authType);

  return isAuthorizedTo;
};

export default useAuthorization;
