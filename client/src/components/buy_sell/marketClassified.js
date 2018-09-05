import React, { Component } from 'react';
import App from '../../App';
import BuyFirstFold from './buyfirstfold'
import BuyThirdFold from './buythirdfold'
import BuyFourthFold from './buyforthfold'
import Footer from '../footer/footer';

class MarketClassified extends Component{
    render(){
        return(
            <div>
                <App/>
                <BuyFirstFold />
                <BuyFourthFold />
                <BuyThirdFold />
                <Footer />
            </div>
        )
    }
}

export default MarketClassified;