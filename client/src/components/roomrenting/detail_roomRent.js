import React, { Component } from 'react';
import Headermenu from '../header/headermenu';
import Slider from '../header/Slider';
import Footer from '../footer/footer'
import Roomrentingthreecontentarea from "./roomrenting3contentarea";
import { Redirect } from 'react-router';
import {HttpUtils} from "../../Services/HttpUtils";

class DetailRoommates extends Component{
    constructor(props){
        super()
        this.state = {
            isData: true,
            data: {}
        }
    }

    componentDidMount(){
        window.scrollTo(0,0);
        let data = this.props.location.state;
        if(data === undefined){
            this.setState({
                isData: false
            })
        }else {
            this.getProfile(data)
        }
    }

    async getProfile(data){
        let req = await HttpUtils.get('getprofile?profileId=' + data.profileId)
        let allData = {...data, ...{userImage: req.content ? req.content.imageurl : ''}}
        this.setState({
            isData : true,
            data : allData
        })
    }

    render(){
        const { isData, data } = this.state;
        const hide = true;

        if(!isData){
            return <Redirect to='/' />
        }

        return(
            <div>
                <span>
                    <div className ="" style={{"backgroundImage":"url('../images/bgc-images/busnes-listing.png')", marginTop : "-20px",backgroundSize: 'cover'}}>
                        <div className="background-image">
                            <Headermenu/>
                            <Slider mainH1="Explore Homes" mainH2="Find Your Perfect Match" hide={hide}/>
                        </div>
                    </div>
                </span> 
                <div className="">
                    {!!data && <Roomrentingthreecontentarea data={data} {...this.props}/>}
                </div>
                <div>
                    <Footer/>
                </div>
            </div>
        )
    }
}

export default DetailRoommates;
