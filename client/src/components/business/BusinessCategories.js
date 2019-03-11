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
                    <h1 className="headingtext" style={{fontWeight:'bold'}}> Browse Businessess by Category </h1>
                    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-6" onClick={() => {this.clickItem('resturants')}} style={{cursor:'pointer'}}>
                        <div className="wrimagecard wrimagecard-topimage">
                        <div className="wrimagecard-topimage_header">
                            <center>
                                <img src="../images/business icon/icons/resturant.png" style={{width: "75%"}}/>
                            </center>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-6" onClick={() => {this.clickItem('shopping')}} style={{cursor:'pointer'}}>
                        <div className="wrimagecard wrimagecard-topimage">
                            <div className="wrimagecard-topimage_header">
                                <center>
                                    <img src="../images/business icon/icons/shopping.png" style={{width: "75%"}}/>
                                </center>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-6" onClick={() => {this.clickItem('night life')}} style={{cursor:'pointer'}}>
                        <div className="wrimagecard wrimagecard-topimage">
                            <div className="wrimagecard-topimage_header">
                                <center>
                                    <img src="../images/business icon/icons/night-life.png" style={{width: "75%"}}/>
                                </center>
                            </div>
                        </div>
                    </div>
                     </div>
                     <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-6" onClick={() => {this.clickItem('active life')}} style={{cursor:'pointer'}}>
                        <div className="wrimagecard wrimagecard-topimage">
                            <div className="wrimagecard-topimage_header">
                                <center>
                                    <img src="../images/business icon/icons/active-life.png" style={{width: "75%"}}/>
                                </center>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-6" onClick={() => {this.clickItem('beauty & spa')}} style={{cursor:'pointer'}}>
                        <div className="wrimagecard wrimagecard-topimage">
                            <div className="wrimagecard-topimage_header">
                                <center>
                                    <img src="../images/business icon/icons/beauty-spa.png" style={{width: "75%"}}/>
                                </center>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-6" onClick={() => {this.clickItem('automotive')}} style={{cursor:'pointer'}}>
                        <div className="wrimagecard wrimagecard-topimage">
                            <div className="wrimagecard-topimage_header">
                                <center>
                                    <img src="../images/business icon/icons/automotive.png" style={{width: "75%"}}/>
                                </center>
                            </div>
                        </div>
                    </div>
                    {/*<div className="col-lg-3 col-md-3 col-sm-4 col-xs-6" onClick={() => {this.clickItem('home service')}} style={{cursor:'pointer'}}>
                        <div className="wrimagecard wrimagecard-topimage">
                            <div className="wrimagecard-topimage_header">
                                <center>
                                    <img src="../images/business icon/icons/home-service.png" style={{width: "100%"}}/>
                                </center>
                            </div>
                        </div>
                    </div>*/}
                    {/*<div className="col-lg-3 col-md-3 col-sm-4 col-xs-6" onClick={() => {this.clickItem('see more')}} style={{cursor:'pointer'}}>
                        <div className="wrimagecard wrimagecard-topimage">
                            <div className="wrimagecard-topimage_header">
                                <center>
                                    <img src="../images/business icon/icons/see-more.png" style={{width: "100%"}}/>
                                </center>
                            </div>
                        </div>
                    </div>*/}
                </div>
            </div>
        )
    }
}

export default connect()(BusinessCategory);
