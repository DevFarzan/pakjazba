import React, { Component } from 'react';
import SalmanKhan from './SalmanKhan';
import Sittingarrangements from './sittingarrangments';
import Burgermenu from '../../header/burgermenu';
import EventHeader from './Eventheader';
import EventFilter from './eventfilter';
import BookedSeats from './bookedSeats';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';

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
			reset: false,
			data: {}
		}
	}

	componentDidMount(){
		const {data, objData} = this.props.location.state;
        this.setState({ data });
	}

	componentWillUnmount(){
		const { data, booked } = this.state;
		if(!this.props.route){
			this.props.history.push({pathname: `/Buyer_Detailpage`, state: {data, booked}})
		}
	}

	availableSeats = (obj) => {
		obj.bestSeats.sort((a, b) => {
			let c = a.price.slice(3, a.price.length),
			d = b.price.slice(3, b.price.length)
			return +d - +c
		})
		this.setState({obj});
	}

	bookedSeats = (book, golden) => {
		let { booked } = this.state;
		if(booked.length > 0){
			let seatGold = booked.filter((elem) => Object.values(elem)[0] == "Golden Seat"),
			seatMap = booked.filter((elem) => Object.values(elem)[0] !== "Golden Seat");
			if(!!golden){
				this.setState({ booked: [...seatMap, ...book]});
			}
			if(!golden){
				this.setState({ booked: [...seatGold, ...book]});
			}
		}else {
			this.setState({booked: book});				
		}

	}

	priceRange = (range) => {
		this.setState({range});
	}

	switchUnchanged = (checked) => {
		this.setState({range: [500, 5000], reset: checked})
	}

	confirmSeat = e => {
		this.setState({ msg : true })
	}

	render(){
		const { obj, booked, range, msg, data } = this.state;
		
		if(msg) {
            return <Redirect to={{pathname: '/Buyer_Detailpage', state: {data, booked}}} />
        }

		return (
			<div>
				<Burgermenu/>
				<div className ="" style={{"background":"#d8e7e4",backgroundSize: 'cover', marginTop: '90px'}}>
					<div className="background-image">
						<EventHeader
							data={data}
							bookedSeats={this.bookedSeats}
							// reset={this.state.reset}
							{...this.props}
						/>
					</div>
					<div className="">
						<EventFilter
							priceRange={this.priceRange}
							reset={this.state.reset}
							switchUnchanged={this.switchUnchanged}
						/>
					</div>
				</div>
				<div className="row">
					<div className="col-md-8" style={{border: '1px solid black'}}>
						<SalmanKhan
							// data={data}
							availableObj={this.availableSeats}
							bookedSeats={this.bookedSeats}
							reset={this.state.reset}
							switchUnchanged={this.switchUnchanged}
							{...this.props}
						/>
					</div>
					<div className="col-md-4 col-sm-12">
						{!(!!booked.length) && <Sittingarrangements data={obj} range={range}/>}
						<hr className="col-md-12" style={{marginLeft: '-10px'}}/>
						<BookedSeats data={booked} />
					</div>
					<div className="col-md-4 col-sm-12">
					</div>
					<div className="col-md-4 col-sm-12">
						{booked.length > 0 && <button className="btn btn-submit col-md-12" onClick={this.confirmSeat}><b>confirm seat</b></button>}
					</div>
					<div className="col-md-4 col-sm-12">
					</div>
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
    return({
        route: state.route
    });
}

export default connect(mapStateToProps)(SeatMap);
