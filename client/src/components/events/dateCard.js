import React, { Component } from 'react';
import './dateCard.css'

class DateCard extends Component{
  render(){
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
                                  <p className="font-style"><b>Feburary25, 2025</b></p>
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
                                  <p className="font-style"><b>Feburary25, 2025</b></p>
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
                        <span>
                            <p style={{fontSize:"15px", marginLeft:"5px"}}>Free $</p>
                        </span>
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
