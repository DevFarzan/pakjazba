import React, { Component } from 'react';
import Burgermenu from '../header/burgermenu';
import Slider from '../header/Slider';
import Footer from '../footer/footer';
import { connect } from 'react-redux';
import EventCategories from '../main_Component/EventCategories';
import EventFeatured from './Eventfeaturedcard';

class MarketEvent extends Component{

    render(){
        return(
            <div>
                <span>
                    <div className ="" style={{"backgroundImage":"url('../images/bgc-images/buy-sell.png')", marginTop : "-20px",backgroundSize: 'cover'}}>
                        <div className="background-image">
                            <Burgermenu/>
                            <Slider mainH1="Buy & Sell" mainH2="Find what you need"/>
                        </div>
                    </div>
                </span>
                <EventCategories/>
                <EventFeatured/>
                <Footer/>
            </div>

        )
    }
}


export default MarketEvent;
