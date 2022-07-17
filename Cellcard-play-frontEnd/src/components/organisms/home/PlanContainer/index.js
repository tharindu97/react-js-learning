/*
 * Author: Jude Fernando (jfernando@mitrai.com)
 * Date: Wednesday, 15th July 2020 10:06:49 am
 * Module: Cellcard Play Frontend
 * Copyright © 2020 Cellcard Play. All rights reserved.
 */
import React from 'react';
import Section from 'components/molecules/Section';
import HeadingSub from 'components/atoms/HeadingSub';
import Paragraph from 'components/atoms/Paragraph';
import SliderPlan from 'components/molecules/SliderPlan';
import { useTranslation } from 'react-i18next';
import Typography from 'components/atoms/Typography';

const PlanContainer = () => {
  const { t } = useTranslation();
  return (
    <Section id="plans">
      <Typography
        translationKey="GP_PLANS_READYFORMOREREWARDING"
        color="white"
        variant="h1"
        weight="extra-bold"
        component="h1"
        className="mb-2 px-4"
        textCenter
      />
      <Paragraph>{t('GP_MEMBERSHIP_BUYYOURMEMBERSHIP')}</Paragraph>
      <SliderPlan />
    </Section>
  );
};

export default PlanContainer;
