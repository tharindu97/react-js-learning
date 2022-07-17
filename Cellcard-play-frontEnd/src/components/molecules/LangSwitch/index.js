/*
 * File: index.js
 * Project: cellcard-play-pwa
 * File Created: Tuesday, 14th July 2020 1:23:48 am
 * Author: Jude Fernando (jfernando@mitrai.com)
 * -----
 * Last Modified: Thursday, 13th August 2020 8:02:07 am
 * Modified By: Buwaneka Sumanasekara (bsumanasekara@mitrai.com>)
 * -----
 * Copyright 2020 - 2020 Mitra Innovation Ltd., Mitra Innovation Ltd.
 */
import React, { useState, useContext } from 'react';
import Button from 'react-bootstrap/Button';
import './index.scss';
import useGTM from 'hooks/useGTM';

import i18next from 'i18next';

import { UserContext } from '../../../providers/User';
import api from '../../../api';

const LangSwitch = (props) => {
  const [currLang, setCurrLang] = useState(i18next.language);
  const { full } = props;
  const { user } = useContext(UserContext);
  const gtm = useGTM();
  function changeLang(lang) {
    setCurrLang(lang);
    i18next.changeLanguage(lang);
    if (user) {
      api.users.preferredLang({
        msisdn: user.msisdn,
        preferredLang: lang,
      });
    }
  }

  const languages = [
    {
      code: 'km',
      label: 'ខ្មែរ',
      icon: '/images/flags/kh.svg',
    },
    {
      code: 'en',
      label: 'Eng',
      icon: '/images/flags/en.svg',
    },
    {
      code: 'zh',
      label: '中文',
      icon: '/images/flags/cn.svg',
    },
  ];

  return (
    <div className={`lang-switch ${full ? 'lang-switch--full' : ''}`}>
      {languages.map((lang) => {
        return (
          <Button
            key={lang.label}
            className={
              lang.code === currLang
                ? `active lang-${lang.code}`
                : `lang-${lang.code}`
            }
            onClick={() => {
              gtm.push(gtm.events.HAMBURGER_LANGUAGE, { language: lang.code });
              changeLang(lang.code);
            }}
            variant="dark"
          >
            <img src={lang.icon} alt={lang.code} />
            {lang.label}
          </Button>
        );
      })}
    </div>
  );
};

export default LangSwitch;
