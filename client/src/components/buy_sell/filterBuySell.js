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

  render() {
    const { states, cities } = this.state;
    return (
      <div className="">
        <div className="container" style={{ width: "100%" }}>
          <div className="filterbox">
            <div className="row">
              <div className="col-md-12">
                <div class="col-md-12 col-sm-12 spacing">
                  <h3 className="col-md-12"><b>Location</b></h3>
                  {/* <div className="col-md-12 col-sm-12 col-xs-12"> */}
                  <Cascader style={{ width: '100%' }} options={states}
                    onChange={this.onChangeState.bind(this)}
                  /></div>
                <div className="col-md-12 col-sm-12 col-xs-12" style={{ marginTop: '2vw', }}>
                  <Cascader style={{ width: '100%' }} options={cities}
                    onChange={this.onChangeCity.bind(this)}
                  /></div>
                {/* </div> */}
                {/* <Search
                  placeholder="Location"
                  onSearch={value => console.log(value)}
                  enterButton
                  style={{width:'100%'}}
                /> */}
              </div>
              <div className="col-md-12">
                {/* <Input placeholder="Condition" style={{ width: '100%', marginTop: '2vw' }} /> */}
                <h3 className="col-md-12"><b>Condition</b></h3>
                <div className="row" style={{ padding: '0px' }}></div>
                <div className="col-xs-10 col-md-10"></div>

                <Checkbox.Group style={{ width: '100%' }}
                //  onChange={onChange}
                >
                  <Row>
                    <Col span={8}>
                      <Checkbox value="New">New</Checkbox>
                    </Col>
                    <Col span={8}>
                      <Checkbox value="Used">Used</Checkbox>
                    </Col>
                    <Col span={8}>
                      <Checkbox value="Good">Good</Checkbox>
                    </Col>
                    <Col span={8}>
                      <Checkbox value="Excellent">Excellent</Checkbox>
                    </Col>
                    <Col span={8}>
                      <Checkbox value="Age-Worn">Age-Worn</Checkbox>
                    </Col>
                    <Col span={8}>
                      <Checkbox value="Refurbished">Refurbished</Checkbox>
                    </Col>
                  </Row>
                </Checkbox.Group>
                <div className="col-xs-2 col-md-2"></div>
              </div>

              <div className="col-md-12 col-sm-12 search-space1">
                <button
                  className="btn"
                  // onClick={this.mostPopular.bind(this)}
                  style={{ backgroundColor: '#37a99b', color: 'white', width: '100%' }}
                >
                  Search
                </button>
              </div>
              <div className="col-md-12">
                <div className="row">
                  <div class="col-xs-1"></div>
                  <div class="col-xs-10">
                    <span>Price</span>
                    {/* <div className="slidecontainer" style={{ marginTop: '0px' }}> */}
                    <div size="large" style={{ marginLeft: '10px' }}>
                      <Row gutter={8}>
                        <Col span={8}>
                          <Input
                            placeholder="Min"
                          // onChange={e => this.setState({ minPrice: e.target.value })}
                          />
                        </Col>
                        <Col span={8}>
                          <Input
                            // defaultValue="Max" 
                            placeholder="Max"
                          // onChange={e => this.setState({ maxPrice: e.target.value })}
                          />
                        </Col>
                        <Col>
                          <Button type="primary" icon="caret-right"
                          // onClick={this.props.serachProductMinToMaxPrice.bind(this, minPrice, maxPrice)}
                          />
                        </Col>
                      </Row>
                    </div>
                    {/* <Slider range min={0} max={1000} step={1} tipFormatter={this.formatter} defaultValue={[0, 1000]} onChange={this.onChangeSlider.bind(this)} />
                                                    <p>Value: <span id="demo">{'$' + to + ' ' + 'to $' + from}</span></p> */}
                  </div>
                  {/* </div> */}
                  <div class="col-xs-1"></div>
                </div>
                {/* <Input placeholder="Price" style={{ width: '100%', marginTop: '2vw' }} /> */}
              </div>
              {/* <div className="col-md-12">
              <Input placeholder="Size" style={{ width: '100%', marginTop: '2vw' }} />
            </div> */}
              {/* <div className="col-md-12">
              <Input placeholder="Category" style={{ width: '100%', marginTop: '2vw' }} />
            </div> */}
              {/* <div className="col-md-12">
              <Cascader options={options} onChange={onChange} placeholder="More Filter" style={{ width: '100%', marginTop: '2vw' }} />
            </div> */}
            </div>
          </div>
          {/* <span>
              <h4 style={{marginTop:"30px", marginBottom:"0px"}}> Suggest For You </h4>
            </span> */}
        </div>

        {/* <BuyFourthFold /> */}
      </div >
    )
  }
}

export default FilterBuySell;
