import React, { Component } from 'react';
import Burgermenu from '../header/burgermenu';
import ProfileSidebar from './sideBarprofile';
import ProfileDetail from './profileDetail';
import ProfileTabs from './profileTabs';
import Footer from '../footer/footer';
import AsyncStorage from "@callstack/async-storage";
import {HttpUtils} from "../../Services/HttpUtils";

class ProfileMain extends Component{
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            location: '',
            description: '',
            phone: '',
            twitterlink: '',
            facebooklink: '',
            imageurl: '',
            userId: '',
            profileId: '',
            listing: '',
            reviewProfile: false,
            compareId: ''
        }
    }

    async componentDidMount(){
        const { userId, profileId } = this.props.allArr.userDetail;
        if(userId && profileId){
            this.getprofileData(profileId);
            let obj = await this.handleLocalStorage(profileId);
            this.setState({ userId, profileId });
        }else {
            this.handleLocalStorage();
        }
    }

    handleLocalStorage = (id) =>{
        AsyncStorage.getItem('user')
        .then((obj) => {
            let userObj = JSON.parse(obj)
            if(!!userObj && id === undefined) {
                this.getprofileData(userObj.profileId);
                this.setState({
                    userId: userObj._id,
                    profileId: userObj.profileId
                })
            }
            if(!!userObj && id !== undefined){
                let reviewProfile = id === userObj.profileId ? false : true;
                this.setState({ reviewProfile });
            }
        })
    }

    async getprofileData(profileId){
        let req = await HttpUtils.get('getprofile?profileId=' + profileId);
        if(req && req.code && req.code === 200){
            for(var elem in req.content){
                this.setState({ [elem]: req.content[elem] });
            }
        }
    }

    onChange = e => {
      this.setState({ listing: e})
    }

    callPublicSection = e => {
        this.props.callPublicSection();
    }

    render(){
      const { userId, name, email, location, description, phone, facebooklink, twitterlink, imageurl, listing, reviewProfile, compareId } = this.state,
      profileDetail = {
          name, location, facebooklink, twitterlink, imageurl, description, reviewProfile
      },
      profileTab = {
        email, phone
      };

      return(
        <div>
          <div className ="" style={{"background":"#d8e7e4",backgroundSize: 'cover'}}>
              <div className="background-image">
                  <Burgermenu/>

              </div>
          </div>
          <div className="container" style={{width:"80%"}}>
            <div className="row" style={{marginTop:'-15%'}}>
                <h2 style={{textAlign:"center", fontWeight:"bold"}}> Your Profile</h2>
              <div className="col-md-3">
                <ProfileSidebar onChange={this.onChange}/>
              </div>
              <div className="col-md-9">
                <ProfileDetail profileDetail={profileDetail} callPublicSection={this.callPublicSection}/>
                <ProfileTabs profileTabData={{...profileTab, userId, listing}}/>
              </div>
            </div>
          </div>

              <Footer/>
        </div>
      )
    }
}


export default ProfileMain;
