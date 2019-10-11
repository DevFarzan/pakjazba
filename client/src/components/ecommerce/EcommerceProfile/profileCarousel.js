import React, { Component } from 'react';
import './profileCarousel.css';
import EcomCardsfor from './EcommerceCard';
import { isMobile, isTablet, isBrowser } from 'react-device-detect';

class ProfileCarousel extends Component {
    render(){
        return(
            <div className="">
            <div className="container">
                <div className="row">
                    <h2>Carousel Reviews</h2>
                </div>
            </div>
            <div className="carousel-reviews broun-block">
                <div className="container">
                    <div className="row">
                        <div id="carousel-reviews" className="carousel slide" data-ride="carousel">
                            <div className="carousel-inner">
                                <div className="item active">
                                    <div className="col-md-4 col-sm-6">
                                        <EcomCardsfor/>
                                    </div>
                                    <div className="col-md-4 col-sm-6 hidden-xs">
                                        <EcomCardsfor/>
                                    </div>
                                    <div className="col-md-4 col-sm-6 hidden-sm hidden-xs">
                                        <EcomCardsfor/>
                                    </div>
                                    <div className="item">
                                        <div className="col-md-4 col-sm-6">
                                            <EcomCardsfor/>
                                        </div>
                                        <div className="col-md-4 col-sm-6 hidden-xs">
                                            <EcomCardsfor/>
                                        </div>
                                        <div className="col-md-4 col-sm-6 hidden-sm hidden-xs">
                                            <EcomCardsfor/>
                                        </div>
                                    </div>                 
                                 </div>
                                <a className="left carousel-control" href="#carousel-reviews" role="button" data-slide="prev">
                                    <span className="glyphicon glyphicon-chevron-left"></span>
                                </a>
                                <a className="right carousel-control" href="#carousel-reviews" role="button" data-slide="next">
                                    <span className="glyphicon glyphicon-chevron-right"></span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default ProfileCarousel;