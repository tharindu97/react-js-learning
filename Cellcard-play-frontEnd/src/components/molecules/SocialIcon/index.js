/*
 * File: index.js
 * Project: cellcard-play-pwa
 * File Created: Monday, 20th July 2020 1.30 pm
 * Author: Jerobert (zjerobert@mitrai.com)
 * Copyright 2020 - 2020 Mitra Innovation Ltd., Mitra Innovation Ltd.
 */
import React from 'react';
import Icon from 'components/atoms/Icon';
import './style.scss';

export default function SocialIcon({ link, icon }) {
  return (
    <div className="social-icon">
      <a href={link} rel="noopener noreferrer" target="_blank">
        <Icon icon={icon} />
      </a>
    </div>
  );
}
