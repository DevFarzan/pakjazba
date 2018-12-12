import React, { Component } from 'react';
import 'antd/dist/antd.css';
import './firstfold.css'
import { connect } from 'react-redux';

class Firstfold extends Component{
    constructor(props){
        super(props);
        this.clickItem = this.clickItem.bind(this);
    }

    clickItem(item){
        const { dispatch } = this.props;
        var inputValue = item;
        dispatch({type: 'SEARCHON', inputValue})
    }

    render(){
        return(
            <div className="row">
                <h1 className="text-align" style={{fontWeight:"bold"}}>  What Do You Need To find? </h1>
                <div className="col-md-2"></div>
                <div className='col-md-8'>
                    <div className="index-content">
                        <div className="col-lg-3" onClick={() => {this.clickItem('coffee shop')}} style={{cursor:'pointer'}}>
                            <div className="wrimagecard wrimagecard-topimage">
                            <div className="wrimagecard-topimage_header" onClick={() => {this.clickItem('exhibition')}}>
                                <center>
                                    <img src="../images/business icon/coffee-shop.png" style={{width: "100%"}}/>
                                </center>
                            </div>
                        </div>
                        </div>
                        <div className="col-lg-3" onClick={() => {this.clickItem('business')}} style={{cursor:'pointer'}}>
                            <div className="wrimagecard wrimagecard-topimage">
                            <div className="wrimagecard-topimage_header" onClick={() => {this.clickItem('exhibition')}}>
                                <center>
                                    <img src="../images/business icon/business.png" style={{width: "100%"}}/>
                                </center>
                            </div>
                        </div>
                        </div>
                        <div className="col-lg-3" onClick={() => {this.clickItem('hospital')}} style={{cursor:'pointer'}}>
                            <div className="wrimagecard wrimagecard-topimage">
                            <div className="wrimagecard-topimage_header" onClick={() => {this.clickItem('exhibition')}}>
                                <center>
                                    <img src="../images/business icon/hospital.png" style={{width: "100%"}}/>
                                </center>
                            </div>
                        </div>
                        </div>
                        <div className="col-lg-3" onClick={() => {this.clickItem('market')}} style={{cursor:'pointer'}}>
                            <div className="wrimagecard wrimagecard-topimage">
                            <div className="wrimagecard-topimage_header" onClick={() => {this.clickItem('exhibition')}}>
                                <center>
                                    <img src="../images/business icon/market.png" style={{width: "100%"}}/>
                                </center>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="index-content">
                        <div className="col-lg-3" onClick={() => {this.clickItem('restaurant')}} style={{cursor:'pointer'}}>
                            <div className="wrimagecard wrimagecard-topimage">
                            <div className="wrimagecard-topimage_header" onClick={() => {this.clickItem('exhibition')}}>
                                <center>
                                    <img src="../images/business icon/restaurant.png" style={{width: "100%"}}/>
                                </center>
                            </div>
                        </div>
                        </div>
                        <div className="col-lg-3" onClick={() => {this.clickItem('park')}} style={{cursor:'pointer'}}>
                            <div className="wrimagecard wrimagecard-topimage">
                            <div className="wrimagecard-topimage_header" onClick={() => {this.clickItem('exhibition')}}>
                                <center>
                                    <img src="../images/business icon/park.png" style={{width: "100%"}}/>
                                </center>
                            </div>
                        </div>
                        </div>
                        <div className="col-lg-3" onClick={() => {this.clickItem('hostel')}} style={{cursor:'pointer'}}>
                            <div className="wrimagecard wrimagecard-topimage">
                            <div className="wrimagecard-topimage_header" onClick={() => {this.clickItem('exhibition')}}>
                                <center>
                                    <img src="../images/business icon/hotel.png" style={{width: "100%"}}/>
                                </center>
                            </div>
                        </div>
                        </div>
                        <div className="col-lg-3" onClick={() => {this.clickItem('animal hospital')}} style={{cursor:'pointer'}}>
                            <div className="wrimagecard wrimagecard-topimage">
                            <div className="wrimagecard-topimage_header" onClick={() => {this.clickItem('exhibition')}}>
                                <center>
                                    <img src="../images/business icon/animal-hospital.png" style={{width: "100%"}}/>
                                </center>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-2"></div>
            </div>

        )
    }
}

export default connect()(Firstfold);
