import React, { Component } from 'react';
import { Carousel } from 'antd';
import './sliderHome.css'

class SliderHome extends Component{
  render(){
    return(
      <div style={{width:'97%',paddingLeft:'32px',paddingRight:'3px'}}>
          <Carousel autoplay>
            <div>
              <h3>About Pak Jazba</h3>
              <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry.
               Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
               when an unknown printer took a galley of type and scrambled it to make a type specimen book.
               It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
            </div>

            <div>
              <h3>More Pak Jazba</h3>
              <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry.
               Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
               when an unknown printer took a galley of type and scrambled it to make a type specimen book.
               It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
            </div>

            <div>
              <h3>3rd Slider</h3>
              <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry.
               Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
               when an unknown printer took a galley of type and scrambled it to make a type specimen book.
               It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
            </div>

            <div>
              <h3>4th Slider</h3>
              <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry.
               Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
               when an unknown printer took a galley of type and scrambled it to make a type specimen book.
               It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
            </div>
          </Carousel>
      </div>
    )
  }
}

export default SliderHome;
