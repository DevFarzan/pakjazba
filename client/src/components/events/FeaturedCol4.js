import React, { Component } from 'react';
import '../main_Component/FeaturedCol4.css';
import FeaturedCards from '../main_Component/Featured_cards';

class FeaturedCol4 extends Component{
  render(){
    return(
      <div className="row" style={{padding:"0px", marginTop:"40px"}}>
        <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
          <div className="ecardfeatured">
              <div className="card-body space" style={{padding: "0"}}>
                  <div className="row">
                      <div className="col-md-12">
                          <h4>Featured Events</h4>
                      </div>
                      <FeaturedCards/>
                      <FeaturedCards/>
                      <FeaturedCards/>
                  </div>
              </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FeaturedCol4;
