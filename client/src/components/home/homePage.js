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
    console.log(marketPlace,'marrrkkettttpppp');
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
        <div className ="vissible-xs" style={{marginTop:'-19px',backgroundSize: 'cover'}}>
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
                 <h4 className="headingtext"> Business Listing </h4>
                 <CarouselHome data={business}/>
               </div>
              <div className="">
               <h4 className="headingtext"> Room Renting </h4>
               <CarouselHome  data={roomRenting}/>
               </div>

              <div className="">
                <h4 className="headingtext"> Job Listing </h4>
                <CarouselHome  data={jobPortal}/>
              </div>

              <div className="">
                <h4 className="headingtext">Buy & Sell </h4>
                <CarouselHome  data={buySell}/>
              </div>

              <div className="">
                <h4 className="headingtext"> Events </h4>
                 <CarouselHome  data={event}/>
              </div>

            </div>
            <Footer/>
      </div>
    )
  }
}

export default HomePage;
