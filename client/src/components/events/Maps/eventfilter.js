import React, { Component } from 'react';
import { Slider, Switch } from 'antd';
import './eventfilter.css';

class EventFilter extends Component{
    constructor(props) {
        super(props);
        this.state ={
            value: [500, 5000],
            min: 500,
            max: 5000
        }
    }

    onChange = (value) => {
        // console.log('onChange: ', value);
        this.setState({ value: [500, 5000] })
        this.props.priceRange(value);
    }

    onChangeSwitch = (checked) => {
        if(checked){
        console.log(this.slider, 'sliderrrrrrrrr');
            // this.forceUpdate();
            this.props.switchUnchanged();
            // this.setState({ min: 500, max: 5000, value: [500, 5000] })
            
        }
    }

    render(){
        return(
            <div className="BGfilter">
                <div className="row">
                    <div className="col-md-2" style={{borderRight:"1px solid grey"}}>
                        <h4><b>Filters</b></h4>
                    </div>
                    <div className="col-md-5" style={{borderRight:"1px solid grey"}}>
                        <Slider ref={r => this.slider = r} range min={this.state.min} max={this.state.max} step={500} defaultValue={this.state.value} onChange={this.onChange} />
                    </div>
                    <div className="col-md-2"  style={{borderRight:"1px solid grey"}}>
                        <h4><b>Reset</b></h4>
                    </div>
                    <div className="col-md-3">
                        <Switch id="switchevent" onChange={this.onChangeSwitch} />
                    </div>                    
                </div>
            </div>
        )
    }
}

export default EventFilter;
