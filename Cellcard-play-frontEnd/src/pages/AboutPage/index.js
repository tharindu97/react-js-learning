/*
 * Author: Jude Fernando (jfernando@mitrai.com)
 * Date: Tuesday, 21st July 2020 1:18:13 pm
 * Module: Cellcard Play Frontend
 * -----
 * Last Modified: Wednesday, 19th August 2020 12:50:26 pm
 * Modified By: Buwaneka Sumanasekara (bsumanasekara@mitrai.com>)
 * -----
 * Copyright 2020 - 2020 Mitra Innovation Ltd., Mitra Innovation Ltd.
 */

import React, { useContext } from 'react';

import StaticPageTemplate from 'templates/StaticPageTemplate';
import GenericTemplate from 'templates/GenericTemplate';
import { useTranslation } from 'react-i18next';
import Wrapper from 'templates/Wrapper';
import { UserContext } from '../../providers/User';

const AboutPage = () => {
  const { t } = useTranslation();
  const { user } = useContext(UserContext);

  const childContent = () => {
    return (
      <Wrapper>
        <p>{t('GP_INFORMATION_ABOUTUS')}</p>
      </Wrapper>
    );
  };

  if (user) {
    return (
      <GenericTemplate cross title={t('GP_HAMBURGER_ABOUT')}>
        {childContent()}
      </GenericTemplate>
    );
  }
  return (
    <StaticPageTemplate title={t('GP_HAMBURGER_ABOUT')}>
      {childContent()}
    </StaticPageTemplate>
  );
};

export default AboutPage;
