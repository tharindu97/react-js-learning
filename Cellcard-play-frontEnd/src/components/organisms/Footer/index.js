/*
 * File: index.js
 * Project: cellcard-play-pwa
 * File Created: Friday, 10th July 2020 12:42:55 am
 * Author: Jerobert (zjerobert@mitrai.com)
 * -----
 * Last Modified: Tuesday, 23rd July 2020 2:04:45 am
 * Modified By: Jude Fernando (jfernando@mitrai.com)
 * -----
 * Copyright 2020 - 2020 Mitra Innovation Ltd., Mitra Innovation Ltd.
 */
import React from 'react';
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import './style.scss';
import SocialIcons from 'components/molecules/SocialIcons';
import AwardsContainer from 'components/organisms/AwardsContainer';
import Copyright from 'components/molecules/Copyright';
import { useTranslation } from 'react-i18next';
import GEvent from 'components/atoms/GEvent';
import gtm from 'constants/GTM';

const Footer = () => {
  const { t } = useTranslation();
  return (
    <div className="page__footer">
      <Nav className="flex-column">
        <GEvent
          event={gtm.events.LANDING_MORE_DETAILS}
          payload={{
            section: gtm.defaults.SECTION_FAQ,
          }}
        >
          <Nav.Link as={Link} to="/faq" eventKey="faq">
            {t('GP_HAMBURGER_FAQ')}
          </Nav.Link>
        </GEvent>

        <GEvent
          event={gtm.events.LANDING_MORE_DETAILS}
          payload={{
            section: gtm.defaults.SECTION_SUPORT,
          }}
        >
          <Nav.Link as={Link} to="/support" eventKey="support">
            {t('GP_HAMBURGER_SUPPORT')}
          </Nav.Link>
        </GEvent>

        <GEvent
          event={gtm.events.LANDING_MORE_DETAILS}
          payload={{
            section: gtm.defaults.SECTION_PRIVACY,
          }}
        >
          <Nav.Link as={Link} to="/privacy" eventKey="about">
            {t('GP_MORE_PRIVACYPOLICY')}
          </Nav.Link>
        </GEvent>

        <GEvent
          event={gtm.events.LANDING_MORE_DETAILS}
          payload={{
            section: gtm.defaults.SECTION_TC,
          }}
        >
          <Nav.Link as={Link} to="/terms" eventKey="about">
            {t('GP_MORE_TERMSANDCOND')}
          </Nav.Link>
        </GEvent>
      </Nav>

      <hr />

      <div className="social-wrapper">
        <p>{t('GP_LANDING_FOLLOWUS')}</p>
        <SocialIcons />
      </div>

      <hr />

      <AwardsContainer />

      <Copyright />
    </div>
  );
};

export default Footer;
