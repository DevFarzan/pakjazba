import React, { Component } from 'react';

class JobDetail extends Component{
  render(){
    return(
      <div>
          <span className="background_listing">
            <App/>
          </span>
          <div className="">
              <div className="col-md-12 col-sm-12 col-xs-12">
                  <div className="col-md-4 col-sm-4 col-xs-12">
                      <div className="col-lg-2 col-md-2 col-sm-12 " >
                      </div>
                      <div className="row">
                          <div className="col-lg-10 col-md-10 col-sm-12 " >
                          {/*Start first tile */}
                          <div className="card outset" >
                              <img className="card-img-top" src={images && images[0]} alt="" style={{"width":"100%"}} />
                              <div className="card-body space" style={{padding: "17px"}}>
                                  <h5><span className="glyphicon glyphicon-home" style={{marginRight: "15px"}}></span><span style={{color: "rgba(0, 0, 0, 0.65)"}}>{data.businessaddress}</span></h5>
                                  <hr/>
                                  <h5><span className="glyphicon glyphicon-phone" style={{marginRight: "15px"}}></span><span style={{color: "rgba(0, 0, 0, 0.65)"}}>{data.businessnumber}</span></h5>
                                  <hr/>
                                  <h5><span className="glyphicon glyphicon-globe" style={{marginRight: "15px"}}></span><span style={{color: "rgba(0, 0, 0, 0.65)"}}>{data.businessemail}</span></h5>
                                  <br/>
                                  <h4>Our Social</h4>
                                  <a href={data.socialFaceBook} target="_blank" style={{marginRight: "12px"}}><button type="button" className="btn btn-fb"><i className="fa fa-facebook"></i></button></a>
                                  <a href={data.socialLinkIn} target="_blank" style={{marginRight: "12px"}}><button type="button" className="btn btn-linkedin"><i className="fa fa-linkedin"></i></button></a>
                                  <a href={data.socialGoogle} target="_blank" style={{marginRight: "12px"}}><button type="button" className="btn btn-gplus"><i className="fa fa-google-plus"></i></button></a>
                                  <br/><br/>
                              </div>
                          </div>
                          {/*End first tile */}
                      </div>
                  </div>
    )
  }
}

export default JobDetail;
