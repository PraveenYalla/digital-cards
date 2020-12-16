import React, { useState, useEffect, Fragment, Component } from "react";
import { Card, CardBody, Col, Button } from "reactstrap";
import Row from "reactstrap/lib/Row";
import { getFormValues } from "redux-form";
import bg from './images/background.jpg'
import logo from './images/servicenow-logo.png'

import { connect } from "react-redux";
class Layout1 extends Component {
  render() {
    console.log(this.props);
    const formdata = this.props.templateForm;

    const { name, address, contact, email, website, file, selectedbg} = formdata || "";

    const { preview } = file || '';
    const logoimg = preview || logo ;

    const bgimg = selectedbg || bg;

    const logobg = {
      backgroundImage: "url(" + logoimg + ")",
    };
    const imgbg = {
      backgroundImage: "url(" + bgimg + ")",
    };

    return (
      <Fragment>
        {/* <Button color="primary" type="button" onClick={this.downloadImage}>Save and Download</Button> */}
        <div className="layout1__wrapper" id="layout" style={imgbg}>
          <div className="layout1__header">
            <div className="layout1__logo" style={logobg}></div>
            <div className="cmpny__name">
              <h2>{name}</h2>
            </div>
          </div>
          <div className="layout1__title"></div>
          <div className="layout1__footer">
            {/* <ul className="layout1__list">
                        <li>Item1</li>
                        <li>Item2</li>
                        <li>Item3</li>
                    </ul> */}
            <div className="layout__address">{address}</div>

            <div className="layout1__otherdetails">
              <div className="layout1__contact">
                <span>Contact:</span>
                <span className="det__value">{contact}</span>
              </div>
              <div className="layout1__email">
                <span>Email:</span>
                <span className="det__value">{email}</span>
              </div>
              <div className="layout1__website">
                <span>Website:</span>
                <span className="det__value">{website}</span>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    templateForm: getFormValues("layoutForm")(state), // here 'form' is the name you have given your redux form
    data:state
  };
}

export default connect(mapStateToProps)(Layout1);
