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
import { Redirect } from 'react-router';
import AsyncStorage from "@callstack/async-storage/lib/index";
import Burgermenu from '../header/burgermenu';
import Footer from '../footer/footer';
import sha1 from "sha1";
import superagent from "superagent";
import {HttpUtils} from "../../Services/HttpUtils";


class EventPortal extends Component{
  render(){
    return(
        <div>
          <Burgermenu/>
          <div style={{backgroundColor:"#0000006b",width:"100%",height:"67px",marginTop:"-20px"}}></div>
          <div className="row jobdetail-page">
              <div className="col-md-12 col-sm-12 col-xs-12" style={{textAlign:"center"}}>
                  <div className="">
                      <h1 style={{fontFamily: 'Work Sans, sans-serif', fontWeight:"bold"}}>SUBMIT YOUR EVENT</h1>
                  </div>
              </div>
          </div>
            <div className="container" style={{width:'80%'}}>
              <section style={{backgroundColor: '#F1F2F2'}}>
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
                  </div>
              </section>
          </div>

        </div>
    )
  }
}
export default EventPortal;
