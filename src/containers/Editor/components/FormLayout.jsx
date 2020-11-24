import React, { Component, Fragment } from 'react';
import { Card, CardBody, Col, Nav, NavItem, NavLink, TabContent, TabPane, ButtonToolbar, Button } from 'reactstrap';
import { Field, reduxForm } from 'redux-form';
import renderFileInputField from '../../common/FileInput'


class FormLayout extends Component {

    constructor() {
        super();
        this.state = {
            activeTab: '1',
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
    
    

    render() {
        var defaultValues = {"name": "", "address":"", "website":"", "contact":"", "email":"" };

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
                                            className={{ active: activeTab === '1' }}
                                            onClick={() => {
                                                this.toggle('1');
                                            }}
                                        >
                                            Details
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                            className={{ active: activeTab === '2' }}
                                            onClick={() => {
                                                this.toggle('2');
                                            }}
                                        >
                                            Photo
                                        </NavLink>
                                    </NavItem>
                                </Nav>
                                <TabContent activeTab={activeTab}>
                                    <TabPane tabId="1">
                                        <form className="form form--horizontal"  initialValues={defaultValues}>
                                            <div className="form__form-group">
                                                <span className="form__form-group-label">Company Name</span>
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
                                                <span className="form__form-group-label">Contact No</span>
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
                                                    <Field
                                                        name="file"
                                                        component={renderFileInputField}
                                                    />
                                                </div>
                                            </div>
                                            <div className="form__footer">
                                                <ButtonToolbar>
                                                    <Button color="primary" type="button">Save and Download</Button>
                                                </ButtonToolbar>
                                            </div>
                                        </form>
                                    </TabPane>
                                    <TabPane tabId="2">
                                        <div>
                                            Test
                                        </div>
                                    </TabPane>
                                </TabContent>

                            </div>

                        </div>
                       
                    </CardBody>
                </Card>
            </Fragment>
        )
    }

}


export default reduxForm({
    form: 'layoutForm', // a unique identifier for this form
})((FormLayout));
