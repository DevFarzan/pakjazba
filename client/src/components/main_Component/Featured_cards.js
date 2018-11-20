import React, { Component } from 'react';
import './FeaturedCol4.css';

class FeaturedCards extends Component{
  render(){
    return(
      <div className="col-md-12">
        <div className="row" style={{padding:"0px"}}>
          <div className="col-md-4">
            <img src="../images/shutterstock_310512815.jpg" style={{width:"100%", height:"70px"}}/>
          </div>
          <div className="col-md-8" style={{marginLeft:"-15px"}}>
          <h4 className="font-style"><b>Event Name</b></h4>
          <br/>
          <div className="eventfeature-margin">
            <div className="row">
              <div className="col-md-6">
                <i className="glyphicon glyphicon-map-marker" style={{color:"#37a99b"}}/>
                <p className="textforjob font-style">Dallas</p>
              </div>
              <div className="col-md-6">
                <div className="eglyphicom" style={{marginLeft:"-5px"}}>
                    <i className="glyphicon glyphicon-calendar" style={{color:"#37a99b"}}/>
                    <p className="textforjob font-style">25.2.2018</p>
                </div>
              </div>
            </div>
          </div>
          <p className="font-style" style={{marginTop:"-15px"}}>Lorem Ipsum is simply dummy text of the.</p>
          </div>
        </div>
      </div>
    )
  }
}

export default FeaturedCards;
