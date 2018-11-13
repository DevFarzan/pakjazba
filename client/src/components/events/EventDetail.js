import React, { Component } from 'react';
import Burgermenu from '../header/burgermenu';
import Footer from '../footer/footer';
import Slider from '../header/Slider';
import EdetailFirstfold from '../events/EdetailFirstfold';
import EdetailSecondfold from '../events/EdetailSecondfold';
import EdetailThirdfold from '../events/EdetailThirdfold';

class EventDetail extends Component{
  render(){
    return(
      <div className="">
      <Burgermenu/>
      <div style={{backgroundColor:"#032a30",width:"100%",height:"67px",marginTop:"-20px"}}></div>
        <div className="row jobdetail-page" style={{backgroundColor:"#37a99b"}}>
            <div className="col-md-12 col-sm-12 col-xs-12" style={{textAlign:"center"}}>
                <div className="">
                    <h1 style={{fontFamily: 'Crimson Text, serif', fontWeight:"bold"}}>Event Detail</h1>
                </div>
            </div>
        </div>
        <EdetailFirstfold/>
        <EdetailSecondfold/>
        <EdetailThirdfold/>
        <Footer />
      </div>

    )
  }
}
export default EventDetail;
