import React from 'react';
import './style.scss';

export default function FlexRow(props) {
  const mappedItem = props.children.map((item, i) => (
    <div key={i} style={{ marginRight: `${props.spacing}` }}>
      {item}{' '}
    </div>
  ));
  return <div className="flex-row">{mappedItem}</div>;
}
