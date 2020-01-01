import React, { Component } from 'react';
import {
    Icon
} from 'antd';
import './DetailjobUi.css';

class JobDetailpageIcon extends Component {
    render() {
        return (
            <div>
                <div className="row" style={{backgroundColor: '#f7f5ed'}}>
                    <div className="col-xs-12 col-sm-2 col-md-2 col-lg-2"></div>
                    <div className="col-xs-12 col-sm-8 col-md-8 col-lg-8">
                        <div className="row" style={{textAlign:'center'}}>
                            <div className="col-xs-4 col-sm-2 col-md-2 col-lg-2">
                                <Icon type="phone" className="tabIcon" />
                                <p>Call now</p>
                            </div>
                            <div className="col-xs-4 col-sm-2 col-md-2 col-lg-2">
                                <Icon type="heart" className="tabIcon" />
                                <p>Bookmark</p>
                            </div>
                            <div className="col-xs-4 col-sm-2 col-md-2 col-lg-2">
                                <Icon type="share-alt" className="tabIcon" />
                                <p>Share</p>
                            </div>
                            <div className="col-xs-4 col-sm-2 col-md-2 col-lg-2">
                                <Icon type="environment" className="tabIcon" />
                                <p>Direction</p>
                            </div>
                            <div className="col-xs-4 col-sm-2 col-md-2 col-lg-2">
                                <Icon type="branches" className="tabIcon" />
                                <p>Website</p>
                            </div>
                            <div className="col-xs-4 col-sm-2 col-md-2 col-lg-2">
                                <Icon type="mail" className="tabIcon" />
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

export default JobDetailpageIcon;
