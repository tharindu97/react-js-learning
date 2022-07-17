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

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Row, Col } from 'react-bootstrap';
import { isRunningOnAsApp } from 'utils/helpers';
import Typography from 'components/atoms/Typography';
import GEvent from 'components/atoms/GEvent';
import gtm from 'constants/GTM';
import BrandLogo from '../../atoms/BrandLogo';
import AddToHomeButton from '../../atoms/ButtonIcon';
import MenuButton from '../../molecules/MenuButton';
import ConfirmAlert from '../../molecules/ConfirmAlert';
import SideMenu from '../../molecules/SideMenu';
import Icon from '../../atoms/Icon';
import './index.scss';

const Header = () => {
  const { t } = useTranslation();
  const [adhState, setAdhState] = useState(false);
  const [menuState, setMenuState] = useState(false);

  const toggleAddtoHome = () => {
    setAdhState(!adhState);
  };

  const toggleMenu = () => {
    const state = !menuState;
    if (state) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
    setMenuState(state);
  };

  return (
    <>
      <div className="page__header_container">
        <div className="page__header">
          <GEvent event={gtm.events.LANDING_HAMBURGER} payload={{}}>
            <MenuButton onClick={toggleMenu} />
          </GEvent>
          <BrandLogo alt={t('Cellcard Play')} />
          <div className="flex-grow-1" />
          {!isRunningOnAsApp() && (
            <GEvent event={gtm.events.ACT_ADD_TO_HOME} payload={{}}>
              <div
                className="btn-add-to-home bg-cta-blue"
                onClick={toggleAddtoHome}
                role="button"
                tabIndex={0}
                onKeyDown={() => {}}
              >
                <Icon icon="add_to_home_filled" />
                <Typography
                  translationKey="GP_LANDING_ADDTOHOME"
                  color="white"
                  variant="sub2"
                  weight="semi-bold"
                  component="div"
                  className="ml-1"
                />
              </div>
            </GEvent>
          )}
        </div>
      </div>
      <SideMenu onClose={toggleMenu} show={menuState} />
      <ConfirmAlert
        onConfirm={toggleAddtoHome}
        show={adhState}
        title={t('GP_LANDING_ADDTOHOME')}
        buttonTitle={t('GP_BROWSERMENU_GOTIT')}
        gtmEvent={gtm.events.ACT_ADD_TO_HOME_GOT_IT}
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

export default Header;
