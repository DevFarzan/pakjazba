import React, { Component } from 'react';
import { Checkbox, InputNumber, Icon, Tooltip } from 'antd';
import {HttpUtils} from "../../../Services/HttpUtils";
import './eventheader.css'

class EventHeader extends Component{  
    state = {
        goldenAvailableTickets: 50,
        booked: []
    }

    async componentDidMount(){
        const { data } = this.props.location.state,
        { goldenAvailableTickets } = this.state;     
        let req = await HttpUtils.get('getseats?eventId=' + data._id);
        if(req && req.code && req.code == 200){
            if(req.finalSeats[0].booked.length > 0){
                let filteredSeatsArr = req.finalSeats[0].booked.filter((elem) => Object.values(elem)[0] === "Golden Seat");
                this.setState({ goldenAvailableTickets: goldenAvailableTickets - filteredSeatsArr.length})
            }
        }       
    }

    onChangeTicket = e => {
        let booked = [];
        if(e > 0){
            for(let i = 1; i <= e; i++){
                booked.push({str: 'Golden Seat', price: 'AED250', pay: 250})                
            }
            this.setState({booked}, ()=> {
                this.props.bookedSeats(booked, true);
            })
        }else {
            this.setState({ booked: [] }, () => {
                this.props.bookedSeats(booked, true);
            });
        }        
    }
 
    render(){
        const { data } = this.props,
        { goldenAvailableTickets } = this.state;
        return(
            <div className="Backgroundcolor">
                <div className="row">
                    <div className="col-md-2 hidden-xs">
                        <img src={data.images && data.images[0]}/>
                    </div>
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-md-9">
                                <h3>{data.eventTitle && data.eventTitle}</h3>
                            </div>
                            <div className="col-md-3">
                              {/*<p className="buttoninfo"> More Info </p>*/}
                            </div>
                        </div>
                        <h4>{data.dateRange && data.dateRange[0].from} . {data.openingTime && data.openingTime}</h4>
                        <h4>{data.address && data.address}{data.city && data.city}{data.state && data.state}</h4>
                    </div>
                    {/*<div className="col-md-1"></div>*/}
                    <div className="col-md-4">
                        <div className="ticketcautions">
                            <p>{data.description && data.description.slice(0, 100)}...</p>
                        </div>
                        <div className="row">
                            <div className="col-md-6 col-xs-6">
                                <Checkbox checked={true}></Checkbox>
                                <span className="orederform">Golden Ticket</span>
                            </div>
                            <div className="col-md-6 col-xs-6">
                                <InputNumber min={0} 
                                    max={goldenAvailableTickets} 
                                    defaultValue={0} disabled={false} 
                                    onChange={(e) => {this.onChangeTicket(e)}} 
                                    style={{width:"50px", height:"23px"}} 
                                />
                                <span style={{marginLeft:'7px'}}>{'AED' + 250}</span>
                                <Tooltip placement="top" title='Golden Ticket is not Available'>
                                    <Icon type="question-circle" theme="filled" style={{fontSize: '16px', marginLeft: '10px'}}/>
                                </Tooltip>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default EventHeader;
