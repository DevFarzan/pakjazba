import React, { Component } from 'react';
import Burgermenu from "../header/burgermenu";
import Slider from "../header/Slider";
import Roomrenting1content from "./roomrenting1content";
import RoomrentingIcon from "./roomrentinficon";
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
                <div className ="hidden-xs" style={{"background":"#d8e7e4",marginTop:'86px',backgroundSize: 'cover'}}>
                  <div className="background-image">
                      <Burgermenu/>
                      <Slider mainH1="PakJazba Room Renting" mainH2=""/>
                  </div>
              </div>
              <div className ="visible-xs" style={{"background":"#d8e7e4",marginTop : "-20px",backgroundSize: 'cover'}}>
                  <div className="background-image">
                      <Burgermenu/>
                      <Slider mainH1="PakJazba Room Renting" mainH2=""/>
                  </div>
              </div>
                </span>
                <div className="container" style={{width:"71%"}}>
                    <RoomrentingIcon/>
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
