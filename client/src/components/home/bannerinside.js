import React, { Component } from 'react';
import './homebanner.css';
import BannerTabs from './bannertabs/banner-tabs';
// import { Link } from "react-router-dom";
// import { Select, Input, Icon } from 'antd';


class BannerInside extends Component {

    render() {
        return (
            <div className="container">
                <div className="onbanner">
                    <h2>Discover great places</h2>
                    <h4>Find awesome places, bars, restaurants and activities and online stores</h4>
                    <BannerTabs />
                </div>
            </div>
        )
    }
}

export default BannerInside;