/*
 * File: index.js
 * Project: cellcard-play-pwa
 * File Created: Wednesday, 22nd July 2020 1:00 pm
 * Author: Jerobert (zjerobert@mitrai.com)
 * Copyright 2020 - 2020 Mitra Innovation Ltd., Mitra Innovation Ltd.
 */
import React from 'react';
import SliderCustom from 'components/molecules/SliderMain';
import { IMG_HERO_1, IMG_HERO_2, IMG_HERO_3 } from 'constants/Images';
import FallBackImage from 'components/atoms/FallBackImage';
import GEvent from 'components/atoms/GEvent';
import gtm from 'constants/GTM';

const SliderHero = () => {
  return (
    <div className="hero-slider">
      <SliderCustom>
        <GEvent
          event={gtm.events.LANDING_MAIN_BANNER}
          payload={{
            image: IMG_HERO_1.alt,
          }}
        >
          <FallBackImage
            src={IMG_HERO_1.src}
            fallback={IMG_HERO_1.fallback}
            alt={IMG_HERO_1.alt}
          />
        </GEvent>

        <GEvent
          event={gtm.events.LANDING_MAIN_BANNER}
          payload={{
            image: IMG_HERO_2.alt,
          }}
        >
          <FallBackImage
            src={IMG_HERO_2.src}
            fallback={IMG_HERO_2.fallback}
            alt={IMG_HERO_2.alt}
          />
        </GEvent>

        <GEvent
          event={gtm.events.LANDING_MAIN_BANNER}
          payload={{
            image: IMG_HERO_3.alt,
          }}
        >
          <FallBackImage
            src={IMG_HERO_3.src}
            fallback={IMG_HERO_3.fallback}
            alt={IMG_HERO_3.alt}
          />
        </GEvent>
      </SliderCustom>
    </div>
  );
};

export default SliderHero;
