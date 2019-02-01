import React, { Component } from 'react';
import './eventfilter.css';

class EventFilter extends Component{
  render(){
    return(
      <div className="BCfilter">
        <div className="row">
          <div className="col-md-2" style={{borderRight:"1px solid grey"}}>
            <p> Qty </p>
            <div class="qty mt-5" style={{marginLeft:"17px", display:"inline"}}>
                        <span class="minus bg-dark">-</span>
                        <input type="number" class="count" name="qty" value="1"/>
                        <span class="plus bg-dark">+</span>
                    </div>
          </div>
          <div className="col-md-4" style={{borderRight:"1px solid grey"}}>
            <div class="range-filter">
               <div class="range-controls">
                   <div class="scale"><div style={{marginLeft:"50px", width:"100px"}} class="bar"></div></div>
                   <div class="toggle min-toggle"></div>
                   <div class="toggle max-toggle"></div>
               </div>
            </div>
          </div>
          <div className="col-md-4" style={{borderRight:"1px solid grey"}}>
            Type
          </div>
        </div>
      </div>

    )
  }
}

export default EventFilter;
