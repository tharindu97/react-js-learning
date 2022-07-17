/*
 * Author: Buwaneka Sumanasekara (bsumanasekara@mitrai.com)
 * Date: Monday, 10th August 2020 9:14:55 am
 * Module: Cellcard Play Frontend
 *
 * Last Modified: Wednesday, 2nd September 2020 14:15 pm
 * Modified By: Jerobert (zjerobert@mitrai.com)
 * Copyright © 2020 Cellcard Play. All rights reserved.
 */

import React from 'react';
import { Image, Container, Row, Col } from 'react-bootstrap';

import Heading from 'components/atoms/Heading';
import BlankTemplate from 'templates/BlankTemplate';
import ButtonRounded from 'components/atoms/ButtonRounded';
import './style.scss';
import { IMG_404 } from 'constants/Images';

const PageNotFound = () => {
  return (
    <BlankTemplate>
      <Container className="page-not-found container h-100 px-4">
        <Row className="row d-flex justify-content-center align-items-center vh-100">
          <Col md className="text-center">
            <Image src={IMG_404.src} alt={IMG_404.alt} />
            <Heading tag="h1" className="my-2 title">
              Page Not Found
            </Heading>
            <Heading tag="h3" className="mt-2 mb-4  body">
              We can’t find the page you are looking for.
            </Heading>
            <ButtonRounded variant="primary" size="lg" link="/">
              Back to Homepage
            </ButtonRounded>
          </Col>
        </Row>
      </Container>
    </BlankTemplate>
  );
};

export default PageNotFound;
