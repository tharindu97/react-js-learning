/*
 * Author: Jude Fernando (jfernando@mitrai.com)
 * Date: Tuesday, 21st July 2020 1:18:13 pm
 * Module: Cellcard Play Frontend
 * -----
 * Last Modified: Wednesday, 19th August 2020 12:47:58 pm
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

const TermsPage = () => {
  const { t } = useTranslation();
  const { user } = useContext(UserContext);

  const items = t('GP_INFORMATION_TERMSANDCONDITIONS').split('\n');

  const childContent = () => {
    return (
      <Wrapper>
        <ul className="terms px-3">
          {items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </Wrapper>
    );
  };

  if (user) {
    return (
      <GenericTemplate cross title={t('GP_MORE_TERMSANDCOND')}>
        {childContent()}
      </GenericTemplate>
    );
  }

  return (
    <StaticPageTemplate title={t('GP_MORE_TERMSANDCOND')}>
      {childContent()}
    </StaticPageTemplate>
  );
};

export default TermsPage;
