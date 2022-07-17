/*
 * Author: Jude Fernando (jfernando@mitrai.com)
 * Date: Tuesday, 21st July 2020 1:18:13 pm
 * Module: Cellcard Play Frontend
 * -----
 * Last Modified: Wednesday, 19th August 2020 12:51:21 pm
 * Modified By: Buwaneka Sumanasekara (bsumanasekara@mitrai.com>)
 * -----
 * Copyright 2020 - 2020 Mitra Innovation Ltd., Mitra Innovation Ltd.
 */

import React, { useContext } from 'react';

import StaticPageTemplate from 'templates/StaticPageTemplate';
import GenericTemplate from 'templates/GenericTemplate';
import BoxTitle from 'components/molecules/BoxTitle';
import ItemIcon from 'components/atoms/ItemIcon';
import { useTranslation } from 'react-i18next';
import { LINK_FB_FAN } from 'constants/Links/support';
import Wrapper from 'templates/Wrapper';
import { UserContext } from '../../providers/User';

const SupportPage = () => {
  const { t } = useTranslation();
  const { user } = useContext(UserContext);

  const childContent = () => {
    return (
      <Wrapper>
        <BoxTitle title={`24/7 ${t('GP_INFORMATION_SUPPORTHOTLINE')}`}>
          <ItemIcon icon="phone">
            {process.env.REACT_APP_SUPPORT_PHONE}
          </ItemIcon>
          <ItemIcon icon="mobile">
            {process.env.REACT_APP_SUPPORT_MOBILE}
          </ItemIcon>
        </BoxTitle>

        <BoxTitle title={t('GP_INFORMATION_SUPPORTEMAIL')}>
          <ItemIcon icon="mail">{process.env.REACT_APP_SUPPORT_EMAIL}</ItemIcon>
        </BoxTitle>

        <BoxTitle title={t('GP_INFORMATION_SUPPORTMESSENGER')}>
          <ItemIcon icon="globe">
            <a
              href={LINK_FB_FAN}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#bdb9b9', textDecoration: 'none' }}
            >
              {process.env.REACT_APP_SUPPORT_FACEBOOK}
            </a>
          </ItemIcon>
        </BoxTitle>
      </Wrapper>
    );
  };

  if (user) {
    return (
      <GenericTemplate cross title={t('GP_HAMBURGER_SUPPORT')}>
        {childContent()}
      </GenericTemplate>
    );
  }

  return (
    <StaticPageTemplate title={t('GP_HAMBURGER_SUPPORT')}>
      {childContent()}
    </StaticPageTemplate>
  );
};

export default SupportPage;
