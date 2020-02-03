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
    // this.clickItem = this.clickItem.bind(this);
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

  sortType(value) {
    // console.log(value,'value sdasdasdasd')
    this.props.getSortType(value)
  }
  // CategoryFilter(value){
  //   console.log(value,'value sdasdasdasd')
  //   this.props.onChange(value)
  // }
  // onChangeCity(value) {
  //   // const { roomrents, eachState } = this.state;
  //   // let data = roomrents.filter((elem) => {
  //   //     return elem.state === eachState || elem.city === value[0]
  //   // })
  //   // this.setState({
  //   //     filteredArr: data,
  //   //     showroomrents: data.slice(0, 6),
  //   //     add: 6
  //   // })
  // }



  // onChangeType(value) {
  //   this.setState({ typeR: value[0] })
  // }

  onChangeCategory(value) {
    this.setState({ cat: value[0] })
  }

  clickItem(item) {
    const { cat, typeR } = this.state;
    let str = typeof (item) == 'string' ? item : { cat, typeR };
    this.props.filteringData(str)
  }

  render() {
    const { states, cities } = this.state;
    const { getSortType, onChange, categoroyOfJob, categoryJob, stateOfJob, cityOfJob, TypeOfJob } = this.props;
    // const {typeR, cat} = this.state;
    return (
      <div>
        <div className="exploreRentFilter">
          <div className="row">
            <div className="col-md-12 col-sm-12" style={{ textAlign: 'center' }}>
              <h3><b>Search By:</b></h3>
            </div>
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
                <p style={{ marginBottom: '5px'}}><b>Category</b></p>
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
        {/* <div className="container categoriesbars" style={{ width: "100%" }}>
        <div className="row">
          <div className="col-md-12">
            <form className="col-md-12">
              <label>Sort By:</label>
              <Cascader
                value={TypeOfJob}
                style={{ width: '100%' }}
                options={type}
                onChange={this.sortType.bind(this)}
                placeholder="Please select"
              />
            </form>
            <form className="col-md-12">
              <label>Categoies:</label>
              <Cascader
                value={categoroyOfJob}
                style={{ width: '100%' }}
                options={category}
                onChange={onChange}
                placeholder="Please select"
              />
            </form>

            <div className="row">
              <div class="col-md-12 col-sm-12 spacing">
                <h3><b>Location</b></h3>

                <Cascader
                  value={stateOfJob}
                  style={{ width: '100%' }}
                  options={states}
                  onChange={this.onChangeState.bind(this)}
                  placeholder="Please select state"
                />

                <Cascader
                  value={cityOfJob}
                  style={{ marginTop: '2vw', width: '100%' }}
                  options={cities}
                  onChange={this.onChangeCity.bind(this)}
                  placeholder="Please select city"
                />
              </div>
            </div>
          </div>
        </div>
      </div> */}
      </div>
    )
  }
}

export default CategoriesjobMarket;

{/* <div className="col-md-12">
    <div className="input-group">
      <label>Search:</label>
        <div className="flex">
          <button
              type="button"
              className="btn btn-sm btn2-success
              font-style"
              style={{backgroundColor:"#8cbc40"}}
              onClick={this.clickItem}
          >
              Search
          </button>
        </div>
    </div>
  </div> */}
{/* <div className="col-md-12">
    <div className="custom-row">
        <label>Keywords:</label>
        <div className="marginLeft">
          <div className="col-md-12 col-sm-12">
          <button type="button" className="btn btn-sm btn3-success font-style" onClick={() => {this.clickItem('Content Writer')}}>
              Content Writer
          </button>
          </div>
          <div className="col-md-12 col-sm-12">
            <button type="button" className="btn btn-sm btn3-success font-style" onClick={() => {this.clickItem('IT Specialist')}}>
                IT Specialist
            </button>
          </div>
          <div className="col-md-12 col-sm-12">
            <button type="button" className="btn btn-sm btn3-success font-style" onClick={() => {this.clickItem('Web Developer')}}>
                Web Developer
            </button>
          </div>
          <div className="col-md-12 col-sm-12">
            <button type="button" className="btn btn-sm btn3-success font-style" onClick={() => {this.clickItem('Business management')}}>
                Business management
            </button>
          </div>
        </div>
    </div>
  </div> */}