/*
 * File: index.js
 * Project: cellcard-play-pwa
 * File Created: Thursday, 6th August 2020 12:28:09 pm
 * Author: Jerobert (zjerobert@mitrai.com)
 * -----
 * Last Modified: Monday, 10th August 2020 13:30:46 pm
 * Modified By: Jerobert (zjerobert@mitrai.com)
 * -----
 * Copyright 2020 - 2020 Mitra Innovation Ltd., Mitra Innovation Ltd.
 */
import React, { useContext } from 'react';
import { Accordion, Card } from 'react-bootstrap';
import { useAccordionToggle } from 'react-bootstrap/AccordionToggle';
import { useTranslation } from 'react-i18next';
import AccordionContext from 'react-bootstrap/AccordionContext';
import Icon from 'components/atoms/Icon';
import './style.scss';

const faqs = [
  {
    id: 1,
    question: 'GP_INFORMATION_FAQONE',
    answer: 'GP_INFORMATION_ANSONE',
  },
  {
    id: 2,
    question: 'GP_INFORMATION_FAQTWO',
    answer: 'GP_INFORMATION_ANSTWO',
  },
  {
    id: 3,
    question: 'GP_INFORMATION_FAQTHREE',
    answer: 'GP_INFORMATION_ANSTHREE',
  },

  {
    id: 4,
    question: 'GP_INFORMATION_FAQFOUR',
    answer: 'GP_INFORMATION_ANSFOUR',
  },
  {
    id: 5,
    question: 'GP_INFORMATION_FAQFIVE',
    answer: 'GP_INFORMATION_ANSFIVE',
  },
  {
    id: 6,
    question: 'GP_INFORMATION_FAQSIX',
    answer: 'GP_INFORMATION_ANSSIX',
  },
  {
    id: 7,
    question: 'GP_INFORMATION_FAQSEVEN',
    answer: 'GP_INFORMATION_ANSSEVEN',
  },
  {
    id: 8,
    question: 'GP_INFORMATION_FAQEIGHT',
    answer: 'GP_INFORMATION_ANSEIGHT',
  },
  {
    id: 9,
    question: 'GP_INFORMATION_FAQNINE',
    answer: 'GP_INFORMATION_ANSNINE',
  },
];

function ContextAwareToggle({ eventKey, callback }) {
  const currentEventKey = useContext(AccordionContext);

  const decoratedOnClick = useAccordionToggle(
    eventKey,
    () => callback && callback(eventKey),
  );

  const isCurrentEventKey = currentEventKey === eventKey;

  return (
    <span role="button" onClick={decoratedOnClick}>
      {isCurrentEventKey ? (
        <Icon icon="chevron-up" />
      ) : (
        <Icon icon="chevron-down" />
      )}
    </span>
  );
}

export default function AccordianFAQ() {
  const { t } = useTranslation();

  return (
    <div className="custom-accordian">
      <Accordion defaultActiveKey="0">
        {faqs.map((faq) => (
          <React.Fragment key={faq.id}>
            <Card>
              <Card.Header>
                <h3 className="card-header-question">{t(faq.question)}</h3>
                <ContextAwareToggle eventKey={faq.id} />
              </Card.Header>
              <Accordion.Collapse eventKey={faq.id}>
                <Card.Body
                  dangerouslySetInnerHTML={{ __html: t(faq.answer) }}
                />
              </Accordion.Collapse>
            </Card>
            <hr className="custom-accordian-line" />
          </React.Fragment>
        ))}
      </Accordion>
    </div>
  );
}
