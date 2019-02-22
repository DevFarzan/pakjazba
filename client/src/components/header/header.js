import React, { Component } from 'react';
import './burgermenu.css';
import MainLogin from '../header/mainLogin';
import Category from '../header/getcategory';
import { Link } from "react-router-dom";

class Header extends Component{

	render(){
		return (
			<div className="container-fluid">
				<div className="col-md-2 col-sm-6 col-xs-6">
				  <div className="navbar-header">
				      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false" >
				          <span className="sr-only">Toggle navigation</span>
				          <span className="icon-bar"></span>
				          <span className="icon-bar"></span>
				          <span className="icon-bar"></span>
				      </button>
				      <Link to={`/`} className="navbar-brand"><img alt='' src="../images/pakjazba_new.png" style={{"width": "100%",marginTop: "32px",marginLeft:'35%'}} /></Link>                             
				  </div>
				</div>
				<div className="col-md-10 col-sm-6 col-xs-6">
				  <div className="row">
				      <div className="col-md-7"></div>
				      <div className="col-md-2" style={{marginTop: "26px"}}>
				          <MainLogin/>
				      </div>
				      <div className="col-md-3" style={{marginTop: "21px"}}>
				          <Category/>
				      </div>
				  </div>
				</div>
			</div>
		)
	}
}

export default Header;
