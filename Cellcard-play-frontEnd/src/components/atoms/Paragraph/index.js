/*
 * Author: Jerobert (zjerobert@mitrai.com)
 * Date: Friday, 14th August 2020 8:57:29 am
 * Module: Cellcard Play Frontend
 * -----
 * Last Modified: Friday, 28th August 2020 11:00:21 am
 * Modified By: Buwaneka Sumanasekara (bsumanasekara@mitrai.com>)
 * Copyright © 2020 Cellcard Play. All rights reserved.
 */
import React from 'react';
import Typography from 'components/atoms/Typography';
import './style.scss';

export default function Paragraph(props) {
  return (
    <Typography
      value={props.children}
      color="gray"
      variant="body"
      weight="regular"
      component="div"
      className="px-3 mt-2 mb-4"
    />
  );
}
