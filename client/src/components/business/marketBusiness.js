import React, { Component } from 'react';
import App from '../../App';
import Firstfold from "./firstfold";
import Secondfold from './secondfold'
import Footer from '../footer/footer';
import { connect } from 'react-redux'

class MarketBusiness extends Component{
    render(){
        return(
            <div>
                <App/>
                {!this.props.text && <Firstfold/>}
                <Secondfold/>
                <Footer/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return({
        text: state.text
    })
}

export default connect(mapStateToProps)(MarketBusiness);
