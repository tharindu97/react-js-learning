/*
 * File: index.js
 * Project: cellcard-play-pwa
 * File Created: Wednesday, 8th July 2020 12:22:28 pm
 * Author: Jerobert (zjerobert@mitrai.com)
 * -----
 * Last Modified: Friday, 24th July 2020 12:30 pm
 * Modified By: Jerobert (zjerobert@mitrai.com)
 * -----
 * Copyright 2020 - 2020 Mitra Innovation Ltd., Mitra Innovation Ltd.
 */

import React from 'react';
import Section from 'components/molecules/Section';
import SliderHero from 'components/molecules/SliderHero';
import HeroContent from 'components/molecules/HeroContent';
import ButtonRounded from 'components/atoms/ButtonRounded';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import './style.scss';
import { ROUTE_SELECT_RECEIVER } from 'constants/Routes';
import ActionItem from 'components/atoms/ActionItem';
import { PLAN } from 'constants/Globals';

const HeroContainer = () => {
  const { t } = useTranslation();
  return (
    <Section>
      <SliderHero />
      <HeroContent>
        {/* <ButtonRounded
          as={Link}
          to={{
            pathname: ROUTE_SELECT_RECEIVER,
            search: new URLSearchParams({ productType: PLAN }).toString(),
          }}
          eventKey="login"
          variant="primary btn-landing"
        >
          {t('GP_HAMBURGER_BUYPLAY')}
        </ButtonRounded> */}

        <ActionItem
          variant="body"
          weight="semi-bold"
          rounded
          flex
          className=".h-48 w-btn-landing"
          value={t('GP_HAMBURGER_BUYPLAY')}
          to={{
            pathname: ROUTE_SELECT_RECEIVER,
            search: new URLSearchParams({ productType: PLAN }).toString(),
          }}
        />
      </HeroContent>
    </Section>
  );
};

export default HeroContainer;
