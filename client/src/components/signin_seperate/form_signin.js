import React, { Component } from   'react';
import { Form, Input, Icon, Button } from 'antd';

const FormItem = Form.Item;

class Form_signin extends Component{
 state = {
    confirmDirty: false,
    autoCompleteResult: [],
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  handleConfirmBlur = (e) => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  }
  render(){
  	//const { getFieldDecorator } = this.props.form;
  	return(
  		<div>
  			<span>Form signIn</span>
  		</div>
  		)
  }


}

export default Form_signin;