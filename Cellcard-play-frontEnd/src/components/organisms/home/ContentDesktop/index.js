/*
 * File: index.js
 * Project: cellcard-play-pwa
 * File Created: Thursday, 23rd July 2020 2:00 pm
 * Author: Jerobert (zjerobert@mitrai.com)
 * Copyright 2020 - 2020 Mitra Innovation Ltd., Mitra Innovation Ltd.
 */
import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import Flex from 'components/atoms/Flex';
import HeroContent from 'components/molecules/HeroContent';
import { BRAND_LOGO, MOBILE_MOCKUP } from 'constants/Images';

import './style.scss';
import { useTranslation } from 'react-i18next';

const ContentDesktop = () => {
  const { t } = useTranslation();
  return (
    <div className="desktop__section">
      <Flex>
        <div className="brand-holder">
          <img
            src={`${process.env.REACT_APP_ASSESTS_URL}${BRAND_LOGO.src}`}
            alt={BRAND_LOGO.alt}
            className="w-100"
          />
        </div>
      </Flex>
      <HeroContent />
      <Container>
        <Row>
          <Col md="4">
            <h2 className="desktop__section-title">
              {t('GP_MEMBERSHIP_EXPLOREMOREWITHYOURMOBILE')}
            </h2>
            <h3 className="desktop__section-content">
              {t('GP_MEMBERSHIP_NOAPPDOWNLOAD')}
            </h3>
            <Image
              src={`${process.env.REACT_APP_ASSESTS_URL}/homepage/desktop/QRcode-img.png`}
              className="qr-image"
            />
          </Col>
          <Col md={{ span: 7, offset: 1 }}>
            <Image src={MOBILE_MOCKUP.src} alt={MOBILE_MOCKUP.alt} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContentDesktop;
