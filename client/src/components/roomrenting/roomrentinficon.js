import React, { Component } from 'react';
import './roomrentingicon.css';
import { connect } from 'react-redux'

class RoomrentingIcon extends Component {
    constructor(props) {
        super(props);
    }

    clickItem(item) {
        this.props.mainCategoryFilter(item)
    }

    render() {
        return (
            <div className="">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12" onClick={() => { this.clickItem('Property to rent') }} style={{ cursor: 'pointer' }}>
                        <div className="wrimagecard wrimagecard-topimage">
                            <div className="wrimagecard-topimage_headerRoom1">
                                <center>
                                    <h3 className="categoryInnerText">Property to rent</h3>
                                </center>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12" onClick={() => { this.clickItem('Room to rent') }} style={{ cursor: 'pointer' }}>
                        <div className="wrimagecard wrimagecard-topimage">
                            <div className="wrimagecard-topimage_headerRoom2">
                                <center>
                                    <h3 className="categoryInnerText">Room to rent</h3>
                                </center>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12" onClick={() => { this.clickItem('Office & commercial to rent') }} style={{ cursor: 'pointer' }}>
                        <div className="wrimagecard wrimagecard-topimage">
                            <div className="wrimagecard-topimage_headerRoom3">
                                <center>
                                    <h3 className="categoryInnerText">Office & commercial to rent</h3>
                                </center>
                            </div>
                        </div>
                    </div>
                    {/* <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12" onClick={() => { this.clickItem('Parking & storage to rent') }} style={{ cursor: 'pointer' }}>
                        <div className="wrimagecard wrimagecard-topimage">
                            <div className="wrimagecard-topimage_headerRoom2">
                                <center>
                                    <h3 className="categoryInnerText">Parking & storage to rent</h3>
                                </center>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        )
    }
}

export default connect()(RoomrentingIcon);
