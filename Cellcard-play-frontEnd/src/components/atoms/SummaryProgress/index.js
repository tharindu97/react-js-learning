/*
 * Author: Dilum Sanjaya (dranasinghe@mitrai.com)
 * Date: Friday 31 July 2020 5:00:00 pm
 * Module: Cellcard Play Frontend
 * Copyright © 2020 Cellcard Play. All rights reserved.
 */

import React from 'react';

import './style.scss';

const SummaryProgress = ({ total, current }) => {
  const indicatorWidth = `${(current / total) * 100}%`;
  return (
    <div className="summary-progress-container">
      <div className="summary-progress-container-indicator" style={{ width: indicatorWidth }}></div>
    </div>
  );
};

export default SummaryProgress;
