import React, { Component } from 'react';
import { Cascader, Pagination, Slider, Spin, Icon, Rate, Row, Col, Input, Button, Checkbox } from 'antd';
import "./eventFilterContent.css";
import { Redirect, withRouter } from 'react-router';
import stateCities from "../../lib/countrycitystatejson";


const category = [{
    value: 'art/film',
    label: 'art/film'
}, {
    value: 'career',
    label: 'career',
}, {
    value: 'charitable',
    label: 'charitable',
}, {
    value: 'competition',
    label: 'competition'
}, {
    value: 'dance',
    label: 'dance',
}, {
    value: 'fest/fair',
    label: 'fest/fair',
}, {
    label: 'fitness/health',
    value: 'fitness/health',
}, {
    label: 'food/drink',
    value: 'food/drink',
}, {
    value: 'free',
    label: 'free',
}, {
    value: 'kid friendly',
    label: 'kid friendly',
}, {
    value: 'literary',
    label: 'literary',
}, {
    value: 'music',
    label: 'music',
}, {
    value: 'outdoor',
    label: 'outdoor',
}, {
    value: 'sale',
    label: 'sale',
}, {
    value: 'singles',
    label: 'singles',
}, {
    value: 'tech',
    label: 'tech',
}];

class EventFilterContent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            states: [],
            eachState: '',
            citiess: []
        }
    }

    componentDidMount() {
        window.scrollTo(0, 0);
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
        //     const { roomrents, eachState } = this.state;
        //     let data = roomrents.filter((elem) => {
        //         return elem.state === eachState || elem.city === value[0]
        //     })
        //     this.setState({
        //         filteredArr: data,
        //         showroomrents: data.slice(0, 6),
        //         add: 6
        //     })
    }

    
    mostPopular() {
     
    }

    render() {
        const { states, noText, showroomrents, roomrents, filteredArr, cities, to, from, loader, objData, goDetail } = this.state;
        const antIcon = <Icon type="loading" style={{ fontSize: 120 }} spin />;
        if (!noText) {
            // return <Redirect to='/market_roommates'/>
            // return <Redirect to='/explore'/>
        }
        if (goDetail) {
            return <Redirect to={{ pathname: `/detail_roomRent`, state: objData }} />
        }
        return (
            <div className="exploreRentFilter">
                {/*<Burgermenu/>*/}
                <div className="" style={{ width: "100%" }}>
                    <div className="row">
                        <div className="col-md-1 col-sm-1"></div>
                        <div className="">
                            <span className="search-space2">
                                <div className="r ow">
                                    <div className="col-md-12 col-sm-12">
                                        <div className="col-md-12 col-sm-12">
                                            <h3><b>Search By:</b></h3>
                                        </div>
                                        <div className="col-md-12 col-sm-12 search-space1">
                                            <Cascader style={{ width: '100%' }} options={category} 
                                            // onChange={this.onChange.bind(this)} 
                                            placeholder="Please select" />
                                        </div>
                                    </div>
                                </div>

                                {/* {this.state.moreFilter && <div className="row"> */}
                                <div className="row">

                                    <div class="col-md-12 col-sm-12 spacing">
                                        <h3 className="col-md-12"><b>Location</b></h3>
                                        <div className="col-md-12 col-sm-12 col-xs-12">
                                            <Cascader style={{ width: '100%' }} options={states} onChange={this.onChangeState.bind(this)} /></div>
                                        <div className="col-md-12 col-sm-12 col-xs-12" style={{ marginTop: '2vw', }}>
                                            <Cascader style={{ width: '100%' }} options={cities} onChange={this.onChangeCity.bind(this)} /></div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12 col-sm-12 search-space1">
                                        <button
                                            className="btn"
                                            onClick={this.mostPopular.bind(this)}
                                            style={{ backgroundColor: '#37a99b', color: 'white', width: '100%' }}
                                        >
                                            Search
                                        </button>
                                    </div>
                                    {/* <div class="col-md-12 col-sm-12 spacing hidden-xs" style={{ marginTop: '2vw' }}>
                                        <h3 className="col-md-12"><b>Price</b></h3>
                                        {/* <div className="slidecontainer"> 
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
                                    </div> */}
                                   

                                </div>
                            </span>
                        </div>
                    </div>
                    <div className="col-md-1 col-sm-1"></div>
                </div>
            </div>
        )
    }
}

export default EventFilterContent;