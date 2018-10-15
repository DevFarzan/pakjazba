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
import FeaturedBox from './featuredJob';

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
                <FeaturedBox/>
            </div>
        )
    }

}

export default JobClassified;
