import React, { Component } from   'react';
import { Form, Input, Icon, Button } from 'antd';
import axios from 'axios';
import AsyncStorage from "@callstack/async-storage";

const FormItem = Form.Item;
const ip = require('ip');

class Form_signin extends Component{
    state = {
        visible: false,
        showloader:false,
        email:'',
        user: ''
    }

    componentWillMount(){
        this.handleLocalStorage();
    }

    handleLocalStorage(){
        AsyncStorage.getItem('user')
            .then((obj) => {
                var userObj = JSON.parse(obj)
                if(!!userObj){
                    this.setState({
                        user: userObj.name
                    })
                }
                else {
                    this.setState({
                        user: ''
                    })
                }
            }).catch({

        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                axios.get('http://localhost:5000/api/usersignin?useremail='+values.email+'&password='+values.password)
                    .then((response)=>{
                        AsyncStorage.setItem('user', JSON.stringify(response.data))
                            .then(() => {
                                console.log('login doneee')
                                // this.props.modalContent();
                            })
                        this.setState({
                            showloader:false
                        })
                    })
            }
        });
    }

    reset(){
        this.props.form.resetFields()
    }

    render(){
        const { getFieldDecorator } = this.props.form;
        let {children} = this.props;
        return(
            <div>
                <div>
                    <Form onSubmit={this.handleSubmit}>
                        <FormItem label="E-mail">
                            {getFieldDecorator('email', {
                                rules: [{ required: true, message: 'Please input your Email!' }],
                            })(
                                <Input  />
                            )}
                        </FormItem>
                        <FormItem label="Password">
                            {getFieldDecorator('password', {
                                rules: [{
                                    required: true, message: 'Please input your password!',
                                }],
                            })(
                                <Input type="password" />
                            )}
                        </FormItem>
                        <div className="row center_global signup_button_signin_seperate">
                            <button className="btn color_button">Login</button>
                        </div>{/*row*/}
                    </Form>
                </div>
            </div>
        )
    }
}

const WrappedSigninForm = Form.create()(Form_signin);
export default WrappedSigninForm;