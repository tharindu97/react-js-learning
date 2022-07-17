/*
 * Author: Dilum Sanjaya (dranasinghe@mitrai.com)
 * Date: Tuesday, 12th August 2020 12:00 pm
 * Module: Cellcard Play Frontend
 * Copyright © 2020 Cellcard Play. All rights reserved.
 */
import React, { useState } from 'react';
import Points from 'components/molecules/Points';
import ImageRounded from 'components/atoms/ImageRounded';
import Typography from 'components/atoms/Typography';
import Icon from 'components/atoms/Icon';
import { useTranslation } from 'react-i18next';
import toLocal from 'utils/languageOps';
import { toDateString } from 'utils/timeOps';
import { REDEEM_COINS } from 'constants/Images';
import _ from 'lodash';
import GenericDialog from 'components/molecules/GenericDialog';
import RedeemCoin from 'components/organisms/PlayPoints/RedeemCoin';
import { Link } from 'react-router-dom';
import {
  ROUTE_SELECT_RECEIVER,
  ROUTE_ME_PLAYPOINTS,
  ROUTE_STORE,
} from 'constants/Routes';

import './style.scss';

const Summary = ({ data }) => {
  const pointsTotal = _.get(data, 'points') || 0;
  const pointsExpire = _.get(data, 'expiry.points') || 0;
  const expireDate = _.get(data, 'expiry.date');
  const [showEditDialogue, setEditDialogue] = useState(false);

  const { t } = useTranslation();
  return (
    <>
      <GenericDialog
        show={showEditDialogue}
        onClose={() => {
          setEditDialogue(false);
        }}
        loading={false}
        title={t('GP_PLAYCOINCODE_TITLE')}
      >
        <RedeemCoin show={showEditDialogue} onConfirm={() => {}} name="" />
      </GenericDialog>
      <div className="summary">
        <div className="summary-points">
          <div className="summary-points-title">
            {t('GP_NONCELLCARDPROFILE_PLAYPOINTSTITLE')}
          </div>
          <div className="d-flex align-items-center justify-content-center mt-2">
            <Points size={28} />
            <Typography
              value={pointsTotal.toLocaleString()}
              color="cellcard"
              variant="h1"
              weight="semi-bold"
              component="div"
              className="ml-1"
            />
          </div>
          <div className="summary-points-expiry">
            {expireDate ? (
              <>
                <Typography
                  value={toLocal(t('GP_PLAYPOINTS_SUMMARYNOTE'), {
                    coins: pointsExpire.toLocaleString(),
                    date: toDateString(t, expireDate),
                  })}
                  color="white"
                  variant="sub1"
                  weight="semi-bold"
                  component="span"
                />
              </>
            ) : (
              <Typography
                translationKey="GP_NONCELLCARDPROFILE_PLAYPOINTSDESC"
                color="white"
                variant="sub1"
                weight="semi-bold"
                component="span"
              />
            )}
          </div>
        </div>

        <div className="bg-gray-2 border-10 mt-2 pt-3">
          <div className="summary-actions">
            <Link
              to={{
                pathname: ROUTE_SELECT_RECEIVER,
                state: { from: ROUTE_ME_PLAYPOINTS },
                search: new URLSearchParams({
                  productType: 'PLAYPOINT',
                }).toString(),
              }}
              className="summary-actions-buy link-nulled px-2"
            >
              <div>
                <ImageRounded
                  src="/images/buy_points/buy-points.svg"
                  size={55}
                />
              </div>
              <div className="summary-actions-buy-text text-center">
                {t('GP_PLAYPOINTS_BUYPOINTS')}
              </div>
            </Link>

            <Link
              className="summary-actions-redeem link-nulled px-2"
              to={ROUTE_STORE}
            >
              <div>
                <ImageRounded
                  src="/images/buy_points/redeem-points.svg"
                  size={55}
                />
              </div>
              <div className="summary-actions-redeem-text text-center">
                {t('GP_PLAYPOINTS_REDEEMPOINTS')}
              </div>
            </Link>
          </div>
          <div
            className="summary-actions-redeem-code mt-3 px-3 py-3 d-flex align-items-center text-cta-blue"
            onClick={() => setEditDialogue(true)}
            role="button"
            tabIndex={0}
            onKeyDown={() => setEditDialogue(true)}
          >
            <img
              src={REDEEM_COINS.src}
              alt={REDEEM_COINS.alt}
              className="summary-actions-redeem-coins-img"
            />
            <Typography
              value={t('GP_PLAYCOINCODE_TRIGGER')}
              color="white"
              variant="body"
              weight="semi-bold"
              component="div"
              className="pl-2"
            />
            <div className="flex-grow-1" />
            <Icon icon="chevron_right" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Summary;
