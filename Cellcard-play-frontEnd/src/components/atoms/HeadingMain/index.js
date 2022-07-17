/*
 * File: index.js
 * Project: cellcard-play-pwa
 * File Created: Monday, 13th July 2020 10:00 am
 * Author: Jerobert (zjerobert@mitrai.com)
 * Copyright 2020 - 2020 Mitra Innovation Ltd., Mitra Innovation Ltd.
 */
import React from 'react';
import './style.scss';

export default function HeadingSub(props) {
  return <h1 className="main-title text-xbold text-normal">{props.children}</h1>;
}
