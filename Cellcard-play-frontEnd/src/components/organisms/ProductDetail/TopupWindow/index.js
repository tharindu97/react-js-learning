/*
 * File: index.js
 * Project: cellcard-play-pwa
 * Author: Dilum Sanjaya (dranasinghe@mitrai.com)
 * File Created: Wednesday, 09th September 2020 02:15 pm
 * Module: Cellcard Play Frontend
 * Copyright 2020 - 2020 Mitra Innovation Ltd., Mitra Innovation Ltd.
 */

import React, { useState, useContext } from 'react';
import { UserContext } from 'providers/User';

import Typography from 'components/atoms/Typography';
import Icon from 'components/atoms/Icon';
import { useTranslation } from 'react-i18next';
import PhoneInput from 'components/molecules/PhoneInput';
import Button from 'components/atoms/Button';
import i18next from 'i18next';
import _ from 'lodash';
import helpers from 'utils/helpers';
import { AREA_CODE } from 'constants/Defaults';

import './style.scss';

const TopupWindow = ({ item, onContinue, onClose }) => {
  const { t } = useTranslation();
  const userDetails = useContext(UserContext);
  const { msisdn } = userDetails.user || {};
  const [phone, setPhone] = useState(msisdn.slice(4));
  const [infoMessage, setInfoMessage] = useState(false);
  const currentLanguage = i18next.language;

  const handlePhoneChange = (e) => {
    const val = e.target.value;
    if (val.length < 9) {
      setPhone(val);
    }
    if (helpers.validatePhoneNumber(val)) {
      setInfoMessage(false);
    } else {
      setInfoMessage(true);
    }
  };
  return (
    <div className="mobile-topup-window">
      <header
        className="generic-header d-flex align-items-center"
        style={{ fontSize: '24px', padding: '0px 14px' }}
      >
        <button
          className="generic-header-button-nulled"
          type="button"
          onClick={onClose}
        >
          <Icon icon="chevron_left" />
        </button>

        <Typography
          value={_.get(item, `content.${currentLanguage}.displayName`)}
          color="white"
          variant="h2"
          weight="semi-bold"
          component="h2"
          textCenter
          className="flex-grow-1 generic-header-truncated-ellipses "
        />
      </header>
      <div className="px-3 mt-3">
        <PhoneInput
          label={t('GP_BUY_PHONENUMBER')}
          error={false}
          initialValue={phone}
          maxLength={10}
          onChange={handlePhoneChange}
        />
        <Typography
          value={
            infoMessage
              ? t('GP_SYSTEMMESSAGES_INLINEONSUBMISSIONMSG')
              : t('GP_TOPUP_NOTE')
          }
          color={infoMessage ? 'red-1' : 'gray'}
          variant="sub1"
          weight="regular"
          component="div"
          className="mt-2"
        />
      </div>
      <div className="mobile-topup-window-button">
        <Button
          size="lg"
          onClick={() => {
            onContinue({ ...item, receiver: `${AREA_CODE}${phone}` });
          }}
          block
          label={t('GP_GENERAL_NEXT')}
          disabled={false}
        />
      </div>
    </div>
  );
};

export default TopupWindow;
