import React, { Component } from 'react';
import {
    Icon,
    Tabs
} from 'antd';
import { Redirect } from 'react-router';
import CategoryImg from './catogoryicon.PNG';
import SimpleIcon from './simpleicon.PNG';
import JobdetailIconPanel from './JobDetailTabIcons';
import './DetailjobUi.css';

class JobDetailpage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            // openTabs: true,
            goProfile: false,
        }
    }
    goToProfile() {
        this.setState({ goProfile: true })
    }
    // componentWillUpdate() {
    //     tabnavigation = (e) => {
    //         this.setState({openTabs: e})
    //     }
    // }
    // tabnavigation = (e) => {
    //     this.setState({openTabs: e})
    // }

    render() {
        if (this.state.goProfile === true) {
            return <Redirect to={{ pathname: `/profile_user/${data.user_id}` }} />
        }
        const { data } = this.props;
        const { TabPane } = Tabs;
        console.log("TCL: JobDetailpage -> render -> data", data);
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
                                <p className="paraTextDivs">{data.jobDescription && data.jobDescription}</p>
                            </div>
                        </div>
                        <div className="row elementMainDivS" style={{ paddingBottom: '0px' }}>
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" style={{ display: 'inline-flex' }}>
                                <Icon type="unordered-list" /><h5 className="headMainDivs">Qualification</h5>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <div className="row" style={{ textAlign: 'center' }}>
                                    <div className="col-xs-1 col-md-2 col-sm-2 col-lg-2"></div>
                                    <div className="col-xs-10 col-md-8 col-sm-8 col-lg-8">
                                        <img src={SimpleIcon} alt="" className="" /><br />
                                        <p className="eductionPara">{data.jobCat && data.jobCat}</p>
                                    </div>
                                    <div className="col-xs-1 col-md-2 col-sm-2 col-lg-2"></div>
                                </div>
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
                                        <span style={{ fontWeight: 'bold' }}>{data.compName}</span><br />
                                        <a onClick={() => { this.goToProfile() }} style={{ fontSize: '13px', cursor: 'pointer', color: 'rgb(55, 169, 155)' }}>
                                            View Profile
                                                </a>
                                        <h5 style={{ marginTop: '10px', marginBottom: '7px' }}>
                                            <span className="glyphicon glyphicon-phone" style={{ marginRight: "15px", color: "#236A4B" }}></span>
                                            <span style={{ color: "rgba(0, 0, 0, 0.65)" }}>{data.contactnumber}03232323232</span>
                                        </h5>
                                        <h5 style={{ marginBottom: '7px' }}>
                                            <span className="glyphicon glyphicon-globe" style={{ marginRight: "15px", color: "#236A4B" }}></span>
                                            <span style={{ color: "rgba(0, 0, 0, 0.65)" }}>{data.email}</span>
                                        </h5>
                                        <h5>
                                            <span className="glyphicon glyphicon-home"
                                                style={{ marginRight: "15px", color: "#36a89f" }}></span>
                                            <span style={{ color: "rgba(0, 0, 0, 0.65)" }}>{data.location}, {data.city}. {data.state}</span>
                                        </h5>
                                    </div>
                                </div>
                                <div className="row" style={{ padding: "0", margin: '10px 0px 15px -5px' }}>
                                    <div className="col-xs-12 col-md-3 col-lg-3 col-xl-3 col-sm-5">
                                        <span className="resumeTxt">Send Resume On</span>
                                    </div>
                                    <div className="col-xs-12 col-md-9 col-lg-9 col-xl-9 col-sm-7">
                                        <span className="glyphicon glyphicon-globe" style={{ marginRight: "15px", color: "#236A4B" }}></span>
                                        <span style={{ color: "rgba(0, 0, 0, 0.65)" }}>danyal@krlceratiea.com</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                        <div className="row elementMainDivS2" style={{ paddingBottom: '0px' }}>
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" style={{ display: 'inline-flex' }}>
                                <Icon type="bars" /><h5 className="headMainDivs">Job Title</h5>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" style={{ textAlign: 'center' }}>
                                <div className="row">
                                    <div className="col-xs-4 col-md-4 col-sm-3 col-lg-4"></div>
                                    <div className="col-xs-4 col-md-4 col-sm-6 col-lg-4">
                                        <img src={CategoryImg} alt="" className="" />
                                    </div>
                                    <div className="col-xs-4 col-md-4 col-sm-3 col-lg-4"></div>
                                </div>
                                <div className="row" style={{ paddingBottom: '0px', paddingTop: '0px' }}>
                                    <div className="col-xs-1 col-md-1 col-sm-1 col-lg-1"></div>
                                    <div className="col-xs-10 col-md-10 col-sm-10 col-lg-10">
                                        <p className="designationPara">{data.jobTitle && data.jobTitle}</p>
                                    </div>
                                    <div className="col-xs-1 col-md-1 col-sm-1 col-lg-1"></div>
                                </div>
                            </div>
                        </div>
                        <div className="row elementMainDivS2" style={{ paddingBottom: '0px' }}>
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" style={{ display: 'inline-flex' }}>
                                <Icon type="bars" /><h5 className="headMainDivs">Categories</h5>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" style={{ textAlign: 'center' }}>

                                <div className="row" style={{ paddingBottom: '0px' }}>
                                    <div className="col-xs-1 col-md-1 col-sm-1 col-lg-1"></div>
                                    <div className="col-xs-10 col-md-10 col-sm-10 col-lg-10">
                                        <p className="designationPara">{data.jobCat && data.jobCat}</p>
                                    </div>
                                    <div className="col-xs-1 col-md-1 col-sm-1 col-lg-1"></div>
                                </div>
                            </div>
                        </div>
                        <div className="row elementMainDivS2" style={{ paddingBottom: '0px' }}>
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" style={{ display: 'inline-flex' }}>
                                <Icon type="bars" /><h5 className="headMainDivs">Salary</h5>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" style={{ textAlign: 'center' }}>
                                <div className="row">
                                    <div className="col-xs-4 col-md-4 col-sm-4 col-lg-4"></div>
                                    <div className="col-xs-4 col-md-4 col-sm-4 col-lg-4">
                                        <img src={SimpleIcon} alt="" className="" />
                                    </div>
                                    <div className="col-xs-4 col-md-4 col-sm-4 col-lg-4"></div>
                                </div>
                                <div className="row" style={{ paddingBottom: '0px', paddingTop: '0px' }}>
                                    <div className="col-xs-2 col-md-3 col-sm-3 col-lg-3"></div>
                                    <div className="col-xs-8 col-md-6 col-sm-6 col-lg-6">
                                        <p className="designationPara">${data.salary && data.salary}</p>
                                    </div>
                                    <div className="col-xs-2 col-md-3 col-sm-3 col-lg-3"></div>
                                </div>
                            </div>
                        </div>
                        {data.Website != '' && <div className="row elementMainDivS2" style={{ paddingBottom: '0px' }}>
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" style={{ display: 'inline-flex' }}>
                                <Icon type="bars" /><h5 className="headMainDivs">Website Link</h5>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" style={{ textAlign: 'center' }}>
                                <div className="row" style={{ textAlign: 'center' }}>
                                    <div className="col-xs-4 col-md-4 col-sm-12 col-lg-4"></div>
                                    <div className="col-xs-4 col-md-4 col-sm-12 col-lg-4">
                                        <a href={data.Website} target="_blank" className="fa fa-link social_button" style={{ width: "40px", height: "40px", color: '#2867B2' }}></a><br />
                                        <p className="eductionPara">Website</p>
                                    </div>
                                    <div className="col-xs-4 col-md-4 col-sm-12 col-lg-4"></div>
                                </div>
                            </div>
                        </div>}
                    </div>
                    <div className="col-xs-12 col-sm-1 col-md-1 col-lg-1"></div>
                </div>
                <div className="row" style={{ paddingBottom: '0px' }}>
                    <div className="col-xs-12 col-sm-1 col-md-1 col-lg-1"></div>
                    <div className="col-xs-12 col-sm-10 col-md-10 col-lg-10" style={{ padding: '0' }}>
                        <div className="row">
                            {data.Google != '' && <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                                <div className="row elementMainDivS socialMediadiv">
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
                                                <a href={data.LinkdIn} target="_blank" className="fa fa-linkedin social_button" style={{ width: "40px", height: "40px", color: '#2867B2' }}></a><br />
                                                <p className="eductionPara">Linkdin</p>
                                            </div>
                                            <div className="col-xs-4 col-md-4 col-sm-12 col-lg-4">
                                                <a href={data.Google} target="_blank" className="fa fa-google-plus social_button" style={{ width: "40px", height: "40px", color: '#db4a39' }}></a><br />
                                                <p className="eductionPara">Google+</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>}
                            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                                <div className="row elementMainDivS222" style={{ paddingBottom: '0px', height: '165px' }}>
                                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" style={{ display: 'inline-flex' }}>
                                        <Icon type="bars" /><h5 className="headMainDivs">Vacancy type</h5>
                                    </div>
                                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" style={{ textAlign: 'center' }}>
                                        <div className="row">
                                            <div className="col-xs-4 col-md-4 col-sm-4 col-lg-4"></div>
                                            <div className="col-xs-4 col-md-4 col-sm-4 col-lg-4">
                                                <img src={SimpleIcon} alt="" className="" />
                                            </div>
                                            <div className="col-xs-4 col-md-4 col-sm-4 col-lg-4"></div>
                                        </div>
                                        <div className="row" style={{ paddingBottom: '0px', paddingTop: '0px' }}>
                                            <div className="col-xs-2 col-md-3 col-sm-1 col-lg-3"></div>
                                            <div className="col-xs-8 col-md-6 col-sm-10 col-lg-6">
                                                <p className="designationPara">{data.jobType && data.jobType} </p>
                                            </div>
                                            <div className="col-xs-2 col-md-3 col-sm-1 col-lg-3"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                                <div className="row elementMainDivS222 experienceDiv">
                                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" style={{ display: 'inline-flex' }}>
                                        <Icon type="bars" /><h5 className="headMainDivs">Experience required</h5>
                                    </div>
                                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" style={{ textAlign: 'center' }}>
                                        <div className="row">
                                            <div className="col-xs-4 col-md-4 col-sm-4 col-lg-4"></div>
                                            <div className="col-xs-4 col-md-4 col-sm-4 col-lg-4">
                                                <img src={SimpleIcon} alt="" className="" />
                                            </div>
                                            <div className="col-xs-4 col-md-4 col-sm-4 col-lg-4"></div>
                                        </div>
                                        <div className="row" style={{ paddingBottom: '0px', paddingTop: '0px', textAlign: 'center' }}>
                                            <div className="col-xs-2 col-md-2 col-sm-1 col-lg-2"></div>
                                            <div className="col-xs-8 col-md-8 col-sm-10 col-lg-8">
                                                <p className="designationPara">{data.experience && data.experience} </p>
                                            </div>
                                            <div className="col-xs-2 col-md-2 col-sm-1 col-lg-2"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-1 col-md-1 col-lg-1"></div>
                </div>
                {/* <div className="container" style={{width:"70%"}}>
                        <div className="row" style={{padding:"0"}}>
                                <div className="col-md-10 col-sm-9 col-xs-7 des-space">
                                    <h1 style={{fontWeight:"bold",fontFamily: 'Crimson Text, sans-serif',marginTop:'11px', marginBottom:"5px"}}>{data.jobTitle && data.jobTitle}</h1>
                                    <p className="companyName" style={{marginBottom:"0"}}>{data.compName && data.compName}</p>
                                    <div className="glyphicom">
                                        <i className="glyphicon glyphicon-map-marker"/>
                                        <p className="textforjob font-style ">{data.location && data.location}</p>
                                    </div>
                                </div>
                                <div className="col-md-2 col-sm-3 col-xs-5 des-space">
                                    <span >
                                    <p className="job-time" style={{fontFamily: 'Work Sans, sans-serif'}}>{data.jobType && data.jobType}</p>
                                    </span>
                                </div>
                                <div className="col-md-2 col-sm-3 col-xs-5 des-space">
                                    <span >
                                    <p className="job-time" style={{fontFamily: 'Work Sans, sans-serif', marginTop:"-30px"}}>Category</p>
                                    </span>
                                </div>
                        </div>
                        <div>
                            <h3> About The Jobb </h3>
                            <hr style={{borderTop: "1px solid black", width:"100%"}}/>
                            <p style={{fontFamily: 'Work Sans, sans-serif'}}>{data.jobDescription && data.jobDescription}</p>
                        </div>
                    </div> */}
            </div>
        )
    }
}

export default JobDetailpage;
