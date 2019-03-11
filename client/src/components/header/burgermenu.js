import React, { Component } from 'react';
import './burgermenu.css';
import MainLogin from '../header/mainLogin';
import Category from '../header/getcategory';
import EHeader from '../entertainment/entertainmenthome/entertainmentHeader';
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
  openNav = ()=>{
    document.getElementById("myNav").style.width = "100%";
  }
  closeNav = () =>{
    document.getElementById("myNav").style.width = "0%";
  }
  render(){
    //const hidemenu = false;
      return(
          <div>
              <nav className="navbar navbar-fixed-top hidden-xs"
                   style={{position: "fixed", width: "100%", "zIndex": "999", marginTop: "-19px",border:'none'}}>
                  <div className="container-fluid" style={{padding:"0"}}>
                      <div className="col-md-2 col-sm-6 col-xs-6">
                          <div className="navbar-header">
                              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false" >
                                  <span className="sr-only">Toggle navigation</span>
                                  <span className="icon-bar"></span>
                                  <span className="icon-bar"></span>
                                  <span className="icon-bar"></span>
                              </button>
                                  <Link to={`/`} className="navbar-brand hidden-sm">
                                      <img alt='' src="../images/pakjazba_new.png" style={{"width": "100%",marginTop: "32px",marginLeft:'35%'}} />
                                  </Link>
                                  <Link to={`/`} className="navbar-brand visible-sm">
                                      <img alt='' src="../images/pakjazba_new.png" style={{"width": "100%",marginTop: "8px"}} />
                                  </Link>

                          </div>
                      </div>
                      <div className="col-md-10 col-sm-6 col-xs-6">
                          <div className="row">
                              <div className="col-md-7">
                              </div>{/*col-md-4*/}
                              <div className="col-md-2 col-sm-6 col-xs-12" style={{marginTop: "26px"}}>
                                  <MainLogin/>
                              </div>{/*col-md-4*/}
                              <div className="col-md-3 col-sm-6 col-xs-12" style={{marginTop: "21px"}}>
                                  <Category/>
                              </div>{/*col-md-4*/}
                          </div>{/*row*/}
                      </div>
                  </div>

             <div className="row hidden-sm">
                    <div style={{background:'rgba(236, 236, 236, 0.48)',height:'42px'}}>
                      <span type="" name='room' ghost className="button_globalclassName col-md-2 col-sm-2 global_submenu">
                          <Link  rel="noopener noreferrer" to={`/market_roommates`} className="navigationfont">Room Renting</Link>
                      </span>
                      <span type="" name='bussiness' ghost className="button_globalclassName col-md-2 col-sm-2 global_submenu">
                          <Link rel="noopener noreferrer" to={`/market_business`} className="navigationfont">Business Listing</Link>
                      </span>
                      <span type="" name='buySell' ghost className="button_globalclassName col-md-2 col-sm-2 global_submenu">
                          <Link rel="noopener noreferrer" to={`/market_classified`} className="navigationfont">Buy & Sell</Link>
                      </span>
                      <span type="" name='buySell' ghost className="button_globalclassName col-md-2 col-sm-2 global_submenu">
                          <Link rel="noopener noreferrer" to={`/market_jobPortal`} className="navigationfont">Job Portal</Link>
                      </span>
                      <span type="" name='events' ghost className="button_globalclassName col-md-2 col-sm-2 global_submenu">
                          <Link rel="noopener noreferrer" to={`/market_eventPortal`} className="navigationfont">Events</Link>
                      </span>
                      <span type="" name='events' ghost className="button_globalclassName col-md-2 col-sm-2 global_submenu">
                          <Link rel="noopener noreferrer" to={`/entertainment_Home`} className="navigationfont">Entertainment</Link>
                      </span>

                      {/*// <span type="" name='events' ghost className="button_globalclassName col-md-2 global_submenu">
                      //     <Link rel="noopener noreferrer" to={`/user_upload`} style={{color:'black',fontSize:'15px'}}>User</Link>
                      // </span>*/}
                </div>
                 {this.props.entertainment && <div className="row"  className="hidden-sm">
                    <EHeader entertainment={this.props.entertainment}/>
                </div>}



                {/*<span type="" name='events' ghost className="button_globalclassName">
                    <Link rel="noopener noreferrer" to={`/detail_eventPortal`} style={{color:'black',fontSize:'17px',margin: '21px'}}>Details</Link>
                </span>*/}
                {/*<span type="" name='events' ghost className="button_globalclassName">
                    <Link rel="noopener noreferrer" to={`/Ticket_eventPortals`} style={{color:'black',fontSize:'17px',margin: '21px'}}>Ticket Detail</Link>
                </span>*/}
                {/*<span type="" name='events' ghost className="button_globalclassName">
                    <Link rel="noopener noreferrer" to={`/Buyer_DetailPage`} style={{color:'black',fontSize:'17px',margin: '21px'}}>Buyer Detail</Link>
                </span>*/}
              </div>
              <div className="row visible-sm">
                     <div style={{background:'rgba(236, 236, 236, 0.48)',width:'100%',height:'25px',marginLeft:'0px', paddingLeft:"26px", paddingRight:"13px"}}>
                       <span type="" name='room' ghost className="button_globalclassName col-md-2 col-sm-2">
                           <Link  rel="noopener noreferrer" to={`/market_roommates`} style={{color:'black',fontSize:'12px'}}>Room Renting</Link>
                       </span>
                       <span type="" name='bussiness' ghost className="button_globalclassName col-md-2 col-sm-2">
                           <Link rel="noopener noreferrer" to={`/market_business`} style={{color:'black',fontSize:'12px'}}>Business Listing</Link>
                       </span>
                       <span type="" name='buySell' ghost className="button_globalclassName col-md-2 col-sm-2">
                           <Link rel="noopener noreferrer" to={`/market_classified`} style={{color:'black',fontSize:'12px'}}>Buy & Sell</Link>
                       </span>
                       <span type="" name='buySell' ghost className="button_globalclassName col-md-2 col-sm-2">
                           <Link rel="noopener noreferrer" to={`/market_jobPortal`} style={{color:'black',fontSize:'12px'}}>Job Portal</Link>
                       </span>
                       <span type="" name='events' ghost className="button_globalclassName col-md-2 col-sm-2">
                           <Link rel="noopener noreferrer" to={`/market_eventPortal`} style={{color:'black',fontSize:'12px'}}>Events</Link>
                       </span>
                       <span type="" name='events' ghost className="button_globalclassName col-md-2 col-sm-2">
                           <Link rel="noopener noreferrer" to={`/entertainment_Home`} style={{color:'black',fontSize:'12px'}}>Entertainment</Link>
                       </span>
                       {/*// <span type="" name='events' ghost className="button_globalclassName col-md-2 global_submenu">
                       //     <Link rel="noopener noreferrer" to={`/user_upload`} style={{color:'black',fontSize:'15px'}}>User</Link>
                       // </span>*/}
                 </div>
                 {this.props.entertainment && <div className="row"  className="visible-sm">
                     <EHeader entertainment={this.props.entertainment}/>
                 </div>}



                 {/*<span type="" name='events' ghost className="button_globalclassName">
                     <Link rel="noopener noreferrer" to={`/detail_eventPortal`} style={{color:'black',fontSize:'17px',margin: '21px'}}>Details</Link>
                 </span>*/}
                 {/*<span type="" name='events' ghost className="button_globalclassName">
                     <Link rel="noopener noreferrer" to={`/Ticket_eventPortals`} style={{color:'black',fontSize:'17px',margin: '21px'}}>Ticket Detail</Link>
                 </span>*/}
                 {/*<span type="" name='events' ghost className="button_globalclassName">
                     <Link rel="noopener noreferrer" to={`/Buyer_DetailPage`} style={{color:'black',fontSize:'17px',margin: '21px'}}>Buyer Detail</Link>
                 </span>*/}
               </div>
              </nav>
              {/*=============================================visible xs============================================*/}
              {/*<nav className="navbar navbar-default visible-xs">
                  <div className="container-fluid">
                      <div className="row">
                          <div className="col-xs-12">
                              <div className="navbar-header">
                                  <a  className="navbar-brand"><Link to={`/`}><img alt='' src="./images/mobile-logo.png" style={{"width": "100px", marginTop: "11px"}} /></Link></a>
                                  <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="true" onClick={()=>this.setState({hidemenu:!this.state.hidemenu})}>
                                      <span class="sr-only">Toggle navigation</span>
                                      <span class="icon-bar"></span>
                                      <span class="icon-bar"></span>
                                      <span class="icon-bar"></span>
                                  </button>
                              </div>
                          </div>
                      </div>
                      <ul className="list-group">
                      {this.state.hidemenu && <div className="" style={{marginTop: "22px",marginBottom: "11px"}} >
                         <li className="list-group-item" style={{padding:'19px'}}>
                            <div className="col-xs-12" style={{marginTop:'-12px'}}>
                                  <span>
                                      <Link rel="noopener noreferrer" to={`/market_roommates`}>Room Renting</Link>
                                  </span>
                            </div>
                          </li>
                          <li className="list-group-item" style={{padding:'19px'}}>
                              <div className="col-xs-12" style={{marginTop:'-12px'}}>
                                  <span style={{marginTop: "8px"}}>
                                      <Link rel="noopener noreferrer" to={`/market_business`}>Business Listing</Link>
                                  </span>
                              </div>
                          </li>
                           <li className="list-group-item" style={{padding:'19px'}} >
                              <div className="col-xs-12" style={{marginTop:'-12px'}}>
                                  <span style={{marginTop: "8px"}}>
                                      <Link rel="noopener noreferrer" to={`/market_classified`}>Buy & Sell</Link>
                                  </span>
                              </div>
                          </li>
                          <li className="list-group-item" style={{padding:'19px'}}>
                          <div className="col-xs-12" style={{marginTop: "-15px"}}>
                              <span><Category/></span>
                          </div>
                          </li>
                          <li className="list-group-item" style={{padding:'19px'}}>
                          <div className="col-xs-12" style={{marginTop: "-12px"}}>
                              <div style={{backgroundColor:'#37a99b',width: '37%'}}><MainLogin/></div>
                          </div>
                          </li>
                      </div>}
                    </ul>
                  </div>
              </nav>*/}

           <div id="myNav" className="overlay visible-xs navbar-fixed-top" style={{background:'rgb(3, 42, 48)'}}>
          <a href="javascript:void(0)" className="closebtn" onClick={this.closeNav} style={{marginTop:'-8%'}}>&times;</a>
          <div className="overlay-content">
          <div className="row">
              <div className="col-xs-6">
                  <MainLogin/>
              </div>{/*col-md-4*/}
              <div className="col-xs-6">
                  <Category/>
              </div>{/*col-md-4*/}
          </div>{/*row*/}
            <span>
                <Link rel="noopener noreferrer" to={`/market_roommates`} onClick={this.closeNav}>Room Renting</Link>
            </span>
            <span style={{marginTop: "8px"}}>
                <Link rel="noopener noreferrer" to={`/market_business`}>Business Listing</Link>
            </span>
            <span style={{marginTop: "8px"}}>
                <Link rel="noopener noreferrer" to={`/market_classified`}>Buy & Sell</Link>
            </span>
            <span style={{marginTop: "8px"}}>
                <Link rel="noopener noreferrer" to={`/market_jobPortal`}>Job Portal</Link>
            </span>
            <span style={{marginTop: "8px"}}>
                <Link rel="noopener noreferrer" to={`/entertainment_Home`}>Entertainment</Link>
            </span>

          </div>
        </div>

        <div className="row visible-xs" style={{background:'rgb(3, 42, 48)'}}>
          <div className="col-md-4 col-xs-4">
            <i onClick={this.openNav} className="fa fa-bars" style={{color:'white',marginLeft:'8px',fontSize:'24px',marginTop:'10px',cursor:'pointer'}}></i>
          </div>
          <div className="col-md-4 col-xs-4">
              <Link to={`/`}><img src="../images/logo.png" style={{width:'80%'}} /></Link>
          </div>
          <div className="col-md-4 col-xs-4">
            {/*<i class="fas fa-search"></i>*/}
          </div>

          </div>
          {this.props.entertainment && <div className="row"  className="visible-xs">
              <EHeader entertainment={this.props.entertainment}/>
          </div>}
          </div>

      )
  }
}
 export default Burgermenu;
