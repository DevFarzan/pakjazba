import React, { Component } from 'react';
import Footer from '../footer/footer';
import { HttpUtils } from "../../Services/HttpUtils";
import CarouselHome from './carouselHome';
import SecondfoldCard from './secondfold_card';
import { isMobile, isTablet } from 'react-device-detect';
import './homePage.css';
import HomeBanner from './homebanner';
import HeaderMenu from '../header/headermenu';
// import { Link } from "react-router-dom";
// import { Carousel, Icon } from 'antd';
// import Burgermenu from '../header/burgermenu';
// //import {HttpUtils} from "../../Services/HttpUtils";
// import { connect } from 'react-redux';
// import BannerHome from './bannerHome';
// import SliderHome from './sliderHome';
// import Burgermenu

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            business: [],
            roomRenting: [],
            buySell: [],
            jobPortal: [],
            event: [],
            ecommerce: [],
        };

    }


    componentDidMount() {
        this.marketplace();
    }

    async marketplace() {
        let req = await HttpUtils.get('marketplace');
        if (req && req.code && req.code == 200) {
            let res = await HttpUtils.get('getreviews'),
                business = [],
                roomRenting = [];
            if (res && res.code && res.code == 200) {
                business = this.addingStarProp(req.business, res.content);
                roomRenting = this.addingStarProp(req.roomrentsdata, res.content);
            }
            this.setState({
                business,
                buySell: req.busell,
                roomRenting,
                jobPortal: req.jobPortalData,
                event: req.eventPortalData,
                ecommerce: req.ecommerce,
            })
        }
    }

    addingStarProp(arrforLoop, rateArr) {
        return arrforLoop && arrforLoop.map((elem) => {
            let rate = 0,
                len = 0;
            rateArr && rateArr.map((el) => {
                if (elem._id == el.objid) {
                    rate += el.star ? +el.star : 0;
                    len++
                }
            })
            let star = rate / len;
            if (rate > 0 && len > 0) {
                return { ...elem, ...{ star: star.toFixed(1) } };
            }
            return { ...elem, ...{ star: 0 } };
        });
    }

    render() {
        const { business, roomRenting, buySell, jobPortal, event, ecommerce } = this.state

        return (
            <div className="">
                <div className="visible-xs" style={{ marginTop: '0', backgroundColor: "#33333354", backgroundSize: 'cover', zIndex: "999", width: "100%", position: "fixed" }}>
                    <div className="background-image">
                        <HeaderMenu />
                    </div>
                </div>
                <div className="hidden-xs hidden-sm" style={{ marginTop: '86px', backgroundSize: 'cover' }}>
                    <div className="background-image">
                        <HeaderMenu />
                    </div>
                </div>
                <HomeBanner />
                <div>
                    <SecondfoldCard />
                    <hr className="hr4homedivide" />
                </div>
                <div className="container" style={isMobile && !isTablet ? { width: '100%', marginTop: '0' } : { width: "80%", marginTop: '70px' }}>


                    <div className="">
                        <h2 className="headingtext"> Businessess we recommend you to visit </h2>
                        <h4 className="headingtexth4">Handpicked business by our team</h4>

                        <div style={{ marginTop: '80px' }}>
                            <CarouselHome data={business} detail="businessData" />
                        </div>
                        <hr className="hr4homedivide" />
                    </div>
                    <div className="">
                        <h2 className="headingtext4home"> Room Renting </h2>
                        <h4 className="headingtexth4">Handpicked Rooms by our team</h4>
                        <div style={{ marginTop: '80px' }}>
                            <CarouselHome data={roomRenting} detail='roomRentData' />
                        </div>
                        <hr className="hr4homedivide" />
                    </div>
                    <div className="">
                        <h2 className="headingtext4home"> Job Listing </h2>
                        <h4 className="headingtexth4">Featured Jobs for your carier</h4>
                        <div style={{ marginTop: '80px' }}>
                            <CarouselHome data={jobPortal} detail='jobListData' />
                        </div>
                        <hr className="hr4homedivide" />
                    </div>
                    <div className="">
                        <h2 className="headingtext4home">Buy & Sell </h2>
                        <h4 className="headingtexth4">Handpicked Products to Buy</h4>
                        <div style={{ marginTop: '80px' }}>
                            <CarouselHome data={buySell} detail='buySellData' />
                        </div>
                        <hr className="hr4homedivide" />
                    </div>
                    <div className="">
                        <h2 className="headingtext4home"> Events </h2>
                        <h4 className="headingtexth4">Handpicked Events For You</h4>
                        <div style={{ marginTop: '80px' }}>
                            <CarouselHome data={event} detail='eventPortalData' />
                        </div>
                    </div>
                    <div className="">
                        <h2 className="headingtext4home"> Ecommerce </h2>
                        <h4 className="headingtexth4">Handpicked Products by our team</h4>
                        <div style={{ marginTop: '80px' }}>
                            <CarouselHome data={ecommerce} detail='ecommerce' />
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default HomePage;
