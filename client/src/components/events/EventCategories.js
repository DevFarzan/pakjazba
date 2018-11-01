import React, { Component } from 'react';
import './EventCategories.css'

class EventCategories extends Component{
  render(){
    return(
      <div className="container" style={{width:"90%"}}>
          <h2 style={{textAlign:"center", fontWeight:"bold", marginTop:"20px"}}> Event Categories </h2>
          <div className="row">
          <div className="col-md-1"></div>
              <div className="col-md-2 col-sm-3">
                  <div className="wrimagecard wrimagecard-topimage">
                      <div className="wrimagecard-topimage_header">
                          <center>
                              <img src="../images/new event icons/exibition.png" style={{width: "100%"}}/>
                          </center>
                      </div>
                  </div>
              </div>

              <div className="col-md-2 col-sm-3">
                  <div className="wrimagecard wrimagecard-topimage">
                      <div className="wrimagecard-topimage_header">
                          <center>
                              <img src="../images/new event icons/fashion.png" style={{width: "100%"}}/>
                          </center>
                      </div>
                  </div>
              </div>

              <div className="col-md-2 col-sm-3">
                  <div className="wrimagecard wrimagecard-topimage">
                      <div className="wrimagecard-topimage_header">
                          <center>
                              <img src="../images/new event icons/film.png"style={{width: "100%"}}/>
                          </center>
                      </div>
                  </div>
              </div>

              <div className="col-md-2 col-sm-3">
                  <div className="wrimagecard wrimagecard-topimage">
                      <div className="wrimagecard-topimage_header">
                          <center>
                              <img src="../images/new event icons/food.png"style={{width: "100%"}}/>
                          </center>
                      </div>
                  </div>
              </div>

              <div className="col-md-2 col-sm-3">
                  <div className="wrimagecard wrimagecard-topimage">
                      <div className="wrimagecard-topimage_header">
                          <center>
                              <img src="../images/new event icons/music.png"style={{width: "100%"}}/>
                          </center>
                      </div>
                  </div>
              </div>
          </div>
      </div>

    )
  }
}
export default EventCategories;
