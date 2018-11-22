import React, { Component } from 'react';
import { Input, Select } from 'antd';
import { Cascader } from 'antd';
import { Modal, Button } from 'antd';
import OrderCard from '../event_listing/OrderSummarycard'

//*function for input fields*//
const Option = Select.Option;

function handleChange(value) {
  console.log(`selected ${value}`);
}

function handleBlur() {
  console.log('blur');
}

function handleFocus() {
  console.log('focus');
}
//*function for input fields ends*//

//*function for dropdown fields starts*//
const options = [{
  value: 'zhejiang',
  label: 'Zhejiang',
}, {
  value: 'jiangsu',
  label: 'Jiangsu',
}];

const options2 = [{
  value: 'Pakistan',
  label: 'Pakistan',
}, {
  value: 'USA',
  label: 'USA',
}];

const options3 = [{
  value: 'Karachi',
  label: 'Karachi',
}, {
  value: 'Lahore',
  label: 'Lahore',
}];


function onChange(value) {
  console.log(value);
}
//*functions for dropdown fields ends*//

class ContactDetail extends Component{

  state = { visible: false }

  showModal = () => {
    this.setState({
      visible: true,
    });
  }

  handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }

  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }


  render(){
    return(
      <div className="panel-body">
          <div className="panel panel-default">
              <div className="bold_c_text" style={{backgroundColor:'#37a99b',color:'white',padding:'8px',fontFamily:'Crimson Text, serif !important'}}>
                  <icon type="info-circle"/>
                  <span className="margin_font_location">Share Your Contact Details</span>
              </div>
              <div className="container" style={{width:'90%'}}>
                  <section>
                      <div className="row visible-xs">
                        <div className="col-md-12" style={{textAlign:"right"}}>
                          <div>
                           <Button type="primary" onClick={this.showModal} style={{backgroundColor: "#008080",color: "white", textAlign:"right"}}>
                             Open Modal
                           </Button>
                           <Modal
                             title="Basic Modal"
                             visible={this.state.visible}
                             onOk={this.handleOk}
                             onCancel={this.handleCancel}
                           >
                             <OrderCard/>
                           </Modal>
                         </div>
                        </div>
                      </div>
                        <div className="row">
                          <div className="col-md-12">
                            <div className="col-md-6">
                              <label> First Name</label>
                                <Input placeholder="" />
                            </div>

                            <div className="col-md-6">
                              <label> Last Name</label>
                                <Input placeholder="" />
                            </div>
                          <br/>
                          <br/>
                          </div>

                          <div className="col-md-12" style={{marginTop:"20px"}}>
                            <div className="col-md-6">
                              <label> Email </label>
                                <Input placeholder="" />
                            </div>

                            <div className="col-md-6">
                              <label> Confirm Email </label>
                                <Input placeholder="" />
                            </div>
                          <br/>
                          </div>

                          <div className="col-md-12" style={{marginTop:"20px"}}>
                            <div className="col-md-6">
                              <label> Home Phone </label>
                                <Input placeholder="" />
                            </div>

                            <div className="col-md-6">
                              <label> Mobile Phone </label>
                                <Input placeholder="" />
                            </div>
                          <br/>
                          </div>

                          <div className="col-md-12" style={{marginTop:"20px"}}>
                            <div className="col-md-6">
                              <label> Address </label>
                                <Input placeholder="" />
                            </div>

                            <div className="col-md-6">
                              <label style={{display:"block"}}> Country </label>
                              <Cascader options={options2} onChange={onChange} placeholder="Please select" style={{width:"100%"}}/>
                            </div>
                          </div>

                          <div className="col-md-12" style={{marginTop:"20px"}}>
                            <div className="col-md-6">
                              <label style={{display:"block"}}> Sate </label>
                              <Cascader options={options3} onChange={onChange} placeholder="Please select" style={{width:"100%"}}/>

                            </div>

                            <div className="col-md-6">
                              <div className="col-md-7">
                                  <div>
                                    <label style={{display:"block", marginLeft:"-14px"}}> City </label>
                                    <Cascader options={options} onChange={onChange} placeholder="Please select" style={{marginLeft:"-14px"}} />


                                  </div>
                              </div>

                              <div className="col-md-5">
                                <label style={{display:"block"}}> Zip Code </label>
                                  <Input placeholder="" style={{width:"120px"}}/>
                              </div>

                            </div>
                          </div>
                        </div>

                  </section>
              </div>

          </div>
      </div>
    )
  }
}
export default ContactDetail;
