import React, { Component } from 'react';
import { Cascader } from 'antd';
import './CategoriesJobs.css';
import stateCities from "../../lib/countrycitystatejson";

const type = [
      {
          label: 'Full Time',
          value: 'Full Time',
      },{
          label: 'Part Time',
          value: 'Part Time',
      },{
          label: 'Night Shift',
          value: 'Night Shift',
      }
  ];

const categ = [
    {
        label: 'Information Technology',
        value: 'Information Technology',
    },{
        label: 'Banking',
        value: 'Banking',
    },{
        label: 'Accounting',
        value: 'Accounting',
    },
    {
        label: 'Management',
        value: 'Management',
    },{
        label: 'Digital and Creative',
        value: 'Digital and Creative',
    },{
        label: 'Sales and Marketing',
        value: 'Sales and Marketing',
    }
];

class CategoriesjobMarket extends Component{
  constructor(props){
      super(props);
      this.state = {
        typeR: '',
        cat: '',
        states: [],
        cities: [],
      }
      this.clickItem = this.clickItem.bind(this);
  }


  
  componentDidMount() {
    window.scrollTo(0, 0);
    // this.getAllBusiness();
    this.stateAndCities();
  }

  stateAndCities(res) {
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
    }
  }

  onChangeCity(value) {
    // const { roomrents, eachState } = this.state;
    // let data = roomrents.filter((elem) => {
    //     return elem.state === eachState || elem.city === value[0]
    // })
    // this.setState({
    //     filteredArr: data,
    //     showroomrents: data.slice(0, 6),
    //     add: 6
    // })
  }



  onChangeType(value){
      this.setState({typeR: value[0]})
  }

  onChangeCategory(value){
      this.setState({cat: value[0]})
  }

  clickItem(item){
      const { cat, typeR } = this.state;
      let str = typeof(item) == 'string' ? item : {cat, typeR};
      this.props.filteringData(str)
  }

  render(){
    const { states, cities } = this.state;

    // const {typeR, cat} = this.state;
    return(
      <div className="container categoriesbars" style={{width:"100%"}}>
      	<div className="row">
          <div className="col-md-12">
        	    <form className="col-md-12">
        	        <label>Sort By:</label>
        	        <Cascader style={{width: '100%'}} options={type} onChange={this.onChangeType.bind(this)} placeholder="Please select" />
        	    </form>
              <form className="col-md-12">
        	        <label>Categoies:</label>
        	        <Cascader style={{width: '100%'}} options={categ} onChange={this.onChangeCategory.bind(this)} placeholder="Please select" />
        	    </form>

              <div className="row">
                <div class="col-md-12 col-sm-12 spacing">
                    <h3 className="col-md-12"><b>Location</b></h3>
                    <div className="col-md-12 col-sm-12 col-xs-12">
                        <Cascader style={{ width: '100%' }} options={states} onChange={this.onChangeState.bind(this)} /></div>
                    <div className="col-md-12 col-sm-12 col-xs-12" style={{ marginTop: '2vw', }}>
                        <Cascader style={{ width: '100%' }} options={cities} onChange={this.onChangeCity.bind(this)} /></div>
                </div>
              </div>
              <div className="col-md-12">
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
              </div>
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
            </div>
        </div>
      </div>

    )
  }
}

export default CategoriesjobMarket;
