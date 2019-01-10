import React, { Component } from 'react';
import Burgermenu from '../../header/burgermenu';
import Slider from '../../header/Slider';
import Footer from '../../footer/footer';
import EcomTabs from './EcomTabs';
import VitalInfo from './EvitalInfo';
import OfferInfo from './OfferInfo';
import './ecomform.css'

class EcomForms extends Component{
  render(){
    return(
      <div className="">
        <Burgermenu/>
        <div style={{backgroundColor:"#032a30",width:"100%",height:"67px",marginTop:"-20px"}}>
        </div>
          <div className="row jobdetail-page" style={{backgroundColor:"#37a99b"}}>
              <div className="col-md-12 col-sm-12 col-xs-12" style={{textAlign:"center", marginTop:"80px"}}>
                  <div className="">
                      <h1 style={{fontFamily: 'Crimson Text, serif', fontWeight:"bold", color:"white"}}>Add Your Product</h1>

                  </div>
              </div>
          </div>
        <div>
          <EcomTabs/>
        </div>
        <Footer/>
      </div>


    )
  }
}
export default EcomForms;
