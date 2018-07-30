import React, { Component } from 'react';
import { Modal } from 'antd';
import Formsignup from './formsignup';
import Facebook from './Facebook';



class Signin extends Component{
	state = {
    loading: false,
    visible: false,
    passwordValidator:false,
    username: null
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  }
  onFacebookLogin = (loginStatus, resultObject) => {
    if (loginStatus === true) {
      this.setState({
        username: resultObject.user.name
      });
    } else {
      alert('Facebook login error');
    }
  }

  handleOk = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false, visible: false });
    }, 3000);
  }
  
  handleBlur = () => {
  this.setState({validating: true});
}

  handleCancel = () => {
    this.setState({ visible: false });
  }
  renderPasswordConfirmError = (e) => {
  this.setState({
  	passwordValidator:true
  })
}

  


	render(){
		let {children} = this.props;
		const { visible} = this.state;
		return(
				
					<span>
						<span onClick={this.showModal}>Sign Up</span>
						<Modal
						          visible={visible}
						          title="Title"
						          onOk={this.handleOk}
						          onCancel={this.handleCancel}
						          
	        				>
	          				<div className="row">
				        		<div className="col-md-5">	
						         	<Facebook/>
								</div>{/*col-md-4*/}
								<div className="col-md-1"></div>{/*col-md-4*/}
								<div className="col-md-5">		
									<button className="loginBtn loginBtn--google">
									  Sign Up with Google
									</button>
								</div>{/*col-md-4*/}	
							</div>{/*row*/}
							<br/>
							<div className="">{/*form div start*/}
			          	<form>
			          		<Formsignup />
						</form>
			          </div>{/*form div end*/}	
       					 </Modal>
					</span>
				
			)
	}

}
export default Signin

