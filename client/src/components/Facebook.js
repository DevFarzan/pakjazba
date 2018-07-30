import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';



export default class Facebook extends Component {
		state={
			isloggedIn:false,
			userId:'',
			name:'',
			email:'',
			picture:''
			
		}

		responseFacebook = response =>{
			console.log(response);
		}
		componentClicked = () =>{
			console.log('clicked');
		}

		render(){
			let fbContent;
			if(this.state.isloggedIn){
				fbContent = null;
			}else{
				fbContent = (<FacebookLogin
    appId="644559659253564"
    autoLoad={true}
    fields="name,email,picture"
    onClick={this.componentClicked}
    callback={this.responseFacebook}
    cssClass="my-facebook-button-class"/>)
			}
			return(
				<div>
				{fbContent}
				</div>
				)
		}

}