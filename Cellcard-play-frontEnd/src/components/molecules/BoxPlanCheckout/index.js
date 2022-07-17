/*
 * Author: Jerobert (zjerobert@mitrai.com)
 * Date: Monday, 27 July 2020 12.30 pm
 * Module: Cellcard Play Frontend
 * Copyright © 2020 Cellcard Play. All rights reserved.
 */
import React from 'react';
import { useTranslation } from 'react-i18next';
import './style.scss';

const BoxPlanCheckout = (props) => {
  const { plan } = props;
  const { t } = useTranslation();
  return (
    <div className="checkout-card">
      <span className="title">{plan.title}</span>
      {plan.isPlan && (
        <span className="small-content">
          Valid for {plan.validity} {t('GP_SUBSCRIPTIONPLANS_RENEWALDAYS')}
        </span>
      )}
      <hr className="divider" />
      <div className="price-wrapper">
        <span className="price-left">{t('GP_CHECKOUT_TOTAL')}</span>
        <span className="price-right">$ {plan.price}</span>
      </div>
    </div>
  );
};

export default BoxPlanCheckout;
