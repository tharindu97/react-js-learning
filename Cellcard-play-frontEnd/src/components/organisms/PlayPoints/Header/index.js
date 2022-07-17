/*
 * File: index.js
 * Project: cellcard-play-pwa
 * File Created: Friday, 07th August 2020 3:08:14 pm
 * Author: Dilum Sanjaya (dranasinghe@mitrai.com)
 * Copyright 2020 - 2020 Mitra Innovation Ltd., Mitra Innovation Ltd.
 */
import React from 'react';
import './style.scss';
import Icon from 'components/atoms/Icon';
import { Link } from 'react-router-dom';
import { ROUTE_ME } from 'constants/Routes';

const Header = (props) => {
  return (
    <div className="header">
      <Link to={ROUTE_ME}>
        <div className="header-icon">
          <Icon icon="times" />
        </div>
      </Link>
    </div>
  );
};

export default Header;
