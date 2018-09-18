import React, { Component } from 'react';
import App from "../../App";
import Roomrenting1content from "./roomrenting1content";
import Footer from '../footer/footer';
import { connect } from 'react-redux'
import { Redirect } from 'react-router';
import {HttpUtils} from "../../Services/HttpUtils";

class MarketRoommates extends Component{
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    componentDidMount(){
        this.getAllBusiness()
    }

    async getAllBusiness(){
        let res = await HttpUtils.get('marketplace')
        this.setState({
            data: res && res.roomrentsdata
        })
    }

    render(){
        if(this.props.text){
            return(
                <Redirect to={{pathname: '/filter_roomRent', state: this.state.data}}/>
            )
        }

        return(
            <div>
                <App/>
                <div className="container" style={{width:"94%"}}>
                <Roomrenting1content/>
                </div>
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

export default connect(mapStateToProps)(MarketRoommates);
