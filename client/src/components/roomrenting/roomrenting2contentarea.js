import React, { Component } from 'react';
import { Cascader, Row, Col, Input, Button, Checkbox } from 'antd';
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
        const { onChange, onChangeCheckBoxes, stateOfRoom, cityOfRoom, accomodatesOfRoom, categoryRoom } = this.props;

        return (
            <div>
                <div className="row">
                    
                    <div className="row">
                        <div className="col-md-12 col-sm-12">
                            <p style={{ marginBottom: '5px' }}><b>Category</b></p>
                        </div>
                        <div className="col-md-12 col-sm-12">
                            <Cascader
                                value={categoryRoom}
                                style={{ width: '100%' }} options={category} onChange={onChange.bind(this)}
                                placeholder="Please select category"
                            />
                        </div>
                        <div className="col-md-12 col-sm-12" style={{ marginTop: '1vw' }}>
                            <p style={{ marginBottom: '5px' }}><b>State</b></p>
                        </div>
                        <div className="col-md-12 col-sm-12 col-xs-12">
                            <Cascader
                                value={stateOfRoom}
                                style={{ width: '100%' }} options={states} onChange={this.onChangeState.bind(this)}
                                placeholder="Please select state"
                            />
                        </div>
                        <div className="col-md-12 col-sm-12" style={{ marginTop: '1vw' }}>
                            <p style={{ marginBottom: '5px' }}><b>City</b></p>
                        </div>
                        <div className="col-md-12 col-sm-12 col-xs-12">
                            <Cascader
                                value={cityOfRoom}
                                style={{ width: '100%' }} options={cities} onChange={this.onChangeCity.bind(this)}
                                placeholder="Please select city after select state"
                            />
                        </div>
                        <div className="col-md-12 col-sm-12" style={{ marginTop: '1vw' }}>
                            <p style={{ marginBottom: '5px' }}><b>Accommodates</b></p>
                        </div>
                        <div className="col-md-12 col-sm-12 col-xs-12">
                            <Checkbox.Group style={{ width: '100%' }}
                                value={accomodatesOfRoom}
                                onChange={onChangeCheckBoxes}
                            >
                                <div className="row" style={{ padding: '0' }}>
                                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                        <Col>
                                            <Checkbox value="1">1</Checkbox>
                                        </Col>
                                    </div>
                                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                        <Col>
                                            <Checkbox value="2">2</Checkbox>
                                        </Col>
                                    </div>
                                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                        <Col>
                                            <Checkbox value="3">3</Checkbox>
                                        </Col>
                                    </div>
                                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                        <Col>
                                            <Checkbox value="4">4</Checkbox>
                                        </Col>
                                    </div>
                                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                        <Col>
                                            <Checkbox value="5">5</Checkbox>
                                        </Col>
                                    </div>
                                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                        <Col>
                                            <Checkbox value="6">6</Checkbox>
                                        </Col>
                                    </div>
                                </div>
                            </Checkbox.Group>
                        </div>
                        <div className="col-md-12 col-sm-12" style={{ marginTop: '1vw' }}>
                            <p style={{ marginBottom: '5px' }}><b>Price</b></p>
                        </div>
                        <div className="col-md-12 col-sm-12 hidden-xs">
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
                        </div>
                        <div className="col-xs-12 visible-xs">
                            <div className="row">
                                <div class="col-xs-12">
                                    <div size="large">
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
                                 </div>
                            </div>
                        </div>
                    </div>
                </div>
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
