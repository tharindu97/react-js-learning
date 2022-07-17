/*
 * Author: Jude Fernando (jfernando@mitrai.com)
 * Date: Monday, 27th July 2020 5:00:40 pm
 * Module: Cellcard Play Frontend
 * -----
 * Last Modified: Sunday, 30th August 2020 9:47:57 am
 * Modified By: Buwaneka Sumanasekara (bsumanasekara@mitrai.com>)
 * Copyright © 2020 Cellcard Play. All rights reserved.
 */
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import LangSwitch from 'components/molecules/LangSwitch';
import Heading from 'components/atoms/Heading';
import ListItem from 'components/atoms/ListItem';
import DialogBottomDrawer from 'components/molecules/DialogBottomDrawer';
import LoggedinTemplate from 'templates/LoggedinTemplate';

import './style.scss';
import { useTranslation } from 'react-i18next';

const More = () => {
  const { t } = useTranslation();
  const [isLogoutModalVisisble, showLogout] = useState('');

  const doLogout = () => {
    showLogout(false);
    window.localStorage.removeItem('auth');
    window.localStorage.removeItem('user');
    window.localStorage.removeItem('features');
    window.location.replace('/');
  };

  return (
    <LoggedinTemplate title={t('GP_SETTINGS_TITLE')} active="more">
      <Heading tag="p" className="font-weight-bold pb-2 px-3">
        {t('GP_HAMBURGER_CHOOSE_LANG')}
      </Heading>

      <LangSwitch full />
      <div className="list-item-wrapper list-item-wrapper--more">
        <ListItem
          tag={Button}
          ItemProps={{ variant: 'dark', as: Link, to: '/faq' }}
        >
          {t('GP_HAMBURGER_FAQ')}
        </ListItem>
        <ListItem
          tag={Button}
          ItemProps={{ variant: 'dark', as: Link, to: '/support' }}
        >
          {t('GP_HAMBURGER_SUPPORT')}
        </ListItem>
        <ListItem
          tag={Button}
          ItemProps={{ variant: 'dark', as: Link, to: '/about' }}
        >
          {t('GP_HAMBURGER_ABOUT')}
        </ListItem>
        <ListItem
          tag={Button}
          ItemProps={{ variant: 'dark', as: Link, to: '/privacy' }}
        >
          {t('GP_MORE_PRIVACYPOLICY')}
        </ListItem>
        <ListItem
          tag={Button}
          ItemProps={{ variant: 'dark', as: Link, to: '/terms' }}
        >
          {t('GP_MORE_TERMSANDCOND')}
        </ListItem>
      </div>

      <div className="bottom-wrapper">
        <ListItem hideIcon tag="p" className="mb-2 btn--version">
          Version {process.env.REACT_APP_VERSION}
        </ListItem>
        <div
          onClick={() => showLogout(true)}
          className="bg-gray-2 text-red-1 logged-in-template-logout-button outline-removed"
          role="button"
          tabIndex={0}
          onKeyDown={() => () => showLogout(true)}
        >
          <div className="">{t('GP_SETTINGS_LOGOUT')}</div>
        </div>
      </div>
      <DialogBottomDrawer
        show={isLogoutModalVisisble}
        onClose={() => showLogout(false)}
        title={t('GP_SYSTEMMESSAGES_CONFIRMLOGOUTTITLE')}
        subTitle={t('GP_SYSTEMMESSAGES_CONFIRMLOGOUTCONTENT')}
        onConfirm={doLogout}
        buttonTitle={t('GP_CONFIRMPURCHASE_CONFIRM')}
      />
    </LoggedinTemplate>
  );
};

export default More;
