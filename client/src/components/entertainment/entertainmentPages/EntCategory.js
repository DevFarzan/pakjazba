import React, { Component } from 'react';
import EntSlider from '../entertainmenthome/EntSlider';
import EHeader from '../entertainmenthome/entertainmentHeader';
import DramaSection from './CategorySelect';


class EntCategory extends Component{
  render(){
    return(
      <div className="">
        <EHeader/>
        <div style={{backgroundColor:"#032a30",width:"100%",height:"67px",marginTop:"-20px"}}>
        </div>
        <div>
          <EntSlider/>
          <DramaSection/>
        </div>
      </div>

    )
  }
}

export default EntCategory;
