import React, { Component } from 'react';
import './DetailjobUi.css';

class JobDetailpage extends Component{
    render(){
        const { data } = this.props;
        console.log(data, 'arrrrrrrrrrrryyyyyyyyyyyyyyyyyyyy bhaiiiiiiiiiiiiiiiiiiiii')
        return(
            <div className="container" style={{width:"90%"}}>
                <div className="row">
                    <div className="col-md-12" style={{paddingTop:"4px", paddingBottom:"10px"}}>
                        <div className="col-md-4 col-sm-12 col-xs-12 des-space">
                            <img alt='' src={data.arr_url && data.arr_url[0]} width="100%" />
                        </div>
                        <div className="col-md-8 col-sm-12 col-xs-12 des-space">
                            <h3 style={{fontWeight:"bold",fontFamily: 'Work Sans, sans-serif'}}>{data.jobTitle && data.jobTitle}</h3>
                            <span >
                            <p className="job-time" style={{fontFamily: 'Work Sans, sans-serif'}}>{data.jobType && data.jobType}</p>
                            </span>
                            <br/>
                            <p style={{fontFamily: 'Work Sans, sans-serif'}}>{data.jobDescription && data.jobDescription}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default JobDetailpage;
