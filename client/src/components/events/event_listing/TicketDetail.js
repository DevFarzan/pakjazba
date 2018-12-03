import React, { Component } from 'react';
import Burgermenu from '../../header/burgermenu';
import Footer from '../../footer/footer';
import Slider from '../../header/Slider';
import TicketFirst from '../event_listing/FirstCard';
import TicketSecond from '../event_listing/SecondCard';

class TicketDetail extends Component{
  componentDidMount(){
      let data = this.props.location.state;
      console.log(data, 'Ticket Detail Page');
  }

  render(){
    let data = this.props.location.state;
    return(
      <div className="" style={{marginTop:"100px"}}>
        <Burgermenu />
        <TicketFirst data={data}/>
        <TicketSecond data={data}/>
        <Footer />
      </div>
    )
  }
}

export default TicketDetail;
