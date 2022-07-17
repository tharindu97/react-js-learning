/*
 * File: index.js
 * Project: cellcard-play-pwa
 * Author: Dilum Sanjaya (dranasinghe@mitrai.com)
 * File Created: Monday, 05th October 2020 06:23 pm
 * Module: Cellcard Play Frontend
 * Copyright 2020 - 2020 Mitra Innovation Ltd., Mitra Innovation Ltd.
 */
import React from 'react';
import GenericTemplate from 'templates/GenericTemplate';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import terms from 'constants/Translations/TCReferrals';
import useQueryParams from 'hooks/useQueryParams';

function createMarkup(str) {
  return {
    __html: str,
  };
}

const ReferralTerms = () => {
  const { t } = useTranslation();
  const { queryState } = useQueryParams();
  const { dateExpire, coinsSelf, coinsFriend } = queryState;
  const objToReplace = { dateExpire, coinsSelf, coinsFriend };
  const currentLanguage = i18next.language;
  return (
    <GenericTemplate title={t('GP_BUY_TERMSCONDITIONS')} cross>
      <div
        className="px-3 pb-3"
        dangerouslySetInnerHTML={createMarkup(
          Object.entries(objToReplace).reduce(
            (acc, [key, val]) => acc.replace(`$\{${key}}`, val),
            terms[currentLanguage],
          ),
        )}
      />
    </GenericTemplate>
  );
};

export default ReferralTerms;
