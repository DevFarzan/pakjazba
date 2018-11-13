import React, { Component } from 'react';
import {
    Form,
    Input,
    Icon,
    Cascader,
    Spin,
    notification,
    Upload,
    Modal,
    DatePicker,
    TimePicker
} from 'antd';
import { Checkbox } from 'antd';
import { Redirect } from 'react-router';
import AsyncStorage from "@callstack/async-storage/lib/index";
import Burgermenu from '../header/burgermenu';
import Footer from '../footer/footer';
import sha1 from "sha1";
import superagent from "superagent";
import {HttpUtils} from "../../Services/HttpUtils";

const FormItem = Form.Item;

class EventPortal extends Component{

  render(){

    return(
        <div>
          <Burgermenu/>
          <div style={{backgroundColor:"#032a30",width:"100%",height:"67px",marginTop:"-20px"}}></div>
            <div className="row jobdetail-page" style={{backgroundColor:"#37a99b"}}>
                <div className="col-md-12 col-sm-12 col-xs-12" style={{textAlign:"center"}}>
                    <div className="">
                        <h1 style={{fontFamily: 'Work Sans, sans-serif', fontWeight:"bold"}}>SUBMIT YOUR EVENT</h1>
                    </div>
                </div>
            </div>
            <div className="panel-body">
              <div className="panel panel-default">
                  <div className="bold_c_text" style={{backgroundColor:'#37a99b',color:'white',padding:'8px',fontFamily:'Crimson Text, serif !important'}}>
                    <Icon type="info-circle"/>
                    <span className="margin_font_location">Event Detail</span>
                  </div>

                  <div className="container" style={{width:'80%'}}>
                    <section>
                        <div className="row">
                          <div className="col-md-12">
                              <div className="col-md-6">
                                  <div className="form-group">
                                      <label htmlFor="sel1">Your Email</label>
                                        <input type="text" className="form-control"/>
                                  </div>
                              </div>
                              <div className="col-md-6" style={{textAlign: 'left', display:'grid'}}>
                                      <label htmlFor="Price Mode"> Category </label>
                                        <Cascader/>
                              </div>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-md-12">
                            <div className="col-md-6">
                              <div className="row" style={{padding:'0px'}}>
                                <div className="col-md-7" style={{display:'grid'}}>
                                  <label> Location (City) </label>
                                    <Cascader />
                                </div>
                                <div className="col-md-5">
                                  <input type="text" className="form-control" style={{marginTop:'25px'}}/>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="row" style={{padding:'0px'}}>
                                <div className="col-md-6"  style={{display:'grid'}}>
                                  <label>Start Date</label>
                                  <DatePicker/>
                                </div>

                                <div className="col-md-6"  style={{display:'grid'}}>
                                  <label>Start Date</label>
                                  <DatePicker/>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-md-12">
                              <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="sel1">Description</label>
                                        <textarea type="text" id="message" name="message" className="form-background1" style={{height:"235px"}}></textarea>
                                </div>
                              </div>
                              <div className="col-md-6">
                                  <div className="form-group">
                                      <label htmlFor="usr">Experience</label>
                                          <input type="text" className="form-control"/>
                                  </div>
                              </div>
                          </div>
                        </div>
                    </section>
                  </div>
              </div>
            </div>

            <div className="panel-body">
              <div className="panel panel-default">
                  <div className="bold_c_text" style={{backgroundColor:'#37a99b',color:'white',padding:'8px',fontFamily:'Crimson Text, serif !important'}}>
                    <Icon type="info-circle"/>
                    <span className="margin_font_location">Upload</span>
                  </div>

                  <div className="container" style={{width:'80%'}}>
                    <section>
                        <div className="row">
                          <div className="col-md-12">
                              <div className="col-md-6">
                                  <div className="form-group">
                                      <label htmlFor="sel1">Your Email</label>
                                        <input type="text" className="form-control"/>
                                  </div>
                              </div>
                              <div className="col-md-6" style={{textAlign: 'left', display:'grid'}}>
                                      <label htmlFor="Price Mode"> Category </label>
                                        <Cascader/>
                              </div>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-md-12">
                            <div className="col-md-6">
                              <div className="row" style={{padding:'0px'}}>
                                <div className="col-md-7" style={{display:'grid'}}>
                                  <label> Location (City) </label>
                                    <Cascader />
                                </div>
                                <div className="col-md-5">
                                  <input type="text" className="form-control" style={{marginTop:'25px'}}/>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="row" style={{padding:'0px'}}>
                                <div className="col-md-6"  style={{display:'grid'}}>
                                  <label>Start Date</label>
                                  <DatePicker/>
                                </div>

                                <div className="col-md-6"  style={{display:'grid'}}>
                                  <label>Start Date</label>
                                  <DatePicker/>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-md-12">
                              <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="sel1">Description</label>
                                        <textarea type="text" id="message" name="message" className="form-background1" style={{height:"235px"}}></textarea>
                                </div>
                              </div>
                              <div className="col-md-6">
                                  <div className="form-group">
                                      <label htmlFor="usr">Experience</label>
                                          <input type="text" className="form-control"/>
                                  </div>
                              </div>
                          </div>
                        </div>
                    </section>
                  </div>
              </div>
            </div>

            <div className="panel-body">
              <div className="panel panel-default">
                  <div className="bold_c_text" style={{backgroundColor:'#37a99b',color:'white',padding:'8px',fontFamily:'Crimson Text, serif !important'}}>
                    <Icon type="info-circle"/>
                    <span className="margin_font_location">Ticket Detail</span>
                  </div>
                  <div className="container" style={{width:'80%'}}>
                    <section>
                      <div className="row">
                        <div className="col-md-12">
                            <div className="col-md-3">
                              <label> Available Tickets </label>
                                <div className="row">
                                  <div className="col-md-6">
                                    <input type="text" className="form-control" style={{display:'grid'}}/>
                                  </div>
                                  <div className="col-md-6">
                                    <input type="text" className="form-control" style={{display:'grid'}}/>
                                  </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                              <label> Price </label>
                              <div className="row">
                                <div className="col-md-6">
                                  <input type="text" className="form-control" style={{display:'grid'}}/>
                                </div>
                                <div className="col-md-6">
                                    <label className="ant-checkbox ant-checkbox-wrapper">
                                      <span className="ant-checkbox">
                                        <input type="checkbox" class="ant-checkbox-input"/>
                                          <span className="ant-checkbox-inner" style={{top:"4px", width:"30px", height:"30px"}}>
                                          </span>
                                      </span>
                                      <span>Free</span>
                                    </label>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6">
                            <label> Mode Of Payment </label>
                              <div className="row">
                                <div className="col-md-3">
                                    <label className="ant-checkbox ant-checkbox-wrapper">
                                      <span className="ant-checkbox">
                                        <input type="checkbox" class="ant-checkbox-input"/>
                                          <span className="ant-checkbox-inner" style={{top:"4px", width:"30px", height:"30px"}}>
                                          </span>
                                      </span>
                                      <span>On Event</span>
                                    </label>
                                </div>

                                <div className="col-md-3">
                                    <label className="ant-checkbox ant-checkbox-wrapper">
                                      <span className="ant-checkbox">
                                        <input type="checkbox" class="ant-checkbox-input"/>
                                          <span className="ant-checkbox-inner" style={{top:"4px", width:"30px", height:"30px"}}>
                                          </span>
                                      </span>
                                      <span>Cash</span>
                                    </label>
                                </div>

                                <div className="col-md-3">
                                    <label className="ant-checkbox ant-checkbox-wrapper">
                                      <span className="ant-checkbox">
                                        <input type="checkbox" class="ant-checkbox-input"/>
                                          <span className="ant-checkbox-inner" style={{top:"4px", width:"30px", height:"30px"}}>
                                          </span>
                                      </span>
                                      <span>PayPal</span>
                                    </label>
                                </div>

                                <div className="col-md-3">
                                    <label className="ant-checkbox ant-checkbox-wrapper">
                                      <span className="ant-checkbox">
                                        <input type="checkbox" class="ant-checkbox-input"/>
                                          <span className="ant-checkbox-inner" style={{top:"4px", width:"30px", height:"30px"}}>
                                          </span>
                                      </span>
                                      <span>Credit Card</span>
                                    </label>
                                </div>
                              </div>
                            </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-6" style={{marginLeft:"15px"}}>
                        <label>Ticket Delivery</label>

                          <div className="row">
                            <div className="col-md-4">
                              <label className="ant-checkbox ant-checkbox-wrapper">
                                <span className="ant-checkbox" >
                                  <input type="checkbox" class="ant-checkbox-input"/>
                                    <span className="ant-checkbox-inner" style={{top:"0px", width:"30px", height:"30px"}}>
                                    </span>
                                </span>
                                <span>At Venue</span>
                              </label>
                            </div>

                            <div className="col-md-4">
                              <label className="ant-checkbox ant-checkbox-wrapper">
                                <span className="ant-checkbox">
                                  <input type="checkbox" class="ant-checkbox-input"/>
                                    <span className="ant-checkbox-inner" style={{top:"0px", width:"30px", height:"30px"}}>
                                    </span>
                                </span>
                                <span>Pickup</span>
                              </label>
                            </div>

                            <div className="col-md-4">
                              <label className="ant-checkbox ant-checkbox-wrapper">
                                <span className="ant-checkbox">
                                  <input type="checkbox" class="ant-checkbox-input"/>
                                    <span className="ant-checkbox-inner" style={{top:"0px", width:"30px", height:"30px"}}>
                                    </span>
                                </span>
                                <span>Free Shipping</span>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>


                    </section>
                  </div>
              </div>
            </div>

            <div className="panel-body">
              <div className="panel panel-default">
                  <div className="bold_c_text" style={{backgroundColor:'#37a99b',color:'white',padding:'8px',fontFamily:'Crimson Text, serif !important'}}>
                    <Icon type="info-circle"/>
                    <span className="margin_font_location">Organizer Detail</span>
                  </div>
                  <div className="container" style={{width:'80%'}}>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="form-group">
                                <label htmlFor="sel1">Name</label>
                                        <input type="text" className="form-control"/>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="form-group">
                                <label htmlFor="sel1">Email</label>
                                        <input type="text" className="form-control"/>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="form-group">
                                <label htmlFor="sel1">Email</label>
                                        <input type="text" className="form-control"/>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="sel1">Phone</label>
                                  <input type="text" className="form-control"/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="usr">Social Media Links</label>
                                <FormItem>
                                    <div className='row' style={{paddingTop: '0px', paddingBottom: '0px'}}>
                                        <button
                                            type="button"
                                            className="btn btn-fb"
                                            style={{width: '10%', display: 'inline-block', marginBottom: '4px', borderRadius: '0px', backgroundColor: '#3B5999'}}
                                        >
                                            <i className="fa fa-facebook" style={{color: 'white'}}></i>
                                        </button>
                                        <input type="text"
                                               id='faceBook'
                                               className="form-control"
                                               style={{width: '90%', display: 'inline-block', borderRadius: '0px'}}
                                               />
                                    </div>
                                    <div className='row' style={{paddingTop: '0px', paddingBottom: '0px'}}>
                                        <button
                                            type="button"
                                            className="btn btn-fb"
                                            style={{width: '10%', display: 'inline-block', marginBottom: '4px', borderRadius: '0px', backgroundColor: '#0077B5'}}
                                        >
                                            <i className="fa fa-linkedin" style={{color: 'white'}}></i>
                                        </button>
                                        <input
                                            type="text"
                                            id='LinkdIn'
                                            className="form-control"
                                            style={{width: '90%', display: 'inline-block', borderRadius: '0px'}}
                                            />
                                    </div>
                                    <div className='row' style={{paddingTop: '0px', paddingBottom: '0px'}}>
                                        <button
                                            type="button"
                                            className="btn btn-fb"
                                            style={{width: '10%', display: 'inline-block', marginBottom: '4px', borderRadius: '0px', backgroundColor: '#DC4E41'}}
                                        >
                                            <i className="fa fa-google-plus" style={{color: 'white'}}></i>
                                        </button>
                                        <input
                                            type="text"
                                            id='Google'

                                            className="form-control"
                                            style={{width: '90%', display: 'inline-block', borderRadius: '0px'}}/>
                                    </div>
                                </FormItem>
                            </div>
                        </div>
                    </div>
                  </div>
              </div>
            </div>

            <div className="row center_global row">

                    <button style={{textAlign: 'center', width:"45%"}} className="btn button_custom">Submit Event</button>

            </div>
          <Footer />
        </div>
    )
  }
}
export default EventPortal;
