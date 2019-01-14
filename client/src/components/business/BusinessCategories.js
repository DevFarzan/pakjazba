import React, { Component } from 'react';
import 'antd/dist/antd.css';
import './firstfold.css';
import { connect } from 'react-redux';

class BusinessCategory extends Component{
  /*Category*/
  constructor(props){
      super(props);
      this.clickItem = this.clickItem.bind(this);
  }

  clickItem(item){
      const { dispatch } = this.props;
      var inputValue = item;
      dispatch({type: 'SEARCHON', inputValue})
  }
  /*Category props end*/

  render(){
    return(
      <div className="container" style={{width:"70%"}}>
        <div className="row">
          <h1 className="headingtext"> Browse Businessess by Category </h1>
                <div className="col-lg-3" onClick={() => {this.clickItem('coffee shop')}} style={{cursor:'pointer'}}>
                    <div className="wrimagecard wrimagecard-topimage">
                    <div className="wrimagecard-topimage_header" onClick={() => {this.clickItem('exhibition')}}>
                        <center>
                            <img src="../images/business icon/icons/resturant.png" style={{width: "100%"}}/>
                        </center>
                    </div>
                </div>
                </div>
                <div className="col-lg-3" onClick={() => {this.clickItem('business')}} style={{cursor:'pointer'}}>
                    <div className="wrimagecard wrimagecard-topimage">
                    <div className="wrimagecard-topimage_header" onClick={() => {this.clickItem('exhibition')}}>
                        <center>
                            <img src="../images/business icon/icons/shopping.png" style={{width: "100%"}}/>
                        </center>
                    </div>
                </div>
                </div>
                <div className="col-lg-3" onClick={() => {this.clickItem('hospital')}} style={{cursor:'pointer'}}>
                    <div className="wrimagecard wrimagecard-topimage">
                    <div className="wrimagecard-topimage_header" onClick={() => {this.clickItem('exhibition')}}>
                        <center>
                            <img src="../images/business icon/icons/night-life.png" style={{width: "100%"}}/>
                        </center>
                    </div>
                </div>
                </div>
                <div className="col-lg-3" onClick={() => {this.clickItem('market')}} style={{cursor:'pointer'}}>
                    <div className="wrimagecard wrimagecard-topimage">
                    <div className="wrimagecard-topimage_header" onClick={() => {this.clickItem('exhibition')}}>
                        <center>
                            <img src="../images/business icon/icons/active-life.png" style={{width: "100%"}}/>
                        </center>
                    </div>
                </div>
                </div>
                <div className="col-lg-3" onClick={() => {this.clickItem('restaurant')}} style={{cursor:'pointer'}}>
                    <div className="wrimagecard wrimagecard-topimage">
                    <div className="wrimagecard-topimage_header" onClick={() => {this.clickItem('exhibition')}}>
                        <center>
                            <img src="../images/business icon/icons/beauty-spa.png" style={{width: "100%"}}/>
                        </center>
                    </div>
                </div>
                </div>

                <div className="col-lg-3" onClick={() => {this.clickItem('park')}} style={{cursor:'pointer'}}>
                    <div className="wrimagecard wrimagecard-topimage">
                    <div className="wrimagecard-topimage_header" onClick={() => {this.clickItem('exhibition')}}>
                        <center>
                            <img src="../images/business icon/icons/automotive.png" style={{width: "100%"}}/>
                        </center>
                    </div>
                </div>
                </div>
                <div className="col-lg-3" onClick={() => {this.clickItem('hostel')}} style={{cursor:'pointer'}}>
                    <div className="wrimagecard wrimagecard-topimage">
                    <div className="wrimagecard-topimage_header" onClick={() => {this.clickItem('exhibition')}}>
                        <center>
                            <img src="../images/business icon/icons/home-service.png" style={{width: "100%"}}/>
                        </center>
                    </div>
                </div>
                </div>
                <div className="col-lg-3" onClick={() => {this.clickItem('animal hospital')}} style={{cursor:'pointer'}}>
                    <div className="wrimagecard wrimagecard-topimage">
                    <div className="wrimagecard-topimage_header" onClick={() => {this.clickItem('exhibition')}}>
                        <center>
                            <img src="../images/business icon/icons/see-more.png" style={{width: "100%"}}/>
                        </center>
                    </div>
                </div>
                </div>
        </div>
      </div>
    )
  }
}

export default BusinessCategory;
