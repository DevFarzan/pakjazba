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

class ApplyJob extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render(){
        return (
            <div>
                <App/>
                <h1>ApplyJob</h1>
                <Secondscreencard/>
            </div>
        )
    }

}

export default ApplyJob;
