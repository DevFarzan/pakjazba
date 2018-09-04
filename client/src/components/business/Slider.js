import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Row, Col } from 'antd';
import { Button } from 'antd';


class Slider extends Component{
 render(){
   return (
     <div>
     
            <div style={{backgroundImage: 'url(https://images.alphacoders.com/633/633643.jpg)',"height": "407px","margin-top": "-19px"}}>
              <p className="paragragh-text">Lorem Forem</p>
              <h1 className="text-h1">Lorem Forem</h1>
              <form className="navbar-form navbar-left">
                <div className="form-group2 col-md-8 col-sm-8 col-xs-8">
                  <input type="text" className="form-control" placeholder="Search"/>
                </div>
                <button type="submit" className="btn btn-default col-md-4 col-sm-4 col-xs-4">Submit</button>
              </form>
            </div>
    </div>
  );
 }
}

export default Slider;
