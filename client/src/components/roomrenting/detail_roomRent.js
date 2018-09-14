import React, { Component } from 'react';
import Burgermenu from '../header/burgermenu';
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
        var data = this.props.location.state;
        if(data === undefined){
            this.setState({
                isData: false
            })
        }else {
            this.getProfile(data)
        }
    }

    async getProfile(data){
        var req = await HttpUtils.get('getprofile?profileId=' + data.profileid)
        var allData = {...data, ...{userImage: req.content ? req.content.imageurl : ''}}
        this.setState({
            isData : true,
            data : allData
        })
    }

    render(){
        const { isData, data } = this.state;

        if(!isData){
            return <Redirect to='/' />
        }

        return(
            <div>
                <span className="background_listing">
                	<Burgermenu/>
                </span>
                {!!data && <Roomrentingthreecontentarea data={data}/>}
                DetailRoommates
            </div>
        )
    }
}

export default DetailRoommates;