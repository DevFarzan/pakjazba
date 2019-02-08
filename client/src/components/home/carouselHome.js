import React, { Component } from 'react';
import BussinesCard from '../business/bussinessCard';

class CarouselHome extends Component{
  render(){
    return(
      <div class="carousel-reviews broun-block">
          <div class="container">
              <div class="row">
                  <div id="carousel-reviews" class="carousel slide" data-ride="carousel">

                      <div class="carousel-inner">
                          <div class="item active">
                      	    <div class="col-md-4 col-sm-6">
                              <BussinesCard/>
      						          </div>
            			          <div class="col-md-4 col-sm-6 hidden-xs">
                              <BussinesCard/>
                						</div>
                						<div class="col-md-4 col-sm-6 hidden-sm hidden-xs">
                              <BussinesCard/>
                						</div>
                          </div>
                          <div class="item">
                              <div class="col-md-4 col-sm-6">
                                <BussinesCard/>
                              </div>
                        			<div class="col-md-4 col-sm-6 hidden-xs">
                                <BussinesCard/>
                              </div>
                  						<div class="col-md-4 col-sm-6 hidden-sm hidden-xs">
                                <BussinesCard/>
                  						</div>
                          </div>
                          <div class="item">
                              <div class="col-md-4 col-sm-6">
						                  </div>
                        			<div class="col-md-4 col-sm-6 hidden-xs">
      						            </div>
                  						<div class="col-md-4 col-sm-6 hidden-sm hidden-xs">
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

export default CarouselHome;
