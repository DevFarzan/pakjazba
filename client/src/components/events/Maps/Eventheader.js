import React, { Component } from 'react';
import './eventheader.css'


class EventHeader extends Component{
  render(){
    return(
      <div className="Backgroundcolor">
        <div className="row">
          <div className="col-md-2 hidden-xs">
            <img src="../images/business/shutterstock_1270450375.jpg"/>
          </div>
          <div className="col-md-6">
            <div className="row">
              <div className="col-md-9">
               <h3> Luke Combs: Beer Never Broke My Heart Tour </h3>
              </div>
              <div className="col-md-3">
                <p className="buttoninfo"> More Info </p>
              </div>
            </div>
            <h4> Thu . Jan . 7:00 PM </h4>
            <h4> Legacy Arena at The BJCC, Birmingham, AL</h4>

          </div>
          <div className="col-md-1"></div>
          <div className="col-md-3">
            <div className="ticketcautions">
              <p> Please note Ages 2+ must have a ticket. No professional cameras/No recording. Doors open at 6:00pm. <a href="">more</a></p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default EventHeader;
