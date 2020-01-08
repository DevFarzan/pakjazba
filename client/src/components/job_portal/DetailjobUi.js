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
        console.log(data.arr_url,'data');
        return (
            <div style={{ backgroundColor: '#f7f5ed' }}>
                <div className="row" style={{paddingBottom:'0px'}}>
                    <div className="col-xs-12 col-sm-1 col-md-1 col-lg-1"></div>
                    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                        <div className="row elementMainDivS" style={{paddingBottom:'0px'}}>
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" style={{display: 'inline-flex'}}>
                                <Icon type="unordered-list" /><h5 className="headMainDivs">Description</h5>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <p className="paraTextDivs">{data.jobDescription && data.jobDescription}</p>
                            </div> 
                        </div>
                        <div className="row elementMainDivS" style={{paddingBottom:'0px'}}>
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" style={{display: 'inline-flex'}}>
                                <Icon type="unordered-list" /><h5 className="headMainDivs">Qualification</h5>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <div className="row" style={{textAlign:'center'}}>
                                    <div className="col-xs-4 col-md-4 col-sm-4 col-lg-4">
                                        {/* <img src={SimpleIcon} alt="" className="" /><br/>
                                        <p className="eductionPara">Certificate</p> */}
                                     </div>
                                    <div className="col-xs-4 col-md-4 col-sm-4 col-lg-4">
                                        <img src={SimpleIcon} alt="" className="" /><br/>
                                        <p className="eductionPara">{data.jobCat && data.jobCat}</p>
                                    </div>
                                    <div className="col-xs-4 col-md-4 col-sm-4 col-lg-4">
                                        {/* <img src={SimpleIcon} alt="" className="" /><br/>
                                        <p className="eductionPara">Master's Degree</p> */}
                                    </div>
                                </div>
                            </div> 
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                        <div className="row elementMainDivS2" style={{paddingBottom:'0px'}}>
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
                                    <div className="col-xs-8 col-md-6 col-sm-6 col-lg-6">
                                        <p className="designationPara">{data.jobTitle && data.jobTitle}</p>
                                    </div>
                                    <div className="col-xs-2 col-md-3 col-sm-3 col-lg-3"></div>
                                </div>
                            </div> 
                        </div>
                        <div className="row elementMainDivS2" style={{paddingBottom:'0px'}}>
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
                                    <div className="col-xs-8 col-md-6 col-sm-6 col-lg-6">
                                        <p className="designationPara">Rs.{data.salary && data.salary}</p>
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
                        <div className="col-xs-12 col-sm-10 col-md-10 col-lg-10" style={{padding:'0'}}>
                            <div className="row">
                                <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                                    <div className="row elementMainDivS socialMediadiv">
                                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" style={{display: 'inline-flex'}}>
                                            <Icon type="unordered-list" /><h5 className="headMainDivs">Social media</h5>
                                        </div>
                                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                            <div className="row" style={{textAlign:'center'}}>
                                                <div className="col-xs-4 col-md-4 col-sm-4 col-lg-4">
                                                    {/* <Icon type="facebook" className="fbLinkCsS" /><br/> */}
                                                    <a href="https://www.facebook.com" target="_blank" className="fa fa-facebook social_button" style={{width:"40px", height:"40px", color: '#2f55a4'}}><i></i></a><br/>
                                                    <p className="eductionPara">Facebook</p>
                                                </div>
                                                <div className="col-xs-4 col-md-4 col-sm-4 col-lg-4">
                                                    {/* <Icon type="linkedin" className="LinkeDinCsS" /><br/> */}
                                                    <a href="https://www.linkedin.com" target="_blank" className="fa fa-linkedin social_button" style={{ width:"40px", height:"40px", color: '#2867B2'}}></a><br/>
                                                    <p className="eductionPara">Linkdin</p>
                                                </div>
                                                <div className="col-xs-4 col-md-4 col-sm-4 col-lg-4">
                                                    {/* <Icon type="google-plus" className="gooGlePlusCsS" /><br/> */}
                                                    <a href="https://mail.google.com" target="_blank" className="fa fa-google-plus social_button"style={{width:"40px", height:"40px", color: '#db4a39'}}></a><br/>
                                                    <p className="eductionPara">Google+</p>                               
                                                </div>
                                            </div>
                                        </div> 
                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                                    <div className="row elementMainDivS222" style={{paddingBottom:'0px',height: '165px'}}>
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
                                                <div className="col-xs-8 col-md-6 col-sm-6 col-lg-6">
                                                    <p className="designationPara">{data.jobType && data.jobType} </p>
                                                </div>
                                                <div className="col-xs-2 col-md-3 col-sm-3 col-lg-3"></div>
                                            </div>
                                        </div> 
                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                                    <div className="row elementMainDivS222 experienceDiv">
                                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" style={{display: 'inline-flex'}}>
                                            <Icon type="bars" /><h5 className="headMainDivs">Experience required</h5>
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
                                                <div className="col-xs-8 col-md-6 col-sm-6 col-lg-6">
                                                    <p className="designationPara">{data.experience && data.experience} </p>
                                                </div>
                                                <div className="col-xs-2 col-md-3 col-sm-3 col-lg-3"></div>
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
