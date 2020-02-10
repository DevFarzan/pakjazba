import React, { Component } from 'react';
import { Cascader } from 'antd';
import './CategoriesJobs.css';
import stateCities from "../../lib/countrycitystatejson";

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

class CategoriesjobMarket extends Component {
  constructor(props) {
    super(props);
    this.state = {
      typeR: '',
      cat: '',
      eachState: '',
      states: [],
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

  sortType(value) {
    this.props.getSortType(value)
  }
  
  onChangeCategory(value) {
    this.setState({ cat: value[0] })
  }


  render() {
    const { states, cities } = this.state;
    const { onChange, categoroyOfJob, stateOfJob, cityOfJob, TypeOfJob } = this.props;
    return (
      <div>
        <div className="">
          <div className="row">
            <div className="row">
              <div className="col-md-12 col-sm-12">
                <p style={{ marginBottom: '5px' }}><b>Sort By Type</b></p>
              </div>
              <div className="col-md-12 col-sm-12">
                <Cascader
                  value={TypeOfJob}
                  style={{ width: '100%' }}
                  options={type}
                  onChange={this.sortType.bind(this)}
                  placeholder="Please select type"
                />
              </div>
              <div className="col-md-12 col-sm-12" style={{ marginTop: '1vw' }}>
                <p style={{ marginBottom: '5px' }}><b>Category</b></p>
              </div>
              <div className="col-md-12 col-sm-12">
                <Cascader
                  value={categoroyOfJob}
                  style={{ width: '100%' }}
                  options={category}
                  onChange={onChange}
                  placeholder="Please select category"
                />
              </div>
              <div className="col-md-12 col-sm-12" style={{ marginTop: '1vw' }}>
                <p style={{ marginBottom: '5px' }}><b>State</b></p>
              </div>
              <div className="col-md-12 col-sm-12 col-xs-12">
                <Cascader
                  value={stateOfJob}
                  style={{ width: '100%' }}
                  options={states}
                  onChange={this.onChangeState.bind(this)}
                  placeholder="Please select state"
                />
              </div>
              <div className="col-md-12 col-sm-12" style={{ marginTop: '1vw' }}>
                <p style={{ marginBottom: '5px' }}><b>City</b></p>
              </div>
              <div className="col-md-12 col-sm-12 col-xs-12">
                <Cascader
                  value={cityOfJob}
                  style={{ width: '100%' }}
                  options={cities}
                  onChange={this.onChangeCity.bind(this)}
                  placeholder="Please select city"
                />
              </div>
            </div>
          </div>
        </div>
      
      </div>
    )
  }
}

export default CategoriesjobMarket;