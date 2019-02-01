import React, { Component } from 'react';
import './lowestprice.css';

class LowestPrice extends Component{
  render(){
    return(
      <div className="row">
        <div className="col-md-8">
          <p className="seatsvalue"><b> Sec 118, Row 1 </b> </p>
          <p> Verified Resale Ticket </p>
        </div>
        <div className="col-md-4">
          <p className="pricingvalue"> $335.00 ea </p>
        </div>
      </div>
    )
  }
}

export default LowestPrice;
