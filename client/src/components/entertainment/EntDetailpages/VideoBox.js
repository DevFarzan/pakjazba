import React, { Component } from 'react';
import VideoDetail from './VideoDetail';
import EHeader from '../entertainmenthome/entertainmentHeader';
import Footer from '../../footer/footer';
import LatestNews from '../entertainmenthome/LatestnewsSec';

class VideoBox extends Component{
  render(){
    return(
      <div className="">
        <EHeader/>
        <div className="container" style={{width:"100%", marginTop:"40px"}}>
          <div>
            <VideoDetail/>
          </div>
        </div>
        <Footer/>
      </div>
    )
  }
}

export default VideoBox;
