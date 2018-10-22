import React, { Component } from 'react';
import { Cascader, Pagination, Slider, Spin, Icon } from 'antd';
import Burgermenu from '../header/burgermenu'
import "./roomrenting2content.css";
import {Link, BrowserRouter} from "react-router-dom";
import {connect} from "react-redux";
import { Redirect, withRouter } from 'react-router';
import stateCities from "../../lib/countrycitystatejson";


//const stateCities= require('countrycitystatejson')

const category = [{
    value: 'Property to rent',
    label: 'Property to rent',
    children: [{
        value: 'Single Family Home',
        label: 'Single Family Home',
        children: [{
            value: '1 Bed',
            label: '1 Bed',
        },{
            value: '2 Beds',
            label: '2 Beds',
        },{
            value: '3 Beds',
            label: '3 Beds',
        },{
            value: '4+ Beds',
            label: '4+ Beds',
        }],
    },
        {
            value:'Appartment',
            label:'Apartment',
            children: [{
                value: '1 Bed',
                label: '1 Bed',
            },{
                value: '2 Beds',
                label: '2 Beds',
            },{
                value: '3 Beds',
                label: '3 Beds',
            },{
                value: '4+ Beds',
                label: '4+ Beds',
            }],
        },{
            value:'Condo',
            label:'Condo',
            children: [{
                value: '1 Bed',
                label: '1 Bed',
            },{
                value: '2 Beds',
                label: '2 Beds',
            },{
                value: '3 Beds',
                label: '3 Beds',
            },{
                value: '4+ Beds',
                label: '4+ Beds',
            }],
        },{
            value:'Town house',
            label:'Town house',
            children: [{
                value: '1 Bed',
                label: '1 Bed',
            },{
                value: '2 Beds',
                label: '2 Beds',
            },{
                value: '3 Beds',
                label: '3 Beds',
            },{
                value: '4+ Beds',
                label: '4+ Beds',
            }],
        },{
            value:'Homes',
            label:'Homes',
            children: [{
                value: '1 Bed',
                label: '1 Bed',
            },{
                value: '2 Beds',
                label: '2 Beds',
            },{
                value: '3 Beds',
                label: '3 Beds',
            },{
                value: '4+ Beds',
                label: '4+ Beds',
            }],
        }],
},{
    value: 'Room to rent',
    label: 'Room to rent',
    children: [{
        value: 'Shared Room',
        label: 'Shared Room',
    },{
        value:'Single Room',
        label:'Single Room',
    },{
        value:'Paying Guest',
        label:'Paying Guest',
    }],
},{
    value:'Office & commercial to rent',
    label:'Office & commercial to rent',
    children:[{
        value:'Office Space',
        label:'Office Space',
    },{
        value:'Retail Outlet',
        label:'Retail Outlet',
    },{
        value:'Others',
        label:'Others',
    }],

},{
    value:'Parking & storage to rent',
    label:'Parking & storage to rent',
}];

class Roomrentingtwocontentarea extends Component{
    constructor(props) {
        super(props)
        this.state = {
            states: [],
            eachState: '',
            citiess: [],
            roomrents: [],
            showroomrents: [],
            filteredArr: [],
            dropDownVal: [],
            noText: true,
            to: 0,
            from: 6000,
            bedArr: [],
            loader: true,
            add: 6
        }
    }

    componentDidMount(){
        window.scrollTo(0,0);
        this.getAllBusiness();
    }

    componentWillUnmount() {
        this.props.history.push('/market_roommates');
    }

    async getAllBusiness(){
        if(this.props.text){
            let res = this.props.location.state;
            this.stateAndCities(res)
        }else {
            this.setState({ noText: false, loader: false })
        }
    }

    stateAndCities(res){
        let text = this.props.text;
        let filter = this.searchArr(res, text)
        let states = stateCities.getStatesByShort('US');
        states = states.map((elem) => {
            return {
                label: elem,
                value: elem
            }
        })
        this.setState({
            roomrents: res && res,
            states: states,
            showroomrents: filter.slice(0, 6),
            filteredArr: filter,
            loader: false,
            add: 6
        })
        let inputValue = '';
        if(this.props.text.length){
            const { dispatch } = this.props;
            dispatch({type: 'SEARCHON', inputValue})
        }
    }

    searchArr(arr, text){
        let data = arr;
        data = data.filter((elem) => {
            return (elem.category && elem.category.toLowerCase().includes(text.toLowerCase())) ||
                (elem.subCategory && elem.subCategory.toLowerCase().includes(text.toLowerCase())) ||
                (elem.subSubCategory && elem.subSubCategory.toLowerCase().includes(text.toLowerCase())) ||
                (elem.city && elem.city.toLowerCase().includes(text.toLowerCase())) ||
                (elem.pricemode && elem.pricemode.toLowerCase().includes(text.toLowerCase())) ||
                (elem.furnished && elem.furnished.toLowerCase().includes(text.toLowerCase()))
        })
        return data;
    }

    onChange(value){
        this.setState({dropDownVal: value})
    }

    mostPopular(){
        const { dropDownVal, roomrents } = this.state;
        let data = roomrents.filter((elem) => {
            return (elem.category && elem.category.includes(dropDownVal[0])) ||
                (elem.subCategory && elem.subCategory.includes(dropDownVal[1])) ||
                (elem.subSubCategory && elem.subSubCategory.includes(dropDownVal[2]))
        })
        this.setState({
            filteredArr: data,
            showroomrents: data.slice(0, 6),
            add: 6
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

    onChangeCity(value){
        const { roomrents, eachState } = this.state;
        let data = roomrents.filter((elem) => {
            return elem.state === eachState || elem.city === value[0]
        })
        this.setState({
            filteredArr: data,
            showroomrents: data.slice(0, 6),
            add: 6
        })
    }

    funcIndexes(page){
        let to = 6 * page;
        let from = to - 6;
        return {from: page === 1 ? 0 : from, to: page === 1 ? 6 : to}
    }

    onChangePage = (page) => {
        const { filteredArr } = this.state;
        let indexes = this.funcIndexes(page)
        this.setState({
            current: page,
            showroomrents: filteredArr.slice(indexes.from, indexes.to)
        });
    }

    formatter(value){
        return `${'$ ' + value}`;
    }

    onAddMore = () => {
        const { add, filteredArr } = this.state;
        this.setState({
            showroomrents: filteredArr.slice(0, add + 6),
            add: add + 6
        });
    }

    onChangeSlider(value){
        const { roomrents } = this.state;
        let data = roomrents.filter((elem) => {
            return elem.rent >= value[0] && elem.rent <= value[1]
        })
        this.setState({
            to: value[0],
            from: value[1],
            filteredArr: data,
            showroomrents: data.slice(0, 6),
            add: 6
        })
    }

    checkedBed(e){
        let { bedArr, roomrents } = this.state;
        let target = e.target.id;
        if(!bedArr.includes(target)){
            bedArr.push(target)
            this.setState({bedArr})
        }else {
            bedArr = bedArr.filter((elem) =>  elem !== target)
            this.setState({bedArr})
        }
        let data = roomrents.filter((elem) => {
            return elem.subSubCategory && bedArr.includes(elem.subSubCategory)
        })
        this.setState({
            filteredArr: data,
            showroomrents: data.slice(0, 6),
            add: 6
        })
    }

	render(){
        const { states, noText, showroomrents, roomrents, filteredArr, cities, to, from, loader } = this.state;
        const antIcon = <Icon type="loading" style={{ fontSize: 120 }} spin />;

        if(!noText){
            return <Redirect to='/market_roommates'/>
        }

		return(
            <div>
		    <Burgermenu/>
            <div className="countainer">
                <div className="head-bg">
                    <div className="col-md-12">
                        <h2 className="head-space">Rent List Page </h2>
                    </div>
                </div>
                <div className="col-md-1 col-sm-1">
                </div>
                <div className="col-md-10 col-sm-10 search-space search-space2">
                    <div className="col-md-2 col-sm-2">
                        <h4><b> Search By:</b></h4>
                    </div>
                    <div className="col-md-6 col-sm-6 search-space1">
                        <Cascader style={{width: '100%'}} options={category} onChange={this.onChange.bind(this)} placeholder="Please select" />
                    </div>
                    <div className="col-md-2 col-sm-2 search-space1">
                        <button className="btn search-btn" onClick={this.mostPopular.bind(this)}> Most Popular</button>
                    </div>
                </div>
                <div className="col-md-1 col-sm-1">
                </div>
                <div className="col-md-12 col-sm-12 main-space">
                    <div className="col-md-2 col-sm-12 col-xs-12">
                        <h3><span className="glyphicon glyphicon-usd"></span> Price Rating </h3>
                        <div className="slidecontainer">
                            <Slider range min={0} max={6000} step={500} tipFormatter={this.formatter} defaultValue={[0, 6000]} onChange={this.onChangeSlider.bind(this)}/>
                            <p>Value: <span id="demo">{'$' + to + ' ' + 'to $' + from}</span></p>
                        </div>
                        <br/>
                        <h3><span className="glyphicon glyphicon-map-marker"></span> Location </h3>
                        <div className="checkbox">
                            <Cascader options={states} onChange={this.onChangeState.bind(this)}/>
                        </div>
                        <div className="checkbox">
                            <Cascader options={cities} onChange={this.onChangeCity.bind(this)}/>
                        </div>
                        <br/>
                        <h3><span className="glyphicon glyphicon-bed"></span> Bedrooms</h3>
                        <div className="checkbox">
                            <label><input type="checkbox" value="" id='1 Bed' onClick={this.checkedBed.bind(this)}/>1 Bed</label>
                        </div>
                        <div className="checkbox">
                            <label><input type="checkbox" value="" id='2 Beds' onClick={this.checkedBed.bind(this)}/>2 Beds</label>
                        </div>
                        <div className="checkbox">
                            <label><input type="checkbox" value="" id='3 Beds' onClick={this.checkedBed.bind(this)}/>3 Beds</label>
                        </div>
                        <div className="checkbox">
                            <label><input type="checkbox" value="" id='4+ Beds' onClick={this.checkedBed.bind(this)}/>4+ Beds</label>
                        </div>
                        <br/>
                        <h3><span className="glyphicon glyphicon-map-marker"></span> On the Map</h3>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3621.6337348509687!2d67.03749541472551!3d24.807992284078704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33da992be1aa7%3A0x7646411a2d8e6ac5!2sKRL+Creatives!5e0!3m2!1sen!2s!4v1536302761580"
                            width="180" height="200" frameBorder="0" style={{"border": "0"}} allowFullScreen></iframe>
                    </div>
                    <div className="col-md-10 col-sm-12 col-xs-12">
                        {showroomrents && showroomrents.map((elem, key) => {
                            let str = elem.propertylocation || '';
                            if(str.length > 25) {
                                str = str.substring(0, 25);
                                str = str + '...'
                            }
                            let des = elem.discription || '';
                            if(des.length > 100) {
                                des = des.substring(0, 100);
                                des = des + '...'
                            }
                            return(
                                <div key={key} className="col-lg-4 col-md-4 col-sm-12 space-top">
                                    <div className="secondfold" style={{backgroundColor:"#ffffff08"}}>
                                        <div className="row">
                                            <Link to={{pathname: `/detail_roomRent`, state: elem}}>
                                                <div className="">
                                                    <div className="ibox">
                                                        <div className="ibox-content product-box">
                                                            <div className="product-imitation">
                                                                <div className="card2">
                                                                    <img alt='' src={elem.imageurl.length ? elem.imageurl[0] : './images/def_card_img.jpg'}/>
                                                                    <span className="card-button">
                                                                        <p className="categories-on-card">{elem.category}</p>
                                                                        <i className="glyphicon glyphicon-map-marker"/><p className="text">{elem.state +" & "+ elem.city}</p>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                            <div className="cust-margin">
                                                                <i className="glyphicon glyphicon-home"/>
                                                                <p className="text">{str}</p>
                                                            </div>
                                                            <div className="product-desc">
                                                                <span className="product-price">{elem.rent}</span>
                                                                <small className="text-muted">Category</small>
                                                                <a className="product-name">{elem.category}</a>
                                                                <div className="small m-t-xs">{des}</div>
                                                                <div className="m-t text-righ">
                                                                    <Link to={{pathname: `/detail_roomRent`, state: elem}} className="btn btn-xs btn-outline btn-primary">Info <i className="fa fa-long-arrow-right"></i> </Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                        {loader && <div className="col-md-12" style={{textAlign: 'center'}}>
                            <Spin indicator={antIcon} />
                        </div>}
                        <div className="col-md-12" style={{textAlign:"center"}}><button type="button" className="btn btn-success" onClick={this.onAddMore}>View More ...</button></div>
                        {/*<div className="col-md-12">
                            <span style={{textAlign:"center"}}><Pagination defaultCurrent={1} defaultPageSize={6} total={!!filteredArr.length ? filteredArr.length :roomrents.length} onChange={this.onChangePage} /></span>
                        </div>*/}
                    </div>
                </div>
            </div>
            </div>
        )
	}
}

const mapStateToProps = (state) => {
    return({
        text: state.text
    })
}

export default connect(mapStateToProps)(Roomrentingtwocontentarea);
