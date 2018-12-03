import React, { Component } from 'react';
import { Form, DatePicker, TimePicker, Button } from 'antd';
import { Input } from 'antd';
import moment from 'moment';


const { MonthPicker, RangePicker } = DatePicker;
const monthFormat = 'YYYY/MM';

class CardDetail extends Component{

  render(){
    return(
      <div className="panel-body">
          <div className="panel panel-default">
              <div className="bold_c_text" style={{backgroundColor:'#37a99b',color:'white',padding:'8px',fontFamily:'Crimson Text, serif !important'}}>
                  <icon type="info-circle"/>
                  <span className="margin_font_location">Credit Card Details</span>
              </div>
              <div className="container" style={{width:'90%'}}>
                  <section>
                        <div className="row">
                          <div className="col-md-12">
                            <div className="col-md-7">
                            </div>
                            <div className="col-md-5">
                              <span>Pay Using Credit Card.</span>
                              <span style={{marginLeft:"10px"}}><img src='../images/master visa.png' style={{height:"35px"}}/></span>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-12">
                            <div className="col-md-6">
                              <label style={{fontSize:"initial"}}> Credit Card Number* </label>
                                <Input placeholder="" />
                            </div>
                            <div className="col-md-6">
                              <label> Name On Card* </label>
                                <Input placeholder="" />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-12">
                            <div className="col-md-6">
                              <label style={{display:"block"}}> Expiry* </label>
                                <MonthPicker defaultValue={moment('2015/01', monthFormat)} format={monthFormat} />
                            </div>
                            <div className="col-md-6">
                              <label style={{display:"block"}}> CVC* </label>
                                <Input placeholder="" style={{width:"35%"}}/>
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
export default CardDetail;
