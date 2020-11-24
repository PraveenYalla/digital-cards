import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import TemplatesComponent from './components/Templates';

const Templates = () => (
  <Container className="dashboard">
    <Row>
      <Col md={12}>
        <h3 className="page-title">Templates</h3>
      </Col>
    </Row>
    <Row>
      <Col md={12}>
       <TemplatesComponent />
      </Col>
    </Row>
  </Container>
);

export default Templates;
