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
        const { shopData, allProducts } = this.props;
        return (
            <div>
                <div>
                    <ProfileBanner shopData={shopData} />
                </div>
                <div style={{ marginTop: '-2%' }}>
                    <ProfileCarousel data={allProducts} />
                </div>
                <div>
                    <ProfileCatologe shopData={shopData} />
                </div>
            </div>
        )
    }
}

export default ProfileHome;