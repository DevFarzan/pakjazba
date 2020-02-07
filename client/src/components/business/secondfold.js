import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Rate } from 'antd';
import './secondfold.css'
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

import _ from 'underscore'

class Secondfold extends Component {

    constructor(props) {
        super(props);

    }


    render() {
        const { showBusiness, filteredData, notFoundFilterData, showRecord, categoroyOfRoom, stateOfBusniess, cityOfRoom, accomodatesOfRoom,
            removeValue, showAllRooms } = this.props;
        return (
            <div className="container" style={{ width: "100%" }}>
                {/* {!this.state.loader && showBusiness.length == 0 && <div className="secondfold">
                <h4 className="headingtext2"><b>No Business to show</b></h4>
            </div>} */}
                <div className="row">
                    {categoroyOfRoom && categoroyOfRoom.length > 0 && <div className="col-xs-5 col-sm-3 col-md-3 col-lg-3">
                        {categoroyOfRoom.map((elem, key) => {
                            return (
                                <div className="cross-card">
                                    <li>{elem}<span class="close crossBtnExlpre"
                                        onClick={removeValue.bind(this, 'category', elem)}
                                    >x</span></li>
                                </div>)
                        })}
                    </div>}
                    {stateOfBusniess && stateOfBusniess.length > 0 && <div className="col-xs-5 col-sm-2 col-md-2 col-lg-2">
                        {stateOfBusniess.map((elem, key) => {
                            return (
                                <div className="cross-card">
                                    <li>{elem}<span class="close crossBtnExlpre"
                                        onClick={removeValue.bind(this, 'state', elem)}
                                    >x</span></li>
                                </div>)
                        })}
                    </div>}
                    {cityOfRoom && cityOfRoom.length > 0 && <div className="col-xs-5 col-sm-2 col-md-2 col-lg-2">
                        {cityOfRoom.map((elem, key) => {
                            return (
                                <div className="cross-card">
                                    <li>{elem}<span class="close crossBtnExlpre"
                                        onClick={removeValue.bind(this, 'city', elem)}
                                    >x</span></li>
                                </div>)
                        })}
                    </div>}
                </div>
                <div className="secondfold2">
                    {/* {!text && showBusiness.length > 0 && <h1 className="headingtext2" style={{color:'black',margin: '0px', fontFamily: 'Source Sans Pro, sans-serif',fontWeight:'bold', fontSize:"30px"}}> Find the Best Business </h1>} */}
                    {/* {!text && showBusiness.length > 0 && <h4 className="headingtext2" style={{color:'black',margin: '0px', fontFamily: 'Source Sans Pro, sans-serif',fontWeight:'bold'}}> Find the Best Business </h4>} 
                    {text && !!filteredArr.length === false && <span style={{textAlign:"center"}}><h1>Not found....</h1></span>}
                    {text && !!filteredArr.length === false && <span style={{textAlign:"center"}}><h5>you can find your search by type</h5></span>}
                    {text && !!filteredArr.length === false && <div className="col-md-12" style={{textAlign:"center"}}><button type="button" className="btn2 btn2-success" onClick={this.onAddMore}>Go Back</button></div>} */}

                    <div className="index-content" style={{ marginTop: '0' }}>
                        <div className="row">
                            {notFoundFilterData && filteredData.length == 0 ?
                                <div className="noRecrdTxt">
                                    <p>
                                        No Record Found
                                    </p>
                                    <button
                                        onClick={showAllRooms}
                                    >Back</button>
                                </div>
                                :
                                filteredData.map((elem, key) => {
                                    let str = elem.businessaddress || '';
                                    if (str.length > 25) {
                                        str = str.substring(0, 25);
                                        str = str + '...'
                                    }
                                    return (
                                        <Link key={key} to={{ pathname: `/detail_business`, state: elem }}>
                                            <div className="col-md-4 col-sm-6" style={{ 'marginBottom': '30px' }}>
                                                <div className="businessborder" style={{ width: '100%' }}>
                                                    <img alt='' src={elem.businessImages.length ? elem.businessImages[0] : './images/def_card_img.jpg'} style={{ height: '200px', width: '100%', filter: 'brightness(0.5)' }} />
                                                    <div className="ratewithbox">
                                                        <span>
                                                            <Rate disabled
                                                                style={{ fontSize: "12px" }}
                                                                allowHalf value={elem.star}
                                                            />
                                                            {Math.floor(elem.star)}
                                                        </span>
                                                    </div>
                                                    <div className="businessname">
                                                        <h4 style={{ marginLeft: "-1px", marginBottom: "15px", marginTop: "20px" }}>
                                                            <b>{elem.businessname}</b>
                                                        </h4>

                                                        <p style={{ marginTop: "-15px" }}>

                                                            <span className="glyphicon glyphicon-map-marker"
                                                                style={{ color: "#008080", margin: "2px" }}
                                                            ></span>
                                                            <span style={{ color: "black" }}>{elem.businessaddress}</span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>

                                    )
                                })
                            }

                            {notFoundFilterData == false && filteredData.length == 0 && showRecord ?
                                showBusiness && showBusiness.map((elem, key) => {
                                    let str = elem.businessaddress || '';
                                    if (str.length > 25) {
                                        str = str.substring(0, 25);
                                        str = str + '...'
                                    }
                                    return (
                                        <Link key={key} to={{ pathname: `/detail_business`, state: elem }}>
                                            <div className="col-md-4 col-sm-6" style={{ 'marginBottom': '30px' }}>
                                                <div className="businessborder" style={{ width: '100%' }}>
                                                    <img alt='' src={elem.businessImages.length ? elem.businessImages[0] : './images/def_card_img.jpg'} style={{ height: '200px', width: '100%', filter: 'brightness(0.5)' }} />
                                                    <div className="ratewithbox">
                                                        <span>
                                                            <Rate disabled
                                                                style={{ fontSize: "12px" }}
                                                                allowHalf value={elem.star}
                                                            />
                                                            {Math.floor(elem.star)}
                                                        </span>
                                                    </div>
                                                    <div className="businessname">
                                                        <h4 style={{ marginLeft: "-1px", marginBottom: "15px", marginTop: "20px" }}>
                                                            <b>{elem.businessname}</b>
                                                        </h4>

                                                        <p style={{ marginTop: "-15px" }}>

                                                            <span className="glyphicon glyphicon-map-marker"
                                                                style={{ color: "#008080", margin: "2px" }}
                                                            ></span>
                                                            <span style={{ color: "black" }}>{elem.businessaddress}</span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>

                                    )
                                })
                                : null}
                        </div>

                        {/* {(showBusiness.length >= 7) && !(showBusiness.length === business.length) && <div className="col-md-12" style={{textAlign:"center"}}>
                        <button type="button" className="btn2 btn2-success" onClick={this.onAddMore}>
                            View More
                        </button>
                    </div>} */}
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return ({
        text: state.text
    })
}

export default connect(mapStateToProps)(Secondfold);
