import React, { Component } from 'react';
import './burgermenu.css';
import MainLogin from '../header/mainLogin';
import Category from '../header/getcategory';
import { Link } from "react-router-dom";
import { Menu, Icon, Button } from 'antd';


const SubMenu = Menu.SubMenu;

class Burgermenu extends Component{
state = {
    collapsed: false,
    hidemenu:false
  }

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  render(){
    //const hidemenu = false;
      return(
          <div>
              <nav className="navbar navbar-fixed-top hidden-xs"
                   style={{position: "fixed", width: "100%", "zIndex": "999", marginTop: "-19px"}}>
                  <div className="container-fluid">
                      <div className="col-md-2 col-sm-6 col-xs-6">
                          <div className="navbar-header">
                              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false" >
                                  <span className="sr-only">Toggle navigation</span>
                                  <span className="icon-bar"></span>
                                  <span className="icon-bar"></span>
                                  <span className="icon-bar"></span>
                              </button>
                              <Link to={`/`} className="navbar-brand"><img alt='' src="./images/mobile-logo.png" style={{"width": "100px",marginTop: "28px"}} /></Link>
                          </div>
                      </div>
                      <div className="col-md-10 col-sm-6 col-xs-6">
                          <div className="row">
                              <div className="col-md-7">
                                  <div style={{ padding: '22px 16px 10px',"float": "right"}}>
                                      <Button type="button_globalclassName" name='room' ghost className="button_globalclassName">
                                          <Link rel="noopener noreferrer" to={`/market_roommates`}>Room Renting</Link>
                                      </Button>
                                      <Button type="button_globalclassName" name='bussiness' ghost style={{marginRight: "10px", marginLeft: "10px"}} className="button_globalclassName">
                                          <Link rel="noopener noreferrer" to={`/market_business`}>Business Listing</Link>
                                      </Button>
                                      <Button type="button_globalclassName" name='buySell' ghost className="button_globalclassName" style={{marginRight: '10px'}}>
                                          <Link rel="noopener noreferrer" to={`/market_classNameified`}>Buy & Sell</Link>
                                      </Button>
                                      <Button type="button_globalclassName" name='buySell' ghost className="button_globalclassName">
                                          <Link rel="noopener noreferrer" to={`/market_jobPortal`}>Job Portal</Link>
                                      </Button>
                                      {/*<Button type="button_globalclassName" name='events' ghost className="button_globalclassName">
                                          <Link rel="noopener noreferrer" to={`/market_eventPortal`}>Events</Link>
                                      </Button>*/}
                                  </div>
                              </div>{/*col-md-4*/}
                              <div className="col-md-2" style={{marginTop: "26px"}}>
                                  <MainLogin/>
                              </div>{/*col-md-4*/}
                              <div className="col-md-3" style={{marginTop: "21px"}}>
                                  <Category/>
                              </div>{/*col-md-4*/}
                          </div>{/*row*/}
                      </div>
                  </div>
              </nav>
              {/*=============================================visible xs============================================*/}
              <nav className="navbar navbar-default visible-xs">
                  <div className="container-fluid">
                      <div className="row">
                          <div className="col-xs-9">
                              <div className="navbar-header">
                                  <a  className="navbar-brand"><img alt='' src="./images/mobile-logo.png" style={{"width": "100px", marginTop: "11px"}} /></a>
                                  <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="true" onClick={()=>this.setState({hidemenu:!this.state.hidemenu})}>
                                      <span class="sr-only">Toggle navigation</span>
                                      <span class="icon-bar"></span>
                                      <span class="icon-bar"></span>
                                      <span class="icon-bar"></span>
                                  </button>
                              </div>
                          </div>
        
                      </div>

                      {this.state.hidemenu && <div className="" style={{marginTop: "22px",marginBottom: "11px"}} >
                          <div className="col-xs-12">
                                  <Button type="primary" ghost>
                                      <Link rel="noopener noreferrer" to={`/market_roommates`}>Room Renting</Link>
                                  </Button>
                           </div>       
                              <div className="col-xs-12">    
                                  <Button type="primary" ghost style={{marginTop: "8px"}}>
                                      <Link rel="noopener noreferrer" to={`/market_business`}>Business Listing</Link>
                                  </Button>
                              </div>
                        
                          <div className="col-xs-12">
                              <Button type="primary" ghost style={{marginTop: "8px"}}>
                                  <Link rel="noopener noreferrer" to={`/market_classNameified`}>Buy & Sell</Link>
                              </Button>
                          </div>
                          <div className="col-xs-12" style={{marginTop: "8px"}}>    
                              <span ><Category/></span>
                          </div>
                          <div className="col-xs-12" style={{marginTop: "8px"}}>
                              <div style={{backgroundColor:'#37a99b'}}><MainLogin/></div>
                          </div>
                      </div>}
        
                  </div>
              </nav>
          </div>
      )
  }
}
 export default Burgermenu;
