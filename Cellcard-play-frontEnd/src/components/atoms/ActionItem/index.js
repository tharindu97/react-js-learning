/*
 * File: index.js
 * Project: cellcard-play-pwa
 * Author: Dilum Sanjaya (dranasinghe@mitrai.com)
 * Copyright 2020 - 2020 Mitra Innovation Ltd., Mitra Innovation Ltd.
 */
import React from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { types, classes } from 'constants/ActionItem';
import fontWeightMap from 'constants/fontWeightMap';
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';

import './style.scss';

const ActionItem = ({
  to,
  className = '',
  type = types.BLUE,
  rounded,
  variant = 'body',
  weight = 'regular',
  value,
  block,
  translationKey,
  onClick = () => {},
  disabled,
  actionType = 'button',
  content,
  flex,
  lineHeight = 1,
  hide,
}) => {
  const lang = i18next.language;
  const { t } = useTranslation();
  if (hide) {
    return null;
  }

  const textToRender = translationKey ? t(translationKey) : value;

  const realWeight = fontWeightMap[variant][weight][lang] || weight;
  const componentClass = clsx(
    'focus-nulled',
    to ? 'action-item-link' : 'action-item',
    classes[type],
    rounded && 'action-item-rounded',
    block && 'action-item-block',
    flex && 'action-item-flex',
    className &&
      className
        .split(' ')
        .filter((i) => i.includes('.'))
        .map((j) => j.replace('.', 'action-item-')),
    `typography-${variant}`,
    `typography-${realWeight}`,
    `typography-lh-${lineHeight}`,
    className && className.split(' ').filter((i) => !i.includes('.')),
  );

  if (to) {
    return (
      <Link to={to} className={componentClass}>
        {textToRender || content}
      </Link>
    );
  }
  return (
    <button
      type={actionType}
      disabled={disabled}
      className={componentClass}
      onClick={onClick}
    >
      {textToRender || content}
    </button>
  );
};

export default ActionItem;
