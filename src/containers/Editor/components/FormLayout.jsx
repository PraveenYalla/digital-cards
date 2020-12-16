import React, { Component, Fragment } from "react";
import {
  Card,
  CardBody,
  Col,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
  ButtonToolbar,
  Button,
} from "reactstrap";
import { Field, reduxForm } from "redux-form";
import { downloadImage } from "../../Editor/components/DownloadImage";
import renderFileInputField from "../../common/FileInput";

import image from '../images/img1.jpg';
import image2 from '../images/img2.jpg';
import image3 from '../images/img3.jpg';

import { getFormValues } from "redux-form";
import { change } from 'redux-form'
class FormLayout extends Component {
  constructor() {
    super();
    this.state = {
      activeTab: "1",
    };
  }

  toggle = (tab) => {
    const { activeTab } = this.state;
    if (activeTab !== tab) {
      this.setState({
        activeTab: tab,
      });
    }
  };

  downloadImageFunc = () => {
    downloadImage("layout");
  };

  changeBg = (img) => {
    const setimg = img;
    this.props.change('selectedbg', setimg)
  }

  render() {
    var defaultValues = {
      name: "",
      address: "",
      website: "",
      contact: "",
      email: "",
    };

    const { activeTab } = this.state;

    return (
      <Fragment>
        <Card>
          <CardBody>
            <div className="card__title">
              <h5 className="bold-text">Edit Template Details</h5>
            </div>
            <div className="tabs  tabs--bordered-bottom">
              <div className="tabs__wrap formlayout__wrap">
                <Nav tabs>
                  <NavItem>
                    <NavLink
                      className={{ active: activeTab === "1" }}
                      onClick={() => {
                        this.toggle("1");
                      }}
                    >
                      Details
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={{ active: activeTab === "2" }}
                      onClick={() => {
                        this.toggle("2");
                      }}
                    >
                      Photo
                    </NavLink>
                  </NavItem>
                </Nav> <form
                  className="form form--horizontal"
                  initialValues={defaultValues}
                >

                  <TabContent activeTab={activeTab}>
                    <TabPane tabId="1">

                      <div className="form__form-group">
                        <span className="form__form-group-label">
                          Company Name
                        </span>
                        <div className="form__form-group-field">
                          <Field
                            name="name"
                            component="input"
                            type="text"
                            placeholder=""
                          />
                        </div>
                      </div>

                      <div className="form__form-group">
                        <span className="form__form-group-label">Address</span>
                        <div className="form__form-group-field">
                          <Field
                            name="address"
                            component="input"
                            type="text"
                            placeholder=""
                          />
                        </div>
                      </div>

                      <div className="form__form-group">
                        <span className="form__form-group-label">
                          Contact No
                        </span>
                        <div className="form__form-group-field">
                          <Field
                            name="contact"
                            component="input"
                            type="text"
                            placeholder=""
                          />
                        </div>
                      </div>

                      <div className="form__form-group">
                        <span className="form__form-group-label">Email</span>
                        <div className="form__form-group-field">
                          <Field
                            name="email"
                            component="input"
                            type="text"
                            placeholder=""
                          />
                        </div>
                      </div>

                      <div className="form__form-group">
                        <span className="form__form-group-label">Website</span>
                        <div className="form__form-group-field">
                          <Field
                            name="website"
                            component="input"
                            type="text"
                            placeholder=""
                          />
                        </div>
                      </div>

                      <div className="form__form-group">
                        <span className="form__form-group-label">Logo</span>
                        <div className="form__form-group-field">
                          <Field name="file" component={renderFileInputField} />
                        </div>
                      </div>
                      <div className="form__footer">
                        <ButtonToolbar>
                          {/* <Button color="primary" type="button">
                            Save and Download
                          </Button> */}
                          <Button
                            color="primary"
                            type="button"
                            onClick={this.downloadImageFunc}
                          >
                            Save and Download
                          </Button>
                        </ButtonToolbar>
                      </div>
                    </TabPane>
                    <TabPane tabId="2">
                      <Field
                        name="selectedbg"
                        component="input"
                        type="hidden"
                        placeholder=""
                      />
                      <div className="images_list">
                        <div className="image_item" style={{ backgroundImage: "url(" + image + ")" }} onClick={() => { this.changeBg(image) }} >
                        </div>
                        <div className="image_item" style={{ backgroundImage: "url(" + image2 + ")" }} onClick={() => { this.changeBg(image2) }} >
                        </div>
                        <div className="image_item" style={{ backgroundImage: "url(" + image3 + ")" }} onClick={() => { this.changeBg(image3) }} >
                        </div>
                      </div>
                    </TabPane>
                  </TabContent>
                </form>
              </div>
            </div>
          </CardBody>
        </Card>
      </Fragment>
    );
  }
}


export default reduxForm({
  form: "layoutForm", // a unique identifier for this form
  initialValues: {
    name: "Infosys PVT Limited",
    address: "Hyderabad, Gachibowli",
    website: "www.infosys.com",
    contact: "9876543210",
    email: "employee@infosys.com",
  }
})(FormLayout);
