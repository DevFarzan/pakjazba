import React, { Component } from 'react';
import App from '../App';
import Firstfold from "./business/firstfold";
import Secondfold from './business/secondfold'
import Footer from '../components/footer/footer';
import {Button} from "antd";
import { connect } from 'react-redux'

class MarketBusiness extends Component{
    render(){
        return(
            <div>
                <App/>
                {!this.props.text && <Firstfold/>}
                <Secondfold/>
                <div id="wrapper">
                    <Button className="button2 col-md-12 col-sm-12 col-xs-12" type="primary" block>Veiw More</Button>
                </div>
                <div className="col-md-12 col-sm-12 col-xs-12">
                    <div className="banner">
                        <h1 className="text-align">  Lorem Foren </h1>
                        <Button className="button2 col-md-12 col-sm-12 col-xs-12" type="primary" block>Click Here</Button>
                    </div>
                </div>
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
