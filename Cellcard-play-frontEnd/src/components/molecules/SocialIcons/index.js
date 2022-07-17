/*
 * File: index.js
 * Project: cellcard-play-pwa
 * File Created: Monday, 20th July 2020 1.30 pm
 * Author: Jerobert (zjerobert@mitrai.com)
 * Copyright 2020 - 2020 Mitra Innovation Ltd., Mitra Innovation Ltd.
 */
import React from 'react';
import FlexRow from 'components/atoms/FlexRow';
import SocialIcon from 'components/molecules/SocialIcon';
import {
  LINK_FB,
  LINK_YT,
  LINK_IG,
  LINK_TT,
} from 'constants/Links/socialmedia';
import GEvent from 'components/atoms/GEvent';
import gtm from 'constants/GTM';

const SocialIcons = () => {
  return (
    <FlexRow spacing="10px">
      <GEvent
        event={gtm.events.LANDING_FOLLOW_US}
        payload={{
          section: gtm.defaults.FOLLOW_FACEBOOK,
        }}
      >
        <SocialIcon icon="fb" link={LINK_FB} />
      </GEvent>
      <GEvent
        event={gtm.events.LANDING_FOLLOW_US}
        payload={{
          section: gtm.defaults.FOLLOW_YOUTUBE,
        }}
      >
        <SocialIcon icon="yt" link={LINK_YT} />
      </GEvent>
      <GEvent
        event={gtm.events.LANDING_FOLLOW_US}
        payload={{
          section: gtm.defaults.FOLLOW_INSTAGRAM,
        }}
      >
        <SocialIcon icon="ig" link={LINK_IG} />
      </GEvent>
      <GEvent
        event={gtm.events.LANDING_FOLLOW_US}
        payload={{
          section: gtm.defaults.FOLLOW_INSTAGRAM,
        }}
      >
        <SocialIcon icon="tiktok" link={LINK_TT} />
      </GEvent>
    </FlexRow>
  );
};

export default SocialIcons;
