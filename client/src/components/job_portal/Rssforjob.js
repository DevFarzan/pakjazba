import React, { Component } from 'react';
import {HttpUtils} from "../../Services/HttpUtils";

class JobNews extends Component{
    constructor(props) {
        super(props)
        this.state = {
            job: []
        }
    }

    componentDidMount(){
        window.scrollTo(0,0);
        this.getAllBusiness();
    }

    async getAllBusiness(){
        var res = await HttpUtils.get('marketplace');
        this.setState({
            job: res && res.jobPortalData,
        });
    }

    render(){
        const { job } = this.state;
        return(
            <div className="container" style={{width:"100%", padding:"0px"}}>
                <h4> Featured Jobs </h4>
                {job && job.map((elem) => {
                    let str = elem.location || '';
                    if(str.length > 10) {
                        str = str.substring(0, 8);
                        str = str + '...'
                    }
                    let des = elem.jobDescription || '';
                    if(des.length > 30) {
                        des = des.substring(0, 100);
                        des = des + '...'
                    }
                    return(
                        <div className="row" style={{padding:"0px"}}>
                            <div className="col-md-4">
                                <img alt='' src={elem.arr_url[0]} width="100%" />
                            </div>
                            <div className="col-md-8">
                                <h5 className="font-style"><b>{elem.jobCat}</b></h5>
                                <br/>
                                <div className="jobfeature-margin">
                                    <h4 className="heading-wight"></h4>
                                  <div className="row">
                                    <div className="col-md-12 col-sm-12 col-xs-12">
                                      <i className="glyphicon glyphicon-star"/>
                                      <p className="textforjob font-style">{elem.jobType}</p>
                                    </div>
                                    <div className="col-md-12 col-sm-12 col-xs-12">
                                      <div className="glyphicom" style={{marginLeft:"0px"}}>
                                          <i className="glyphicon glyphicon-map-marker"/>
                                          <p className="textforjob font-style">{str}</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                            </div>
                            <p className="font-style" style={{paddingLeft:"12px"}}>{des}</p>
                        </div>
                    )
                })}                    
            </div>
        )
    }
}
export default JobNews;
