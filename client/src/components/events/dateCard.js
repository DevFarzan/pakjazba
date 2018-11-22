import React, { Component } from 'react';
import './dateCard.css'
import { Checkbox, InputNumber } from 'antd';
import moment from 'moment';

function onChange(e) {
  console.log(`checked = ${e.target.checked}`);
}

function onChange(value) {
  console.log('changed', value);
}

class DateCard extends Component{
  render(){
    const { data } = this.props;
    let from = moment(data.dateRange && data.dateRange[0].from, 'YYYY-MM-DD').format("LL");
    let to = moment(data.dateRange && data.dateRange[0].to, 'YYYY-MM-DD').format("LL");
    return(
      <div>
      <div className="row" style={{padding:"0px"}}>
          <div className="col-lg-12 col-md-12 col-sm-12 " >
              {/*Start 3rd tile */}
              <div className="ecardoutset">
                  <div className="card-body space" style={{padding: "17px"}}>
                      <div className="row">
                          <div className="col-md-12">
                              <h3><b>Date</b></h3>
                              <hr className="ehr"/>
                          </div>
                      </div>
                    <section className="" style={{marginLeft:"-20px", marginTop:"-30px"}}>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="col-md-3 col-sm-4 col-xs-12">
                                    <h4><b>START:</b></h4>
                                </div>
                                <div className="col-md-5 col-sm-4 col-xs-12">
                                  <span>
                                  <p className="font-style"><b>{from}</b></p>
                                  </span>
                                </div>
                                <div className="col-md-4 col-sm-4 col-xs-12">
                                  <h4><b>3:00 pm</b></h4>
                                </div>
                            </div>
                        </div>
                        <div className="row" style={{marginTop:"-40px"}}>
                            <div className="col-md-12">
                                <div className="col-md-3 col-sm-4 col-xs-12">
                                    <h4><b>END:</b></h4>
                                </div>
                                <div className="col-md-5 col-sm-4 col-xs-12">
                                  <span>
                                  <p className="font-style"><b>{to}</b></p>
                                  </span>
                                </div>
                                <div className="col-md-4 col-sm-4 col-xs-12 ">
                                  <h4><b>5:00 pm</b></h4>
                                </div>
                            </div>
                        </div>
                    </section>

                      <div className="row" style={{marginTop:"-30px"}}>
                          <div className="col-md-12">
                              <h3><b>Location</b></h3>
                              <hr className="ehr"/>
                          </div>
                      </div>
                    <section className="" style={{marginTop:"-30px"}}>
                      <div className="row" style={{marginTop:"-40px"}}>
                          <div className="col-md-12">
                              <span>
                                  <p className="font-style" style={{fontSize:"15px", marginLeft:"5px"}}>Sector 17, Abdullah Harron Road, Karachi, Pakistan, Jammu Kashmir, Ferozabad</p>
                              </span>
                          </div>
                      </div>
                    </section>
                    <div className="row" style={{marginTop:"-30px"}}>
                        <div className="col-md-12">
                            <h3><b>Charges</b></h3>
                            <hr className="ehr"/>
                        </div>

                      <div className="row">
                        <div className="col-md-6 col-xs-6">
                           <Checkbox onChange={onChange}></Checkbox>
                           <span>Early Bird</span>
                        </div>
                        <div className="col-md-6 col-xs-6">
                              <InputNumber min={1} max={10} defaultValue={2} onChange={onChange} style={{width:"50px", height:"23px"}} />
                              <span style={{marginLeft:'7px'}}> $200 </span>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-6 col-xs-6">
                           <Checkbox onChange={onChange}></Checkbox>
                            <span>Normal Ticket</span>
                        </div>
                        <div className="col-md-6 col-xs-6">
                              <InputNumber min={1} max={10} defaultValue={0} onChange={onChange} style={{width:"50px", height:"23px"}} />
                              <span style={{marginLeft:'7px'}}> $0 </span>
                        </div>

                      </div>

                      <div className="row">
                        <div className="col-md-6 col-xs-6">
                        </div>
                        <div className="col-md-6 col-xs-6" style={{borderBottom:"2px solid black", width:"110px"}}>
                          {/*<hr className="ehr" style={{width:"100px", marginTop:"0px"}}/>*/}
                        </div>
                      </div>

                      <div className="row" style={{marginTop:"-40px"}}>
                        <div className="col-md-6 col-xs-6">

                            <h4>Total Amount </h4>

                        </div>
                        <div className="col-md-6 col-xs-6" style={{textAlign:"center"}}>
                              <span> $200 </span>
                        </div>
                      </div>

                      <div className="text-center text-md-left">
                          <a className="btn button_custom" style={{width: "45%"}}>Purchase Yicket</a>
                      </div>
                    </div>

                  </div>
              </div>
            </div>
            </div>
      </div>

    )
  }
}
export default DateCard;
