import React, { Component } from 'react';
import { Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete } from 'antd';
import App from '../App';

const FormItem = Form.Item
const category = [{
	value: 'imported',
    label: 'imported'
},{
    value: 'local',
    label: 'local',
}];

class Postbusiness extends Component {

    render() {
        const {getFieldDecorator} = this.props.form;

        const formItemLayout = {

            labelCol: {
            	md:{span:6},
                xs: {span: 24},
                sm: {span: 5},
            },
            wrapperCol: {
            	md:{span:12},
                xs: {span: 24},
                sm: {span: 16},
            },
        };
        return (
            <div>
                {/*================================App component include Start===========================*/}
                <App/>
                {/*================================App component include End===========================*/}

                {/*================================post business form start============================*/}
                <div className="container">
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <div className="panel-group">
                            <div className="panel panel-default">
                                <div className="main_c_panel">Roommates / Rentals<br/>
                                    Find all your Local Rentals in one place
                                </div>
                                <div className="panel-body">
                                    {/*==========main panel content=============*/}
                                    {/*==========location panel start=========*/}
                                    <div class="panel panel-default">
                                        <div class="panel-heading bold_c_text"><Icon type="info-circle"/><span
                                            className="margin_font_location">Location</span></div>
                                        <div class="panel-body">
											<FormItem
                                                {...formItemLayout}
												label="Address"
											>
                                            {getFieldDecorator('address', {
                                                rules: [{ required: true, message: 'Please input your Address!', whitespace: true }],
                                            })(
                                                <Input  />
                                            )}
                                        	</FormItem>
											<FormItem
                                                {...formItemLayout}
												label="City"
											>
                                            {getFieldDecorator('city', {
                                                rules: [{ required: true, message: 'Please input your City!', whitespace: true }],
                                            })(
                                                <Input  />
                                            )}
                                        	</FormItem>
											<FormItem
                                                {...formItemLayout}
												label="State"
											>
                                            {getFieldDecorator('state', {
                                                rules: [{ required: true, message: 'Please input your State!', whitespace: true }],
                                            })(
                                                <Input  />
                                            )}
                                        	</FormItem>
											<FormItem
                                                {...formItemLayout}
												label="Zip"
											>
                                            {getFieldDecorator('zip', {
                                                rules: [{ required: true, message: 'Please input your Zip!', whitespace: true }],
                                            })(
                                                <Input  />
                                            )}
                                        	</FormItem>
										</div>
                                    </div>
                                    <br/>
                                    {/*==========location panel end===========*/}
                                    {/*==========Business panel start=========*/}
                                    <div class="panel panel-default">
                                        <div class="panel-heading bold_c_text"><Icon type="info-circle"/><span
                                            className="margin_font_location">Business</span></div>
                                        <div class="panel-body">
                                            <FormItem
                                                {...formItemLayout}
                                                label="Business Name"
                                            >
                                                {getFieldDecorator('businessName', {
                                                    rules: [{ required: true, message: 'Please input your Business Name!', whitespace: true }],
                                                })(
                                                    <Input  />
                                                )}
                                            </FormItem>
                                            <FormItem
                                                {...formItemLayout}
                                                label="Business Number"
                                            >
                                                {getFieldDecorator('businessNumber', {
                                                    rules: [{ required: true, message: 'Please input your Business Number!', whitespace: true }],
                                                })(
                                                    <Input  />
                                                )}
                                            </FormItem>
                                            <FormItem
                                                {...formItemLayout}
                                                label="Your Business Email id"
                                            >
                                                {getFieldDecorator('businessId', {
                                                    rules: [{ required: true, message: 'Please input your Business Email id!', whitespace: true }],
                                                })(
                                                    <Input  />
                                                )}
                                            </FormItem>
                                            <FormItem
                                                {...formItemLayout}
                                                label="Business Address"
                                            >
                                                {getFieldDecorator('businessAddress', {
                                                    rules: [{ required: true, message: 'Please input your Business Address!', whitespace: true }],
                                                })(
                                                    <Input  />
                                                )}
                                            </FormItem>
											<FormItem
                                                {...formItemLayout}
                                                label="Business Owner Name"
                                            >
                                                {getFieldDecorator('businessOwner', {
                                                    rules: [{ required: true, message: 'Please input your Business Owner Name!', whitespace: true }],
                                                })(
                                                    <Input  />
                                                )}
                                            </FormItem>
											<FormItem
                                                {...formItemLayout}
                                                label="Business Email"
                                            >
                                                {getFieldDecorator('businessEmail', {
                                                    rules: [
                                                    	{ type: 'email', message: 'The input is not valid E-mail!', whitespace: true },
														{ required: true, message: 'Please input your E-mail!',}
														],
                                                })(
                                                    <Input  />
                                                )}
                                            </FormItem>
                                            <FormItem
                                                {...formItemLayout}
                                                label="Business Category"
                                            >
                                                {getFieldDecorator('businessCategory', {
                                                    initialValue: ['zhejiang', 'hangzhou', 'xihu'],
                                                    rules: [{ type: 'array', required: true, message: 'Please select your Business Category!' }],
                                                })(
                                                    <Cascader options={category} />
                                                )}
                                            </FormItem>
										</div>
                                    </div>
                                    <br/>
                                    {/*==========Business panel end===========*/}
                                    {/*==========upload panel start=========*/}
                                    <div class="panel panel-default">
                                        <div class="panel-heading bold_c_text"><Icon type="info-circle"/><span
                                            className="margin_font_location">Upload</span></div>
                                        <div class="panel-body">Upload Form</div>
                                    </div>
                                    {/*==========upload panel end===========*/}
                                </div>
                                {/*main panel content*/}
                            </div>
                        </div>
                        {/*panel-group*/}
                    </Form>
                </div>
                {/*container*/}

                {/*================================post business form End==============================*/}
            </div>
        )
    }
}
const WrappedRegistrationForm = Form.create()(Postbusiness);
export default WrappedRegistrationForm;