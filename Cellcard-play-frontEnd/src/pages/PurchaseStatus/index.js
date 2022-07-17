/*
 * File: index.js
 * Project: cellcard-play-pwa
 * Author: Dilum Sanjaya (dranasinghe@mitrai.com)
 * File Created: Tuesday, 29th September 2020 02:52 pm
 * Module: Cellcard Play Frontend
 * Copyright 2020 - 2020 Mitra Innovation Ltd., Mitra Innovation Ltd.
 */
import React, { useEffect, useState } from 'react';
import Window from 'templates/Window';
import Button from 'components/atoms/ActionItem';
import Typography from 'components/atoms/Typography';
import useQueryParams from 'hooks/useQueryParams';
import STATUS_VARIENTS from 'constants/Status';
import { Spinner } from 'react-bootstrap';
import actionItemVars from 'constants/ActionItem';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import api from 'api';
import utils from 'utils';
import _ from 'lodash';
import './style.scss';
import Lottie from 'components/atoms/Lottie';

const PurchaseStatus = () => {
  const { querySearch } = useQueryParams();
  const { transactionId } = querySearch;
  const [status, updateStatus] = useState({});
  const [polling, setPolling] = useState(true);
  const currentLanguage = i18next.language;
  const { t } = useTranslation();
  const onError = () => {
    updateStatus(STATUS_VARIENTS.PRODUCT_STATUS_ERROR);
  };

  const poll = () => {
    let numOfTries = 0;
    const callApi = () => {
      numOfTries += 1;
      api.stores.status({ transactionId }).then(
        (res) => {
          if (res.data && res.status === 200) {
            if (res.data.status === 'PENDING') {
              if (numOfTries < STATUS_VARIENTS.MAX_NUM_OF_TRIES) {
                setTimeout(callApi, STATUS_VARIENTS.DELAY_BETWEEN_TRIES);
              } else {
                updateStatus({
                  ...utils.mappers.status(
                    STATUS_VARIENTS,
                    ['DV_MERCHANDISE', res.data.status],
                    STATUS_VARIENTS.DEFAULT,
                  ),
                  data: res.data,
                });
                setPolling(false);
              }
            } else {
              updateStatus({
                ...utils.mappers.status(
                  STATUS_VARIENTS,
                  ['DV_MERCHANDISE', res.data.status],
                  STATUS_VARIENTS.DEFAULT,
                ),
                data: res.data,
              });
              setPolling(false);
            }
          } else {
            setPolling(false);
            onError();
          }
        },
        () => {
          setPolling(false);
          onError();
        },
      );
    };

    callApi();
  };

  useEffect(() => {
    api.stores.status({ transactionId }).then(
      (res) => {
        if (res.data && res.status === 200) {
          if (res.data.status === 'PENDING') {
            setTimeout(poll, STATUS_VARIENTS.DELAY_BETWEEN_TRIES);
          } else {
            updateStatus({
              ...utils.mappers.status(
                STATUS_VARIENTS,
                ['DV_MERCHANDISE', res.data.status],
                STATUS_VARIENTS.DEFAULT,
              ),
              data: res.data,
            });
            setPolling(false);
          }
        } else {
          onError();
          setPolling(false);
        }
      },
      () => {
        setPolling(false);
      },
    );
  }, []);

  if (polling) {
    return <Lottie />;
  }
  return (
    <Window>
      <div className="flex-grow-1 d-flex align-items-center flex-column purchase-status-content pt-4 status-description-padding-x">
        <div className="">
          <img
            src={status.icon.src}
            alt={status.icon.alt}
            className="purchase-status-icon"
          />
        </div>
        <Typography
          translationKey={status.title}
          hide={!status.title}
          color="white"
          variant="h1"
          weight="extra-bold"
          component="h1"
          textCenter
        />
        <Typography
          value={utils.languageOps(t(status.description || ''), {
            offer: _.get(
              status,
              `data.content.${currentLanguage}.displayName`,
              '',
            ),
          })}
          hide={!status.description}
          color="gray"
          variant="body"
          weight="regular"
          component="div"
          textCenter
          className="mt-3"
        />
        {polling && (
          <div className="mt-4">
            <Spinner animation="border" variant="primary" />
          </div>
        )}
      </div>
      {!polling && (
        <div className="px-4 py-4 bg-gray-5">
          <Button
            translationKey={status.btnMainTitle}
            hide={!status.btnMainTitle}
            weight="semi-bold"
            className=".h-48"
            rounded
            to={status.btnMainLink}
            flex
          />
          <Button
            translationKey={status.btnSubTitle}
            hide={!status.btnSubTitle}
            weight="semi-bold"
            className="mt-2 .h-48"
            type={actionItemVars.types.SUB_STATUS}
            rounded
            to={status.btnSubLink}
            flex
          />
        </div>
      )}
    </Window>
  );
};

export default PurchaseStatus;
