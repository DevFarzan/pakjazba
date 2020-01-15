import React, { Component } from 'react';
import moment from 'moment';
import { Link } from "react-router-dom";
import './bannerevent.css';

class EventBanner extends Component {
    constructor(props) {
        super(props);
        this.state = {
            events: []
        }
    }

    componentDidMount() {
        const { events } = this.props;
        this.setState({ events });
    }

    componentDidUpdate(prevProps, prevState) {
        const { events } = this.props;
        if (prevProps.events.length !== events.length) {
            this.setState({
                events: events,
                showEvents: events.slice(0, 8),
                filteredArr: [],
                add: 8,
                loader: false
            })
        }
    }

    render() {
        const { events } = this.state;
        console.log("TCL: EventBanner -> render -> events", events);
        return (
            <div>
                {/* <h4 style={{textAlign:"left", fontWeight:"bolder", marginTop:"20px", marginBottom:"0", fontSize:"26px"}}>Top Events</h4> */}
                <div className="row">
                    {events && events.map((elem, key) => {
                        if (elem.top) {
                            let postedOn = moment(elem.posted, "LL").format('YYYY-MM-DD');
                            return (
                                <Link key={key} to={{ pathname: `/detail_eventPortal/${elem.randomKey}`, state: elem }}>
                                    <div className="col-md-4 col-sm-5">
                                        <div className="eventCard">
                                            <img alt='' src={elem.images[0]} className="eventImag" />
                                            <div className="row" style={{ padding: "0px" }}>
                                                <div className="col-md-7 col-xs-7">
                                                    <div className="eventLocation">
                                                        <h5 style={{ margin: "0", color: "white" }}>
                                                            <b>{elem.eventTitle}</b>
                                                        </h5>
                                                        <p style={{ marginBottom: "0px" }}>
                                                            <span className="glyphicon glyphicon-map-marker"
                                                                style={{ margin: "0", left: "-3px" }}
                                                            ></span>
                                                            <span>{elem.city}</span>
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="col-md-5 col-xs-5">
                                                    <div className="eventDate">
                                                        <p style={{ margin: "0" }}>
                                                            <span className="glyphicon glyphicon-calendar"
                                                                style={{ margin: "-1px" }}
                                                            ></span>
                                                            <span style={{ marginLeft: "5px" }}>
                                                                {moment(elem.posted, "LL").format('YYYY-MM-DD')}
                                                            </span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="eventDetailcard">
                                                <div className="row" style={{ padding: "5px 10px" }}>
                                                    <div className="col-md-3 col-xs-3">          
                                                            <img src="./images/images.jpg" alt="" className="userImgEvent"/>
                                                    </div>
                                                    <div className="col-md-9 col-xs-9">
                                                        <h5 className="userNamEvent"> {elem.name} </h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            )
                        }
                    })}
                </div>
                {/* <div className="hidden-xs">
                    <div className="EventBanner" style={{width:"100%", }}>
                        <div className="row">
                            <div className="col-md-6">
                                <h1 style={{marginBottom:"5px", marginLeft:"5px;"}}> Find Event near <br/> You with <br/> PakJazba </h1>
                                <p style={{marginLeft:"3px"}}> <b> Events near you </b></p>
                     z
                </div> */}
            </div>
        )
    }
}

export default EventBanner;
