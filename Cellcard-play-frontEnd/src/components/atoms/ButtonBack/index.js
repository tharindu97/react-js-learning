/*
 * File: index.js
 * Project: cellcard-play-pwa
 * Author: Dilum Sanjaya (dranasinghe@mitrai.com)
 * Copyright 2020 - 2020 Mitra Innovation Ltd., Mitra Innovation Ltd.
 */
import React from 'react';
import { useHistory } from 'react-router-dom';
import './style.scss';

const ButtonBack = (props) => {
  const history = useHistory();
  return (
    <div tabIndex="0" role="button" onClick={history.goBack}>
      {props.children}
    </div>
  );
};

export default ButtonBack;
