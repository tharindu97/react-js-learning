/*
 * Author: Jude Fernando (jfernando@mitrai.com)
 * Date: Tuesday, 28th July 2020 1:20:41 am
 * Module: Cellcard Play Frontend
 * Copyright © 2020 Cellcard Play. All rights reserved.
 */

import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { UserContext } from '../../../providers/User';

const ProtectedRoute = ({ component: Component, authCondition, ...rest }) => {
  const { user } = useContext(UserContext);

  let isAuthorized = true;
  if (user && authCondition) {
    isAuthorized = user.isAuthorizedTo(authCondition);
  }

  const renderItem = (props) => {
    if (!user) {
      return (
        <Redirect
          to={{
            pathname: '/',
            hash: 'login',
            state: {
              from: `${props.location.pathname}${props.location.search}`,
            },
          }}
        />
      );
    }
    if (!isAuthorized) {
      return (
        <Redirect
          to={{
            pathname: '/unauthorized',
          }}
        />
      );
    }

    return <Component {...props} />;
  };

  return <Route {...rest} render={renderItem} />;
};

export default ProtectedRoute;
