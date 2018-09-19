import React, { Component } from 'react';
import { Form, Input, Icon, Checkbox, Modal  } from 'antd';
import Dropdowns from './dropdown';
import Facebook from '../Facebook';
import Google from '../Google';
import AsyncStorage from "@callstack/async-storage";
import {HttpUtils} from "../../Services/HttpUtils";
import {connect} from "react-redux";

const FormItem = Form.Item;
const ip = require('ip');

class Signin extends Component{
    constructor(props) {
        super(props)
        this.state = {
            loading: false,
            visible: false,
            secModal: false,
            passwordValidator: false,
            username: null,
            confirmDirty: false,
            loader: false,
            dropdown: false,
            allUser: [],
            msg: '',
            email2: '',
            route: 'signUp'
        }
    }

    componentDidMount(){
        this.handleLocalStorage();
        this.getAllUsers();
    }

    componentDidUpdate(prevProps, prevState){
        const { data } = this.props;
        const { route } = this.state;
        if(prevProps.data !== data){
            if(data && data.route === route) {
                if (data && data.email === undefined) {
                    this.setState({visible: false, secModal: true})
                }
                else {
                    if (data) {
                        let obj = {
                            nickname: data.name,
                            email: data.email,
                            password: data.id,
                            notrobot: true
                        }
                        this.funcSignUp(obj)
                    }
                }
            }
        }
    }

    componentWillUnmount(){
        this.setState({_isMount: false})
    }

    async getAllUsers(){
        console.log(ip.address(), 'ipAddressssssss')
        let response = await HttpUtils.get('allusers')
        if(response){
            this.setState({allUser: response && response.content, _isMount: true})
        }
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
        this.setState({ visible: false, secModal: false });
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
                let userObj = JSON.parse(obj)
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
                this.funcSignUp(values)
            }
        });
    }//end handleSubmit

    async funcSignUp(values){
        let response = await HttpUtils.get('userregister?nickname='+values.nickname+'&email='+values.email+'&password='+values.password+'&notrobot='+values.notrobot)
        this.getProfileId(response)
    }

    async getProfileId(response){
        if(response.code === 200){
            let obj = {
                name: response.name,
                email: response.email,
                userId: response._id,
                profileId: ''
            }
            let req = await HttpUtils.post('profile', obj)
            let userInfo = {...response, ...{profileId: req.content}}
            AsyncStorage.setItem('user', JSON.stringify(userInfo))
                .then(() => {
                    this.props.modalContent();
                    this.props.form.resetFields();
                    this.setState({
                        loader:false,
                        visible:false,
                        secModal: false,
                        dropdown: true
                    })
                })
        }//end if
        else{
            this.setState({
                msg: response.msg ? response.msg : response.err._message,
            })
        }
    }

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

    checkEmail(rule, value, callback){
        if(this.state.allUser.includes(value)){
            callback('This email is already been used')
            return;
        }else {
            this.setState({email2: value})
            callback()
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

    checkName(rule, value, callback){
        if(value.includes('<') || value.includes('>') || value.includes('/')){
            callback('Name should be string')
            return;
        }else {
            callback()
        }
    }

    socialSignUp(){
        const { email2 } = this.state;
        const { data } = this.props;
        let obj = {
            nickname: data.name,
            email: email2,
            password: data.id,
            notrobot: true
        }
        this.setState({email2: '', secModal: false})
        this.funcSignUp(obj)
    }

    render(){
        const { getFieldDecorator } = this.props.form;
        const { visible, secModal, email2, dropdown, msg } = this.state;
        const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;

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
            <div className="">
                <span>
                    {dropdown ? <span style={{color: "white"}}><Dropdowns modalContent={this.props.modalContent}/></span> : <span onClick={this.showModal}>Sign Up</span>}
                    <Modal
                        visible={visible}
                        title="Title"
                        onOk={this.handleOk}
                        onCancel={this.handleCancel}
                    >
                        {!!this.state.msg && <div style={{marginBottom: '10px'}}>
                            <span style={{ color: 'red', fontWeight: 'bold'}}>{this.state.msg}</span>
                        </div>}
                        <div className="row">
                            <div className="col-md-5">
                                <Facebook inRup={'signUp'}/>
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
                                  rules: [{
                                      required: true, message: 'Please input your Name!', whitespace: true
                                  }, {
                                      validator: this.checkName.bind(this)
                                  }],
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
                        <p>(By clicking register, you agree to our <a>terms</a>, our <a>data policy</a> and cookies use)</p>
                    </div>
                    </Form>
                  </div>{/*form div end*/}
                     </Modal>
                    {!dropdown && secModal && <Modal
                        visible={secModal}
                        title="Enter your email"
                        onOk={this.handleOk}
                        onCancel={this.handleCancel}
                        >
                        <div>
                            <Form>
                                <p>to finish you sign up kindly share your email</p>
                                <FormItem label="E-mail">
                                    {getFieldDecorator('email2', {
                                        rules: [{
                                            type: 'email', message: 'The input is not valid E-mail!',
                                        }, {
                                            required: true, message: 'Please input your E-mail!',
                                        }, {
                                            validator: this.checkEmail.bind(this)
                                        }],
                                    })(
                                        <Input  />
                                    )}
                                </FormItem>
                                <button className="btn color_button" disabled={!email2} onClick={this.socialSignUp.bind(this)}>Sign up</button>
                            </Form>
                        </div>
                     </Modal>}
                </span>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return({
        data: state.data
    })
}

const WrappedRegistrationForm = Form.create()(Signin);
export default connect(mapStateToProps)(WrappedRegistrationForm);
