import React, { Component } from 'react';
import './videodetail.css';
import LatestNews from '../entertainmenthome/LatestnewsSec';
import { Rate } from 'antd';

class VideoDetail extends Component{
  render(){
    return(
      <div className="container" style={{width:"75%", marginTop:"20px"}}>
        <div className="row">
          <div className="col-md-8">
            <div className="videoheading">
              <h6> DRAMA</h6>
              <h4 className="h4"> Watch Mr Shamim Epidose 1- 120 | Hum Tv first stream | Hum Tv Dramas Online </h4>
              <div className="videotag">
                <iframe frameborder="0" width="100%" height="400" src="https://www.dailymotion.com/embed/video/x4miycb" allowfullscreen allow="autoplay"></iframe>
                <div>
                  <a class="socialbox facebook" href="https://www.facebook.com/cghubs">
                    <div class="social-icon">
                      <i class="fa fa-fw fa-facebook"></i>
                    </div>
                    <div class="description">
                      <span class="ng-binding-shares"></span>
                      <span class="ng-binding-likes"></span>
                      <span>Like us on Facebook!</span>
                    </div>
                  </a>
                  <a class="socialbox twitter" href="https://twitter.com/cghubs">
                    <div class="social-icon">
                      <i class="fa fa-fw fa-twitter"></i>
                    </div>
                    <div class="description">
                      <span class="ng-binding"></span>
                      <span>Follow us on Twitter!</span>
                    </div>
                  </a>
                </div>
                <div class="videoheading">
                  <h4 className="h4"> Watch On Youtube </h4>
                  <p className="precomend">RECOMMENDED FOR YOU</p>
                  <div className="row" style={{padding:"0px"}}>
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
                  <div className="row" style={{padding:"0px"}}>
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
                </div>
                <div>
                  <div class="row">
                    <span><Rate allowHalf defaultValue={2.5} />Rate This </span>
                    <h4> Comments </h4>
                    <p> 0 Comments </p>
                    <div className="col-md-2">
                      <img src="images/images.jpg"/>
                    </div>
                    <div className="col-md-10 col-sm-6 col-sm-offset-3">
                        <div id="imaginary_container">
                            <div class="input-group stylish-input-group">
                                <input type="text" class="form-control"  placeholder="Add a comment" />
                                <span class="input-group-addon">
                                  <div className="text-center text-md-left">
                                      <a className="btn button_custom" style={{width:"110%"}}>Send</a>
                                  </div>
                                </span>
                            </div>
                        </div>
                    </div>
            	    </div>
                </div>
                <div class="videoheading">
                  <p className="precomend">More from Dramas</p>
                  <div className="row" style={{padding:"0px"}}>
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

                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <LatestNews/>
          </div>
        </div>
      </div>

    )
  }
}

export default VideoDetail;
