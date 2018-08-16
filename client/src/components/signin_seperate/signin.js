import React, { Component } from   'react';
import Formsignin from '../signin_seperate/form_signin';



class Signin extends Component{
	


	render(){
		return(
			<div>
				<span>Signin</span>
				<div className="row">
					<div className="col-md-2"></div>
					<div className="col-md-8 signin_background">
						<span><img src="../images/logo.png"/></span>
					</div>
					<div className="col-md-2"></div>
				</div>{/*row*/}<br/>
				<div className="row">
					<div className="col-md-2"></div>
					<div className="col-md-2">
							<span>Sign in to your pakjazba account</span>
							<div className="background_sigin">
								<Formsignin/>
							</div>
					</div>
				</div>
			</div>
			)
	}
}

export default Signin; 