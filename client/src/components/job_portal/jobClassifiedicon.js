import React, { Component } from 'react';
import './jobClassifiedicon.css';

class ClassifiedIcons extends Component{
  render(){
    return(
    <div>
      <h2 style={{textAlign:"center", fontWeight:"bold", marginTop:"20px"}}> Browse Job </h2>
      <div className="row">
        <div className="col-md-2 col-sm-3">
          <div className="wrimagecard wrimagecard-topimage">
            <a href="#">
              <div className="wrimagecard-topimage_header">
                <center>
                  <img src="../images/job-icons/it.png" style={{width: "100%"}}/>
                </center>
              </div>
            </a>
          </div>
        </div>

          <div className="col-md-2 col-sm-3">
            <div className="wrimagecard wrimagecard-topimage">
              <a href="#">
                <div className="wrimagecard-topimage_header">
                  <center>
                    <img src="../images/job-icons/banking.png" style={{width: "100%"}}/>
                  </center>
                </div>
              </a>
            </div>
          </div>

          <div className="col-md-2 col-sm-3">
            <div className="wrimagecard wrimagecard-topimage">
              <a href="#">
                <div className="wrimagecard-topimage_header">
                  <center>
                    <img src="../images/job-icons/account.png"style={{width: "100%"}}/>
                  </center>
                </div>
              </a>
            </div>
          </div>

          <div className="col-md-2 col-sm-3">
            <div className="wrimagecard wrimagecard-topimage">
              <a href="#">
                <div className="wrimagecard-topimage_header">
                  <center>
                    <img src="../images/job-icons/management.png"style={{width: "100%"}}/>
                  </center>
                </div>
              </a>
            </div>
          </div>

          <div className="col-md-2 col-sm-3">
            <div className="wrimagecard wrimagecard-topimage">
              <a href="#">
                <div className="wrimagecard-topimage_header">
                  <center>
                    <img src="../images/job-icons/creative-digital.png"style={{width: "100%"}}/>
                  </center>
                </div>
              </a>
            </div>
          </div>

          <div className="col-md-2 col-sm-3">
            <div className="wrimagecard wrimagecard-topimage">
              <a href="#">
                <div className="wrimagecard-topimage_header">
                  <center>
                    <img src="../images/job-icons/sale-&-marketing.png"style={{width: "100%"}}/>
                  </center>
                </div>
              </a>
            </div>
          </div>
      </div>
    </div>
    )
  }
}

export default ClassifiedIcons;
