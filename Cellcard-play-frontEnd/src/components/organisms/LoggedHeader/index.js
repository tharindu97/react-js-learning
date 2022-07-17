/*
 * File: index.js
 * Project: cellcard-play-pwa
 * File Created: Friday, 10th July 2020 12:30:18 am
 * Author: Jude Fernando (jfernando@mitrai.com)
 * -----
 * Last Modified: Monday, 13th July 2020 1:15:12 pm
 * Modified By: Jude Fernando (jfernando@mitrai.com)
 * -----
 * Copyright 2020 - 2020 Mitra Innovation Ltd., Mitra Innovation Ltd.
 */

import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import './index.scss';
import { Row, Col, Button } from 'react-bootstrap';
import {
  HEADER_ADD_HOME,
  HEADER_NOTIFICATIONS,
  HEADER_COINS,
} from 'constants/Images';
import { ROUTE_ME_PLAYPOINTS, ROUTE_NOTIFICATIONS } from 'constants/Routes';
import { Link } from 'react-router-dom';
import { isRunningOnAsApp } from 'utils/helpers';
import Typography from 'components/atoms/Typography';

import api from 'api';
import ConfirmAlert from '../../molecules/ConfirmAlert';
import Icon from '../../atoms/Icon';

const LoggedHeader = (props) => {
  const { t } = useTranslation();
  const { title } = props;
  const [adhState, setAdhState] = useState(false);
  const [newNotifications, setNewNotifications] = useState(false);

  useEffect(() => {
    api.notifications.getNotificationStatus().then((res) => {
      setNewNotifications(res.data.hasNewNotifications);
    });
  }, []);
  const toggleAddtoHome = () => {
    setAdhState(!adhState);
  };

  return (
    <>
      <div className="logged-header-container">
        <Typography
          value={title}
          color="white"
          variant="h1"
          weight="extra-bold"
          component="h1"
        />
        <div className="d-flex">
          {!isRunningOnAsApp() && (
            <div
              className="logged-header-nav-item link-nulled"
              onClick={toggleAddtoHome}
              role="button"
              tabIndex={0}
              onKeyDown={() => {}}
            >
              <img
                className="logged-header-nav-item-image"
                src={HEADER_ADD_HOME.src}
                alt={HEADER_ADD_HOME.alt}
              />
            </div>
          )}
          <div className="logged-header-nav-item position-relative">
            {newNotifications && (
              <div className="notifications-indicator position-absolute" />
            )}
            <Link className="link-nulled" to={ROUTE_NOTIFICATIONS}>
              <img
                className="logged-header-nav-item-image"
                src={HEADER_NOTIFICATIONS.src}
                alt={HEADER_NOTIFICATIONS.alt}
              />
            </Link>
          </div>
          <div className="logged-header-nav-item">
            <Link className="link-nulled" to={ROUTE_ME_PLAYPOINTS}>
              <img
                className="logged-header-nav-item-image"
                src={HEADER_COINS.src}
                alt={HEADER_COINS.alt}
              />
            </Link>
          </div>
        </div>
      </div>
      <ConfirmAlert
        onConfirm={toggleAddtoHome}
        show={adhState}
        title={t('GP_LANDING_ADDTOHOME')}
        buttonTitle={t('GP_BROWSERMENU_GOTIT')}
      >
        <Row noGutters>
          <Col xs={2}>
            <img src="/logo192.png" alt="Play Unlimited" />
          </Col>
          <Col>
            <div className="ml-2">
              {t('GP_LANDING_GETTOPLAY')} <br /> {t('GP_LANDING_CLICKOR')}{' '}
              <Icon icon="android_a2hs" /> {t('GP_LANDING_CLICKOR_1')}{' '}
              <Icon icon="ios_a2hs" /> {t('GP_BROWSERMENU_ADDTOHOME')}
            </div>
          </Col>
        </Row>
      </ConfirmAlert>
    </>
  );
};

export default LoggedHeader;
