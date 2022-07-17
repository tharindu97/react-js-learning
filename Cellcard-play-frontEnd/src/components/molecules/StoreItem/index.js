/*
 * Author: Jude Fernando (jfernando@mitrai.com)
 * Date: Tuesday, 11th August 2020 4:58:11 pm
 * Module: Cellcard Play Frontend
 * -----
 * Last Modified: Thursday, 27th August 2020 7:33:56 pm
 * Modified By: Buwaneka Sumanasekara (bsumanasekara@mitrai.com>)
 * Copyright © 2020 Cellcard Play. All rights reserved.
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Typography from 'components/atoms/Typography';
import Points from 'components/molecules/Points';
import Button from 'components/atoms/ActionItem';
import toLocal from 'utils/languageOps';
import helpers from 'utils/helpers';
import './index.scss';

const StoreItem = (props) => {
  const {
    code,
    hasOffer,
    lang = 'en',
    imageUrl,
    minPoints = 0,
    offerPercentage,
    content,
    plans,
    buttonLabel,
    subtitle = '',
    buttonProps,
    buttonTranslationKey,
    ...otherProps
  } = props;
  const { displayName } = content[lang];
  const { t } = useTranslation();
  return (
    <Link className="store-item link-nulled" {...otherProps}>
      <div className="store-item-media">
        {imageUrl && <img src={imageUrl} alt={displayName} />}
      </div>
      <div className="store-item-content">
        {plans && (
          <div className="store-item-plan-badges">
            {plans.map((p) => (
              <img key={p} src={helpers.getPlanData(p).icon} alt={p} />
            ))}
          </div>
        )}
        <div className="store-item-title pb-3">{displayName}</div>
        <div className="store-item-content-bottom">
          <div className="store-item-price">
            {minPoints > 0 && (
              <div className="d-flex align-items-end">
                <Points size={22} />
                <Typography
                  value={minPoints.toLocaleString()}
                  color="cellcard"
                  variant="body"
                  weight="semi-bold"
                  component="div"
                  className="ml-1"
                />
              </div>
            )}
            {hasOffer && (
              <div className="store-item-offer mt-1">
                {toLocal(t('DISCOUNT_DISPLAYTEXT'), {
                  precentage: offerPercentage,
                })}
              </div>
            )}
            {subtitle !== '' && (
              <div className="store-item-subtitle">{subtitle}</div>
            )}
          </div>
          <div className="store-item-cta">
            <Button
              className="py-2 px-4 .buy"
              variant="sub1"
              weight="semi-bold"
              rounded
              value={buttonLabel}
              translationKey={buttonTranslationKey}
            />
          </div>
        </div>
      </div>
    </Link>
  );
};

StoreItem.defaultProps = {
  buttonTranslationKey: 'GP_STORESUMMARY_BUTTON',
  subtitle: '',
};
export default StoreItem;
