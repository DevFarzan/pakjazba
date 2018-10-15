import React, { Component } from 'react';
import './featureJob.css';

class FeaturedBox extends Component{
  render(){
    return(
      <div>
        <h2 style={{textAlign:"center", fontWeight:"bold", marginTop:"20px"}}>Featured Jobs </h2>
        <div className="row">
          <div className="col-md-4">
              <div className="featuredbox">
                  <div className="featuredbox-content featuredjob-box">
                      <div className="featuredjob-imitation">
                      <div className="card2">
                        <img alt='' src='./images/job-category.jpeg'/>
                      </div>
                      </div>
                      <div className="customjob-margin">
                          <h4> IT Person Needed </h4>
                          <i className="glyphicon glyphicon-star"/>
                          <p className="textforjob">Full Time</p>
                        <div className="glyphicom">
                          <i className="glyphicon glyphicon-map-marker"/>
                          <p className="textforjob">California</p>
                        </div>
                      </div>

                      <div className="jobdetail-desc">
                          <div> </div>
                          <div className="small m-t-xs">
                              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                          </div>
                          <div className="m-t text-righ">
                              <a href="#" className="btn btn-xs btn-outline btn-primary">Info <i className="fa fa-long-arrow-right"></i> </a>
                                <a href="#" className="btn btn-xs btn-outline btn-primary">Info <i className="fa fa-long-arrow-right"></i> </a>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
        </div>
      </div>

    )
  }
}

export default FeaturedBox;
