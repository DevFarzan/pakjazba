import React, { Component } from 'react';
import './CategoriesJobs.css';

class CategoriesjobMarket extends Component{
  render(){
    return(
      <div className="container categoriesbars">
      	<div className="row">
          <div className="col-md-6">
            <div className="row">
        	    <form className="col-md-6">
        	        <label>Sort By:</label>
        	        <select className="form-control select2">
        	           <option>Select</option>
        	           <option>Car</option>
        	           <option>Bike</option>
        	           <option>Scooter</option>
        	           <option>Cycle</option>
        	           <option>Horse</option>
        	        </select>
        	    </form>
              <form className="col-md-6">
        	        <label>Categoies:</label>
        	        <select className="form-control select2">
        	           <option>Select</option>
        	           <option>Car</option>
        	           <option>Bike</option>
        	           <option>Scooter</option>
        	           <option>Cycle</option>
        	           <option>Horse</option>
        	        </select>
        	    </form>
            </div>
          </div>
          <div className="col-md-6">
            <div className="row">
              <div className=" col-md-6">
                <div className="input-group">
                  <label>Search:</label>
                    <div className="flex">
                      <input ref="name" id="name" type="text" className="form-control" aria-label="search by name"/>
                      <button type="button" className="btn btn-sm btn2-success font-style" style={{backgroundColor:"#8cbc40"}}>
                          Search
                      </button>
                    </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="custom-row">
                    <label>Keywords:</label>
                    <div className="flex">
                      <button type="button" className="btn btn-sm btn3-success font-style">
                          Search
                      </button>
                      <button type="button" className="btn btn-sm btn3-success font-style">
                          Search
                      </button>
                      <button type="button" className="btn btn-sm btn3-success font-style">
                          Search
                      </button>
                      <button type="button" className="btn btn-sm btn3-success font-style">
                          Search
                      </button>
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

export default CategoriesjobMarket;
