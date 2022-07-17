/*
 * File: index.js
 * Project: cellcard-play-pwa
 * File Created: Friday, 10th July 2020 12:37:34 am
 * Author: Jude Fernando (jfernando@mitrai.com)
 * -----
 * Last Modified: Tuesday, 14th July 2020 2:05:08 am
 * Modified By: Jerobert (zjerobert@mitrai.com)
 * -----
 * Copyright 2020 - 2020 Mitra Innovation Ltd., Mitra Innovation Ltd.
 */

import React from 'react';
import Header from 'components/organisms/Header';
import FooterDesktop from 'components/organisms/FooterDesktop';
import Footer from 'components/organisms/Footer';

import ContentDesktop from 'components/organisms/home/ContentDesktop';

const DefaultTemplate = (props) => {
  return (
    <React.Fragment>
      <div className="page page--default d-lg-none d-xl-none ">
        <Header />
        <div className="page__content">{props.children}</div>
        <Footer />
      </div>

      <div className="d-none d-lg-block">
        <ContentDesktop />
        <FooterDesktop />
      </div>
    </React.Fragment>
  );
};

export default DefaultTemplate;
