/*
 * Author: Jude Fernando (jfernando@mitrai.com)
 * Date: Tuesday, 21st July 2020 1:19:01 pm
 * Module: Cellcard Play Frontend
 * Copyright © 2020 Cellcard Play. All rights reserved.
 */

import React from 'react';
import Header from 'components/organisms/Header';
import Footer from 'components/organisms/Footer';
import StaticHeader from 'components/molecules/StaticHeader';

const StaticPageTemplate = ({ title, children }) => {
  return (
    <div className="page">
      <Header />
      <StaticHeader title={title} />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default StaticPageTemplate;
