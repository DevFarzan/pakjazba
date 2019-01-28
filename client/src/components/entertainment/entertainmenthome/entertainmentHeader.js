import React, { Component } from 'react';
import MainLogin from '../../header/mainLogin';
import Category from '../../header/getcategory';
import { Link } from "react-router-dom";
import { Menu, Icon, Button } from 'antd';
import axios from "axios/index";

const SubMenu = Menu.SubMenu;


class EHeader extends Component{
    constructor(props) {
        super(props)
        this.state = {
            inputValue: '',
            searchArr: []
        }
    }

    onChange(e){
        this.setState({ inputValue: e.target.value });
    }

    searchText = async (e) => {
        e.preventDefault();
        const { inputValue } = this.state,
        { entertainment } = this.props;
        if(!!inputValue){
            let data = await axios.get(`https://api.dailymotion.com/videos?fields=embed_url,id,thumbnail_120_url,description,thumbnail_url,title,&country=pk&sort=recent&tags=${inputValue}&page=1&limit=100`);          
            let arr = data.data.list;
            this.props.history.push({pathname: `/entertainment_Category/${inputValue}`, state: {arr,entertainment}})
        }
    }

  render(){
    const { entertainment } = this.props,
    { news, sports, dramas, movies } = entertainment;

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
         <span type="" name='room' className="button_globalclassName">
             <Link  rel="noopener noreferrer" to={`/entertainment_Home`} style={{color:'black',fontSize:'17px',margin: '21px'}}>Entertainment</Link>
         </span>         
         <span type="" name='Category' className="button_globalclassName" style={{marginRight: '10px'}}>
             <Link rel="noopener noreferrer" to={{pathname: `/entertainment_Category/${'Movies'}`, state: {movies, entertainment}}} style={{color:'black',fontSize:'17px',margin: '21px'}}>Movies</Link>
         </span>
         <span type="" name='buySell' className="button_globalclassName">
             <Link rel="noopener noreferrer" to={{pathname: `/entertainment_Category/${'Dramas'}`, state: {dramas, entertainment}}} style={{color:'black',fontSize:'17px',margin: '21px'}}>Dramas</Link>
         </span>
         <span type="" name='events' className="button_globalclassName">
             <Link rel="noopener noreferrer" to={`/entertainment_music`} style={{color:'black',fontSize:'17px',margin: '21px'}}>Music</Link>
         </span>         
         <span type="" name='EcommerceMarket' className="button_globalclassName">
             <Link rel="noopener noreferrer" to={{pathname: `/entertainment_Category/${'Sports'}`, state: {sports, entertainment}}} style={{color:'black',fontSize:'17px',margin: '21px'}}>Sports</Link>
         </span>
         <span type="" name='EcommerceMarket' className="button_globalclassName">
             <Link rel="noopener noreferrer" to={{pathname: `/entertainment_Category/${'News'}`, state: {news, entertainment}}} style={{color:'black',fontSize:'17px',margin: '21px'}}>News</Link>
         </span>
         <span className="button_globalclassName">
         <form>
            <div className="input-group" 
              // style={{marginTop: '-40px', marginRight: '20px', paddingBottom: '10px'}}
              >
              <input type="text" required
                  className="form-control" 
                  // style={{width: '20%', float: 'right'}} 
                  placeholder="Search"
                  onChange={this.onChange.bind(this)}/>
              <span className="input-group-btn">
                  <button className="btn btn-theme" type="submit" 
                      // style={{backgroundColor:'#37a99b',color:'white'}}
                      onClick={this.searchText}><i className="fa fa-search"/>
                  </button>
              </span>
            </div>
          </form>
         </span>
       </div>
      </nav>

      </div>

    )
  }
}
export default EHeader;
