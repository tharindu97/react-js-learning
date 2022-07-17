/*
 * File: index.js
 * Project: cellcard-play-pwa
 * Author: Dilum Sanjaya (dranasinghe@mitrai.com)
 * File Created: Tuesday, 08th September 2020 09:50 am
 * Module: Cellcard Play Frontend
 * Copyright 2020 - 2020 Mitra Innovation Ltd., Mitra Innovation Ltd.
 */
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  ROUTE_REFERRAL_HISTORY,
  ROUTE_ERROR,
  ROUTE_SHARE_REFERRAL,
  ROUTE_REFERRAL_TERMS,
} from 'constants/Routes';
import toLocal from 'utils/languageOps';
import ButtonUnderlined from 'components/atoms/ButtonUnderlined';
import GenericTemplate from 'templates/GenericTemplate';
import Typography from 'components/atoms/Typography';
import Button from 'components/atoms/Button';
import Points from 'components/molecules/Points';
import Header from 'components/organisms/Referrals/Header';
import api from 'api';
import { useHistory } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';
import { toDateString, toDottedDT } from 'utils/timeOps';
import _ from 'lodash';

import './style.scss';

const ReferralDetails = () => {
  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const history = useHistory();
  const { t } = useTranslation();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await Promise.all([
          api.referrals.getDetails(),
          api.referrals.getHistory({
            pageNumber: 1,
            pageSize: 10,
          }),
        ]);
        const [summary, historyList] = response;
        setDetails({ summary: summary.data, historyList: historyList.data });
        setLoading(false);
      } catch (error) {
        history.replace(ROUTE_ERROR);
      }
    }
    fetchData();
  }, []);

  const onShare = () => {
    if (navigator.share) {
      navigator.share({
        text: `I am loving my Unlimited Play experience! Use the code ${details.summary.referralCode} when you purchase Unlimited Play plan and earn reward.`,
        url: ROUTE_SHARE_REFERRAL,
      });
    }
  };

  if (loading) {
    return (
      <div className="loader-spinner">
        <Spinner animation="border" variant="primary" />
      </div>
    );
  }

  const historyItems = _.get(details, 'historyList.history', []);
  return (
    <GenericTemplate title={t('GP_REFERRAL_PROFILE_REFERFRIENDS')} back>
      <div className="px-3 pt-1 pb-4">
        <div className="">
          <Header />
          <div className="referral-details-separator" />
        </div>
        <Typography
          value={t('GP_REFERRAL_NOTE')}
          color="gray"
          variant="sub1"
          weight="regular"
          component="div"
          className="mt-3"
          lineHeight={12}
        />
        <div className="mt-2 d-flex">
          <Typography
            value={t('GP_REFERRAL_REFERRER_POINTS')}
            color="white"
            variant="body"
            weight="regular"
            component="div"
            className="lh-removed"
          />
          <Points size={16} className="mx-1" />
          <Typography
            value={details.summary.senderEarnPoints.toLocaleString()}
            color="white"
            variant="body"
            weight="regular"
            component="div"
            className="lh-removed"
          />
        </div>
        <div className="d-flex mt-2">
          <Typography
            value={t('GP_REFERRAL_REFEREE_POINTS')}
            color="white"
            variant="body"
            weight="regular"
            component="div"
            className="lh-removed"
          />
          <Points size={16} className="mx-1" />
          <Typography
            value={details.summary.receiverEarnPoints.toLocaleString()}
            color="white"
            variant="body"
            weight="regular"
            component="div"
            className="lh-removed"
          />
        </div>
        <div className="px-3 mt-3">
          <div className="referral-details-separator" />
          <div className="d-flex align-items-center flex-column text-white mt-3">
            <Typography
              value={toLocal(t('GP_REFERRAL_CAMPAIGN_EXPIRY'), {
                expiry: toDateString(t, details.summary.expiry),
              })}
              color="gray"
              variant="sub1"
              weight="regular"
              component="div"
            />
            <ButtonUnderlined
              link={{
                pathname: ROUTE_REFERRAL_TERMS,
                state: {
                  dateExpire: toDateString(t, details.summary.expiry),
                  coinsSelf: details.summary.senderEarnPoints.toLocaleString(),
                  coinsFriend: details.summary.receiverEarnPoints.toLocaleString(),
                },
              }}
              className="text-white mt-2"
            >
              {t('GP_MORE_TERMSANDCOND')}
            </ButtonUnderlined>
          </div>
          <div className="referral-details-separator mt-3" />

          <div className="d-flex py-6 px-4 justify-content-between my-3 bg-gray-4 border-10 align-items-center">
            <Typography
              value={details.summary.referralCode}
              color="white"
              variant="sub1"
              weight="regular"
              component="div"
            />
            <div
              className="text-cta-blue referral-details-button"
              onClick={() =>
                navigator.clipboard.writeText(details.summary.referralCode)
              }
              role="button"
              tabIndex={0}
              onKeyDown={() => {}}
            >
              {t('GP_REFERRAL_CODE_COPY')}
            </div>
          </div>
          <Button
            label={t('GP_REFERRAL_CODE_SHARE')}
            rounded
            size="lg"
            block
            onClick={onShare}
          />
        </div>

        <div className="bg-gray-2 py-3 px-4 mt-4 border-10">
          <Typography
            value={t('GP_REFERRAL_REWARDS_TOTAL')}
            color="white"
            variant="h3"
            weight="semi-bold"
            component="h3"
            textCenter
          />
          <div className="d-flex align-items-center justify-content-center mt-2">
            <Points size={24} />
            <Typography
              value="24,500"
              color="cellcard"
              variant="h1"
              weight="semi-bold"
              component="h1"
              className="lh-removed ml-1"
            />
          </div>
          <div className="referral-details-history-list mt-4" />
          {!historyItems.length && (
            <Typography
              value="Keep sharing with your friends, your referral rewards history will appear here."
              color="gray"
              variant="sub1"
              weight="regular"
              component="div"
              className="my-4"
              textCenter
            />
          )}
          {historyItems.map((item) => (
            <div className="referral-details-history-item " key={item.id}>
              <Typography
                value={item.receivedFrom}
                color="white"
                variant="body"
                weight="regular"
                component="div"
              />
              <div className="d-flex justify-content-between align-items-end">
                <Typography
                  value={toDottedDT(t, item.earnedDate)}
                  color="gray"
                  variant="sub2"
                  weight="regular"
                  component="div"
                />
                <Typography
                  value={`${item.earnedPoints > 0 ? '+' : ''}${
                    item.earnedPoints
                  }`}
                  color="cta-blue"
                  variant="body"
                  weight="semi-bold"
                  component="div"
                />
              </div>
            </div>
          ))}
          {(historyItems.length && (
            <div className="d-flex justify-content-center mt-3">
              <ButtonUnderlined
                link={ROUTE_REFERRAL_HISTORY}
                className="referral-details-history-btn-view-all"
              >
                {t('GP_REFERRAL_REWARDS_VIEWALL')}
              </ButtonUnderlined>
            </div>
          )) ||
            null}
        </div>
      </div>
    </GenericTemplate>
  );
};

export default ReferralDetails;
