import React, { Component } from 'react';
import './EdetailFirstfold.css';
import DetailSliders from '../events/slider';
import DateCard from '../events/dateCard';
import FeaturedCol4 from '../events/FeaturedCol4';
import FeaturedCol8 from '../events/FeaturedCol8';


class EdetailFirstfold extends Component{
  render(){
    // console.log(this.props.data.description, 'zzzzzzzzzzzzzzzzzzz')
    return(
      <div className="container" style={{width:"100%"}}>
          <div className="row">
              <div className="col-md-12" style={{paddingTop:"4px", paddingBottom:"10px"}}>
                  <div className="col-md-4 col-sm-12 col-xs-12 des-space">
                      <img alt='' src={this.props.data.images && this.props.data.images[0]} style={{width:"100%",height:"300px", borderRadius:"2px"}} />

                      <DateCard data={this.props.data}/>
                      <FeaturedCol4/>

                  </div>
                  <div className="col-md-8 col-sm-12 col-xs-12 des-space">
                    <div className="Event-borders">
                      <h3 style={{fontWeight:"bold",fontFamily: 'Crimson Text, sans-serif',marginTop:'11px'}}>{this.props.data && this.props.data.eventTitle}</h3>
                      <span >
                      <p className="job-time"></p>
                      </span>

                      <p className="font-style">{this.props.data && this.props.data.description}</p>
                    </div>

                    <DetailSliders/>
                    <FeaturedCol8 data={this.props.data}/>
                  </div>
              </div>
          </div>
      </div>
    )
  }
}
export default EdetailFirstfold;
