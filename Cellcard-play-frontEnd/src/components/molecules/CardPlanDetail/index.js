/*
 * Copyright © 2020 Cellcard Play. All rights reserved.
 * Author: Jerobert (zjerobert@mitrai.com)
 * Date: Tuesday, 8th August 2020 10.30 am
 * Module: Cellcard Play Frontend
 */
import React from 'react';
import { Card } from 'react-bootstrap';
import HorizontalImageSet from 'components/molecules/HorizontalImageSet';
import './style.scss';

const cardPlanDetail = ({ details }) => {
  const images = [
    `${process.env.REACT_APP_ASSESTS_URL}/UnlimitedGaming_Logos/PUBGM.png`,
    `${process.env.REACT_APP_ASSESTS_URL}/UnlimitedGaming_Logos/MLLBB.png`,
    `${process.env.REACT_APP_ASSESTS_URL}/UnlimitedGaming_Logos/RoS.png`,
  ];
  return (
    <Card className="plan-detail">
      <Card.Header>
        <HorizontalImageSet images={images} />
      </Card.Header>
      <Card.Body>
        <ul className="plan-card-details">
          {details.map((d, i) => (
            <li key={i} dangerouslySetInnerHTML={{ __html: d }}></li>
          ))}
        </ul>
      </Card.Body>
    </Card>
  );
};

export default cardPlanDetail;
