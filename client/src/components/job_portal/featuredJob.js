import React, { Component } from 'react';
import './featureJob.css';
import { Spin, Icon, Pagination, Modal, Button } from 'antd';
import {HttpUtils} from "../../Services/HttpUtils";
import { Redirect } from 'react-router';
import { Link } from "react-router-dom";
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
            goForLogin: false
        };
    }

    componentDidMount() {
        this.getAllBusiness();
    }

    componentDidUpdate(prevProps, prevState){
        const { job } = this.state;
        const { text } = this.props;
        if(prevProps.text !== text){
            if(!!text){
                this.searchedArr(text)
                // this.setState({ noText: false, loader: false })
            }else {
                this.setState({
                    showJob: job.slice(0, 6),
                    filteredArr: [],
                    add : 6
                })
            }
        }
    }

    searchedArr(text){
        const { job } = this.state;
        let filteredArr = job.filter((elem) => {
            return (elem.jobCat.toLowerCase().includes(text.toLowerCase())) ||
            (elem.jobType.toLowerCase().includes(text.toLowerCase()))
        })
        this.setState({
            filteredArr,
            showJob: filteredArr.slice(0, 6),
            add: 6
        })
    }

    async getAllBusiness(){
        var res = await HttpUtils.get('marketplace');
        this.setState({
            job: res && res.jobPortalData,
            showJob: res && res.jobPortalData.slice(0, 6),
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
                showJob: filteredArr.slice(0, add + 6),
                add: add + 6
            });
        }else {
            this.setState({
                showJob: job.slice(0, add + 6),
                add: add + 6
            });
        }
        if(this.props.text.length){
            let inputValue = '';
            const { dispatch } = this.props;
            dispatch({type: 'SEARCHON', inputValue})
        }
    }

    clickItem(item){
        this.setState({visible: true})
    }

    handleCancel = (e) => {
        this.setState({visible: false});
    }

    handleLogin = (e) => {
        this.setState({goForLogin: true, visible: false})
    }

    render(){
        const { showJob, filteredArr, job, noText, goForLogin } = this.state;
        const { text } = this.props;
        const antIcon = <Icon type="loading" style={{ fontSize: 120 }} spin />;

        if (goForLogin) {
            return <Redirect to={{pathname: '/sigin', state: {confirm: true}}}/>;
        }

        return(
            <div className="container" style={{width:"94%"}}>
                <h2 className="font-style" style={{textAlign:"center", fontWeight:"bold", marginTop:"20px"}}>Featured Jobs </h2>
                <div className="row">
                    <Link to={{pathname: `/postad_jobPortal`}}>
                        <div className="col-md-4"  style={{height: '530px' }}>
                            <img alt='' src='./images/blank-card.png' style={{border: '1px solid #3a252542', height: '100%', width: '90%'}}/>
                        </div>
                    </Link>
                    {showJob && showJob.map((elem) => {
                        return (
                            <div className="col-md-4">
                                <div className="featuredbox">
                                    <div className="featuredbox-content featuredjob-box ">
                                        <div className="featuredjob-imitation">
                                            <div className="card2">
                                                <img alt='' src={elem.arr_url[0]}/>
                                            </div>
                                        </div>
                                        <div className="customjob-margin">
                                            <h4 className="heading-wight font-style">{elem.jobCat}</h4>
                                            <i className="glyphicon glyphicon-star"/>
                                            <p className="textforjob font-style">{elem.jobType}</p>
                                            <div className="glyphicom">
                                                <i className="glyphicon glyphicon-map-marker"/>
                                                <p className="textforjob font-style ">{elem.location}</p>
                                            </div>
                                        </div>
                                        <div className="jobdetail-desc">
                                            <div> </div>
                                            <div className="small m-t-xs font-style">
                                                {elem.jobDescription}
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6 col-sm-12 col-xs-12">
                                                    <Link to={{pathname: `/detail_jobPortal`, state: {...elem, sec: 'mainPart'}}}>
                                                        <button type="button" className="btn btn-sm btn2-success font-style" style={{width:"100%"}}>View Detail</button>
                                                    </Link>
                                                </div>
                                                <div className="col-md-6 col-sm-12 col-xs-12">
                                                    {/*<Link to={{pathname: `/detail_jobPortal`, state: {...elem, sec: 'jobPart'}}}>*/}
                                                        <button type="button" className="btn btn-sm btn2-success font-style" style={{width:"100%"}} onClick={() => {this.clickItem(elem)}}>Apply Now</button>
                                                    {/*</Link>*/}
                                                </div>
                                            </div>
                                        </div>
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
                {/*!!showJob && <span style={{textAlign:"center"}}><Pagination defaultCurrent={1} defaultPageSize={6} total={!!filteredArr.length ? filteredArr.length :job.length} onChange={this.onChange} /></span>*/}
                <div className="col-md-12" style={{textAlign:"center"}}><button type="button" className="btn2 btn2-success font-style" onClick={this.onAddMore}>View More ...</button></div>
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
