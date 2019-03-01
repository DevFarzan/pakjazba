import React, { Component } from 'react';
import './featureJob.css';
import { Spin, Icon, Pagination, Modal, Button } from 'antd';
import {HttpUtils} from "../../Services/HttpUtils";
import { Redirect } from 'react-router';
import { Link } from "react-router-dom";
import AsyncStorage from "@callstack/async-storage/lib/index";
import { connect } from 'react-redux';

class FeaturedBox extends Component{
    constructor(props) {
        super(props)
        this.state = {
            job: [],
            showJob: [],
            filteredArr: [],
            loader: true,
            add: 6,
            noText: true,
            visible: false,
            goForLogin: false,
            objData : {},
            user: false,
            goDetail: false
        };
    }

    componentDidMount() {
        this.getAllBusiness();
        this.handleLocalStorage();
    }

    componentDidUpdate(prevProps, prevState){
        const { job } = this.state;
        const { text } = this.props;
        if(prevProps.text !== text){
            if(!!text){
                this.searchedArr(text)
            }else {
                this.setState({
                    showJob: job.slice(0, 6),
                    filteredArr: [],
                    add : 6
                })
            }
        }
    }

    handleLocalStorage = () =>{
        AsyncStorage.getItem('user')
            .then((obj) => {
                let userObj = JSON.parse(obj)
                if(!!userObj){
                    this.setState({
                        user: true,
                    })
                }
                else {
                    this.setState({
                        user: false
                    })
                }
            })
    }

    searchedArr(text){
        const { job } = this.state;
        let filteredArr = job.filter((elem) => {
            return (elem.jobCat.toLowerCase().includes(text.toLowerCase())) ||
            (elem.jobType.toLowerCase().includes(text.toLowerCase()))
        })
        this.setState({
            filteredArr,
            showJob: filteredArr.slice(0, 7),
            add: 7
        })
    }

    async getAllBusiness(){
        var res = await HttpUtils.get('marketplace');
        this.setState({
            job: res.jobPortalData && res.jobPortalData,
            showJob: res.jobPortalData ? res.jobPortalData.slice(0, 7) : [],
            loader: false
        });
    }

    funcIndexes(page){
        var to = 6 * page;
        var from = to - 6;
        return {from: page === 1 ? 0 : from, to: page === 1 ? 6 : to}
    }

    onChange = (page) => {
        const { job, filteredArr } = this.state;
        var indexes = this.funcIndexes(page)
        if(!!filteredArr.length){
            this.setState({
                current: page,
                showJob: filteredArr.slice(indexes.from, indexes.to)
            });
        }else {
            this.setState({
                current: page,
                showJob: job.slice(indexes.from, indexes.to)
            });
        }
    }

    onAddMore = () => {
        const { add, job, filteredArr } = this.state;
        if(!!filteredArr.length){
            this.setState({
                showJob: filteredArr.slice(0, add + 8),
                add: add + 8
            });
        }else {
            this.setState({
                showJob: job.slice(0, add + 8),
                add: add + 8
            });
        }
        if(this.props.text.length){
            let inputValue = '';
            const { dispatch } = this.props;
            dispatch({type: 'SEARCHON', inputValue})
        }
    }

    clickItem(item){
        const { user } = this.state;
        if(user){
            this.setState({goDetail: true, objData: item})
        }else {
            this.setState({visible: true, objData: item})
        }
    }

    addJob(){
        const { user } = this.state;
        if(user){
            this.setState({goForward: true})
        }else {
            this.setState({visible: true, objData: {}})
        }
    }

    handleCancel = (e) => {
        this.setState({visible: false, objData: {}});
    }

    handleLogin = (e) => {
        const { dispatch } = this.props;
        const { objData, user } = this.state;
        let otherData = {...objData, user: true};
        dispatch({type: 'ANOTHERDATA', otherData})
        this.setState({goForLogin: true, visible: false})
    }

    render(){
        const { showJob, filteredArr, job, noText, goForLogin, objData, goDetail, user, goForward } = this.state;
        const { text } = this.props;
        const antIcon = <Icon type="loading" style={{ fontSize: 120 }} spin />;

        if (goForLogin) {
            if(Object.keys(objData). length > 0){
                return <Redirect to={{pathname: '/sigin', state: {from: { pathname: "/detail_jobPortal" }, state: objData}}}/>;
            }else {
                return <Redirect to={{pathname: '/sigin', state: {from: { pathname: "/postad_jobPortal" }}}}/>;
            }
        }
        if(goDetail){
            return <Redirect to={{pathname: `/detail_jobPortal`, state: {...objData, user: user}}} />
        }
        if(goForward){
            return <Redirect to={{pathname: `/postad_jobPortal`}} />
        }

        return(
            <div className="container" style={{width:"70%"}}>
              <div className="hidden-xs">
                <div className="Person" style={{width:"100%"}}>
                  <div className="row">
                    <div className="col-md-6">
                      <h1> Find, Explore Job <br/> Opportunities <br/> with PakJazba </h1>
                      <p> 100+ companies with the jobs for you </p>
                    </div>
                    <div className="col-md-6">
                      <img src="images/job-icons/ilus-2.png"/>
                    </div>
                  </div>
                </div>
              </div>
                {!this.state.loader && showJob == 0 && <h2 className="font-style" style={{textAlign:"center", fontWeight:"bold", marginTop:"20px"}}>No jobs available</h2>}
                {showJob > 0 && <h2 className="font-style" style={{textAlign:"center", fontWeight:"bold", marginTop:"20px"}}>Featured Jobs </h2>}
                <div className="row">
                    {/*<div className="col-md-3" onClick={() => {this.addJob()}}>
                        <img alt='' src='./images/blank-card.png' style={{border: '1px solid #3a252542', height: '380px', width: '90%',borderRadius:'16px'}}/>
                    </div>*/}
                    {showJob && showJob.map((elem) => {
                        let str = elem.location || '';
                        if(str.length > 8) {
                            str = str.substring(0, 8);
                            str = str + '...'
                        }
                        return (
                            <div className="col-md-3">
                                <div className="">
                                        <div className="featuredjob-imitation">
                                        <Link to={{pathname: `/detail_jobPortal`, state: {...elem, sec: 'mainPart', user: user}}}>
                                            <div className="card2">
                                                <img alt='' src={elem.arr_url[0]} style={{height:'200px'}} />
                                            </div>
                                            </Link>
                                        </div>
                                        <div className="customjob-margin">
                                            <p className="companyName" style={{marginBottom:"0"}}>{elem.compName && elem.compName}</p>
                                            <h4 className="heading-wight font-style">{elem.jobCat}</h4>
                                            <div className="glyphicom">
                                                <i className="glyphicon glyphicon-map-marker"/>
                                                <p className="textforjob font-style ">{str}</p>
                                            </div>
                                        </div>
                                        <div className="jobdetail-desc">
                                            <div> </div>
                                            {/*<div className="row" style={{padding:'0px'}}>
                                                <div className="col-md-6 col-sm-12 col-xs-12">
                                                    <Link to={{pathname: `/detail_jobPortal`, state: {...elem, sec: 'mainPart', user: user}}}>
                                                        <button type="button" className="btn btn-sm btn2-success font-style">View Detail</button>
                                                    </Link>
                                                </div>
                                                <div className="col-md-6 col-sm-12 col-xs-12">
                                                    <button type="button" className="btn btn-sm btn2-success font-style" onClick={() => {this.clickItem(elem)}}>Apply Now</button>
                                                </div>
                                            </div>*/}
                                        </div>
                                    </div>
                            </div>
                        )
                    })}
                </div>
                {this.state.loader && <div className="row">
                    <div className="col-md-4"></div>
                    <div className="col-md-4" style={{textAlign: 'center',marginLeft:'-53px'}}>
                        <Spin indicator={antIcon} />
                    </div>
                    <div className="col-md-4"></div>
                </div>}
                {text && !!filteredArr.length === false &&<span style={{textAlign:"center"}}><h1 className="font-style">Not found....</h1></span>}
                {text && !!filteredArr.length === false &&<span style={{textAlign:"center"}}><h5 className="font-style">you can find your search by type</h5></span>}
                {(showJob.length >= 7) && !(showJob.length === job.length) && <div className="col-md-12" style={{textAlign:"center"}}><button type="button" className="btn2 btn2-success font-style" onClick={this.onAddMore}>View More ...</button></div>}
                {this.state.visible && <Modal
                    title="Kindly Login first"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                <div className="row">
                    <div className="col-md-6" style={{textAlign:'center'}}><button className="btn btn-sm btn2-success" style={{width:'100%'}} onClick={this.handleLogin}>Login</button></div>
                    <div className="col-md-6" style={{textAlign:'center'}}><button className="btn btn-sm btn2-success" style={{width:'100%'}} onClick={this.handleCancel}>Cancel</button></div>
                </div>
                </Modal>}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return({
        text: state.text
    })
}

export default connect(mapStateToProps)(FeaturedBox);
