import React, { Component } from 'react';
import { Checkbox } from 'antd';
import { Input } from 'antd';
import './keywordforms.css'

function onChange(e) {
  console.log(`checked = ${e.target.checked}`);
}

class KeywordsForm extends Component{
  render(){
    return(
      <div className="container" style={{width:"100%"}}>
        <div className="row">
          <div className="col-md-12">
            <div className="col-md-3">
              <div className="vitalbox">
                <h4> Listing Assitant </h4>
                <p> Supply enough information tomake the 
                  buying decision easy. Please ensure that 
                  all products and content comply with our 
                  Selling and Policies restrictions including 
                  the Restructed products policy </p>

                <p style={{textAlign:"center"}}> *Fields are required </p>
              </div>
            </div>
            <div className="col-md-9">
              <div className="vitalbox">
                <div className="row">
                  <div className="col-md-5">
                    <div  className="descriptionright">
                      <h4> Intended Use: </h4>
                      <p> (For what activities, events, loaction, or condition is this product intended to use?) </p>
                    </div>
                  </div>
                  <div className="col-md-7">
                    <h4> Choose up to 5 terms to Contribute</h4>
                    <div className="row" style={{padding:"0px"}}>
                      <div className="col-md-6">

                          <Checkbox onChange={onChange}>Exercise & Fitness </Checkbox>
                          <Checkbox onChange={onChange}>Exercise & Fitness </Checkbox>
                          <Checkbox onChange={onChange}>Exercise & Fitness </Checkbox>

                      </div>
                      <div className="col-md-6">

                        <Checkbox onChange={onChange}>Exercise & Fitness </Checkbox>
                        <Checkbox onChange={onChange}>Exercise & Fitness </Checkbox>
                      </div>
                    </div>
                    <p style={{marginTop:"15px", marginBottom:"0px"}}>Provide your own term</p>
                    <Input />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-5">
                    <div  className="descriptionright">
                      <h4> Target Audience: </h4>
                      <p> (For whom is the product intended?) </p>
                    </div>
                  </div>
                  <div className="col-md-7">
                    <h4> Choose up to 5 terms to Contribute</h4>
                    <div className="row" style={{padding:"0px"}}>
                      <div className="col-md-6">

                          <Checkbox onChange={onChange}>Exercise & Fitness </Checkbox>
                          <Checkbox onChange={onChange}>Exercise & Fitness </Checkbox>
                          <Checkbox onChange={onChange}>Exercise & Fitness </Checkbox>

                      </div>
                      <div className="col-md-6">

                        <Checkbox onChange={onChange}>Exercise & Fitness </Checkbox>
                        <Checkbox onChange={onChange}>Exercise & Fitness </Checkbox>
                      </div>
                    </div>
                    <p style={{marginTop:"15px", marginBottom:"0px"}}>Provide your own term</p>
                    <Input />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-5">
                    <div  className="descriptionright">
                      <h4> Subject Matter: </h4>
                      <p> (What is the product subject? What is the Product about?)</p>
                    </div>
                  </div>
                  <div className="col-md-7">
                    <h4> Choose up to 5 terms to Contribute</h4>
                    <div className="row" style={{padding:"0px"}}>
                      <div className="col-md-6">

                          <Checkbox onChange={onChange}>Exercise & Fitness </Checkbox>
                          <Checkbox onChange={onChange}>Exercise & Fitness </Checkbox>
                          <Checkbox onChange={onChange}>Exercise & Fitness </Checkbox>

                      </div>
                      <div className="col-md-6">

                        <Checkbox onChange={onChange}>Exercise & Fitness </Checkbox>
                        <Checkbox onChange={onChange}>Exercise & Fitness </Checkbox>
                      </div>
                    </div>
                    <p style={{marginTop:"15px", marginBottom:"0px"}}>Provide your own term</p>
                    <Input />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-5">
                    <div  className="descriptionright">
                      <h4> Search Terms: </h4>
                      <p> (Provide specific search term to help customers find your product.) </p>
                    </div>
                  </div>
                  <div className="col-md-7">
                    <Input />
                    <Input />
                    <Input />
                    <Input />
                    <p> Example: dark Chocolate, Apple, Cookies </p> 
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-5">
                    <div  className="descriptionright">
                      <h4> Platinum Keywords: </h4>
                      <p> (For Platinum Merchants only) </p>
                    </div>
                  </div>
                  <div className="col-md-7">
                    <Input />
                    <Input />
                    <Input />
                    <Input />
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

export default KeywordsForm;
