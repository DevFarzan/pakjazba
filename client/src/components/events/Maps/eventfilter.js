import React, { Component } from 'react';
import { Slider } from 'antd';
import './eventfilter.css';

function onChange(value) {
  console.log('onChange: ', value);
}

function onAfterChange(value) {
  console.log('onAfterChange: ', value);
}

class EventFilter extends Component{
  render(){
    return(
      <div className="BCfilter">
        <div className="row">
          <div className="col-md-2">
          </div>
          <div className="col-md-4" style={{borderRight:"1px solid grey"}}>
            <Slider range step={10} defaultValue={[20, 50]} onChange={onChange} onAfterChange={onAfterChange} />
          </div>
          <div className="col-md-4" style={{borderRight:"1px solid grey"}}>
            Type
          </div>
          <div className="col-md-2">
          </div>
        </div>
      </div>

    )
  }
}

export default EventFilter;
