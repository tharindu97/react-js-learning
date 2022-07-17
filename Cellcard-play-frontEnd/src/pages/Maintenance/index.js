/*
 * Author: Buwaneka Sumanasekara (bsumanasekara@mitrai.com)
 * Date: Monday, 17th August 2020 7:23:03 am
 * Module: Cellcard Play Frontend
 * -----
 * Last Modified: Monday, 17th August 2020 7:58:47 am
 * Modified By: Buwaneka Sumanasekara (bsumanasekara@mitrai.com>)
 *
 * Last Modified: Wednesday, 2nd September 2020 14:30 pm
 * Modified By: Jerobert (zjerobert@mitrai.com)
 * Copyright © 2020 Cellcard Play. All rights reserved.
 */

import React from 'react';
import { Image, Container, Row, Col } from 'react-bootstrap';
import Heading from 'components/atoms/Heading';
import BlankTemplate from 'templates/BlankTemplate';
import './style.scss';
import { IMG_MAINTENANCE } from 'constants/Images';

const MaintenancePage = () => {
  return (
    <BlankTemplate>
      <Container className="page-maintenance container h-100 px-4">
        <Row className="rowd-flex justify-content-center align-items-center vh-100">
          <Col md className="text-center">
            <Image src={IMG_MAINTENANCE.src} alt={IMG_MAINTENANCE.alt} />
            <Heading tag="h1" className="mt-3 mb-3 title">
              We will be back soon…
            </Heading>
            <Heading tag="h3" className="body">
              Unlimited Play is under going maintenance to improve the platform
              experience. Please come back soon.
            </Heading>
          </Col>
        </Row>
      </Container>
    </BlankTemplate>
  );
};

export default MaintenancePage;
