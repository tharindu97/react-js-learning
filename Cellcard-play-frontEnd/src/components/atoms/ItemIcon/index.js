import React from 'react';
import './style.scss';
import Icon from '../Icon';

const ItemIcon = (props) => {
  return (
    <div className="atom-item-icon">
      <Icon icon={props.icon} />
      <small>{props.children}</small>
    </div>
  );
};

export default ItemIcon;
