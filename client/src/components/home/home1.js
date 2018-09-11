import React, { Component } from 'react';
import App from "../../App";

class Home1 extends Component{
			render(){
				return(
					<div>
{/* Main tile End*/}
<div className="row">
	<div className="col-md-12">
		<span></span>
	</div>
</div>
{/* Top Button Start */}

<div className="row">
	<div className="col-md-10">
{/* First Button */}
		<div className="col-md-4">
		
<div className="card outset" >
    <div className="card-body  tag1">

			<img src="./images/black.jpg" height="60" width="100" style={{width: "28%",height: "76px"}} /><b className="tag1" > Room Renting </b>
		</div>
	</div>
		</div>
{/* First Button End */}
{/* Second Button */}
		<div className="col-md-4">
		
<div className="card outset" >
    <div className="card-body  tag1">

			<img src="./images/black.jpg" height="60" width="100" style={{width: "28%",height: "76px"}} /><b className="tag1"> Business Listing </b>
		</div>
	</div>
		</div>
{/* Second Button End */}
{/* Second Button */}
		<div className="col-md-4">
		
<div className="card outset" >
    <div className="card-body  tag1">

			<img src="./images/black.jpg" height="60" width="100" style={{width: "28%",height: "76px"}} /><b className="tag1"> Buy & Sell </b>
		</div>
	</div>
		</div>
{/* Second Button End */}		
	</div>	

	<div className="col-md-2">
		
	</div>

</div>
{/* Top tile End */}


					</div>

					)

}

}
export default Home1;