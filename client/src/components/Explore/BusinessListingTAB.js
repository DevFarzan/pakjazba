import React, { Component } from 'react';
import BusinesListFilterContent from '../business/BusinesListFilterContent';
import BusinessCategory from '../business/BusinessCategories';
import BusinessCard from '../business/bussinessCard';
import SecondFoldCard from '../business/secondfold';
import { Tabs, Icon } from 'antd';
import { HttpUtils } from "../../Services/HttpUtils";
import AsyncStorage from "@callstack/async-storage/lib/index";

let filterCategoryName = [];
let filterCityName = [];
let filterStateName = [];

class BussinesListing extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: false,
            showBusiness: [],
            filteredData: [],
            notFoundFilterData: false,
            showRecord: true,

            categoryRoom: [],
            state: [],
            city: [],

            categoroyOfRoom: [],
            stateOfRoom: [],
            cityOfRoom: [],
        }
    }

    componentDidMount() {
        this.getAllBusiness()
        this.handleLocalStorage();
    }

    handleLocalStorage = () => {
        AsyncStorage.getItem('user')
            .then((obj) => {
                let userObj = JSON.parse(obj)
                if (!!userObj) {
                    this.setState({
                        user: true,
                    })
                }
                else {
                    this.setState({
                        user: false
                    })
                }
            })
    }

    async getAllBusiness() {
        let res = await HttpUtils.get('marketplace');
        // let req = await HttpUtils.get('getreviews');
        console.log(res.business, 'res')
        if (res && res.code && res.code == 200) {
            this.setState({
                showBusiness: res.business,
            });
        }
    }

    onChange = (value) => {
        this.setState({
            categoryRoom: value,
        })
        filterCategoryName = value
        this.filterKeysGet()
    }

    getState = (state) => {
        this.setState({
            state: state
        })
        filterStateName = state;
        this.filterKeysGet()
    }

    getCities = (city) => {
        this.setState({
            city: city,
        })
        filterCityName = city;
        this.filterKeysGet()
    }


    filterKeysGet = () => {
        let categoroyOfRoom = [];
        let stateOfRoom = [];
        let cityOfRoom = [];

        let filterKeys = [];

        if (filterCategoryName.length > 0) {
            filterKeys.push('category')
        }
        if (filterStateName.length > 0) {
            filterKeys.push('state')
        }
        if (filterCityName.length > 0) {
            filterKeys.push('city')
        }

        for (var i = 0; i < filterCategoryName.length; i++) {
            categoroyOfRoom.push(filterCategoryName[i])
        }
        for (var i = 0; i < filterStateName.length; i++) {
            stateOfRoom.push(filterStateName[i])
        }
        for (var i = 0; i < filterCityName.length; i++) {
            cityOfRoom.push(filterCityName[i])
        }

        this.setState({
            categoroyOfRoom: categoroyOfRoom,
            stateOfRoom: stateOfRoom,
            cityOfRoom: cityOfRoom,
        })

        this.filterBillboardData(filterKeys)
    }

    filterBillboardData = (filterKeys) => {
        if (filterKeys.length == 1) {
            this.filterDataWithOneKey(filterKeys);
        }
        else if (filterKeys.length == 2) {
            this.filterDataWithTwoKeys(filterKeys);
        }
        else if (filterKeys.length == 3) {
            this.filterDataWithThreeKeys(filterKeys);
        }
    }

    filterDataWithOneKey = (filterKeys) => {
        const { showBusiness } = this.state;
        let data;
        for (var i = 0; i < filterKeys.length; i++) {
            if (filterKeys[i] == 'category') {
                console.log(filterCategoryName, 'filterCategoryName')
                data = showBusiness.filter((elem) => {
                    return elem.businesscategory && filterCategoryName.includes(elem.businesscategory)
                })
            }
            else if (filterKeys[i] == 'state') {
                data = showBusiness.filter((elem) => {
                    return elem.state && filterStateName.includes(elem.state)
                })
            }
            else if (filterKeys[i] == 'city') {
                data = showBusiness.filter((elem) => {
                    return elem.city && filterCityName.includes(elem.city)
                })
            }
        }

        if (data.length == 0) {
            this.setState({
                notFoundFilterData: true,
                filteredData: data,
                showRecord: false
            })
        }
        else {
            this.setState({
                notFoundFilterData: false,
                filteredData: data,
                showRecord: false
            })
        }
    }


    filterDataWithTwoKeys = (filterKeys) => {
        const { showBusiness } = this.state;
        let data1;
        let filteredData;

        for (var i = 0; i < filterKeys.length; i++) {
            if (i == 0) {
                if (filterKeys[i] == 'category') {
                    data1 = showBusiness.filter((elem) => {
                        return elem.businesscategory && filterCategoryName.includes(elem.businesscategory)
                    })
                }
                else if (filterKeys[i] == 'state') {
                    data1 = showBusiness.filter((elem) => {
                        return elem.state && filterStateName.includes(elem.state)
                    })
                }
                else if (filterKeys[i] == 'city') {
                    data1 = showBusiness.filter((elem) => {
                        return elem.city && filterCityName.includes(elem.city)
                    })
                }
            }
            if (i == 1) {
                if (filterKeys[i] == 'category') {
                    filteredData = data1.filter((elem) => {
                        return elem.businesscategory && filterCategoryName.includes(elem.businesscategory)
                    })
                }
                else if (filterKeys[i] == 'state') {
                    filteredData = data1.filter((elem) => {
                        return elem.state && filterStateName.includes(elem.state)
                    })
                }
                else if (filterKeys[i] == 'city') {
                    filteredData = data1.filter((elem) => {
                        return elem.city && filterCityName.includes(elem.city)
                    })
                }
            }
        }

        if (filteredData.length == 0) {
            this.setState({
                notFoundFilterData: true,
                filteredData: filteredData,
                showRecord: false
            })
        }
        else {
            this.setState({
                notFoundFilterData: false,
                filteredData: filteredData,
                showRecord: false

            })
        }
    }


    filterDataWithThreeKeys = (filterKeys) => {
        const { showBusiness } = this.state
        let data1;
        let data2;
        let filteredData;

        for (var i = 0; i < filterKeys.length; i++) {
            if (i == 0) {
                if (filterKeys[i] == 'category') {
                    data1 = showBusiness.filter((elem) => {
                        return elem.businesscategory && filterCategoryName.includes(elem.businesscategory)
                    })
                }
                else if (filterKeys[i] == 'state') {
                    data1 = showBusiness.filter((elem) => {
                        return elem.state && filterStateName.includes(elem.state)
                    })
                }
                else if (filterKeys[i] == 'city') {
                    data1 = showBusiness.filter((elem) => {
                        return elem.city && filterCityName.includes(elem.city)
                    })
                }
            }
            if (i == 1) {
                if (filterKeys[i] == 'category') {
                    data2 = data1.filter((elem) => {
                        return elem.businesscategory && filterCategoryName.includes(elem.businesscategory)
                    })
                }
                else if (filterKeys[i] == 'state') {
                    data2 = data1.filter((elem) => {
                        return elem.state && filterStateName.includes(elem.state)
                    })
                }
                else if (filterKeys[i] == 'city') {
                    data2 = data1.filter((elem) => {
                        return elem.city && filterCityName.includes(elem.city)
                    })
                }
            }
            if (i == 2) {
                if (filterKeys[i] == 'category') {
                    filteredData = data2.filter((elem) => {
                        return elem.businesscategory && filterCategoryName.includes(elem.businesscategory)
                    })
                }
                else if (filterKeys[i] == 'state') {
                    filteredData = data2.filter((elem) => {
                        return elem.state && filterStateName.includes(elem.state)
                    })
                }
                else if (filterKeys[i] == 'city') {
                    filteredData = data2.filter((elem) => {
                        return elem.city && filterCityName.includes(elem.city)
                    })
                }
            }
        }

        if (filteredData.length == 0) {
            this.setState({
                notFoundFilterData: true,
                filteredData: filteredData,
                showRecord: false
            })
        }
        else {
            this.setState({
                notFoundFilterData: false,
                filteredData: filteredData,
                showRecord: false

            })
        }
    }

    removeValue = (param, value) => {
        let arr = [];
        if (param == "category") {
            filterCategoryName = arr
            this.setState({
                categoryRoom: arr
            })
        }
        else if (param == "city") {
            filterCityName = arr
        }
        else if (param == "state") {
            filterStateName = arr
            filterCityName = arr
        }

        this.filterKeysGet();
        if (filterCategoryName.length == 0 && filterCityName.length == 0 && filterStateName.length == 0) {
            this.setState({
                showRecord: true,
                notFoundFilterData: false,
                filteredData: [],
            })
        }
        else {
            this.filterKeysGet();
        }
    }

    showAllRooms = () => {
        filterCategoryName = [];
        filterCityName = [];
        filterStateName = [];
        this.setState({
            showRecord: true,
            notFoundFilterData: false,
            billboardFilterdData: [],
            statusValue: '',
            categoryRoom:[]

        })
        this.filterKeysGet();
    }


    mainCategoryFilter = (param) => {
        const { showBusiness, filteredData } = this.state;
        let rangeValues = [];

        if (filteredData.length > 0) {
            for (var i = 0; i < filteredData.length; i++) {
                if (filteredData[i].businesscategory.toLowerCase() == param.toLowerCase()) {
                    rangeValues.push(filteredData[i])
                }
            }
            if (rangeValues.length == 0) {
                this.setState({
                    notFoundFilterData: true,
                    filteredData: rangeValues,
                    showRecord: false

                })
            }
            else {
                this.setState({
                    notFoundFilterData: false,
                    filteredData: rangeValues,
                    showRecord: false
                })
            }
        }
        else {
            for (var i = 0; i < showBusiness.length; i++) {
                if (showBusiness[i].businesscategory.toLowerCase() == param.toLowerCase()) {
                    rangeValues.push(showBusiness[i])
                }
            }

            if (rangeValues.length == 0) {
                this.setState({
                    notFoundFilterData: true,
                    filteredData: rangeValues,
                    showRecord: false
                })
            }
            else {
                this.setState({
                    notFoundFilterData: false,
                    filteredData: rangeValues,
                    showRecord: false
                })
            }
        }
    }

    render() {
        const { TabPane } = Tabs;
        const { showBusiness, filteredData, categoroyOfRoom, stateOfRoom, cityOfRoom, accomodatesOfRoom, notFoundFilterData, showRecord, categoryRoom } = this.state;
        // const antIcon = <Icon type="loading" style={{ fontSize: 120 }} spin />;
        return (
            <div>
                <div className="row">
                    <div className="col-xs-12 col-sm-3 col-md-3 col-lg-3">
                        <Tabs defaultActiveKey="1">
                            <TabPane tab={
                                <span><Icon type="apple" /> Filter </span>}
                                key="1">
                                <BusinesListFilterContent onChange={this.onChange} getState={this.getState} getCities={this.getCities} onChangeCheckBoxes={this.onChangeCheckBoxes}
                                    categoroyOfRoom={categoroyOfRoom} stateOfRoom={stateOfRoom} cityOfRoom={cityOfRoom} accomodatesOfRoom={accomodatesOfRoom} categoryRoom={categoryRoom}
                                />
                            </TabPane>
                            <TabPane tab={
                                <span><Icon type="android" /> Category </span>}
                                key="2">
                                <BusinessCategory mainCategoryFilter={this.mainCategoryFilter} />
                            </TabPane>
                        </Tabs>
                    </div>
                    <div className="col-xs-12 col-sm-9 col-md-9 col-lg-9">
                        <SecondFoldCard showBusiness={showBusiness} filteredData={filteredData} notFoundFilterData={notFoundFilterData} showRecord={showRecord}
                            categoroyOfRoom={categoroyOfRoom} stateOfRoom={stateOfRoom} cityOfRoom={cityOfRoom} accomodatesOfRoom={accomodatesOfRoom}
                            removeValue={this.removeValue} showAllRooms={this.showAllRooms} />
                    </div>
                </div>
            </div>
        )
    }
}
export default BussinesListing;
