import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Footer from '../footer/footer';
import { Carousel,Icon } from 'antd';
import Burgermenu from '../header/burgermenu';
//import {HttpUtils} from "../../Services/HttpUtils";
import { connect } from 'react-redux';
import BannerHome from './bannerHome';
import SliderHome from './sliderHome';
import {HttpUtils} from "../../Services/HttpUtils";
import CarouselHome from './carouselHome';
import './homePage.css';


class HomePage extends Component{
  constructor(props) {
      super(props);
      this.state = {
        business:[],
        roomRenting:[],
        buySell:[],
        jobPortal:[],
        event:[]
      };
  }


  componentDidMount(){
    this.marketplace();
  }
  async marketplace(){
    let req = await HttpUtils.get('marketplace');
    let marketPlace = req;
    this.setState({
      business:marketPlace.business,
      buySell:marketPlace.busell,
      roomRenting:marketPlace.roomrentsdata,
      jobPortal:marketPlace.jobPortalData,
      event:marketPlace.eventPortalData
    })
  }
  render(){
    const { business,roomRenting,buySell,jobPortal,event } = this.state

    return(
      <div className="">
        <div className="visible-xs" style={{marginTop:'-19px',backgroundSize: 'cover'}}>
            <div className="background-image">
                <Burgermenu/>
            </div>
        </div>
        <div className ="hidden-xs" style={{marginTop:'86px',backgroundSize: 'cover'}}>
            <div className="background-image">
                <Burgermenu/>
            </div>
        </div>
            <BannerHome/>
            <div className="container" style={{width:"70%"}}>
              <SliderHome/>
               <div  className="">
                 <h4 className="headingtext" style={{marginLeft:'-11px',marginTop:'-11%'}}> Business Listing </h4>
                  <hr />
                  <div style={{marginTop:'-5%'}}>
                    <CarouselHome data={business} detail="businessData"/>
                 </div>
               </div>
              <div className="">
               <h4 className="headingtext" style={{marginLeft:'-11px',marginTop:'-15px'}}> Room Renting </h4>
               <hr />
               <div style={{marginTop:'-2%'}}>
                  <CarouselHome data={roomRenting} detail='roomRentData'/>
                </div>
               </div>

              <div className="">
                <h4 className="headingtext" style={{marginLeft:'-11px',marginTop:'-4%'}}> Job Listing </h4>
                <hr/>
                <div style={{marginTop:'13px'}}>
                  <CarouselHome data={jobPortal} detail='jobListData'/>
                </div>
              </div>

              <div className="">
                <h4 className="headingtext" style={{marginLeft:'-11px',marginTop:'-4%'}}>Buy & Sell </h4>
                <hr/>
                <div style={{marginTop:'13px'}}>
                  <CarouselHome data={buySell} detail='buySellData'/>
                </div>
              </div>

              <div className="">
                <h4 className="headingtext" style={{marginLeft:'-11px',marginTop:'-4%'}}> Events </h4>
                <hr/>
                <div style={{marginTop:'-3%'}}>
                 <CarouselHome data={event} detail='eventPortalData'/>
                 </div>
              </div>

            </div>
            <Footer/>
      </div>
    )
  }
}

export default HomePage;
