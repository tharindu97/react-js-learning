import React from 'react';
import Typography from 'components/atoms/Typography';
import './style.scss';

export default function HeadingSub(props) {
  return (
    <Typography
      value={props.children}
      color="white"
      variant="h2"
      weight="extra-bold"
      component="h2"
      className="sub-title"
    />
  );
}
