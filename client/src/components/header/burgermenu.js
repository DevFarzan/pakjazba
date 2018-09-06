import React, { Component } from 'react';
import './burgermenu.css';
import { Button } from 'antd';
import MainLogin from '../header/mainLogin';
import Category from '../header/getcategory';
import { Link } from "react-router-dom";

class Burgermenu extends Component{

  render(){
      return(
          <div>
              <nav className="navbar navbar-default hidden-xs">
                  <div className="container-fluid">
                      <div className="col-md-2 col-sm-6 col-xs-6">
                          <div className="navbar-header">
                              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                                  <span className="sr-only">Toggle navigation</span>
                                  <span className="icon-bar"></span>
                                  <span className="icon-bar"></span>
                                  <span className="icon-bar"></span>
                              </button>
                              <Link to={`/`} className="navbar-brand"><img src="./images/mobile-logo.png" style={{"width": "100px","margin-top": "11px"}} /></Link>
                          </div>
                      </div>
                      <div className="col-md-10 col-sm-6 col-xs-6">
                          <div className="row">
                              <div className="col-md-7">
                                  <div style={{ padding: '22px 16px 10px',"float": "right"}}>
                                      <Button type="primary" name='room' ghost>
                                          <Link rel="noopener noreferrer" to={`/market_roommates`}>Room Renting</Link>
                                      </Button>
                                      <Button type="primary" name='bussiness' ghost style={{"margin-right": "10px","margin-left": "10px"}}>
                                          <Link rel="noopener noreferrer" to={`/market_business`}>Bussiness Listing</Link>
                                      </Button>
                                      <Button type="primary" name='buySell' ghost>
                                          <Link rel="noopener noreferrer" to={`/market_classified`}>Buy & Sell</Link>
                                      </Button>
                                  </div>
                              </div>{/*col-md-4*/}
                              <div className="col-md-2" style={{"margin-top": "26px"}}>
                                  <MainLogin/>
                              </div>{/*col-md-4*/}
                              <div className="col-md-3" style={{"margin-top":"21px"}}>
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
                                  <a className="navbar-brand" href="#"><img src="./images/mobile-logo.png" style={{"width": "100px","margin-top": "11px"}} /></a>
                              </div>
                          </div>{/*col-md-12*/}
                          <div className="col-xs-3" style={{"margin-top": "28px"}}><MainLogin/></div>
                      </div>{/*row*/}
                      <div className="row" style={{"margin-top": "22px","margin-bottom": "11px"}}>
                          <div className="col-xs-6">
                              <div style={{"float": "right"}}>
                                  <Button type="primary" ghost>
                                      <Link rel="noopener noreferrer" to={`/market_roommates`}>Room Renting</Link>
                                  </Button>
                                  <Button type="primary" ghost style={{"margin-top": "8px"}}>
                                      <Link rel="noopener noreferrer" to={`/market_business`}>Bussiness Listing</Link>
                                  </Button>
                              </div>
                          </div>
                          <div className="col-xs-6">
                              <Button type="primary" ghost style={{"margin-bottom": "8px"}}>
                                  <Link rel="noopener noreferrer" to={`/market_classified`}>Buy & Sell</Link>
                              </Button>
                              <span ><Category/></span>
                          </div>
                      </div>{/*row*/}

                  </div>
              </nav>
          </div>
      )
  }
}
 export default Burgermenu;
