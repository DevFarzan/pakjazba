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

class JobPortal extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render(){
        return (
            <div>
                <h1>hello job portal</h1>
            </div>
        )
    }

}

const WrappedJobPortalForm = Form.create()(JobPortal);
export default WrappedJobPortalForm;