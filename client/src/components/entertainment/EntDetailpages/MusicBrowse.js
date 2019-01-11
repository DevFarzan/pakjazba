import React, { Component } from 'react';
import EHeader from '../entertainmenthome/entertainmentHeader';
import Footer from '../../footer/footer';
import MusicMenu from '../entertainmentPages/MusicMenu';
import AudioPlayer from '../entertainmentPages/audioplayer';
import MusicCategory from './MusicCat';

class MusicBrowse extends Component{
  render(){
    return(
      <div className="">
        <EHeader/>
        <div style={{backgroundColor:"#032a30",width:"100%",height:"67px",marginTop:"-20px"}}>
        </div>
        <div className="container" style={{width:"80%", marginTop:"45px"}}>
          <div className="row" style={{padding:"0px", marginTop:"10px"}}>
            <div className="col-md-3">
              <MusicMenu />
            </div>
            <div className="col-md-9">
            <MusicCategory/>
            </div>
            <AudioPlayer/>
          </div>
        </div>
        <Footer/>
      </div>
    )
  }
}
export default MusicBrowse;
