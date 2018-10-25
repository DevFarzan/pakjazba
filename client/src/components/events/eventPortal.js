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
         <h4> Events Listing</h4>
              <section style={{backgroundColor: '#F1F2F2'}}>
              <div className="col-md-12">
                  <div className="row">
                      <div className="col-md-6">
                          <div className="form-group">
                              <label htmlFor="sel1">Your Email</label>
                                <input type="text" className="form-control"/>
                          </div>
                          <div className="col-md-6" style={{'textAlign': 'left'}}>
                                  <label htmlFor="Price Mode"> Category </label>
                                    <Cascader/>
                          </div>
                      </div>
                  </div>
                </div>  
              </section>

        </div>
    )
  }
}
export default EventPortal;
