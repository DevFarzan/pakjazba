import React, { Component } from 'react';
import './LatestStories.css';
import LatestNews from './LatestnewsSec';

class Stories extends Component{
  render(){
    return(
      <div className="container" style={{width:"75%", marginTop:"-20px"}}>
        <div className="row">
          <div className="col-md-8">
            <div className="row" style={{padding:"0px"}}>
              <h4><strong> LATEST SPORTS </strong></h4>
              <div className="col-md-4 col-sm-4">
                <iframe frameborder="0" width="100%" height="130" src="https://www.dailymotion.com/embed/video/x706nkx" allowfullscreen allow="autoplay"></iframe>
                <p> The one you and And the One Is the Only one </p>
              </div>
              <div className="col-md-4 col-sm-4">
                <iframe frameborder="0" width="100%" height="130" src="https://www.dailymotion.com/embed/video/x6yugal" allowfullscreen allow="autoplay"></iframe>
                <p> The one you and And the One Is the Only one </p>
              </div>
              <div className="col-md-4 col-sm-4">
                <iframe frameborder="0" width="100%" height="130" src="https://www.dailymotion.com/embed/video/x6tjdhx" allowfullscreen allow="autoplay"></iframe>
                <p> The one you and And the One Is the Only one </p>
              </div>
            </div>
            <hr style={{margin:"0px"}}/>


            <div className="row" style={{padding:"0px"}}>
            <h4><strong> LATEST DRAMA </strong></h4>
              <div className="col-md-4 col-sm-4">
                <iframe width="100%" height="130" src="https://www.youtube.com/embed/oewZnJX3er0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <p> The one you and And the One Is the Only one </p>
              </div>
              <div className="col-md-4 col-sm-4">
                <iframe width="100%" height="130" src="https://www.youtube.com/embed/0c6N052SMuY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <p> The one you and And the One Is the Only one </p>
              </div>
              <div className="col-md-4 col-sm-4">
                <iframe width="100%" height="130" src="https://www.youtube.com/embed/vHdwv7NqLs0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <p> The one you and And the One Is the Only one </p>
              </div>
            </div>
            <hr style={{margin:"0px"}}/>

            <div className="row" style={{padding:"0px"}}>
              <h4><strong> LATEST MOVIES </strong></h4>
              <div className="col-md-4 col-sm-4">
                <iframe width="100%" height="130" src="https://www.youtube.com/embed/NJyrtxVkc3M" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <p> The one you and And the One Is the Only one </p>
              </div>
              <div className="col-md-4 col-sm-4">
                <iframe width="100%" height="130" src="https://www.youtube.com/embed/aVtcbm90mnQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <p> The one you and And the One Is the Only one </p>
              </div>
              <div className="col-md-4 col-sm-4">
                <iframe width="100%" height="130" src="https://www.youtube.com/embed/LAYgZEMMWxo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <p> The one you and And the One Is the Only one </p>
              </div>
            </div>
            <hr style={{margin:"0px"}}/>


            <div className="row" style={{padding:"0px"}}>
              <h4><strong> LATEST MUSIC </strong></h4>
              <div className="col-md-4 col-sm-4">
                <img src="images/images (3).jpg"/>
                <p> The one you and And the One Is the Only one </p>
              </div>
              <div className="col-md-4 col-sm-4">
                <img src="images/images (3).jpg"/>
                <p> The one you and And the One Is the Only one </p>
              </div>
              <div className="col-md-4 col-sm-4">
                <img src="images/images (3).jpg"/>
                <p> The one you and And the One Is the Only one </p>
              </div>
            </div>
            <hr style={{margin:"0px"}}/>
          </div>

          <div className="col-md-4">
            <LatestNews/>
          </div>
        </div>
      </div>
    )
  }
}

export default Stories;
