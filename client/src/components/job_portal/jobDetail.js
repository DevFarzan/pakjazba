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
import Footer from '../footer/footer';
import JobDetailpage from './DetailjobUi';
import JobSecondrow from './secondRow';
import Thirdrow from './Thirdrow';
import './jobDetail.css';


class JobDetail extends Component {
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
                      <h1 style={{fontFamily: 'Work Sans, sans-serif', fontWeight:"bold"}}>Job Detail</h1>
                    </div>
                  </div>
                </div>
                
                <JobDetailpage/>
                <JobSecondrow/>
                <Thirdrow/>
                <Footer/>
            </div>
        )
    }

}

export default JobDetail;
