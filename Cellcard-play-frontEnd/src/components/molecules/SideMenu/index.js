/*
 * File: index.js
 * Project: cellcard-play-pwa
 * File Created: Monday, 13th July 2020 3:33:47 pm
 * Author: Jude Fernando (jfernando@mitrai.com)
 * -----
 * Last Modified: Monday, 13th July 2020 3:34:10 pm
 * Modified By: Jude Fernando (jfernando@mitrai.com)
 * -----
 * Copyright 2020 - 2020 Mitra Innovation Ltd., Mitra Innovation Ltd.
 */

import React from 'react';
import { Nav, Button } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ROUTE_SELECT_RECEIVER } from 'constants/Routes';
import { PLAN } from 'constants/Globals';
import GEvent from 'components/atoms/GEvent';
import gtm from 'constants/GTM';
import Icon from '../../atoms/Icon';
import LangSwitch from '../LangSwitch';
import ButtonRounded from '../../atoms/ButtonRounded';
import './index.scss';

const SideMenu = (props) => {
  const { t } = useTranslation();
  const { show, onClose } = props;
  const showClass = show ? 'active' : 'inactive';
  const location = useLocation();

  const toggleMenu = () => {
    onClose(!show);
  };

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className={`side-menu ${showClass}`} onClick={onClose}>
      <div className="side-menu-inner">
        <Button onClick={onClose} variant="link side-menu-close">
          <Icon icon="times" />
        </Button>
        <Nav defaultActiveKey="/" className="flex-column">
          <GEvent
            event={gtm.events.HAMBURGER_MENU}
            payload={{
              section: gtm.defaults.HAMBURGER_HOME,
            }}
          >
            <Nav.Link
              as={Link}
              to={{
                pathname: '/',
              }}
              className={
                location.pathname === '/' && location.hash === ''
                  ? 'active'
                  : ''
              }
              onClick={goToTop}
            >
              {t('GP_HAMBURGER_HOME')}
            </Nav.Link>
          </GEvent>

          <GEvent
            event={gtm.events.HAMBURGER_MENU}
            payload={{
              section: gtm.defaults.HAMBURGER_PLANS,
            }}
          >
            <Nav.Link
              as={Link}
              to={{ pathname: '/', hash: 'plans' }}
              className={
                location.pathname === '/' && location.hash === '#plans'
                  ? 'active'
                  : ''
              }
            >
              {t('GP_HAMBURGER_PLANS')}
            </Nav.Link>
          </GEvent>

          <GEvent
            event={gtm.events.HAMBURGER_MENU}
            payload={{
              section: gtm.defaults.HAMBURGER_BUY_PLAY_POINTS,
            }}
          >
            <Nav.Link
              as={Link}
              to={{
                pathname: '/',
                hash: 'login',
                redirect: `${ROUTE_SELECT_RECEIVER}?${new URLSearchParams({
                  productType: 'PLAYPOINT',
                }).toString()}`,
              }}
              className={
                location.pathname === '/' && location.hash === '#someclass'
                  ? 'active'
                  : ''
              }
            >
              {t('GP_HAMBURGER_PLAYPOINTS')}
            </Nav.Link>
          </GEvent>

          <GEvent
            event={gtm.events.HAMBURGER_MENU}
            payload={{
              section: gtm.defaults.HAMBURGER_FAQS,
            }}
          >
            <Nav.Link
              as={Link}
              to="/faq"
              className={location.pathname === '/faq' ? 'active' : ''}
            >
              {t('GP_HAMBURGER_FAQ')}
            </Nav.Link>
          </GEvent>

          <GEvent
            event={gtm.events.HAMBURGER_MENU}
            payload={{
              section: gtm.defaults.HAMBURGER_SUPPORT,
            }}
          >
            <Nav.Link
              as={Link}
              to="/support"
              className={location.pathname === '/support' ? 'active' : ''}
            >
              {t('GP_HAMBURGER_SUPPORT')}
            </Nav.Link>
          </GEvent>

          <GEvent
            event={gtm.events.HAMBURGER_MENU}
            payload={{
              section: gtm.defaults.HAMBURGER_ABOUT,
            }}
          >
            <Nav.Link
              as={Link}
              to="/about"
              className={location.pathname === '/about' ? 'active' : ''}
            >
              {t('GP_HAMBURGER_ABOUT')}
            </Nav.Link>
          </GEvent>
        </Nav>
        <div className="side-menu-footer">
          <LangSwitch />

          <GEvent event={gtm.events.HAMBURGER_BUY_PU} payload={{}}>
            <ButtonRounded
              as={Link}
              to={{
                pathname: ROUTE_SELECT_RECEIVER,
                search: new URLSearchParams({ productType: PLAN }).toString(),
              }}
              eventKey="login"
              variant="primary"
              block
              onClick={toggleMenu}
            >
              {t('GP_HAMBURGER_BUYPLAY')}
            </ButtonRounded>
          </GEvent>

          <GEvent event={gtm.events.HAMBURGER_SIGN_IN_REGISTER} payload={{}}>
            <ButtonRounded
              as={Link}
              to={{
                pathname: '/',
                hash: 'login',
              }}
              eventKey="login"
              variant="link"
              block
              onClick={toggleMenu}
            >
              {t('GP_HAMBURGER_SIGNINREGISTER')}
            </ButtonRounded>
          </GEvent>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
