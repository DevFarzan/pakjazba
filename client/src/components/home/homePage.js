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
import { isMobile, isTablet, isBrowser } from 'react-device-detect';
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
      if(req && req.code && req.code == 200){
          let res = await HttpUtils.get('getreviews'),
          business = [],
          roomRenting = [];
          if(res && res.code && res.code == 200) {
              business = this.addingStarProp(req.business, res.content);
              roomRenting = this.addingStarProp(req.roomrentsdata, res.content);
          }
          this.setState({
              business,
              buySell:req.busell,
              roomRenting,
              jobPortal:req.jobPortalData,
              event:req.eventPortalData
          })
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
          })
          let star = rate / len;
          if(rate > 0 && len > 0){
              return {...elem, ...{star: star.toFixed(1)}};
          }
          return {...elem, ...{star: 0}};
      });
  }

  render(){
    const { business, roomRenting, buySell, jobPortal, event } = this.state

    
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
          <div className="container" style={isMobile && !isTablet ? {width: '92%'} : {width:"70%"}}>
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
