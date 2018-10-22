import React, { Component } from 'react';
import Burgermenu from "../header/burgermenu";
import Slider from "../header/Slider";
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
        window.scrollTo(0,0);
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
                <span>
                <div className ="" style={{"backgroundImage":"url('http://res.cloudinary.com/dxk0bmtei/image/upload/v1537167325/bg-image-for-farzan-bhai_xjp7q7.png')","height": "407px",marginTop: "-65px",marginLeft:"-66px"}}>
                    <div className="background-image">
                        <Burgermenu/>
                        <Slider mainH1="Explore Home" mainH2="Find Your Perfect Match"/>
                    </div>
                </div>
            </span>
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
