import React, { Component } from 'react';
import HeaderMenu from '../header/headermenu';
import Footer from '../footer/footer';
import Slider from '../header/Slider';
import {
    Icon,
    Tabs
} from 'antd';
import EdetailFirstfold from './EdetailFirstfold';
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
        return (
            <div style={{ backgroundColor: '#f7f5ed' }}>
                <div className="row" style={{ paddingBottom: '0px' }}>
                    <div className="col-xs-12 col-sm-1 col-md-1 col-lg-1"></div>
                    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 elementMainDivS">
                        <div className="row" style={{ paddingBottom: '0px' }}>
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" style={{ display: 'inline-flex' }}>
                                <Icon type="unordered-list" /><h5 className="headMainDivs">Description</h5>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <p className="paraTextDivs">This role will drive the development and training of our Clients’ product to both internal teams and external customers. Candidates must be passionate about all technology categories including imaging, smart home, audio and computing. We are looking for someone with excellent visual, written</p>
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
                                    <p className="hostedByPara">Project Manager</p>
                                </div>
                            </div>
                        </div>
                        <div className="row MainDivCount" style={{ paddingBottom: '0px' }}>
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" style={{ display: 'inline-flex' }}>
                                <Icon type="bars" style={{ color: 'white' }} /><h5 className="CountText">Event starts in</h5>
                            </div>
                            <div className="row" style={{ paddingBottom: '2vw', paddingTop: '2vw' }}>
                                <div className="col-xs-12 col-md-4 col-sm-4 col-lg-4" style={{display:'flex'}}>
                                    <div className="timerDicCsS">
                                        <p style={{margin:'0'}}>00</p>
                                    </div>
                                        <p className="timerTExt">DAYS</p>
                                </div>
                                <div className="col-xs-12 col-md-4 col-sm-4 col-lg-4" style={{display:'flex'}}>
                                    <div className="timerDicCsS">
                                        <p style={{margin:'0'}}>00</p>
                                    </div>
                                        <p className="timerTExt">HOURS</p>
                                </div>
                                <div className="col-xs-12 col-md-4 col-sm-4 col-lg-4" style={{display:'flex'}}>
                                    <div className="timerDicCsS">
                                        <p style={{margin:'0'}}>00</p>
                                    </div>
                                        <p className="timerTExt">MINUTES</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-1 col-md-1 col-lg-1"></div>
                </div>
            </div>
        )
    }
}
export default EventDetailTab;