import React, { Component } from 'react';
import { Icon } from 'antd';
import App from '../../App';


class ProfileUser extends Component{
    render(){
        return(
            <div>
                <App/>
                <div className="content" style={{"margin-top":"110px"}}>
	                <div className="container">
	                	<div className="hero">
	                		<div className="row">
	                	{/*=======================col-md-3============================*/}
	                			<div className="col-md-3">
	                				<nav className="nav flex-column side-nav">
		                                <a className="nav-link active icon border_sidenav" href="my-profile.html">
		                                    <Icon type="user" /><span className="linktext_margin">My Profile</span>
		                                </a><br/><br/>
		                                <a className="nav-link active icon border_sidenav" href="my-profile.html">
		                                    <Icon type="heart" /><span className="linktext_margin">My Ads Listing</span>
		                                </a><br/><br/>
		                                <a className="nav-link active icon border_sidenav" href="my-profile.html">
		                                    <Icon type="key" /><span className="linktext_margin">Change Password</span>
		                                </a>
		                            </nav>    
	                			</div>{/*col-md-3*/}
	                	{/*======================col-md-3================================*/}
	                	{/*======================col-md-9================================*/}
	                			<div className="col-md-9">
	                				<form className="form">
	                					<div className="row">
	                						<div className="col-md-8">
	                							<h2>Personal Information</h2>
	                							<section>
	                								<div className="row">
	                									<div className="col-md-4">
	                										<div class="form-group">
															  <label for="sel1">Title:</label>
															  <select className="form-control" id="sel1">
															    <option>Mr</option>
															    <option>Mrs</option>
															  </select>
															</div>
	                									</div>{/*col-md-4*/}
		                								<div className="col-md-8">
		                									<div class="form-group">
															  <label for="usr">Name:</label>
															  <input type="text" className="form-control" id="usr" />
															</div>
		                								</div>{/*col-md-8*/}
	                								</div>{/*row*/}	
	                								<div className="row">
	                									<div className="col-md-12">
	                										<div class="form-group">
															  <label for="usr">Your Location:</label>
															  <input type="text" className="form-control" id="loc" />
															</div>
	                									</div>{/*col-md-12*/}
	                								</div>{/*row*/}
	                								<div className="row">
	                									<div className="col-md-12">
	                										<div class="form-group">
															  <label for="usr">More About You:</label>
															  <textarea className="form-control" id="text" placeholder="tell more"></textarea>
															</div>
	                									</div>{/*col-md-12*/}
	                								</div>{/*row*/}
	                							</section>
	                							 <section>
		                                            <h2>Contact</h2>
		                                            <div className="form-group">
                                                		<label for="phone" className="col-form-label">Phone</label>
                                                		<input name="phone" type="text" className="form-control" id="phone" placeholder="Your Phone" value="312-238-3329" />
                                            		</div>
                                            
                                            		<div className="form-group">
                                                		<label for="email" className="col-form-label">Email</label>
                                                		<input name="email" type="email" className="form-control" id="email" placeholder="Your Email" value="jane.doe@example.com" />
                                            		</div>
		                                         </section>
		                                         <section>
		                                         	<h2>Social</h2>
		                                         	<div className="form-group">
                                                		<label for="phone" className="col-form-label">Twitter</label>
                                                		<input name="phone" type="text" className="form-control" id="twitter" placeholder="Your Twitter Link" />
                                            		</div>
                                            
                                            		<div className="form-group">
                                                		<label for="email" className="col-form-label">Facebook</label>
                                                		<input name="email" type="text" className="form-control" id="facebook" placeholder="Your Facebook Link" />
                                            		</div>
		                                         </section>
		                                         <section>
		                                         		<div className="form-group">
                                                			<label for="email" className="col-form-label">Current Password</label>
                                                			<input name="email" type="text" className="form-control" id="facebook" placeholder="Your Facebook Link" />
                                            			</div>
		                                         </section>
		                                         <section>
		                                         	<div className="row">
		                                         		<div className="col-md-12" >
		                                         			<button className="btn btn-primary" style={{"float": "right"}}>Save Changes</button>
		                                         		</div>
		                                         	</div>
		                                         </section>
	                						</div>{/*col-md-8*/}
	                						<div className="col-md-8">
	                							<h2>Change Password</h2>
	                							<section>
	                								<div className="form-group">
	                									<label for="currentpassword" className="col-form-label">Current Password</label>
	                									<input name="currentpassword" type="password" className="form-control" id="password" placeholder="Current Password" />
	                								</div>
	                								<div className="form-group">
	                									<label for="newpassword" className="col-from-label">New Password</label>
	                									<input name="newpassword" type="password" className="form-control" id="New password" placeholder="new password" />
	                								</div>
	                								<div className="form-group">
	                									<label for="confrimpassword" className="col-form-label">Confrim Password</label>
	                									<input name="confrimpassword" className="form-control" id="confrimpassword" placeholder="Confrim Password" />
	                								</div>
	                							</section>
	                							<section>
		                                         	<div className="row">
		                                         		<div className="col-md-12" >
		                                         			<button className="btn btn-primary" style={{"float": "right"}}>Change Password</button>
		                                         		</div>
		                                         	</div>
		                                         </section>
	                						</div>
	                						
	                						<div class="col-md-4">
                                        		<div className="profile-image">
                                            <div className="img-circle">
                                                <img className="img-circle" src="../images/author-09.jpg" alt="" />
                                            </div>
                                            <div className="single-file-input" style={{"text-align": "center","margin-top": "9px"}}>
                                                <div className="btn btn-framed btn-primary small">Upload a picture</div>
                                            </div>
                                        </div>
                                    </div>

	                					</div>{/*row*/}
	                				</form>
	                			</div>{/*col-md-9*/}	
	                		</div>{/*row*/}
	                	</div>
	            	</div>{/*container*/}	
	            </div>{/*first content div*/}	
            </div>
        )
    }
}

export default ProfileUser;