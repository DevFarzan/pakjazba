import React, { Component } from 'react';
import Buydetailfirstfold  from './buydetail/buydetailfirstfold'
import { Redirect } from 'react-router';
import HeaderMenu from '../header/headermenu';
import Footer from '../footer/footer';
import {HttpUtils} from "../../Services/HttpUtils";

class DetailBuySell extends Component{
    constructor(props){
        super(props)
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
                isData: true
            })
        }else {
            this.getProfile(data)
        }
    }

    async getProfile(data){
        let _id = data.profileid ? data.profileid : data.profileId ? data.profileId : '';
        let req = await HttpUtils.get('getprofile?profileId=' + _id);
        let allData = {...data, ...{userImage: req ? req.content.imageurl : ''}}
        this.setState({
            isData : true,
            data : allData
        })
    }

    render(){
        const {isData, data } = this.state;

        if(!isData){
            return <Redirect to='/detail_buySell' />
        }
       
        return(
            <div>
                <span>
                    <div className ="" style={{"backgroundImage":"url('../images/bgc-images/buy-sell.png')", marginTop : "-20px",backgroundSize: 'cover'}}>
                        <div className="background-image">
                            <HeaderMenu/>
                            {/*<Slider mainH1="Buy & Sell" mainH2="Find what you need"/>*/}
                        </div>
                    </div>
                </span>
                <div className="hidden-xs">
                  <div className='container' style={{width:"60%",textAlign:'center', marginTop:"15px"}}>
                      <Buydetailfirstfold data={data}/>
                  </div>
                </div>
                <div className="visible-xs">
                  <div className='container' style={{width:"100%",textAlign:'center'}}>
                      {/* <Buydetailfirstfold data={data}/> */}
                  </div>
                </div>

                <Footer />
            </div>
        )
    }
}

export default DetailBuySell;
