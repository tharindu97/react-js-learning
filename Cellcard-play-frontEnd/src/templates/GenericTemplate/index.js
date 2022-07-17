/*
 * File: index.js
 * Project: cellcard-play-pwa
 * Author: Dilum Sanjaya (dranasinghe@mitrai.com)
 * File Created: Monday, 17th August 2020 10:19 am
 * Module: Cellcard Play Frontend
 * Copyright 2020 - 2020 Mitra Innovation Ltd., Mitra Innovation Ltd.
 */
import React from 'react';
import FooterDesktop from 'components/organisms/FooterDesktop';
import GenericHeader from 'components/organisms/GenericHeader';
import ContentDesktop from 'components/organisms/home/ContentDesktop';

const GenericTemplate = (props) => {
  const { title, back, cross, share, titleTranslateKey } = props;
  return (
    <>
      <div className="page page--default d-lg-none d-xl-none min-vh-100">
        <GenericHeader
          title={title}
          back={back}
          cross={cross}
          share={share}
          titleTranslateKey={titleTranslateKey}
        />
        <div>{props.children}</div>
      </div>

      <div className="d-none d-lg-block">
        <ContentDesktop />
        <FooterDesktop />
      </div>
    </>
  );
};

export default GenericTemplate;
