import React, { Component } from 'react';
import './homebanner.css';
import { Link } from "react-router-dom";
import { Select, Input, Icon } from 'antd';

const { Option, OptGroup } = Select;

function handleChange(value) {
  console.log(`selected ${value}`);
}

class BannerInside extends Component{
 
    render(){
        return(
            <div className="container">
                        <div className="onbanner">
                        <h2>Discover great places</h2>
                        <h4>Find awesome places, bars, restaurants and activities and online stores</h4>
                            <div className="row" style={{margin:'0'}}>
                                <div className="col-md-12">
                                    <div className="col-md-1 col-sm-2 col-xs-2">
                                        <img src="./images/homeicon/roomRental.png" alt=""/>
                                    </div>
                                    <div className="col-md-1 col-sm-2 col-xs-2">
                                        <img src="./images/homeicon/businessListing.png" alt=""/>
                                    </div>
                                    <div className="col-md-1 col-sm-2 col-xs-2">
                                        <img src="./images/homeicon/buyNSell.png" alt=""/>
                                    </div>
                                    <div className="col-md-1 col-sm-2 col-xs-2">
                                        <img src="./images/homeicon/ecommerce.png" alt=""/>
                                    </div>
                                    <div className="col-md-1 col-sm-2 col-xs-2">
                                        <img src="./images/homeicon/events.png" alt=""/>
                                    </div>
                                    <div className="col-md-1 col-sm-2 col-xs-2">
                                        <img src="./images/homeicon/jobPortal.png" alt=""/>
                                    </div>
                                    <div className="col-md-1 hidden-sm hidden-xs">
                                        <img src="./images/homeicon/roomRental.png" alt=""/>
                                    </div>
                                    <div className="col-md-1 hidden-sm hidden-xs">
                                        <img src="./images/homeicon/roomRental.png" alt=""/>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="cardinside">
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

                                    
                                </div>
                            </div>
                            
                        </div>
                    </div>
        )
    }
}

export default BannerInside;