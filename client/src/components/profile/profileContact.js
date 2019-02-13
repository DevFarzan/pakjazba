import React, { Component } from 'react';

class ProfileContact extends Component{
  render(){
    return(
      <div className="Hello">
        <h2> Contact </h2>
        <div className="row" style={{padding:"0"}}>
          <div className="col-md-4">
            Email:
          </div>
          <div className="col-md-8">
            farzanhanif@123.com
          </div>
          <div className="col-md-4">
            Mobile:
          </div>
          <div className="col-md-8">
            0334-3769032
          </div>
          <div className="col-md-4">
            Language:
          </div>
          <div className="col-md-8">
            English, Urdu, Pashtu, Arabic
          </div>
        </div>
      </div>
    )
  }
}

export default ProfileContact;
