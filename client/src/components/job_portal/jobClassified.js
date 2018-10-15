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
import ClassifiedIcons from './jobClassifiedicon';
class JobClassified extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render(){
        return (
            <div>
                <App/>
                <ClassifiedIcons/>
            </div>
        )
    }

}

export default JobClassified;
