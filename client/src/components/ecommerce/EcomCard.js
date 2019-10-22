import React, { Component } from 'react';
import './EcomCard.css'
import { Link } from 'react-router-dom';

class EcomCard extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { featureData } = this.props;
    console.log(featureData, 'featureData')
    return (
      <div className="container" style={{ width: "95%" }}>
        <div className="row">
          <div className="col-md-12">
            {featureData && featureData.map((elem, key) => {
              return (
                <div className="col-md-3 col-sm-6">
                  <div className="EcomCard" style={{ cursor: 'pointer' }}>
                    <div className="ecombox-content">
                      <div className="shopcard-imitation">
                        <div className="card2" >
                          <h3> Deals in {elem.brandName} </h3>
                          <img alt='' src={elem.images[0]} />
                        </div>
                      </div>
                      <p style={{ marginTop: "20px" }}> all type of {elem.manufacturer} </p>
                      <Link rel="noopener noreferrer" to={{ pathname: `/products_DetailStyle/${elem._id}`, state: elem }} >
                        <button type="button" className="btn btn-sm btn2-success font-style" style={{ width: "100%" }}>Shop Now</button>
                      </Link>
                    </div>
                  </div>
                </div>
              )
            })}

            {/* <div className="col-md-3  col-sm-6">
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
            </div> */}
            {/* <div className="col-md-3  col-sm-6">
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
            </div> */}
            {/* <div className="col-md-3 col-sm-6">
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
            </div> */}
          </div>
        </div>
      </div>
    )
  }
}
export default EcomCard;
