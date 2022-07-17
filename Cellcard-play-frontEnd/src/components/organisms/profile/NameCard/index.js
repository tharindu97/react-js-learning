/*
 * Author: Dilum Sanjaya (dranasinghe@mitrai.com)
 * Date: Tuesday 4th AUGUST 2020 9:00:00 am
 * Module: Cellcard Play Frontend
 * Copyright © 2020 Cellcard Play. All rights reserved.
 */

import React from 'react';
import Button from 'components/atoms/Button';
import Icon from 'components/atoms/Icon';
import { useTranslation } from 'react-i18next';

import './style.scss';

const NameCard = ({ name, onEditName, phone }) => {
  const { t } = useTranslation();

  return (
    <div className="name-card">
      <div className="name-card-left">
        <div className="name-card-left-icon">
          <Icon icon="me_filled" />
        </div>
        <div className="name-card-left-details">
          <div className="name-card-left-details-name">
            {name || t('GP_NONCELLCARDPROFILE_HELLO')}
          </div>
          <div className="name-card-left-details-phone mt-2">{phone}</div>
        </div>
      </div>

      <Button
        variant="dark"
        size="sm"
        rounded
        translationKey={
          name
            ? 'GP_NONCELLCARDPROFILE_EDITNAME'
            : 'GP_NONCELLCARDPROFILE_ADDNAME'
        }
        onClick={onEditName}
      />
    </div>
  );
};

export default NameCard;
