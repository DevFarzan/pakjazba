import React, { Component } from 'react';
import Burgermenu from '../header/burgermenu';
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
        let req = await HttpUtils.get('getprofile?profileId=' + data.profileid)
        let allData = {...data, ...{userImage: req.content ? req.content.imageurl : ''}}
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
                <div className="container" style={{"width":"90%"}}>
                    {!!data && <Roomrentingthreecontentarea data={data}/>}
                </div>
                <div>
                    <Footer/>
                </div>
            </div>
        )
    }
}

export default DetailRoommates;
