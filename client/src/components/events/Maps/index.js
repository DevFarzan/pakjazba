import React, { Component } from 'react';
import SalmanKhan from './SalmanKhan';
import Burgermenu from '../../header/burgermenu';
import EventHeader from './Eventheader';
import EventFilter from './eventfilter';


class SeatMap extends Component{
	componentDidMount(){
		let objData = this.props.location.state;
        console.log(objData, 'objDataaaaaa')
	}

	componentWillUnmount(){
		let data = this.props.location.state;
		this.props.history.push({pathname: `/Buyer_Detailpage`, state: data})
	}

	render(){

		return (
			<div>
				<div className ="" style={{"background":"#d8e7e4",marginTop:'86px',backgroundSize: 'cover'}}>
						<div className="background-image">
								<Burgermenu/>
								<EventHeader/>
						</div>
						<div className="">
							<EventFilter/>
						</div>
				</div>
				{/*<SalmanKhan />*/}
			</div>

			)
	}
}

export default SeatMap;
