/*
 * Author: Jude Fernando (jfernando@mitrai.com)
 * Date: Tuesday, 21st July 2020 1:18:13 pm
 * Module: Cellcard Play Frontend
 * -----
 * Last Modified: Wednesday, 19th August 2020 12:53:21 pm
 * Modified By: Buwaneka Sumanasekara (bsumanasekara@mitrai.com>)
 * -----
 * Copyright 2020 - 2020 Mitra Innovation Ltd., Mitra Innovation Ltd.
 */
import React, { useContext } from 'react';
import StaticPageTemplate from 'templates/StaticPageTemplate';
import GenericTemplate from 'templates/GenericTemplate';
import { Trans, useTranslation } from 'react-i18next';
import { UserContext } from '../../providers/User';
import Wrapper from 'templates/Wrapper';

const PrivacyPage = () => {
  const { t } = useTranslation();
  const user = useContext(UserContext).user;

  const childContent = () => {
    return (
      <Wrapper>
        <Trans t={t}>{t('GP_INFORMATION_PRIVACYPOLICY')}</Trans>
      </Wrapper>
    );
  };
  if (user) {
    return (
      <GenericTemplate cross title={t('GP_MORE_PRIVACYPOLICY')}>
        {childContent()}
      </GenericTemplate>
    );
  }

  return (
    <StaticPageTemplate title={t('GP_MORE_PRIVACYPOLICY')}>
      {childContent()}
    </StaticPageTemplate>
  );
};

export default PrivacyPage;
