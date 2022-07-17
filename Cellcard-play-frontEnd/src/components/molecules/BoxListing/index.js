/*
 * Author: Jerobert (zjerobert@mitrai.com)
 * Date: Monday, 27 July 2020 12.30 pm
 * Module: Cellcard Play Frontend
 * Copyright © 2020 Cellcard Play. All rights reserved.
 */
import React from 'react';
import Icon from 'components/atoms/Icon';
import './style.scss';
import { Link } from 'react-router-dom';

const BoxListing = (props) => {
  const { link, disabled } = props;
  const onClick = () => {
    if (props.action && props.data) {
      props.action(props.data);
    }
  };

  const Wrapper =
    link && !disabled
      ? (p) => <Link to={props.link}>{p.children}</Link>
      : (p) => <>{p.children}</>;
  return (
    <Wrapper>
      <div className="listing-box" role="button" onClick={onClick}>
        <div className="listing-box-wrapper">{props.children}</div>

        {!disabled && (
          <div className="listing-box-icon">
            <Icon icon="chevron_right" />
          </div>
        )}
      </div>
    </Wrapper>
  );
};

export default BoxListing;
