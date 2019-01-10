import React, { Component } from 'react';
import EHeader from '../entertainmenthome/entertainmentHeader';
import Footer from '../../footer/footer';
import MusicMenu from './MusicMenu';
import MusicFeatured from './MusicFeatured';
import AudioPlayer from './audioplayer';


class EntMusic extends Component {
  render(){
    return(
      <div className="">
        <EHeader/>
        <div style={{backgroundColor:"#032a30",width:"100%",height:"67px",marginTop:"-20px"}}>
        </div>
        <div className="container" style={{width:"80%", marginTop:"45px"}}>
          <div className="row" style={{padding:"0px"}}>
            <div className="col-md-3">
              <MusicMenu />
            </div>
            <div className="col-md-9">
              <MusicFeatured/>
            </div>
            <AudioPlayer/>
          </div>
        </div>
        <Footer/>
      </div>
    )
  }
}

export default EntMusic;
