import React, { Component } from 'react';
import Burgermenu from '../../header/burgermenu';
import Footer from '../../footer/footer';
import ProfileCatologe from './profileCataloge';
import ProfileCarousel from './profileCarousel';
import ProfileBanner from './profileBanner';

class ProfileHome extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { obj } = this.props;
        console.log(obj, 'obj')

        return (
            <div className="">
                <div>
                    <ProfileBanner obj={obj}/>
                </div>
                <div>
                    <ProfileCarousel />
                </div>
                <div>
                    <ProfileCatologe obj={obj}/>
                </div>
            </div>
        )
    }
}

export default ProfileHome;