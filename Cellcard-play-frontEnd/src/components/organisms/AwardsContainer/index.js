/*
 * File: index.js
 * Project: cellcard-play-pwa
 * File Created: Wednesday, 22th July 2020 1.30 pm
 * Author: Jerobert (zjerobert@mitrai.com)
 * Copyright 2020 - 2020 Mitra Innovation Ltd., Mitra Innovation Ltd.
 */
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import AwardItem from 'components/molecules/AwardItem';
import './style.scss';
import {
  AWARD_2018,
  AWARD_2019,
  AWARD_OPEN_SIGNAL,
} from 'constants/Links/awards';
import { IMG_AWARD_1, IMG_AWARD_2, IMG_AWARD_3 } from 'constants/Images';
import GEvent from 'components/atoms/GEvent';
import gtm from 'constants/GTM';

const AwardsContainer = () => {
  const { t } = useTranslation();
  return (
    <div className="awards">
      <p className="awards-title">{t('GP_ABOUT_CELLCARDISAPROUD')}</p>
      <Container>
        <Row>
          <Col>
            <GEvent
              event={gtm.events.LANDING_AWARDS}
              payload={{ section: gtm.defaults.AWARD_CFMN2018 }}
            >
              <AwardItem image={IMG_AWARD_1} link={AWARD_2018} />
            </GEvent>
          </Col>
          <Col>
            <GEvent
              event={gtm.events.LANDING_AWARDS}
              payload={{ section: gtm.defaults.AWARD_CFMN2019 }}
            >
              <AwardItem image={IMG_AWARD_2} link={AWARD_2019} />
            </GEvent>
          </Col>
          <Col>
            <GEvent
              event={gtm.events.LANDING_AWARDS}
              payload={{ section: gtm.defaults.AWARD_BGE }}
            >
              <AwardItem image={IMG_AWARD_3} link={AWARD_OPEN_SIGNAL} />
            </GEvent>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AwardsContainer;
