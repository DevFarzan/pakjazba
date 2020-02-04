import React, { Component } from 'react';
import { Cascader, Button } from 'antd';
import stateCities from "../../../lib/countrycitystatejson";
import {  Redirect } from "react-router-dom";

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

class RoomTabs extends Component {
    constructor(props) {
        super(props)
        this.state = {
            states: [],
            citiess: [],
            filterCategoryValue: [],
            dropdownCategoryValue: [],
            eachState: [],
            eachCity: [],
            keyOfTab: '',
            valueObj: '',
            redirectToExplore: false
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
        console.log(value, 'VALUES')
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
                eachState: value
            })
        }
    }

    onChangeCity(value) {
        this.setState({
            eachCity: value
        })
    }


    onChange = (value) => {
        let searchValue = [];
        searchValue.push(value[1])
        this.setState({
            filterCategoryValue: searchValue,
            dropdownCategoryValue: value
        })
    }

    routeAndSearchTabs = () => {
        const { filterCategoryValue, dropdownCategoryValue, eachState, eachCity } = this.state;
        let obj = {
            filterCategory: filterCategoryValue,
            dropdownCategory: dropdownCategoryValue,
            state: eachState,
            city: eachCity,
            keyOfTab: '1'
        }
        this.setState({
            valueObj: obj,
            redirectToExplore: true
        })

    }
    render() {
        const { states, cities, valueObj, redirectToExplore } = this.state;
        if(redirectToExplore){
            return <Redirect to={{ pathname: `explore` , state: valueObj }} />;
        }

        return (

            <div className="row">
                <div className="col-md-12">
                    <div className="col-md-3 col-sm-6">
                        <Cascader
                            style={{ width: '100%' }} options={category} onChange={this.onChange.bind(this)}
                            placeholder="Select category"
                        />
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <Cascader
                            style={{ width: '100%' }} options={states} onChange={this.onChangeState.bind(this)}
                            placeholder="Select state"
                        />
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <Cascader
                            // value={cityOfRoom}
                            style={{ width: '100%' }} options={cities} onChange={this.onChangeCity.bind(this)}
                            placeholder="Select city after select state"
                        />
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <Button className="btn insidebutton" style={{ width: '100%' }} onClick={this.routeAndSearchTabs}>
                            <span className="fa fa-search">

                            </span>
                            <span>

                                Submit</span>
                        </Button>
                    </div>
                </div>
            </div>
        )
    }
}

export default RoomTabs;