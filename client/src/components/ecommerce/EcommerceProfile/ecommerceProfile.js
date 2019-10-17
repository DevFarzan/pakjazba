import React, { Component } from 'react';
import Burgermenu from '../../header/burgermenu';
import Footer from '../../footer/footer';
import './ecommerceProfile.css';
import { Link } from "react-router-dom";
import EcomNine from './ecomNine';
import { isMobile, isTablet, isBrowser } from 'react-device-detect';
import { Tabs, Radio } from 'antd';
import ProfileHome from './profileHome';
import ProfileProducts from './profileProducts';
const { TabPane } = Tabs;
class EcomProfile extends Component{
  render(){
    return(
      <div>
       <span>
            <div className ="" style={{"backgroundImage":"url('../images/bgc-images/busnes-listing.png')", marginTop : "-20px",backgroundSize: 'cover'}}>
                <div className="background-image">
                    <Burgermenu/>
                </div>
            </div>
        </span>
        <div className="row jobdetail-page" style={{ marginTop:"100px"}}>
        </div>
        <div className>
                <div className="row">
                    <div className="col-md-12">
                        <div className="col-md-8 col-sm-7">
                          <div className="row" style={{padding:'0px'}}>
                            <div className="col-md-12">
                              <div className="col-md-2 col-sm-3 col-xs-3">
                                <div className="" style={{borderRadius:'50px black'}}>
                                  <img alt='' src='/images/ecommerce/61Yeir0uhIL._AC_SY200_.jpg' style={{borderRadius:'50px !important'}} />
                                </div>
                              </div>
                              <div className="col-md-10 col-sm-9 col-xs-9">
                                  <h2 style={isTablet ? {margin:"0", fontSize: '27px'} : {margin:'0', fontSize: '36px'}}>Hisense Online Store</h2>
                                  <p>73% postive seller ratings</p>
                              </div>  
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4 col-sm-5">
                          <div className="col-md-6 col-sm-6 col-xs-6">
                            <div className="buttontoleft">
                                <button type="button" className="btn btn-sm btn-editprofile font-style" style={{ width: "100%" }}>Edit Home</button>
                            </div>
                          </div>
                          <div className="col-md-6 col-sm-6 col-xs-6">
                            <div className="buttontoleft">
                                <button type="button" className="btn btn-sm btn-editprofile font-style" style={{ width: "100%" }}>Add Product</button>
                            </div>
                          </div>
                        </div>    
                    </div>
                </div>
          </div>
          <div className="container" style={{width: '98%'}}>
            <div className="row">
              <div className="col-md-12">
                  <Tabs defaultActiveKey="1">
                    <TabPane tab="Home" key="1">
                      <ProfileHome/>
                    </TabPane>
                    <TabPane tab="All Products" key="2">
                      <ProfileProducts/>
                    </TabPane>
                    <TabPane tab="Profile" key="3">
                      Content of Tab Pane 3
                    </TabPane>
                  </Tabs>
              </div>
            </div>
          </div>
        
      <Footer/>
    </div>
    )
  }
}
export default EcomProfile;