import React,{useState,useEffect} from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import Row from 'reactstrap/lib/Row';
import Template from './Template';

const TemplatesComponent = () => {

  const layoutsList = [
    {
      "templateid":1,
      "name":"Layout 1",
      "templateurl":"test"
    },
    {
      "templateid":2,
      "name":"Layout 2",
      "templateurl":"test"
    },
    {
      "templateid":3,
      "name":"Layout 3",
      "templateurl":"test"
    }
  ]
  
  return (
  <Row>
    {layoutsList &&
      layoutsList.map((layout) => (
         <Template name={layout.name}></Template>
        ))}
  </Row>
)};

export default TemplatesComponent;
