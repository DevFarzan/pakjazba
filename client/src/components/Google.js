import React, { Component } from 'react';
import { GoogleLogin } from 'react-google-login-component';


export default class Google extends Component {
		constructor (props, context) {
   			 super(props, context);
  		}//constructor
  		 responseGoogle = (googleUser) =>{
    var id_token = googleUser.getAuthResponse().id_token;
    var googleId = googleUser.getId();
    
    console.log({ googleId });
    console.log({accessToken: id_token});
    //anything else you want to do(save to localStorage)...
  }
  render(){
  	return(
  		<div>
  					<GoogleLogin socialId="873832275515-3oclgfb5n1ie7inhfa16a6uu7crbab2a.apps.googleusercontent.com"
                     className="google-login"
                     scope="profile"
                     fetchBasicProfile={false}
                     responseHandler={this.responseGoogle}
                     buttonText="Login With Google"/>	
  		</div>
  		)
  }
}



