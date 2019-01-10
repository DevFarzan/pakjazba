import React, { Component } from 'react';
import {
  Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, Menu, AutoComplete,
} from 'antd';
import { DatePicker } from 'antd';
import './Vitalinfo.css';
import LengthInput from './LengthComponent';
import WidthInput from './WidthComponent';
import WeightInput from './WeightComponent';

const FormItem = Form.Item;
const Option = Select.Option;
const AutoCompleteOption = AutoComplete.Option;
const { MonthPicker, RangePicker, WeekPicker } = DatePicker;


class OfferInfo extends Component{

  state = {
    confirmDirty: false,
    autoCompleteResult: [],
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  handleConfirmBlur = (e) => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  }

  compareToFirstPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!');
    } else {
      callback();
    }
  }

  handleSelectChange = (value) => {
   console.log(value);
   this.props.form.setFieldsValue({
     note: `Hi, ${value === 'bundle' ? 'part' : 'preorder'}!`,
   });
 }

  handleWebsiteChange = (value) => {
    let autoCompleteResult;
    if (!value) {
      autoCompleteResult = [];
    } else {
      autoCompleteResult = ['.com', '.org', '.net'].map(domain => `${value}${domain}`);
    }
    this.setState({ autoCompleteResult });
  }

  // length //

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  checkPrice = (rule, value, callback) => {
    if (value.number > 0) {
      callback();
      return;
    }
    callback('Value must greater than zero!');
  }

  //  length end //

  // date picker //
  onChange = (date, dateString) => {
  console.log(date, dateString);
 }

  //  date picker end //
  render(){
    const { getFieldDecorator } = this.props.form;
    const { autoCompleteResult } = this.state;
    const websiteOptions = autoCompleteResult.map(website => (
      <AutoCompleteOption key={website}>{website}</AutoCompleteOption>
    ));


    return(
      <div className="container" style={{width:"100%"}}>
        <div className="row">
          <div className="col-md-12">
            <div className="col-md-3">
              <div className="vitalbox">
                <h4> Listing Assitant </h4>
                <p> Supply enough information tomake the buying decision easy. Please ensure that all products and content comply with our Selling and Policies restrictions including the Restructed products policy </p>

                <p style={{textAlign:"center"}}> *Fields are required </p>
              </div>
            </div>
            <div className="col-md-9">
              <div className="vitalbox">
                <div className="row">
                {/* seller sku */}
                  <div className="col-md-12">
                    <div className="col-md-4 col-xs-4">
                      <div className="floatright">
                        <label>Seller SKU:</label>
                        <p> (max 250 charcters) </p>
                      </div>
                    </div>
                    <div className="col-md-8 col-xs-4">
                        <FormItem>
                          {getFieldDecorator('seller', {
                            rules: [{ required: true, message: 'Please input your nickname!', whitespace: true }],
                          })(
                            <Input />

                          )}
                        </FormItem>
                        <p className="margin-top"> Example: Olympus Camedia C-50 Digital Camera  </p>
                    </div>
                  </div>
                {/* condition */}
                  <div className="col-md-12">
                    <div className="col-md-4">
                      <div className="floatright">
                        <label style={{marginLeft:"17px"}}> *Condition:</label>
                      </div>
                    </div>
                    <div className="col-md-8">
                    <FormItem
                       wrapperCol={{ span: 8 }}
                      >
                        {getFieldDecorator('gtin', {
                          rules: [{ required: true, message: 'Please select ' }],
                        })(
                          <Select
                            placeholder="Select "
                            onChange={this.handleSelectChange}
                          >
                            <Option value="new">New</Option>
                            <Option value="used">Used</Option>
                            <Option value="refurbish">Refurb</Option>
                          </Select>
                        )}
                      </FormItem>
                    </div>
                  </div>
                {/* condition note */}
                  <div className="col-md-12">
                    <div className="col-md-4">
                      <div className="floatright">
                        <label style={{marginLeft:"96px"}}>Condition Note:</label>
                        <p> (Add your comments about the condition) </p>
                      </div>
                    </div>
                    <div className="col-md-8">
                        <FormItem>
                          {getFieldDecorator('manufacturer', {
                            rules: [{ required: true, message: 'Please input your nickname!', whitespace: true }],
                          })(
                            <Input style={{height:"200px"}} />
                          )}
                        </FormItem>
                        <p className="margin-top"> Example: Dust Cover missing, Some scratches on the front. </p>
                    </div>
                  </div>
                {/* your price */}
                  <div className="col-md-12">
                    <div className="col-md-4">
                      <div className="floatright">
                        <label>* Your Price:</label>
                        <p> (Quantity of the item for sale in one package) </p>
                      </div>
                    </div>
                    <div className="col-md-8">
                        <FormItem>
                          {getFieldDecorator('brandname', {
                            rules: [{ required: true, message: 'Please input your nickname!', whitespace: true }],
                          })(
                            <Input />
                          )}
                        </FormItem>
                        <p className="margin-top"> Example: 50.00  </p>
                    </div>
                  </div>
                {/* sale price */}
                  <div className="col-md-12">
                    <div className="col-md-4">
                      <div className="floatright">
                        <label>* Sale Price:</label>
                        <p> (A sale price must have a start & end date) </p>
                      </div>
                    </div>
                    <div className="col-md-8">
                      <div className="row">
                        <div className="col-md-4">
                          <FormItem>
                            {getFieldDecorator('manufacturerpart', {
                              rules: [{ required: true, message: 'Please input your nickname!', whitespace: true }],
                            })(
                              <Input />
                            )}
                          </FormItem>
                        </div>
                        <div className="col-md-4">
                           <DatePicker onChange={this.onChange()} />
                        </div>
                        <div className="col-md-4">
                           <DatePicker onChange={this.onChange()} />
                        </div>
                      </div>
                    </div>
                  </div>
                {/* quantity */}
                  <div className="col-md-12">
                    <div className="col-md-4">
                      <div className="floatright">
                        <label>*Quantity:</label>
                        <p> (Quantity of the item for sale in one package) </p>
                      </div>
                    </div>
                    <div className="col-md-8">
                      <div className="row" style={{padding:"0"}}>
                        <div className="col-md-12">
                          <div className="col-md-4">
                            <FormItem>
                              {getFieldDecorator('pakagequantity', {
                                rules: [{ required: true, message: 'Please input your nickname!', whitespace: true }],
                              })(
                                <Input style={{marginLeft:"-14px"}}/>
                              )}
                            </FormItem>
                          </div>
                          <div className="col-md-8">
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                {/* legal Desclaimer */}
                  <div className="col-md-12">
                    <div className="col-md-4">
                      <div className="floatright">
                        <label>* Legal Desclaimer:</label>
                        <p> (In order to comply with guidlines,) </p>
                      </div>
                    </div>
                    <div className="col-md-8">
                        <FormItem>
                          {getFieldDecorator('materialtype', {
                            rules: [{ required: true, message: 'Please input your nickname!', whitespace: true }],
                          })(
                            <Input style={{height:"200px"}}/>
                          )}
                        </FormItem>
                        <p className="margin-top"> Example: Must be at least 18 & over to purchase  </p>
                    </div>
                  </div>
                {/* tax code */}
                  <div className="col-md-12">
                    <div className="col-md-4">
                      <div className="floatright">
                        <label>Tax Code:</label>
                        <p> (Opptional: applies if you enable Pak Jazba tax collection service,) </p>
                      </div>
                    </div>
                    <div className="col-md-8">
                      <div className="row" style={{padding:"0"}}>
                        <div className="col-md-12">
                          <div className="col-md-4">
                            <FormItem>
                              {getFieldDecorator('color', {
                                rules: [{ required: true, message: 'Please input your nickname!', whitespace: true }],
                              })(
                                <Input style={{marginLeft:"-14px"}}/>
                              )}
                            </FormItem>
                          </div>
                          <div className="col-md-8">
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                {/* handling in time */}
                  <div className="col-md-12">
                    <div className="col-md-4">
                      <div className="floatright">
                        <label>Handling time (in Days):</label>
                        <p> (Default is 1-2 days) </p>
                      </div>
                    </div>
                    <div className="col-md-8">
                      <div className="row" style={{padding:"0"}}>
                        <div className="col-md-12">
                          <div className="col-md-4">
                            <FormItem>
                              {getFieldDecorator('shape', {
                                rules: [{ required: true, message: 'Please input your nickname!', whitespace: true }],
                              })(
                                <Input style={{marginLeft:"-14px"}}/>
                              )}
                            </FormItem>
                          </div>
                          <div className="col-md-8">
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                {/* start selling date */}
                  <div className="col-md-12">
                    <div className="col-md-4">
                      <div className="floatright">
                        <label>* Start selling date:</label>
                        <p> (color of the lense in the item) </p>
                      </div>
                    </div>
                    <div className="col-md-8">
                        <FormItem>
                          {getFieldDecorator('lensecolor', {
                            rules: [{ required: true, message: 'Please input your nickname!', whitespace: true }],
                          })(
                            <DatePicker onChange={this.onChange()} />
                          )}
                        </FormItem>
                        <p className="margin-top"> Example: Blue, orange  </p>
                    </div>
                  </div>
                {/* restock date */}
                  <div className="col-md-12">
                    <div className="col-md-4">
                      <div className="floatright">
                        <label> Restock date:</label>
                        <p> (mm/dd/yyyy) </p>
                      </div>
                    </div>
                    <div className="col-md-8">
                        <FormItem>
                          {getFieldDecorator('lensecolor', {
                            rules: [{ required: true, message: 'Please input your nickname!', whitespace: true }],
                          })(
                            <DatePicker onChange={this.onChange()} />
                          )}
                        </FormItem>
                        <p className="margin-top"> Example: Blue, orange  </p>
                    </div>
                  </div>
                {/* import designation */}
                  <div className="col-md-12">
                    <div className="col-md-4">
                      <div className="floatright">
                        <label> Import Designation:</label>
                        <p> (If made is USA from imported materials select "Made in USA" If made out side of USA select "IMPORTED")</p>
                      </div>
                    </div>
                    <div className="col-md-8">
                    <FormItem
                       wrapperCol={{ span: 8 }}
                      >
                        {getFieldDecorator('gtin', {
                          rules: [{ required: true, message: 'Please select ' }],
                        })(
                          <Select
                            placeholder="Select "
                            onChange={this.handleSelectChange}
                          >
                            <Option value="USA">USA</Option>
                            <Option value="imported">IMPORTED</Option>
                          </Select>
                        )}
                      </FormItem>
                    </div>
                  </div>
                {/* country of publication */}
                  <div className="col-md-12">
                    <div className="col-md-4">
                      <div className="floatright">
                        <label>Country of Publication:</label>
                        <p> (the country in which  the product was published) </p>
                      </div>
                    </div>
                    <div className="col-md-8">
                      <div className="row" style={{padding:"0"}}>
                        <div className="col-md-12">
                          <div className="col-md-5">
                            <FormItem>
                              {getFieldDecorator('tension', {
                                rules: [{ required: true, message: 'Please input your nickname!', whitespace: true }],
                              })(
                                <Input style={{marginLeft:"-14px"}}/>
                              )}
                            </FormItem>
                            <p className="margin-top">  Example: England, Germany  </p>
                          </div>
                          <div className="col-md-7">
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                {/* seller warranty description */}
                  <div className="col-md-12">
                    <div className="col-md-4">
                      <div className="floatright">
                        <label>Seller Warranty Description:</label>
                      </div>
                    </div>
                    <div className="col-md-8">
                        <FormItem>
                          {getFieldDecorator('product id', {
                            rules: [{ required: true, message: 'Please input your nickname!', whitespace: true }],
                          })(
                            <Input style={{height:"200px"}}/>
                          )}
                        </FormItem>
                    </div>
                  </div>
                {/* ofeering release date */}
                  <div className="col-md-12">
                    <div className="col-md-4">
                      <div className="floatright">
                        <label> Offering Release Date:</label>
                      </div>
                    </div>
                    <div className="col-md-8">
                        <FormItem>
                          {getFieldDecorator('lensecolor', {
                            rules: [{ required: true, message: 'Please input your nickname!', whitespace: true }],
                          })(
                            <DatePicker onChange={this.onChange()} />
                          )}
                        </FormItem>
                        <p className="margin-top"> Example: Blue, orange  </p>
                    </div>
                  </div>
                {/* country as labelled */}
                  <div className="col-md-12">
                    <div className="col-md-4">
                      <div className="floatright">
                        <label> Country as labeled:</label>
                        <p> (Complete only if import Designation is "imported" select country shown on product label) </p>
                      </div>
                    </div>
                    <div className="col-md-8">
                      <div className="row" style={{padding:"0"}}>
                        <div className="col-md-12">
                          <div className="col-md-5">
                            <FormItem>
                              {getFieldDecorator('maximumweight', {
                                rules: [{ required: true, message: 'Please input your nickname!', whitespace: true }],
                              })(
                                <Input style={{marginLeft:"-14px"}}/>
                              )}
                            </FormItem>
                          </div>
                          <div className="col-md-7">
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
                <div className="row" style={{paddingTop:"10px", paddingLeft:""}}>
                  <div className="col-md-3 col-xs-4">
                  <div className="row center_global row">
                      <button style={{textAlign: 'center'}} className="btn ecombutton">Cancel</button>
                  </div>
                  </div>
                  <div className="col-md-3 col-xs-4">
                    <div className="row center_global row">
                        <button style={{textAlign: 'center'}} className="btn ecombutton">Save as Draft</button>
                    </div>
                  </div>
                  <div className="col-md-3 col-xs-4">
                    <div className="row center_global row">
                        <button style={{textAlign: 'center'}} className="btn button_custom">Next</button>
                    </div>
                  </div>
                  <div className="col-md-3">
                  </div>
                </div>
            </div>
          </div>

        </div>

      </div>


    );
  }
}

const WrappedBusinessForm = Form.create()(OfferInfo);
export default WrappedBusinessForm;
