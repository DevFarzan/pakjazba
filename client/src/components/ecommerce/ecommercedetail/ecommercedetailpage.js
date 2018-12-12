import React, { Component } from 'react';
import Burgermenu from '../../header/burgermenu';
import Footer from '../../footer/footer';
import EightEcom from './eightEcom';
import FourEcom from './fourEcom';

class EcomDetail extends Component{
  render(){
    return(
      <div className="">
        <Burgermenu/>
        <div style={{backgroundColor:"#032a30",width:"100%",height:"67px",marginTop:"-20px"}}></div>
          <div className="row jobdetail-page" style={{backgroundColor:"#37a99b"}}>
              <div className="col-md-12 col-sm-12 col-xs-12" style={{textAlign:"center", marginTop:"80px"}}>
                  <div className="">
                      <h1 style={{fontFamily: 'Crimson Text, serif', fontWeight:"bold", color:"white"}}>Electronics</h1>
                      <p style={{fontFamily: 'Crimson Text, serif', color:"white"}}> Shop home entertainment, TVs, home audio, headphones, cameras, assessories and more </p>
                  </div>
              </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="col-md-3">
                <FourEcom/>
              </div>

              <div className="col-md-9">
                <EightEcom/>
              </div>
            </div>
          </div>
        <Footer/>
      </div>

    )
  }
}

export default EcomDetail;
