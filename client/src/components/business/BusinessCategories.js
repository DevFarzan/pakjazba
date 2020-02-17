import React, { Component } from 'react';
import 'antd/dist/antd.css';
import './firstfold.css';
import { connect } from 'react-redux';

class BusinessCategory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            intervalId: 0
        };
    }

   
    clickItem(item) {
        this.props.mainCategoryFilter(item)
    }

    render() {
        return (
            <div className="container" style={{ width: "100%" }}>
                <div className="row">
                    {/* <h1 className="headingtext" style={{fontWeight:'bold'}}> Browse Businessess by Category </h1> */}
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12" onClick={() => { this.clickItem('Advertising Agency') }} style={{ cursor: 'pointer' }}>
                        <div className="wrimagecard wrimagecard-topimage">
                            <div className="wrimagecard-topimage_headerBusines1">
                                <center>
                                    <h3 className="categoryInnerText">Advertising Agency</h3>
                                </center>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12" onClick={() => { this.clickItem('Answering Service') }} style={{ cursor: 'pointer' }}>
                        <div className="wrimagecard wrimagecard-topimage">
                            <div className="wrimagecard-topimage_headerBusines2">
                                <center>
                                    <h3 className="categoryInnerText">Answering Service</h3>
                                </center>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12" onClick={() => { this.clickItem('Audio Visual Equipment Hire') }} style={{ cursor: 'pointer' }}>
                        <div className="wrimagecard wrimagecard-topimage">
                            <div className="wrimagecard-topimage_headerBusines3">
                                <center>
                                    <h3 className="categoryInnerText">Audio Visual Equipment Hire</h3>
                                </center>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12" onClick={() => { this.clickItem('Branding Consultant') }} style={{ cursor: 'pointer' }}>
                        <div className="wrimagecard wrimagecard-topimage">
                            <div className="wrimagecard-topimage_headerBusines4">
                                <center>
                                    <h3 className="categoryInnerText">Branding Consultant</h3>
                                </center>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12" onClick={() => { this.clickItem('Business Advisor') }} style={{ cursor: 'pointer' }}>
                        <div className="wrimagecard wrimagecard-topimage">
                            <div className="wrimagecard-topimage_headerBusines5">
                                <center>
                                    <h3 className="categoryInnerText">Business Advisor</h3>
                                </center>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12" onClick={() => { this.clickItem('Car Sales Showroom') }} style={{ cursor: 'pointer' }}>
                        <div className="wrimagecard wrimagecard-topimage">
                            <div className="wrimagecard-topimage_headerBusines6">
                                <center>
                                    <h3 className="categoryInnerText">Car Sales Showroom</h3>
                                </center>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12" onClick={() => { this.clickItem('Chef') }} style={{ cursor: 'pointer' }}>
                        <div className="wrimagecard wrimagecard-topimage">
                            <div className="wrimagecard-topimage_headerBusines7">
                                <center>
                                    <h3 className="categoryInnerText">Chef</h3>
                                </center>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12" onClick={() => { this.clickItem('Clothing Supplier') }} style={{ cursor: 'pointer' }}>
                        <div className="wrimagecard wrimagecard-topimage">
                            <div className="wrimagecard-topimage_headerBusines8">
                                <center>
                                    <h3 className="categoryInnerText">Clothing Supplier</h3>
                                </center>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12" onClick={() => { this.clickItem('Human Resources Consultant') }} style={{ cursor: 'pointer' }}>
                        <div className="wrimagecard wrimagecard-topimage">
                            <div className="wrimagecard-topimage_headerBusines9">
                                <center>
                                    <h3 className="categoryInnerText">Human Resources Consultant</h3>
                                </center>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12" onClick={() => { this.clickItem('Internet Marketing Consultant') }} style={{ cursor: 'pointer' }}>
                        <div className="wrimagecard wrimagecard-topimage">
                            <div className="wrimagecard-topimage_headerBusines10">
                                <center>
                                    <h3 className="categoryInnerText">Internet Marketing Consultant</h3>
                                </center>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect()(BusinessCategory);
