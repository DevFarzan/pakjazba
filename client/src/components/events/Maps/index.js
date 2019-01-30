import React, { Component } from 'react';
import SalmanKhan from './SalmanKhan'

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
				<SalmanKhan />
			)
	}
}

export default SeatMap;