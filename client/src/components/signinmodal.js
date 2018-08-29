import React, { Component } from 'react';
import { Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete, notification, Spin, Modal  } from 'antd';
import Formsignup from './formsignup';
import Dropdowns from  './dropdown';
import Facebook from './Facebook';
import Google from './Google';
import axios from 'axios';
import AsyncStorage from "@callstack/async-storage";

const FormItem = Form.Item;
const Option = Select.Option;
const AutoCompleteOption = AutoComplete.Option;
const ip = require('ip');

class Signin extends Component{
    constructor(props) {
        super(props)
        this.state = {
            loading: false,
            visible: false,
            passwordValidator: false,
            username: null,
            confirmDirty: false,
            autoCompleteResult: [],
            loader: false,
            dropdown: false,
            allUser: []
        }
    }

    componentWillMount(){
        this.handleLocalStorage();
        this.getAllUsers();
    }

    componentDidMount(){
        this.handleLocalStorage();
    }

    getAllUsers(){
        console.log(ip.address(), 'ipAddressssssss')

        axios.get('http://localhost:5000/api/allusers')
            .then((response) => {
                this.setState({allUser: response.data.content})
            })
    }

    showModal = () => {
        this.setState({
            visible: true,
        });
    }

    handleOk = () => {
        this.setState({ loading: true });
        setTimeout(() => {
            this.setState({ loading: false, visible: false });
        }, 3000);
    }

    handleBlur = () => {
        this.setState({validating: true});
    }

    handleCancel = () => {
        this.setState({ visible: false });
    }
    renderPasswordConfirmError = (e) => {
        this.setState({
            passwordValidator:true
        })
    }

    /*===============form signup coding====================================*/
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
                        AsyncStorage.setItem('user', JSON.stringify(response.data))
                            .then(() => {
                                this.props.modalContent();
                            })
                        this.handleLocalStorage();
                        if(response.data.code == 200){
                            this.setState({
                                loader:false,
                                visible:false
                            })
                        }//end if
                        else{
                        }
                        this.props.form.resetFields();
                        //this.state.confirmDirty='';
                    })
            }
        });
    }//end handleSubmit

    handleConfirmBlur = (e) => {
        const value = e.target.value;
        this.setState({ confirmDirty:this.state.confirmDirty || !!value});
    }

    compareToFirstPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && value !== form.getFieldValue('password')) {
            callback('Two passwords that you enter is inconsistent!');
        } else {
            callback();
        }
    }

    validateToNextPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && this.state.confirmDirty) {
            form.validateFields(['confirm'], { force: true });
        }
        callback();
    }

    handleipaddress = () =>{
        axios.get('https://ipinfo.io?token=4b0cfd2794ad30').then(function(response){
            console.log(response);
        })
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
        const { getFieldDecorator } = this.props.form;
        const { autoCompleteResult,visible, allUser } = this.state;
        const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;
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
            <div className="paragraph">
                <span>
                    {this.state.dropdown ? <span><Dropdowns modalContent={this.props.modalContent}/></span> : <span onClick={this.showModal}>Sign Up</span>}
                    <Modal
                        visible={visible}
                        title="Title"
                        onOk={this.handleOk}
                        onCancel={this.handleCancel}
                    >
                        <div className="row">
                            <div className="col-md-5">
                                <Facebook/>
                            </div>{/*col-md-4*/}
                            <div className="col-md-1"></div>{/*col-md-4*/}
                            <div className="col-md-5">
                                <button className="loginBtn loginBtn--google">
                                  Sign Up with Google
                                </button>
                                <Google/>
                            </div>{/*col-md-4*/}
                        </div>{/*row*/}
                        <br/>
                        <div className="">{/*form div start*/}
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
                        <div className="row center_global">
                            {this.state.loader ? antIcon : null} <button className="btn color_button">Sign up</button>
                        </div>{/*row*/}
                                <div className="row term_condition">
                        <p>(By clicking register, you agree to our <a href="#">terms</a>, our <a href="#">data policy</a> and cookies use)</p>
                    </div>
                    </Form>
                  </div>{/*form div end*/}
                     </Modal>
                </span>
            </div>
        )
    }
}

const WrappedRegistrationForm = Form.create()(Signin);
export default WrappedRegistrationForm;
