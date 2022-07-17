/*
 * Author: Dilum Sanjaya (dranasinghe@mitrai.com)
 * Date: Tuesday, 12th August 2020 12:00 pm
 * Module: Cellcard Play Frontend
 * -----
 * Last Modified: Wednesday, 26th August 2020 11:42:52 am
 * Modified By: Buwaneka Sumanasekara (bsumanasekara@mitrai.com>)
 * -----
 * Copyright 2020 - 2020 Mitra Innovation Ltd., Mitra Innovation Ltd.
 */
import React from 'react';
import clsx from 'clsx';
import { Spinner } from 'react-bootstrap';
import Button from 'components/atoms/ActionItem';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import Typography from 'components/atoms/Typography';
import Points from 'components/molecules/Points';
import ACTION_ITEM from 'constants/ActionItem';
import './style.scss';

const buttonTranslationKey = (isEligible, isSoldOut) => {
  if (!isEligible) {
    return 'EXCLUSIVEPRODUCT_STATUS';
  }
  if (isSoldOut) {
    return 'sold out';
  }
  return 'GP_STORESUMMARY_BUTTON';
};

const OfferSelect = (props) => {
  const { data, onPressItem, isEligible } = props;
  const { t } = useTranslation();
  return (
    <div className="product-denominator">
      <div className="product-denominator-title text-semibold">
        {t('GP_PRODUCTDETAILS_SELECTOFFER')}
      </div>
      {!data.length && (
        <div className=" d-flex justify-content-center p-5">
          <Spinner animation="border" variant="primary" />
        </div>
      )}
      {data.map((item) => (
        <div
          key={item.code}
          className={clsx(
            'product-denominator-item',
            item.isBestValue && 'product-denominator-item-best',
          )}
          onClick={() => isEligible && !item.isSoldOut && onPressItem(item)}
          role="button"
          tabIndex={0}
          onKeyDown={() => {}}
        >
          <Typography
            value={item.content[i18next.language].displayName}
            color="white"
            variant="h3"
            weight="semi-bold"
            component="h3"
            className="mb-1"
          />
          <div className="d-flex align-items-end">
            <Points size={16} />
            <Typography
              value={item.points.toLocaleString()}
              color="cellcard"
              variant="body"
              weight="semi-bold"
              component="div"
              className="pl-1"
            />
            {item.isBestValue && (
              <Typography
                translationKey="GP_SUBSCRIPTIONPLANS_BESTVALUE"
                color="white"
                variant="sub2"
                weight="semi-bold"
                component="div"
                className="product-denominator-best-value text-uppercase"
              />
            )}
            <div className="flex-grow-1" />

            <Button
              type={
                isEligible && !item.isSoldOut
                  ? ACTION_ITEM.types.BLUE
                  : ACTION_ITEM.types.DARK
              }
              className="py-2 px-4 .buy"
              variant="sub1"
              weight="semi-bold"
              rounded
              value={t(buttonTranslationKey(isEligible, item.isSoldOut))}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default OfferSelect;
