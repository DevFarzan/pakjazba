import React, { Component } from 'react';
import { Input } from 'antd';
import './descriptionforms.css'

const { TextArea } = Input;

class DescriptionForm extends Component{
  render(){
    return(
      <div className="container" style={{width:"100%"}}>
        <div className="row">
          <div className="col-md-12">
            <div className="col-md-3">
              <div className="vitalbox">
                <h4> Listing Assitant </h4>
                <p> Supply enough information tomake the buying decision easy. Please ensure that all products and content comply with our Selling and Policies restrictions including the Restructed products policy </p>

                <p style={{textAlign:"center"}}> *Fields are required </p>
              </div>
            </div>
            <div className="col-md-9">
              <div className="vitalbox">
                <div className="row">
                  <div className="col-md-5">
                    <div  className="descriptionright">
                      <h4> Key Product Features: </h4>
                      <p> (Max.100 charchters per line. use these to highlight soem of the product's most important qualities. each line be displayed as a seperate bullet point above the product description.) </p>
                    </div>
                  </div>
                  <div className="col-md-7">
                    <Input />
                    <Input />
                    <Input />
                    <Input />
                    <p> Example: 95 square inches midplus head </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-5">
                    <div  className="descriptionright">
                      <h4> Key Product Features: </h4>
                      <p> (Max.200 charchters. Use this to describe the product in detail. Please enter only item condition, and other seller specific info.  ) </p>
                    </div>
                  </div>
                  <div className="col-md-7">
                    <TextArea rows={6} />
                    <p> Example: Featuring the sweet spot suspension system, Price's Triple Threat Bandit tennis racquet offers......... </p>
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

export default DescriptionForm;
