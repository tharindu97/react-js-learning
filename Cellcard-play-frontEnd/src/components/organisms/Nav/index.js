/*
 * Author: Jude Fernando (jfernando@mitrai.com)
 * Date: Wednesday, 29th July 2020 1:10:51 pm
 * Module: Cellcard Play Frontend
 * Copyright © 2020 Cellcard Play. All rights reserved.
 */

import React from 'react';
import './index.scss';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import clsx from 'clsx';
import { ROUTE_STORE, ROUTE_ME, ROUTE_MORE } from 'constants/Routes';
import { useTranslation } from 'react-i18next';
import Icon from '../../atoms/Icon';

const Nav = (props) => {
  const { active } = props;
  const { t } = useTranslation();
  return (
    <div className="main-nav-wrapper">
      <div className="main-nav">
        <Button
          as={Link}
          to={ROUTE_STORE}
          variant="dark"
          className={clsx(
            'main-nav__link',
            active === 'store'
              ? 'main-nav__link--active'
              : 'main-nav__link--not-active',
          )}
        >
          <Icon icon={active === 'store' ? 'store_filled' : 'store'} />
          <span className="main-nav__link__label">
            {t('GP_STORESUMMARY_TITLE').toUpperCase()}
          </span>
        </Button>
        <Button
          as={Link}
          to={ROUTE_ME}
          variant="dark"
          className={clsx(
            'main-nav__link',
            active === 'me'
              ? 'main-nav__link--active'
              : 'main-nav__link--not-active',
          )}
        >
          <Icon icon={active === 'me' ? 'me_filled' : 'me'} />
          <span className="main-nav__link__label">
            {t('GP_CELLCARDPROFILE_TITLE').toUpperCase()}
          </span>
        </Button>
        <Button
          as={Link}
          to={ROUTE_MORE}
          variant="dark"
          className={clsx(
            'main-nav__link',
            active === 'more'
              ? 'main-nav__link--active'
              : 'main-nav__link--not-active',
          )}
        >
          <Icon icon="menu" />
          <span className="main-nav__link__label">
            {t('GP_SETTINGS_TITLE').toUpperCase()}
          </span>
        </Button>
      </div>
    </div>
  );
};

export default Nav;
