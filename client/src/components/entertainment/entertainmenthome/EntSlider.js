import React, { Component } from 'react'
import './Entslider.css';

class EntSlider extends Component{
  render(){
    return(
      <div class="container" style={{width:"100%", marginTop:"30px"}}>
        <div class="row">
          <div className="col-md-5" style={{paddingLeft:"0px", paddingRight:"0px"}}>
            <div className="videobox">
              <div class="card bg-dark text-white">
                  <img class="card-img img-fluid" src="images/news.gif" alt="" style={{width:"100%", height:"400px"}}/>
                <div class="card-img-overlay d-flex linkfeat">
                    <a href="http://makro.id/review-gsp-amerika-ingin-perdagangan-saling-menguntungkan" class="align-self-end">
                      <span class="badge">Ekspor</span>
                      <h4 class="card-title">Review GSP: Amerika Ingin Perdagangan Saling Menguntungkan</h4>
                    </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-7">
            <div className="row" style={{padding:"0px"}}>
              <div className="col-md-6" style={{paddingLeft:"0px", paddingRight:"0px"}}>
                <div className="videobox">
                  <img src='images/entertainment/980x.jpg' style={{height:"400px", width:"100%"}}/>
                </div>
              </div>
              <div className="col-md-6" style={{paddingLeft:"0px", paddingRight:"0px"}}>
              <div className="videobox">
                <img src='images/entertainment/images.jpg' style={{height:"200px", width:"100%"}}/>
                <img src='images/entertainment/timthumb.jpg' style={{height:"200px", width:"100%"}}/>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default EntSlider;
