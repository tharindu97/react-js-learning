/*
 * File: App.js
 * Project: cellcard-play-pwa
 * File Created: Wednesday, 8th July 2020 12:22:28 pm
 * Author: Jude Fernando (jfernando@mitrai.com)
 * -----
 * Modified: Monday, 24th August 2020 11:58:58 am
 * Modified By: Buwaneka Sumanasekara (bsumanasekara@mitrai.com>)
 * -----
 * Modified: Thursday, 10th September 2020 12:00:58 am
 * Modified By: Jerobert (zjerobert@mitrai.com)
 * -----
 * Copyright 2020 - 2020 Mitra Innovation Ltd., Mitra Innovation Ltd.
 */

import React, { useEffect, useState } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { getMsisdn } from 'utils/authUtils';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import { Helmet } from 'react-helmet';
import api from 'api';
import {
  ROUTE_HOME,
  ROUTE_ABOUT,
  ROUTE_PRIVACY,
  ROUTE_FAQ,
  ROUTE_SUPPORT,
  ROUTE_TERMS,
  ROUTE_DEMO,
  ROUTE_STORE,
  ROUTE_STORE_EXCLUSIVE,
  ROUTE_STORE_PRODUCT,
  ROUTE_MORE,
  ROUTE_PURCHASE_STATUS,
  ROUTE_PLAN_SELECT,
  ROUTE_PLAN_UPGRADE,
  ROUTE_ME,
  ROUTE_ME_PLAYPOINTS,
  ROUTE_PLAYPOINTS,
  ROUTE_SELECT_RECEIVER,
  ROUTE_VERIFY_RECEIVER,
  ROUTE_PLAYPOINTS_CHECKOUT,
  ROUTE_PLAN_CHECKOUT,
  ROUTE_ME_PLAN,
  ROUTE_VOUCHER_LIST,
  ROUTE_VOUCHER_DETAILS,
  ROUTE_UNAUTHORIZED,
  ROUTE_REFERRAL_DETAILS,
  ROUTE_REFERRAL_HISTORY,
  ROUTE_NOTIFICATIONS,
  ROUTE_ERROR,
  ROUTE_PRODUCT_PURCHASE_STATUS,
  ROUTE_REFERRAL_TERMS,
} from 'constants/Routes';
import {
  VIEW_MEMBERSHIP_DETAILS,
  VIEW_EXCLUSIVE_OFFERS,
} from 'constants/Authorization';
import PurchaseStatus from 'pages/PurchaseStatus';
import GTM from 'components/utils/GTM';
import Home from './pages/Home';
import ProfilePage from './pages/ProfilePage';
import AboutPage from './pages/AboutPage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';
import SupportPage from './pages/SupportPage';
import FaqPage from './pages/FaqPage';
import CheckoutPage from './pages/CheckoutPage';
import PlayPointsPage from './pages/PlayPointsPage';
import PlaypointsOffer from './pages/PlaypointsOffer';
import VerifyReceiverPage from './pages/VerifyReceiverPage';
import Status from './pages/Status';
import Demo from './pages/Demo';
import SelectReciverPage from './pages/SelectReciverPage';
import PageNotFoundPage from './pages/404Page';
import MaintenancePage from './pages/Maintenance';
import SelectPlanPage from './pages/SelectPlanPage';
import MyPlan from './pages/MyPlan';
import VouchersPage from './pages/Vouchers/ListPage';
import VoucherDetailPage from './pages/Vouchers/DetailPage';
import UnauthorizedPage from './pages/UnauthorizedPage';
import ReferralDetails from './pages/ReferralDetails';
import ReferralHistory from './pages/ReferralHistory';
import Notifications from './pages/Notifications';
import ReferralTerms from './pages/ReferralTerms';
import ErrorPage from './pages/Error';
import ScrollToTop from './components/molecules/ScrollToTop';

import ProtectedRoute from './components/utils/ProtectedRoute';

import NetworkStatusBar from './components/atoms/NetworkStatus';

import Store from './pages/Store';
import More from './pages/More';
import ExclusiveOffers from './pages/ExclusiveOffers';
import ProductDetail from './pages/ProductDetail';

const App = () => {
  const currentLanguage = i18next.language;
  const { t } = useTranslation(); // eslint-disable-line no-unused-vars
  const [isInMaintenance, setIsInMaintenance] = useState(false);

  useEffect(() => {
    const firebase = require('firebase/app');
    require('firebase/performance');

    // All of these are available from the settings page in the Firebase developer portal.
    // Settings => General => Your Apps => Firebase SDK Snippet => Config
    const firebaseConfig = {
      apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
      authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
      databaseURL: process.env.REACT_APP_FIREBASE_DB_URL,
      projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
      storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
      messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
      appId: process.env.REACT_APP_FIREBASE_APP_ID,
    };

    // Initialize Firebase Performance Monitoring
    firebase.initializeApp(firebaseConfig).performance();

    window.Moengage = window.moe({
      app_id: process.env.REACT_APP_MOENGAGE_KEY,
      debug_logs: 1,
    });
    const userMobile = getMsisdn();
    if (userMobile) {
      window.Moengage.add_mobile(userMobile);
    }
  }, []);

  useEffect(() => {
    async function fetchData() {
      await api.settings.getMaintenanceInfo().then((res) => {
        if (res.data.isInMaintenance === true) {
          setIsInMaintenance(true);
        }
      });
    }
    fetchData();
  }, []);

  return (
    <>
      <Helmet htmlAttributes={{ lang: currentLanguage }} />
      <NetworkStatusBar />
      <BrowserRouter>
        <ScrollToTop />
        <GTM />
        {isInMaintenance ? (
          <Switch>
            <Route path="*" component={MaintenancePage} />
          </Switch>
        ) : (
          <Switch>
            <Route path={ROUTE_HOME} exact component={Home} />
            <Route
              path={ROUTE_UNAUTHORIZED}
              exact
              component={UnauthorizedPage}
            />
            <Route path={ROUTE_ABOUT} component={AboutPage} />
            <Route path={ROUTE_PRIVACY} component={PrivacyPage} />
            <Route path={ROUTE_FAQ} component={FaqPage} />
            <Route path={ROUTE_SUPPORT} component={SupportPage} />
            <Route path={ROUTE_TERMS} component={TermsPage} />
            <Route path={ROUTE_DEMO} component={Demo} />
            <ProtectedRoute path={ROUTE_STORE} exact component={Store} />
            <ProtectedRoute
              path={ROUTE_STORE_EXCLUSIVE}
              authCondition={VIEW_EXCLUSIVE_OFFERS}
              exact
              component={ExclusiveOffers}
            />
            <ProtectedRoute
              path={ROUTE_STORE_PRODUCT}
              exact
              component={ProductDetail}
            />
            <ProtectedRoute path={ROUTE_MORE} exact component={More} />
            <ProtectedRoute path={ROUTE_ME} exact component={ProfilePage} />
            <ProtectedRoute
              path={ROUTE_PLAYPOINTS_CHECKOUT}
              exact
              component={CheckoutPage}
            />
            <ProtectedRoute
              path={ROUTE_PLAN_CHECKOUT}
              exact
              component={CheckoutPage}
            />
            <ProtectedRoute
              path={ROUTE_ME_PLAYPOINTS}
              exact
              component={PlayPointsPage}
            />
            <ProtectedRoute
              path={ROUTE_PLAYPOINTS}
              exact
              component={PlaypointsOffer}
            />
            <ProtectedRoute
              path={ROUTE_PURCHASE_STATUS}
              exact
              component={Status}
            />
            <ProtectedRoute
              path={ROUTE_VERIFY_RECEIVER}
              exact
              component={VerifyReceiverPage}
            />
            <ProtectedRoute
              path={ROUTE_SELECT_RECEIVER}
              exact
              component={SelectReciverPage}
            />
            <ProtectedRoute
              path={ROUTE_PLAN_SELECT}
              exact
              component={SelectPlanPage}
            />
            <ProtectedRoute
              path={ROUTE_PLAN_UPGRADE}
              exact
              component={SelectPlanPage}
            />
            <ProtectedRoute
              path={ROUTE_ME_PLAN}
              exact
              component={MyPlan}
              authCondition={VIEW_MEMBERSHIP_DETAILS}
            />
            <ProtectedRoute
              path={ROUTE_VOUCHER_LIST}
              exact
              component={VouchersPage}
            />
            <ProtectedRoute
              path={ROUTE_VOUCHER_DETAILS}
              exact
              component={VoucherDetailPage}
            />
            <ProtectedRoute
              path={ROUTE_REFERRAL_DETAILS}
              exact
              component={ReferralDetails}
            />
            <ProtectedRoute
              path={ROUTE_REFERRAL_HISTORY}
              exact
              component={ReferralHistory}
            />
            <ProtectedRoute
              path={ROUTE_NOTIFICATIONS}
              exact
              component={Notifications}
            />
            <ProtectedRoute
              path={ROUTE_PRODUCT_PURCHASE_STATUS}
              exact
              component={PurchaseStatus}
            />
            <ProtectedRoute
              path={ROUTE_REFERRAL_TERMS}
              exact
              component={ReferralTerms}
            />
            <Route path={ROUTE_ERROR} component={ErrorPage} />)
            <Route path="*" component={PageNotFoundPage} />)
          </Switch>
        )}
      </BrowserRouter>
    </>
  );
};

export default App;
