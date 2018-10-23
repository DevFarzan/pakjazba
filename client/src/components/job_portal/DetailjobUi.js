import React, { Component } from 'react';
import './DetailjobUi.css';

class JobDetailpage extends Component{
  render(){
    return(
    <div className="container" style={{width:"90%"}}>
      <div className="row">
          <div className="col-md-12" style={{paddingTop:"4px", paddingBottom:"10px"}}>
              <div className="col-md-4 col-sm-12 col-xs-12 des-space">
                  <img alt='' src="./images/data/589b2d33280000c63a997990.jpeg" width="100%" />
              </div>
              <div className="col-md-8 col-sm-12 col-xs-12 des-space">
                  <h3 style={{fontWeight:"bold",fontFamily: 'Work Sans, sans-serif'}}>IT Person Needed</h3>
                  <span >
                  <p className="job-time" style={{fontFamily: 'Work Sans, sans-serif'}}>Full Time</p>
                  </span>

                  <br/>
                  <p style={{fontFamily: 'Work Sans, sans-serif'}}> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys
                  standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has
                  survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
                  including versions of Lorem Ipsum.</p>

              </div>
          </div>
      </div>
    </div>
    )
  }
}

export default JobDetailpage;
