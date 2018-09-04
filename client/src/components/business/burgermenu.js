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
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="col-md-6 col-sm-6 col-xs-6">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="#"><img src="./images/mobile-logo.png"/></a>
            </div>


          </div>

          <div className="col-md-6 col-sm-6 col-xs-6">
            <div style={{ padding: '22px 16px 10px' }}>
              <Button type="primary" ghost>Room Renting</Button>
              <Button type="primary" ghost>Bussiness Listing</Button>
              <Button type="primary" ghost>Buy & Sell</Button>

            </div>
            <div>
              <span>
                  <MainLogin/>
              </span>
            </div>
              <div>
                  <Category/>
              </div>
          </div>
        </div>
      </nav>
    )
  }
}
 export default Burgermenu;
