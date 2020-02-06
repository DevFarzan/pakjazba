import React, { Component } from 'react';
import { Cascader, Button } from 'antd';
import stateCities from "../../../lib/countrycitystatejson";

const condition = [
    {
        label: 'New',
        value: 'New',
    }, {
        label: 'Refurbished',
        value: 'Refurbished',
    }, {
        label: 'Good',
        value: 'Good',
    }, {
        label: 'Excellent',
        value: 'Excellent',
    }, {
        label: 'Age-Worn',
        value: 'Age-Worn',
    }, {
        label: 'Used',
        value: 'Used',
    }
];

class BuyTab extends Component {
    constructor(props) {
        super(props)
        this.state = {
            states: [],
            eachState: '',
            citiess: [],
            category: '',

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
            // this.props.getState(value)
        }
    }

    onChangeCity(value) {
        // this.props.getCities(value)
    }


    onChange = (value) => {
        console.log(value, 'e value')
    }

    render() {
        const { states, cities } = this.state;
        return (

            <div className="row">
                <div className="col-md-12">
                    {/* <div className="col-md-3 col-sm-6">
                        <Cascader
                            style={{ width: '100%' }} options={category} onChange={this.onChange.bind(this)}
                            placeholder="Please select category"
                        />
                    </div> */}
                    <div className="col-md-3 col-sm-6">
                        <Cascader
                            // value={cityOfRoom}
                            style={{ width: '100%' }} options={condition} onChange={this.onChangeCity.bind(this)}
                            placeholder="Select condition"
                        />
                    </div>
                    <div className="col-md-5 col-sm-6">
                        <Cascader
                            style={{ width: '100%' }} options={states} onChange={this.onChangeState.bind(this)}
                            placeholder="Please select state"
                        />
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <Button className="btn insidebutton" style={{ width: '100%' }}>
                            <span className="fa fa-search">

                            </span>
                            <span>

                                Submit</span>
                        </Button>
                        <div className="col-md-3 col-sm-6">

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BuyTab;