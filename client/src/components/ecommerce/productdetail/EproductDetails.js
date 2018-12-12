import React, { Component } from 'react';
import Burgermenu from '../header/burgermenu';
import Footer from '../footer/footer';


class EproductDetail extends Component{
  render(){
    return(
      <div>
          <span>
              <div className ="" style={{"backgroundImage":"url('../images/bgc-images/buy-sell.png')", marginTop : "105px",backgroundSize: 'cover'}}>
                  <div className="background-image">
                      <Burgermenu/>
                      <Slider mainH1="Your Market Hub for all Products" mainH2="Find what you need"/>
                  </div>
              </div>
          </span>
    )
  }
}

export default EproductDetail;
