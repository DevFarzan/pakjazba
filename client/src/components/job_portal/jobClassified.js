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

class JobClassified extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render(){
        return (
            <div>
                <App/>
            </div>
        )
    }

}

export default JobClassified;
