import React, { Component } from 'react';
import Burgermenu from '../header/burgermenu';
import ProfileSidebar from './sideBarprofile';
import ProfileDetail from './profileDetail';
import ProfileTabs from './profileTabs';
import Footer from '../footer/footer';


class ProfileMain extends Component{
  state = {
      id: 'id',
      listing: []
  }

  onChange = e => {
    console.log(e, 'hellooooooooooooo')
    this.setState({ listing: ''})
  }

  render(){
    return(
      <div>
        <div className ="" style={{"background":"#d8e7e4",marginTop:'86px',backgroundSize: 'cover'}}>
            <div className="background-image">
                <Burgermenu/>

            </div>
        </div>
        <div className="container" style={{width:"80%"}}>
          <div className="row">
              <h2 style={{textAlign:"center", fontWeight:"bold"}}> Your Profile</h2>
            <div className="col-md-3">
              <ProfileSidebar onChange={this.onChange}/>
            </div>
            <div className="col-md-9">
              <ProfileDetail/>
              <ProfileTabs data={this.state.id}/>
            </div>
          </div>
        </div>

            <Footer/>
      </div>
    )
  }
}


export default ProfileMain;
