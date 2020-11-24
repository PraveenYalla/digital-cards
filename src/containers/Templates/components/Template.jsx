import React,{useState,useEffect} from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import Row from 'reactstrap/lib/Row';

const Template = ({name}) => {
    return (
      <Col md={2}>
          <Card>
            <CardBody>
              <img src="logo2.jpg" alt="logo" />
              <div className="card__title">
                <h5 className="bold-text">{name}</h5>
              </div>
            </CardBody>
          </Card>
        </Col>
    )
};


export default Template;
