/*
 * File: index.js
 * Project: cellcard-play-pwa
 * Author: Dilum Sanjaya (dranasinghe@mitrai.com)
 * File Created: Sunday, 16th August 2020 09:31 am
 * Module: Cellcard Play Frontend
 * Copyright 2020 - 2020 Mitra Innovation Ltd., Mitra Innovation Ltd.
 */

import React from 'react';
import { useHistory } from 'react-router-dom';

import Typography from 'components/atoms/Typography';
import Icon from 'components/atoms/Icon';
import Share from '../../atoms/ShareButton';
import './style.scss';

const GenericHeader = ({
  title = '',
  back,
  share,
  cross,
  titleTranslateKey,
}) => {
  const history = useHistory();
  return (
    <header
      className="generic-header d-flex align-items-center"
      style={{ fontSize: '24px', padding: '0px 14px' }}
    >
      {cross || back ? (
        <button
          className="generic-header-button-nulled"
          onClick={history.goBack}
        >
          <Icon icon={cross ? 'times' : 'chevron_left'} />
        </button>
      ) : (
        <div className="generic-header-buttonPlaceholder" />
      )}

      <Typography
        value={title}
        translationKey={titleTranslateKey}
        color="white"
        variant="h2"
        weight="semi-bold"
        component="h2"
        textCenter
        className="flex-grow-1 generic-header-truncated-ellipses "
      />
      {share ? <Share /> : <div className="page-header-none-icon" />}
    </header>
  );
};

export default GenericHeader;
