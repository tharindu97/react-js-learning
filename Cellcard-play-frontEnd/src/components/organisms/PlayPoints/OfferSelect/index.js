/*
 * Author: Dilum Sanjaya (dranasinghe@mitrai.com)
 * Date: Tuesday, 12th August 2020 12:00 pm
 * Module: Cellcard Play Frontend
 * Copyright © 2020 Cellcard Play. All rights reserved.
 */
import React from 'react';
import clsx from 'clsx';
import { Spinner } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { ROUTE_PLAYPOINTS_CHECKOUT } from 'constants/Routes';
import { PLAYPOINTS_ICON } from 'constants/Images';
import useQueryParams from 'hooks/useQueryParams';
import { Link } from 'react-router-dom';

import Button from 'components/atoms/ActionItem';

import './style.scss';

const OfferSelect = ({ data }) => {
  const { querySearch } = useQueryParams();
  const { t } = useTranslation();
  return (
    <div className="select-offer">
      <div className="select-offer-title">
        {t('GP_PRODUCTDETAILS_SELECTOFFER')}
      </div>
      {!data.length && (
        <div className=" d-flex justify-content-center p-5">
          <Spinner animation="border" variant="primary" />
        </div>
      )}
      {data.map((item) => (
        <Link
          to={{
            pathname: ROUTE_PLAYPOINTS_CHECKOUT,
            search: new URLSearchParams({
              ...querySearch,
              productCode: item.code,
              productType: 'PLAYPOINT',
            }).toString(),
            state: {
              from: '/playpoints',
              price: `$ ${item.value}`,
              title: item.points.toLocaleString(),
              code: item.code,
            },
          }}
          key={item.code}
        >
          <div
            className={clsx(
              'select-offer-item',
              item.isBestValue && 'select-offer-item-best',
            )}
          >
            <div className="d-flex">
              <img
                src={`${process.env.REACT_APP_ASSESTS_URL}${PLAYPOINTS_ICON.src}`}
                alt={PLAYPOINTS_ICON.alt}
                className="select-offer-points-img"
              />
              <div className="select-offer-points-num">
                {item.points.toLocaleString()}
              </div>
            </div>
            <div className="d-flex align-items-end">
              <div className="select-offer-price">${item.value}</div>
              {item.isBestValue && (
                <div className="select-offer-best-value">
                  {t('GP_SUBSCRIPTIONPLANS_BESTVALUE')}
                </div>
              )}
              <div className="flex-grow-1" />
              <Button
                className="py-2 px-4 .buy"
                variant="sub1"
                weight="semi-bold"
                rounded
                translationKey="GP_STORESUMMARY_BUTTON"
              />
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default OfferSelect;
