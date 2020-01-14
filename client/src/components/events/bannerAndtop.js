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

        return (
            <div>
                {/* <h4 style={{textAlign:"left", fontWeight:"bolder", marginTop:"20px", marginBottom:"0", fontSize:"26px"}}>Top Events</h4> */}
                <div className="row">
                    {events && events.map((elem, key) => {
                        if (elem.top) {
                            let postedOn = moment(elem.posted, "LL").format('YYYY-MM-DD');
                            return (
                                <Link key={key} to={{ pathname: `/detail_eventPortal/${elem.randomKey}`, state: elem }}>
                                    <div className="col-md-4">
                                        <div className="card">
                                            <img alt='' src={elem.images[0]} style={{ height: '120px', width: "100%", borderTopLeftRadius: '12px', borderTopRightRadius: '12px' }} />
                                            <p style={{ marginTop: '5px', marginLeft: "0", marginBottom: "5px", fontSize: "17px", color: "black" }}><b>{elem.eventTitle}</b></p>
                                            <p style={{ marginBottom: "0px" }}>
                                                <span style={{ color: "black" }}>{elem.city}</span>
                                            </p>
                                            <p>
                                                <span className="glyphicon glyphicon-calendar" style={{ color: "#008080", margin: "-1px" }}></span>
                                                <span style={{ color: "black", marginLeft: "5px" }}>{postedOn}</span>
                                            </p>
                                        </div>
                                    </div>
                                </Link>
                                // <span>
                                //     <div className="pricingroom">
                                //         <p style={{ margin: "0" }}>
                                //             <span className="glyphicon glyphicon-calendar"
                                //                 style={{ margin: "-1px" }}
                                //             ></span>
                                //             <span style={{ marginLeft: "5px" }}>
                                //                 {moment(cardDetails.posted, "LL").format('YYYY-MM-DD')}
                                //             </span>
                                //         </p>
                                //     </div>
                                //     <div className="roomdetailcard">
                                //         <h5 style={{ margin: "0", color: "white" }}>
                                //             <b>{cardDetails.eventTitle}</b>
                                //         </h5>
                                //         <p style={{ marginBottom: "0px" }}>
                                //             <span className="glyphicon glyphicon-map-marker"
                                //                 style={{ margin: "0", left: "-3px" }}
                                //             ></span>
                                //             <span>{cardDetails.city}</span>
                                //         </p>
                                //     </div>
                                //     <div className="eventborder">
                                //         <div className="row" style={{ padding: "5px 10px" }}>
                                //             <div className="col-md-2 col-xs-2">
                                //                 <div className="organiserimage">
                                //                     <img src="./images/images.jpg" alt="" />
                                //                 </div>
                                //             </div>
                                //             <div className="col-md-10 col-xs-10">
                                //                 <h5 className="organisername"> {cardDetails.name} </h5>
                                //             </div>
                                //         </div>
                                //     </div>
                                // </span>
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
                            </div>
                            <div className="col-md-6">
                                <img src="images/event-banner.png" style={{width:"100%", height:"250px"}}/>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        )
    }
}

export default EventBanner;
