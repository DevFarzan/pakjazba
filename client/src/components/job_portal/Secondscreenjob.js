import React, { Component } from 'react';
import './Secondscreenjob.css';
import {  Link } from "react-router-dom";
import { Tabs, Icon, Modal } from 'antd';
import { Redirect } from 'react-router';
import JobNews from './Rssforjob';
import axios from "axios/index";
import AsyncStorage from "@callstack/async-storage/lib/index";
import { connect } from 'react-redux';

const TabPane = Tabs.TabPane;

class Secondscreencard extends Component{
    constructor(props) {
        super(props)
        this.state = {
            news: [],
            sports: []
        };
    }

    componentDidMount() {
        window.scrollTo(0,0);
        this.callApi()
        this.handleLocalStorage();
    }

    async callApi(){
        const sports = await axios.get('https://newsapi.org/v2/top-headlines?sources=bbc-sport&apiKey=6e7e6a696773424187f9bdb80954ded7');
        const news = await axios.get('https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=6e7e6a696773424187f9bdb80954ded7');
        this.setState({news: news.data.articles, sports: sports.data.articles})

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

    ViewAll = (item) => {
        this.props.allData();
    }

    clickItem(item){
        const { user } = this.state;
        if(user){
            this.setState({goDetail: true, objData: item})
        }else {
            this.setState({visible: true, objData: item})
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
        const { news, sports, goForLogin, goDetail, objData, user } = this.state;
        const { data } = this.props;

        if (goForLogin) {
            return <Redirect to={{pathname: '/sigin', state: {from: { pathname: "/detail_jobPortal" }, state: objData}}}/>;
        }
        if(goDetail){
            return <Redirect to={{pathname: `/detail_jobPortal`, state: {...objData, user: user}}} />
        }

        return(
            <div className="container" style={{width:"70%"}}>
                <div className="row" style={{padding:"0",marginBottom:'70px'}}>
                    <div className="col-md-12"> {/*col-md-9 open*/}
                            {data && data.length ? data.map((elem) => {
                                let str = elem.location || '';
                                if(str.length > 10) {
                                    str = str.substring(0, 8);
                                    str = str + '...'
                                }
                                let des = elem.jobDescription || '';
                                if(des.length > 30) {
                                    des = des.substring(0, 40);
                                    des = des + '...'
                                }
                                return (
                                    <div className="col-md-3 col-sm-3 col-xs-6" style={{paddingRight:"6px"}}>
                                        <div className="">
                                            <div className="featuredjob-imitation">
                                              <Link to={{pathname: `/detail_jobPortal`, state: {...elem, sec: 'mainPart', user: user}}}>
                                                <div className="card2">
                                                    <img alt='' src={elem.arr_url[0]}/>
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
                                            {/*<div className="jobdetail-desc">
                                                <div className="small m-t-xs font-style">
                                                    <p>{des}</p>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-6 col-sm-12 col-xs-12">
                                                        <Link to={{pathname: `/detail_jobPortal`, state: {...elem, sec: 'mainPart', user: user}}}>
                                                            <button type="button" className="btn btn-sm btn2-success font-style" style={{width:"100%"}}>View Detail</button>
                                                        </Link>
                                                    </div>
                                                    <div className="col-md-6 col-sm-12 col-xs-12">
                                                        <button type="button" className="btn btn-sm btn2-success font-style" style={{width:"100%"}} onClick={() => {this.clickItem(elem)}}>Apply Now</button>
                                                    </div>
                                                </div>
                                            </div>*/}
                                        </div>
                                    </div>
                                )
                            })
                            :<div className="col-md-12 col-sm-12 col-xs-12">
                                <div className="col-md-4"></div>
                                <div className="col-md-4"  style={{textAlign:"center"}}>
                                    <h3>Searched data not found</h3>
                                    <button type="button" className="btn btn-sm btn2-success font-style"  style={{width:"100%"}}  onClick={this.ViewAll}>Search More</button>
                                </div>
                                <div className="col-md-4"></div>
                            </div>
                            }
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
                    {/*<div className="col-md-3">
                        <div className="row">
                            <Tabs defaultActiveKey="2" style={{border:'1px solid gray',backgroundColor:'rgba(119, 136, 153, 0.05)',padding: '10px', marginBottom: '20px'}}>
                                <TabPane style={{height: '450px', 'overflow-y': 'overlay', fontColor: 'black'}} tab='SPORTS' key="1">
                                    {sports.map((elem) => {
                                        return(
                                            <div className="b-sec">
                                                <a href={elem.url} target="_blank">
                                                    <img style={{width: '100%'}} src={elem.urlToImage} alt=""/>
                                                    <p><b>{elem.title}</b></p>
                                                </a>
                                            </div>
                                        )
                                    })}
                                </TabPane>
                                <TabPane style={{height: '450px', 'overflow-y': 'overlay'}} tab='NEWS' key="2">
                                    {news.map((elem) => {
                                        return(
                                            <div className="b-sec">
                                                <a href={elem.url} target="_blank">
                                                    <img style={{width: '100%'}} src={elem.urlToImage} alt=""/>
                                                    <p><b>{elem.title}</b></p>
                                                </a>
                                            </div>
                                        )
                                    })}
                                </TabPane>
                            </Tabs>
                            <JobNews/>
                        </div>
                    </div>*/}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return({
        text: state.text
    })
}

export default connect(mapStateToProps)(Secondscreencard);
