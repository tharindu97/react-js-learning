/*
 * Author: Jude Fernando (jfernando@mitrai.com)
 * Date: Tuesday, 14th July 2020 7:29:07 pm
 * Module: Cellcard Play Frontend
 * Copyright © 2020 Cellcard Play. All rights reserved.
 */
import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { ROUTE_PLAN_CHECKOUT, ROUTE_SELECT_RECEIVER } from 'constants/Routes';
import { PLAN, HOME } from 'constants/Globals';
import GEvent from 'components/atoms/GEvent';
import gtm from 'constants/GTM';
import Button from '../../atoms/Button';
import Icon from '../../atoms/Icon';
import './style.scss';
import { UserContext } from '../../../providers/User';

const CardPlan = (props) => {
  const { t } = useTranslation();

  const { user } = useContext(UserContext);
  const {
    code,
    price,
    isFeatured,
    content,
    lang,
    forUser,
    querySearch,
  } = props;
  const { title, offer, details, featuredTitle, renewal } =
    content[lang] || content.en;

  let link = {
    pathname: '/',
    hash: 'login',
    redirect: `${
      forUser ? ROUTE_PLAN_CHECKOUT : ROUTE_SELECT_RECEIVER
    }?${new URLSearchParams({
      ...querySearch,
      productCode: code,
      productType: PLAN,
      from: HOME,
    }).toString()}`,
  };
  if (user) {
    link = {
      pathname: forUser ? ROUTE_PLAN_CHECKOUT : ROUTE_SELECT_RECEIVER,
      search: new URLSearchParams({
        ...querySearch,
        productCode: code,
        productType: PLAN,
      }).toString(),
    };
  }

  return (
    <div
      className={`plan-card ${isFeatured ? 'plan-card--featured' : ''}`}
      data-featured-title={featuredTitle}
    >
      <div className="plan-card-header">
        <div className="plan-card-header-info">
          <h3 className="plan-card-title">{title}</h3>
          <div className="plan-card-price">{price}</div>
          <div className="plan-card-offer">{offer}</div>
        </div>
        <GEvent
          event={gtm.events.LANDING_BUY_NOW}
          payload={{
            planCode: code,
          }}
        >
          <Button
            variant="primary"
            size="lg"
            to={link}
            block
            label={t('GP_MEMBERSHIP_BUYNOW')}
            rounded
          />
        </GEvent>
      </div>
      <div className="plan-card-content">
        <hr />
        <ul className="plan-card-details">
          {details.map((d, i) => {
            return <li key={i} dangerouslySetInnerHTML={{ __html: d }} />;
          })}
        </ul>
      </div>
      <div className="plan-card-footer">
        <hr />
        <p className="text-left">
          <Icon icon="renew" /> {renewal}
        </p>
      </div>
    </div>
  );
};

export default CardPlan;
