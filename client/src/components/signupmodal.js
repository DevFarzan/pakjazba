import React, { Component } from 'react';
import { Modal, Button, Spin, Alert } from 'antd';
import Signin from './signinmodal';
import Forgotpassword from './forgotpassword';
import axios from 'axios';


class Signup extends Component{

	state = {
	 visible: false,
	 showloader:false,
	 email:''
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
	    console.log(this.refs.email.value);
	    console.log(this.refs.password.value);
	  }

	  handleCancel = (e) => {
	    console.log(e);
	    this.setState({
	      visible: false
	    });
	  }
	  handleSubmit = (e) =>{
	  	e.preventDefault();
	  	this.setState({
	  		showloader:true
	  	})
	  	var email = this.refs.email.value;
	  	var password = this.refs.password.value;
	  	if(email && password){
	  	axios.get('http://localhost:5000/api/usersignin?useremail='+email+'&password='+password)
	  	.then((response)=>{
	  		console.log(response);
	  		this.refs.email.value = '';
	  		this.refs.password.value = '';
	  		this.setState({
	  			showloader:false
	  		})
	  	})
	  	console.log(this.refs.email.value);
	  	console.log(this.refs.password.value);
	  }
	}//end if(email&&password)



	render(){
		return(
				<div className="paragraph">
						<span onClick={this.showModal} >Sign In</span> | <span><Signin/></span>

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
			          <div className="">{/*form div start*/}
			          	<form onSubmit={this.handleSubmit}>
						  <div className="form-group">
						    <label>Email address</label>
						    <input type="email" className="form-control" ref="email"  placeholder="Enter email" />
						    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
						  </div>
						  <div className="form-group">
						    <label>Password</label>
						    <input type="password" className="form-control" ref="password" id="exampleInputPassword1" placeholder="Password" />
						    <small className="form-text text-muted"><a onClick={this.handleCancel}><Forgotpassword /></a>.</small>
						  </div>
						  <div className="row center_global" showloader = {this.state.showloader}>
						  		<Spin tip="Loading...">
								    <Alert
								      type="info"
								    />
							  	</Spin>
	        					<button className="btn color_button">Log in</button>
        					</div>{/*row*/}
						</form>
			          </div>{/*form div end*/}
	        		</Modal>
				</div>
			)
	}
}

export default Signup;
