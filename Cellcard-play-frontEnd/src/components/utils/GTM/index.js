import React, { useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import useGTM from 'hooks/useGTM';
import i18next from 'i18next';
import { UserContext } from '../../../providers/User';

const GTM = () => {
  const { user } = useContext(UserContext);
  const location = useLocation();
  const gtm = useGTM();
  const currentLanguage = i18next.language;

  useEffect(() => {
    let msisdn = '';
    const preferredLang = currentLanguage;
    if (user) {
      msisdn = user.msisdn;
    }
    const { pathname, search, hash } = location;
    gtm.push(gtm.events.PAGE_VIEW, {
      msisdn,
      preferredLang,
      page: pathname,
      hash,
      query: search,
    });
  }, [location]);
  return null;
};

export default GTM;
