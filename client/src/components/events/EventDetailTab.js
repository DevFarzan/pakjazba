import React, { Component } from 'react';
import HeaderMenu from '../header/headermenu';
import Footer from '../footer/footer';
import Slider from '../header/Slider';
import {
    Icon,
    Tabs
} from 'antd';
import EdetailFirstfold from './EdetailFirstfold';
import DateCard from './dateCard';
import { Redirect } from 'react-router';
import { HttpUtils } from "../../Services/HttpUtils";
import './EdetailFirstfold.css';
import './eventdetail.css';

class EventDetailTab extends Component {
    constructor(props) {
        super()
        this.state = {
            goProfile: false,
        }
    }
    componentDidMount() {
        window.scrollTo(0, 0);
      }
    goToProfile() {
        this.setState({ goProfile: true })
    }

    render() {
        const { data } = this.props;
        if (this.state.goProfile) {
            return <Redirect to={{ pathname: `/profile_user/${data.profileId}`, state: { userId: data.userId, profileId: data.profileId } }} />
        }
        console.log(data, 'Event Data');
        return (
            <div style={{ backgroundColor: '#f7f5ed' }}>
                <div className="row" style={{ paddingBottom: '0px' }}>
                    <div className="col-xs-12 col-sm-1 col-md-1 col-lg-1"></div>
                    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                        <div className="row elementMainDivS" style={{ paddingBottom: '0px' }}>
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" style={{ display: 'inline-flex' }}>
                                <Icon type="unordered-list" /><h5 className="headMainDivs">Description</h5>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <p className="paraTextDivs">{data.description}</p>
                            </div>
                        </div>
                        <div className="row elementMainDivS" style={{ paddingBottom: '0px' }}>
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" style={{ display: 'inline-flex' }}>
                                <Icon type="unordered-list" /><h5 className="headingMainRoom">Contact Details</h5>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" style={{ marginTop: '15px' }}>
                                <div className="row" style={{ padding: "0" }}>
                                    <div className="col-xs-3 col-md-3 col-sm-5">
                                        <div className="profile_img">
                                            <img onClick={() => { this.goToProfile() }} src={data.userImage && data.userImage.length ? data.userImage : '../images/images.jpg'} className="" alt="" style={{ width: '100%', cursor: 'pointer', marginBottom: "8px" }} />
                                        </div>
                                    </div>
                                    <div className="col-xs-9 col-md-9 col-sm-7 margMObileBuysell">
                                        <span style={{ fontWeight: 'bold' }}>{data.name}</span><br />
                                        <a onClick={() => { this.goToProfile() }} style={{ fontSize: '13px', cursor: 'pointer', color: 'rgb(55, 169, 155)' }}>
                                            View Profile
                                            </a>
                                        <h5 style={{ marginTop: '10px', marginBottom: '7px' }}>
                                            <span className="glyphicon glyphicon-phone" style={{ marginRight: "15px", color: "#236A4B" }}></span>
                                            <span style={{ color: "rgba(0, 0, 0, 0.65)" }}>{data.number}</span>
                                        </h5>
                                        <h5 style={{ marginBottom: '7px' }}>
                                            <span className="glyphicon glyphicon-globe" style={{ marginRight: "15px", color: "#236A4B" }}></span>
                                            <span style={{ color: "rgba(0, 0, 0, 0.65)" }}>{data.email}</span>
                                        </h5>
                                        <h5>
                                            <span className="glyphicon glyphicon-home"
                                                style={{ marginRight: "15px", color: "#36a89f" }}></span>
                                            <span style={{ color: "rgba(0, 0, 0, 0.65)" }}>{data.address}, {data.city}. {data.state}</span>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row elementMainDivS" style={{ paddingBottom: '0px' }}>
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" style={{ display: 'inline-flex' }}>
                                <Icon type="bars" /><h5 className="headMainDivs">Event Banner</h5>
                            </div>
                            <div className="row" style={{ paddingBottom: '0px', paddingTop: '0px' }}>
                                <div className="col-xs-12 col-md-12 col-sm-12 col-lg-12" style={{ textAlign: 'center' }}>
                                    <img src={data.bannerSrc} className="eventBanersty" />
                                </div>
                            </div>
                        </div>
                        {data.earlyBirdDelivery && data.earlyBirdDelivery.length > 0 && <div className="row elementMainDivS" style={{ paddingBottom: '0px' }}>
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" style={{ display: 'inline-flex' }}>
                                <Icon type="unordered-list" />
                                <h5 className="headingMainRoom">
                                    Early Bird Delivery
                                    </h5>
                            </div><br />
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <div className="row" style={{ textAlign: 'center' }}>
                                    <div className="col-xs-1 col-md-2 col-sm-2 col-lg-2"></div>
                                    <div className="col-xs-10 col-md-8 col-sm-8 col-lg-8">
                                        <p className="eductionPara">
                                            {data.earlyBirdDelivery.map((elem, key) => {
                                                return (
                                                    <span style={{ marginLeft: '1vw' }}>
                                                        {elem},
                                                        </span>
                                                )
                                            })}
                                        </p>
                                    </div>
                                    <div className="col-xs-1 col-md-2 col-sm-2 col-lg-2"></div>
                                </div>
                            </div>
                        </div>}
                        {data.earlyBirdPaymentMode && data.earlyBirdPaymentMode.length > 0 && <div className="row elementMainDivS" style={{ paddingBottom: '0px' }}>
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" style={{ display: 'inline-flex' }}>
                                <Icon type="unordered-list" />
                                <h5 className="headingMainRoom">
                                    Early Bird Payment Modes
                                    </h5>
                            </div><br />
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <div className="row" style={{ textAlign: 'center' }}>
                                    <div className="col-xs-1 col-md-2 col-sm-2 col-lg-2"></div>
                                    <div className="col-xs-10 col-md-8 col-sm-8 col-lg-8">
                                        <p className="eductionPara">
                                            {data.earlyBirdPaymentMode.map((elem, key) => {
                                                return (
                                                    <span style={{ marginLeft: '1vw' }}>
                                                        {elem},
                                                    </span>
                                                )
                                            })}
                                        </p>
                                    </div>
                                    <div className="col-xs-1 col-md-2 col-sm-2 col-lg-2"></div>
                                </div>
                            </div>
                        </div>}
                        {data.normalTicketDelivery && data.normalTicketDelivery.length > 0 && <div className="row elementMainDivS" style={{ paddingBottom: '0px' }}>
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" style={{ display: 'inline-flex' }}>
                                <Icon type="unordered-list" />
                                <h5 className="headingMainRoom">
                                    Normal Ticket Delivery
                                    </h5>
                            </div><br />
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <div className="row" style={{ textAlign: 'center' }}>
                                    <div className="col-xs-1 col-md-2 col-sm-2 col-lg-2"></div>
                                    <div className="col-xs-10 col-md-8 col-sm-8 col-lg-8">
                                        <p className="eductionPara">
                                            {data.normalTicketDelivery.map((elem, key) => {
                                                return (
                                                    <span style={{ marginLeft: '1vw' }}>
                                                        {elem},
                                                        </span>
                                                )
                                            })}
                                        </p>
                                    </div>
                                    <div className="col-xs-1 col-md-2 col-sm-2 col-lg-2"></div>
                                </div>
                            </div>
                        </div>}
                        {data.normalTicketPaymentMode && data.normalTicketPaymentMode.length > 0 && <div className="row elementMainDivS" style={{ paddingBottom: '0px' }}>
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" style={{ display: 'inline-flex' }}>
                                <Icon type="unordered-list" />
                                <h5 className="headingMainRoom">
                                    Normal Ticket Payment Modes
                                    </h5>
                            </div><br />
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <div className="row" style={{ textAlign: 'center' }}>
                                    <div className="col-xs-1 col-md-2 col-sm-2 col-lg-2"></div>
                                    <div className="col-xs-10 col-md-8 col-sm-8 col-lg-8">
                                        <p className="eductionPara">
                                            {data.normalTicketPaymentMode.map((elem, key) => {
                                                return (
                                                    <span style={{ marginLeft: '1vw' }}>
                                                        {elem},
                                                    </span>
                                                )
                                            })}
                                        </p>
                                    </div>
                                    <div className="col-xs-1 col-md-2 col-sm-2 col-lg-2"></div>
                                </div>
                            </div>
                        </div>}
                    </div>
                    <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                        <div className="row elementMainDivS2" style={{ paddingBottom: '0px' }}>
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" style={{ display: 'inline-flex' }}>
                                <Icon type="bars" /><h5 className="headMainDivs">Hosted By</h5>
                            </div>
                            <div className="row" style={{ paddingBottom: '0px', paddingTop: '0px' }}>
                                <div className="col-xs-12 col-md-12 col-sm-12 col-lg-12" style={{ textAlign: 'center' }}>
                                    <p className="hostedByPara">{data.name}</p>
                                </div>
                            </div>
                        </div><br />
                        <div className="row elementMainDivS2" style={{ paddingBottom: '0px' }}>
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" style={{ display: 'inline-flex' }}>
                                <Icon type="bars" /><h5 className="headMainDivs">Category</h5>
                            </div>
                            <div className="row" style={{ paddingBottom: '0px', paddingTop: '0px' }}>
                                <div className="col-xs-12 col-md-12 col-sm-12 col-lg-12" style={{ textAlign: 'center' }}>
                                    <p className="hostedByPara">{data.eventCategory}</p>
                                </div>
                            </div>
                        </div>
                        {data.dateRange && <div className="row MainDivCount" style={{ paddingBottom: '0px' }}>
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" style={{ display: 'inline-flex' }}>
                                <Icon type="bars" style={{ color: 'white' }} /><h5 className="CountText">Event starts in</h5>
                            </div>
                            <div className="row timerDivPadd">
                                <div className="col-xs-3 col-md-3 col-sm-2 col-lg-3"></div>
                                <div className="col-xs-6 col-md-6 col-sm-8 col-lg-6" style={{ textAlign: 'center' }}>
                                    <p className="dateTextTim">{data.dateRange[0].from}</p>
                                    <div className="timerDicCsS">
                                        <p className="timerTExt"> {data.openingTime} </p>
                                    </div>
                                </div>
                                <div className="col-xs-3 col-md-3 col-sm-2 col-lg-3"></div>
                            </div>
                        </div>}
                        {data.dateRange && <div className="row MainDivCount" style={{ paddingBottom: '0px' }}>
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" style={{ display: 'inline-flex' }}>
                                <Icon type="bars" style={{ color: 'white' }} /><h5 className="CountText">Event End in</h5>
                            </div>
                            <div className="row timerDivPadd">
                                <div className="col-xs-3 col-md-3 col-sm-2 col-lg-3"></div>
                                <div className="col-xs-6 col-md-6 col-sm-8 col-lg-6" style={{ textAlign: 'center' }}>
                                    <p className="dateTextTim">{data.dateRange[0].to}</p>
                                    <div className="timerDicCsS">
                                        <p className="timerTExt"> {data.closingTime} </p>
                                    </div>
                                </div>
                                <div className="col-xs-3 col-md-3 col-sm-2 col-lg-3"></div>
                            </div>
                        </div>}<br />
                        <div className="row elementMainDivS2" style={{ paddingBottom: '0px' }}>
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" style={{ display: 'inline-flex' }}>
                                <Icon type="unordered-list" /><h5 className="headMainDivs">Event Info</h5>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <p className="paraTextDivs">
                                    {data.name} <b>Presents</b> {data.eventTitle} <b>At</b> {data.dateRange && data.dateRange.from}
                                    {data.openingTime} {data.address} {data.city} {data.state}<br /><br />
                                    <b>Ticket Range: </b>
                                    ${data.normalTicketPrice}- ${data.earlyBirdPrice}
                                </p>
                            </div>
                        </div>
                        {data.website && data.website != '' && <div className="row elementMainDivS2" style={{ paddingBottom: '0px' }}>
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" style={{ display: 'inline-flex' }}>
                                <Icon type="bars" /><h5 className="headMainDivs">Website Link</h5>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" style={{ textAlign: 'center' }}>
                                <div className="row" style={{ textAlign: 'center' }}>
                                    <div className="col-xs-4 col-md-4 col-sm-12 col-lg-4"></div>
                                    <div className="col-xs-4 col-md-4 col-sm-12 col-lg-4">
                                        <a href={data.website} target="_blank" className="fa fa-link social_button" style={{ width: "40px", height: "40px", color: '#2867B2' }}></a><br />
                                        <p className="eductionPara">Website</p>
                                    </div>
                                    <div className="col-xs-4 col-md-4 col-sm-12 col-lg-4"></div>
                                </div>
                            </div>
                        </div>}
                        {data.faceBook && data.faceBook != '' && <div className="row elementMainDivS2">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" style={{ display: 'inline-flex' }}>
                                <Icon type="unordered-list" /><h5 className="headMainDivs">Social media</h5>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <div className="row" style={{ textAlign: 'center' }}>
                                    <div className="col-xs-4 col-md-4 col-sm-12 col-lg-4">
                                        <a href={data.faceBook} target="_blank" className="fa fa-facebook social_button" style={{ width: "40px", height: "40px", color: '#2f55a4' }}><i></i></a><br />
                                        <p className="eductionPara">Facebook</p>
                                    </div>
                                    <div className="col-xs-4 col-md-4 col-sm-12 col-lg-4">
                                        <a href={data.linkdIn} target="_blank" className="fa fa-linkedin social_button" style={{ width: "40px", height: "40px", color: '#2867B2' }}></a><br />
                                        <p className="eductionPara">Linkdin</p>
                                    </div>
                                    <div className="col-xs-4 col-md-4 col-sm-12 col-lg-4">
                                        <a href={data.google} target="_blank" className="fa fa-google-plus social_button" style={{ width: "40px", height: "40px", color: '#db4a39' }}></a><br />
                                        <p className="eductionPara">Google+</p>
                                    </div>
                                </div>
                            </div>
                        </div>}
                    </div>
                    <div className="col-xs-12 col-sm-1 col-md-1 col-lg-1"></div>
                </div>
                <DateCard data={this.props.data} /><br /><br />
                <div className="row">
                    <div className="col-xs-12 col-md-2 col-lg-2"></div>
                    <div className="col-xs-12 col-md-8 col-lg-8">
                        <div className="row elementMainDivS" style={{ paddingBottom: '0px' }}>
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" style={{ display: 'inline-flex' }}>
                                <Icon type="bars" /><h5 className="headMainDivs">Terms and Conditions</h5>
                            </div>
                            <div className="row" style={{ paddingBottom: '0px', paddingTop: '0px' }}>
                                <div className="col-xs-12 col-md-12 col-sm-12 col-lg-12">
                                    <p className="paraTextDivs">
                                        {data.termsCondition && data.termsCondition.map((elem, idx) => {
                                            return (
                                                <p>{idx + 1}. {elem.name}</p>
                                            )
                                        })}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-12 col-md-2 col-lg-2"></div>
                </div>
            </div>
        )
    }
}
export default EventDetailTab;