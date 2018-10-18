import React, { Component } from 'react';
import App from '../../App';
import BuyFirstFold from './buyfirstfold'
import BuyThirdFold from './buythirdfold'
import BuyFourthFold from './buyforthfold'
import Footer from '../footer/footer';
import { connect } from 'react-redux';

class MarketClassified extends Component{
    render(){
        return(
            <div>
                <App/>
                {!this.props.text && <BuyFirstFold />}
                <BuyFourthFold />
                <BuyThirdFold />
                <Footer />
            </div>
            
        )
    }
}

const mapStateToProps = (state) => {
    return({
        text: state.text
    })
}

export default connect(mapStateToProps)(MarketClassified);
