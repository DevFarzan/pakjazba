import React, { Component } from 'react';
import './EcomShopcard.css'

class EshopCard extends Component{
  render(){
    return(

      <div className="container" style={{width:"100%"}}>
        <div className="row" style={{marginTop:"20px"}}>
          <span>
            <h3 className="" style={{fontWeight:"bold", textAlign:"left", marginLeft:"15px"}}> Early Black Friday deals under $25  </h3>
            <p style={{marginLeft:"365px", marginTop:"-40px"}}> see detail </p>
          </span>
        </div>

        <div className="row">
          <div className="col-md-12">
            <div className="col-md-3 col-sm-4">
              <div className="ecomshopcard" style={{cursor: 'pointer'}}>
                          <div className="card2" >
                              <img alt='' src='./images/ecommerce/51FaYCQow3L._SCLZZZZZZZ___AC_SY200_.jpg'/>
                          </div>
                      <h4 style={{marginTop:"20px", textAlign:"center"}}> $13.49 to $22.24 </h4>
              </div>
            </div>

            <div className="col-md-3 col-sm-4">
              <div className="ecomshopcard" style={{cursor: 'pointer'}}>
                          <div className="card2" >
                              <img alt='' src='./images/ecommerce/31CElO-B3PL._AC_US160_.jpg'/>
                          </div>
                      <h4 style={{marginTop:"20px", textAlign:"center"}}> $13.49 to $22.24 </h4>
              </div>
            </div>

            <div className="col-md-3 col-sm-4">
              <div className="ecomshopcard" style={{cursor: 'pointer'}}>
                          <div className="card2" >
                              <img alt='' src='./images/ecommerce/41+zILHoWaL._AC_US218_.jpg'/>
                          </div>
                      <h4 style={{marginTop:"20px", textAlign:"center"}}> $13.49 to $22.24 </h4>
              </div>
            </div>

            <div className="col-md-3 col-sm-4">
              <div className="ecomshopcard" style={{cursor: 'pointer'}}>
                          <div className="card2" >
                              <img alt='' src='./images/ecommerce/41pa5T0NGKL._AC_US218_.jpg'/>
                          </div>
                      <h4 style={{marginTop:"20px", textAlign:"center"}}> $13.49 to $22.24 </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default EshopCard;
