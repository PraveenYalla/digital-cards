import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import CardsComponent from './components/Cards';

const Cards = () => (
  <Container className="dashboard">
    <Row>
      <Col md={12}>
        <h3 className="page-title">Cards</h3>
      </Col>
    </Row>
    <Row>
      <CardsComponent />
    </Row>
  </Container>
);

export default Cards;
