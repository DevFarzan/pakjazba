import React, { Component } from 'react';
import "./roomrenting2content.css";


class Roomrentingtwocontentarea extends Component{
	render(){
		return(

			<div className="countainer">

<div className="head-bg" >
	<div className="col-md-12">
		<h2 className="head-space">Rent List Page </h2>
	</div>
</div>




	
<div className="col-md-1 col-sm-1">
</div>
	<div className="col-md-10 col-sm-10 search-space search-space2">


<div className="col-md-2 col-sm-2" >

	<h4><b> Search By:</b></h4>
</div>

<div className="col-md-2 col-sm-2 search-space1" >

      <select className="form-control form-control-lg" name="category" id="validationCustom03" onchange="ChangecatList()" required>
        <option value="">Operation</option>
        <option value="">classNameroom Instruction and Assessment</option>
        <option value="">Curriculum Development and Alignment</option>
        <option value="">District Committee</option>
      </select>
</div>


<div className="col-md-2 col-sm-2 search-space1" >

      <select className="form-control form-control-lg" name="category" id="validationCustom03" onchange="ChangecatList()" required>
        <option value="">Type of property</option>
        <option value="">classNameroom Instruction and Assessment</option>
        <option value="">Curriculum Development and Alignment</option>
        <option value="">District Committee</option>
      </select>
</div>


<div className="col-md-2 col-sm-2 search-space1" >

      <select className="form-control form-control-lg" name="category" id="validationCustom03" onchange="ChangecatList()" required>
        <option value="">City</option>
        <option value="">classNameroom Instruction and Assessment</option>
        <option value="">Curriculum Development and Alignment</option>
        <option value="">District Committee</option>
      </select>
</div>

<div className="col-md-2 col-sm-2 search-space1" >

      <select className="form-control form-control-lg" name="category" id="validationCustom03" onchange="ChangecatList()" required>
        <option value="">Price</option>
        <option value="">classNameroom Instruction and Assessment</option>
        <option value="">Curriculum Development and Alignment</option>
        <option value="">District Committee</option>
      </select>
</div>


<div className="col-md-2 col-sm-2 search-space1" >

<button className="btn search-btn"> Most Popular</button>

</div>




</div>


<div className="col-md-1 col-sm-1">
</div>

<div className="col-md-12 col-sm-12 main-space">

<div className="col-md-2 col-sm-12 col-xs-12">
	
	<h3><span className="glyphicon glyphicon-usd"></span> Price Rating </h3>

<div className="slidecontainer">
  <input type="range" min="1" max="100" value="50" className="slider" id="myRange" />
  <p>Value: <span id="demo"></span></p>
</div>


<br />
<h3> <span className="glyphicon glyphicon-map-marker"></span> Location </h3>

<div className="checkbox">
  <label><input type="checkbox" value="" />Option 1</label>
</div>
<div className="checkbox">
  <label><input type="checkbox" value="" />Option 2</label>
</div>
<div className="checkbox">
  <label><input type="checkbox" value="" />Option 3</label>
</div>
<div className="checkbox">
  <label><input type="checkbox" value="" />Option 4</label>
</div>

<br />

<h3><span className="glyphicon glyphicon-bed"></span> Bedrooms</h3>

<div className="checkbox">
  <label><input type="checkbox" value="" />Option 1</label>
</div>
<div className="checkbox">
  <label><input type="checkbox" value="" />Option 2</label>
</div>
<div className="checkbox">
  <label><input type="checkbox" value="" />Option 3</label>
</div>
<div className="checkbox">
  <label><input type="checkbox" value="" />Option 4</label>
</div>

<br />

<h3><span className="glyphicon glyphicon-resize-horizontal"></span> Meters</h3>

<div className="checkbox">
  <label><input type="checkbox" value="" />Option 1</label>
</div>
<div className="checkbox">
  <label><input type="checkbox" value="" />Option 2</label>
</div>
<div className="checkbox">
  <label><input type="checkbox" value="" />Option 3</label>
</div>
<div className="checkbox">
  <label><input type="checkbox" value="" />Option 4</label>
</div>

<br />

<h3> <span className="glyphicon glyphicon-map-marker"></span> On the Map</h3>

<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3621.6337348509687!2d67.03749541472551!3d24.807992284078704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33da992be1aa7%3A0x7646411a2d8e6ac5!2sKRL+Creatives!5e0!3m2!1sen!2s!4v1536302761580" width="180" height="200" frameborder="0" style={{"border":"0"}} allowfullscreen></iframe>

</div>

<div className="col-md-10 col-sm-12 col-xs-12">
	


<div className="col-lg-4 col-md-4 col-sm-12 space-top" >
<div className="card outset" >
    <img className="card-img-top" src="./images/black.jpg" alt="Card image" style={{"width":"100%"}} />
    <div className="card-body space">
      <h4 className="card-title"><span className="glyphicon glyphicon-map-marker">Location</span></h4> 
      <h4> $1700</h4>
      <div className="col-lg-6 col-md-6 col-sm-6" >
<p className="card-text"><span className="glyphicon glyphicon-calendar">06-09-2018</span></p>
<p className="card-text">Available From</p>
<p className="card-text">Single Room</p>

</div>
      <div className="col-lg-6 col-md-6 col-sm-6" >
<p className="card-text"><span className="glyphicon glyphicon-user">Name</span></p>
<p className="card-text">Male/Female</p>
<p className="card-text">Area sq ft</p>

</div>

<div className="row">
	<div className="col-md-12">
<p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
</div>
</div>
      <a href="#" className="btn btn-primary">See Profile</a>
    </div>
  </div>
</div>

<div className="col-lg-4 col-md-4 col-sm-12 space-top" >
<div className="card outset" >
    <img className="card-img-top" src="./images/black.jpg" alt="Card image" style={{"width":"100%"}} />
    <div className="card-body space">
      <h4 className="card-title"><span className="glyphicon glyphicon-map-marker">Location</span></h4> 
      <h4> $1700</h4>
          <div className="col-lg-6 col-md-6 col-sm-6" >
<p className="card-text"><span className="glyphicon glyphicon-calendar">06-09-2018</span></p>
<p className="card-text">Available From</p>
<p className="card-text">Single Room</p>

</div>
      <div className="col-lg-6 col-md-6 col-sm-6" >
<p className="card-text"><span className="glyphicon glyphicon-user">Name</span></p>
<p className="card-text">Male/Female</p>
<p className="card-text">Area sq ft</p>

</div>

<div className="row">
	<div className="col-md-12">
<p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
</div>
</div>
      <a href="#" className="btn btn-primary">See Profile</a>
    </div>
  </div>
</div>

<div className="col-lg-4 col-md-4 col-sm-12 space-top" >
<div className="card outset" >
    <img className="card-img-top" src="./images/black.jpg" alt="Card image" style={{"width":"100%"}} />
    <div className="card-body space">
      <h4 className="card-title"><span className="glyphicon glyphicon-map-marker">Location</span></h4> 
      <h4> $1700</h4>
          <div className="col-lg-6 col-md-6 col-sm-6" >
<p className="card-text"><span className="glyphicon glyphicon-calendar">06-09-2018</span></p>
<p className="card-text">Available From</p>
<p className="card-text">Single Room</p>

</div>
      <div className="col-lg-6 col-md-6 col-sm-6" >
<p className="card-text"><span className="glyphicon glyphicon-user">Name</span></p>
<p className="card-text">Male/Female</p>
<p className="card-text">Area sq ft</p>

</div>

<div className="row">
	<div className="col-md-12">
<p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
</div>
</div>
      <a href="#" className="btn btn-primary">See Profile</a>
    </div>
  </div>
</div>




       
<div className="col-lg-4 col-md-4 col-sm-12 space-top" >
<div className="card outset" >
    <img className="card-img-top" src="./images/black.jpg" alt="Card image" style={{"width":"100%"}} />
    <div className="card-body space">
      <h4 className="card-title"><span className="glyphicon glyphicon-map-marker">Location</span></h4> 
      <h4> $1700</h4>
          <div className="col-lg-6 col-md-6 col-sm-6" >
<p className="card-text"><span className="glyphicon glyphicon-calendar">06-09-2018</span></p>
<p className="card-text">Available From</p>
<p className="card-text">Single Room</p>

</div>
      <div className="col-lg-6 col-md-6 col-sm-6" >
<p className="card-text"><span className="glyphicon glyphicon-user">Name</span></p>
<p className="card-text">Male/Female</p>
<p className="card-text">Area sq ft</p>

</div>

<div className="row">
	<div className="col-md-12">
<p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
</div>
</div>
      <a href="#" className="btn btn-primary">See Profile</a>
    </div>
  </div>
</div>

<div className="col-lg-4 col-md-4 col-sm-12 space-top" >
<div className="card outset" >
    <img className="card-img-top" src="./images/black.jpg" alt="Card image" style={{"width":"100%"}} />
    <div className="card-body space">
      <h4 className="card-title"><span className="glyphicon glyphicon-map-marker">Location</span></h4> 
      <h4> $1700</h4>
          <div className="col-lg-6 col-md-6 col-sm-6" >
<p className="card-text"><span className="glyphicon glyphicon-calendar">06-09-2018</span></p>
<p className="card-text">Available From</p>
<p className="card-text">Single Room</p>

</div>
      <div className="col-lg-6 col-md-6 col-sm-6" >
<p className="card-text"><span className="glyphicon glyphicon-user">Name</span></p>
<p className="card-text">Male/Female</p>
<p className="card-text">Area sq ft</p>

</div>

<div className="row">
	<div className="col-md-12">
<p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
</div>
</div>
      <a href="#" className="btn btn-primary">See Profile</a>
    </div>
  </div>
</div>

<div className="col-lg-4 col-md-4 col-sm-12 space-top" >
<div className="card outset" >
    <img className="card-img-top" src="./images/black.jpg" alt="Card image" style={{"width":"100%"}} />
    <div className="card-body space">
      <h4 className="card-title"><span className="glyphicon glyphicon-map-marker">Location</span></h4> 
      <h4> $1700</h4>
          <div className="col-lg-6 col-md-6 col-sm-6" >
<p className="card-text"><span className="glyphicon glyphicon-calendar">06-09-2018</span></p>
<p className="card-text">Available From</p>
<p className="card-text">Single Room</p>

</div>
      <div className="col-lg-6 col-md-6 col-sm-6" >
<p className="card-text"><span className="glyphicon glyphicon-user">Name</span></p>
<p className="card-text">Male/Female</p>
<p className="card-text">Area sq ft</p>

</div>

<div className="row">
	<div className="col-md-12">
<p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
</div>
</div>
      <a href="#" className="btn btn-primary">See Profile</a>
    </div>
  </div>
</div>

<div className="col-md-5">
</div>
<div className="col-md-7">
<br />
<nav aria-label="Page navigation example">
  <ul className="pagination">
    <li className="page-item">
      <a className="page-link" href="#" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
        <span className="sr-only">Previous</span>
      </a>
    </li>
    <li className="page-item"><a className="page-link" href="#">1</a></li>
    <li className="page-item"><a className="page-link" href="#">2</a></li>
    <li className="page-item"><a className="page-link" href="#">3</a></li>
    <li className="page-item">
      <a className="page-link" href="#" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
        <span className="sr-only">Next</span>
      </a>
    </li>
  </ul>
</nav>
</div>

</div>

	

</div>





</div>


			)
	}
}

export default Roomrentingtwocontentarea;