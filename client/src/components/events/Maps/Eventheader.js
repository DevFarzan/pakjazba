import React, { Component } from 'react';
import './eventheader.css'

class EventHeader extends Component{  
    render(){
        const { data } = this.props;
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
                    <div className="col-md-1"></div>
                    <div className="col-md-3">
                        <div className="ticketcautions">
                            <p>{data.description && data.description.slice(0, 100)}...</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default EventHeader;
