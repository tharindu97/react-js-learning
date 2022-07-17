/*
 * Author: Buwaneka Sumanasekara (bsumanasekara@mitrai.com)
 * Date: Monday, 10th August 2020 9:51:46 am
 * Module: Cellcard Play Frontend
 * Copyright © 2020 Cellcard Play. All rights reserved.
 */

import React from 'react';

const BlankPageTemplate = (props) => {
  return (
    <div className="blank-page">
      <div className="page__content">{props.children}</div>
    </div>
  );
};

export default BlankPageTemplate;
