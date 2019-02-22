import React, { Component } from 'react';
import SalmanKhan from './SalmanKhan';
import Sittingarrangements from './sittingarrangments';
import Header from '../../header/header';
import EventHeader from './Eventheader';
import EventFilter from './eventfilter';
import BookedSeats from './bookedSeats';

class SeatMap extends Component{
	constructor(props){
		super(props);
		this.state = {
			obj: {
				lowestArr: [],
    			bestSeats: []
			},
			booked: [],
			range: [500, 5000],
			reset: false
		}
	}
	componentDidMount(){
		let objData = this.props.location.state;
        console.log(objData, 'objDataaaaaa')
	}

	componentWillUnmount(){
		let data = this.props.location.state;
		this.props.history.push({pathname: `/Buyer_Detailpage`, state: data})
	}

	availableSeats = (obj) => {
		obj.bestSeats.sort((a, b) => {
			let c = a.price.slice(3, a.price.length),
			d = b.price.slice(3, b.price.length)
			return +d - +c			
		})
		this.setState({obj});
	}

	bookedSeats = (booked) => {
		this.setState({booked});
	}

	priceRange = (range) => {
		this.setState({range});
	}

	switchUnchanged = () => {
		this.setState({range: [500, 5000], reset: true})
	}

	render(){
		const { obj, booked, range } = this.state;
		
		return (
			<div>
				<Header/>
				<div className ="" style={{"background":"#d8e7e4",backgroundSize: 'cover'}}>
						<div className="background-image">
							<EventHeader/>
						</div>
						<div className="">
							<EventFilter 
								priceRange={this.priceRange}
								switchUnchanged={this.switchUnchanged}
							/>
						</div>
				</div>
				<div className="row">
					<div className="col-md-8 hidden-xs" style={{border: '1px solid black'}}>
						<SalmanKhan 
							availableObj={this.availableSeats}
							bookedSeats={this.bookedSeats}
							reset={this.state.reset}
						/>
					</div>
					<div className="col-md-4 col-sm-12">
						{!(!!booked.length) && <Sittingarrangements data={obj} range={range}/>}
						<hr className="col-md-12" style={{marginLeft: '-10px'}}/>
						<BookedSeats data={booked} />
					</div>
				</div>
			</div>
		)
	}
}

export default SeatMap;
