import React, { Component } from 'react';
import './EcomCard.css'

class EcomCard extends Component {
  render() {
    return (
      <div className="container" style={{ width: "95%" }}>
        <div className="row">
          <div className="col-md-12">
            <div className="col-md-3 col-sm-6">
              <div className="EcomCard" style={{ cursor: 'pointer' }}>
                <div className="ecombox-content">
                  <div className="shopcard-imitation">
                    <div className="card2" >
                      <h3> Deals in Electronics </h3>
                      <img alt='' src='./images/ecommerce/41RPh1kjNpL._AC_US218_.jpg' />
                    </div>
                  </div>
                  <p style={{ marginTop: "20px" }}> all type of electronic stuff available </p>
                  <button type="button" className="btn btn-sm btn2-success font-style" style={{ width: "100%" }}>Shop Now</button>
                </div>
              </div>
            </div>
            <div className="col-md-3  col-sm-6">
              <div className="EcomCard" style={{ cursor: 'pointer' }}>
                <div className="ecombox-content">
                  <div className="shopcard-imitation">
                    <div className="card2" >
                      <h3> Deals in Electronics </h3>
                      <img alt='' src='./images/ecommerce/41YUcbLi+DL._AC_US218_.jpg' />
                    </div>
                  </div>
                  <p style={{ marginTop: "20px" }}> all type of electronic stuff available </p>
                  <button type="button" className="btn btn-sm btn2-success font-style" style={{ width: "100%" }}>Shop Now</button>
                </div>
              </div>
            </div>
            <div className="col-md-3  col-sm-6">
              <div className="EcomCard" style={{ cursor: 'pointer' }}>
                <div className="ecombox-content">
                  <div className="shopcard-imitation">
                    <div className="card2" >
                      <h3> Deals in Electronics </h3>
                      <img alt='' src='./images/ecommerce/515VtGX226L._AC_US218_.jpg' />
                    </div>
                  </div>
                  <p style={{ marginTop: "20px" }}> all type of electronic stuff available </p>
                  <button type="button" className="btn btn-sm btn2-success font-style" style={{ width: "100%" }}>Shop Now</button>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="EcomCard" style={{ cursor: 'pointer' }}>
                <div className="ecombox-content">
                  <div className="shopcard-imitation">
                    <div className="card2" >
                      <h3> Deals in Electronics </h3>
                      <img alt='' src='./images/ecommerce/DURM-230BA9D9F69CEER3._V535729157_.jpg' />
                    </div>
                  </div>
                  <p style={{ marginTop: "20px" }}> all type of electronic stuff available </p>
                  <button type="button" className="btn btn-sm btn2-success font-style" style={{ width: "100%" }}>Shop Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default EcomCard;
