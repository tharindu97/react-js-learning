/*
 * Author: Jude Fernando (jfernando@mitrai.com)
 * Date: Thursday, 23rd July 2020 8:27:12 am
 * Module: Cellcard Play Frontend
 * Copyright © 2020 Cellcard Play. All rights reserved.
 */

import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Image } from 'react-bootstrap';
import { Link, Redirect } from 'react-router-dom';
import { toQuery } from 'utils/helpers';
import HeroContainer from 'components/organisms/home/HeroContainer';
import PlanContainer from 'components/organisms/home/PlanContainer';
import LoginDialog from 'components/organisms/LoginDialog';
import DefaultTemplate from 'templates/DefaultTemplate';
import Section from 'components/molecules/Section';
import Paragraph from 'components/atoms/Paragraph';
import Flex from 'components/atoms/Flex';
import HeadingSub from 'components/atoms/HeadingSub';
import VideoPlayer from 'components/atoms/VideoPlayer';
import ButtonRounded from 'components/atoms/ButtonRounded';
import SliderCustom from 'components/molecules/SliderCustom';
import FallBackImage from 'components/atoms/FallBackImage';
import Divider from 'components/atoms/Divider';
import { getMsisdn } from 'utils/authUtils';
import Typography from 'components/atoms/Typography';
import ActionItem from 'components/atoms/ActionItem';
import { ROUTE_STORE, ROUTE_SELECT_RECEIVER } from 'constants/Routes';
import ActionItemTypes from 'constants/ActionItem';
import './style.scss';
import {
  IMG_PROMO_GAMERS,
  IMG_PROMO_FACEBOOK,
  IMG_PROMO_REDEEM,
  IMG_REWARD_1,
  IMG_REWARD_2,
  IMG_REWARD_3,
  IMG_PROMO_DISCOUNT,
  IMG_PROMO_HIGHSPEED,
} from 'constants/Images';
import GEvent from 'components/atoms/GEvent';
import { PLAYPOINT } from 'constants/Globals';
import gtm from 'constants/GTM';

const HomePage = (props) => {
  const { t } = useTranslation();
  const { location } = props;
  const show = location.hash === '#login';

  useEffect(() => {
    if (location.hash === '#plans') {
      let pos = 0;
      const scrollTo = document.querySelector(location.hash);
      if (scrollTo) {
        pos = scrollTo.getBoundingClientRect().top + window.scrollY;
      }
      window.scrollTo({
        top: pos,
        left: 0,
        behavior: 'smooth',
      });
    }
  }, [location.hash]);

  const onLoginClose = () => {
    props.history.push('/');
  };
  if (getMsisdn()) {
    return <Redirect to={ROUTE_STORE} />;
  }
  return (
    <DefaultTemplate>
      {/* Hero Section */}
      <HeroContainer />

      {/* Video player */}
      <VideoPlayer link="https://www.youtube.com/watch?v=JQmdbsrgObk" />
      <Divider />

      {/* Earn Play Points */}
      <Section>
        <Flex>
          <Typography
            translationKey="GP_MEMBERSHIP_GETPLAYPOINTS"
            color="white"
            variant="h1"
            weight="extra-bold"
            component="h1"
            className="mb-2 px-3"
            textCenter
          />

          <Paragraph>{t('GP_PLANS_ENJOYFREEPLAYPOINTS')}</Paragraph>

          <Image src={IMG_PROMO_REDEEM.src} alt={IMG_PROMO_REDEEM.alt} />

          <ActionItem
            variant="body"
            weight="semi-bold"
            rounded
            flex
            className=".h-48 w-btn-landing mt-3"
            value={t('GP_LANDING_PLAYPOINTS')}
            to={{
              pathname: ROUTE_SELECT_RECEIVER,
              search: toQuery({ productType: PLAYPOINT }),
            }}
          />
        </Flex>
      </Section>

      {/* Redeem Slider */}
      <div className="promo-redeem">
        <Section>
          <Typography
            translationKey="GP_LANDING_GAMEOFFERSREWARDS"
            color="white"
            variant="h1"
            weight="extra-bold"
            component="h1"
            className="mb-2 px-3"
            textCenter
          />

          <Paragraph>{t('GP_PLANS_GAMECURRENCYASSETSVOUCHERS')}</Paragraph>
          <SliderCustom>
            <GEvent
              event={gtm.events.LANDING_STORE_BANNER}
              payload={{
                image: IMG_REWARD_1.alt,
              }}
            >
              <FallBackImage
                fallback={IMG_REWARD_1.fallback}
                src={IMG_REWARD_1.src}
                alt={IMG_REWARD_1.alt}
              />
            </GEvent>

            <GEvent
              event={gtm.events.LANDING_STORE_BANNER}
              payload={{
                image: IMG_REWARD_2.alt,
              }}
            >
              <FallBackImage
                fallback={IMG_REWARD_2.fallback}
                src={IMG_REWARD_2.src}
                alt={IMG_REWARD_2.alt}
              />
            </GEvent>

            <GEvent
              event={gtm.events.LANDING_STORE_BANNER}
              payload={{
                image: IMG_REWARD_3.alt,
              }}
            >
              <FallBackImage
                fallback={IMG_REWARD_3.fallback}
                src={IMG_REWARD_3.src}
                alt={IMG_REWARD_3.alt}
              />
            </GEvent>
          </SliderCustom>

          <ActionItem
            variant="body"
            weight="semi-bold"
            rounded
            flex
            type={ActionItemTypes.types.BLUE_OUTLINE}
            className=".h-48 w-btn-landing mt-2 mb-2"
            value={t('GP_PLANS_EXPLORESTORE')}
            to={{
              pathname: '/',
              hash: 'login',
            }}
          />
        </Section>
      </div>

      {/* Facebook Section */}
      <Section>
        <Typography
          translationKey="GP_PLANS_UNLIMITEDFB"
          color="white"
          variant="h1"
          weight="extra-bold"
          component="h1"
          className="mb-2 px-3"
          textCenter
        />
        <Paragraph>{t('GP_PLANS_SUPPORTYOURFAVOURITE')}</Paragraph>
        <Image src={IMG_PROMO_FACEBOOK.src} alt={IMG_PROMO_FACEBOOK.alt} />
      </Section>

      {/* High Speed Data */}
      <Section>
        <Typography
          translationKey="GP_PLANS_PLUSEXTRAHIGHSPEED"
          color="white"
          variant="h1"
          weight="extra-bold"
          component="h1"
          className="mb-2 px-3"
          textCenter
        />
        <Paragraph>{t('GP_PLANS_GETEXTRADATA')}</Paragraph>
        <Image src={IMG_PROMO_HIGHSPEED.src} alt={IMG_PROMO_HIGHSPEED.alt} />
      </Section>

      {/* Discount */}
      <div className="promo-discount">
        <Section>
          <Typography
            translationKey="GP_PLANS_GETDISCOUNT"
            color="white"
            variant="h1"
            weight="extra-bold"
            component="h1"
            className="mb-2 px-3"
            textCenter
          />
          <div className="promo-discount-content">
            <Paragraph>{t('GP_PLANS_GADGETSAPPARELSFOOD')}</Paragraph>
          </div>
          <Image src={IMG_PROMO_DISCOUNT.src} alt={IMG_PROMO_DISCOUNT.alt} />
        </Section>
      </div>

      {/* PlanContainer */}
      <PlanContainer />

      {/* Gamers Section */}
      <div className="promo-gamers">
        <Flex>
          <Typography
            translationKey="GP_MEMBERSHIP_JOINPLAYUNLIMTED"
            color="white"
            variant="h1"
            weight="extra-bold"
            component="h1"
            className="mb-4 px-3"
            textCenter
          />
          <Image src={IMG_PROMO_GAMERS.src} alt={IMG_PROMO_GAMERS.alt} />
        </Flex>
      </div>

      {/* Login Dialog */}
      <LoginDialog show={show} onClose={onLoginClose} {...props} />
    </DefaultTemplate>
  );
};

export default HomePage;
