import React, { Component } from 'react';
import { Cascader } from 'antd';
import "./BusinesListFilterContent.css";
import { connect } from "react-redux";
import stateCities from "../../lib/countrycitystatejson";


const category = [{
    value: 'Advertising Agency',
    label: 'Advertising Agency'
}, {
    value: 'Answering Service',
    label: 'Answering Service',
}, {
    value: 'Audio Visual Equipment Hire',
    label: 'Audio Visual Equipment Hire',
}, {
    value: 'Branding Consultant',
    label: 'Branding Consultant'
}, {
    value: 'Business Advisor',
    label: 'Business Advisor',
}, {
    value: 'Business Consultant',
    label: 'Business Consultant',
}, {
    label: 'Business Franchise Consultant',
    value: 'Business Franchise Consultant',
}, {
    label: 'Business Training Service',
    value: 'Business Training Service',
}, {
    value: 'Car Body Shop',
    label: 'Car Body Shop',
}, {
    value: 'Car Detailer',
    label: 'Car Detailer',
}, {
    value: 'Car Sales Showroom',
    label: 'Car Sales Showroom',
}, {
    value: 'Caterer',
    label: 'Caterer',
}, {
    value: 'Charity',
    label: 'Charity',
}, {
    value: 'Chauffeur',
    label: 'Chauffeur',
}, {
    value: 'Chef',
    label: 'Chef',
}, {
    value: 'Clothing Supplier',
    label: 'Clothing Supplier',
}, {
    value: 'Computer Networks Installer',
    label: 'Computer Networks Installer',
}, {
    value: 'Computer Repair Centre',
    label: 'Computer Repair Centre',
}, {
    value: 'Computer Software Developer',
    label: 'Computer Software Developer',
}, {
    value: 'Computer Software Sales',
    label: 'Computer Software Sales',
}, {
    value: 'Computer Training Provider',
    label: 'Computer Training Provider',
}, {
    value: 'Concierge',
    label: 'Concierge',
}, {
    value: 'Copywriter',
    label: 'Copywriter',
}, {
    value: 'Courier',
    label: 'Courier',
}, {
    value: 'Custom Clothing Company',
    label: 'Custom Clothing Company',
}, {
    value: 'Data Cabling Installer',
    label: 'Data Cabling Installer',
}, {
    value: 'Detective Agency',
    label: 'Detective Agency'
}, {
    value: 'Email Marketing Service',
    label: 'Email Marketing Service',
}, {
    value: 'Executive Coach',
    label: 'Executive Coach',
}, {
    value: 'Fire Safety Training Provider',
    label: 'Fire Safety Training Provider',
}, {
    value: 'Furniture Shop',
    label: 'Furniture Shop',
}, {
    value: 'Graphic Designer',
    label: 'Graphic Designer',
}, {
    value: 'Hotel',
    label: 'Hotel',
}, {
    value: 'Human Resources Consultant',
    label: 'Human Resources Consultant',
}, {
    value: 'Illustrator',
    label: 'Illustrator',
}, {
    value: 'Information Technology Consultant',
    label: 'Information Technology Consultant',
}, {
    value: 'Internet Marketing Consultant',
    label: 'Internet Marketing Consultant',
}, {
    value: 'Internet Service Provider',
    label: 'Internet Service Provider',
}, {
    value: 'IT Support Services',
    label: 'IT Support Services',
}, {
    value: 'Language Tutor',
    label: 'Language Tutor',
}, {
    value: 'Leadership Development Consultant',
    label: 'Leadership Development Consultant',
}, {
    value: 'Limousine Service',
    label: 'Limousine Service',
}, {
    value: 'Local Magazine or Directory',
    label: 'Local Magazine or Directory',
}, {
    value: 'Mailing Service',
    label: 'Mailing Service',
}, {
    value: 'Management Consultant',
    label: 'Management Consultant',
}, {
    value: 'Market Research Agency',
    label: 'Market Research Agency',
}, {
    value: 'Marketing Consultant',
    label: 'Marketing Consultant',
}, {
    value: 'Mediation Service',
    label: 'Mediation Service',
}, {
    value: 'Mobile Phone Supplier',
    label: 'Mobile Phone Supplier',
}, {
    value: 'Office Equipment Leasing',
    label: 'Office Equipment Leasing',
}, {
    value: 'Office Furnisher',
    label: 'Office Furnisher',
}, {
    value: 'Office Machines Company',
    label: 'Office Machines Company',
}, {
    value: 'Office Products Supplier',
    label: 'Office Products Supplier',
}, {
    value: 'Personal Assistant',
    label: 'Personal Assistant',
}, {
    value: 'Printer',
    label: 'Printer',
}, {
    value: 'Printer Ink Cartridges Supplier',
    label: 'Printer Ink Cartridges Supplier',
}, {
    value: 'Professional Organiser',
    label: 'Professional Organiser',
}, {
    value: 'Professional Speaker',
    label: 'Professional Speaker',
}, {
    value: 'Promotional Goods Supplier',
    label: 'Promotional Goods Supplier',
}, {
    value: 'Public Relations Agency',
    label: 'Public Relations Agency',
}, {
    value: 'Public Speaking Coach',
    label: 'Public Speaking Coach',
}, {
    value: 'Publicist',
    label: 'Publicist',
}, {
    value: 'Radio Station',
    label: 'Radio Station',
}, {
    value: 'Recruitment Agency',
    label: 'Recruitment Agency',
}, {
    value: 'Restaurant',
    label: 'Restaurant',
}, {
    value: 'Sales Training Consultant',
    label: 'Sales Training Consultant',
}, {
    value: 'Search Engine Optimisation Consultant',
    label: 'Search Engine Optimisation Consultant',
}, {
    value: 'Security Guarding Agency',
    label: 'Security Guarding Agency',
}, {
    value: 'Security Personnel Agency',
    label: 'Security Personnel Agency',
}, {
    value: 'Shop Fitter',
    label: 'Shop Fitter',
}, {
    value: 'Sign Company',
    label: 'Sign Company',
}, {
    value: 'Social Media Marketing Agency',
    label: 'Social Media Marketing Agency',
}, {
    value: 'Solicitor',
    label: 'Solicitor',
}, {
    value: 'Storage Facility',
    label: 'Storage Facility',
}, {
    value: 'Tailor',
    label: 'Tailor',
}, {
    value: 'Taxi Service',
    label: 'Taxi Service',
}, {
    value: 'Telecommunications Service',
    label: 'Telecommunications Service',
}, {
    value: 'Telemarketing Service',
    label: 'Telemarketing Service',
}, {
    value: 'Tour Operator',
    label: 'Tour Operator',
}, {
    value: 'Translator',
    label: 'Translator',
}, {
    value: 'Trophie Supplier',
    label: 'Trophie Supplier',
}, {
    value: 'Utilities Broker',
    label: 'Utilities Broker',
}, {
    value: 'Vending Machine Supplier',
    label: 'Vending Machine Supplier',
}, {
    value: 'Video Production Service',
    label: 'Video Production Service',
}, {
    value: 'Virtual Assistant',
    label: 'Virtual Assistant',
}, {
    value: 'Water Cooler Supplier',
    label: 'Water Cooler Supplier',
}, {
    value: 'Web Designer',
    label: 'Web Designer',
}, {
    value: 'Web Developer',
    label: 'Web Developer',
}, {
    value: 'Web Hosting Provider',
    label: 'Web Hosting Provider',
}, {
    value: 'Writer',
    label: 'Writer',
}];


class BusinesListFilterContent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            states: [],
            eachState: '',
            cities: [],
        }
    }


    componentDidMount() {
        window.scrollTo(0, 0);
        this.stateAndCities();
        let data = this.props.cities;
        if (data) {
            this.setState({
                cities: data
            })
        }
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


    render() {
        const { states, cities } = this.state;
        const { onChange, stateOfBusniess, cityOfRoom, categoryBusniess } = this.props;
        console.log(cities, 'cities')
        return (
            <div className="">
                <div className="row">
                    <div className="row">
                        <div className="col-md-12 col-sm-12">
                            <p style={{ marginBottom: '5px' }}><b>Category</b></p>
                        </div>
                        <div className="col-md-12 col-sm-12">
                            <Cascader
                                value={categoryBusniess}
                                options={category} onChange={onChange.bind(this)}
                                style={{ width: '100%' }}
                                placeholder="Please Select Category" />
                        </div>
                        <div className="col-md-12 col-sm-12" style={{ marginTop: '1vw' }}>
                            <p style={{ marginBottom: '5px' }}><b>State</b></p>
                        </div>
                        <div className="col-md-12 col-sm-12 col-xs-12">
                            <Cascader
                                value={stateOfBusniess}
                                style={{ width: '100%' }}
                                options={states} onChange={this.onChangeState.bind(this)}
                                placeholder="Please Select State"
                            />
                        </div>
                        <div className="col-md-12 col-sm-12" style={{ marginTop: '1vw' }}>
                            <p style={{ marginBottom: '5px' }}><b>City</b></p>
                        </div>
                        <div className="col-md-12 col-sm-12 col-xs-12">
                            <Cascader
                                value={cityOfRoom}
                                style={{ width: '100%' }}
                                options={cities} onChange={this.onChangeCity.bind(this)}
                                placeholder="Please Select City After State"
                            />
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

export default connect(mapStateToProps)(BusinesListFilterContent);
