/* eslint-disable no-shadow */
/*
 * Author: Jude Fernando (jfernando@mitrai.com)
 * Date: Wednesday, 22nd July 2020 1:25:02 pm
 * Module: Cellcard Play Frontend
 * Copyright © 2020 Cellcard Play. All rights reserved.
 */

import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Container, Button } from 'react-bootstrap';

import OtpInput from 'react-otp-input';
import i18next from 'i18next';
import _ from 'lodash';
import ButtonUnderlined from 'components/atoms/ButtonUnderlined';
import FullPagePopup from 'components/molecules/FullPagePopup';
import Globals from 'constants/Globals';

import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from 'body-scroll-lock';
import useGTM from 'hooks/useGTM';
import DialogBox from '../../molecules/DialogBox';
import PhoneInput from '../../molecules/PhoneInput';
import Timer from '../../atoms/Timer';
import api from '../../../api';
import helpers from '../../../utils/helpers';
import './style.scss';

const LoginDialog = (props) => {
  const { t } = useTranslation();
  const currentLanguage = i18next.language;
  const { show, onClose } = props;
  const redirect =
    _.get(props, 'location.redirect') ||
    _.get(props, 'location.state.from') ||
    '/store';
  const gtm = useGTM();
  const [phone, setPhone] = useState();
  const [hasErrors, setHasErrors] = useState(false);
  const [disableSubmit, setDisableSubmit] = useState(true);
  const [step, setStep] = useState(1);
  const [errorMsg, setErrorMsg] = useState('GP_BUY_WEWILLSENDVERIFICATION');
  const [isLoading, setIsLoading] = useState(false);
  const [otp, setOtp] = useState(null);
  const [countdown, setCountdown] = useState(false);
  const [sessionID, setSessionID] = useState(null);
  const [lockApplied, setLockApplied] = useState(false);
  const [showFullPagePopup, onSetFullPagePopup] = useState(null);

  const onShowFullPagePopup = (type) => {
    onSetFullPagePopup(type);
  };
  const onCloseFullPagePopup = () => {
    onSetFullPagePopup(null);
  };

  const setInfoMessage = (hasErrors, step = 1) => {
    setHasErrors(hasErrors);
    if (hasErrors && step === 1) {
      setErrorMsg('GP_BUY_ENTERVALIDPHONENUMBER');
    }
    if (hasErrors && step === 2) {
      setErrorMsg('GP_BUY_CHECKYOURSMS');
    } else if (!hasErrors) {
      setErrorMsg('GP_BUY_WEWILLSENDVERIFICATION');
    }
    if (hasErrors && step === 3) {
      setErrorMsg('GP_BUY_CODEEXPIREDCHECKSMS');
    }
  };

  const handlePhoneChange = (e) => {
    const val = e.target.value;
    setPhone(val);
    if (val === '') {
      setInfoMessage(false);
      return;
    }
    if (helpers.validatePhoneNumber(val)) {
      setInfoMessage(false);
      setDisableSubmit(false);
    } else {
      setInfoMessage(true);
      setDisableSubmit(true);
    }
  };

  const goBack = () => {
    setInfoMessage(false);
    setStep(1);
  };

  const loginRedirect = () => {
    window.location.href = redirect;
  };

  const handlePhoneSubmit = () => {
    if (helpers.validatePhoneNumber(phone)) {
      const fullPhone = `+855${Number(phone)}`;
      setIsLoading(true);
      gtm.push(gtm.events.ACT_REGISTER_NUMBER_NEXT, {
        mobileNumber: fullPhone,
      });
      api.auth
        .signIn({
          msisdn: fullPhone,
        })
        .then(
          (response) => {
            setStep(2);
            setCountdown(true);
            setSessionID(response.data.sessionId);
            setOtp(null);
            setIsLoading(false);
          },
          () => {
            setIsLoading(false);
          },
        );
    }
  };

  const handleTimerEnd = () => {
    setCountdown(false);
  };

  const onOtpChange = (otp) => {
    setOtp(otp);
    if (otp.length === 6) {
      setIsLoading(true);
      const fullPhone = `+855${Number(phone)}`;
      api.auth
        .signInVerify({
          otp,
          msisdn: fullPhone,
          sessionId: sessionID,
          preferredLang: `${currentLanguage}`,
        })
        .then(
          (response) => {
            if (response.data.sessionId) {
              setSessionID(response.data.sessionId);
              setInfoMessage(true, 2);
              gtm.push(gtm.events.ACT_REGISTER_OTP_WRONG, { fullPhone });
              setIsLoading(false);
            } else if (
              response.data.accessToken &&
              response.data.refreshToken
            ) {
              gtm.push(gtm.events.OUTCOME_REGISTER_SIGN_IN, { fullPhone });
              window.localStorage.setItem(
                'auth',
                JSON.stringify(response.data),
              );
              Promise.all([
                api.users.get({
                  msisdn: fullPhone,
                }),
                api.users.features({
                  msisdn: fullPhone,
                }),
              ]).then((data) => {
                if (data[0].data.preferredLang) {
                  i18next.changeLanguage(data[0].data.preferredLang);
                }
                window.localStorage.setItem(
                  'user',
                  JSON.stringify(data[0].data),
                );
                window.localStorage.setItem(
                  'features',
                  JSON.stringify(data[1].data),
                );
                loginRedirect();
              });
            }
          },
          () => {
            gtm.push(gtm.events.ACT_REGISTER_OTP_WRONG, {});
            setInfoMessage(true, 3);
            setIsLoading(false);
          },
        );
    }
  };

  const elm = useRef();

  useEffect(() => {
    if (show) {
      setLockApplied(true);
      disableBodyScroll(elm.current);
    } else {
      enableBodyScroll(elm.current);
    }
  }, [show]);

  useEffect(
    () => () => {
      if (lockApplied) {
        clearAllBodyScrollLocks();
      }
    },
    [],
  );
  return (
    <div ref={elm}>
      <FullPagePopup type={showFullPagePopup} onClose={onCloseFullPagePopup} />
      <DialogBox
        className="otp-login"
        show={show}
        onClose={step === 1 ? onClose : goBack}
        title={
          step === 1
            ? t('GP_HAMBURGER_SIGNINREGISTER')
            : t('GP_BUY_VERIFICATIONCODE')
        }
        submitTitle={t('GP_GENERAL_NEXT')}
        onSubmit={disableSubmit ? null : step === 1 ? handlePhoneSubmit : null}
        loading={isLoading}
        hideFooter={step !== 1}
        icon={step === 1 ? 'times' : 'chevron_left'}
        btnSq
      >
        <Container className="pb-5">
          {step === 1 && (
            <>
              <p className="text-center login-sub-title mb-4">
                {t('GP_BUY_INPUTYOURMOBILE')}
              </p>
              <PhoneInput
                label={t('GP_BUY_PHONENUMBER')}
                error={hasErrors}
                initialValue={phone}
                maxLength={10}
                onChange={handlePhoneChange}
              />
              <p className={`info-text ${hasErrors ? 'error' : ''}`}>
                {t(errorMsg)}
              </p>
              <div className="opt-input-terms-conditions">
                {t('GP_BUY_AGREEMENTFORTERMS')}
                <ButtonUnderlined
                  style={{ color: '#0097dc' }}
                  onClick={() => {
                    gtm.push(gtm.events.ACT_REGISTER_TC, {});
                    onShowFullPagePopup(
                      Globals.FullPagePopupTypes.TERMS_CONDITIONS,
                    );
                  }}
                >
                  {t('GP_BUY_TERMSCONDITIONS')}
                </ButtonUnderlined>
                {t('GP_BUY_AGREEMENTFORPOLICY')}
                <ButtonUnderlined
                  style={{ color: '#0097dc' }}
                  onClick={() => {
                    gtm.push(gtm.events.ACT_REGISTER_PRIVACY, {});
                    onShowFullPagePopup(
                      Globals.FullPagePopupTypes.PRIVACY_POLICY,
                    );
                  }}
                >
                  {t('GP_BUY_PRIVACYPOLICY')}
                </ButtonUnderlined>
                .
              </div>
            </>
          )}
          {step === 2 && (
            <>
              <p className="text-center">
                {t('GP_BUY_WEJUSTSENDTHECODE', {
                  phone: `(+855) ${Number(phone)}`,
                })}
              </p>
              <div className="opt-input">
                <OtpInput
                  isInputNum
                  shouldAutoFocus
                  value={otp}
                  onChange={onOtpChange}
                  numInputs={6}
                  separator={<span />}
                />
              </div>
              {hasErrors === true && (
                <small className="error d-block text-center mt-4">
                  {t(errorMsg)}
                </small>
              )}
              {countdown && <Timer onTimerEnd={handleTimerEnd} />}
              {!countdown && (
                <Button
                  block
                  onClick={() => {
                    gtm.push(gtm.events.ACT_REGISTER_OTP_RESEND, {});
                    handlePhoneSubmit();
                  }}
                  size="sm"
                  variant="link"
                  className="mt-4"
                >
                  {t('GP_BUY_RESENDSMS')}
                </Button>
              )}
            </>
          )}
        </Container>
      </DialogBox>
    </div>
  );
};

export default LoginDialog;
