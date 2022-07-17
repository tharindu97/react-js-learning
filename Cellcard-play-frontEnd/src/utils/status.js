/* eslint-disable no-template-curly-in-string */
/* eslint-disable react/display-name */
import React from 'react';
import _ from 'lodash';
import { toLocalNum, toPhoneNumberString } from 'utils/formatters';
import {
  STATUS_SUCCESS,
  STATUS_PENDING,
  STATUS_FAILED,
  STATUS_ERROR,
} from 'constants/AssetURLs';
import StatusConstants from 'constants/Status';

export const statusObj = {
  PLAN: {
    ME: {
      SUCCESS: {
        image: STATUS_SUCCESS,
        alt: 'success',
        btnTxt: 'GP_SYSTEMMESSAGES_LETSGO',
        title: 'GP_SYSTEMMESSAGES_AWESOME',
        description: (orderDetails, lan) => (
          <>
            Thank you for subscribing to{' '}
            {_.get(orderDetails, `content.${lan}.displayName`)}.
            <span className="text-cellcard">
              {' '}
              ${_.get(orderDetails, `value`)}
            </span>{' '}
            was charged from {_.get(orderDetails, `content.${lan}.paymentType`)}
            .
            <div className="mt-2" /> You can still enjoy the remaining data from
            your previous plan.
            <div className="mt-2" />
            Enjoy your free Play Points.
          </>
        ),
      },
      FAILED: {
        btnTxt: 'GP_SYSTEMMESSAGES_OKAY',
        image: STATUS_FAILED,
        alt: 'failed',
        title: 'GP_SYSTEMMESSAGES_SOMETHINGNOTRIGHT_TITLE',
        description: (orderDetails, lan) => (
          <>
            Unfortunately, your request to subscribe to{' '}
            {_.get(orderDetails, `content.${lan}.displayName`)} wasn’t
            successful. ${_.get(orderDetails, `value`)} was topped up to your
            Main Balance instead.
          </>
        ),
      },
      ERROR: {
        btnTxt: 'GP_SYSTEMMESSAGES_OKAY',
        image: STATUS_ERROR,
        alt: 'error',
        title: 'GP_SYSTEMMESSAGES_ERROROCCURRED',
        description: () => '',
      },
      PENDING: {
        btnTxt: 'GP_SYSTEMMESSAGES_OKAY',
        image: STATUS_PENDING,
        alt: 'pending',
        title: 'GP_SYSTEMMESSAGES_PENDINGTITLE',
        description: (orderDetails, lan) => (
          <>
            We are processing your request to subscribe to{' '}
            {_.get(orderDetails, `content.${lan}.displayName`)} for{' '}
            <span className="text-cellcard">
              {' '}
              ${_.get(orderDetails, `value`)}
            </span>{' '}
            via {_.get(orderDetails, `content.${lan}.paymentType`)}. We will
            notify you soon.
          </>
        ),
      },
    },
    OTHER: {
      SUCCESS: {
        btnTxt: 'GP_SYSTEMMESSAGES_OKAY',
        image: STATUS_SUCCESS,
        alt: 'success',
        title: 'GP_SYSTEMMESSAGES_SUCCESSPURCHASETITLE',
        description: (orderDetails, lan) => (
          <>
            Thank you for purchasing Unlimited{' '}
            {_.get(orderDetails, `content.${lan}.displayName`)} for{' '}
            {toPhoneNumberString(_.get(orderDetails, `msisdn`))}.{' '}
            <span className="text-cellcard">
              ${_.get(orderDetails, `value`)}
            </span>{' '}
            was charged from {_.get(orderDetails, `content.${lan}.paymentType`)}
            .
          </>
        ),
      },
      FAILED: {
        btnTxt: 'GP_SYSTEMMESSAGES_OKAY',
        image: STATUS_FAILED,
        alt: 'failed',
        title: 'GP_SYSTEMMESSAGES_SOMETHINGNOTRIGHT_TITLE',
        description: (orderDetails, lan) => (
          <>
            Unfortunately, your request to send{' '}
            {_.get(orderDetails, `content.${lan}.displayName`)} to{' '}
            {toPhoneNumberString(_.get(orderDetails, `msisdn`))} wasn’t
            successful. ${_.get(orderDetails, `value`)} was topped up to{' '}
            {toPhoneNumberString(_.get(orderDetails, `msisdn`))}’s Main Balance
            instead.
          </>
        ),
      },
      ERROR: {
        btnTxt: 'GP_SYSTEMMESSAGES_OKAY',
        image: STATUS_ERROR,
        alt: 'error',
        title: 'GP_SYSTEMMESSAGES_ERROROCCURRED',
        description: () => '',
      },
      PENDING: {
        btnTxt: 'GP_SYSTEMMESSAGES_OKAY',
        image: STATUS_PENDING,
        alt: 'pending',
        title: 'GP_SYSTEMMESSAGES_PENDINGTITLE',
        description: (orderDetails, lan) => (
          <>
            We are processing your request to send{' '}
            {_.get(orderDetails, `content.${lan}.displayName`)} to{' '}
            {toPhoneNumberString(_.get(orderDetails, `msisdn`))} for{' '}
            <span className="text-cellcard">
              ${_.get(orderDetails, `value`)}
            </span>{' '}
            via {_.get(orderDetails, `content.${lan}.paymentType`)}. You will be
            notified accordingly.
          </>
        ),
      },
    },
  },
  PLAYPOINT: {
    ME: {
      SUCCESS: {
        btnTxt: 'GP_SYSTEMMESSAGES_DONE',
        image: STATUS_SUCCESS,
        alt: 'success',
        title: 'GP_SYSTEMMESSAGES_SUCCESSPURCHASETITLE',
        description: (orderDetails, lan) => (
          <>
            You have successfully purchased{' '}
            {toLocalNum(_.get(orderDetails, `points`))} Play Points via{' '}
            {_.get(orderDetails, `content.${lan}.paymentType`)}.
          </>
        ),
      },
      FAILED: {
        btnTxt: 'GP_SYSTEMMESSAGES_DONE',
        image: STATUS_FAILED,
        alt: 'failed',
        title: 'GP_SYSTEMMESSAGES_SOMETHINGNOTRIGHT_TITLE',
        description: (orderDetails, lan) => (
          <>
            Sorry, your request to purchase{' '}
            {toLocalNum(_.get(orderDetails, `points`))} Play Points via{' '}
            {_.get(orderDetails, `content.${lan}.paymentType`)} has failed.
            Please try again.
          </>
        ),
      },
      ERROR: {
        btnTxt: 'GP_SYSTEMMESSAGES_DONE',
        image: STATUS_ERROR,
        alt: 'error',
        title: 'GP_SYSTEMMESSAGES_ERROROCCURRED',
        description: () => '',
      },
      PENDING: {
        btnTxt: 'GP_SYSTEMMESSAGES_DONE',
        image: STATUS_PENDING,
        alt: 'pending',
        title: 'GP_SYSTEMMESSAGES_PENDINGTITLE',
        description: (orderDetails, lan) => (
          <>
            We are processing your request to buy{' '}
            {toLocalNum(_.get(orderDetails, `points`))} Play Points via{' '}
            {_.get(orderDetails, `content.${lan}.paymentType`)}. You will be
            notified accordingly.
          </>
        ),
      },
    },
    OTHER: {
      SUCCESS: {
        btnTxt: 'GP_SYSTEMMESSAGES_DONE',
        image: STATUS_SUCCESS,
        alt: 'success',
        title: 'GP_SYSTEMMESSAGES_SUCCESSPURCHASETITLE',
        description: (orderDetails, lan) => (
          <>
            You have successfully purchased{' '}
            {toLocalNum(_.get(orderDetails, `points`))} Play Points for{' '}
            {toPhoneNumberString(_.get(orderDetails, `msisdn`))} via{' '}
            {_.get(orderDetails, `content.${lan}.paymentType`)}.
          </>
        ),
      },
      FAILED: {
        btnTxt: 'GP_SYSTEMMESSAGES_DONE',
        image: STATUS_FAILED,
        alt: 'failed',
        title: 'GP_SYSTEMMESSAGES_SOMETHINGNOTRIGHT_TITLE',
        description: (orderDetails, lan) => (
          <>
            Sorry, your request to purchase{' '}
            {toLocalNum(_.get(orderDetails, `points`))} Play Points for{' '}
            {toPhoneNumberString(_.get(orderDetails, `msisdn`))} via{' '}
            {_.get(orderDetails, `content.${lan}.paymentType`)} has failed.
            Please try again.
          </>
        ),
      },
      ERROR: {
        btnTxt: 'GP_SYSTEMMESSAGES_DONE',
        image: STATUS_ERROR,
        alt: 'error',
        title: 'GP_SYSTEMMESSAGES_ERROROCCURRED',
        description: () => '',
      },
      PENDING: {
        btnTxt: 'GP_SYSTEMMESSAGES_DONE',
        image: STATUS_PENDING,
        alt: 'pending',
        title: 'GP_SYSTEMMESSAGES_PENDINGTITLE',
        description: (orderDetails, lan) => (
          <>
            We are processing your request to buy{' '}
            {toLocalNum(_.get(orderDetails, `points`))} Play Points for{' '}
            {toPhoneNumberString(_.get(orderDetails, `msisdn`))} via{' '}
            {_.get(orderDetails, `content.${lan}.paymentType`)}. You will be
            notified accordingly.
          </>
        ),
      },
    },
  },
};

export const itemVisibility = ({
  purchaseType,
  purchasePerson,
  PurchaseStatus,
}) => {
  const showMembershipCard = Boolean(
    purchaseType === StatusConstants.PLAN &&
      purchasePerson === StatusConstants.ME &&
      PurchaseStatus === StatusConstants.SUCCESS,
  );
  const showPlaypoints = Boolean(
    purchasePerson === StatusConstants.ME &&
      PurchaseStatus === StatusConstants.SUCCESS,
  );

  return { showMembershipCard, showPlaypoints };
};

const PLAN_ME_SUCCESS = [
  [
    'GP_SYSTEMMESSAGES_SUBSCRIBED',
    'GP_SYSTEMMESSAGES_CHARGEDFROMDIGITALACCOUNT',
  ],
  ['GP_SYSTEMMESSAGES_FREEPLAYPOINTS'],
];
const PLAN_ME_PENDING = [
  [
    'GP_SYSTEMMESSAGES_DIGITALREQUESTPROCESSING',
    'GP_SYSTEMMESSAGES_WILLNOTIFY',
  ],
];
const PLAYPOINT_ME_PENDING = [
  [
    'GP_SYSTEMMESSAGES_DIGITALREQUESTPROCESSING',
    'GP_SYSTEMMESSAGES_WILLNOTIFY',
  ],
];
const PLAYPOINT_ME_SUCCESS = [
  ['GP_SYSTEMMESSAGES_BUYPOINTSFORMESUCCESSCONTENT'],
];
const PLAYPOINT_ME_FAILED = [['GP_NOTIFICATION_BUYPOINTSMEPENDINGFAILCONTENT']];
const PLAN_ME_FAILED = [['GP_NOTIFICATION_BUYPOINTSMEPENDINGFAILCONTENT']];

const PLAYPOINT_OTHER_FAILED = [
  ['GP_SYSTEMMESSAGES_BUYPOINTSFOROTHERSFAILCONTENT'],
];
const PLAN_OTHER_FAILED = [['GP_SYSTEMMESSAGES_BUYPOINTSFOROTHERSFAILCONTENT']];

const PLAYPOINT_OTHER_PENDING = [
  ['GP_SYSTEMMESSAGES_BUYPOINTSFOROTHERSPENDINGCONTENT'],
];
const PLAN_OTHER_PENDING = [
  ['GP_SYSTEMMESSAGES_BUYPOINTSFOROTHERSPENDINGCONTENT'],
];
const PLAYPOINT_OTHER_SUCCESS = [
  ['GP_NOTIFICATION_BUYPOINTSOTHERPENDINGSUCCESSCONTENT'],
];
const PLAN_OTHER_SUCCESS = [
  ['GP_NOTIFICATION_BUYPOINTSOTHERPENDINGSUCCESSCONTENT'],
];

const planDescriptions = {
  PLAN_ME_SUCCESS,
  PLAN_ME_PENDING,
  PLAYPOINT_ME_PENDING,
  PLAYPOINT_ME_SUCCESS,
  PLAYPOINT_ME_FAILED,
  PLAN_ME_FAILED,
  PLAYPOINT_OTHER_FAILED,
  PLAN_OTHER_FAILED,
  PLAYPOINT_OTHER_PENDING,
  PLAN_OTHER_PENDING,
  PLAYPOINT_OTHER_SUCCESS,
  PLAN_OTHER_SUCCESS,
};

export const generateDescription = (type, lang, details) => {
  const lanKeyArray = planDescriptions[type];
  if (!lanKeyArray) {
    return '';
  }

  const translatedSt = lanKeyArray.reduce((acc, cur) => {
    return `${acc}<div class="mt-2 purchase-screen-description">${cur
      .map((i) => lang(i))
      .join('')}</div>`;
  }, '');

  return Object.entries(details).reduce(
    (acc, [key, val]) => acc.split(`$\{${key}}`).join(val),
    translatedSt,
  );
};
