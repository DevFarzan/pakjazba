import React, { Component } from 'react';
import Burgermenu from '../header/burgermenu';
import BuyFourthFold from './buyforthfold';
import './filterBuySell.css';
import { Input, Cascader, Checkbox, Row, Col, Button } from 'antd';
import stateCities from "../../lib/countrycitystatejson";

const Search = Input.Search;

const options = [{
  value: 'zhejiang',
  label: 'Zhejiang',
  children: [{
    value: 'hangzhou',
    label: 'Hangzhou',
    children: [{
      value: 'xihu',
      label: 'West Lake',
    }],
  }],
}, {
  value: 'jiangsu',
  label: 'Jiangsu',
  children: [{
    value: 'nanjing',
    label: 'Nanjing',
    children: [{
      value: 'zhonghuamen',
      label: 'Zhong Hua Men',
    }],
  }],
}];

function onChange(value) {
  console.log(value);
}

class FilterBuySell extends Component {
  constructor(props) {
    super(props);
    this.state = {
      states: [],
      cities: [],
      eachState: []
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
    const { states, cities } = this.state;
    const { onChangeCheckBoxes, stateOfRoom, cityOfRoom, conditionOfRoom, } = this.props;

    return (
      // <div className="exploreRentFilter">
      //   <div className="row">
      //     <div className="col-md-12 col-sm-12" style={{ textAlign: 'center' }}>
      //       <h3><b>Search By:</b></h3>
      //     </div>
      //     <div className="row">
      //       <div className="col-md-12 col-sm-12">
      //         <p style={{ marginBottom: '5px' }}><b>Category</b></p>
      //       </div>
      //       <div className="col-md-12 col-sm-12">
      //         <Cascader
      //           value={categoryRoom}
      //           options={category} onChange={onChange.bind(this)}
      //           style={{ width: '100%' }}
      //           placeholder="Please Select Category" />
      //       </div>
      //       <div className="col-md-12 col-sm-12" style={{ marginTop: '1vw' }}>
      //         <p style={{ marginBottom: '5px' }}><b>State</b></p>
      //       </div>
      //       <div className="col-md-12 col-sm-12 col-xs-12">
      //         <Cascader
      //           value={stateOfRoom}
      //           style={{ width: '100%' }}
      //           options={states} onChange={this.onChangeState.bind(this)}
      //           placeholder="Please Select State"
      //         />
      //       </div>
      //       <div className="col-md-12 col-sm-12" style={{ marginTop: '1vw' }}>
      //         <p style={{ marginBottom: '5px' }}><b>City</b></p>
      //       </div>
      //       <div className="col-md-12 col-sm-12 col-xs-12">
      //         <Cascader
      //           value={cityOfRoom}
      //           style={{ width: '100%' }}
      //           options={cities} onChange={this.onChangeCity.bind(this)}
      //           placeholder="Please Select City After State"
      //         />
      //       </div>
      //     </div>
      //   </div>
      // </div>
      <div>
        <div className="container" style={{ width: "100%" }}>
          <div className="filterbox">
            <div className="row">
              <div className="col-md-12">
                <div class="col-md-12 col-sm-12 spacing">
                  <h3 className="col-md-12"><b>Location</b></h3>
                  <Cascader
                    value={stateOfRoom}
                    style={{ width: '100%' }}
                    options={states}
                    onChange={this.onChangeState.bind(this)}
                  /></div>
                <div className="col-md-12 col-sm-12 col-xs-12" style={{ marginTop: '2vw', }}>
                  <Cascader
                    value={cityOfRoom}
                    style={{ width: '100%' }} options={cities}
                    onChange={this.onChangeCity.bind(this)}
                  /></div>
              </div>
              <div className="col-md-12">
                <h3 className="col-md-12"><b>Condition</b></h3>
                <Checkbox.Group style={{ width: '100%' }}
                  value={conditionOfRoom}
                  onChange={onChangeCheckBoxes}
                >
                  <div className="row" style={{ padding: '0' }}>
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                      <Col>
                        <Checkbox value="New">New</Checkbox>
                      </Col>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                      <Col>
                        <Checkbox value="Refurbished">Refurbished</Checkbox>
                      </Col>
                    </div>   
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                      <Col>
                        <Checkbox value="Good">Good</Checkbox>
                      </Col>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                      <Col>
                        <Checkbox value="Excellent">Excellent</Checkbox>
                      </Col>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                      <Col>
                        <Checkbox value="Age-Worn">Age-Worn</Checkbox>
                      </Col>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                      <Col>
                        <Checkbox value="Used">Used</Checkbox>
                      </Col>
                    </div>
                    </div>
                </Checkbox.Group>
              </div>
              <div className="col-md-12">
                <div className="row">
                  <div class="col-xs-1"></div>
                  <div class="col-xs-10">
                    <span>Price</span>
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
                          />
                        </Col>
                      </Row>
                    </div>
                  </div>
                  <div class="col-xs-1"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div >
    )
  }
}

export default FilterBuySell;
