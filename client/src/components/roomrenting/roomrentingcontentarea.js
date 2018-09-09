import React, { Component } from 'react';
import "./headerroomrenting.css";


class Sliderroomrenting extends Component{
	render(){
		return(

  <section id="hero">
    <div className="hero-container">
      <h1>Luxary Hostels in your City</h1>
      <a href="#about" className="btn-get-started">Get Search</a>
<div className="col-md-6">

      <h3>What are you lookin for?</h3>
        
        <input type="text" className="form-control" id="validationCustomUsername" placeholder="Search Bar" aria-describedby="inputGroupPrepend" required />
        </div>
    </div>
  </section>

			)
	}

}

export default Sliderroomrenting;