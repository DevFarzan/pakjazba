import React, { Component } from 'react';
import { Icon } from 'antd';
import App from '../App';

class Postbusiness extends Component{
		render(){
			return(
				<div>
			{/*================================App component include Start===========================*/}
						<App/>
			{/*================================App component include End===========================*/}	

			{/*================================post business form start============================*/}
				<div className="container">	
					<div className="panel-group">
  						<div className="panel panel-default">
  							<div className="main_c_panel">Roommates / Rentals<br/>
									Find all your Local Rentals in one place</div>
    						<div className="panel-body">
    							{/*==========main panel content=============*/}
    							{/*==========location panel start=========*/}	
    							<div class="panel panel-default">
  									<div class="panel-heading bold_c_text"><Icon type="info-circle" /><span className="margin_font_location">Location</span></div>
  									<div class="panel-body">location Form</div>
								</div><br/>
							   {/*==========location panel end===========*/}
							   {/*==========Business panel start=========*/}	
    							<div class="panel panel-default">
  									<div class="panel-heading bold_c_text"><Icon type="info-circle" /><span className="margin_font_location">Business</span></div>
  									<div class="panel-body">Business Form</div>
								</div><br/>
							   {/*==========Business panel end===========*/}
							{/*==========upload panel start=========*/}	
    							<div class="panel panel-default">
  									<div class="panel-heading bold_c_text"><Icon type="info-circle" /><span className="margin_font_location">Upload</span></div>
  									<div class="panel-body">Upload Form</div>
								</div>
							   {/*==========upload panel end===========*/}
    						</div>{/*main panel content*/}
  						</div>
					</div>{/*panel-group*/}
				</div>{/*container*/}	

			{/*================================post business form End==============================*/}		
				</div>
				)
		}
}

export default Postbusiness;