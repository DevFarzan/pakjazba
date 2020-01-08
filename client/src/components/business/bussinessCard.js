import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Rate } from 'antd';
import moment from 'moment';
import './businessCard.css';


class BussinesCard extends Component {
    callFunc(cardDetails, detail) {
        let to = '';
        if (detail === 'businessData') {
            to = { pathname: `/detail_business`, state: cardDetails };
        } else if (detail === 'roomRentData') {
            to = { pathname: `/detail_roomRent`, state: cardDetails };
        } else if (detail === 'buySellData') {
            to = { pathname: `/detail_buySell`, state: cardDetails };
        } else if (detail === 'jobListData') {
            to = { pathname: `/detail_jobPortal`, state: { ...cardDetails, sec: 'mainPart', user: true } };
        } else if (detail === 'eventPortalData') {
            to = { pathname: `/detail_eventPortal/${cardDetails.randomKey}`, state: cardDetails };
        } else if (detail === 'ecommerce') {
            to = { pathname: `/products_DetailStyle/${cardDetails._id}`, state: cardDetails };
        }
        return to;
    }

    render() {
        const { cardDetails, detail } = this.props;
        let src = cardDetails.imageurl && cardDetails.imageurl[0] ||
            cardDetails.businessImages && cardDetails.businessImages[0] ||
            cardDetails.arr_url && cardDetails.arr_url[0] ||
            cardDetails.images && cardDetails.images[0],
            locate = cardDetails.city + ", " + cardDetails.state,

            name = cardDetails.businessname || cardDetails.eventTitle ||
                cardDetails.compName || cardDetails.postingtitle || cardDetails.title,
            obj = this.callFunc(cardDetails, detail);

        return (
            <Link key={1} to={obj}>
                <div className="" style={{ 'marginBottom': '30px' }}>
                    <div className="card" style={{ width: '100%', backgroundColor: "#000000" }}>
                        <img alt='' src={src} style={{ height: '200px', width: "100%", filter: 'brightness(0.5)' }} />

                        {detail == 'businessData' && <span>
                            <div className="businessborder">
                                <div className="ratewithbox">
                                    <span>
                                        <Rate disabled
                                            style={{ fontSize: "12px" }}
                                            allowHalf value={cardDetails.star}
                                        />
                                        {cardDetails.star}
                                    </span>
                                </div>
                                <div className="businessname">
                                    <h4 style={{ marginLeft: "-1px", marginBottom: "15px", marginTop: "20px" }}>
                                        <b>{name}</b>
                                    </h4>

                                    <p style={{ marginTop: "-15px" }}>
                
                                    <span className="glyphicon glyphicon-map-marker"
                                            style={{ color: "#008080", margin: "2px" }}
                                        ></span>
                                        <span style={{ color: "black" }}>{locate}</span>
                                    </p>
                                </div>
                            </div>
                             {/* <div className="" style={{ 'marginBottom': '30px' }}>
                        <div className="card" style={{ width: '100%' }}>
                            <img alt='' src={src} style={{ height: '200px', width: "100%" }} />
                            {detail == 'businessData' && <span>
                                <h4 style={{ marginLeft: "-1px", marginBottom: "15px", marginTop: "20px" }}>
                                    <b>{name}</b>
                                </h4>
                                <span>
                                    <Rate disabled
                                        style={{ paddingBottom: '20px', marginTop: "-10px" }}
                                        allowHalf value={cardDetails.star}
                                    />
                                    {cardDetails.star}
                                </span>
                                <p style={{ marginTop: "-15px" }}> */}
                        </span>}
                        {/* {detail == 'ecommerce' && <span>
                            <p style={{color: 'black', margin:"0",fontFamily: 'Source Sans Pro, sans-serif'}}>
                                {cardDetails.product}
                            </p>
                            <p style={{color: 'black', margin:"0",fontFamily: 'Source Sans Pro, sans-serif'}}>
                                <b>{cardDetails.country}</b>
                                <br/>{'$' + cardDetails.price }
                            </p>
                            <span>
                               
                            </span>
                        </span>} */}
                        {detail == 'roomRentData' && <span>
                            <div className="row" style={{ padding: "0" }}>
                                <div className="col-md-12" style={{ padding: "0" }}>
                                    <div className="col-md-6 col-sm-5 col-xs-5">
                                        <div className="pricingroom">
                                            {'$' + cardDetails.rent + ' ' + cardDetails.pricemode}
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-7 col-xs-7">
                                        <span className="rentstar">
                                            <Rate disabled
                                                style={{ paddingBottom: '20px', marginTop: "-20px", fontFamily: 'Source Sans Pro, sans-serif', fontSize: "12px" }}
                                                allowHalf value={cardDetails.star}
                                            />
                                            {cardDetails.star}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="roomdetailcard">
                                <p style={{ fontFamily: 'Poppins, sans-serif' }}>
                                    {cardDetails.postingtitle}
                                </p>

                                <p style={{ fontFamily: 'Poppins, sans-serif' }}>
                                    <span className="glyphicon glyphicon-map-marker"
                                        style={{ color: "#008080", margin: "0", left: "-3px" }}
                                    ></span>
                                    <span>
                                        <b>{cardDetails.propertylocation.slice(0, 35)}</b></span>
                                    <br />
                                </p>
                            </div>
                            <table id="customers">
                                <tr>
                                    <td><span className="fa fa-inbox"
                                        style={{ color: "#236A4B", margin: "0", left: "-3px" }}
                                    ></span><span>{cardDetails.furnished}</span></td>

                                    <td><span className="fa fa-users"
                                        style={{ color: "#236A4B", margin: "0", left: "-3px" }}
                                    ></span><span>{cardDetails.accomodates} People</span></td>
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
                                        <span>{cardDetails.subSubCategory}</span>
                                    </td>
                                </tr>
                            </table>

                            {/* <p style={{ color: 'black', margin: "0", fontFamily: 'Source Sans Pro, sans-serif' }}>
                                {cardDetails.postingtitle}
                            </p>
                            <p style={{ color: 'black', margin: "0", fontFamily: 'Source Sans Pro, sans-serif' }}>
                                <b>{cardDetails.propertylocation.slice(0, 35)}</b>
                                <br />{'$' + cardDetails.rent + ' ' + cardDetails.pricemode}
                            </p>
                            <span>
                                <Rate disabled
                                    style={{ paddingBottom: '20px', marginTop: "-20px", fontFamily: 'Source Sans Pro, sans-serif' }}
                                    allowHalf value={cardDetails.star}
                                />
                                {cardDetails.star}
                            </span> */}
                        </span>}

                        {detail == 'jobListData' && <span>
                            <div className="jobcardcarousel">
                                <div className="row">
                                    <div className="col-md-3 col-xs-3">
                                        <div className="jobownerimage">
                                            <img src="./images/images.jpg" alt="" />
                                        </div>
                                    </div>
                                    <div className="col-md-9 col-xs-9">
                                        <h4 style={{ margin: "0" }}>
                                            <b>{cardDetails.jobCat}</b>
                                        </h4>
                                        <div className="row" style={{ padding: "10px" }}>
                                            <div className="col-md-5 col-xs-4" style={{ padding: "0" }}>
                                                <span className="glyphicon glyphicon-map-marker"
                                                    style={{ color: "#236A4B", marginRight: "2px" }}
                                                ></span>
                                                <span style={{ color: "black" }}>{cardDetails.location.slice(0,7)}...</span>
                                            </div>
                                            <div className="col-md-7 col-xs-8" style={{ padding: "0" }}>
                                                <span className="fa fa-phone" style={{ color: "#236A4B", margin: "0", left: "-3px", padding: "0" }}>
                                                </span>
                                                <span style={{ color: "black" }}></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="jobcategorycarousel">
                                <div className="row">
                                    <div className="col-md-7" style={{ left: "15px" }}>
                                        <span className="fa fa-bookmark das">
                                        </span>
                                        <span style={{ color: "black" }}>{cardDetails.jobType && cardDetails.jobType}</span>
                                    </div>
                                    <div className="col-md-5">

                                    </div>
                                </div>
                            </div>
                            {/* <p className="companyName"
                                style={{marginTop:"15px"}}
                            <p className="companyName"
                                style={{ marginTop: "15px" }}
                            >
                                {cardDetails.compName && cardDetails.compName}
                            </p>
                            <h4 style={{ marginLeft: "-1px", marginBottom: "15px", marginTop: "-22px" }}>
                                <b>{cardDetails.jobCat}</b>
                            </h4>
                            <p style={{ marginTop: "-10px", marginLeft: '-5px' }}>
                                <span className="glyphicon glyphicon-map-marker"
                                    style={{ color: "#008080", margin: "2px" }}
                                ></span>
                                <span style={{color:"black"}}>{cardDetails.location}</span>
                            </p>
                                <span style={{ color: "black" }}>{cardDetails.location}</span>
                            </p> */}
                        </span>}
                        {detail == 'buySellData' && <p>
                            Rs.{!cardDetails.hideprice ? '$' + cardDetails.price : 'Hide'}
                            <br /><b>{cardDetails.modelname}</b>
                            <br />{cardDetails.address},{cardDetails.state}
                        </p>}
                        {detail == 'eventPortalData' && <span>
                            <div className="pricingroom">  <p style={{ margin: "0" }}>
                                <span className="glyphicon glyphicon-calendar"
                                    style={{ margin: "-1px" }}
                                ></span>
                                <span style={{ marginLeft: "5px" }}>
                                    {moment(cardDetails.posted, "LL").format('YYYY-MM-DD')}
                                </span>
                            </p>
                            </div>
                            <div className="roomdetailcard">
                                <h5 style={{ margin: "0", color: "white" }}>
                                    <b>{cardDetails.eventTitle}</b>
                                </h5>
                                <p style={{ marginBottom: "0px" }}>
                                    <span className="glyphicon glyphicon-map-marker"
                                        style={{ margin: "0", left: "-3px" }}
                                    ></span>
                                    <span>{cardDetails.city}</span>
                                </p>
                            </div>
                            <div className="eventborder">
                                <div className="row" style={{ padding: "5px 10px" }}>
                                    <div className="col-md-2 col-xs-2">
                                        <div className="organiserimage">
                                            <img src="./images/images.jpg" alt="" />
                                        </div>
                                    </div>
                                    <div className="col-md-10 col-xs-10">
                                        <h5 className="organisername"> Shayan Mutahir </h5>
                                    </div>
                                </div>
                            </div>
                        </span>}
                        {detail == 'ecommerce' && <span>
                            <p style={{ color: 'black', margin: "0", fontFamily: 'Poppins, sans-serif' }}>
                                {cardDetails.product}
                            </p>
                            {/* <p style={{color: 'black', margin:"0",fontFamily: 'Poppins, sans-serif'}}></p> */}
                            <h5 style={{ marginTop: '5px', marginLeft: "0", marginBottom: "5px" }}>
                                <b>{cardDetails.eventTitle}</b>
                            </h5>
                            <p style={{ marginBottom: "0px" }}>
                                <span style={{ color: "black" }}>{cardDetails.city}</span>
                            </p>
                            <p>
                                <span className="glyphicon glyphicon-calendar"
                                    style={{ color: "#008080", margin: "-1px" }}
                                ></span>
                                <span style={{ color: "black", marginLeft: "5px" }}>
                                    {moment(cardDetails.posted, "LL").format('YYYY-MM-DD')}
                                </span>
                            </p>
                        </span>}
                        {detail == 'ecommerce' && <span>
                            <p style={{ color: 'black', margin: "0", fontFamily: 'Source Sans Pro, sans-serif' }}>
                                {cardDetails.product}
                            </p>
                            <p style={{ color: 'black', margin: "0", fontFamily: 'Source Sans Pro, sans-serif' }}>
                                <b>{cardDetails.country}</b>
                                <br />{'$' + cardDetails.price}
                            </p>
                            <span>

                            </span>
                        </span>}
                    </div>
                </div>
            </Link>

                    )
                }
            }
            
            export default BussinesCard;
