import React, { Component } from 'react';
import './profileBanner.css'
import { isMobile, isTablet, isBrowser } from 'react-device-detect';


class ProfileBanner extends Component {
    render(){
        return(
            <div className="">
                <div className="profileBanner">
                    <img alt='' src='/images/ecommerce/images.jpg' style={{width: "100%", height: '450px'}}/>
                </div>
            </div>
        )
    }
}

export default ProfileBanner;