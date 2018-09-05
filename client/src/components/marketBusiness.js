import React, { Component } from 'react';
import App from '../App';
import Firstfold from "./business/firstfold";
import Secondfold from './business/secondfold'
import Footer from '../components/footer/footer';
import {Button} from "antd";



class MarketBusiness extends Component{
    render(){
        return(
            <div>
                <App/>
                <Firstfold/>
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

export default MarketBusiness;