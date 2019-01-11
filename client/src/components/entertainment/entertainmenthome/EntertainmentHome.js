import React, { Component } from 'react';
import EHeader from './entertainmentHeader';
import Footer from '../../footer/footer';
import Slider from '../../header/Slider';
import './entertainmenthome.css';
import EntSlider from './EntSlider';
import Stories from './LatestStories';

class EntertainmentHome extends Component{
  render(){
    return(
      <div className="">
        <EHeader/>
        <div style={{backgroundColor:"#032a30",width:"100%",height:"67px",marginTop:"-20px"}}>
        </div>
        <div>
          <EntSlider/>
          <Stories/>
        </div>
        <Footer/>
      </div>


    )
  }
};

export default EntertainmentHome;
