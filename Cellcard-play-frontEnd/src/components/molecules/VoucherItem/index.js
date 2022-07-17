/*
 * File: index.js
 * Project: cellcard-play-pwa
 * Author: Dilum Sanjaya (dranasinghe@mitrai.com)
 * File Created: Tuesday, 15th September 2020 05:22 pm
 * Module: Cellcard Play Frontend
 * Copyright 2020 - 2020 Mitra Innovation Ltd., Mitra Innovation Ltd.
 */
import React from 'react';
import Typography from 'components/atoms/Typography';
import ActionItem from 'components/atoms/ActionItem';
import _ from 'lodash';
import { toDateString } from 'utils/timeOps';
import { useTranslation } from 'react-i18next';
import {
  VOUCHER_STATUS,
  BUTTON_TYPES,
  VOUCHER_DURATIONS,
  VOUCHER_LIST_BUTTONS,
} from 'constants/Globals';
import { ROUTE_VOUCHER_DETAILS_ORIGIN } from 'constants/Routes';
import { Link } from 'react-router-dom';

import './index.scss';

const VoucherItem = ({ item, language }) => {
  const status = VOUCHER_STATUS[item.status];
  const { t } = useTranslation();
  const displayName = _.get(item, `content.${language}.displayName`);
  return (
    <Link
      to={`${ROUTE_VOUCHER_DETAILS_ORIGIN}${item.voucherReference}`}
      className="link-nulled"
    >
      <div className="d-flex p-2 voucher-list-item mb-1">
        <img
          src={item.imageUrl}
          alt={displayName}
          className="voucher-list-image"
        />
        <div className="pl-2 flex-grow-1 justify-content-between d-flex flex-column">
          <Typography
            value={displayName}
            color="white"
            variant="body"
            weight="semi-bold"
            component="div"
          />
          <div className="d-flex align-items-end justify-content-between">
            <Typography
              value={`${t(VOUCHER_DURATIONS[item.status])} ${toDateString(
                t,
                _.get(item, 'date', '').replace('Z', '').replace('T', ' '),
              )}`}
              color="gray"
              variant="sub1"
              weight="regular"
              component="div"
              className="pr-2"
            />
            <ActionItem
              type={
                status === VOUCHER_STATUS.ACTIVE
                  ? BUTTON_TYPES.PRIMARY
                  : BUTTON_TYPES.DARK
              }
              variant="sub1"
              weight="semi-bold"
              className="py-2  .buy"
              rounded
              translationKey={VOUCHER_LIST_BUTTONS[item.status]}
            />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default VoucherItem;
