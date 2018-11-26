import React, { Component } from 'react';
import { Checkbox, InputNumber } from 'antd';
import './OrderSummarycard.css';



function onChange(e) {
  console.log(`checked = ${e.target.checked}`);
}

function onChange(value) {
  console.log('changed', value);
}

class ModalOrderCard extends Component{
  render(){
    return(
      <div className="container" style={{width:"100%"}}>
        <div className="summarycard">
          <div className="row" style={{marginTop:"0px"}}>
              <div className="col-md-12">
                  <h3><b>Order Summary</b></h3>
                  <hr className="ehr"/>
              </div>

            <div className="row">
              <div className="col-md-6 col-xs-6">
                 <Checkbox onChange={onChange}></Checkbox>
                 <span className="orederform">Early Bird</span>
              </div>
              <div className="col-md-6 col-xs-6">
                    <InputNumber min={1} max={10} defaultValue={2} onChange={onChange} style={{width:"50px", height:"23px"}} />
                    <span className="orederform" style={{marginLeft:'0px'}}> $200 </span>
              </div>
            </div>

            <div className="row" style={{marginTop:"-15px"}}>
              <div className="col-md-6 col-xs-6">
                 <Checkbox onChange={onChange}></Checkbox>
                  <span className="orederform">Normal Ticket</span>
              </div>
              <div className="col-md-6 col-xs-6">
                    <InputNumber min={1} max={10} defaultValue={0} onChange={onChange} style={{width:"50px", height:"23px"}} />
                    <span className="orederform" style={{marginLeft:'0px'}}> $0 </span>
              </div>

            </div>
            <hr className="ohr"/>

            <div className="row" style={{marginTop:"-20px", marginLeft:"10px"}}>
              <div className="col-md-6 col-xs-6">

                  <h4>Total Amount </h4>

              </div>
              <div className="col-md-6 col-xs-6" style={{textAlign:"center"}}>
                    <span style={{fontSize:"initial", marginLeft:"25px"}}> $200 </span>
              </div>
            </div>

            <div className="row" style={{marginTop:"-30px", marginLeft:"10px"}}>
              <div className="col-md-6 col-xs-6">

                  <h4>Pak Jazba Fee </h4>

              </div>
              <div className="col-md-6 col-xs-6" style={{textAlign:"center"}}>
                    <span  style={{fontSize:"initial", marginLeft:"30px"}}> $2.00 </span>
              </div>
            </div>

            <div className="row" style={{marginTop:"-30px", marginLeft:"10px"}}>
              <div className="col-md-6 col-xs-6">

                  <h4>Stripe </h4>

              </div>
              <div className="col-md-6 col-xs-6" style={{textAlign:"center"}}>
                    <span style={{fontSize:"initial", marginLeft:"30px"}}> $2.20 </span>
              </div>
            </div>
          <hr className="ohr" style={{marginTop:"-10px"}}/>

            <div className="row" style={{marginTop:"-20px", marginLeft:"10px"}}>
              <div className="col-md-6 col-xs-6">

                  <h4>Sub  Total </h4>

              </div>
              <div className="col-md-6 col-xs-6" style={{textAlign:"center"}}>
                    <span style={{fontSize:"initial", marginLeft:"44px"}}> $204.25 </span>
              </div>
            </div>

          </div>
        </div>
      </div>
    )
  }
}

export default ModalOrderCard;
