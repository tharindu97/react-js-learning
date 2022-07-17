/*
 * File: index.js
 * Project: cellcard-play-pwa
 * Author: Dilum Sanjaya (dranasinghe@mitrai.com)
 * Copyright 2020 - 2020 Mitra Innovation Ltd., Mitra Innovation Ltd.
 */
import React, { useState } from 'react';
import useQueryParams from 'hooks/useQueryParams';

import Typography from 'components/atoms/Typography';
import { useTranslation } from 'react-i18next';
import PhoneInput from 'components/molecules/PhoneInput';
import GenericTemplate from 'templates/GenericTemplate';
import Button from 'components/atoms/Button';
import { PLAN } from 'constants/Globals';

import helpers from 'utils/helpers';
import { ROUTE_PLAYPOINTS, ROUTE_PLAN_SELECT } from 'constants/Routes';

import './style.scss';

const BuyOther = () => {
  const { querySearch } = useQueryParams();

  const { t } = useTranslation();
  const [phone, setPhone] = useState('');
  const [infoMessage, setInfoMessage] = useState(false);
  const [disableSubmit, setDisableSubmit] = useState(true);

  const handlePhoneChange = (e) => {
    const val = e.target.value;
    if (val.length < 9) {
      setPhone(val);
    }
    if (helpers.validatePhoneNumber(val)) {
      setInfoMessage(false);
      setDisableSubmit(false);
    } else {
      setInfoMessage(true);
      setDisableSubmit(true);
    }
  };
  const isPlan = querySearch.productType === PLAN;
  const pathNext = isPlan ? ROUTE_PLAN_SELECT : ROUTE_PLAYPOINTS;

  const hasError = Boolean(disableSubmit);

  return (
    <GenericTemplate titleTranslateKey="GP_BUYSUBSCRIPTION_CELLCARDUSER" back>
      <div className="buy-others">
        <div className="buy-others-top">
          <div className="px-3">
            <div className="buy-others-top-description">
              {isPlan
                ? t('GP_BUYSUBSCRIPTION_CELLCARDUSERNUMBER')
                : t('GP_PLAYPOINTS_INPUTNUMBER')}
            </div>
            <PhoneInput
              label={t('GP_BUY_PHONENUMBER')}
              error={false}
              initialValue={phone}
              maxLength={10}
              onChange={handlePhoneChange}
            />
            {infoMessage && (
              <Typography
                translationKey="GP_SYSTEMMESSAGES_VALPHONEINPUT"
                color="red-1"
                variant="sub1"
                weight="regular"
                component="p"
                className="mt-2"
              />
            )}
          </div>
        </div>
        <Button
          size="lg"
          to={
            hasError
              ? null
              : {
                  pathname: pathNext,
                  search: new URLSearchParams({
                    ...querySearch,
                    receiver: phone,
                  }).toString(),
                }
          }
          block
          translationKey="GP_BUYSUBSCRIPTION_NEXT"
          disabled={hasError}
        />
      </div>
    </GenericTemplate>
  );
};

export default BuyOther;
