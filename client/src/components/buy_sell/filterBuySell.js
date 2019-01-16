import React, { Component } from 'react';
import Burgermenu from '../header/burgermenu';
import BuyFourthFold from './buyforthfold';
import './filterBuySell.css';
import { Input, Cascader } from 'antd';

const Search = Input.Search;

const options = [{
  value: 'zhejiang',
  label: 'Zhejiang',
  children: [{
    value: 'hangzhou',
    label: 'Hangzhou',
    children: [{
      value: 'xihu',
      label: 'West Lake',
    }],
  }],
}, {
  value: 'jiangsu',
  label: 'Jiangsu',
  children: [{
    value: 'nanjing',
    label: 'Nanjing',
    children: [{
      value: 'zhonghuamen',
      label: 'Zhong Hua Men',
    }],
  }],
}];

function onChange(value) {
  console.log(value);
}

class FilterBuySell extends Component{
    constructor(props){
        super(props);

    }

    render(){
    	return (
        <div className="">
          <div className ="hidden-xs" style={{"background":"#d8e7e4",marginTop:'86px',backgroundSize: 'cover'}}>
              <div className="background-image">
                  <Burgermenu/>
              </div>
          </div>
          <div className ="visible-xs" style={{"background":"#d8e7e4",marginTop : "-20px",backgroundSize: 'cover'}}>
              <div className="background-image">
                  <Burgermenu/>
              </div>
          </div>
          <div className="container" style={{width:"70%"}}>
            <div className="filterbox">
              <div className="row">
                <div className="col-md-2">
                <Search
                  placeholder="Location"
                  onSearch={value => console.log(value)}
                  enterButton
                />
                </div>
                <div className="col-md-2">
                  <Input placeholder="Price"/>
                </div>
                <div className="col-md-2">
                  <Input placeholder="Size"/>
                </div>
                <div className="col-md-2">
                  <Input placeholder="Condition"/>
                </div>
                <div className="col-md-2">
                  <Input placeholder="Category"/>
                </div>
                <div className="col-md-2">
                  <Cascader options={options} onChange={onChange} placeholder="More Filter" />
                </div>
              </div>
            </div>
            <span>
              <h4 style={{marginTop:"30px", marginBottom:"0px"}}> Suggest For You </h4>
            </span>
          </div>

          <BuyFourthFold />
        </div>
    		)
    }
}

export default FilterBuySell;
