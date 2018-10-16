import React, { Component } from 'react';
import './featureJob.css';
import {HttpUtils} from "../../Services/HttpUtils";
import { Redirect } from 'react-router';
import { Link } from "react-router-dom";

class FeaturedBox extends Component{
    constructor(props) {
        super(props)
        this.state = {
            response: []
        };
    }

    componentDidMount() {
        this.getAllBusiness();
    }

    async getAllBusiness(){
        var res = await HttpUtils.get('marketplace');
        this.setState({response: res.jobPortalData});
    }

    render(){
        const { response } = this.state;

        return(
            <div>
                <h2 style={{textAlign:"center", fontWeight:"bold", marginTop:"20px"}}>Featured Jobs </h2>
                <div className="row">
                    {response && response.map((elem) => {
                        return (
                            <div className="col-md-4">
                                <div className="featuredbox">
                                    <div className="featuredbox-content featuredjob-box">
                                        <div className="featuredjob-imitation">
                                            <div className="card2">
                                                <img alt='' src={elem.arr_url[0]}/>
                                            </div>
                                        </div>
                                        <div className="customjob-margin">
                                            <h4>{elem.jobCat}</h4>
                                            <i className="glyphicon glyphicon-star"/>
                                            <p className="textforjob">{elem.jobType}</p>
                                            <div className="glyphicom">
                                                <i className="glyphicon glyphicon-map-marker"/>
                                                <p className="textforjob">{elem.location}</p>
                                            </div>
                                        </div>
                                        <div className="jobdetail-desc">
                                            <div> </div>
                                            <div className="small m-t-xs">
                                                {elem.jobDescription}
                                            </div>
                                            <div className="m-t text-righ">
                                                <Link to={{pathname: `/detail_jobPortal`, state: elem}}>
                                                    <button type="button" className="btn btn-success">View Detail</button>
                                                </Link>
                                                <div className="button2">
                                                    <Link to={{pathname: `/apply_forJob`, state: elem}}>
                                                        <button type="button" className="btn btn-success">Apply Now</button>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

        )
    }
}

export default FeaturedBox;
