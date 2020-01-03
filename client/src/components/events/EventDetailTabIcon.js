import React, { Component } from 'react';
import {
    Icon
} from 'antd';
import './EdetailFirstfold.css';

class EventDetailTabIcon extends Component {
    render() {
        return (
            <div>
                <div className="row" style={{backgroundColor: '#f7f5ed'}}>
                    <div className="col-xs-12 col-sm-2 col-md-2 col-lg-2"></div>
                    <div className="col-xs-12 col-sm-8 col-md-8 col-lg-8">
                        <div className="row" style={{textAlign:'center'}}>
                            <div className="col-xs-4 col-sm-2 col-md-2 col-lg-2">
                                <Icon type="phone" className="eventtabIcon" />
                                <p>Call now</p>
                            </div>
                            <div className="col-xs-4 col-sm-2 col-md-2 col-lg-2">
                                <Icon type="heart" className="eventtabIcon" />
                                <p>Bookmark</p>
                            </div>
                            <div className="col-xs-4 col-sm-2 col-md-2 col-lg-2">
                                <Icon type="share-alt" className="eventtabIcon" />
                                <p>Share</p>
                            </div>
                            <div className="col-xs-4 col-sm-2 col-md-2 col-lg-2">
                                <Icon type="environment" className="eventtabIcon" />
                                <p>Direction</p>
                            </div>
                            <div className="col-xs-4 col-sm-2 col-md-2 col-lg-2">
                                <Icon type="branches" className="eventtabIcon" />
                                <p>Website</p>
                            </div>
                            <div className="col-xs-4 col-sm-2 col-md-2 col-lg-2">
                                <Icon type="mail" className="eventtabIcon" />
                                <p>Send email</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-2 col-md-2 col-lg-2"></div>
                </div>
            </div>
        )
    }
}

export default EventDetailTabIcon;
