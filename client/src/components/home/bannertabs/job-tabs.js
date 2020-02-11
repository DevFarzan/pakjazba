import React, { Component } from 'react';
import { Cascader, Button } from 'antd';
import stateCities from "../../../lib/countrycitystatejson";
import { Redirect } from "react-router-dom";
import './banner-tabs.css';

const type = [
    {
        label: 'Full Time',
        value: 'Full Time',
    }, {
        label: 'Part Time',
        value: 'Part Time',
    }, {
        label: 'Night Shift',
        value: 'Night Shift',
    }
];


const category = [{
    value: 'Accounting',
    label: 'Accounting'
}, {
    value: 'Admin & Clerical',
    label: 'Admin & Clerical',
}, {
    value: 'Banking & Finance',
    label: 'Banking & Finance',
}, {
    value: 'Business Opportunities',
    label: 'Business Opportunities'
}, {
    value: 'Contract & Freelance',
    label: 'Contract & Freelance',
}, {
    value: 'Customer Service',
    label: 'Customer Service',
}, {
    label: 'Diversity Opportunities',
    value: 'Diversity Opportunities',
}, {
    label: 'Engineering',
    value: 'Engineering',
}, {
    value: 'Executive',
    label: 'Executive',
}, {
    value: 'Franchise',
    label: 'Franchise',
}, {
    value: 'Government',
    label: 'Government',
}, {
    value: 'Health Care',
    label: 'Health Care',
}, {
    value: 'Hospitality',
    label: 'Hospitality',
}, {
    value: 'Human Resources',
    label: 'Human Resources',
}, {
    value: 'Information Technology',
    label: 'Information Technology',
}, {
    value: 'Internships & College',
    label: 'Internships & College',
}, {
    value: 'Manufacturing',
    label: 'Manufacturing',
}, {
    value: 'Nonprofit',
    label: 'Nonprofit',
}, {
    value: 'Retail',
    label: 'Retail',
}, {
    value: 'Sales & Marketing',
    label: 'Sales & Marketing',
}, {
    value: 'Science & Biotech',
    label: 'Science & Biotech',
}, {
    value: 'Transportation',
    label: 'Transportation',
}];

class JobTabs extends Component {
    constructor(props) {
        super(props)
        this.state = {
            states: [],
            cities: [],
            filterCategoryValue: [],
            filterTypeValue: [],
            eachState: [],
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
        this.setState({
            filterTypeValue: value
        })
    }

    onChangeCate(value) {
        this.setState({
            filterCategoryValue: value
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

    routeAndSearchTabs = () => {
        const { filterCategoryValue, filterTypeValue, eachState, cities } = this.state;
        let obj = {
            filterCategoryJob: filterCategoryValue,
            filterTypeJob: filterTypeValue,
            stateJob: eachState,
            citiesJob: cities,
            keyOfTab: '4',
            homefilter: true
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

            <div className="row">
                <div className="col-md-12">
                    <h3 className="homeFilterHead">Jobs</h3>
                </div>
                <div className="col-md-12">
                    <div className="col-md-3 col-sm-6">
                        <Cascader
                            style={{ width: '100%' }} options={type} onChange={this.onChange.bind(this)}
                            placeholder="Select type"
                        />
                    </div>
                    <div className="col-md-4 col-sm-6 mobMargTopp">
                        <Cascader
                            style={{ width: '100%' }} options={category} onChange={this.onChangeCate.bind(this)}
                            placeholder="Select category"
                        />
                    </div>
                    <div className="col-md-3 col-sm-6 mobMargTopp">
                        <Cascader
                            style={{ width: '100%' }} options={states} onChange={this.onChangeState.bind(this)}
                            placeholder="Select state"
                        />
                    </div>
                    <div className="col-md-2 col-sm-6 mobMargTopp">
                        <Button className="btn insidebutton submittBtn" onClick={this.routeAndSearchTabs}>
                            <span className="fa fa-search">

                            </span>
                            <span>
                                Submit
                            </span>
                        </Button>
                    </div>
                </div>
            </div>
        )
    }
}

export default JobTabs;