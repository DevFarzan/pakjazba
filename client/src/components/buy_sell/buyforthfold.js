import React, { Component } from 'react';
import './buyforthfold.css';
import '../Explore/explore.css'
import { connect } from 'react-redux';
import { Redirect } from 'react-router';

class Forthfold extends Component {
    constructor(props) {
        super(props);
        this.state = {
            objData: {},
            detailPage: false,
            goProfile: false
        }
    }


    goToProfile(val, data) {
        if (val === 1) {
            this.setState({ detailPage: true, objData: data })
        } else {
            this.setState({ goProfile: true, objData: data })
        }
    }

    render() {
        const { showBuySell, filteredData, notFoundFilterData, showRecord, categoroyOfRoom, stateOfRoom, cityOfRoom, conditionOfRoom,
            removeValue, showAllRooms } = this.props;
        const { detailPage, goProfile, objData } = this.state;

       
        if (detailPage) {
            return <Redirect to={{ pathname: `/detail_buySell`, state: objData }} />
        }
        if (goProfile) {
            return <Redirect to={{ pathname: `/profile_userDetail`, state: { userId: objData.userid, profileId: objData.profileid } }} />
        }

        return (
            <div className="container" style={{ width: "100%" }}>
                {/* {!this.state.loader && showBuySell == 0 && <span style={{textAlign:"center"}}><h1>Nothing to sell</h1></span>}
                {text && !!filteredArr.length === false && <span style={{textAlign:"center"}}><h1>Not found....</h1></span>}
                {text && !!filteredArr.length === false && <span style={{textAlign:"center"}}><h5>you can find your search by type</h5></span>}
                {text && !!filteredArr.length === false && <div className="col-md-12" style={{textAlign:"center"}}><button type="button" className="btn2 btn2-success" onClick={this.onAddMore}>Go Back</button></div>} */}
                {/*<div className="col-md-3"  style={{'marginTop': '21px'}} onClick={() => {this.clickItem()}}>
                    <img alt='' src='./images/blank-card.png' style={{border: '1px solid #3a252542', height: '385px', width: '100%', borderRadius: '13px'}}/>
                </div>*/}
                <div className="row">
                    {categoroyOfRoom && categoroyOfRoom.length > 0 && <div className="col-xs-6 col-sm-2 col-md-2 col-lg-2">
                        {categoroyOfRoom.map((elem, key) => {
                            return (
                                <div className="cross-card">
                                    <li>{elem}<span class="close crossBtnExlpre"
                                        onClick={removeValue.bind(this, 'category', elem)}
                                    >x</span></li>
                                </div>)
                        })}
                    </div>}
                    {stateOfRoom && stateOfRoom.length > 0 && <div className="col-xs-6 col-sm-2 col-md-2 col-lg-2">
                        {stateOfRoom.map((elem, key) => {
                            return (
                                <div className="cross-card">
                                    <li>{elem}<span class="close crossBtnExlpre"
                                        onClick={removeValue.bind(this, 'state', elem)}
                                    >x</span></li>
                                </div>)
                        })}
                    </div>}
                    {cityOfRoom && cityOfRoom.length > 0 && <div className="col-xs-6 col-sm-2 col-md-2 col-lg-2">
                        {cityOfRoom.map((elem, key) => {
                            return (
                                <div className="cross-card">
                                    <li>{elem}<span class="close crossBtnExlpre"
                                        onClick={removeValue.bind(this, 'city', elem)}
                                    >x</span></li>
                                </div>)
                        })}
                    </div>}
                    {conditionOfRoom && conditionOfRoom.length > 0 && <div className="col-xs-6 col-sm-2 col-md-2 col-lg-2">
                        {conditionOfRoom.map((elem, key) => {
                            return (
                                <div className="cross-card">
                                    <li>{elem}<span class="close crossBtnExlpre"
                                        onClick={removeValue.bind(this, 'accommodates', elem)}
                                    >x</span></li>
                                </div>)
                        })}
                    </div>}
                </div>
                <div className="row">

                    {notFoundFilterData && filteredData.length == 0 ?
                        <div className="noRecrdTxt">
                            <p className="noRecordText">
                                No Record Found
                                </p>
                            <button
                                className="backBtn"
                                onClick={showAllRooms}
                            >Back</button>
                        </div>
                        :
                        filteredData && filteredData.map((elem, key) => {
                            let str = elem.address || '';
                            if (str.length > 25) {
                                str = str.substring(0, 25);
                                str = str + '...'
                            }
                            let des = elem.description || '';
                            if (des.length > 25) {
                                des = des.substring(0, 25);
                                des = des + '...'
                            }
                            return (
                                <div className="col-md-4 col-sm-4 col-xs-12" onClick={() => { this.goToProfile(1, elem) }} style={{ cursor: 'pointer' }}>
                                    <img alt='' src={elem.images.length ? elem.images[0] : './images/def_card_img.jpg'} style={{ height: '200px', width: "100%", filter: 'brightness(0.5)' }} />
                                    <div className="pricingbuy">
                                        <p>{!elem.hideprice ? '$' + elem.price : 'Hide'}</p>
                                    </div>
                                    <div className="sell-card">
                                        <h4>{elem.modelname}</h4>
                                        <p style={{ fontFamily: 'Poppins, sans-serif' }}>
                                            <span className="glyphicon glyphicon-map-marker"
                                                style={{ color: "#008080", margin: "0", left: "-3px" }}>
                                            </span>
                                            <span>
                                                {elem.address.slice(0, 10)},{elem.state}
                                            </span>
                                        </p>

                                        <p style={{ fontFamily: 'Poppins, sans-serif' }}>
                                            <span className="glyphicon glyphicon-phone"
                                                style={{ color: "#008080", margin: "0", left: "-3px" }}></span>
                                            <span>{elem.contactnumber}</span>
                                        </p>
                                    </div>


                                </div>
                            )
                        })
                    }


                    {notFoundFilterData == false && filteredData.length == 0 && showRecord ?
                        showBuySell && showBuySell.map((elem, key) => {
                            let str = elem.address || '';
                            if (str.length > 25) {
                                str = str.substring(0, 25);
                                str = str + '...'
                            }
                            let des = elem.description || '';
                            if (des.length > 25) {
                                des = des.substring(0, 25);
                                des = des + '...'
                            }
                            return (
                                <div className="col-md-4 col-sm-4 col-xs-12" onClick={() => { this.goToProfile(1, elem) }} style={{ cursor: 'pointer' }}>
                                    <img alt='' src={elem.images.length ? elem.images[0] : './images/def_card_img.jpg'} style={{ height: '200px', width: "100%", filter: 'brightness(0.5)' }} />
                                    <div className="pricingbuy">
                                        <p>{!elem.hideprice ? '$' + elem.price : 'Hide'}</p>
                                    </div>
                                    <div className="sell-card">
                                        <h4>{elem.modelname}</h4>
                                        <p style={{ fontFamily: 'Poppins, sans-serif' }}>
                                            <span className="glyphicon glyphicon-map-marker"
                                                style={{ color: "#008080", margin: "0", left: "-3px" }}>
                                            </span>
                                            <span>
                                                {elem.address.slice(0, 10)},{elem.state}
                                            </span>
                                        </p>

                                        <p style={{ fontFamily: 'Poppins, sans-serif' }}>
                                            <span className="glyphicon glyphicon-phone"
                                                style={{ color: "#008080", margin: "0", left: "-3px" }}></span>
                                            <span>{elem.contactnumber}</span>
                                        </p>
                                    </div>


                                </div>
                            )
                        })
                        :
                        null
                    }
                </div>
                {/* {this.state.loader && <div className="col-md-12" style={{textAlign: 'center', marginLeft: '-50px', marginBottom: '20px'}}>
                    <Spin indicator={antIcon} />
                </div>} */}
                {/* {(showBuySell.length >= 7) && !(showBuySell.length === buySell.length) && <div className="col-md-12" style={{textAlign:"center"}}><button type="button" className="btn btn-success" onClick={this.onAddMore} style={{backgroundColor:"#37a99b", backgroundImage:"none", borderColor:"#37a99b"}}>View More ...</button></div>} */}
                {/*!!showBuySell.length && <span style={{textAlign:"center"}}><Pagination defaultCurrent={1} defaultPageSize={6} total={!!filteredArr.length ? filteredArr.length :buySell.length} onChange={this.onChange} /></span>*/}
                {/* {this.state.visible && <Modal
                    title="Kindly Login first"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    <div className="row">
                        <div className="col-md-6" style={{textAlign:'center'}}><button className="btn btn-sm btn2-success" style={{width:'100%'}} onClick={this.handleLogin}>Login</button></div>
                        <div className="col-md-6" style={{textAlign:'center'}}><button className="btn btn-sm btn2-success" style={{width:'100%'}} onClick={this.handleCancel}>Cancel</button></div>
                    </div>
                </Modal>} */}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return ({
        text: state.text
    })
}

export default connect(mapStateToProps)(Forthfold);