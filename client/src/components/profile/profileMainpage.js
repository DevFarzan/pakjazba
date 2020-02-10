import React, { Component } from 'react';
import HeaderMenu from '../header/headermenu';
import ProfileDetail from './profileDetail';
import ProfileContactDisplay from './profileContactDisplay';
import TestComponent from './testComponent';
import { isMobile,  } from 'react-device-detect';

class ProfileMain extends Component {
    constructor(props) {
        super(props)
    }

    callPublicSection = e => {
        this.props.callPublicSection();
    }

    render() {
        const { allArr } = this.props;
        let profileDetail = {
            name: allArr.arr6.name,
            imageurl: allArr.arr6.imageUrl,
            description: allArr.arr6.description,
            reviewProfile:allArr.arr6.reviewProfile
        }
        let profileTab = {
            email: allArr.arr6.email,
            phone: allArr.arr6.phone,
            facebooklink: allArr.arr6.facebook,
            twitterlink: allArr.arr6.twitter,
        };
        return (
            <div>
                <div className="" style={{ backgroundColor: "#d8e7e4", backgroundSize: 'cover' }}>
                    <div className="">
                        <HeaderMenu />

                    </div>
                </div>
                <div className="container" style={isMobile ? { width: "100%", marginTop: "10px", marginLeft: "0", marginRight: "0", padding: "0" } : { width: "85%", marginTop: "10px" }}>
                    <div className="row">
                        <h2 style={{ textAlign: "center", fontWeight: "bold" }}> Your Profile</h2>
                        <div className="col-md-12">
                            <ProfileDetail profileDetail={{ profileDetail }} callPublicSection={this.callPublicSection} />
                            <ProfileContactDisplay profileTabData={{ ...profileTab }} />
                        </div>
                        
                    </div>
                </div>
                <div className="col-md-12" style={{background: '#f6f6f6'}}>
                    <div className="container">
                        <TestComponent listing={allArr} />
                    </div>
                </div>
            </div>
        )
    }
}


export default ProfileMain;
