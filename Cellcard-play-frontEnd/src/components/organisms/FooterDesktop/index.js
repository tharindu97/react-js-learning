import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SocialIcons from 'components/molecules/SocialIcons';
import LangSwitch from 'components/molecules/LangSwitch';
import AwardsContainer from 'components/organisms/AwardsContainer';
import Flex from 'components/atoms/Flex';
import './style.scss';
import Divider from 'components/atoms/Divider';
import Copyright from 'components/molecules/Copyright';

export default function FooterDesktop() {
  return (
    <div className="desktop_page__footer">
      <div className="desktop_page__footer-header">
        <Container>
          <Row>
            <Col md={4}>
              <SocialIcons />
            </Col>
            <Col md={{ span: 8 }}>
              <LangSwitch />
            </Col>
          </Row>
        </Container>
      </div>

      <Divider />

      <Flex>
        <AwardsContainer />
        <Copyright />
      </Flex>
    </div>
  );
}
