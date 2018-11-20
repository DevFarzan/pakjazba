import React, { Component } from 'react';
import Burgermenu from './../header/burgermenu';
import Footer from './../footer/footer';
import Slider from '.././header/Slider';


class TicketDetail extends Component{
  render(){
    return(
      <div className="">
        <Burgermenu/>
        <div style={{backgroundColor:"#032a30",width:"100%",height:"67px",marginTop:"-20px"}}></div>
          <div className="row jobdetail-page">
              <div className="col-md-12 col-sm-12 col-xs-12" style={{textAlign:"center"}}>
                  <div className="">
                      <h1 style={{fontFamily: 'Crimson Text, serif', fontWeight:"bold"}}>Event Detail</h1>
                  </div>
              </div>
          </div>

        <Footer />
      </div>
    )
  }
}

export default TicketDetail;
