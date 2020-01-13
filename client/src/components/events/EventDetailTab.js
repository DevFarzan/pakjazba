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
        }
    }



    render() {
        const { data } = this.props;
        // let date = data.dateRange && (data.dateRange.from ? data.dateRange.from : data.dateRange[0].from);
        // date = moment(date).format('LL');
        // const { TabPane } = Tabs;
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
                                <Icon type="bars" /><h5 className="headMainDivs">Event Banner</h5>
                            </div>
                            <div className="row" style={{ paddingBottom: '0px', paddingTop: '0px' }}>
                                <div className="col-xs-12 col-md-12 col-sm-12 col-lg-12" style={{ textAlign: 'center' }}>
                                    <img src={data.bannerSrc} className="eventBanersty" />
                                </div>
                            </div>
                        </div>
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
                        </div><br/>
                        <div className="row MainDivCount" style={{ paddingBottom: '0px' }}>
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" style={{ display: 'inline-flex' }}>
                                <Icon type="bars" style={{ color: 'white' }} /><h5 className="CountText">Event starts in</h5>
                            </div>
                            <div className="row timerDivPadd">
                                <div className="col-xs-3 col-md-3 col-sm-3 col-lg-3"></div>
                                <div className="col-xs-6 col-md-6 col-sm-6 col-lg-6" style={{ textAlign: 'center' }}>
                                    <div className="timerDicCsS">
                                        <p className="timerTExt"> {data.openingTime} </p>
                                    </div>
                                </div>
                                <div className="col-xs-3 col-md-3 col-sm-3 col-lg-3"></div>
                            </div>
                        </div><br/>
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
                    </div>
                    <div className="col-xs-12 col-sm-1 col-md-1 col-lg-1"></div>
                </div><br/><br/>
                <DateCard data={this.props.data} /><br/><br/>
            </div>
        )
    }
}
export default EventDetailTab;