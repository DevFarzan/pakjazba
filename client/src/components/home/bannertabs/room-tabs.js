import React, { Component } from 'react';
import { Cascader, Button } from 'antd';
import stateCities from "../../../lib/countrycitystatejson";
import { Redirect } from "react-router-dom";

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

const accomodates = [
    {
        label: '1',
        value: '1',
    }, {
        label: '2',
        value: '2',
    }, {
        label: '3',
        value: '3',
    }, {
        label: '4',
        value: '4',
    }, {
        label: '5',
        value: '5',
    }, {
        label: '6',
        value: '6',
    }
];
class RoomTabs extends Component {
    constructor(props) {
        super(props)
        this.state = {
            states: [],
            cities: [],
            filterCategoryValue: [],
            dropdownCategoryValue: [],
            eachState: [],
            accomodates: [],
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


    onChange = (value) => {
        let searchValue = [];
        searchValue.push(value[1])
        this.setState({
            filterCategoryValue: searchValue,
            dropdownCategoryValue: value
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
                eachState: value
            })
        }
    }

    onChangeAccomodates(value) {
        this.setState({
            accomodates: value
        })
    }



    routeAndSearchTabs = () => {
        const { filterCategoryValue, dropdownCategoryValue, eachState, cities, accomodates } = this.state;
        let obj = {
            filterCategoryRoom: filterCategoryValue,
            dropdownCategoryRoom: dropdownCategoryValue,
            stateRoom: eachState,
            citiesRoom: cities,
            accomodatesRoom: accomodates,
            keyOfTab: '1',
            homefilter:true
        }
        this.setState({
            valueObj: obj,
            redirectToExplore: true
        })
    }
    render() {
        const { states, valueObj, redirectToExplore } = this.state;
        if (redirectToExplore) {
            return <Redirect to={{ pathname: `explore`, state: valueObj }} />;
        }

        return (
            <div>
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
                                style={{ width: '100%' }} options={accomodates} onChange={this.onChangeAccomodates.bind(this)}
                                placeholder="Select accomodates no"
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
            </div>

        )
    }
}

export default RoomTabs;