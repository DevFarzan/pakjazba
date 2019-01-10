import React, { Component } from 'react';

class MusicCategory extends Component{
  render(){
    return(
      <div className="container">
        <div className="row">
          <h4> Explore the Genre </h4>
          <div className="col-md-3">
            <p>Pop</p>
          </div>
          <div className="col-md-3">
            <p>Rock</p>
          </div>
          <div className="col-md-3">
            <p>Pop-Rock</p>
          </div>
          <div className="col-md-3">
            <p>Indie</p>
          </div>
        </div>
      </div>
    )
  }
}
export default MusicCategory;
