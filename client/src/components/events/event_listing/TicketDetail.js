import React, { Component } from 'react';
import Burgermenu from '../../header/burgermenu';
import Footer from '../../footer/footer';
import Slider from '../../header/Slider';
import TicketFirst from '../event_listing/FirstCard';
import TicketSecond from '../event_listing/SecondCard';



class TicketDetail extends Component{
  render(){
    return(
      <div className="" style={{marginTop:"60px"}}>
        <Burgermenu/>
        <TicketFirst/>
        <TicketSecond/>
        <Footer />
      </div>
    )
  }
}

export default TicketDetail;
