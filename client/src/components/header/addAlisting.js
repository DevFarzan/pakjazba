import React, { Component } from 'react';
import './addAlisting.css';
import Burgermenu from '../header/burgermenu';
import Footer from '../footer/footer';
import HeaderMenu from './headermenu';

class AddListing extends Component{

    render(){
        return(
            <div>
                <HeaderMenu/>
                
                <div className="container" >
                    <div className="col-lg-12 col-md-12 col-sm-12 hidden-xs" style={{textAlign: 'center',marginTop: '17vh'}}>
                        <h1>Create a listing</h1>
                        <p>What type of listing would you like to add?</p>
                    </div>
                    <div className="visible-xs" style={{textAlign: 'center',marginTop: '2vh'}}>
                        <h1>Create a listing</h1>
                        <p>What type of listing would you like to add?</p>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                            <div className="devCard ImageCard">
                                <div className="iconDev">
                                    <img className="" src="images/post-your-need-images/businessListing.png" alt='img' style={{width: '60%', marginTop: '11px'}}/>
                                </div>
                                <h4 className="needPost-Head">Publish Your Business</h4>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                            <div className="devCard ImageCard">
                                <div className="iconDev">
                                    <img className="" src="images/post-your-need-images/roomRental.png" alt='img' style={{width: '60%', marginTop: '11px'}}/>
                                </div>
                                <h4 className="needPost-Head">Roommates / Rentals</h4>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                            <div className="devCard ImageCard">
                                <div className="iconDev">
                                    <img className="" src="images/post-your-need-images/buyNSell.png" alt='img' style={{width: '60%', marginTop: '11px'}}/>
                                </div>
                                <h4 className="needPost-Head">Buy & Sell</h4>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                            <div className="devCard ImageCard">
                                <div className="iconDev">
                                    <img className="" src="images/post-your-need-images/jobPortal.png" alt='img' style={{width: '60%', marginTop: '11px'}}/>
                                </div>
                                <h4 className="needPost-Head">Job Portal</h4>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                            <div className="devCard ImageCard">
                                <div className="iconDev">
                                    <img className="" src="images/post-your-need-images/events.png" alt='img' style={{width: '60%', marginTop: '11px'}}/>
                                </div>
                                <h4 className="needPost-Head">Organize an Event</h4>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                            <div className="devCard ImageCard">
                                <div className="iconDev">
                                    <img className="" src="images/post-your-need-images/ecommerce.png" alt='img' style={{width: '60%', marginTop: '11px'}}/>
                                </div>
                                <h4 className="needPost-Head">Creat Shop</h4>
                            </div>
                        </div>

                    </div>
                </div>

                <Footer />
                
            </div>
        )
    }
}
export default AddListing;