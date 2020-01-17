import React, { Component } from 'react';
import { Cascader, Pagination, Slider, Spin, Icon, Rate, Row, Col, Input, Button, Checkbox } from 'antd';
import "./roomrenting2content.css";
import { connect } from "react-redux";
import stateCities from "../../lib/countrycitystatejson";

const category = [{
    value: 'Property to rent',
    label: 'Property to rent',
    children: [{
        value: 'Single Family Home',
        label: 'Single Family Home',
    },
    {
        value: 'Appartment',
        label: 'Apartment',
    }, {
        value: 'Condo',
        label: 'Condo',
    }, {
        value: 'Town house',
        label: 'Town house',
    }, {
        value: 'Homes',
        label: 'Homes',
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

}];

class Roomrentingtwocontentarea extends Component {
    constructor(props) {
        super(props)
        this.state = {
            states: [],
            eachState: '',
            citiess: [],
            category: '',
            minValue: '',
            maxValue: ''
        }
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        this.stateAndCities();
    }

    stateAndCities() {
        let states = stateCities.getStatesByShort('US');
        states = states.map((elem) => {
            return {
                label: elem,
                value: elem
            }
        })
        this.setState({
            states: states,
        })
    }


    onChangeState(value) {
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
            this.props.getState(value)
        }
    }

    onChangeCity(value) {
        this.props.getCities(value)
    }


    onChangeMin = (e) => {
        this.setState({
            minValue: e.target.value
        })
    }

    onChangeMax = (e) => {
        this.setState({
            maxValue: e.target.value
        })
    }

    filterRoomWithPrice = () => {
        const { minValue, maxValue } = this.state
        this.props.filterRoomWithMinToMax(minValue, maxValue)
        this.setState({
            minValue: '',
            maxValue: ''
        })
    }

    render() {
        const { states, cities, } = this.state;
        const { onChange, onChangeCheckBoxes,  stateOfRoom, cityOfRoom, accomodatesOfRoom, categoryRoom} = this.props;

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
                                            <Cascader
                                                value={categoryRoom}
                                                style={{ width: '100%' }} options={category} onChange={onChange.bind(this)}
                                                placeholder="Please select category" />
                                        </div>

                                    </div>
                                </div>
                                <div className="row">
                                    <div class="col-md-12 col-sm-12 spacing">
                                        <h3 className="col-md-12"><b>Location</b></h3>
                                        <div className="col-md-12 col-sm-12 col-xs-12">
                                            <Cascader
                                                value={stateOfRoom}
                                                style={{ width: '100%' }} options={states} onChange={this.onChangeState.bind(this)}
                                                placeholder="Please select state" /></div>
                                        <div className="col-md-12 col-sm-12 col-xs-12" style={{ marginTop: '2vw', }}>
                                            <Cascader
                                                value={cityOfRoom}
                                                style={{ width: '100%' }} options={cities} onChange={this.onChangeCity.bind(this)}
                                                placeholder="Please select city after select state" /></div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <h3 className="col-md-12"><b>Accommodates</b></h3>
                                        <div className="row" style={{ padding: '0px' }}>
                                            <div className="col-xs-10 col-md-10"></div>
                                            <Checkbox.Group style={{ width: '100%' }}
                                                value={accomodatesOfRoom}
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
                                        </div>
                                    </div>
                                    <div class="col-md-12 col-sm-12 spacing hidden-xs" style={{ marginTop: '2vw' }}>
                                        <h3 className="col-md-12"><b>Price</b></h3>
                                        <div size="large" style={{ marginLeft: '10px' }}>
                                            <Row gutter={8}>
                                                <Col span={8}>
                                                    <Input
                                                        placeholder="Min"
                                                        onChange={this.onChangeMin}
                                                        type="Number"
                                                    />
                                                </Col>
                                                <Col span={8}>
                                                    <Input
                                                        onChange={this.onChangeMax}
                                                        placeholder="Max"
                                                        type="Number"
                                                    />
                                                </Col>
                                                <Col>
                                                    <Button type="primary" icon="caret-right"
                                                        onClick={this.filterRoomWithPrice}
                                                    />
                                                </Col>
                                            </Row>
                                        </div>
                                        {/* <Slider range min={0} max={1000} step={1} tipFormatter={this.formatter} defaultValue={[0, 1000]} onChange={this.onChangeSlider.bind(this)} />
                                            <p>Value: <span id="demo">{'$' + to + ' ' + 'to $' + from}</span></p> */}
                                    </div>
                                    <div class="col-xs-12 spacing visible-xs">
                                        <div className="row">
                                            <div class="col-xs-1"></div>
                                            <div class="col-xs-10">
                                                <span>Price</span>
                                                <div size="large" style={{ marginLeft: '10px' }}>
                                                    <Row gutter={8}>
                                                        <Col span={8}>
                                                            <Input
                                                                placeholder="Min"
                                                                onChange={this.onChangeMin}
                                                                type="Number"
                                                            />
                                                        </Col>
                                                        <Col span={8}>
                                                            <Input
                                                                onChange={this.onChangeMax}
                                                                type="Number"
                                                                placeholder="Max"
                                                            />
                                                        </Col>
                                                        <Col>
                                                            <Button type="primary" icon="caret-right"
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
