import React, { Component } from   'react';
import Formsignin from '../signin_seperate/form_signin';
import Facebook from '../Facebook';
import Google from '../Google';
import Form_signup from './form_signup.js';

class Signin extends Component{

	render(){
		return(
			<div>
				<span></span>
				<div className="row">
					<div className="col-md-2"></div>
					<div className="col-md-8 signin_background">
						<span><img alt='' src="../images/logo.png"/></span>
					</div>
					<div className="col-md-2"></div>
				</div>{/*row*/}<br/>
				<div className="row">
					<div className="col-md-2"></div>
					<div className="col-md-3">
							<span className="font_weight_signin_seperate_he">Sign in to your Pakjazba account</span><br/><br/>
							<div className="main_seperate_div">
								<Formsignin/>
							</div>
					</div>
					<div className="col-md-3">
						<span className="font_weight_signin_seperate_he">Sign in using any of the following</span><br/><br/>
						<div className="main_seperate_div">
							<span><Facebook/></span><br/>
							<span><Google/></span>	
						</div>
					</div>
					<div className="col-md-3">
						<span className="font_weight_signin_seperate_he">Create a new Pakjazba account</span><br/><br/>
						<div className="main_seperate_div">
							<Form_signup/>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Signin;
