import React, { Component } from 'react';
import './burgermenu.css';
import { Button } from 'antd';
import { Input } from 'antd';
import { Anchor } from 'antd';
import MainLogin from '../mainLogin';
import Category from '../getcategory';
// import SignIn from './SignIn';
// import SignUp from './SignUp';


class Burgermenu extends Component{

  state ={SingingIn: ""};

  update(e) {
    this.setState({SingingIn: e.target.value});
  }

  handleChange=() =>{
    alert(this.state.SingingIn)
  }

  render(){
    const { Link } = Anchor;

    return(
      <div>
      <nav className="navbar navbar-default hidden-xs" style={{"margin-top": "2px"}}>
        <div className="container-fluid">
          <div className="col-md-2 col-sm-6 col-xs-6">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="#"><img src="./images/mobile-logo.png" style={{"width": "100px","margin-top": "11px"}} /></a>
            </div>


          </div>

          <div className="col-md-10 col-sm-6 col-xs-6">
            <div className="row">
                <div className="col-md-7">
                    <div style={{ padding: '22px 16px 10px',"float": "right"}}>
                      <Button type="primary" ghost>Room Renting</Button>
                      <Button type="primary" ghost style={{"margin-right": "10px","margin-left": "10px"}}>Bussiness Listing</Button>
                      <Button type="primary" ghost>Buy & Sell</Button>
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
                      <Button type="primary" ghost>Room Renting</Button>
                      <Button type="primary" ghost style={{"margin-top": "8px"}}>Bussiness Listing</Button>
                    </div>
            </div>        
            <div className="col-xs-6"> 
              <Button type="primary" ghost style={{"margin-bottom": "8px"}}>Buy & Sell</Button>
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
