import React, { Component } from 'react';
import {
  Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, Menu, AutoComplete,
} from 'antd';
import './Vitalinfo.css';
import LengthInput from './LengthComponent';
import WidthInput from './WidthComponent';
import WeightInput from './WeightComponent';

const FormItem = Form.Item;
const Option = Select.Option;
const AutoCompleteOption = AutoComplete.Option;


class VitalInfo extends Component{

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

  // help click button //
  handleMouseEnter = (event) => {
      return false;
    };

    handleMouseLeave = (event) => {
      return false;
    };
  // End //
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
                {/*prducts*/}
                  <div className="col-md-12">
                    <div className="col-md-4 col-xs-4">
                      <div className="floatright">
                          <label>* Product:</label>
                          <p> (Max 250 characters) </p>
                      </div>
                    </div>
                    <div className="col-md-8 col-xs-8">
                        <FormItem>
                          {getFieldDecorator('product', {
                            rules: [{ required: true, message: 'Please input your nickname!', whitespace: true }],
                          })(
                            <Input />

                          )}
                        </FormItem>
                        <p className="margin-top"> Example: Olympus camedia C-50 Digital Camera </p>
                    </div>
                  </div>
                {/*Manufacturer*/}
                  <div className="col-md-12">
                    <div className="col-md-4">
                      <div className="floatright">
                        <label>* Manufacturer:</label>
                      </div>
                    </div>
                    <div className="col-md-8">
                        <FormItem>
                          {getFieldDecorator('manufacturer', {
                            rules: [{ required: true, message: 'Please input your nickname!', whitespace: true }],
                          })(
                            <Input />
                          )}
                        </FormItem>
                        <p className="margin-top"> Example: Wilson; Speedo; STX </p>
                    </div>
                  </div>
                {/*Brand Name*/}
                  <div className="col-md-12">
                    <div className="col-md-4">
                      <div className="floatright">
                        <label>* Brand Name:</label>
                        <p> (max 50 character) </p>
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
                        <p className="margin-top"> Example: Ralph, Lauren  </p>
                    </div>
                  </div>
                {/*manufacturer part number*/}
                  <div className="col-md-12">
                    <div className="col-md-4">
                      <div className="floatright">
                        <label>* Manufacturer Part Number:</label>
                        <p> (for most products, this will be identical to the model number some manufacturers distinguish part number from model number) </p>
                      </div>
                    </div>
                    <div className="col-md-8">
                        <FormItem>
                          {getFieldDecorator('manufacturerpart', {
                            rules: [{ required: true, message: 'Please input your nickname!', whitespace: true }],
                          })(
                            <Input />
                          )}
                        </FormItem>
                        <p className="margin-top"> Example: LE  </p>
                    </div>
                  </div>
                {/*Package Quantity*/}
                  <div className="col-md-12">
                    <div className="col-md-4">
                      <div className="floatright">
                        <label>* Package Quantity:</label>
                        <p> (Quantity of the item for sale in one package) </p>
                      </div>
                    </div>
                    <div className="col-md-8">
                        <FormItem>
                          {getFieldDecorator('pakagequantity', {
                            rules: [{ required: true, message: 'Please input your nickname!', whitespace: true }],
                          })(
                            <Input />
                          )}
                        </FormItem>
                        <p className="margin-top"> Example: 1  </p>
                    </div>
                  </div>
                {/*Material Type*/}
                  <div className="col-md-12">
                    <div className="col-md-4">
                      <div className="floatright">
                        <label>* Material Type:</label>
                        <p> (What Material is the product made out of) </p>
                      </div>
                    </div>
                    <div className="col-md-8">
                        <FormItem>
                          {getFieldDecorator('materialtype', {
                            rules: [{ required: true, message: 'Please input your nickname!', whitespace: true }],
                          })(
                            <Input />
                          )}
                        </FormItem>
                        <p className="margin-top"> Example: nylon, wood, steel  </p>
                    </div>
                  </div>
                {/*Color*/}
                  <div className="col-md-12">
                    <div className="col-md-4">
                      <div className="floatright">
                        <label>* Color:</label>
                        <p> (the color of the item) </p>
                      </div>
                    </div>
                    <div className="col-md-8">
                        <FormItem>
                          {getFieldDecorator('color', {
                            rules: [{ required: true, message: 'Please input your nickname!', whitespace: true }],
                          })(
                            <Input />
                          )}
                        </FormItem>
                        <p className="margin-top"> Example: Red, Blue, Green  </p>
                    </div>
                  </div>
                {/*Shape*/}
                  <div className="col-md-12">
                    <div className="col-md-4">
                      <div className="floatright">
                        <label>* Shape:</label>
                        <p> (the shape of the item) </p>
                      </div>
                    </div>
                    <div className="col-md-8">
                        <FormItem>
                          {getFieldDecorator('shape', {
                            rules: [{ required: true, message: 'Please input your nickname!', whitespace: true }],
                          })(
                            <Input />
                          )}
                        </FormItem>
                        <p className="margin-top"> Example: Round, Oval, Square  </p>
                    </div>
                  </div>
                {/*Lense Color*/}
                  <div className="col-md-12">
                    <div className="col-md-4">
                      <div className="floatright">
                        <label>* Lens Color:</label>
                        <p> (color of the lense in the item) </p>
                      </div>
                    </div>
                    <div className="col-md-8">
                        <FormItem>
                          {getFieldDecorator('lensecolor', {
                            rules: [{ required: true, message: 'Please input your nickname!', whitespace: true }],
                          })(
                            <Input />
                          )}
                        </FormItem>
                        <p className="margin-top"> Example: Blue, orange  </p>
                    </div>
                  </div>
                {/*Size*/}
                  <div className="col-md-12">
                    <div className="col-md-4">
                      <div className="floatright">
                        <label>* Size:</label>
                        <p> (the number or text version if the item's size) </p>
                      </div>
                    </div>
                    <div className="col-md-8">
                        <FormItem>
                          {getFieldDecorator('size', {
                            rules: [{ required: true, message: 'Please input your nickname!', whitespace: true }],
                          })(
                            <Input />
                          )}
                        </FormItem>
                        <p className="margin-top"> Example: Small, Large, X-Large  </p>
                    </div>
                  </div>
                {/*Hand Orientation*/}
                  <div className="col-md-12">
                    <div className="col-md-4">
                      <div className="floatright">
                        <label>* Hand orientation:</label>
                        <p> (is this item for lefties or for fighties) </p>
                      </div>
                    </div>
                    <div className="col-md-8">
                        <FormItem>
                          {getFieldDecorator('orientation', {
                            rules: [{ required: true, message: 'Please input your nickname!', whitespace: true }],
                          })(
                            <Input />
                          )}
                        </FormItem>
                        <p className="margin-top"> Example: Right, Left  </p>
                    </div>
                  </div>
                {/*Tension Support*/}
                  <div className="col-md-12">
                    <div className="col-md-4">
                      <div className="floatright">
                        <label>* Tension Supported:</label>
                        <p> (the tension that can be supported bu this item) </p>
                      </div>
                    </div>
                    <div className="col-md-8">
                        <FormItem>
                          {getFieldDecorator('tension', {
                            rules: [{ required: true, message: 'Please input your nickname!', whitespace: true }],
                          })(
                            <Input />
                          )}
                        </FormItem>
                        <p className="margin-top">  Example: 50 pounds, low, medium, high  </p>
                    </div>
                  </div>
                {/*GTIN Exemption reason*/}
                  <div className="col-md-12">
                    <div className="col-md-4">
                      <div className="floatright">
                        <label>* GTIN exemption reason:</label>
                        <p> (Reason for getting an exemption from having an unique identifier) </p>
                      </div>
                    </div>
                    <div className="col-md-8">
                    <FormItem
                       wrapperCol={{ span: 12 }}
                      >
                        {getFieldDecorator('gtin', {
                          rules: [{ required: true, message: 'Please select ' }],
                        })(
                          <Select
                            placeholder="Please select "
                            onChange={this.handleSelectChange}
                          >
                            <Option value="bundle">bundle</Option>
                            <Option value="part">part</Option>
                            <Option value="preorder">preorder</Option>
                          </Select>
                        )}
                      </FormItem>
                        <p className="margin-top">  Example: 50 pounds, low, medium, high  </p>
                    </div>
                  </div>
                {/*Related Product ID*/}
                  <div className="col-md-12">
                    <div className="col-md-4">
                      <div className="floatright">
                        <label>* Related Product ID:</label>
                        <p> (indicates the types of the related product id for listing) </p>
                      </div>
                    </div>
                    <div className="col-md-8">
                        <FormItem>
                          {getFieldDecorator('product id', {
                            rules: [{ required: true, message: 'Please input your nickname!', whitespace: true }],
                          })(
                            <Input />
                          )}
                        </FormItem>
                        <p className="margin-top">  Example: upc ean gtn  </p>
                    </div>
                  </div>
                {/*Item Display Length*/}
                  <div className="col-md-12">
                    <div className="col-md-4">
                      <div className="floatright">
                        <label>* Item Display Length:</label>
                        <p> (Required field, if this sold by length) </p>
                      </div>
                    </div>
                    <div className="col-md-8">
                      <Form layout="inline" onSubmit={this.handleSubmit}>
                        <FormItem>
                          {getFieldDecorator('length', {
                            initialValue: { number: 0, length: 'inch' },
                            rules: [{ validator: this.checkPrice }],
                          })(<LengthInput />)}
                        </FormItem>
                      </Form>
                        <p className="margin-top" style={{marginTop:"0px"}}>  Example: 50 pounds, low, medium, high  </p>
                    </div>
                  </div>
                {/*Width*/}
                  <div className="col-md-12">
                    <div className="col-md-4">
                      <div className="floatright">
                        <label>* Width:</label>
                        <p> (the width if the item) </p>
                      </div>
                    </div>
                    <div className="col-md-8">
                      <Form layout="inline" onSubmit={this.handleSubmit}>
                        <FormItem>
                          {getFieldDecorator('width', {
                            initialValue: { number: 0, width: 'inch' },
                            rules: [{ validator: this.checkPrice }],
                          })(<WidthInput />)}
                        </FormItem>
                      </Form>
                        <p className="margin-top" style={{marginTop:"0px"}}>  Example: 50 pounds, low, medium, high  </p>
                    </div>
                  </div>
                {/*Item Display Weight*/}
                  <div className="col-md-12">
                    <div className="col-md-4">
                      <div className="floatright">
                        <label>* Item Display Weight:</label>
                        <p> (Required field, if this item sold by weight) </p>
                      </div>
                    </div>
                    <div className="col-md-8">
                      <Form layout="inline" onSubmit={this.handleSubmit}>
                        <FormItem>
                          {getFieldDecorator('weight', {
                            initialValue: { number: 0, weight: 'kg' },
                            rules: [{ validator: this.checkPrice }],
                          })(<WeightInput />)}
                        </FormItem>
                      </Form>
                        <p className="margin-top" style={{marginTop:"0px"}}>  Example: 50 pounds, low, medium, high  </p>
                    </div>
                  </div>
                {/*Display Maximum weight*/}
                  <div className="col-md-12">
                    <div className="col-md-4">
                      <div className="floatright">
                        <label> Display Maximum Weight Recommendation:</label>
                        <p> (is this item buit for leftless or rightless?) </p>
                      </div>
                    </div>
                    <div className="col-md-8">
                        <FormItem>
                          {getFieldDecorator('maximumweight', {
                            rules: [{ required: true, message: 'Please input your nickname!', whitespace: true }],
                          })(
                            <Input />
                          )}
                        </FormItem>
                        <p className="margin-top">  Example: 350 pounds  </p>
                    </div>
                  </div>
                {/*Shaft length*/}
                  <div className="col-md-12">
                    <div className="col-md-4">
                      <div className="floatright">
                        <label>* Shaft Length:</label>
                        <p> (is this item buikt for leftles or rightles?) </p>
                      </div>
                    </div>
                    <div className="col-md-8">
                        <FormItem>
                          {getFieldDecorator('shaft', {
                            rules: [{ required: true, message: 'Please input your nickname!', whitespace: true }],
                          })(
                            <Input />
                          )}
                        </FormItem>
                        <p className="margin-top">  Example: Wilson, speedo, STX  </p>
                    </div>
                  </div>
                {/*Variation Theme */}
                  <div className="col-md-12">
                    <div className="col-md-4">
                      <div className="floatright">
                        <label> Variation Theme:</label>
                        <p> (How your product vary) </p>
                      </div>
                    </div>
                    <div className="col-md-8">
                    <FormItem
                       wrapperCol={{ span: 12 }}
                      >
                        {getFieldDecorator('gtin', {
                          rules: [{ required: true, message: 'Please select ' }],
                        })(
                          <Select
                            placeholder="Select "
                            onChange={this.handleSelectChange}
                          >
                            <Option value="wilson">Wilson</Option>
                            <Option value="speedo">Speedo</Option>
                            <Option value="stx">STX</Option>
                          </Select>
                        )}
                      </FormItem>
                        <p className="margin-top">  Example: Wilson, Speedo, STX  </p>
                    </div>
                  </div>
                {/*UPC or EAN*/}
                  <div className="col-md-12">
                    <div className="col-md-4">
                      <div className="floatright">
                        <label>* UPC or EAN:</label>
                      </div>
                    </div>
                    <div className="col-md-8">
                        <FormItem>
                          {getFieldDecorator('UPC', {
                            rules: [{ required: true, message: 'Please input your nickname!', whitespace: true }],
                          })(
                            <Input />
                          )}
                        </FormItem>
                    </div>
                  </div>
                </div>
              </div>
                <div className="row" style={{paddingTop:"10px", paddingLeft:""}}>
                  <div className="col-md-3 col-xs-4">
                  <div className="row center_global row">
                      <button style={{textAlign: 'center', width:"50%"}} className="btn ecombutton">Cancel</button>
                  </div>
                  </div>
                  <div className="col-md-3 col-xs-4">
                    <div className="row center_global row">
                        <button style={{textAlign: 'center', width:"70%"}} className="btn ecombutton">Save as Draft</button>
                    </div>
                  </div>
                  <div className="col-md-3 col-xs-4">
                    <div className="row center_global row">
                        <button style={{textAlign: 'center', width:"70%"}} className="btn button_custom">Next</button>
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

const WrappedBusinessForm = Form.create()(VitalInfo);
export default WrappedBusinessForm;