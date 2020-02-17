import React, { Component } from 'react';
import './buyfirstfold.css'
import { connect } from 'react-redux';

class Firstfold extends Component {
    constructor(props) {
        super(props);
    }

    dropDown(e) {
        this.props.mainCategoryFilter(e)
    }

  

    render() {
        return (
            <div className="container" style={{ width: "100%" }}>
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12"  style={{ cursor: 'pointer' }}>
                        <div className="wrimagecard wrimagecard-topimage">
                            <div className="wrimagecard-topimage_headerMotor" onClick={this.dropDown.bind(this, 'motors')}>
                                <center>
                                    <h3 className="categoryInnerText">Motors</h3>
                                </center>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12" style={{ cursor: 'pointer' }}>
                        <div className="wrimagecard wrimagecard-topimage">
                            <div className="wrimagecard-topimage_headerFashion" onClick={this.dropDown.bind(this, 'Fashion')}>
                                <center>
                                    <h3 className="categoryInnerText">Fashion</h3>
                                </center>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12" style={{ cursor: 'pointer' }}>
                        <div className="wrimagecard wrimagecard-topimage">
                            <div className="wrimagecard-topimage_headerElectric" onClick={this.dropDown.bind(this, 'Electronics')} >
                                <center>
                                    <h3 className="categoryInnerText">Electronics</h3>
                                </center>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12"  style={{ cursor: 'pointer' }}>
                    <div className="wrimagecard wrimagecard-topimage">
                        <div className="wrimagecard-topimage_headerColNArt" onClick={this.dropDown.bind(this, 'Home')} >
                            <center>
                                <h3 className="categoryInnerText">Collectibles & Art</h3>
                            </center>
                        </div>
                    </div>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12"  style={{ cursor: 'pointer' }}>
                    <div className="wrimagecard wrimagecard-topimage">
                        <div className="wrimagecard-topimage_headerHomeBuy" onClick={this.dropDown.bind(this, 'Home')} >
                            <center>
                                <h3 className="categoryInnerText">Home</h3>
                            </center>
                        </div>
                    </div>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12"  style={{ cursor: 'pointer' }}>
                    <div className="wrimagecard wrimagecard-topimage">
                        <div className="wrimagecard-topimage_headerGarden" onClick={this.dropDown.bind(this, 'Garden')} >
                            <center>
                                <h3 className="categoryInnerText">Garden</h3>
                            </center>
                        </div>
                    </div>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12"  style={{ cursor: 'pointer' }}>
                    <div className="wrimagecard wrimagecard-topimage">
                        <div className="wrimagecard-topimage_headerSportingGood" onClick={this.dropDown.bind(this, 'Toys')}>
                            <center>
                                <h3 className="categoryInnerText">Sporting Goods</h3>
                            </center>
                        </div>
                    </div>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12"  style={{ cursor: 'pointer' }}>
                    <div className="wrimagecard wrimagecard-topimage">
                        <div className="wrimagecard-topimage_headerToy" onClick={this.dropDown.bind(this, 'Toys')}>
                            <center>
                                <h3 className="categoryInnerText">Toys & Hobbies</h3>
                            </center>
                        </div>
                    </div>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12"  style={{ cursor: 'pointer' }}>
                    <div className="wrimagecard wrimagecard-topimage">
                        <div className="wrimagecard-topimage_headerIndstry" onClick={this.dropDown.bind(this, 'Toys')}>
                            <center>
                                <h3 className="categoryInnerText">Business & Industrial</h3>
                            </center>
                        </div>
                    </div>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12"  style={{ cursor: 'pointer' }}>
                    <div className="wrimagecard wrimagecard-topimage">
                        <div className="wrimagecard-topimage_headerMusic" onClick={this.dropDown.bind(this, 'Toys')}>
                            <center>
                                <h3 className="categoryInnerText">Music</h3>
                            </center>
                        </div>
                    </div>
                </div>
                <br /><br />
            </div>
        )
    }
}

export default connect()(Firstfold);