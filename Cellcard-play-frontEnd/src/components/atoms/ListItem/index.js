/*
 * Author: Buwaneka Sumanasekara (bsumanasekara@mitrai.com)
 * Date: Thursday, 13th August 2020 8:31:03 am
 * Module: Cellcard Play Frontend
 * -----
 * Last Modified: Thursday, 13th August 2020 9:03:46 am
 * Modified By: Buwaneka Sumanasekara (bsumanasekara@mitrai.com>)
 * Copyright © 2020 Cellcard Play. All rights reserved.
 */

import React from 'react';
import './style.scss';
import clsx from 'clsx';
import Icon from '../Icon';

const ListItem = ({
  hideIcon,
  tag: Tag,
  className,
  children,
  ItemProps,
  iconProps,
}) => (
  <Tag
    className={clsx(
      'list-item-default',
      'd-flex',
      !hideIcon && 'justify-content-between',
      hideIcon && 'justify-content-center',
      className,
    )}
    {...ItemProps}
  >
    <span>{children}</span>
    {!hideIcon && <Icon {...iconProps} />}
  </Tag>
);

// Set default props
ListItem.defaultProps = {
  tag: 'button', // any react element
  className: [], // [] or string
  ItemProps: {},
  iconProps: { icon: 'chevron_right' },
  hideIcon: false,
};

export default ListItem;
