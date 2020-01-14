import React, { Component } from 'react';
import { Cascader, Pagination, Slider, Spin, Icon, Rate, Row, Col, Input, Button, Checkbox } from 'antd';
import Burgermenu from '../header/burgermenu'
import "./roomrenting2content.css";
import { Link, BrowserRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Redirect, withRouter } from 'react-router';
import stateCities from "../../lib/countrycitystatejson";


//const stateCities= require('countrycitystatejson')

const category = [{
    value: 'Property to rent',
    label: 'Property to rent',
    children: [{
        value: 'Single Family Home',
        label: 'Single Family Home',
        // children: [{
        //     value: '1 Bed',
        //     label: '1 Bed',
        // }, {
        //     value: '2 Beds',
        //     label: '2 Beds',
        // }, {
        //     value: '3 Beds',
        //     label: '3 Beds',
        // }, {
        //     value: '4+ Beds',
        //     label: '4+ Beds',
        // }],
    },
    {
        value: 'Appartment',
        label: 'Apartment',
        // children: [{
        //     value: '1 Bed',
        //     label: '1 Bed',
        // }, {
        //     value: '2 Beds',
        //     label: '2 Beds',
        // }, {
        //     value: '3 Beds',
        //     label: '3 Beds',
        // }, {
        //     value: '4+ Beds',
        //     label: '4+ Beds',
        // }],
    }, {
        value: 'Condo',
        label: 'Condo',
        // children: [{
        //     value: '1 Bed',
        //     label: '1 Bed',
        // }, {
        //     value: '2 Beds',
        //     label: '2 Beds',
        // }, {
        //     value: '3 Beds',
        //     label: '3 Beds',
        // }, {
        //     value: '4+ Beds',
        //     label: '4+ Beds',
        // }],
    }, {
        value: 'Town house',
        label: 'Town house',
        // children: [{
        //     value: '1 Bed',
        //     label: '1 Bed',
        // }, {
        //     value: '2 Beds',
        //     label: '2 Beds',
        // }, {
        //     value: '3 Beds',
        //     label: '3 Beds',
        // }, {
        //     value: '4+ Beds',
        //     label: '4+ Beds',
        // }],
    }, {
        value: 'Homes',
        label: 'Homes',
        // children: [{
        //     value: '1 Bed',
        //     label: '1 Bed',
        // }, {
        //     value: '2 Beds',
        //     label: '2 Beds',
        // }, {
        //     value: '3 Beds',
        //     label: '3 Beds',
        // }, {
        //     value: '4+ Beds',
        //     label: '4+ Beds',
        // }],
    }],
}, {
    value: 'Room to rent',
    label: 'Room to rent',
    children: [{
        value: 'Shared Room',
        label: 'Shared Room',
    }, {
        value: 'Single Room',
        label: 'Single Room',
    }, {
        value: 'Paying Guest',
        label: 'Paying Guest',
    }],
}, {
    value: 'Office & commercial to rent',
    label: 'Office & commercial to rent',
    children: [{
        value: 'Office Space',
        label: 'Office Space',
    }, {
        value: 'Retail Outlet',
        label: 'Retail Outlet',
    }, {
        value: 'Others',
        label: 'Others',
    }],

}
    // , {
    //     value: 'Parking & storage to rent',
    //     label: 'Parking & storage to rent',
    // }
];

class Roomrentingtwocontentarea extends Component {
    constructor(props) {
        super(props)
        this.state = {
            states: [],
            eachState: '',
            citiess: [],
            category: '',
            // roomrents: [],
            // showroomrents: [],
            // filteredArr: [],
            // dropDownVal: [],
            // noText: true,
            // to: 0,
            // from: 1000,
            // bedArr: [],
            // loader: true,
            // add: 6,
            // moreFilter: false
        }
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        // this.getAllBusiness();
        this.stateAndCities();
    }

    stateAndCities(res) {
        // let text = this.props.text;
        // let filter = this.searchArr(res, text)
        let states = stateCities.getStatesByShort('US');
        states = states.map((elem) => {
            return {
                label: elem,
                value: elem
            }
        })
        this.setState({
            // roomrents: res && res,
            states: states,
            // showroomrents: filter ? filter.slice(0, 6) : [],
            // filteredArr: filter ? filter : [],
            // loader: false,
            // add: 6
        })
        // let inputValue = '';
        // if (this.props.text.length) {
        //     const { dispatch } = this.props;
        //     dispatch({ type: 'SEARCHON', inputValue })
        // }
    }


    onChangeState(value) {
        console.log(value, 'value')
        if (!!value.length) {
            let cities = stateCities.getCities('US', value[0])
            cities = cities.map((elem) => {
                return {
                    label: elem,
                    value: elem
                }
            })
            this.setState({
                cities: cities,
                eachState: value[0]
            })
        }
    }

    onChangeCity(value) {
        const { eachState } = this.state;
        this.props.getCitiesAndState(eachState, value[0])
    }



    // formatter(value) {
    //     return `${'$ ' + value}`;
    // }

    // onChangeSlider(value) {
    //     const { roomrents } = this.state;
    //     let data = roomrents.filter((elem) => {
    //         return elem.rent >= value[0] && elem.rent <= value[1]
    //     })
    //     this.setState({
    //         to: value[0],
    //         from: value[1],
    //         filteredArr: data,
    //         showroomrents: data.slice(0, 6),
    //         add: 6
    //     })
    // }

    // checkedBed(e) {
    //     let { bedArr, roomrents } = this.state;
    //     let target = e.target.id;
    //     if (!bedArr.includes(target)) {
    //         bedArr.push(target)
    //         this.setState({ bedArr })
    //     } else {
    //         bedArr = bedArr.filter((elem) => elem !== target)
    //         this.setState({ bedArr })
    //     }
    //     let data = roomrents.filter((elem) => {
    //         return elem.subSubCategory && bedArr.includes(elem.subSubCategory)
    //     })
    //     this.setState({
    //         filteredArr: data,
    //         showroomrents: data.slice(0, 6),
    //         add: 6
    //     })
    // }

    mostPopular() {
        // const { dropDownVal, roomrents } = this.state;
        // let data = roomrents.filter((elem) => {
        //     return (elem.category && elem.category.includes(dropDownVal[0])) ||
        //         (elem.subCategory && elem.subCategory.includes(dropDownVal[1])) ||
        //         (elem.subSubCategory && elem.subSubCategory.includes(dropDownVal[2]))
        // })
        // this.setState({
        //     filteredArr: data,
        //     showroomrents: data.slice(0, 6),
        //     add: 6
        // })
    }

    // componentWillUnmount() {
    //     const { objData, goDetail } = this.state;
    //     if (!(objData && Object.keys(objData).length <= 0) && !goDetail) {
    //         // this.props.history.push('/market_roommates');
    //         // this.props.history.push('/explore');
    //     }
    // }

    // async getAllBusiness() {
    //     if (this.props.text) {
    //         let res = this.props.location.state;
    //         this.stateAndCities(res)
    //     } else {
    //         this.setState({ noText: false, loader: false })
    //     }
    // }



    // searchArr(arr, text) {
    //     let data = arr;
    //     data = data && data.filter((elem) => {
    //         return (elem.category && elem.category.toLowerCase().includes(text.toLowerCase())) ||
    //             (elem.subCategory && elem.subCategory.toLowerCase().includes(text.toLowerCase())) ||
    //             (elem.subSubCategory && elem.subSubCategory.toLowerCase().includes(text.toLowerCase())) ||
    //             (elem.city && elem.city.toLowerCase().includes(text.toLowerCase())) ||
    //             (elem.pricemode && elem.pricemode.toLowerCase().includes(text.toLowerCase())) ||
    //             (elem.furnished && elem.furnished.toLowerCase().includes(text.toLowerCase()))
    //     })
    //     return data;
    // }


    // funcIndexes(page) {
    //     let to = 6 * page;
    //     let from = to - 6;
    //     return { from: page === 1 ? 0 : from, to: page === 1 ? 6 : to }
    // }

    // onChangePage = (page) => {
    //     const { filteredArr } = this.state;
    //     let indexes = this.funcIndexes(page)
    //     this.setState({
    //         current: page,
    //         showroomrents: filteredArr.slice(indexes.from, indexes.to)
    //     });
    // }


    // onAddMore = () => {
    //     const { add, filteredArr, roomrents } = this.state;
    //     if (!!filteredArr.length) {
    //         this.setState({
    //             showroomrents: filteredArr.slice(0, add + 6),
    //             add: add + 6
    //         });
    //     } else {
    //         this.setState({
    //             showroomrents: roomrents.slice(0, add + 6),
    //             add: add + 6
    //         });
    //     }
    // }


    // clickItem(item) {
    //     this.setState({ goDetail: true, objData: item })
    // }

    render() {
        const { states, cities, } = this.state;
        const { onChange, onChangeCheckBoxes } = this.props;

        return (
            <div className="exploreRentFilter">
                <div className="" style={{ width: "100%" }}>
                    <div className="row">
                        <div className="col-md-1 col-sm-1"></div>
                        <div className="">
                            <span className="search-space2">
                                <div className="r ow">
                                    <div className="col-md-12 col-sm-12">
                                        <div className="col-md-12 col-sm-12">
                                            <h3><b>Search By:</b></h3>
                                        </div>
                                        <div className="col-md-12 col-sm-12 search-space1">
                                            <Cascader style={{ width: '100%' }} options={category} onChange={onChange.bind(this)}
                                                placeholder="Please select category" />
                                        </div>

                                    </div>
                                </div>
                                <div className="row">
                                    <div class="col-md-12 col-sm-12 spacing">
                                        <h3 className="col-md-12"><b>Location</b></h3>
                                        <div className="col-md-12 col-sm-12 col-xs-12">
                                            <Cascader style={{ width: '100%' }} options={states} onChange={this.onChangeState.bind(this)}
                                                placeholder="Please select state" /></div>
                                        <div className="col-md-12 col-sm-12 col-xs-12" style={{ marginTop: '2vw', }}>
                                            <Cascader style={{ width: '100%' }} options={cities} onChange={this.onChangeCity.bind(this)}
                                                placeholder="Please select city after select state" /></div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <h3 className="col-md-12"><b>Accommodates</b></h3>
                                        <div className="row" style={{ padding: '0px' }}>
                                            <div className="col-xs-10 col-md-10"></div>
                                            <Checkbox.Group style={{ width: '100%' }}
                                             onChange={onChangeCheckBoxes}
                                            >
                                                <Row>
                                                    <Col span={8}>
                                                        <Checkbox value="1">1</Checkbox>
                                                    </Col>
                                                    <Col span={8}>
                                                        <Checkbox value="2">2</Checkbox>
                                                    </Col>
                                                    <Col span={8}>
                                                        <Checkbox value="3">3</Checkbox>
                                                    </Col>
                                                    <Col span={8}>
                                                        <Checkbox value="4">4</Checkbox>
                                                    </Col>
                                                    <Col span={8}>
                                                        <Checkbox value="5">5</Checkbox>
                                                    </Col>
                                                    <Col span={8}>
                                                        <Checkbox value="6">6</Checkbox>
                                                    </Col>
                                                </Row>
                                            </Checkbox.Group>
                                            <div className="col-xs-2 col-md-2"></div>
                                            {/* <div className="col-xs-2 col-md-2"></div>
                                            <div className="col-xs-2 col-md-2">
                                                <label><input type="checkbox" value="" id='1 Bed' onClick={this.checkedBed.bind(this)} />1</label>
                                            </div>
                                            <div className="col-xs-2 col-md-2">
                                                <label><input type="checkbox" value="" id='2 Beds' onClick={this.checkedBed.bind(this)} />2</label>
                                            </div>
                                            <div className="col-xs-2 col-md-2">
                                                <label><input type="checkbox" value="" id='3 Beds' onClick={this.checkedBed.bind(this)} />3</label>
                                            </div>
                                            <div className="col-xs-2 col-md-2">
                                                <label><input type="checkbox" value="" id='4+ Beds' onClick={this.checkedBed.bind(this)} />4+</label>
                                            </div>
                                            <div className="col-xs-2 col-md-2"></div> */}
                                        </div>
                                    </div>
                                    {/* <div className="col-md-12 col-sm-12 search-space1">
                                        <button
                                            className="btn"
                                            onClick={mostPopular.bind(this)}
                                            style={{ backgroundColor: '#37a99b', color: 'white', width: '100%' }}
                                        >
                                            Search
                                        </button>
                                    </div> */}
                                    <div class="col-md-12 col-sm-12 spacing hidden-xs" style={{ marginTop: '2vw' }}>
                                        <h3 className="col-md-12"><b>Price</b></h3>
                                        {/* <div className="slidecontainer"> */}
                                        <div size="large" style={{ marginLeft: '10px' }}>
                                            <Row gutter={8}>
                                                <Col span={8}>
                                                    <Input
                                                        placeholder="Min"
                                                    // onChange={e => this.setState({ minPrice: e.target.value })}
                                                    />
                                                </Col>
                                                <Col span={8}>
                                                    <Input
                                                        // defaultValue="Max" 
                                                        placeholder="Max"
                                                    // onChange={e => this.setState({ maxPrice: e.target.value })}
                                                    />
                                                </Col>
                                                <Col>
                                                    <Button type="primary" icon="caret-right"
                                                    // onClick={this.props.serachProductMinToMaxPrice.bind(this, minPrice, maxPrice)}
                                                    />
                                                </Col>
                                            </Row>
                                        </div>
                                        {/* <Slider range min={0} max={1000} step={1} tipFormatter={this.formatter} defaultValue={[0, 1000]} onChange={this.onChangeSlider.bind(this)} />
                                            <p>Value: <span id="demo">{'$' + to + ' ' + 'to $' + from}</span></p> */}
                                    </div>
                                    {/* </div> */}
                                    <div class="col-xs-12 spacing visible-xs">
                                        <div className="row">
                                            <div class="col-xs-1"></div>
                                            <div class="col-xs-10">
                                                <span>Price</span>
                                                {/* <div className="slidecontainer" style={{ marginTop: '0px' }}> */}
                                                <div size="large" style={{ marginLeft: '10px' }}>
                                                    <Row gutter={8}>
                                                        <Col span={8}>
                                                            <Input
                                                                placeholder="Min"
                                                            // onChange={e => this.setState({ minPrice: e.target.value })}
                                                            />
                                                        </Col>
                                                        <Col span={8}>
                                                            <Input
                                                                // defaultValue="Max" 
                                                                placeholder="Max"
                                                            // onChange={e => this.setState({ maxPrice: e.target.value })}
                                                            />
                                                        </Col>
                                                        <Col>
                                                            <Button type="primary" icon="caret-right"
                                                            // onClick={this.props.serachProductMinToMaxPrice.bind(this, minPrice, maxPrice)}
                                                            />
                                                        </Col>
                                                    </Row>
                                                </div>
                                                {/* <Slider range min={0} max={1000} step={1} tipFormatter={this.formatter} defaultValue={[0, 1000]} onChange={this.onChangeSlider.bind(this)} />
                                                    <p>Value: <span id="demo">{'$' + to + ' ' + 'to $' + from}</span></p> */}
                                            </div>
                                            {/* </div> */}
                                            <div class="col-xs-1"></div>
                                        </div>
                                    </div>

                                </div>
                            </span>
                        </div>
                    </div>
                    <div className="col-md-1 col-sm-1"></div>
                </div>
                {/* <div className="container" style={{ width: "100%" }}>
                    <div className="col-md-12 col-sm-12 col-xs-12">
                        {!!showroomrents.length === false && <span style={{ textAlign: "center" }}><h3>Not found....</h3></span>}
                        {!!showroomrents.length === false && <span style={{ textAlign: "center" }}><h5>you can find your search by type</h5></span>}
                        {!!showroomrents.length === false && <div className="col-md-12" style={{ textAlign: "center" }}><button type="button" className="btn2 btn2-success" onClick={this.onAddMore}>Go Back</button></div>}
                        {showroomrents && showroomrents.map((elem, key) => {
                            let str = elem.propertylocation || '';
                            if (str.length > 25) {
                                str = str.substring(0, 25);
                                str = str + '...'
                            }
                            return (
                                <div key={key} className="col-lg-3 col-md-3 col-sm-12 space-top">
                                    <div className="secondfold" style={{ backgroundColor: "#ffffff08" }}>
                                        <div className="row">
                                            <div className="" onClick={() => { this.clickItem(elem) }}>
                                                <img src={elem.imageurl.length ? elem.imageurl[0] : "../images/room icon/home_option3.jpg"} class="img-responsive list_img" />
                                                <p style={{ color: 'black' }}>{str}
                                                    <br /><b>{elem.contactname}</b>
                                                    <br />{'$' + elem.rent + ' ' + elem.pricemode}
                                                </p>
                                                <span><Rate disabled style={{ paddingBottom: '20px', marginTop: "-20px", fontFamily: 'Source Sans Pro, sans-serif' }} allowHalf value={elem.star} />{elem.star}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                        {loader && <div className="col-md-12" style={{ textAlign: 'center' }}>
                            <Spin indicator={antIcon} />
                        </div>}
                        {(showroomrents.length >= 6) && !(showroomrents.length === roomrents.length) && <div className="col-md-12" style={{ textAlign: "center" }}><button type="button" className="btn btn-success" onClick={this.onAddMore}>View More ...</button></div>}
                        {/*<div className="col-md-12">
                            <span style={{textAlign:"center"}}><Pagination defaultCurrent={1} defaultPageSize={6} total={!!filteredArr.length ? filteredArr.length :roomrents.length} onChange={this.onChangePage} /></span>
                        </div>
                    </div>
                </div> */}

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return ({
        text: state.text
    })
}

export default connect(mapStateToProps)(Roomrentingtwocontentarea);
