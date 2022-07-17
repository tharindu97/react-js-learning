/*
 * File: index.js
 * Project: cellcard-play-pwa
 * Author: Dilum Sanjaya (dranasinghe@mitrai.com)
 * File Created: Thursday, 17th September 2020 11:59 am
 * Module: Cellcard Play Frontend
 * Copyright 2020 - 2020 Mitra Innovation Ltd., Mitra Innovation Ltd.
 */

import React, { useState, useEffect } from 'react';
import Typography from 'components/atoms/Typography';
import { useTranslation } from 'react-i18next';
import Button from 'components/atoms/Button';

const RedeemCoin = ({ show, onConfirm, name }) => {
  const [value, setValue] = useState('');
  const [stratedTyping, onTypingStart] = useState(false);
  const { t } = useTranslation();
  useEffect(() => {
    setValue(name);
    onTypingStart(false);
  }, [show]);

  const handleInputChange = (e) => {
    setValue(e.target.value);
    if (!stratedTyping) {
      onTypingStart(true);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onConfirm(value);
  };
  return (
    <>
      <Typography
        value={t('GP_PLAYCOINCODE_SUBTITLE')}
        color="white"
        variant="body"
        weight="regular"
        component="div"
        textCenter
        className="mt-1"
      />
      <form onSubmit={handleSubmit} autoComplete="off">
        <div className="px-3 mb-5">
          <div className="d-flex flex-column edit-name-input-container">
            <Typography
              value={t('GP_PLAYCOINCODE_PLACEHOLDERTEXT')}
              color="gray"
              variant="sub1"
              weight="regular"
              component="div"
              className="mb-2"
            />
            <input
              type="text"
              id="referral-code"
              aria-describedby="redeem coin dialog"
              placeholder=""
              value={value}
              onChange={handleInputChange}
              className="edit-name-input"
            />
          </div>
          {stratedTyping && !value && (
            <Typography
              value="Name can not be empty"
              color="red-1"
              variant="sub1"
              weight="regular"
              component="span"
              className="mt-2"
            />
          )}
        </div>

        <Button
          label={t('GP_INPUTREFERRAL_APPLY')}
          block
          type="submit"
          disabled={!value}
          style={{ height: '48px' }}
        />
      </form>
    </>
  );
};

export default RedeemCoin;
