import React, { Component } from 'react';
import './LatestStories.css';

class LatestNews extends Component{
  render(){
    return(
      <div className="container" style={{width:"100%"}}>
        <h4><strong> LATEST NEWS </strong></h4>
          <hr style={{marginTop:"-10px", borderTop:"2px solid #37a99b"}}/>
          <div className="row">
            <div className="col-md-12 col-sm-8">
              <img src='/images/ceo-google.jpg' style={{ height:"300px", width:"100%"}}/>
            </div>
            <div className="col-md-12 col-sm-4">
              <p> Google ceo give reason to trump </p>
            </div>
          </div>

          <div className="newsBoxes">
            <div className="row">
              <div className="col-md-6 col-sm-5" style={{paddingRight:"0px"}}>
                <img src='images/images (3).jpg'/>
              </div>
              <div className="col-md-6 col-sm-7">
                <p> Supreme court verdict </p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 col-sm-5" style={{paddingRight:"0px"}}>
                <img src='images/images (2).jpg'/>
              </div>
              <div className="col-md-6 col-sm-7">
                <p> we will not let pak down </p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 col-sm-5" style={{paddingRight:"0px"}}>
                <img src='images/images (3).jpg'/>
              </div>
              <div className="col-md-6 col-sm-7">
                <p> Imran Khan takes oth and become new pm  </p>
              </div>
            </div>
            <h4> <strong> LATEST SPORTS </strong></h4>
            <hr/>
            <div className="row">
              <div className="col-md-6 col-sm-5" style={{paddingRight:"0px"}}>
                <img src='images/images (3).jpg'/>
              </div>
              <div className="col-md-6 col-sm-7">
                <p> Supreme court verdict </p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 col-sm-5" style={{paddingRight:"0px"}}>
                <img src='images/images (3).jpg'/>
              </div>
              <div className="col-md-6 col-sm-7">
                <p> Supreme court verdict </p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 col-sm-5" style={{paddingRight:"0px"}}>
                <img src='images/images (3).jpg'/>
              </div>
              <div className="col-md-6 col-sm-7">
                <p> Supreme court verdict </p>
              </div>
            </div>
          </div>


      </div>
    )
  }
}

export default LatestNews;
