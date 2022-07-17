/*
 * Author: Jude Fernando (jfernando@mitrai.com)
 * Date: Wednesday, 29th July 2020 12:49:40 pm
 * Module: Cellcard Play Frontend
 * -----
 * Last Modified: Tuesday, 18th August 2020 11:14:54 am
 * Modified By: Buwaneka Sumanasekara (bsumanasekara@mitrai.com>)
 * -----
 * Copyright © 2020 Cellcard Play. All rights reserved.
 */
import React from 'react';
import Header from 'components/organisms/GenericHeader';
import FooterDesktop from 'components/organisms/FooterDesktop';
import Nav from 'components/organisms/Nav';

import ContentDesktop from 'components/organisms/home/ContentDesktop';

const Template = (props) => {
  const { title, active, share, removeNav } = props;
  return (
    <>
      <div className="page page--default page--logged-in d-md-none d-lg-none d-xl-none logged-in-template">
        <Header back share={share} title={title} />
        <div className="page__content">{props.children}</div>
        {!removeNav && <Nav active={active} />}
      </div>

      <div className="d-none d-md-block">
        <ContentDesktop />
        <FooterDesktop />
      </div>
    </>
  );
};

// Set default props
Template.defaultProps = {
  share: true, // enable share button
  className: [], // [] or string
  center: false,
};

export default Template;
