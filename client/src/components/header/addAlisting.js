import React, { Component } from 'react';
import './addAlisting.css';
import Burgermenu from '../header/burgermenu';
import Footer from '../footer/footer';
import HeaderMenu from './headermenu';

import { Menu, Dropdown, Button } from 'antd';
import { Link } from 'react-router-dom';

class AddListing extends Component{

    render(){
        const menu = (
            <Menu >
                <Menu.Item>
                    <Link rel="noopener noreferrer" to={`/postad_business`}>Publish Your Business</Link>
                </Menu.Item>
                <Menu.Item>
                    <Link rel="noopener noreferrer" to={`/postad_Roommates`}>Roommates / Rentals</Link>
                </Menu.Item>
                <Menu.Item>
                    <Link rel="noopener noreferrer" to={`/postad_buysell`}>Buy & Sell</Link>
                </Menu.Item>
                <Menu.Item>
                    <Link rel="noopener noreferrer" to={`/postad_jobPortal`}>Job Portal</Link>
                </Menu.Item>
                <Menu.Item>
                    <Link rel="noopener noreferrer" to={`/postad_eventPortal`}>Organize an Event</Link>
                </Menu.Item>
                {/* <Menu.Item>
                    <Link  rel="noopener noreferrer" to={`/Forms_Ecommerce`}>Publish Your Product</Link>
                </Menu.Item> */}
                <Menu.Item>
                    <Link rel="noopener noreferrer" to={`/shopForm`}>Create Shop</Link>
                </Menu.Item>
            </Menu>
        );
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

                        <Link rel="noopener noreferrer" to={`/postad_business`}>
                            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                <div className="devCard">
                                    <div className="iconDev">
                                        <img className="" src="images/post-your-need-images/businessListing.png" alt='img'/>
                                    </div>
                                        <h4 className="needPost-Head">Publish Your Business</h4>
                                
                                </div>
                            </div>
                        </Link>

                        <Link rel="noopener noreferrer" to={`/postad_Roommates`}>
                            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                <div className="devCard">
                                    <div className="iconDev">
                                        <img className="" src="images/post-your-need-images/roomRental.png" alt='img'/>
                                    </div>
                                        <h4 className="needPost-Head">Roommates / Rentals</h4>
                                    
                                </div>
                            </div>
                        </Link>

                        <Link rel="noopener noreferrer" to={`/postad_buysell`}>
                            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                <div className="devCard">
                                    <div className="iconDev">
                                        <img className="" src="images/post-your-need-images/buyNSell.png" alt='img'/>
                                    </div>
                                        <h4 className="needPost-Head">Buy & Sell</h4>
                                </div>
                            </div>
                        </Link>
                        
                        <Link rel="noopener noreferrer" to={`/postad_jobPortal`}>
                            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                <div className="devCard">
                                    <div className="iconDev">
                                        <img className="" src="images/post-your-need-images/jobPortal.png" alt='img'/>
                                    </div>
                                    <h4 className="needPost-Head">Job Portal</h4>
                                </div>
                            </div>
                        </Link>

                        <Link rel="noopener noreferrer" to={`/postad_eventPortal`}>
                            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                <div className="devCard">
                                    <div className="iconDev">
                                        <img className="" src="images/post-your-need-images/events.png" alt='img'/>
                                    </div>
                                    <h4 className="needPost-Head">Organize an Event</h4>
                                </div>
                            </div>
                        </Link>

                        <Link rel="noopener noreferrer" to={`/shopForm`}>
                            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                <div className="devCard">
                                    <div className="iconDev">
                                        <img className="" src="images/post-your-need-images/ecommerce.png" alt='img'/>
                                    </div>
                                    <h4 className="needPost-Head">Creat Shop</h4>
                                </div>
                            </div>
                        </Link>

                    </div>
                </div>

                <Footer />
                
            </div>
        )
    }
}
export default AddListing;