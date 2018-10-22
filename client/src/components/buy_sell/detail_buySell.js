import React, { Component } from 'react';
import Buydetailfirstfold from './buydetail/buydetailfirstfold'
import Buydetailsecondfold from './buydetail/buydetailsecondfold'
import { Redirect } from 'react-router';
import App from "../../App";
import Footer from '../footer/footer';
import {HttpUtils} from "../../Services/HttpUtils";

class DetailBuySell extends Component{
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
        let _id = data.profileid ? data.profileid : '';
        let req = await HttpUtils.get('getprofile?profileId=' + _id);
        let allData = {...data, ...{userImage: req ? req.content.imageurl : ''}}
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
                <div className="background_listing">
                	<App/>
                </div>
                <div className='container' style={{width:"80%"}}>
                    <Buydetailfirstfold data={data}/>
                    <Buydetailsecondfold data={data}/>
                </div>
                <Footer />
            </div>
        )
    }
}

export default DetailBuySell;
