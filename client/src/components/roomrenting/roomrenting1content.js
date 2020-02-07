import React, { Component } from 'react';
import "./headerroomrenting.css";
import { Link } from "react-router-dom";
import { Rate } from 'antd';

class Roomrenting1content extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { showroomrents, filteredData, notFoundFilterData, showRecord, categoroyOfRoom, stateOfRoom, cityOfRoom, accomodatesOfRoom,
            removeValue, showAllRooms } = this.props;
        return (
            <div>
                <div className="row">

                    {categoroyOfRoom && categoroyOfRoom.length > 0 && <div className="col-xs-5 col-sm-2 col-md-2 col-lg-2">
                        {categoroyOfRoom.map((elem, key) => {
                            return (
                                <div className="cross-card">
                                    <li>{elem}<span class="close crossBtnExlpre"
                                        onClick={removeValue.bind(this, 'category', elem)}
                                    >x</span></li>
                                </div>)
                        })}
                    </div>}
                    
                    {stateOfRoom && stateOfRoom.length > 0 && <div className="col-xs-5 col-sm-2 col-md-2 col-lg-2">
                        {stateOfRoom.map((elem, key) => {
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

                    {accomodatesOfRoom && accomodatesOfRoom.length > 0 && <div className="col-xs-5 col-sm-2 col-md-2 col-lg-2">
                        {accomodatesOfRoom.map((elem, key) => {
                            return (
                                <div className="cross-card">
                                    <li>{elem}<span class="close crossBtnExlpre"
                                        onClick={removeValue.bind(this, 'accommodates', elem)}
                                    >x</span></li>
                                </div>)
                        })}
                    </div>}
                </div>
                
                {showroomrents.length > 0 && <div className="row">
                    <div className="col-md-12 col-sm-12 col-xs-12">
                        <h4 style={{ margin: "0", fontFamily: 'Source Sans Pro, sans-serif' }}><b>Top Available Buy</b> </h4>
                        <br />
                    </div>
                </div>}
                <div className="">
                    <div className="row" style={{ marginTop: '-4%' }}>
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
                            filteredData && filteredData.map((elem, key) => {
                                let str = elem.propertylocation || '';
                                if (str.length > 35) {
                                    str = str.substring(0, 35);
                                    str = str + '...'
                                }
                                return (
                                    <Link key={key} to={{ pathname: `/detail_roomRent`, state: elem }}>
                                        <div className="col-md-4 col-sm-6 col-xs-12 mobileMargBotom">
                                            <img src={elem.imageurl.length ? elem.imageurl[0] : './images/def_card_img.jpg'} className="img-responsive list_img imGCard" />
                                            <div className="row" style={{ padding: "0" }}>
                                                <div className="col-md-12" style={{ padding: "0" }}>
                                                    <div className="col-md-6 col-sm-5 col-xs-5">
                                                        <div className="pricingroomExplore">
                                                            {'$' + elem.rent + ' ' + elem.pricemode}
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 col-sm-7 col-xs-7">
                                                        <span className="rentstarExplore">
                                                            <Rate disabled
                                                                style={{ paddingBottom: '20px', marginTop: "-20px", fontFamily: 'Source Sans Pro, sans-serif', fontSize: "12px" }}
                                                                allowHalf value={elem.star}
                                                            />
                                                            {elem.star}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="roomdetailcardExplore">
                                                <p style={{ fontFamily: 'Poppins, sans-serif' }}>
                                                    {elem.postingtitle.slice(0, 23)}..
                                            </p>
                                                <p style={{ fontFamily: 'Poppins, sans-serif' }}>
                                                    <span className="glyphicon glyphicon-map-marker"
                                                        style={{ color: "#008080", margin: "0", left: "-3px" }}
                                                    ></span>
                                                    <span>
                                                        <b>{elem.propertylocation.slice(0, 35)}..</b></span>
                                                    <br />
                                                </p>
                                            </div>
                                            <table id="customers">
                                                <tr>
                                                    <td><span className="fa fa-inbox"
                                                        style={{ color: "#236A4B", margin: "0", left: "-3px" }}
                                                    ></span><span>{elem.furnished.slice(0, 11)}</span></td>

                                                    <td><span className="fa fa-users"
                                                        style={{ color: "#236A4B", margin: "0", left: "-3px" }}
                                                    ></span><span>{elem.accomodates} People</span></td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <span className="fa fa-shower" style={{ color: "#236A4B", margin: "0", left: "-3px" }}>
                                                        </span>
                                                        <span>Bathroom</span>
                                                    </td>
                                                    <td>
                                                        <span className="fa fa-bed" style={{ color: "#236A4B", margin: "0", left: "-3px" }}>
                                                        </span>
                                                        <span>{elem.subSubCategory}</span>
                                                    </td>
                                                </tr>
                                            </table>
                                        </div>
                                    </Link>
                                )
                            })
                        }
                        {notFoundFilterData == false && filteredData.length == 0 && showRecord ?
                            showroomrents && showroomrents.map((elem, key) => {
                                let str = elem.propertylocation || '';
                                if (str.length > 35) {
                                    str = str.substring(0, 35);
                                    str = str + '...'
                                }
                                return (
                                    <Link key={key} to={{ pathname: `/detail_roomRent`, state: elem }}>
                                        <div className="col-md-4 col-sm-6 col-xs-12 mobileMargBotom">
                                            <img src={elem.imageurl.length ? elem.imageurl[0] : './images/def_card_img.jpg'} className="img-responsive list_img imGCard" />
                                            <div className="row" style={{ padding: "0" }}>
                                                <div className="col-md-12" style={{ padding: "0" }}>
                                                    <div className="col-md-6 col-sm-5 col-xs-5">
                                                        <div className="pricingroomExplore">
                                                            {'$' + elem.rent + ' ' + elem.pricemode}
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 col-sm-7 col-xs-7">
                                                        <span className="rentstarExplore">
                                                            <Rate disabled
                                                                style={{ paddingBottom: '20px', marginTop: "-20px", fontFamily: 'Source Sans Pro, sans-serif', fontSize: "12px" }}
                                                                allowHalf value={elem.star}
                                                            />
                                                            {elem.star}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="roomdetailcardExplore">
                                                <p style={{ fontFamily: 'Poppins, sans-serif' }}>
                                                    {elem.postingtitle.slice(0, 23)}..
                                            </p>
                                                <p style={{ fontFamily: 'Poppins, sans-serif' }}>
                                                    <span className="glyphicon glyphicon-map-marker"
                                                        style={{ color: "#008080", margin: "0", left: "-3px" }}
                                                    ></span>
                                                    <span>
                                                        <b>{elem.propertylocation.slice(0, 35)}..</b></span>
                                                    <br />
                                                </p>
                                            </div>
                                            <table id="customers">
                                                <tr>
                                                    <td><span className="fa fa-inbox"
                                                        style={{ color: "#236A4B", margin: "0", left: "-3px" }}
                                                    ></span><span>{elem.furnished.slice(0, 11)}</span></td>

                                                    <td><span className="fa fa-users"
                                                        style={{ color: "#236A4B", margin: "0", left: "-3px" }}
                                                    ></span><span>{elem.accomodates} People</span></td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <span className="fa fa-shower" style={{ color: "#236A4B", margin: "0", left: "-3px" }}>
                                                        </span>
                                                        <span>Bathroom</span>
                                                    </td>
                                                    <td>
                                                        <span className="fa fa-bed" style={{ color: "#236A4B", margin: "0", left: "-3px" }}>
                                                        </span>
                                                        <span>{elem.subSubCategory}</span>
                                                    </td>
                                                </tr>
                                            </table>
                                        </div>
                                    </Link>
                                )
                            })
                            : null
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default Roomrenting1content;
