/*
 * File: index.js
 * Project: cellcard-play-pwa
 * File Created: Friday, 8th August 2020 14:00 pm
 * Author: Jerobert (zjerobert@mitrai.com)
 * Copyright 2020 - 2020 Mitra Innovation Ltd., Mitra Innovation Ltd.
 */

import React from 'react';

import BoxListing from 'components/molecules/BoxListing';
import GenericTemplate from 'templates/GenericTemplate';
import useQueryParams from 'hooks/useQueryParams';
import useAuthorization from 'hooks/useAuthorization';
import { SUBSCRIBE_TO_PLAY_MEMBERSHIP_FOR_SELF } from 'constants/Authorization';
import { useTranslation } from 'react-i18next';
import clsx from 'clsx';
import { PLAN } from 'constants/Globals';
import Typography from 'components/atoms/Typography';

import {
  ROUTE_PLAYPOINTS,
  ROUTE_VERIFY_RECEIVER,
  ROUTE_PLAN_SELECT,
} from 'constants/Routes';

const BuyPlayUnlimited = () => {
  const { querySearch } = useQueryParams();
  const isAuthorizedTo = useAuthorization();
  const { t } = useTranslation();
  const canPurchasePlan = isAuthorizedTo(SUBSCRIBE_TO_PLAY_MEMBERSHIP_FOR_SELF);
  const isPlan = querySearch.productType === PLAN;
  const pathNext = isPlan ? ROUTE_PLAN_SELECT : ROUTE_PLAYPOINTS;

  const disableSelfBuy = isPlan && !canPurchasePlan;

  return (
    <GenericTemplate
      cross
      title={isPlan ? t('GP_HAMBURGER_BUYPLAY') : t('GP_LANDING_PLAYPOINTS')}
    >
      {isPlan && (
        <Typography
          translationKey="GP_BUYSUBSCRIPTION_DESCRIPTION"
          color="gray"
          variant="sub1"
          weight="regular"
          component="div"
          className="px-3 py-1"
          textCenter
        />
      )}
      <div className="buyplayunlimited">
        <div className="px-3">
          <BoxListing
            link={{
              pathname: pathNext,
              search: new URLSearchParams(querySearch).toString(),
            }}
            disabled={disableSelfBuy}
          >
            <small className={clsx(!disableSelfBuy && 'text-white')}>
              {t('GP_PLAYPOINTS_BUYFORME')}
            </small>
          </BoxListing>
          <BoxListing
            link={{
              pathname: ROUTE_VERIFY_RECEIVER,
              search: new URLSearchParams(querySearch).toString(),
            }}
          >
            <small className="text-white">
              {t(
                isPlan
                  ? 'GP_BUYSUBSCRIPTION_FORACELLCARDUSER'
                  : 'GP_PLAYPOINTS_BUYFORANOTHER',
              )}
            </small>
          </BoxListing>
        </div>
      </div>
    </GenericTemplate>
  );
};

export default BuyPlayUnlimited;
