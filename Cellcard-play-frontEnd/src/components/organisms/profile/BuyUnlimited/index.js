/*
 * Author: Dilum Sanjaya (dranasinghe@mitrai.com)
 * Date: Friday 31 July 2020 5:00:00 pm
 * Module: Cellcard Play Frontend
 * Copyright © 2020 Cellcard Play. All rights reserved.
 */

import React from 'react';
import Card from 'components/atoms/Card';
import HorizontalImageSet from 'components/molecules/HorizontalImageSet';
import { BRAND_LOGO } from 'constants/Images';

import Button from 'components/atoms/ActionItem';

import { useTranslation } from 'react-i18next';
import { ROUTE_SELECT_RECEIVER, ROUTE_VERIFY_RECEIVER } from 'constants/Routes';

import './style.scss';

const BuyUnlimited = ({ forFriend }) => {
  const images = [
    `${process.env.REACT_APP_ASSESTS_URL}/UnlimitedGaming_Logos/PUBGM.png`,
    `${process.env.REACT_APP_ASSESTS_URL}/UnlimitedGaming_Logos/MLLBB.png`,
    `${process.env.REACT_APP_ASSESTS_URL}/UnlimitedGaming_Logos/RoS.png`,
  ];
  const { t } = useTranslation();
  return (
    <Card>
      <div className="buy-unlimited-container">
        <div>
          <img
            alt={BRAND_LOGO.alt}
            src={`${process.env.REACT_APP_ASSESTS_URL}${BRAND_LOGO.src}`}
            className="buy-unlimited-container-logo-image"
          />
        </div>
        {!forFriend && (
          <div className="buy-unlimited-container-images mt-2">
            <HorizontalImageSet images={images} />
          </div>
        )}
        <h3 className="buy-unlimited-container-title">
          {forFriend
            ? t('GP_NEWSYSTEMMESSAGES_PROFILE_FRIEND_TITLE')
            : t('GP_PLANS_ALLYOUCANPLAY')}
        </h3>
        <p className="buy-unlimited-container-title-sub">
          {forFriend
            ? t('GP_NEWSYSTEMMESSAGES_PROFILE_FRIEND_HEADERDESCRIPTION')
            : t('GP_CELLCARDPROFILE_MEMSUBTITLE')}
        </p>
        {forFriend && (
          <p className="buy-unlimited-container-description text-gray mt-2">
            {t('GP_NEWSYSTEMMESSAGES_PROFILE_FRIEND_DESCRIPTION')}
          </p>
        )}
        <div className="buy-unlimited-container-button">
          <Button
            variant="h3"
            weight="semi-bold"
            className="py-6"
            rounded
            to={
              forFriend
                ? {
                    pathname: ROUTE_VERIFY_RECEIVER,
                    search: '?productType=PLAN',
                  }
                : {
                    pathname: ROUTE_SELECT_RECEIVER,
                    search: '?productType=PLAN',
                  }
            }
            value={
              forFriend
                ? t('GP_NEWSYSTEMMESSAGES_PROFILE_FRIEND_ACTION')
                : t('GP_HAMBURGER_BUYPLAY')
            }
            block
          />
        </div>
      </div>
    </Card>
  );
};

export default BuyUnlimited;
