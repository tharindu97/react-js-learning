/*
 * Author: Dilum Sanjaya (dranasinghe@mitrai.com)
 * Date: Tuesday, 12th August 2020 12:00 pm
 * Module: Cellcard Play Frontend
 * Copyright © 2020 Cellcard Play. All rights reserved.
 */
import React from 'react';
import ImageRounded from 'components/atoms/ImageRounded';
import ExpandableDescription from 'components/atoms/ExpandableDescription';
import i18next from 'i18next';

import './style.scss';

const OfferTop = ({ data }) => {
  if (!data.code) {
    return null;
  }
  const currentLanguage = i18next.language;
  return (
    <div className="offer-top">
      <div className="offer-top-image">
        <ImageRounded src={data.imageUrl} size={200} />
      </div>
      <div className="offer-top-title">{data.content[currentLanguage].displayName}</div>
      <div className="offer-top-description">
        <ExpandableDescription text={data.content[currentLanguage].desc} />
      </div>
      <div className="px-3 pt-3">
        <div className="offer-top-separator"></div>
      </div>
    </div>
  );
};

export default OfferTop;
