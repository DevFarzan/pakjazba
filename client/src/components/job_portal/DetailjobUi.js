import React, { Component } from 'react';
import './DetailjobUi.css';

class JobDetailpage extends Component{
    render(){
        const { data } = this.props;
        return(
            <div className="container" style={{width:"70%"}}>
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
                    <h3> About The Job </h3>
                    <hr style={{borderTop: "1px solid black"}}/>
                    <p style={{fontFamily: 'Work Sans, sans-serif'}}>{data.jobDescription && data.jobDescription}</p>
                </div>
            </div>
        )
    }
}

export default JobDetailpage;
