import React, { Component } from 'react';
import { Form, Icon, Input, Button, Checkbox,Modal } from 'antd';
import Signin from './signinmodal';
import Forgotpassword from '../forgotpassword';
import Facebook from '../Facebook';
import AsyncStorage from '@callstack/async-storage';
import {HttpUtils} from "../../Services/HttpUtils";
import {connect} from "react-redux";

const FormItem = Form.Item;

class Signup extends Component{
    constructor(props) {
        super(props)
        this.state = {
            visible: false,
            showloader: false,
            email: '',
            user: '',
            msg: '',
            route: 'signIn',
            obj: []
        }
    }

    componentDidMount(){
        this.handleLocalStorage();
        this.getSignData()
    }

    async getSignData(){
        let res = await HttpUtils.get('facebookdata')
        if(res){
            this.setState({obj: res})
        }
    }

    componentDidUpdate(prevProps, prevState){
        const { data } = this.props;
        const { route, obj } = this.state;
        // console.log(prevProps.data, '11111111111')
        // console.log(data, '11111111111')
        if(prevProps.data !== data){
            if(data && data.route === route){
                console.log('kkkkkkkkkkkkkkkkkkk')
            }
        //     if(data && data.email === undefined){
        //         console.log('didUpdateeeeeeeeeeeeee')
        //         this.setState({visible: false, secModal: true})
        //     }
        //     else {
        //         if(data) {
        //             console.log('else didUpdateeeeeeeee')
        //             let obj = {
        //                 nickname: data.name,
        //                 email: data.email,
        //                 password: data.id,
        //                 notrobot: true
        //             }
        //             this.funcSignUp(obj)
        //         }
        //     }
        }
    }

    handleLocalStorage = () => {
        AsyncStorage.getItem('user')
            .then((obj) => {
                let userObj = JSON.parse(obj)
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

    showModal = () => {
        this.setState({
            visible: true,
            showloader:false
        });
    }

    handleOk = (e) => {
        this.setState({
            email:this.refs.email,
            visible: false,
        });
    }

    handleCancel = (e) => {
        this.setState({
            visible: false
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.funcLogin(values)
            }
        });
    }

    async funcLogin(values){
        let response = await HttpUtils.get('usersignin?useremail='+values.userName+'&password='+values.password)
        if(response.code === 200){
            AsyncStorage.setItem('user', JSON.stringify(response))
                .then(() => {
                    this.props.modalContent();
                    this.setState({
                        loader:false,
                        visible:false,
                        showloader:false
                    })
                })
        }//end if
        else{
            this.setState({
                msg: response.msg,
            })
        }
    }

    reset = () => {
        this.props.form.resetFields()
    }

    render(){
        const { user } = this.state;
        const { getFieldDecorator } = this.props.form;
        const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;

        return(
            <div className="paragraph">
                <span onClick={this.showModal} style={{color: "white"}}>Sign In</span>
                {/*===================modal code start==========================*/}
                <Modal
                    title="LOG IN"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    footer={[
                        <Button key="back" onClick={this.handleCancel}>Return</Button>,
                        <Button key="submit" type="primary" onClick={this.handleOk}>
                            Submit
                        </Button>,
                    ]}
                >
                    <div className="row">
                        <div className="col-md-5">
                            <button className="loginBtn loginBtn--facebook">
                                <Facebook inRup={'signIn'}/>
                            </button>
                        </div>{/*col-md-4*/}
                        <div className="col-md-1"></div>{/*col-md-4*/}
                        <div className="col-md-5">
                            <button className="loginBtn loginBtn--google">
                                Login with Google
                            </button>
                        </div>{/*col-md-4*/}
                    </div>{/*row*/}
                    <br/>
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <FormItem>
                            {getFieldDecorator('userName', {
                                rules: [{ required: true, message: 'Please input your username!' }],
                            })(
                                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                            )}
                        </FormItem>
                        <FormItem>
                            {getFieldDecorator('password', {
                                rules: [{ required: true, message: 'Please input your Password!' }],
                            })(
                                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                            )}
                        </FormItem>
                        <FormItem>
                            <div className="row">
                                <div className="col-md-6 col-sm-6 col-xs-12">
                                    {getFieldDecorator('remember', {
                                        valuePropName: 'checked',
                                        initialValue: true,
                                    })(
                                        <Checkbox>Remember me</Checkbox>
                                    )}
                                </div>
                                <div className="col-md-6 col-sm-6 col-xs-12 margin_text_align">
                                    <a className="login-form-forgot" onClick={this.handleCancel}><Forgotpassword/></a>
                                </div>
                            </div>
                        </FormItem>
                        {this.state.msg.length > 0 && <div style={{marginBottom: '10px'}}>
                            <span style={{ color: 'red', fontWeight: 'bold'}}>{this.state.msg}</span>
                        </div>}
                        <div className="row">
                            <div className="col-md-12">
                                <Button type="primary" htmlType="submit" className="login-form-button width_class">
                                    Log in
                                </Button>
                            </div>
                        </div>
                        Or <a><span onClick={this.handleCancel}><Signin/></span></a>
                    </Form>
                </Modal>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return({
        data: state.data
    })
}

const WrappedNormalLoginForm = Form.create()(Signup);
export default connect(mapStateToProps)(WrappedNormalLoginForm);
