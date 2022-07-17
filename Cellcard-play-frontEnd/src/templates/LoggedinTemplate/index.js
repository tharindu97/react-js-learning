/*
 * Author: Jude Fernando (jfernando@mitrai.com)
 * Date: Wednesday, 29th July 2020 12:49:40 pm
 * Module: Cellcard Play Frontend
 * -----
 * Last Modified: Friday 31 July 2020 5:00:00 pm
 * Modified By: Dilum Sanjaya (dranasinghe@mitrai.com)
 * -----
 * Copyright © 2020 Cellcard Play. All rights reserved.
 */
import React from 'react';
import LoggedHeader from 'components/organisms/LoggedHeader';
import FooterDesktop from 'components/organisms/FooterDesktop';
import Nav from 'components/organisms/Nav';

import ContentDesktop from 'components/organisms/home/ContentDesktop';

const DefaultTemplate = (props) => {
  const { title, active } = props;
  return (
    <>
      <div className="page page--default page--logged-in d-md-none d-lg-none d-xl-none logged-in-template min-vh-100">
        <LoggedHeader title={title} />
        <div className="page__content">{props.children}</div>
        <Nav active={active} />
      </div>

      <div className="d-none d-md-block">
        <ContentDesktop />
        <FooterDesktop />
      </div>
    </>
  );
};

export default DefaultTemplate;
