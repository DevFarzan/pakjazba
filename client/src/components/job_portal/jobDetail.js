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
import JobDetailpage from './DetailjobUi';
import JobSecondrow from './secondRow';

class JobDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render(){
        return (
            <div>
                <App/>
                <h1>Job Detail</h1>
                <JobDetailpage/>
                <JobSecondrow/>

            </div>
        )
    }

}

export default JobDetail;
