import React, { Component } from 'react';
import "./headerroomrenting.css";

class Headerroomrenting extends Component{

	render(){
		return(

  <header id="header" style={{"position": "fixed","width": "100%","z-index": "999999","background-color": "dimgray"}}>
    <div className="container">

               <div id="logo" className="pull-left">
        <a href="#"><h1>Logo</h1></a>
      </div>
        
      <nav id="nav-menu-container">
        <ul className="nav-menu">
          <li className=""><a href="#">Room Renting</a></li>
          <li><a href="#">Business Listing</a></li>
          <li><a href="#">Buy & Sell</a></li>
          <li><a href="#">Login</a></li>
          <li><a href="#">Post Your Need</a></li>
          
        </ul>
      </nav>
    </div>
  </header>

			)
	}

}

export default Headerroomrenting;