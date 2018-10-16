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
                              <button type="button" className="btn2 btn-success">Veiw More</button>
                            <div className="button2">
                              <button type="button" className="btn2 btn-success">Apply Now</button>
                            </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

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
                              <button type="button" className="btn2 btn-success">Veiw More</button>
                            <div className="button2">
                              <button type="button" className="btn2 btn-success">Apply Now</button>
                            </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

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
                              <button type="button" className="btn2 btn-success">Veiw More</button>
                            <div className="button2">
                              <button type="button" className="btn2 btn-success">Apply Now</button>
                            </div>
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
