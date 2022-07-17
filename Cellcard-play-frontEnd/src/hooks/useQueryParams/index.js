/* eslint-disable prefer-destructuring */
/*
 * File: index.js
 * Project: cellcard-play-pwa
 * Author: Dilum Sanjaya (dranasinghe@mitrai.com)
 * File Created: Monday, 17th August 2020 10:46 am
 * Module: Cellcard Play Frontend
 * Copyright 2020 - 2020 Mitra Innovation Ltd., Mitra Innovation Ltd.
 */
import { useLocation, useHistory } from 'react-router-dom';
import { ROUTE_ERROR } from 'constants/Routes';

const useQueryParams = () => {
  const location = useLocation();
  const history = useHistory();
  let querySearch = {};
  if (location.search) {
    querySearch = location.search
      .replace(/(^\?)/, '')
      .split('&')
      .reduce((acc, cur) => {
        const [key, val] = cur.split('=');
        if (key && val) {
          return { ...acc, [key]: val };
        }
        return acc;
      }, {});
  }

  const navigate = (link) => {
    history.push(link);
  };
  const onError = () => {
    history.push(ROUTE_ERROR);
  };

  const queryState = location.state || {};
  return { querySearch, queryState, navigate, onError };
};

export default useQueryParams;
