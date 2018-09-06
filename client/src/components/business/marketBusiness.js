import React, { Component } from 'react';
import App from '../../App';
import Firstfold from "./firstfold";
import Secondfold from './secondfold'
import Footer from '../footer/footer';
import {Button} from "antd";
import { connect } from 'react-redux'

class MarketBusiness extends Component{
    render(){
        return(
            <div>
                <App/>
                {!this.props.text && <Firstfold/>}
                <Secondfold/>
                
                {/*<div className="col-md-12 col-sm-12 col-xs-12">
                    <div className="banner" style={{backgroundImage:"url('../images/afterpaginate.jpg')"}}>
                        <h1 className="text-align">Explore Exciting Destination</h1>
                        <h3>lorem Ipsum doller amet sit,consectecture adipiscing.</h3>
                    </div>
                </div>*/}
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
