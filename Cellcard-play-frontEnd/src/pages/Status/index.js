/*
 * File: index.js
 * Project: cellcard-play-pwa
 * Author: Dilum Sanjaya (dranasinghe@mitrai.com)
 * Copyright 2020 - 2020 Mitra Innovation Ltd., Mitra Innovation Ltd.
 */
import React, { useEffect, useState, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { Spinner } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import { UserContext } from 'providers/User';
import Typography from 'components/atoms/Typography';
import ActionItem from 'components/atoms/ActionItem';
import api from 'api';
import { ROUTE_ME } from 'constants/Routes';
import { statusObj, itemVisibility, generateDescription } from 'utils/status';
import BrandLogo from 'components/atoms/BrandLogo';
import { STATUS_PLAYPOINTS, STATUS_POINTS } from 'constants/AssetURLs';
import { toLocalNum } from 'utils/formatters';
import i18next from 'i18next';
import { PACKAGE_TYPES } from 'constants/Globals';
import _ from 'lodash';

import './style.scss';

const Status = () => {
  const [status, changeStatus] = useState(['PLAN', 'OTHER', 'PENDING']);
  const [orderDetails, changeOrderDetails] = useState({});
  const [isLoading, onLoading] = useState(true);
  const [showLoader, onShowLoading] = useState(true);
  const location = useLocation();
  const userDetails = useContext(UserContext);
  const { msisdn } = userDetails.user || {};
  const currentLanguage = i18next.language;
  const { t } = useTranslation();
  const transactionId = location.search.slice(1).split('transactionId=')[1];

  const getStatesFromResponse = (res) => {
    if (!res.data.status) {
      return ['PLAN', 'ME', 'ERROR'];
    }

    const purchaseType = res.data.type;
    const purchaseReceiver = res.data.msisdn === msisdn ? 'ME' : 'OTHER';
    const purchaseStatus = res.data.status;
    return [purchaseType, purchaseReceiver, purchaseStatus];
  };

  const request = (numOfTries) => {
    api.orders
      .order(transactionId)
      .then((res) => {
        if (res.data.status === 'PENDING' && numOfTries < 10) {
          onLoading(false);
          changeStatus(getStatesFromResponse(res));
          changeOrderDetails(res.data);
          setTimeout(() => {
            request(numOfTries + 1);
          }, 5000);
        } else {
          onLoading(false);
          onShowLoading(false);

          changeStatus(getStatesFromResponse(res));
          changeOrderDetails(res.data);
        }
      })
      .catch(() => {
        if (numOfTries < 10) {
          setTimeout(() => {
            request(numOfTries + 1);
          }, 5000);
        } else {
          onLoading(false);
          onShowLoading(false);
          changeStatus(['PLAN', 'ME', 'ERROR']);
          changeOrderDetails({});
        }
      });
  };

  useEffect(() => {
    request(0);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  if (isLoading) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <Spinner animation="border" variant="primary" />
      </div>
    );
  }

  const [purchaseType, purchasePerson, PurchaseStatus] = status;
  const currentState = statusObj[purchaseType][purchasePerson][PurchaseStatus];
  const itemVisibilities = itemVisibility({
    purchaseType,
    purchasePerson,
    PurchaseStatus,
  });

  const details = {
    ...orderDetails,
    ..._.get(orderDetails, `content.${currentLanguage}`, {}),
  };
  delete details.content;
  if (details.value) {
    details.value = `<span class="text-cellcard">$${details.value}</span>`;
  }

  const isPlan = details.type === PACKAGE_TYPES.PLAN;
  return (
    <div className="d-flex flex-column vh-100">
      <div className="px-5 flex-grow-1 text-center">
        <div className="mt-3">
          {itemVisibilities.showMembershipCard ? (
            <div className="status-page-membership-card mt-5">
              <div className="status-page-membership-card-logo">
                <BrandLogo />
              </div>
              <img src={orderDetails.imageUrl} alt="membership-card" />
              <div className="status-page-membership-card-text">
                {_.get(orderDetails, `content.${currentLanguage}.displayName`)}
              </div>
            </div>
          ) : (
            <img
              src={currentState.image}
              className="status-page-main-image"
              alt="status"
            />
          )}
        </div>

        <Typography
          translationKey={currentState.title}
          color="white"
          variant="h1"
          weight="extra-bold"
          component="h1"
          className="mt-2"
        />

        <div
          dangerouslySetInnerHTML={{
            __html: generateDescription(status.join('_'), t, details),
          }}
        />
        {showLoader && (
          <div className="pt-4">
            <Spinner animation="border" variant="primary" />
          </div>
        )}

        {itemVisibilities.showPlaypoints && (
          <>
            <div className="">
              {' '}
              <img
                src={STATUS_PLAYPOINTS}
                alt="playpoints"
                className="status-page-package-image"
              />
            </div>
            <div className="status-page-points-container px-3 py-1">
              <Typography
                value="+"
                color="white"
                variant="h1"
                weight="semi-bold"
                component="span"
                className="status-page-points-item mr-1"
                show={isPlan}
              />
              <img
                src={STATUS_POINTS}
                alt="playpoints"
                className="status-page-points-image ml-1"
              />
              <Typography
                value={toLocalNum(_.get(orderDetails, 'points'))}
                color="white"
                variant="h1"
                weight="semi-bold"
                component="span"
                className="status-page-points-item ml-2"
              />
            </div>
          </>
        )}
      </div>
      <div className="px-4 status-button-bottom">
        {!showLoader && (
          <ActionItem
            variant="body"
            weight="semi-bold"
            rounded
            flex
            className=".h-48"
            translationKey={currentState.btnTxt}
            to={ROUTE_ME}
          />
        )}
      </div>
    </div>
  );
};

export default Status;
