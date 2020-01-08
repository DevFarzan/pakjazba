import React, { Component } from 'react';
import {
    Form,
    Input,
    Icon,
    Cascader,
    Spin,
    notification,
    Upload,
    Modal,
    TimePicker,
    Tabs
} from 'antd';
import Imggg from '../job_portal/ilusss-1.png';
import Burgermenu from '../header/burgermenu';
import Header from '../header/headermenu';
import Slider from '../header/Slider';
import Footer from '../footer/footer';
import JobDetailpage from './DetailjobUi';
import JobDetailTabIcons from '../job_portal/JobDetailTabIcons';
import JobSecondrow from './secondRow';
import Thirdrow from './Thirdrow';
import { Redirect } from 'react-router';
import './jobDetail.css';
import AsyncStorage from "@callstack/async-storage";
import { connect } from "react-redux";


class JobDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isData: true,
            data: {},
            user: false,
            visible: false,
            goForLogin: false
        }
    }

    componentDidMount() {
        let data = this.props.location.state || this.props.otherData;
        if (data === undefined) {
            this.setState({
                isData: false
            })
        } else {
            if (data.sec === 'mainPart') {
                window.scrollTo(0, 0);
            } else {
                window.scrollTo(0, 1150);
            }
            this.setState({ data, user: data.user });
        }
    }

    clickItem(item) {
        this.setState({ visible: true, objData: item })
    }

    handleCancel = (e) => {
        this.setState({ visible: false });
    }

    handleLogin = (e) => {
        const { dispatch } = this.props;
        const { data, user } = this.state;
        let otherData = { ...data, user: true };
        dispatch({ type: 'ANOTHERDATA', otherData })
        this.setState({ goForLogin: true, visible: false })
    }

    render() {
        const { data, isData, user, goForLogin } = this.state;
        const { TabPane } = Tabs;
        if (!isData) {
            return <Redirect to='/' />
        }
        if (goForLogin) {
            return <Redirect to={{ pathname: '/sigin', state: { from: { pathname: "/detail_jobPortal" }, state: data } }} />;
        }
        console.log(data.arr_url, 'imagebanner');
        return (
            <div>
                {/* <span>
                    <div className ="vissible-xs" style={{"background":"#d8e7e4",marginTop : "102px",backgroundSize: 'cover'}}>
                        <div className="visible-xs" style={{marginTop:'-119px'}}></div>
                        <div className="background-image">
                            <Burgermenu/>
                            <Slider mainH1="Job Portal" mainH2="Find your jobs here"/>
                        </div>
                    </div>
                </span> */}
                <Header />
                <div className="row" style={{ marginTop: '-1.5vw' }}>
                    {data.arr_url && <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" style={{ backgroundImage: `url(${data.arr_url[0]})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center center" }}>
                        {/* <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">     */}
                        <div className="row mainBannerPadMarg">
                            <div className="col-xs-4 col-sm-1 col-md-1 col-lg-1">
                                {/* <img src={data.arr_url && data.arr_url} alt="icon" className="BannerIcon" /> */}
                                <img src={Imggg} alt="icon" className="BannerIcon" />
                            </div>
                            <div className="col-xs-8 col-sm-9 col-md-9 col-lg-9">
                                <h1 className="BanerTextCsS">{data.compName && data.compName}</h1>
                            </div>
                            <div className="col-xs-12 col-sm-2 col-md-2 col-lg-2">
                                <button className="btnCallbaner">
                                    <Icon type="phone" /> <span>Call Now</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    }
                </div>
                <div className="row tabMainDiV">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <Tabs defaultActiveKey="1">
                            <TabPane
                                // onClick={this.tabnavigation('true')}
                                tab={
                                    <span>
                                        Details{" "}
                                    </span>
                                }
                                key="1"
                            >
                                <JobDetailTabIcons />
                                <JobDetailpage data={data} />
                            </TabPane>
                            <TabPane
                                // onClick={this.tabnavigation('false')}
                                tab={
                                    <span>
                                        Apply now{" "}
                                    </span>
                                }
                                key="2"
                            >
                                <JobDetailTabIcons />
                                {user && <Thirdrow data={data} />}
                                <div className="row">
                                    <div className="col-md-12 col-sm-12 col-xs-12" style={{ textAlign: "center" }}>
                                        {!user && <button
                                            type="button"
                                            className="btn2"
                                            style={{ marginTop: "70px", padding: "5px", backgroundColor: '#37a99b', color: 'white' }}
                                            onClick={() => { this.clickItem(data) }}
                                        >
                                            Apply This Job
                                            </button>}
                                    </div>
                                </div>
                                {this.state.visible && <Modal
                                    title="Kindly Login first"
                                    visible={this.state.visible}
                                    onOk={this.handleOk}
                                    onCancel={this.handleCancel}
                                >
                                    <div className="row">
                                        <div className="col-md-6" style={{ textAlign: 'center' }}><button className="btn btn-sm btn2-success" style={{ width: '100%' }} onClick={this.handleLogin}>Login</button></div>
                                        <div className="col-md-6" style={{ textAlign: 'center' }}><button className="btn btn-sm btn2-success" style={{ width: '100%' }} onClick={this.handleCancel}>Cancel</button></div>
                                    </div>
                                </Modal>}
                            </TabPane>
                        </Tabs>
                    </div>
                </div>

                {/*<JobSecondrow data={data}/>*/}


                <Footer />
                {/* {this.state.visible && <Modal
                    title="Kindly Login first"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                <div className="row">
                    <div className="col-md-6" style={{textAlign:'center'}}><button className="btn btn-sm btn2-success" style={{width:'100%'}} onClick={this.handleLogin}>Login</button></div>
                    <div className="col-md-6" style={{textAlign:'center'}}><button className="btn btn-sm btn2-success" style={{width:'100%'}} onClick={this.handleCancel}>Cancel</button></div>
                </div>
                </Modal>} */}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return ({
        otherData: state.otherData
    })
}

export default connect(mapStateToProps)(JobDetail);
