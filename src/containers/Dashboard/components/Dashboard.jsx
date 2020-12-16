import React, {Component}  from 'react';
import { Card, CardBody, Col } from 'reactstrap';



class DashboardComponent extends Component {

  constructor(props){
    super(props)
  }

  openEditor = (layout) => {
    this.props.history.push("/editor/" + layout);
  }

  render(){
    return (
      <Col md={3}>
        <Card onClick={()=> {this.openEditor("layout1")}}>
          <CardBody>
            <div className="card__title">
              <h2 className="bold-text">Layout 1</h2>
              {/* <h5 className="subhead">Example subhead</h5> */}
            </div>
          </CardBody>
        </Card>
      </Col>
    )
  }
}

export default DashboardComponent;
