import React, { Component } from 'react';
import MainLogin from '../../header/mainLogin';
import Category from '../../header/getcategory';
import { Link } from "react-router-dom";
import { Menu, Icon, Button } from 'antd';

const SubMenu = Menu.SubMenu;


class EHeader extends Component{

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
    return(
      <div>
          <nav className="navbar navbar-fixed-top hidden-xs"
               style={{position: "fixed", width: "100%", "zIndex": "999", marginTop: "-19px",background:"#032a30",border:'none'}}>
              <div className="container-fluid">
                  <div className="col-md-2 col-sm-6 col-xs-6">
                      <div className="navbar-header">
                          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false" >
                              <span className="sr-only">Toggle navigation</span>
                              <span className="icon-bar"></span>
                              <span className="icon-bar"></span>
                              <span className="icon-bar"></span>
                          </button>
                          <Link to={`/`} className="navbar-brand"><img alt='' src="https://res.cloudinary.com/dxk0bmtei/image/upload/v1544616262/mobile-logo_knmrrp.png" style={{"width": "100px",marginTop: "28px"}} /></Link>
                      </div>
                  </div>
                  <div className="col-md-10 col-sm-6 col-xs-6">
                      <div className="row">
                          <div className="col-md-7">
                             {/* <div style={{ padding: '22px 16px 10px',"float": "right"}}>
                                  <Button type="button_globalclassName" name='room' ghost className="button_globalclassName">
                                      <Link rel="noopener noreferrer" to={`/market_roommates`}>Room Renting</Link>
                                  </Button>
                                  <Button type="button_globalclassName" name='bussiness' ghost style={{marginRight: "10px", marginLeft: "10px"}} className="button_globalclassName">
                                      <Link rel="noopener noreferrer" to={`/market_business`}>Business Listing</Link>
                                  </Button>
                                  <Button type="button_globalclassName" name='buySell' ghost className="button_globalclassName" style={{marginRight: '10px'}}>
                                      <Link rel="noopener noreferrer" to={`/market_classified`}>Buy & Sell</Link>
                                  </Button>
                                  <Button type="button_globalclassName" name='buySell' ghost className="button_globalclassName">
                                      <Link rel="noopener noreferrer" to={`/market_jobPortal`}>Job Portal</Link>
                                  </Button>
                                  <Button type="button_globalclassName" name='events' ghost className="button_globalclassName">
                                      <Link rel="noopener noreferrer" to={`/market_eventPortal`}>Events</Link>
                                  </Button>
                                  <Button type="button_globalclassName" name='events' ghost className="button_globalclassName">
                                      <Link rel="noopener noreferrer" to={`/detail_eventPortal`}>Details</Link>
                                  </Button>
                                  <Button type="button_globalclassName" name='events' ghost className="button_globalclassName">
                                      <Link rel="noopener noreferrer" to={`/Ticket_eventPortals`}>Ticket Detail</Link>
                                  </Button>
                                  <Button type="button_globalclassName" name='events' ghost className="button_globalclassName">
                                      <Link rel="noopener noreferrer" to={`/Buyer_DetailPage`}>Buyer Detail</Link>
                                  </Button>
                              </div>*/}
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

      <div style={{background:'#ececec',width:'100%'}} className="hidden-xs">

         <Link to={`/`}><span className="glyphicon glyphicon-home" style={{color:'black',fontSize:'17px',margin: '21px',cursor:'pointer'}}>
         </span></Link>
         <span type="" name='room' ghost className="button_globalclassName">
             <Link  rel="noopener noreferrer" to={`/entertainment_Home`} style={{color:'black',fontSize:'17px',margin: '21px'}}>Entertainment</Link>
         </span>
         <span type="" name='bussiness' ghost style={{marginRight: "10px", marginLeft: "10px"}} className="button_globalclassName">
             <Link rel="noopener noreferrer" to={`/entertainment_detail`} style={{color:'black',fontSize:'17px',margin: '21px'}}>DetailPage</Link>
         </span>
         <span type="" name='Category' ghost className="button_globalclassName" style={{marginRight: '10px'}}>
             <Link rel="noopener noreferrer" to={`/market_eventPortal`} style={{color:'black',fontSize:'17px',margin: '21px'}}>Movies</Link>
         </span>
         <span type="" name='buySell' ghost className="button_globalclassName">
             <Link rel="noopener noreferrer" to={`/entertainment_Category`} style={{color:'black',fontSize:'17px',margin: '21px'}}>Dramas</Link>
         </span>
         <span type="" name='events' ghost className="button_globalclassName">
             <Link rel="noopener noreferrer" to={`/entertainment_music`} style={{color:'black',fontSize:'17px',margin: '21px'}}>Music</Link>
         </span>
         <span type="" name='EcommerceMarket' ghost className="button_globalclassName">
             <Link rel="noopener noreferrer" to={`/music_detail`} style={{color:'black',fontSize:'17px',margin: '21px'}}>Browse</Link>
         </span>
         <span type="" name='EcommerceMarket' ghost className="button_globalclassName">
             <Link rel="noopener noreferrer" to={`/detail_ecommercedetail`} style={{color:'black',fontSize:'17px',margin: '21px'}}>News</Link>
         </span>
       </div>
      </nav>

      </div>

    )
  }
}
export default EHeader;
