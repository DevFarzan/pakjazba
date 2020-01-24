import React, { Component } from 'react';
import { Select, Input, Icon } from 'antd';

const { Option, OptGroup } = Select;

function handleChange(value) {
  console.log(`selected ${value}`);
}





class RoomTabs extends Component{

render(){
    return(

<div className="row">
<div className="col-md-12">
    <div className="col-md-3 col-sm-6">
        <Input placeholder="Basic usage"
            suffix={ <Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }}/>}/>
    </div>
    <div className="col-md-3 col-sm-6">
        <Select defaultValue="lucy" onChange={handleChange}>
            <OptGroup label="Manager">
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
            </OptGroup>
            <OptGroup label="Engineer">
            <Option value="Yiminghe">yiminghe</Option>
            </OptGroup>
        </Select>
    </div>
    <div className="col-md-3 col-sm-6">
        <Input placeholder="Basic usage"/>
    </div>
    <div className="col-md-3 col-sm-6">
        <button className="btn insidebutton" style={{ width: '100%' }}>
            <span className="fa fa-search">
            
            </span>
            <span>
            
            Submit</span>
            </button>
    </div>
</div>
</div>
    )
}
}

export default RoomTabs;