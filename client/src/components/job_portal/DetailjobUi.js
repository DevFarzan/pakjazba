import React, { Component } from 'react';
import {
    Icon,
    Tabs
} from 'antd';
import CategoryImg from './catogoryicon.PNG';
import SimpleIcon from './simpleicon.PNG';
import JobdetailIconPanel from './JobDetailTabIcons';
import './DetailjobUi.css';

class JobDetailpage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            // openTabs: true,
        }
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
        const { data } = this.props;
        const { TabPane } = Tabs;
        console.log(this.tabnavigation,'status');
        return (
            <div style={{ backgroundColor: '#f7f5ed' }}>
                <div className="row" style={{paddingBottom:'0px'}}>
                    <div className="col-xs-12 col-sm-1 col-md-1 col-lg-1"></div>
                    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 elementMainDivS">
                        <div className="row" style={{paddingBottom:'0px'}}>
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" style={{display: 'inline-flex'}}>
                                <Icon type="unordered-list" /><h5 className="headMainDivs">Description</h5>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <p className="paraTextDivs">This role will drive the development and training of our Clients’ product to both internal teams and external customers. Candidates must be passionate about all technology categories including imaging, smart home, audio and computing. We are looking for someone with excellent visual, written</p>
                            </div> 
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4 elementMainDivS2">
                        <div className="row" style={{paddingBottom:'0px'}}>
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" style={{display: 'inline-flex'}}>
                                <Icon type="bars" /><h5 className="headMainDivs">Categories</h5>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" style={{textAlign:'center'}}>
                                <div className="row">
                                    <div className="col-xs-4 col-md-4 col-sm-4 col-lg-4"></div>
                                    <div className="col-xs-4 col-md-4 col-sm-4 col-lg-4">
                                        <img src={CategoryImg} alt="" className="" />
                                    </div>
                                    <div className="col-xs-4 col-md-4 col-sm-4 col-lg-4"></div>
                                </div>
                                <div className="row" style={{paddingBottom:'0px',paddingTop:'0px'}}>
                                    <div className="col-xs-2 col-md-3 col-sm-3 col-lg-3"></div>
                                    <div className="col-xs-10 col-md-6 col-sm-6 col-lg-6">
                                        <p className="designationPara">Project Manager</p>
                                    </div>
                                    <div className="col-xs-2 col-md-3 col-sm-3 col-lg-3"></div>
                                </div>
                            </div> 
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-1 col-md-1 col-lg-1"></div>
                </div>   

                <div className="row" style={{paddingBottom:'0px'}}>
                    <div className="col-xs-12 col-sm-1 col-md-1 col-lg-1"></div>
                    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 elementMainDivS">
                        <div className="row" style={{paddingBottom:'0px'}}>
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" style={{display: 'inline-flex'}}>
                                <Icon type="unordered-list" /><h5 className="headMainDivs">Qualification</h5>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <div className="row" style={{textAlign:'center'}}>
                                    <div className="col-xs-4 col-md-4 col-sm-4 col-lg-4">
                                        <img src={SimpleIcon} alt="" className="" /><br/>
                                        <p className="eductionPara">Certificate</p>
                                     </div>
                                    <div className="col-xs-4 col-md-4 col-sm-4 col-lg-4">
                                        <img src={SimpleIcon} alt="" className="" /><br/>
                                        <p className="eductionPara">Doctorate Degree</p>
                                    </div>
                                    <div className="col-xs-4 col-md-4 col-sm-4 col-lg-4">
                                        <img src={SimpleIcon} alt="" className="" /><br/>
                                        <p className="eductionPara">Master's Degree</p>
                                    </div>
                                </div>
                            </div> 
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4 elementMainDivS2">
                        <div className="row" style={{paddingBottom:'0px'}}>
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" style={{display: 'inline-flex'}}>
                                <Icon type="bars" /><h5 className="headMainDivs">Salary</h5>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" style={{textAlign:'center'}}>
                                <div className="row">
                                    <div className="col-xs-4 col-md-4 col-sm-4 col-lg-4"></div>
                                    <div className="col-xs-4 col-md-4 col-sm-4 col-lg-4">
                                        <img src={SimpleIcon} alt="" className="" />
                                    </div>
                                    <div className="col-xs-4 col-md-4 col-sm-4 col-lg-4"></div>
                                </div>
                                <div className="row" style={{paddingBottom:'0px',paddingTop:'0px'}}>
                                    <div className="col-xs-2 col-md-3 col-sm-3 col-lg-3"></div>
                                    <div className="col-xs-10 col-md-6 col-sm-6 col-lg-6">
                                        <p className="designationPara">Rs.35,000 - 45,000</p>
                                    </div>
                                    <div className="col-xs-2 col-md-3 col-sm-3 col-lg-3"></div>
                                </div>
                            </div> 
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-1 col-md-1 col-lg-1"></div>
                </div>

                <div className="row" style={{paddingBottom:'0px'}}>
                    <div className="col-xs-12 col-sm-1 col-md-1 col-lg-1"></div>
                    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 elementMainDivS">
                        <div className="row" style={{paddingBottom:'0px'}}>
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" style={{display: 'inline-flex'}}>
                                <Icon type="unordered-list" /><h5 className="headMainDivs">Social media</h5>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <div className="row" style={{textAlign:'center'}}>
                                    <div className="col-xs-4 col-md-4 col-sm-4 col-lg-4">
                                        <Icon type="facebook" className="fbLinkCsS" /><br/>
                                        <p className="eductionPara">Facebook</p>
                                     </div>
                                    <div className="col-xs-4 col-md-4 col-sm-4 col-lg-4">
                                        <Icon type="linkedin" className="LinkeDinCsS" /><br/>
                                        <p className="eductionPara">Linkdin</p>
                                    </div>
                                    <div className="col-xs-4 col-md-4 col-sm-4 col-lg-4">
                                        <Icon type="google-plus" className="gooGlePlusCsS" /><br/>
                                        <p className="eductionPara">Google+</p>
                                    </div>
                                </div>
                            </div> 
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4 elementMainDivS2">
                        <div className="row" style={{paddingBottom:'0px'}}>
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" style={{display: 'inline-flex'}}>
                                <Icon type="bars" /><h5 className="headMainDivs">Vacancy type</h5>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" style={{textAlign:'center'}}>
                                <div className="row">
                                    <div className="col-xs-4 col-md-4 col-sm-4 col-lg-4"></div>
                                    <div className="col-xs-4 col-md-4 col-sm-4 col-lg-4">
                                        <img src={SimpleIcon} alt="" className="" />
                                    </div>
                                    <div className="col-xs-4 col-md-4 col-sm-4 col-lg-4"></div>
                                </div>
                                <div className="row" style={{paddingBottom:'0px',paddingTop:'0px'}}>
                                    <div className="col-xs-2 col-md-3 col-sm-3 col-lg-3"></div>
                                    <div className="col-xs-10 col-md-6 col-sm-6 col-lg-6">
                                        <p className="designationPara">Internship</p>
                                    </div>
                                    <div className="col-xs-2 col-md-3 col-sm-3 col-lg-3"></div>
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
