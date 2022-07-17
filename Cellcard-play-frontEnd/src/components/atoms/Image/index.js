/*
 * Author: Buwaneka Sumanasekara (bsumanasekara@mitrai.com)
 * Date: Friday, 14th August 2020 8:57:29 am
 * Module: Cellcard Play Frontend
 * -----
 * Last Modified: Friday, 14th August 2020 9:00:21 am
 * Modified By: Buwaneka Sumanasekara (bsumanasekara@mitrai.com>)
 * Copyright © 2020 Cellcard Play. All rights reserved.
 */

import React from 'react';
import clsx from 'clsx';

export default function Image(props) {
  return (
    <React.Fragment>
      <img src={props.source} alt={props.name} className={clsx(props.className)} />
    </React.Fragment>
  );
}
