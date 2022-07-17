/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/display-name */
/*
 * File: index.js
 * Project: cellcard-play-pwa
 * Author: Dilum Sanjaya (dranasinghe@mitrai.com)
 * Copyright 2020 - 2020 Mitra Innovation Ltd., Mitra Innovation Ltd.
 */
import React from 'react';
import clsx from 'clsx';
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';
import { utcToObj } from 'utils/timeOps';
import { numberPadded } from 'utils/formatters';
import fontWeightMap from 'constants/fontWeightMap';

import './style.scss';

const components = {
  h0: (props) => <h0 {...props} />,
  h1: (props) => <h1 {...props} />,
  h2: (props) => <h2 {...props} />,
  h3: (props) => <h3 {...props} />,
  div: (props) => <div {...props} />,
  p: (props) => <p {...props} />,
  span: (props) => <span {...props} />,
};

const Typography = ({
  value = '',
  translationKey,
  variant = 'body',
  weight = 'regular',
  component = 'div',
  color,
  type,
  textCenter,
  className,
  lineHeight = 0,
  show = true,
}) => {
  const lang = i18next.language;
  const { t } = useTranslation();
  if (!show) {
    return null;
  }

  let textToRender = translationKey ? t(translationKey) : value;

  if (type === 'number') {
    textToRender = (+textToRender).toLocaleString();
  }
  if (type === 'date') {
    const dateObj = utcToObj(textToRender);
    if (dateObj) {
      textToRender = `${dateObj.date} ${t(dateObj.month)} ${dateObj.year}`;
    } else {
      textToRender = '';
    }
  }
  if (type === 'time') {
    const dateObj = utcToObj(textToRender);
    if (dateObj) {
      textToRender = `${numberPadded(dateObj.hours)}:${numberPadded(
        dateObj.minutes,
      )} ${dateObj.phase}`;
    } else {
      textToRender = '';
    }
  }

  if (type === 'currency') {
    textToRender = `$${(+textToRender).toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`;
  }

  const realWeight = fontWeightMap[variant][weight][lang] || weight;
  const SizeWrapper =
    lang === 'zh'
      ? (props) => <small className="typography-small">{props.children}</small>
      : (props) => <>{props.children}</>;
  const classes = clsx(
    'typography',
    `typography-${variant}`,
    `typography-${realWeight}`,
    `typography-lh-${lineHeight}`,
    color && `text-${color}`,
    textCenter && 'typography-text-center',
    className,
  );
  const Component = components[component];
  return (
    <Component className={classes}>
      <SizeWrapper>
        {typeof textToRender === 'string' ? textToRender : ''}
      </SizeWrapper>
    </Component>
  );
};

export default Typography;
