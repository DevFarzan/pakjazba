import React, { Component } from 'react';
import {
    Form,
    Input,
    Icon,
    Cascader,
    Spin,
    notification,
    Upload,
    Modal,
    TimePicker
} from 'antd';
import App from '../../App';
import Secondscreencard from './Secondscreenjob';
import JobNews from './Rssforjob';
import CategoriesjobMarket from './CategoriesJobs';

class ApplyJob extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render(){
        return (
            <div>
                <App/>
                <div className="row jobdetail-page">
                  <div className="col-md-12 col-sm-12 col-xs-12" style={{textAlign:"center"}}>
                    <div className="">
                      <h1 style={{fontFamily: 'Work Sans, sans-serif', fontWeight:"bold"}}>JOBS</h1>
                    </div>
                  </div>
                </div>
                <CategoriesjobMarket/>
                <Secondscreencard/>
                {/*<JobNews/>*/}

            </div>
        )
    }

}

export default ApplyJob;
