import React, { Component } from 'react';
import './banner-tabs.css';
import { Link } from "react-router-dom";
import { Select, Input, Icon } from 'antd';

const { Option, OptGroup } = Select;

function handleChange(value) {
  console.log(`selected ${value}`);
}



class BannerTabs extends Component{
    render(){
        return(
            <div class="container">
                <div class="row">
                    <section>
                        <div class="wizard">
                            <div class="wizard-inner">
                                
                                <ul class="nav nav-tabs" role="tablist">

                                    <li role="presentation" class="active">
                                        <a href="#tab1" data-toggle="tab" aria-controls="tab1" role="tab" title="Room Renting">
                                            <span>
                                                <img src="./images/homeicon/roomRental.png" alt=""/>
                                            </span>
                                        </a>
                                    </li>

                                    <li role="presentation">
                                        <a href="#tab2" data-toggle="tab" aria-controls="tab2" role="tab" title="Bussiness">
                                            <span>
                                                <img src="./images/homeicon/businessListing.png" alt=""/>
                                            </span>
                                        </a>
                                    </li>
                                    <li role="presentation">
                                        <a href="#tab3" data-toggle="tab" aria-controls="tab3" role="tab" title="Buy & Sell">
                                            <span>
                                                <img src="./images/homeicon/buyNSell.png" alt=""/>
                                            </span>
                                        </a>
                                    </li>

                                    <li role="presentation">
                                        <a href="#tab4" data-toggle="tab" aria-controls="tab4" role="tab" title="Ecommerce">
                                            <span>
                                                <img src="./images/homeicon/ecommerce.png" alt=""/>
                                            </span>
                                        </a>
                                    </li>
                                    
                                    <li role="presentation">
                                        <a href="#tab5" data-toggle="tab" aria-controls="tab5" role="tab" title="Events">
                                            <span>
                                                <img src="./images/homeicon/events.png" alt=""/>
                                            </span>
                                        </a>
                                    </li>

                                    <li role="presentation">
                                        <a href="#tab6" data-toggle="tab" aria-controls="tab6" role="tab" title="Jobs">
                                            <span>
                                                <img src="./images/homeicon/jobPortal.png" alt=""/>
                                            </span>
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <form role="form">
                                <div className="cardinside">
                                    <div class="tab-content">
                                    
                                        <div class="tab-pane active" role="tabpanel" id="tab1">
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
                                        <div class="tab-pane" role="tabpanel" id="tab2">
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <div className="col-md-3 col-sm-6">
                                                        <Input placeholder="Basic usage"
                                                            suffix={ <Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }}/>}/>
                                                    </div>
                                                    <div className="col-md-3 col-sm-6">
                                                        
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
                                        <div class="tab-pane" role="tabpanel" id="tab3">
                                            <h3>Step 3</h3>
                                            <p>This is step 3</p>
                                            
                                        </div>
                                        <div class="tab-pane" role="tabpanel" id="tab4">
                                            <h3>Complete</h3>
                                            <p>You have successfully completed all steps.</p>
                                        </div>
                                        <div class="tab-pane" role="tabpanel" id="tab5">
                                            <h3>Step 3</h3>
                                            <p>This is step 3</p>
                                            
                                        </div>
                                        <div class="tab-pane" role="tabpanel" id="tab6">
                                            <h3>Complete</h3>
                                            <p>You have successfully completed all steps.</p>
                                        </div>
                                        <div class="clearfix"></div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </section>
                </div>
            </div>
        )
    }
}

export default BannerTabs;