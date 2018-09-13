import React, { Component } from 'react';
// import Headerroomrenting from "./headerroomrenting";
// import Sliderroomrenting from "./roomrentingcontentarea";
import App from "../../App";
import Roomrenting1content from "./roomrenting1content";
import Roomrentingtwocontentarea from "./roomrenting2contentarea";
//import Roomrentingthreecontentarea from "./roomrenting3contentarea";
import Footer from '../footer/footer';
import Burgermenu from '../header/burgermenu'
import Slider from '../header/Slider'
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
        var res = await HttpUtils.get('marketplace')
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
                <div className="container" style={{width:"87%"}}>
                <Roomrenting1content/>
                </div>
                <Footer />
                MarketRoommates
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
