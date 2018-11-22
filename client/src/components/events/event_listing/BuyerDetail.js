import React, { Component } from 'react';
import Burgermenu from '../../header/burgermenu';
import Footer from '../../footer/footer';
import Slider from '../../header/Slider';
import CardDetail from '../event_listing/CardDetail';
import ContactDetail from '../event_listing/ContactDetails';
import TermsandConditions from '../event_listing/Terms&Conditions';
import OrderCard from '../event_listing/OrderSummarycard';

class BuyerDetail extends Component{
  render(){
    return(
      <div className="">
        <Burgermenu/>
        <div style={{backgroundColor:"#032a30",width:"100%",height:"67px",marginTop:"-20px"}}>
        </div>

        <div className="col-md-8">
          <ContactDetail/>
          <CardDetail/>
          <TermsandConditions/>
        </div>

        <div className="col-md-4 hidden-xs">
          <OrderCard/>
        </div>

      </div>



    )
  }
}

export default BuyerDetail;
