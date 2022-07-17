/*
 * Author: Jude Fernando (jfernando@mitrai.com)
 * Date: Tuesday, 21st July 2020 1:18:13 pm
 * Module: Cellcard Play Frontend
 * Copyright © 2020 Cellcard Play. All rights reserved.
 */

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import StaticPageTemplate from '../../templates/StaticPageTemplate';
import { Container, Button as BootrapButton } from 'react-bootstrap';
import StaticHeader from '../../components/molecules/StaticHeader';
import Button from '../../components/atoms/Button';
import Modal from 'components/molecules/Modal';
import Heading from 'components/atoms/Heading';
import ListItem from 'components/atoms/ListItem';

const Demo = () => {
  const [show, showModal] = useState(false);

  return (
    <StaticPageTemplate>
      <StaticHeader title="Demo of Components" />
      <Container>
        <h2>UI Button</h2>
        <Button label="Hello" icon="add_to_home_filled" />
        <Button label="Add to Home" rounded size="sm" icon="add_to_home_filled" />
        <Button label="Hello" rounded size="lg" block />
        <Button label="Hello" variant="light" icon="add_to_home_filled" rounded block />
        <Button label="Hello" variant="dark" rounded size="lg" block />
        <Button label="Hello" variant="dark" icon="add_to_home_filled" rounded size="sm" />
        <Button label="Hello" variant="outline-primary" rounded size="lg" block />
        <Button label="Hello" variant="link" rounded size="lg" block />

        {/*Example for Modal Component*/}
        <h2>UI Modal</h2>
        <Button label="Show Modal" rounded size="lg" block onClick={() => showModal(true)} />
        <Modal
          show={show}
          confirmTitle={'Okay'}
          cancelTitle={'Cancel'}
          onConfirm={() => showModal(false)}
          ModalTitle={'This is Title'}
          ModalBody={'This is body'}
          IconType={'success'}
        />

        {/*Example for Heading Component*/}
        <Heading tag={'h1'}>This is h1</Heading>
        <Heading tag={'h2'}>This is h2</Heading>
      </Container>
      {/*Example for ListItem Component*/}
      <ListItem
        tag={BootrapButton}
        ItemProps={{ variant: 'dark', as: Link, to: '/' }}
        className={'mt-1 pl-3 pr-2'}
      >
        {'this is List'}
      </ListItem>
    </StaticPageTemplate>
  );
};

export default Demo;
