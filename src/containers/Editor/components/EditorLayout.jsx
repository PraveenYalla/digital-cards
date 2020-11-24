import React, { Component, Fragment } from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import Layout1 from '../../Templates/template-layouts/Layout-1'
import FormLayout from './FormLayout';


class EditorLayout extends Component {

  

  setLayout = () => {
    const layout = this.props.layout;
    switch(layout){
      case "layout1" :
        return <Layout1></Layout1>
      default:
        return (
          <div>
            No data
          </div>
        )
    }
  }

  render() {
    return (
      <Fragment>
        <Col md={6}>
          <Card>
            <CardBody>
              <div className="layoutWrapper">
                {this.setLayout()}
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col md={6}>
            <Card>
              <CardBody>
                <FormLayout></FormLayout>
              </CardBody>
            </Card>
        </Col>
      </Fragment>
    )
  }

}


export default EditorLayout;


// const EditorLayout = (props) => {
  
//   const setLayout = () => {
//     console.log(this.props);
//   }

//   return (
//   <Fragment>
//     <Col md={6}>
//         <Layout1></Layout1>
//     </Col>
//     <Col md={6}>
//       {setLayout()}
//         <p>Fields</p>
//     </Col>
//   </Fragment>
// )};

// export default EditorLayout;
