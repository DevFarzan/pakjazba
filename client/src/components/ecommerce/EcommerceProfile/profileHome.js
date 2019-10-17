import React, { Component } from 'react';
import Burgermenu from '../../header/burgermenu';
import Footer from '../../footer/footer';
import ProfileCatologe from './profileCataloge';
import ProfileCarousel from './profileCarousel';
import ProfileBanner from './profileBanner';

class ProfileHome extends Component {
    render(){
        return(
            <div className="">
                <div>
                    <ProfileBanner/>
                </div>
                <div>
                    <ProfileCarousel/>
                </div>
                <div>
                    <ProfileCatologe/>
                </div>
            </div>
        )
    }
}

export default ProfileHome;