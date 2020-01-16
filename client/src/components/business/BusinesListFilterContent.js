import React, { Component } from 'react';
import { Cascader, Pagination, Slider, Spin, Icon, Rate } from 'antd';
import Burgermenu from '../header/burgermenu'
import "./BusinesListFilterContent.css";
import { Link, BrowserRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Redirect, withRouter } from 'react-router';
import stateCities from "../../lib/countrycitystatejson";


//const stateCities= require('countrycitystatejson')
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
            citiess: [],
            // roomrents: [],
            // showroomrents: [],
            // filteredArr: [],
            // dropDownVal: [],
            // noText: true,
            // to: 0,
            // from: 1000,
            // bedArr: [],
            // loader: true,
            // add: 6,
            // moreFilter: false
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


    // componentDidMount() {
    //     window.scrollTo(0, 0);
    //     // this.getAllBusiness();
    //     this.stateAndCities()
    // }

    // stateAndCities() {
    //     let states = stateCities.getStatesByShort('US');
    //     states = states.map((elem) => {
    //         return {
    //             label: elem,
    //             value: elem
    //         }
    //     })
    //     this.setState({
    //         states: states,
    //     })
    // }

    // // onChange(value) {
    // //     this.setState({ dropDownVal: value })
    // // }

    // onChangeState(value) {
    //     if (!!value.length) {
    //         let cities = stateCities.getCities('US', value[0])
    //         cities = cities.map((elem) => {
    //             return {
    //                 label: elem,
    //                 value: elem
    //             }
    //         })
    //         this.setState({
    //             cities: cities,
    //             eachState: value[0]
    //         })
    //     }
    // }


    // onChangeCity(value) {
    //     //     const { roomrents, eachState } = this.state;
    //     //     let data = roomrents.filter((elem) => {
    //     //         return elem.state === eachState || elem.city === value[0]
    //     //     })
    //     //     this.setState({
    //     //         filteredArr: data,
    //     //         showroomrents: data.slice(0, 6),
    //     //         add: 6
    //     //     })
    // }


    // mostPopular() {
    //     //     const { dropDownVal, roomrents } = this.state;
    //     //     let data = roomrents.filter((elem) => {
    //     //         return (elem.category && elem.category.includes(dropDownVal[0])) ||
    //     //             (elem.subCategory && elem.subCategory.includes(dropDownVal[1])) ||
    //     //             (elem.subSubCategory && elem.subSubCategory.includes(dropDownVal[2]))
    //     //     })
    //     //     this.setState({
    //     //         filteredArr: data,
    //     //         showroomrents: data.slice(0, 6),
    //     //         add: 6
    //     //     })
    // }


    // componentWillUnmount() {
    //     const { objData, goDetail } = this.state;
    //     if (!(objData && Object.keys(objData).length <= 0) && !goDetail) {
    //         // this.props.history.push('/market_roommates');
    //         // this.props.history.push('/explore');
    //     }
    // }

    // async getAllBusiness() {

    //     if (this.props.text) {
    //         console.log('get state')
    //         let res = this.props.location.state;
    //         this.stateAndCities(res)
    //     } else {
    //         this.setState({ noText: false, loader: false })
    //     }
    // }


    // searchArr(arr, text) {
    //     let data = arr;
    //     data = data && data.filter((elem) => {
    //         return (elem.category && elem.category.toLowerCase().includes(text.toLowerCase())) ||
    //             (elem.subCategory && elem.subCategory.toLowerCase().includes(text.toLowerCase())) ||
    //             (elem.subSubCategory && elem.subSubCategory.toLowerCase().includes(text.toLowerCase())) ||
    //             (elem.city && elem.city.toLowerCase().includes(text.toLowerCase())) ||
    //             (elem.pricemode && elem.pricemode.toLowerCase().includes(text.toLowerCase())) ||
    //             (elem.furnished && elem.furnished.toLowerCase().includes(text.toLowerCase()))
    //     })
    //     return data;
    // }



    // funcIndexes(page) {
    //     let to = 6 * page;
    //     let from = to - 6;
    //     return { from: page === 1 ? 0 : from, to: page === 1 ? 6 : to }
    // }

    // onChangePage = (page) => {
    //     const { filteredArr } = this.state;
    //     let indexes = this.funcIndexes(page)
    //     this.setState({
    //         current: page,
    //         showroomrents: filteredArr.slice(indexes.from, indexes.to)
    //     });
    // }

    // formatter(value) {
    //     return `${'$ ' + value}`;
    // }

    // onAddMore = () => {
    //     const { add, filteredArr, roomrents } = this.state;
    //     if (!!filteredArr.length) {
    //         this.setState({
    //             showroomrents: filteredArr.slice(0, add + 6),
    //             add: add + 6
    //         });
    //     } else {
    //         this.setState({
    //             showroomrents: roomrents.slice(0, add + 6),
    //             add: add + 6
    //         });
    //     }
    // }

    // onChangeSlider(value) {
    //     const { roomrents } = this.state;
    //     let data = roomrents.filter((elem) => {
    //         return elem.rent >= value[0] && elem.rent <= value[1]
    //     })
    //     this.setState({
    //         to: value[0],
    //         from: value[1],
    //         filteredArr: data,
    //         showroomrents: data.slice(0, 6),
    //         add: 6
    //     })
    // }

    // checkedBed(e) {
    //     let { bedArr, roomrents } = this.state;
    //     let target = e.target.id;
    //     if (!bedArr.includes(target)) {
    //         bedArr.push(target)
    //         this.setState({ bedArr })
    //     } else {
    //         bedArr = bedArr.filter((elem) => elem !== target)
    //         this.setState({ bedArr })
    //     }
    //     let data = roomrents.filter((elem) => {
    //         return elem.subSubCategory && bedArr.includes(elem.subSubCategory)
    //     })
    //     this.setState({
    //         filteredArr: data,
    //         showroomrents: data.slice(0, 6),
    //         add: 6
    //     })
    // }

    // clickItem(item) {
    //     this.setState({ goDetail: true, objData: item })
    // }

    render() {
        const { states, cities } = this.state;
        const { onChange, onChangeCheckBoxes, categoroyOfRoom, stateOfRoom, cityOfRoom, accomodatesOfRoom, categoryRoom } = this.props;

        // const antIcon = <Icon type="loading" style={{ fontSize: 120 }} spin />;
        // console.log(states, 'states')
        // if (!noText) {
        //     // return <Redirect to='/market_roommates'/>
        //     // return <Redirect to='/explore'/>
        // }
        // if (goDetail) {
        //     return <Redirect to={{ pathname: `/detail_roomRent`, state: objData }} />
        // }
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
                                            <Cascader
                                                value={categoryRoom}
                                                options={category} onChange={onChange.bind(this)}
                                                style={{ width: '100%' }}
                                                placeholder="Please select" />
                                        </div>

                                        {/* <div className="col-md-12 col-sm-12 search-space1">
                                <button
                                    className="btn"
                                    onClick={this.mostPopular.bind(this)}
                                    style={{backgroundColor:'#37a99b', color:'white',width:'100%'}}
                                >
                                    Search
                                </button> */}
                                        {/* <button
                                    className="btn"
                                    style={{backgroundColor:'#37a99b', color:'white', marginLeft:'17px'}}
                                    onClick={() => {this.setState({moreFilter: !this.state.moreFilter})}}
                                >
                                    More Filter
                                </button> */}
                                        {/*<button className="btn btn-filter" onClick={this.mostPopular.bind(this)} style={{backroundColor:"rgb(55, 169, 155)"}}>Search</button>
                                <button className="btn btn-filter" style={{backroundColor:'rgb(55, 169, 155) !important',color:'white',marginLeft:'23px'}}>More Filter</button>*/}
                                        {/* </div> */}
                                    </div>
                                </div>

                                {/* {this.state.moreFilter && <div className="row"> */}
                                <div className="row">
                                    <div class="col-md-12 col-sm-12 spacing">
                                        <h3 className="col-md-12"><b>Location</b></h3>
                                        <div className="col-md-12 col-sm-12 col-xs-12">
                                            <Cascader
                                                value={stateOfRoom}
                                                style={{ width: '100%' }}
                                                options={states} onChange={this.onChangeState.bind(this)}
                                            /></div>
                                        <div className="col-md-12 col-sm-12 col-xs-12" style={{ marginTop: '2vw', }}>
                                            <Cascader
                                                value={cityOfRoom}
                                                style={{ width: '100%' }}
                                                options={cities} onChange={this.onChangeCity.bind(this)}
                                            /></div>
                                    </div>
                                    {/* <div className="col-md-12">
                                        <h3 className="col-md-12"><b>Beds:</b></h3>
                                        <div className="row" style={{ padding: '0px' }}>
                                            <div className="col-xs-2 col-md-2"></div>
                                            <div className="col-xs-2 col-md-2">
                                                <label><input type="checkbox" value="" id='1 Bed' onClick={this.checkedBed.bind(this)} />1</label>
                                            </div>
                                            <div className="col-xs-2 col-md-2">
                                                <label><input type="checkbox" value="" id='2 Beds' onClick={this.checkedBed.bind(this)} />2</label>
                                            </div>
                                            <div className="col-xs-2 col-md-2">
                                                <label><input type="checkbox" value="" id='3 Beds' onClick={this.checkedBed.bind(this)} />3</label>
                                            </div>
                                            <div className="col-xs-2 col-md-2">
                                                <label><input type="checkbox" value="" id='4+ Beds' onClick={this.checkedBed.bind(this)} />4+</label>
                                            </div>
                                            <div className="col-xs-2 col-md-2"></div>
                                        </div>
                                    </div> */}

                                    {/* <div className="col-md-12 col-sm-12 search-space1">
                                        <button
                                            className="btn"
                                            onClick={this.mostPopular.bind(this)}
                                            style={{ backgroundColor: '#37a99b', color: 'white', width: '100%' }}
                                        >
                                            Search
                                        </button>
                                    </div> */}

                                    {/* <div class="col-md-12 col-sm-12 spacing hidden-xs" style={{ marginTop: '2vw' }}>
                                        <h3 className="col-md-12"><b>Price</b></h3>
                                        <div className="slidecontainer">
                                            <Slider range min={0} max={1000} step={1} tipFormatter={this.formatter} defaultValue={[0, 1000]} onChange={this.onChangeSlider.bind(this)} />
                                            <p>Value: <span id="demo">{'$' + to + ' ' + 'to $' + from}</span></p>
                                        </div>
                                    </div> */}

                                    {/* <div class="col-xs-12 spacing visible-xs">
                                        <div className="row">
                                            <div class="col-xs-1"></div>
                                            <div class="col-xs-10">
                                                <span>Price</span>
                                                <div className="slidecontainer" style={{ marginTop: '0px' }}>
                                                    <Slider range min={0} max={1000} step={1} tipFormatter={this.formatter} defaultValue={[0, 1000]} onChange={this.onChangeSlider.bind(this)} />
                                                    <p>Value: <span id="demo">{'$' + to + ' ' + 'to $' + from}</span></p>
                                                </div>
                                            </div>
                                            <div class="col-xs-1"></div>
                                        </div>
                                    </div> */}

                                </div>
                            </span>
                        </div>
                    </div>
                    <div className="col-md-1 col-sm-1"></div>
                </div>
                {/* <div className="container" style={{ width: "100%" }}>
                    <div className="col-md-12 col-sm-12 col-xs-12">
                        {!!showroomrents.length === false && <span style={{ textAlign: "center" }}><h3>Not found....</h3></span>}
                        {!!showroomrents.length === false && <span style={{ textAlign: "center" }}><h5>you can find your search by type</h5></span>}
                        {!!showroomrents.length === false && <div className="col-md-12" style={{ textAlign: "center" }}><button type="button" className="btn2 btn2-success" onClick={this.onAddMore}>Go Back</button></div>}
                        {showroomrents && showroomrents.map((elem, key) => {
                            let str = elem.propertylocation || '';
                            if (str.length > 25) {
                                str = str.substring(0, 25);
                                str = str + '...'
                            }
                            return (
                                <div key={key} className="col-lg-3 col-md-3 col-sm-12 space-top">
                                    <div className="secondfold" style={{ backgroundColor: "#ffffff08" }}>
                                        <div className="row">
                                            <div className="" onClick={() => { this.clickItem(elem) }}>
                                                <img src={elem.imageurl.length ? elem.imageurl[0] : "../images/room icon/home_option3.jpg"} class="img-responsive list_img" />
                                                <p style={{ color: 'black' }}>{str}
                                                    <br /><b>{elem.contactname}</b>
                                                    <br />{'$' + elem.rent + ' ' + elem.pricemode}
                                                </p>
                                                <span><Rate disabled style={{ paddingBottom: '20px', marginTop: "-20px", fontFamily: 'Source Sans Pro, sans-serif' }} allowHalf value={elem.star} />{elem.star}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                        {loader && <div className="col-md-12" style={{ textAlign: 'center' }}>
                            <Spin indicator={antIcon} />
                        </div>}
                        {(showroomrents.length >= 6) && !(showroomrents.length === roomrents.length) && <div className="col-md-12" style={{ textAlign: "center" }}><button type="button" className="btn btn-success" onClick={this.onAddMore}>View More ...</button></div>}
                        {/*<div className="col-md-12">
                            <span style={{textAlign:"center"}}><Pagination defaultCurrent={1} defaultPageSize={6} total={!!filteredArr.length ? filteredArr.length :roomrents.length} onChange={this.onChangePage} /></span>
                        </div>
                    </div>
                </div> */}

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
