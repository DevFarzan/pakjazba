import React, { Component } from 'react';
import { Cascader, Button } from 'antd';
import stateCities from "../../../lib/countrycitystatejson";

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
                <div className="col-md-3 col-sm-6">
                        <Cascader
                            style={{ width: '100%' }} options={type} onChange={this.onChange.bind(this)}
                            placeholder="Select type"
                        />
                    </div>
                    <div className="col-md-4 col-sm-6">
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
                    {/* <div className="col-md-3 col-sm-6">
                        <Cascader
                            // value={cityOfRoom}
                            style={{ width: '100%' }} options={cities} onChange={this.onChangeCity.bind(this)}
                            placeholder="Select city after select state"
                        />
                    </div> */}
                    <div className="col-md-2 col-sm-6">
                        <Button className="btn insidebutton" style={{ width: '100%' }}>
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

export default JobTabs;