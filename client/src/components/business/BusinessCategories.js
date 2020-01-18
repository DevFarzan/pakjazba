import React, { Component } from 'react';
import 'antd/dist/antd.css';
import './firstfold.css';
import { connect } from 'react-redux';

class BusinessCategory extends Component {
    /*Category*/
    constructor(props) {
        super(props);
        this.state = {
            intervalId: 0
        };
        // this.clickItem = this.clickItem.bind(this);
    }

    // clickItem(item) {
    //     const { dispatch } = this.props;
    //     var inputValue = item;
    //     dispatch({ type: 'SEARCHON', inputValue });

    // }
    // /*Category props end*/
    clickItem(item) {
        this.props.mainCategoryFilter(item)
    }

    render() {
        return (
            <div className="container" style={{ width: "100%" }}>
                <div className="row">
                    {/* <h1 className="headingtext" style={{fontWeight:'bold'}}> Browse Businessess by Category </h1> */}
                    <a href="#backToTop">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12" onClick={() => { this.clickItem('Advertising Agency') }} style={{ cursor: 'pointer' }}>
                            <div className="wrimagecard wrimagecard-topimage">
                                <div className="wrimagecard-topimage_headerBusines1">
                                    <center>
                                        <h3 className="categoryInnerText">Advertising Agency</h3>
                                    </center>
                                </div>
                            </div>
                        </div>
                    </a>
                    <a href="#backToTop">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12" onClick={() => { this.clickItem('Answering Service') }} style={{ cursor: 'pointer' }}>
                            <div className="wrimagecard wrimagecard-topimage">
                                <div className="wrimagecard-topimage_headerBusines2">
                                    <center>
                                        <h3 className="categoryInnerText">Answering Service</h3>
                                    </center>
                                </div>
                            </div>
                        </div>
                    </a>
                    <a href="#backToTop">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12" onClick={() => { this.clickItem('Audio Visual Equipment Hire') }} style={{ cursor: 'pointer' }}>
                            <div className="wrimagecard wrimagecard-topimage">
                                <div className="wrimagecard-topimage_headerBusines3">
                                    <center>
                                        <h3 className="categoryInnerText">Audio Visual Equipment Hire</h3>
                                    </center>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="row">
                    <a href="#backToTop">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12" onClick={() => { this.clickItem('Branding Consultant') }} style={{ cursor: 'pointer' }}>
                            <div className="wrimagecard wrimagecard-topimage">
                                <div className="wrimagecard-topimage_headerBusines4">
                                    <center>
                                        <h3 className="categoryInnerText">Branding Consultant</h3>
                                    </center>
                                </div>
                            </div>
                        </div>
                    </a>
                    <a href="#backToTop">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12" onClick={() => { this.clickItem('Business Advisor') }} style={{ cursor: 'pointer' }}>
                            <div className="wrimagecard wrimagecard-topimage">
                                <div className="wrimagecard-topimage_headerBusines5">
                                    <center>
                                        <h3 className="categoryInnerText">Business Advisor</h3>
                                    </center>
                                </div>
                            </div>
                        </div>
                    </a>
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
