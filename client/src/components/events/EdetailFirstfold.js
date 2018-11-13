import React, { Component } from 'react';
import './EdetailFirstfold.css';
import DetailSliders from '../events/slider';
import DateCard from '../events/dateCard';
import FeaturedCol4 from '../events/FeaturedCol4';
import FeaturedCol8 from '../events/FeaturedCol8';


class EdetailFirstfold extends Component{
  render(){
    return(
      <div className="container" style={{width:"100%"}}>
          <div className="row">
              <div className="col-md-12" style={{paddingTop:"4px", paddingBottom:"10px"}}>
                  <div className="col-md-4 col-sm-12 col-xs-12 des-space">
                      <img alt='' src="../images/black.jpg" style={{width:"100%",height:"300px", borderRadius:"2px"}} />

                      <DateCard/>
                      <FeaturedCol4/>

                  </div>
                  <div className="col-md-8 col-sm-12 col-xs-12 des-space">
                    <div className="Event-borders">
                      <h3 style={{fontWeight:"bold",fontFamily: 'Crimson Text, sans-serif',marginTop:'11px'}}>Event Name</h3>
                      <span >
                      <p className="job-time"></p>
                      </span>

                      <p className="font-style">Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                       when an unknown printer took a galley of type and scrambled it to make a type specimen book. It
                       has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially
                        unchanged.</p>
                    </div>

                    <DetailSliders/>
                    <FeaturedCol8/>
                  </div>
              </div>
          </div>
      </div>
    )
  }
}
export default EdetailFirstfold;
