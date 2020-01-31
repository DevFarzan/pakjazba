import React, { Component } from 'react';
import './featureJob.css';
import { Spin, Icon, Pagination, Modal, Button } from 'antd';
import { HttpUtils } from "../../Services/HttpUtils";
import { Redirect } from 'react-router';
import { Link } from "react-router-dom";
import AsyncStorage from "@callstack/async-storage/lib/index";
import { connect } from 'react-redux';

class FeaturedBox extends Component {
    constructor(props) {
        super(props)
        this.state = {
            // job: [],
            // showJob: [],
            // filteredArr: [],
            // loader: true,
            // add: 6,
            // noText: true,
            // visible: false,
            // goForLogin: false,
            // objData: {},
            // user: false,
            // goDetail: false
        };
    }

    // componentDidMount() {
    //     this.getAllBusiness();
    //     this.handleLocalStorage();
    // }

    // componentDidUpdate(prevProps, prevState) {
    //     const { job } = this.state;
    //     const { text } = this.props;
    //     if (prevProps.text !== text) {
    //         if (!!text) {
    //             this.searchedArr(text)
    //         } else {
    //             this.setState({
    //                 showJob: job.slice(0, 6),
    //                 filteredArr: [],
    //                 add: 6
    //             })
    //         }
    //     }
    // }

    // handleLocalStorage = () => {
    //     AsyncStorage.getItem('user')
    //         .then((obj) => {
    //             let userObj = JSON.parse(obj)
    //             if (!!userObj) {
    //                 this.setState({
    //                     user: true,
    //                 })
    //             }
    //             else {
    //                 this.setState({
    //                     user: false
    //                 })
    //             }
    //         })
    // }

    // searchedArr(text) {
    //     const { job } = this.state;
    //     let filteredArr = job.filter((elem) => {
    //         return (elem.jobCat.toLowerCase().includes(text.toLowerCase())) ||
    //             (elem.jobType.toLowerCase().includes(text.toLowerCase()))
    //     })
    //     this.setState({
    //         filteredArr,
    //         showJob: filteredArr.slice(0, 7),
    //         add: 7
    //     })
    // }

    // async getAllBusiness() {
    //     var res = await HttpUtils.get('marketplace');
    //     this.setState({
    //         job: res.jobPortalData && res.jobPortalData,
    //         showJob: res.jobPortalData ? res.jobPortalData.slice(0, 7) : [],
    //         loader: false
    //     });
    // }

    // funcIndexes(page) {
    //     var to = 6 * page;
    //     var from = to - 6;
    //     return { from: page === 1 ? 0 : from, to: page === 1 ? 6 : to }
    // }

    // onChange = (page) => {
    //     const { job, filteredArr } = this.state;
    //     var indexes = this.funcIndexes(page)
    //     if (!!filteredArr.length) {
    //         this.setState({
    //             current: page,
    //             showJob: filteredArr.slice(indexes.from, indexes.to)
    //         });
    //     } else {
    //         this.setState({
    //             current: page,
    //             showJob: job.slice(indexes.from, indexes.to)
    //         });
    //     }
    // }

    // onAddMore = () => {
    //     const { add, job, filteredArr } = this.state;
    //     if (!!filteredArr.length) {
    //         this.setState({
    //             showJob: filteredArr.slice(0, add + 8),
    //             add: add + 8
    //         });
    //     } else {
    //         this.setState({
    //             showJob: job.slice(0, add + 8),
    //             add: add + 8
    //         });
    //     }
    //     if (this.props.text.length) {
    //         let inputValue = '';
    //         const { dispatch } = this.props;
    //         dispatch({ type: 'SEARCHON', inputValue })
    //     }
    // }

    // clickItem(item) {
    //     const { user } = this.state;
    //     if (user) {
    //         this.setState({ goDetail: true, objData: item })
    //     } else {
    //         this.setState({ visible: true, objData: item })
    //     }
    // }

    // addJob() {
    //     const { user } = this.state;
    //     if (user) {
    //         this.setState({ goForward: true })
    //     } else {
    //         this.setState({ visible: true, objData: {} })
    //     }
    // }

    // handleCancel = (e) => {
    //     this.setState({ visible: false, objData: {} });
    // }

    // handleLogin = (e) => {
    //     const { dispatch } = this.props;
    //     const { objData, user } = this.state;
    //     let otherData = { ...objData, user: true };
    //     dispatch({ type: 'ANOTHERDATA', otherData })
    //     this.setState({ goForLogin: true, visible: false })
    // }

    render() {
        const { showJob, filteredArr, job, noText, goForLogin, objData, goDetail, user, goForward } = this.state;
        const { text } = this.props;
        const antIcon = <Icon type="loading" style={{ fontSize: 120 }} spin />;

        if (goForLogin) {
            if (Object.keys(objData).length > 0) {
                return <Redirect to={{ pathname: '/sigin', state: { from: { pathname: "/detail_jobPortal" }, state: objData } }} />;
            } else {
                return <Redirect to={{ pathname: '/sigin', state: { from: { pathname: "/postad_jobPortal" } } }} />;
            }
        }
        if (goDetail) {
            return <Redirect to={{ pathname: `/detail_jobPortal`, state: { ...objData, user: user } }} />
        }
        if (goForward) {
            return <Redirect to={{ pathname: `/postad_jobPortal` }} />
        }

        const { showAllJobs,
            filteredData,
            notFoundFilterData,
            showRecord,
            categoroyOfJob,
            stateOfJob,
            cityOfJob,
            TypeOfJob,
            removeValue,
            showAllRooms } = this.props;

        return (
            <div className="container" style={{ width: "100%" }}>
                <div className="row">
                    {TypeOfJob && TypeOfJob.length > 0 && <div className="col-xs-5 col-sm-2 col-md-2 col-lg-2">
                        {TypeOfJob.map((elem, key) => {
                            return (
                                <div className="cross-card">
                                    <li>{elem}<span class="close crossBtnExlpre"
                                        onClick={removeValue.bind(this, 'type', elem)}
                                    >x</span></li>
                                </div>)
                        })}
                    </div>}

                    {categoroyOfJob && categoroyOfJob.length > 0 && <div className="col-xs-5 col-sm-3 col-md-3 col-lg-3">
                        {categoroyOfJob.map((elem, key) => {
                            return (
                                <div className="cross-card">
                                    <li>{elem}<span class="close crossBtnExlpre"
                                        onClick={removeValue.bind(this, 'category', elem)}
                                    >x</span></li>
                                </div>)
                        })}
                    </div>}

                    {stateOfJob && stateOfJob.length > 0 && <div className="col-xs-5 col-sm-2 col-md-2 col-lg-2">
                        {stateOfJob.map((elem, key) => {
                            return (
                                <div className="cross-card">
                                    <li>{elem}<span class="close crossBtnExlpre"
                                        onClick={removeValue.bind(this, 'state', elem)}
                                    >x</span></li>
                                </div>)
                        })}
                    </div>}

                    {cityOfJob && cityOfJob.length > 0 && <div className="col-xs-5 col-sm-2 col-md-2 col-lg-2">
                        {cityOfJob.map((elem, key) => {
                            return (
                                <div className="cross-card">
                                    <li>{elem}<span class="close crossBtnExlpre"
                                        onClick={removeValue.bind(this, 'city', elem)}
                                    >x</span></li>
                                </div>)
                        })}
                    </div>}
                </div>
                {/* {!this.state.loader && showJob.length == 0 && <h4 className="" style={{ fontWeight: "bold", marginTop: "20px" }}>No jobs available</h4>} */}

                {showAllJobs.length > 0 && <h4 className="" style={{ fontWeight: "bold", marginTop: "20px" }}>
                    Featured Jobs </h4>}

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
                        filteredData && filteredData.map((elem) => {
                            let str = elem.location || '';
                            if (str.length > 8) {
                                str = str.substring(0, 8);
                                str = str + '...'
                            }
                            return (
                                <div className="col-md-4 col-sm-5">
                                    <div className="">
                                        <div className="featuredjob-imitation">
                                            <Link to={{ pathname: `/detail_jobPortal`, state: { ...elem, sec: 'mainPart', user: user } }}>
                                                <div className="card2">
                                                    <img alt='' src={elem.arr_url[0]} style={{ filter: 'brightness(0.5)' }} />
                                                </div>
                                                <div className="jobcardcarousel">
                                                    <div className="row">
                                                        <div className="col-md-3 col-xs-3">
                                                            <div className="jobownerimage">
                                                                <img src="./images/images.jpg" alt="" />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-9 col-xs-9">
                                                            <h4 style={{ margin: "0" }}>
                                                                <b>{elem.jobCat}</b>
                                                            </h4>
                                                            <div className="row" style={{ padding: "10px" }}>
                                                                <div className="col-md-6 col-xs-6" style={{ padding: "0" }}>
                                                                    <span className="glyphicon glyphicon-map-marker"
                                                                        style={{ color: "#236A4B", marginRight: "2px" }}
                                                                    ></span>
                                                                    <span style={{ color: "black" }}>{elem.location.slice(0, 7)}...</span>
                                                                </div>
                                                                <div className="col-md-6 col-xs-6" style={{ padding: "0" }}>
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
                                                            <span style={{ color: "black" }}>{elem.jobType && elem.jobType}</span>
                                                        </div>
                                                        <div className="col-md-5">

                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                    {notFoundFilterData == false && filteredData.length == 0 && showRecord ?
                        showAllJobs && showAllJobs.map((elem) => {
                            let str = elem.location || '';
                            if (str.length > 8) {
                                str = str.substring(0, 8);
                                str = str + '...'
                            }
                            return (
                                <div className="col-md-4 col-sm-5">
                                    <div className="">
                                        <div className="featuredjob-imitation">
                                            <Link to={{ pathname: `/detail_jobPortal`, state: { ...elem, sec: 'mainPart', user: user } }}>
                                                <div className="card2">
                                                    <img alt='' src={elem.arr_url[0]} style={{ filter: 'brightness(0.5)' }} />
                                                </div>
                                                <div className="jobcardcarousel">
                                                    <div className="row">
                                                        <div className="col-md-3 col-xs-3">
                                                            <div className="jobownerimage">
                                                                <img src="./images/images.jpg" alt="" />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-9 col-xs-9">
                                                            <h4 style={{ margin: "0" }}>
                                                                <b>{elem.jobCat}</b>
                                                            </h4>
                                                            <div className="row" style={{ padding: "10px" }}>
                                                                <div className="col-md-6 col-xs-6" style={{ padding: "0" }}>
                                                                    <span className="glyphicon glyphicon-map-marker"
                                                                        style={{ color: "#236A4B", marginRight: "2px" }}
                                                                    ></span>
                                                                    <span style={{ color: "black" }}>{elem.location.slice(0, 7)}...</span>
                                                                </div>
                                                                <div className="col-md-6 col-xs-6" style={{ padding: "0" }}>
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
                                                            <span style={{ color: "black" }}>{elem.jobType && elem.jobType}</span>
                                                        </div>
                                                        <div className="col-md-5">

                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                        : null
                    }
                </div>


                {/* {this.state.loader && <div className="row">
                    <div className="col-md-4"></div>
                    <div className="col-md-4" style={{ textAlign: 'center', marginLeft: '-53px' }}>
                        <Spin indicator={antIcon} />
                    </div>
                    <div className="col-md-4"></div>
                </div>}
                {text && !!filteredArr.length === false && <span style={{ textAlign: "center" }}><h1 className="font-style">Not found....</h1></span>}
                {text && !!filteredArr.length === false && <span style={{ textAlign: "center" }}><h5 className="font-style">you can find your search by type</h5></span>}
                {(showJob.length >= 7) && !(showJob.length === job.length) && <div className="col-md-12" style={{ textAlign: "center" }}><button type="button" className="btn2 btn2-success font-style" onClick={this.onAddMore}>View More ...</button></div>}
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
                </Modal>} */}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return ({
        text: state.text
    })
}

export default connect(mapStateToProps)(FeaturedBox);
