import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Footer from '../footer/footer'
import Burgermenu from '../header/burgermenu';
import {HttpUtils} from "../../Services/HttpUtils";
import { connect } from 'react-redux';
import BannerHome from './bannerHome';
import SliderHome from './sliderHome';
import CarouselHome from './carouselHome';
import './homePage.css';


class HomePage extends Component{
  render(){
    return(
      <div className="">
        <div className ="vissible-xs" style={{marginTop:'0',backgroundSize: 'cover'}}>
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
                <CarouselHome/>
              </div>
              <div className="">
                <h4 className="headingtext"> Room Renting </h4>
                <CarouselHome/>
              </div>
              <div className="">
                <h4 className="headingtext"> Job Listing </h4>
                <CarouselHome/>
              </div>
              <div className="">
                <h4 className="headingtext"> Events </h4>
                <CarouselHome/>
              </div>
              <div className="">
                <h4 className="headingtext"> Entertainment </h4>
                <CarouselHome/>
              </div>
            </div>
            <Footer/>
      </div>
    )
  }
}

export default HomePage;
