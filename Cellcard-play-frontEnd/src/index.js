/*
 * File: index.js
 * Project: cellcard-play-pwa
 * File Created: Wednesday, 8th July 2020 12:22:28 pm
 * Author: Jude Fernando (jfernando@mitrai.com)
 * -----
 * Last Modified: Monday, 13th July 2020 1:15:57 pm
 * Modified By: Jude Fernando (jfernando@mitrai.com)
 * -----
 * Copyright 2020 - 2020 Mitra Innovation Ltd., Mitra Innovation Ltd.
 */

import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import TagManager from 'react-gtm-module';
import './index.scss';
import App from './App';
import './i18n';

import UserProvider from './providers/User';

import * as serviceWorker from './serviceWorker';

const tagManagerArgs = {
  gtmId: process.env.REACT_APP_GTM_ID,
};

TagManager.initialize(tagManagerArgs);

ReactDOM.render(
  <Suspense
    fallback={
      <div className="main-loader">
        <img src="/logo192.png" alt="unlimited-play" />
      </div>
    }
  >
    <UserProvider>
      <App />
    </UserProvider>
  </Suspense>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
