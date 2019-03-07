import React, { Component } from 'react';
import { Modal, Button, Form, Input } from 'antd';
import {HttpUtils} from "../Services/HttpUtils";

const FormItem = Form.Item;

class Forgotpassword extends Component{
    constructor(props) {
        super(props)
        this.state = {
            visible: false,
            email: '',
            shown: false,
            msg: ''
        }
    }

    showModal = () => {
        this.setState({
            visible: true,
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
            visible: false,
        });
    }

    handleSubmited = (e) => {
        e.preventDefault();
        console.log('hello')
        this.props.form.validateFields((err, values) => {
            if (!err) {
                let email = values.email;
                this.postForgetPassword(email);
                
            }
        });
    }

    async postForgetPassword(email){
        console.log(email, 'emailllllll')
        let response = await HttpUtils.post('forgotPassword', { email });
        console.log(response, 'responseeeee')
        if(response.code == 200){
            this.setState({ msg: 'Check your email', shown: true });
            setTimeout(() => {
                this.setState({ visible: false });
            }, 3000)                    
        }else if(response.code == 403){
            this.setState({ msg: response.message, shown: true });
        }else if(response.code == 404){
            this.setState({ msg: response.message, shown: true });
        }
    }

    render(){
        const { getFieldDecorator } = this.props.form;

        return(
            <div>
                <span onClick={this.showModal} >(Forgot your password?)</span>
                {/*===================modal code start==========================*/}
                <Modal
                    title="Reset Your Password"
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
                        <div className="col-md-12">
                            <span>We’ll send you the info you need.</span>
                        </div>{/*col-md-12*/}
                    </div>{/*row*/}
                    <Form onSubmit={this.handleSubmited}>
                        <FormItem label="">
                            {getFieldDecorator('email', {
                                rules: [{
                                    type: 'email', message: 'The input is not valid E-mail!',
                                }, {
                                    required: true, message: 'Please input your E-mail!',
                                }],
                            })(
                                <Input  />
                            )}
                        </FormItem>
                        <span className="errorLabel">{ this.state.shown ? this.state.msg : null }</span>
                        <FormItem
                            wrapperCol={{ span: 12, offset: 6 }}
                        >
                            <Button type="" className="btn color_button"  htmlType="submit">
                                Send password reset email
                            </Button>
                        </FormItem>
                    </Form>{/*Form*/}
                </Modal>
            </div>
        )
    }

}

const WrappedResetEmail = Form.create()(Forgotpassword);
export default WrappedResetEmail;
