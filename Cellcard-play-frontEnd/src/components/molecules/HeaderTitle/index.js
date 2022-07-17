/*
 * Author: Jerobert (zjerobert@mitrai.com)
 * Date: Monday, 27 July 2020 12.30 pm
 * Module: Cellcard Play Frontend
 * Copyright © 2020 Cellcard Play. All rights reserved.
 */
import React from 'react';
import './style.scss';
import Icon from 'components/atoms/Icon';
import ButtonBack from 'components/atoms/ButtonBack';
import { Link } from 'react-router-dom';

const HeaderTitle = (props) => {
  const { navType } = props;
  const buttonType = function (navType) {
    if (navType == 'back') {
      return (
        <ButtonBack>
          <Icon icon="chevron_left" />
        </ButtonBack>
      );
    } else if (navType == 'close') {
      return (
        <ButtonBack>
          <Icon icon="times" />
        </ButtonBack>
      );
    }
  };
  return (
    <div className="header-title">
      <Link to={props.backUrl} className="span-left">
        {buttonType(navType)}
      </Link>
      <span className="span-right">{props.children}</span>
    </div>
  );
};

export default HeaderTitle;
