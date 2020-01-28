import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import './EcomShopcard.css'

class EshopCard extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  render() {
    // const { productsData } = this.props;
    const {notFoundFilterData, categoryofProduct, filteredData, removeValue, showAllProducts, showproducts, allData ,productsData, colorsofProduct, brandofProducts} = this.props;
    console.log(productsData,'productsData')
    return (

      <div className="container" style={{ width: "95%" }}>

          {categoryofProduct && categoryofProduct.length > 0 ?
                    categoryofProduct.map((elem, key) => {
                        return (
                          <div className="row">
                              <div className="cross-card">
                                
                                  <li>{elem}<span class="close"
                                      onClick={removeValue.bind(this, 'category', elem)}
                                  >x</span></li>
                              </div>
                          </div>
                            )
                    })
                    : null}
            {colorsofProduct && colorsofProduct.length > 0 ?
                    colorsofProduct.map((elem, key) => {
                        return (
                          <div className="cross-card">
                                <li>{elem}<span class="close"
                                    onClick={removeValue.bind(this, 'color', elem)}
                                >x</span></li>
                            </div>)
                    })
                    : null}
            {brandofProducts && brandofProducts.length > 0 ?
                    brandofProducts.map((elem, key) => {
                        return (
                            <div className="cross-card">
                                <li>{elem}<span class="close"
                                    onClick={removeValue.bind(this, 'brandName', elem)}
                                >x</span></li>
                            </div>)
                    })
                    : null}


        {productsData.length > 0 &&  
        <div className="row" style={{ marginTop: "20px" }}>
          <span>
            <h3 className="exploreHead"> Products </h3>
            {/* <p style={{ marginLeft: "365px", marginTop: "-40px" }}> see detail </p> */}
          </span>
        </div>}


        <div className="row">
                      
          <div className="col-md-12">
              
              
              {notFoundFilterData && filteredData.length == 0 ?
                            <div>
                                <p>
                                    No Record Found
                                </p>
                                <button
                                    onClick={showAllProducts}
                                >Back</button>
                            </div>
                            :
                            filteredData && filteredData.map((elem, key) => {
                                let str = elem.shopName || '';
                                if (str.length > 35) {
                                    str = str.substring(0, 10);
                                    str = str + '...'
                                }
                    return (
                      <div className="col-md-4 col-sm-4">
                        
                        <Link rel="noopener noreferrer" to={{ pathname: `/products_DetailStyle/${elem._id}`, state: elem }} >
                          <div className="ecomshopcard">
                            <div className="ecommerce-card" >
                              <img alt='' src={elem.images[0]} />
                            </div>
                            <div className="">
                              <div className="pricing">
                                <h4 style={{margin:"0", color:"#337AB7"}}>{`$${elem.price}`} </h4>
                              </div>
                              <div className="category">
                                <h4>
                                      {elem.category[1]}
                                    </h4>
                              </div>
                            </div>
                            <div className="otherdetails">
                              <span><h3>{elem.product.slice(0,15)}....</h3></span>
                              <span><h5>By:{elem.shopName}</h5></span>
                                <Link rel="noopener noreferrer" to={{ pathname: `/products_DetailStyle/${elem._id}`, state: elem }} ><button className="shop-btn">Shop Now</button></Link>
                            </div>
                            
                          </div>
                        </Link>
                        
                      </div>
                    )
                  })
              }
                  {notFoundFilterData == false && filteredData.length == 0 && allData ?
                    productsData && productsData.map((elem, key) => {
                        let str = elem.shopName || '';
                        if (str.length > 35) {
                            str = str.substring(0, 35);
                            str = str + '...'
                        }
                        return (
                          <div className="col-md-4 col-sm-4">
                            
                            <Link rel="noopener noreferrer" to={{ pathname: `/products_DetailStyle/${elem._id}`, state: elem }} >
                              <div className="ecomshopcard">
                                <div className="ecommerce-card" >
                                  <img alt='' src={elem.images[0]} />
                                </div>
                                <div className="">
                                  <div className="pricing">
                                    <h4 style={{margin:"0", color:"#337AB7"}}>{`$${elem.price}`} </h4>
                                  </div>
                                  <div className="category">
                                    <h4>
                                          {elem.category[1]}
                                        </h4>
                                  </div>
                                </div>
                                <div className="otherdetails">
                                  <span><h3>{elem.product.slice(0,15)}....</h3></span>
                                  <span><h5>By:{elem.shopName}</h5></span>
                                  <Link rel="noopener noreferrer" to={{ pathname: `/products_DetailStyle/${elem._id}`, state: elem }} ><button className="shop-btn">Shop Now</button></Link>
                                </div>
                                
                              </div>
                              </Link>
                          </div>
                        )
                      })
                    : null
                    }


                    


            {/* <div className="col-md-3 col-sm-4">
              <Link rel="noopener noreferrer" to={`/products_DetailStyle`} >
                <div className="ecomshopcard" style={{ cursor: 'pointer' }}>
                  <div className="card2" >
                    <img alt='' src='./images/ecommerce/31CElO-B3PL._AC_US160_.jpg' />
                  </div>
                  <h4 style={{ marginTop: "20px", textAlign: "center" }}> $13.49 to $22.24 </h4>
                </div>
              </Link>
            </div>
            <div className="col-md-3 col-sm-4">
              <Link rel="noopener noreferrer" to={`/products_DetailStyle`} >
                <div className="ecomshopcard" style={{ cursor: 'pointer' }}>
                  <div className="card2" >
                    <img alt='' src='./images/ecommerce/41+zILHoWaL._AC_US218_.jpg' />
                  </div>
                  <h4 style={{ marginTop: "20px", textAlign: "center" }}> $13.49 to $22.24 </h4>
                </div>
              </Link>
            </div>
            <div className="col-md-3 col-sm-4">
              <div className="ecomshopcard" style={{ cursor: 'pointer' }}>
                <div className="card2" >
                  <img alt='' src='./images/ecommerce/41pa5T0NGKL._AC_US218_.jpg' />
                </div>
                <h4 style={{ marginTop: "20px", textAlign: "center" }}> $13.49 to $22.24 </h4>
              </div> */}
            {/* </div> */}
          </div>
        </div>
      </div >
    )
  }
}

export default EshopCard;

/*featureData, featuredCategories, noRecordFound, recordFound, loader, searchBy, checkRadioBtn,*/