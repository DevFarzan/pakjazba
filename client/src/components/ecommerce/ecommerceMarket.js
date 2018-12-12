import React, { Component } from 'react';
import Burgermenu from '../header/burgermenu';
import Footer from '../footer/footer';
import Slider from '../header/Slider';
import EcomCard from './EcomCard';
import Eshopcard from './EcomShopcard';
import Additionalcard from './EcomAdditionalcard';
import DealsEcom from './EcomDeals';

class EcommerceMarket extends Component{
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
          <div className="row" style={{marginTop:"20px"}}>
            <h1 className="" style={{fontWeight:"bold", textAlign:"center"}}> Feature Categories  </h1>
          </div>
          <div className="row" style={{marginTop:"-10px"}}>
                <EcomCard/>
          </div>



          <div className="row">

              <Eshopcard/>
          </div>

          <div className="row">
            <Additionalcard/>
          </div>

          <div className="row" style={{marginTop:"-70px"}}>
            <DealsEcom/>
          </div>

          <div className="row">
              <div className="col-md-12">
                  <img src="../images/businesslistingimage.png" style={{width:'100%'}} />
              </div>
          </div>


          <Footer />
      </div>

    )
  }
}

export default EcommerceMarket;
