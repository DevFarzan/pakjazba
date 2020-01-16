import React, { Component } from 'react';
import "./headerroomrenting.css";
import { Link } from "react-router-dom";
import { Rate } from 'antd';

class Roomrenting1content extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    // componentDidMount() {
    //     this.getAllBusiness()
    //     this.handleLocalStorage();
    // }

    // handleLocalStorage = () => {
    //     AsyncStorage.getItem('user')
    //         .then((obj) => {
    //             let userObj = JSON.parse(obj)
    //             if (!!userObj) {
    //                 this.setState({
    //                     user: true,
    //                 })
    //             }
    //             else {
    //                 this.setState({
    //                     user: false
    //                 })
    //             }
    //         })
    // }

    // async getAllBusiness() {
    //     let res = await HttpUtils.get('marketplace'),
    //         req = await HttpUtils.get('getreviews'),
    //         roomrents = [];
    //     if (res && res.code && res.code == 200 && req && req.code && req.code === 200) {
    //         roomrents = this.addingStarProp(res.roomrentsdata, req.content);
    //         this.setState({
    //             roomrents,
    //             showroomrents: roomrents.slice(0, 7),
    //             loader: false
    //         });

    //     }
    // }

    // addingStarProp(arrforLoop, rateArr) {
    //     return arrforLoop && arrforLoop.map((elem) => {
    //         let rate = 0,
    //             len = 0;
    //         rateArr && rateArr.map((el) => {
    //             if (elem._id == el.objid) {
    //                 rate += el.star ? +el.star : 0;
    //                 len++
    //             }
    //         });
    //         let star = rate / len;
    //         if (rate > 0 && len > 0) {
    //             return { ...elem, ...{ star: star.toFixed(1) } };
    //         }
    //         return { ...elem, ...{ star: 0 } };
    //     });
    // }

    // funcIndexes(page) {
    //     let to = 6 * page;
    //     let from = to - 6;
    //     return { from: page === 1 ? 0 : from, to: page === 1 ? 6 : to }
    // }

    // onChange = (page) => {
    //     const { roomrents, filteredArr } = this.state;
    //     let indexes = this.funcIndexes(page)

    //     if (!!filteredArr.length) {
    //         this.setState({
    //             current: page,
    //             showroomrents: filteredArr.slice(indexes.from, indexes.to)
    //         });
    //     } else {
    //         this.setState({
    //             current: page,
    //             showroomrents: roomrents.slice(indexes.from, indexes.to)
    //         });
    //     }
    // }

    // onAddMore = () => {
    //     const { add, roomrents, filteredArr } = this.state;
    //     if (!!filteredArr.length) {
    //         this.setState({
    //             showroomrents: filteredArr.slice(0, add + 8),
    //             add: add + 8
    //         });
    //     } else {
    //         this.setState({
    //             showroomrents: roomrents.slice(0, add + 8),
    //             add: add + 8
    //         });
    //     }
    // }

    // clickItem() {
    //     const { user } = this.state;
    //     if (user) {
    //         this.setState({ goDetail: true })
    //     } else {
    //         this.setState({ visible: true })
    //     }
    // }

    // handleCancel = (e) => {
    //     this.setState({ visible: false });
    // }

    // handleLogin = (e) => {
    //     this.setState({ goForLogin: true, visible: false })
    // }

    render() {
        // const antIcon = <Icon type="loading" style={{ fontSize: 120 }} spin />;
        const { showroomrents, filteredData, notFoundFilterData, showRecord, categoroyOfRoom, stateOfRoom, cityOfRoom, accomodatesOfRoom,
            removeValue, showAllRooms } = this.props;
            console.log("TCL: Roomrenting1content -> render -> showroomrents", showroomrents);
        return (
            <section id="about">
                {/*<!-- Top List start -->*/}
                {/* {!this.state.loader && showroomrents.length == 0 && <div className="row">
                    <div className="col-md-12 col-sm-12 col-xs-12">
                        <h4 style={{ margin: "0", textAlign: 'center', fontFamily: 'Source Sans Pro, sans-serif' }}><b>No Room for rent</b> </h4>
                    </div>
                </div>} */}
                {categoroyOfRoom && categoroyOfRoom.length > 0 ?
                    categoroyOfRoom.map((elem, key) => {
                        return (
                            <div>
                                <li>{elem}<span class="close"
                                    onClick={removeValue.bind(this, 'category', elem)}
                                >x</span></li>
                            </div>)
                    })
                    : null}
                {stateOfRoom && stateOfRoom.length > 0 ?
                    stateOfRoom.map((elem, key) => {
                        return (
                            <div>
                                <li>{elem}<span class="close"
                                    onClick={removeValue.bind(this, 'state', elem)}
                                >x</span></li>
                            </div>)
                    })
                    : null}
                {cityOfRoom && cityOfRoom.length > 0 ?
                    cityOfRoom.map((elem, key) => {
                        return (
                            <div>
                                <li>{elem}<span class="close"
                                    onClick={removeValue.bind(this, 'city', elem)}
                                >x</span></li>
                            </div>)
                    })
                    : null}
                {accomodatesOfRoom && accomodatesOfRoom.length > 0 ?
                    accomodatesOfRoom.map((elem, key) => {
                        return (
                            <div>
                                <li>{elem}<span class="close"
                                    onClick={removeValue.bind(this, 'accommodates', elem)}
                                >x</span></li>
                            </div>)
                    })
                    : null}

                {showroomrents.length > 0 && <div className="row exploreRent">
                    <div className="col-md-12 col-sm-12 col-xs-12">
                        <h4 style={{ margin: "0", fontFamily: 'Source Sans Pro, sans-serif' }}><b>Top Available Buy</b> </h4>
                        <br />
                    </div>
                </div>}
                <div className="">
                    <div className="row" style={{ marginTop: '-4%' }}>
                        {/*<div className="col-md-3" onClick={() => {this.clickItem()}}>
                            <img alt='' src='./images/blank-card.png' style={{border: '1px solid #3a252542', height: '387px', width: '100%', borderRadius: '17px'}}/>
                        </div>*/}
                        {notFoundFilterData && filteredData.length == 0 ?
                            <div>
                                <p>
                                    No Record Found
                                </p>
                                <button
                                    onClick={showAllRooms}
                                >Back</button>
                            </div>
                            :
                            filteredData && filteredData.map((elem, key) => {
                                let str = elem.propertylocation || '';
                                if (str.length > 35) {
                                    str = str.substring(0, 35);
                                    str = str + '...'
                                }
                                return (
                                    <Link key={key} to={{ pathname: `/detail_roomRent`, state: elem }}>
                                        <div className="col-md-4 col-sm-6 col-xs-12 mobileMargBotom">
                                            <img src={elem.imageurl.length ? elem.imageurl[0] : './images/def_card_img.jpg'} className="img-responsive list_img imGCard" />
                                            <div className="row" style={{ padding: "0" }}>
                                                <div className="col-md-12" style={{ padding: "0" }}>
                                                    <div className="col-md-6 col-sm-5 col-xs-5">
                                                        <div className="pricingroomExplore">
                                                            {'$' + elem.rent + ' ' + elem.pricemode}
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 col-sm-7 col-xs-7">
                                                        <span className="rentstarExplore">
                                                            <Rate disabled
                                                                style={{ paddingBottom: '20px', marginTop: "-20px", fontFamily: 'Source Sans Pro, sans-serif', fontSize: "12px" }}
                                                                allowHalf value={elem.star}
                                                            />
                                                            {elem.star}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="roomdetailcardExplore">
                                                <p style={{ fontFamily: 'Poppins, sans-serif' }}>
                                                    {elem.postingtitle.slice(0, 23)}..
                                            </p>
                                                <p style={{ fontFamily: 'Poppins, sans-serif' }}>
                                                    <span className="glyphicon glyphicon-map-marker"
                                                        style={{ color: "#008080", margin: "0", left: "-3px" }}
                                                    ></span>
                                                    <span>
                                                        <b>{elem.propertylocation.slice(0, 35)}..</b></span>
                                                    <br />
                                                </p>
                                            </div>
                                            <table id="customers">
                                                <tr>
                                                    <td><span className="fa fa-inbox"
                                                        style={{ color: "#236A4B", margin: "0", left: "-3px" }}
                                                    ></span><span>{elem.furnished.slice(0, 11)}</span></td>

                                                    <td><span className="fa fa-users"
                                                        style={{ color: "#236A4B", margin: "0", left: "-3px" }}
                                                    ></span><span>{elem.accomodates} People</span></td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <span className="fa fa-shower" style={{ color: "#236A4B", margin: "0", left: "-3px" }}>
                                                        </span>
                                                        <span>Bathroom</span>
                                                    </td>
                                                    <td>
                                                        <span className="fa fa-bed" style={{ color: "#236A4B", margin: "0", left: "-3px" }}>
                                                        </span>
                                                        <span>{elem.subSubCategory}</span>
                                                    </td>
                                                </tr>
                                            </table>
                                        </div>
                                    </Link>
                                )
                            })
                        }
                        {notFoundFilterData == false && filteredData.length == 0 && showRecord ?
                            showroomrents && showroomrents.map((elem, key) => {
                                let str = elem.propertylocation || '';
                                if (str.length > 35) {
                                    str = str.substring(0, 35);
                                    str = str + '...'
                                }
                                return (
                                    <Link key={key} to={{ pathname: `/detail_roomRent`, state: elem }}>
                                        <div className="col-md-4 col-sm-6 col-xs-12 mobileMargBotom">
                                            <img src={elem.imageurl.length ? elem.imageurl[0] : './images/def_card_img.jpg'} className="img-responsive list_img imGCard" />
                                            <div className="row" style={{ padding: "0" }}>
                                                <div className="col-md-12" style={{ padding: "0" }}>
                                                    <div className="col-md-6 col-sm-5 col-xs-5">
                                                        <div className="pricingroomExplore">
                                                            {'$' + elem.rent + ' ' + elem.pricemode}
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 col-sm-7 col-xs-7">
                                                        <span className="rentstarExplore">
                                                            <Rate disabled
                                                                style={{ paddingBottom: '20px', marginTop: "-20px", fontFamily: 'Source Sans Pro, sans-serif', fontSize: "12px" }}
                                                                allowHalf value={elem.star}
                                                            />
                                                            {elem.star}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="roomdetailcardExplore">
                                                <p style={{ fontFamily: 'Poppins, sans-serif' }}>
                                                    {elem.postingtitle.slice(0, 23)}..
                                            </p>
                                                <p style={{ fontFamily: 'Poppins, sans-serif' }}>
                                                    <span className="glyphicon glyphicon-map-marker"
                                                        style={{ color: "#008080", margin: "0", left: "-3px" }}
                                                    ></span>
                                                    <span>
                                                        <b>{elem.propertylocation.slice(0, 35)}..</b></span>
                                                    <br />
                                                </p>
                                            </div>
                                            <table id="customers">
                                                <tr>
                                                    <td><span className="fa fa-inbox"
                                                        style={{ color: "#236A4B", margin: "0", left: "-3px" }}
                                                    ></span><span>{elem.furnished.slice(0, 11)}</span></td>

                                                    <td><span className="fa fa-users"
                                                        style={{ color: "#236A4B", margin: "0", left: "-3px" }}
                                                    ></span><span>{elem.accomodates} People</span></td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <span className="fa fa-shower" style={{ color: "#236A4B", margin: "0", left: "-3px" }}>
                                                        </span>
                                                        <span>Bathroom</span>
                                                    </td>
                                                    <td>
                                                        <span className="fa fa-bed" style={{ color: "#236A4B", margin: "0", left: "-3px" }}>
                                                        </span>
                                                        <span>{elem.subSubCategory}</span>
                                                    </td>
                                                </tr>
                                            </table>
                                        </div>
                                    </Link>
                                )
                            })
                            : null
                        }
                    </div>
                    {/* {this.state.loader && <div className="col-md-12" style={{ textAlign: 'center', marginBottom: '20px', marginLeft: '-50px' }}>
                        <Spin indicator={antIcon} />
                    </div>} */}
                    {/* {(showroomrents.length >= 7) && !(showroomrents.length === roomrents.length) &&
                        <div className="col-md-12" style={{ textAlign: "center" }}>
                            <button type="button" className="btn btn-success" onClick={this.onAddMore} style={{ backgroundColor: "#37a99b", backgroundImage: "none", borderColor: "#37a99b" }}>View More ...
                        </button>
                        </div>
                    } */}
                </div>
            </section>
        )
    }
}

export default Roomrenting1content;
