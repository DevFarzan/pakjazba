import React, { Component } from 'react';
import './Thirdrow.css';

class Thirdrow extends Component{
  render(){
    return(
      <div className="container" style={{width:"90%"}}>
        <div className="row">
          <div className="col-md-4 col-sm-12 col-xs-12 des-space">
            <span className="featurejob-box">
              <h4 className="margin-thirdrow font-style"> Featured Jobs </h4>
                <div className="col-md-12" style={{paddingTop:"4px", paddingBottom:"10px"}}>
                    <div className="col-md-4">
                        <img alt='' src="./images/data/589b2d33280000c63a997990.jpeg" width="100%" />
                    </div>
                    <div className="col-md-8">
                        <h5 className="font-style"><b>IT Person Needed</b></h5>
                        <br/>
                        <div className="jobfeature-margin">
                            <h4 className="heading-wight"></h4>
                            <i className="glyphicon glyphicon-star"/>
                            <p className="textforjob font-style">Full Time</p>
                            <div className="glyphicom" style={{marginLeft:"11px"}}>
                                <i className="glyphicon glyphicon-map-marker"/>
                                <p className="textforjob font-style">California</p>
                            </div>
                        </div>
                        <p className="font-style"> Lorem Ipsum has been the industrys standard dummy </p>
                    </div>

                    <div className="col-md-4">
                        <img alt='' src="./images/data/589b2d33280000c63a997990.jpeg" width="100%" />
                    </div>
                    <div className="col-md-8">
                        <h5 className="font-style"><b>IT Person Needed</b></h5>
                        <br/>
                        <div className="jobfeature-margin">
                            <h4 className="heading-wight"></h4>
                            <i className="glyphicon glyphicon-star"/>
                            <p className="textforjob font-style">Full Time</p>
                            <div className="glyphicom" style={{marginLeft:"11px"}}>
                                <i className="glyphicon glyphicon-map-marker"/>
                                <p className="textforjob font-style">California</p>
                            </div>
                        </div>
                        <p className="font-style"> Lorem Ipsum has been the industrys standard dummy </p>
                    </div>

                    <div className="col-md-4">
                        <img alt='' src="./images/data/589b2d33280000c63a997990.jpeg" width="100%" />
                    </div>
                    <div className="col-md-8">
                        <h5 className="font-style"><b>IT Person Needed</b></h5>
                        <br/>
                        <div className="jobfeature-margin">
                            <h4 className="heading-wight"></h4>
                            <i className="glyphicon glyphicon-star"/>
                            <p className="textforjob font-style">Full Time</p>
                            <div className="glyphicom" style={{marginLeft:"11px"}}>
                                <i className="glyphicon glyphicon-map-marker"/>
                                <p className="textforjob font-style">California</p>
                            </div>
                        </div>
                        <p className="font-style"> Lorem Ipsum has been the industrys standard dummy </p>
                    </div>

                    <div className="col-md-4">
                        <img alt='' src="./images/data/589b2d33280000c63a997990.jpeg" width="100%" />
                    </div>
                    <div className="col-md-8">
                        <h5 className="font-style"><b>IT Person Needed</b></h5>
                        <br/>
                        <div className="jobfeature-margin">
                            <h4 className="heading-wight"></h4>
                            <i className="glyphicon glyphicon-star"/>
                            <p className="textforjob font-style">Full Time</p>
                            <div className="glyphicom" style={{marginLeft:"11px"}}>
                                <i className="glyphicon glyphicon-map-marker"/>
                                <p className="textforjob font-style">California</p>
                            </div>
                        </div>
                        <p className="font-style"> Lorem Ipsum has been the industrys standard dummy </p>
                    </div>

                </div>
            </span>
          </div>

          <div className="col-md-8 col-sm-12 col-xs-12 des-space">
            <div className="row">
                <div className="card outset" style={{ boxShadow: "none", background: "#8080801f", marginTop:"-40px"}}>
                    <div className="card-body space">
                        <div className="row">
                            <div className="col-md-12 col-sm-12 col-xs-12">
                              <div className="col-md-6">
                                  <div className="md-form mb-0">
                                      <label className="font-style">First Name</label>
                                      <input type="text" id="name1" name="first name" className="form-background1"/>
                                  </div>
                              </div>
                              {/*Grid column*/}
                              {/*Grid column*/}
                              <div className="col-md-6">
                                  <div className="md-form mb-0">
                                      <label className="font-style">Last Name</label>
                                      <input type="text" id="name2" name="last name" className="form-background1"/>
                                  </div>
                              </div>

                              <div className="col-md-6">
                                  <div className="md-form mb-0">
                                      <label className="font-style">Your Email</label>

                                      <input type="text" id="email1" name="email" className="form-background1"/>
                                  </div>
                              </div>
                              {/*Grid column*/}
                              {/*Grid column*/}
                              <div className="col-md-6">
                                  <div className="md-form mb-0">
                                      <label className="font-style">Add Your CV</label>
                                      <div className="form-background">
                                          <a className="btn btn2-success"  style={{width: "45%"}}>Choose File</a>
                                      </div>
                                      <p className="font-style">Your CV must be a doc, pdf, docx and no bigger than 1 MB</p>
                                  </div>
                              </div>
                              <div className="row">
                                  {/*Grid column*/}
                                  <div className="col-md-12">
                                      <div className="md-form">
                                          <label className="font-style">Additional Information</label>
                                          <textarea type="text" id="message1" name="message"  className="form-background1" style={{height:"235px"}}></textarea>
                                      </div>

                                      <div className="form-background">
                                          <a className="btn btn2-success"  style={{width: "45%"}}>Submit Now</a>
                                      </div>
                                  </div>
                              </div>

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

export default Thirdrow;
