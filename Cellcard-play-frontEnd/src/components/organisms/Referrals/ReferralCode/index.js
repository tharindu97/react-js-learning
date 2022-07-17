/*
 * File: index.js
 * Project: cellcard-play-pwa
 * Author: Dilum Sanjaya (dranasinghe@mitrai.com)
 * File Created: Tuesday, 08th September 2020 03:58 pm
 * Module: Cellcard Play Frontend
 * Copyright 2020 - 2020 Mitra Innovation Ltd., Mitra Innovation Ltd.
 */

import React, { useState } from 'react';
import Typography from 'components/atoms/Typography';
import Button from 'components/atoms/Button';
import Icon from 'components/atoms/Icon';
import GenericDialog from 'components/molecules/GenericDialog';
import ReferralInput from 'components/organisms/Referrals/ReferralInput';
import { useTranslation } from 'react-i18next';
import toLocal from 'utils/languageOps';
import api from 'api';
import _ from 'lodash';
import './style.scss';

const ReferralCode = ({ planCode, promoCode, setPromoCode, receiver }) => {
  const [showEditDialogue, setEditDialogue] = useState(false);
  const [errorType, setErrorCode] = useState(null);
  const [loading, setLoading] = useState(false);
  const [points, setPoints] = useState(null);
  const { t } = useTranslation();
  const onConfirm = (code) => {
    setErrorCode(null);
    setLoading(true);
    api.referrals.validateCode({ referralCode: code, receiver }).then(
      (res) => {
        setLoading(false);
        setPromoCode(code);
        setPoints(_.get(res, 'data.earnPoints'));
        setEditDialogue(false);
      },
      (res) => {
        setLoading(false);
        const errorCode = _.get(res, 'data.errorCode');
        setErrorCode(errorCode);
      },
    );
  };

  const onRemove = () => {
    setPoints(null);
    setPromoCode(null);
  };
  if (!promoCode) {
    return (
      <>
        <div
          className="bg-gray-2 border-10 py-3 px-3 mt-2 d-flex justify-content-between align-items-center"
          onClick={() => setEditDialogue(true)}
          role="button"
          tabIndex={0}
          onKeyDown={() => setEditDialogue(true)}
        >
          <Typography
            translationKey="GP_INPUTREFERRAL_TRIGGER"
            color="gray"
            variant="body"
            weight="regular"
            component="div"
            className="lh-removed"
          />
          <div className="checkout-referral-chevron">
            <Icon icon="chevron_right" />
          </div>
        </div>
        <GenericDialog
          show={showEditDialogue}
          onClose={() => {
            setEditDialogue(false);
          }}
          loading={loading}
          title={t('GP_BUYSUBSCRIPTION_REFERRALCODE')}
        >
          <ReferralInput
            show={showEditDialogue}
            onConfirm={onConfirm}
            planCode={planCode}
            name=""
            errorType={errorType}
          />
        </GenericDialog>
      </>
    );
  }
  return (
    <div className="bg-gray-2 border-10 py-2 px-3 mt-2">
      <Typography
        value={t('GP_BUYSUBSCRIPTION_REFERRALCODE')}
        color="gray"
        variant="sub1"
        weight="regular"
        component="div"
      />
      <div className="checkout-referral-code-separator px-1 py-2 d-flex justify-content-between align-items-end">
        <div className="d-flex align-items-end">
          <Typography
            value={promoCode}
            color="white"
            variant="h3"
            weight="regular"
            component="div"
            className="lh-removed"
          />
          <div className="checkout-referral-tick-mark">
            <span>✓</span>
          </div>
        </div>
        <div className="">
          <Button
            label="Remove"
            variant="dark"
            rounded
            size="sm"
            onClick={onRemove}
          />
        </div>
      </div>
      <Typography
        value={toLocal(t('GP_APPLIEDREFERRAL_REWARD'), {
          points: points && points.toLocaleString(),
        })}
        color="cellcard"
        variant="body"
        weight="semi-bold"
        component="div"
        className="mt-2"
        textCenter
      />
    </div>
  );
};

export default ReferralCode;
