import React, { Component } from 'react';
import { Form, Input } from 'antd';
import './descriptionforms.css'

const { TextArea } = Input;
const FormItem = Form.Item;

class DescriptionForm extends Component {
  constructor(props) {
    super(props)

  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="container" style={{ width: "100%" }}>
        <Form onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="col-md-12">
              <div className="col-md-3">
                <div className="vitalbox">
                  <h4> Listing Assitant </h4>
                  <p> Supply enough information tomake the buying
                    decision easy. Please ensure that all products
                    and content comply with our Selling and Policies
                  restrictions including the Restructed products policy </p>
                  <p style={{ textAlign: "center" }}> *Fields are required </p>
                </div>
              </div>
              <div className="col-md-9">
                <div className="vitalbox">
                  <div className="row">
                    <div className="col-md-5">
                      <div className="descriptionright">
                        <h4> Key Product Features: </h4>
                        <p> (Max.100 charchters per line. use these to
                          highlight soem of the product's most important
                          qualities. each line be displayed as a seperate
                        bullet point above the product description.) </p>
                      </div>
                    </div>
                    <div className="col-md-7">
                      <FormItem>
                        {getFieldDecorator('productFeature', {
                          rules: [{
                            required: false,
                            message: 'Please enter Product Feature',
                            whitespace: true
                          }],
                        })(
                          <Input />
                        )}
                      </FormItem>
                      <p> Example: 95 square inches midplus head </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-5">
                      <div className="descriptionright">
                        <h4> Key Product Features: </h4>
                        <p> (Max.200 charchters. Use this to describe
                          the product in detail. Please enter only item
                        condition, and other seller specific info.  ) </p>
                      </div>
                    </div>
                    <div className="col-md-7">
                      <FormItem>
                        {getFieldDecorator('description', {
                          rules: [{
                            required: false,
                            message: 'Please enter description',
                            whitespace: true
                          }],
                        })(
                          <Input
                            style={{ width: '100%', height: '10rem' }}
                            type="textarea"
                            autosize={false}
                            rows={6}
                          />
                          // <TextArea rows={6} />
                        )}
                      </FormItem>
                      <p> Example: Featuring the sweet spot suspension
                      system, Price's Triple Threat Bandit tennis racquet offers......... </p>
                    </div>
                  </div>
                </div>
                <div className="row" style={{ paddingTop: "10px", paddingLeft: "" }}>
                  <div className="col-md-3 col-xs-4">
                    <div className="row center_global row">
                      <button style={{ textAlign: 'center', width: "50%" }}
                        className="btn ecombutton">Cancel</button>
                    </div>
                  </div>
                  <div className="col-md-3 col-xs-4">
                    <div className="row center_global row">
                      <button style={{ textAlign: 'center', width: "70%" }}
                        className="btn ecombutton">Save as Draft</button>
                    </div>
                  </div>
                  <div className="col-md-3 col-xs-4">
                    <div className="row center_global row">
                      <button style={{ textAlign: 'center', width: "70%" }}
                        className="btn button_custom">Next</button>
                    </div>
                  </div>
                  <div className="col-md-3">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Form>
      </div>
    )
  }
}


const WrappedBusinessForm = Form.create()(DescriptionForm);
export default WrappedBusinessForm;

