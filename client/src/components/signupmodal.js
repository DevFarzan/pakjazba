import React, { Component } from 'react';
import { Form, Icon, Input, Button, Checkbox,Modal, Spin, Alert } from 'antd';
import Signin from './signinmodal';
import Forgotpassword from './forgotpassword';
import AsyncStorage from '@callstack/async-storage';
import axios from 'axios';


const FormItem = Form.Item;

class Signup extends Component{
	state = {
	 visible: false,
	 showloader:false,
	 email:'',
	 user: ''
	  }

    componentWillMount(){
        this.handleLocalStorage();
    }

    handleLocalStorage = () => {
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
	    // console.log(this.refs.email.value);
	    // console.log(this.refs.password.value);
	  }

	  handleCancel = (e) => {
	    console.log(e);
	    this.setState({
	      visible: false
	    });
	  }
	//   handleSubmit = (e) =>{
	//   	e.preventDefault();
	//   	this.setState({
	//   		showloader:true
	//   	})
	//   	var email = this.refs.email.value;
	//   	var password = this.refs.password.value;
	//   	if(email && password){
	//   	axios.get('http://localhost:5000/api/usersignin?useremail='+email+'&password='+password)
	//   	.then((response)=>{
	//   		console.log(response);
	//   		this.refs.email.value = '';
	//   		this.refs.password.value = '';
	//   		this.setState({
	//   			showloader:false
	//   		})
	//   	})
	//   	console.log(this.refs.email.value);
	//   	console.log(this.refs.password.value);
	//   }
	// }//end if(email&&password)

	handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        axios.get('http://localhost:5000/api/usersignin?useremail='+values.userName+'&password='+values.password)
	  	.then((response)=>{
            AsyncStorage.setItem('key', 'value')
                .then(() => {})
                .catch(() => {})
	  		this.setState({
	  			showloader:false
	  		})
	  	})
      }
    });
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

					<span onClick={this.showModal} >Sign In</span>

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
								  Login with Facebook
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
const WrappedNormalLoginForm = Form.create()(Signup);

export default WrappedNormalLoginForm;
