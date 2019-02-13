import React, { Component } from 'react';
import './profileDetail.css';

class ProfileDetail extends Component{
  render(){
    return(
      <div className="row">
        <div className="col-md-4">
          <img src='./images/10058826.jpg' style={{width:"100%"}}/>
        </div>
        <div className="col-md-8">
          <h2> Hi, I am Farzan Hanif </h2>
          <hr className="horizontaildetail"/>
          <div className="row" style={{padding:"0"}}>
            <div className="col-md-6">
              <p className="detailpara"> Join Date 19-2-2018 </p>
            </div>
            <div className="col-md-6">
              <p className="detailpara"><span className="glyphicon glyphicon-map-marker" style={{color: "#008080",margin:"2px"}}></span><span style={{color:"black"}}>Dallas, Texas</span></p>

            </div>
          </div>
          <p className="detailpara"> Short info about the profile owner 50 words at least to define about him/her. Short info about the profile owner 50 words at least to define about him/her. </p>
          <div class="row">
            <a href="#" class="fa fa-facebook"></a>
            <a href="#" class="fa fa-twitter"></a>
            <a href="#" class="fa fa-linkedin"></a>
          </div>
        </div>
      </div>
    )
  }
}

export default ProfileDetail;
