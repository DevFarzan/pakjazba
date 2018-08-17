import React, { Component } from   'react';
import { Form, Input, Icon, Button } from 'antd';
import axios from 'axios';
import AsyncStorage from "@callstack/async-storage";

const FormItem = Form.Item;
const ip = require('ip');

class Form_signin extends Component{

 componentDidMount(){
    this.handleLocalStorage();
  }
  componentWillMount(){
    this.handleLocalStorage();
      this.getAllUsers();
  }




 state = {
    confirmDirty: false,
    autoCompleteResult: [],
    allUser: []
  };

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
			if(userObj!== null && userObj.name.length > 0){
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
          console.log(response);
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
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
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
  	let {children} = this.props;
  	return(
  		<div>
  			<div>
  				<Form onSubmit={this.handleSubmit}>
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
						                validator: this.checkValue.bind(this)
						            }],
						          })(
						            <Input type="password" />
						          )}
					        </FormItem>
					        <div className="row center_global signup_button_signin_seperate">
	        					<button className="btn color_button">Sign up</button>
        					</div>{/*row*/}
				 </Form>   	
  			</div>
  		</div>
  		)
  }


}
const WrappedSigninForm = Form.create()(Form_signin);
export default WrappedSigninForm;