/*
 * File: index.js
 * Project: cellcard-play-pwa
 * Author: Dilum Sanjaya (dranasinghe@mitrai.com)
 * Copyright 2020 - 2020 Mitra Innovation Ltd., Mitra Innovation Ltd.
 */
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './style.scss';

const ExpandableDescription = ({ text }) => {
  const [isExpanded, changeExpand] = useState(false);
  const onExpandToggle = () => changeExpand(!isExpanded);
  const { t } = useTranslation();
  if (!text) {
    return null;
  }
  const needExpansion = text.length > 240;
  const textToRender = text.slice(0, isExpanded ? undefined : 240);

  return (
    <div className="expanded-description">
      <p>
        {textToRender}
        {needExpansion && (
          <button
            onClick={onExpandToggle}
            className="expanded-description-button"
            type="button"
          >
            {isExpanded
              ? t('GP_PRODUCTDETAILS_READLESS')
              : t('GP_PRODUCTDETAILS_READMORE')}
          </button>
        )}
      </p>
    </div>
  );
};

export default ExpandableDescription;
