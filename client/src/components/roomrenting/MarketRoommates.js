import React, { Component } from 'react';
import Burgermenu from "../header/burgermenu";  
import Headermenu from "../header/headermenu";
import Slider from "../header/Slider";
import Roomrenting1content from "./roomrenting1content";
import RoomrentingIcon from "./roomrentinficon";
import Footer from '../footer/footer';
import { connect } from 'react-redux'
import { Redirect } from 'react-router';
import {HttpUtils} from "../../Services/HttpUtils";
import AsyncStorage from "@callstack/async-storage/lib/index";
import { isMobile, isTablet } from 'react-device-detect';

import { Modal, Tabs, Icon } from 'antd';

class MarketRoommates extends Component{
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
        this.postRoom = this.postRoom.bind(this)
    }

    componentDidMount(){
        window.scrollTo(0,0);
        this.getAllBusiness();
        this.handleLocalStorage();
    }

    async getAllBusiness(){
        let res = await HttpUtils.get('marketplace'),
        req = await HttpUtils.get('getreviews'),
        data = [];
        if(res && res.code && res.code === 200 && req && req.code && req.code === 200){
            data = this.addingStarProp(res.roomrentsdata, req.content);
            this.setState({ data });
        }
    }

    addingStarProp(arrforLoop, rateArr){
        return arrforLoop && arrforLoop.map((elem) => {
            let rate = 0,
            len = 0;
            rateArr && rateArr.map((el) => {
                if(elem._id == el.objid){
                    rate += el.star ? +el.star : 0;
                    len++
                }
            });
            let star = rate / len;
            if(rate > 0 && len > 0){
                return {...elem, ...{star: star.toFixed(1)}};
            }
            return {...elem, ...{star: 0}};
        });
    }

    handleLocalStorage = () =>{
        AsyncStorage.getItem('user')
            .then((obj) => {
                let userObj = JSON.parse(obj)
                if(!!userObj){
                    this.setState({
                        user: true,
                    })
                }
                else {
                    this.setState({
                        user: false
                    })
                }
            })
    }

    postRoom(){
        const { user } = this.state;
        if(user){
            this.setState({goDetail: true})
        }else {
            this.setState({visible: true})
        }
    }

    handleCancel = (e) => {
        this.setState({visible: false});
    }

    handleLogin = (e) => {
        this.setState({goForLogin: true, visible: false})
    }

    render(){
        const { goForLogin, goDetail } = this.state;
        if (goForLogin) {
            return <Redirect to={{pathname: '/sigin', state: {from: { pathname: "/postad_Roommates" }}}}/>;
        }
        if(goDetail){
            return <Redirect to={{pathname: `/postad_Roommates`}} />
        }
        if(this.props.text){
            return <Redirect to={{pathname: '/filter_roomRent', state: this.state.data}}/>
        }

        return(
            <div>
                <span>
                    {/*<div className ="" style={{"background":"#d8e7e4",marginTop : "8vw",backgroundSize: 'cover'}}>*/}
                    <div className ="" style={{marginTop : "8vw"}}>
                        <div className="background-image">
                            <Headermenu/>
                            <Slider mainH1="PakJazba Room Renting" mainH2="" getMethod={this.postRoom}/>
                        </div>
                    </div>
                </span>
                <div className="container" style={isMobile && !isTablet ? {width: '100%'} : {width:"70%"}}>
                    <div className="hidden-xs">
                      <RoomrentingIcon/>
                    </div>
                    <Roomrenting1content/>
                </div>
                <Footer />
                {this.state.visible && <Modal
                    title="Kindly Login first"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                <div className="row">
                    <div className="col-md-6" style={{textAlign:'center'}}><button className="btn btn-sm btn2-success" style={{width:'100%'}} onClick={this.handleLogin}>Login</button></div>
                    <div className="col-md-6" style={{textAlign:'center'}}><button className="btn btn-sm btn2-success" style={{width:'100%'}} onClick={this.handleCancel}>Cancel</button></div>
                </div>
                </Modal>}
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
