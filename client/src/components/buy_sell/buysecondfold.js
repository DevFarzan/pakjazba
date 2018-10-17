import React, { Component } from 'react';
import './buysecondfold.css'

class Secondfold extends Component{
    render(){
        return(
            <div className="secondfold">
                <h3> Featured Ads </h3>
                <div className="row">
                    {/*first card*/}
                    <div className="col-md-4">
                        <div className="ibox">
                            <div className="ibox-content product-box">
                                <div className="product-imitation">
                                  <div className="card2">
                                    <img alt='' src='./images/job-category.jpeg'/>
                                    <span className="card-button">Home & Decor</span>
                                    <h4> Furniture For Sale </h4>
                                    <i className="glyphicon glyphicon-map-marker"/><p className="text">Home & Decor</p>
                                  </div>
                                </div>
                                <div className="cust-margin">
                                    <i className="glyphicon glyphicon-home"/>
                                    <p className="text">Home icon</p>
                                </div>

                                <div className="product-desc">
                                    <span className="product-price">$2600</span>
                                    <div> </div>
                                    <small className="text-muted">Category</small>
                                    <a href="#" className="product-name"> Product</a>
                                    <div className="small m-t-xs">
                                        Many desktop publishing packages and web page editors now.
                                    </div>
                                    <div className="m-t text-righ">
                                        <a href="#" className="btn btn-xs btn-outline btn-primary">Info <i className="fa fa-long-arrow-right"></i> </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Second card*/}
                    <div className="col-md-4">
                        <div className="ibox">
                            <div className="ibox-content product-box">
                                <div className="product-imitation">
                                    <span className="card-button">Home & Decor</span>
                                    <h4> Furniture For Sale </h4>
                                    <i className="glyphicon glyphicon-map-marker"/><p className="text">Home & Decor</p>
                                </div>
                                <div className="cust-margin">
                                    <i className="glyphicon glyphicon-home"/>
                                    <p className="text">Home icon</p>
                                </div>

                                <div className="product-desc">
                                    <span className="product-price">$2600</span>
                                    <small className="text-muted">Category</small>
                                    <a href="#" className="product-name"> Product</a>
                                    <div className="small m-t-xs">
                                        Many desktop publishing packages and web page editors now.
                                    </div>
                                    <div className="m-t text-righ">
                                        <a href="#" className="btn btn-xs btn-outline btn-primary">Info <i className="fa fa-long-arrow-right"></i> </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*third card*/}
                    <div className="col-md-4">
                        <div className="ibox">
                            <div className="ibox-content product-box active">
                                <div className="product-imitation">
                                    <span className="card-button">Home & Decor</span>
                                    <h4> Furniture For Sale </h4>
                                    <i className="glyphicon glyphicon-map-marker"/><p className="text">Home & Decor</p>
                                </div>
                                <div className="cust-margin">
                                    <i className="glyphicon glyphicon-home"/>
                                    <p className="text">Home icon</p>
                                </div>

                                <div className="product-desc">
                                    <span className="product-price">$2600</span>
                                    <small className="text-muted">Category</small>
                                    <a href="#" className="product-name"> Product</a>
                                    <div className="small m-t-xs">
                                        Many desktop publishing packages and web page editors now.
                                    </div>
                                    <div className="m-t text-righ">
                                        <a href="#" className="btn btn-xs btn-outline btn-primary">Info <i className="fa fa-long-arrow-right"></i> </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Secondfold;
