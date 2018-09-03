import React, { Component } from   'react';
import { Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete, notification, Spin, Modal  } from 'antd';

import axios from 'axios';
import AsyncStorage from "@callstack/async-storage";
import {HttpUtils} from "../../Services/HttpUtils";

const FormItem = Form.Item;
const ip = require('ip');

class Form_signup extends Component{
    state = {
        loading: false,
        visible: false,
        passwordValidator:false,
        username: null,
        confirmDirty: false,
        autoCompleteResult: [],
        loader:false,
        dropdown:false,
        allUser: [],
        msg: ''
    }

    componentDidMount(){
        this.handleLocalStorage();
    }

    componentWillMount(){
        this.handleLocalStorage();
        this.getAllUsers();
    }

    getAllUsers(){
        console.log(ip.address(), 'ipAddressssssss')

        axios.get('http://localhost:5000/api/allusers')
            .then((response) => {
                this.setState({allUser: response.data.content})
            })
    }

    handleLocalStorage = () =>{
        AsyncStorage.getItem('user')
            .then((obj) => {
                var userObj = JSON.parse(obj)
                if(!!userObj){
                    this.setState({
                        dropdown: true,
                    })
                }
                else {
                    this.setState({
                        dropdown: false
                    })
                }
            })
    }//end handleLocalStorage function

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            loader:true
        })
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log('Received values of form:',values);
                axios.get('http://localhost:5000/api/userregister?nickname='+values.nickname+'&email='+values.email+'&password='+values.password+'&notrobot='+values.notrobot)
                    .then((response) => {
                        this.getProfileId(response)
                    })
            }
        });
    }//end handleSubmit

    async getProfileId(response){
        if(response.data.code === 200){
            var obj = {
                name: response.data.name,
                email: response.data.email,
                userId: response.data._id,
                profileId: ''
            }
            var req = await HttpUtils.post('profile', obj)
            var userInfo = {...response.data, ...{profileId: req.content}}
            AsyncStorage.setItem('user', JSON.stringify(userInfo))
                .then(() => {
                    // this.handleLocalStorage();
                    console.log('signUpppppppppp')
                    this.props.form.resetFields();
                    this.setState({
                        loader:false,
                        visible:false
                    })
                })
        }//end if
        else{
            console.log(response.data, 'response form_signUppppppp')
            this.setState({
                msg: response.data.msg,
            })
        }
    }

    checkValue(rule, value, callback){
        if(this.state.allUser.includes(value)){
            callback('This email is already been used')
            return;
        }else {
            callback()
        }
    }

    render(){
        const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;
        const { getFieldDecorator } = this.props.form;
        const { autoCompleteResult,visible, allUser } = this.state;
        let {children} = this.props;
        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0,
                },
                sm: {
                    span: 16,
                    offset: 8,
                },
            },
        };
        return(
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <FormItem label="Name">
                        {getFieldDecorator('nickname', {
                            rules: [{ required: true, message: 'Please input your Name!', whitespace: true }],
                        })(
                            <Input  />
                        )}
                    </FormItem>
                    <FormItem label="E-mail">
                        {getFieldDecorator('email', {
                            rules: [{
                                type: 'email', message: 'The input is not valid E-mail!',
                            }, {
                                required: true, message: 'Please input your E-mail!',
                            }, {
                                validator: this.checkValue.bind(this)
                            }],
                        })(
                            <Input  />
                        )}
                    </FormItem>
                    <FormItem label="Password">
                        {getFieldDecorator('password', {
                            rules: [{
                                required: true, message: 'Please input your password!',
                            }, {
                                validator: this.validateToNextPassword,
                            }],
                        })(
                            <Input type="password"  />
                        )}
                    </FormItem>
                    <FormItem label="Confirm Password" >
                        {getFieldDecorator('confirm', {
                            rules: [{
                                required: true, message: 'Please confirm your password!',
                            }, {
                                validator: this.compareToFirstPassword,
                            }],
                        })(
                            <Input type="password"  onBlur={this.handleConfirmBlur} />
                        )}
                    </FormItem>
                    <FormItem {...tailFormItemLayout}>
                        {getFieldDecorator('notrobot', {
                            valuePropName: 'checked',
                        })(
                            <Checkbox>I'm not a Robot</Checkbox>
                        )}
                    </FormItem>
                    {this.state.msg.length > 0 && <div style={{marginBottom: '5px'}}>
                        <span style={{ color: 'red', fontWeight: 'bold'}}>{this.state.msg}</span>
                    </div>}
                    <div style={{marginTop: '5px'}} className="row center_global">
                        {this.state.loader ? antIcon : null} <button className="btn color_button">Sign up</button>
                    </div>{/*row*/}
                    <div className="row term_condition">
                        <p>(By clicking register, you agree to our <a href="#">terms</a>, our <a href="#">data policy</a> and cookies use)</p>
                    </div>
                </Form>
            </div>
        )
    }
	
}

const WrappedRegistrationForm = Form.create()(Form_signup);
export default WrappedRegistrationForm

