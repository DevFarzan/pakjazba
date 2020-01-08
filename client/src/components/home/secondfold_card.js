import React, { Component } from 'react';
import './secondfold_card.css';
import { Link } from "react-router-dom";
import { isMobile, isTablet, isBrowser } from 'react-device-detect';


class SecondfoldCard extends Component{
    render() {
        return (
            <div>
            <div className="container hidden-xs" style={isTablet ? {marginTop:"115px"} : {} }>
                <div className="hometext">
                    <h1> WHAT YOU ARE LOOKING FOR </h1>
                    <h4> FILTER BY CATEGORY </h4> 
                </div>
                <div className="hidden-xs">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="col-md-6 col-sm-6">
                                <div className="cardsecond_fold">
                                    <Link to={"./explore"}>
                                        <img src="./images/homepage/businessListing.jpg"/>
                                    </Link>
                                    
                                </div>
                                <div className="row" style={{padding: "10px 0"}}>
                                    <div className="col-md-12" style={{padding: "0"}}>
                                        <div className="col-md-6 col-sm-6" style={{padding:"15px"}}>
                                            <div className="cardsecond_fold">
                                               <Link to={"./explore"}>
                                                   <img src="./images/homepage/buyNSell.jpg"/>
                                                </Link> 
                                            </div>      
                                        </div>
                                        <div className="col-md-6 col-sm-6" style={{padding:"15px"}}>
                                            <div className="cardsecond_fold">
                                                <Link to={"./explore"}>
                                                    <img src="./images/homepage/event.jpg"/>
                                                </Link>
                                                
                                            </div>
                                        </div>
                                    </div>

                                </div>   
                                <div className="row" style={{padding: "0"}}>
                                    <div className="col-md-12" style={{padding: "0"}}>
                                        <div className="col-md-6 col-sm-6" style={{padding:"10px 15px"}}>
                                            <div className="cardsecond_fold">
                                               
                                                   <img src="./images/homepage/comingsoon.jpg"/>
                                                
                                            </div>      
                                        </div>
                                        <div className="col-md-6 col-sm-6" style={{padding:"10px 15px"}}>
                                        <div className="cardsecond_fold">
                                                <Link to={"./detail_blog"}>
                                                    <img src="./images/homepage/blog.jpg"/>
                                                </Link>
                                                
                                            </div>
                                        </div>
                                    </div>

                                </div>   
                            </div>
                            <div className="col-md-6 col-sm-6">
                                <div className="cardsecond_fold">
                                    <Link to={"./explore"}>
                                        <img src="./images/homepage/ecommerce.jpg"/>
                                    </Link>
                                        
                                </div>
                                <div className="row" style={{padding: "10px 0"}}>
                                    <div className="col-md-12" style={{padding: "0"}}>
                                        <div className="col-md-6 col-sm-6" style={{padding:"15px"}}>
                                            <div className="cardsecond_fold">
                                                <Link to={"./explore"}>
                                                    <img src="./images/homepage/entertainment.jpg"/>
                                                </Link>
                                                
                                            </div>            
                                        </div>
                                        <div className="col-md-6 col-sm-6" style={{padding:"15px"}}>
                                        <div className="cardsecond_fold">
                                                <Link to={"./explore"}>
                                                    <img src="./images/homepage/jobPortal.jpg"/>
                                                </Link>
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="cardsecond_fold">
                                    <Link to={"./explore"}>
                                        <img src="./images/homepage/roomRenting.jpg"/>
                                    </Link>
                                        
                                </div>
                            </div>
                        </div>
                    </div>
                </div>                  
            </div>
            
            <div className="container visible-xs" style={{marginTop:"185px"}}>
                <div className="hometext">
                    <h1> WHAT YOU ARE LOOKING FOR </h1>
                    <h4> FILTER BY CATEGORY </h4> 
                </div>
                <div className="visible-xs">
                    <div className="row">
                            <div className="col-md-12">
                                <div className="col-md-6">
                                    <div className="cardsecond_fold">
                                        <Link to={"./explore"}>
                                            <img src="./images/homepage/businessListing-m.jpg"/>
                                        </Link>
                                        
                                    </div>
                                    <div className="row" style={{padding: "10px 0"}}>
                                        <div className="col-md-12" style={{padding: "0"}}>
                                            <div className="col-md-6" style={{padding:"15px"}}>
                                                <div className="cardsecond_fold">
                                                <Link to={"./explore"}>
                                                    <img src="./images/homepage/buyNSell-m.jpg"/>
                                                    </Link> 
                                                </div>      
                                            </div>
                                            <div className="col-md-6" style={{padding:"15px"}}>
                                                <div className="cardsecond_fold">
                                                    <Link to={"./explore"}>
                                                        <img src="./images/homepage/event-m.jpg"/>
                                                    </Link>
                                                    
                                                </div>
                                            </div>
                                        </div>

                                    </div>   
                                    <div className="row" style={{padding: "0"}}>
                                        <div className="col-md-12" style={{padding: "0"}}>
                                            <div className="col-md-6" style={{padding:"10px 15px"}}>
                                                <div className="cardsecond_fold">
                                                
                                                    <img src="./images/homepage/comingsoon-m.jpg"/>
                                                    
                                                </div>      
                                            </div>
                                            <div className="col-md-6" style={{padding:"10px 15px"}}>
                                            <div className="cardsecond_fold">
                                                    <Link to={"./detail_blog"}>
                                                        <img src="./images/homepage/blog-m.jpg"/>
                                                    </Link>
                                                    
                                                </div>
                                            </div>
                                        </div>

                                    </div>   
                                </div>
                                <div className="col-md-6">
                                    <div className="cardsecond_fold">
                                        <Link to={"./explore"}>
                                            <img src="./images/homepage/ecommerce-m.jpg"/>
                                        </Link>
                                            
                                    </div>
                                    <div className="row" style={{padding: "10px 0"}}>
                                        <div className="col-md-12" style={{padding: "0"}}>
                                            <div className="col-md-6" style={{padding:"15px"}}>
                                                <div className="cardsecond_fold">
                                                    <Link to={"./explore"}>
                                                        <img src="./images/homepage/entertainment-m.jpg"/>
                                                    </Link>
                                                    
                                                </div>            
                                            </div>
                                            <div className="col-md-6" style={{padding:"15px"}}>
                                            <div className="cardsecond_fold">
                                                    <Link to={"./explore"}>
                                                        <img src="./images/homepage/jobPortal-m.jpg"/>
                                                    </Link>
                                                    
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="cardsecond_fold">
                                        <Link to={"./explore"}>
                                            <img src="./images/homepage/roomRenting-m.jpg"/>
                                        </Link>
                                            
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

export default SecondfoldCard;