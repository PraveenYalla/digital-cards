import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import DashboardComponent from './components/Dashboard';

const Dashboard = (props) => (
  <Container className="dashboard">
    <Row>
      <Col md={12}>
        <h3 className="page-title">Dashboard</h3>
      </Col>
    </Row>
    <Row>
      <DashboardComponent {...props}/>
    </Row>
  </Container>
);

export default Dashboard;
