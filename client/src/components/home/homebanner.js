import React, { Component } from 'react';
import './homebanner.css';
import { Link } from "react-router-dom";
import BannerInside from './bannerinside';

class HomeBanner extends Component{
    render() {
        return (
            <div className="container" style={{width:"100%", padding:'0', position:"relative", top:"-100px"}}>
                <div className="homebanneropa">
                    <img src="./images/home-banner.jpg" alt="" style={{width: "100%", height:"475px"}}/>
                </div>
                <BannerInside/>
                
            </div>
        )
    } 
    
}

export default HomeBanner;