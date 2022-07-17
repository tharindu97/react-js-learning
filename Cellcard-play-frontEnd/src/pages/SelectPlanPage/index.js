/*
 * File: index.js
 * Project: cellcard-play-pwa
 * Author: Dilum Sanjaya (dranasinghe@mitrai.com)
 * File Created: Monday, 17th August 2020 01:26 pm
 * Module: Cellcard Play Frontend
 * Copyright 2020 - 2020 Mitra Innovation Ltd., Mitra Innovation Ltd.
 */

import React from 'react';
import GenericTemplate from 'templates/GenericTemplate';
import Typography from 'components/atoms/Typography';
import SliderPlan from 'components/molecules/SliderPlan';

import './style.scss';

const SelectPlanPage = (props) => {
  const isSelect = props.location.pathname === '/select/plan';
  return (
    <GenericTemplate
      cross={!isSelect}
      back={isSelect}
      titleTranslateKey={
        isSelect
          ? 'GP_SUBSCRIPTIONPLANS_SELECTPLAN'
          : 'GP_SUBSCRIPTIONPLANS_UPGRADE'
      }
    >
      <Typography
        translationKey={
          isSelect
            ? 'GP_SUBSCRIPTIONPLANS_UNSUBSCRIBE'
            : 'GP_SUBSCRIPTIONPLANS_UPGRADEDESCRIPTION'
        }
        color="white"
        variant="body"
        weight="regular"
        component="div"
        textCenter
        className="px-5 pt-3"
      />
      <div className="py-3 px-3">
        <SliderPlan forUser />
      </div>
    </GenericTemplate>
  );
};

export default SelectPlanPage;
