import React, { Component } from 'react';
import './MusicCat.css';

class MusicCategory extends Component{
  render(){
    return(
      <div className="container" style={{width:"100%"}}>
        <div className="row">
          <h4> Explore the Genre </h4>
          <div className="col-md-3">
            <p className="musicpara">Pop</p>
          </div>
          <div className="col-md-3">
            <p className="musicpara">Rock</p>
          </div>
          <div className="col-md-3">
            <p className="musicpara">Pop-Rock</p>
          </div>
          <div className="col-md-3">
            <p className="musicpara">Indie</p>
          </div>
          <div className="col-md-3">
            <p className="musicpara">Drama Ost</p>
          </div>
          <div className="col-md-3">
            <p className="musicpara">Film Ost </p>
          </div>
          <div className="col-md-3">
            <p className="musicpara">Ghazals</p>
          </div>
          <div className="col-md-3">
            <p className="musicpara">Qawali</p>
          </div>
          <div className="col-md-3">
            <p className="musicpara">Rap & Hip Hop</p>
          </div>
          <div className="col-md-3">
            <p className="musicpara">Covers</p>
          </div>
          <div className="col-md-3">
            <p className="musicpara">Electronics</p>
          </div>
          <div className="col-md-3">
            <p className="musicpara">For Childrens</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <p className="musicpara">New Release</p>
          </div>
          <div className="col-md-3">
            <p className="musicpara">Top Charts</p>
          </div>
          <div className="col-md-3">
            <p className="musicpara">2018 Hits</p>
          </div>
          <div className="col-md-3">
            <p className="musicpara">New Artist On Patari</p>
          </div>
        </div>
      </div>
    )
  }
}
export default MusicCategory;
