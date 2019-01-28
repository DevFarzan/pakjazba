import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './Entslider.css';

class EntSlider extends Component{
  render(){

    const  { entertainment } = this.props,
    { news, sports, dramas, movies } = entertainment,
    news1 = !!news.length && news[0],
    sports1 = !!sports.length && sports[0],
    dramas1 = !!dramas.length && dramas[0],
    movies1 = !!movies.length && movies[0];
    return(
      <div className="container" style={{width:"100%", marginTop:"30px"}}>
        <div className="row">
          <div className="col-md-5" style={{paddingLeft:"0px", paddingRight:"0px"}}>
            <div className="videobox">
              <Link to={{pathname: `/entertainment_detail/${news1.id}`, state: {news1, news, entertainment}}} className="card bg-dark text-white">
                  <img className="card-img img-fluid" src={news1.thumbnail_url} alt="" style={{width:"100%", height:"400px"}}/>
                <div className="card-img-overlay d-flex linkfeat">
                      <span className="badge">Ekspor</span>
                      <h4 style={{color : 'white'}} className="card-title">{news1.title}</h4>
                </div>
              </Link>
            </div>
          </div>
          <div className="col-md-7">
            <div className="row" style={{padding:"0px"}}>
              <div className="col-md-6" style={{paddingLeft:"0px", paddingRight:"0px"}}>
                <Link to={{pathname: `/entertainment_detail/${sports1.id}`, state: {sports1, sports, entertainment}}} className="videobox">
                  <img src={sports1.thumbnail_url} style={{height:"400px", width:"100%"}}/>
                </Link>
              </div>
              <div className="col-md-6" style={{paddingLeft:"0px", paddingRight:"0px"}}>
              <div className="videobox">
              <Link to={{pathname: `/entertainment_detail/${dramas1.id}`, state: {dramas1, dramas, entertainment}}}>
                <img src={dramas1.thumbnail_url} style={{height:"200px", width:"100%"}}/>
                </Link>
                <Link to={{pathname: `/entertainment_detail/${movies1.id}`, state: {movies1, movies, entertainment}}}>
                <img src={movies1.thumbnail_url} style={{height:"200px", width:"100%"}}/>
                </Link>
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
