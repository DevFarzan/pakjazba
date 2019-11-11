import React, { Component } from 'react';
import { Carousel } from 'antd';
import './slider.css';

class DetailSliders extends Component {
  render() {
    return (
      /* Include the above in your HEAD tag */
      <div className="eslidercontainer">
        <h3 style={{ fontWeight: "bold", fontFamily: 'Crimson Text, sans-serif', marginTop: '11px', marginLeft: "20px" }}>Gallery</h3>
        <div className="container" style={{ marginLeft: "10px", width: "100%", }}>
          <div className="col-md-10">
            <Carousel autoplay>
              <div>
                <img src="../images/blog1.jpg" style={{ width: "100%", height: "400px" }} />
              </div>
              <div><img src="../images/black.jpg" alt='img' style={{ width: "100%", height: "400px" }} /></div>
              <div><img src="../images/blog.jpg" alt='img' style={{ width: "100%", height: "400px" }} /></div>
              <div><img src="../images/blog1.jpg" alt='img' style={{ width: "100%", height: "400px" }} /></div>
            </Carousel>
          </div>
        </div>
      </div>
    )
  }
}

export default DetailSliders;
