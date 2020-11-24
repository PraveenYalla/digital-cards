import React from 'react';
import { Col, Container, Row } from 'reactstrap';


import Topbar from '../Layout/topbar/Topbar';
import EditorLayout from './components/EditorLayout';

const Editor = () => (
  <div>
    <Topbar changeMobileSidebarVisibility={false}></Topbar>
    <div className="editor__wrap">
      <div className="container__wrap">
        <Container fluid={true} className="dashboard">
          <Row>
            <Col md={12}>
              <h3 className="page-title">Template Editor</h3>
            </Col>
          </Row>
          <Row>
            <EditorLayout layout="layout1" />
          </Row>
        </Container>
      </div>
    </div>

  </div>
);

export default Editor;
