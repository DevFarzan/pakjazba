import React, { Component } from 'react';
import RoomRentFilterContent from '../roomrenting/roomrenting2contentarea';
import { Tabs, Icon } from 'antd';
import Roomrenting1content from "../roomrenting/roomrenting1content";
import RoomrentingCatagory from '../roomrenting/roomrentinficon';
import { HttpUtils } from "../../Services/HttpUtils";
import AsyncStorage from "@callstack/async-storage/lib/index";

let filterSubCategoryName = [];
let filterCityName = [];
let filterStateName = [];
let filterAccomodatesNumber = [];

class RoomRentTAB extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: false,
            showroomrents: [],
            filteredData: [],
            notFoundFilterData: false,
            showRecord: true,

            categoryRoom: [],
            state: [],
            city: [],
            accomodates: [],

            categoroyOfRoom: [],
            stateOfRoom: [],
            cityOfRoom: [],
            accomodatesOfRoom: [],

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
        let data = this.props.dataFromHome;
        let res = await HttpUtils.get('marketplace');
        if (res && res.code && res.code == 200) {
            this.setState({
                showroomrents: res.roomrentsdata,
            });
        }
        if (data) {
            filterSubCategoryName = data.filterCategory
            filterCityName = data.city
            filterStateName = data.state
            this.setState({
                categoryRoom: data.dropdownCategory
            })
            this.filterKeysGet()
        }
    }

    onChange = (value) => {
        let categoryValue = [];
        categoryValue.push(value[1]);
        this.setState({
            categoryRoom: value,
        })
        filterSubCategoryName = categoryValue
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

    onChangeCheckBoxes = (value) => {
        this.setState({
            accomodates: value
        })
        filterAccomodatesNumber = value;
        this.filterKeysGet();
    }


    filterKeysGet = () => {
        let categoroyOfRoom = [];
        let stateOfRoom = [];
        let cityOfRoom = [];
        let accomodatesOfRoom = [];

        let filterKeys = [];

        if (filterSubCategoryName.length > 0) {
            filterKeys.push('category')
        }
        if (filterStateName.length > 0) {
            filterKeys.push('state')
        }
        if (filterCityName.length > 0) {
            filterKeys.push('city')
        }
        if (filterAccomodatesNumber.length > 0) {
            filterKeys.push('accommodates')
        }

        for (var i = 0; i < filterSubCategoryName.length; i++) {
            categoroyOfRoom.push(filterSubCategoryName[i])
        }
        for (var i = 0; i < filterStateName.length; i++) {
            stateOfRoom.push(filterStateName[i])
        }
        for (var i = 0; i < filterCityName.length; i++) {
            cityOfRoom.push(filterCityName[i])
        }
        for (var i = 0; i < filterAccomodatesNumber.length; i++) {
            accomodatesOfRoom.push(filterAccomodatesNumber[i])
        }

        this.setState({
            categoroyOfRoom: categoroyOfRoom,
            stateOfRoom: stateOfRoom,
            cityOfRoom: cityOfRoom,
            accomodatesOfRoom: accomodatesOfRoom,
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
        else if (filterKeys.length == 4) {
            this.filterDataWithFourKeys(filterKeys)
        }
    }

    filterDataWithOneKey = (filterKeys) => {
        const { showroomrents } = this.state;
        let data;
        for (var i = 0; i < filterKeys.length; i++) {
            if (filterKeys[i] == 'category') {
                data = showroomrents.filter((elem) => {
                    return elem.subCategory && filterSubCategoryName.includes(elem.subCategory)
                })
            }
            else if (filterKeys[i] == 'state') {
                data = showroomrents.filter((elem) => {
                    return elem.state && filterStateName.includes(elem.state)
                })
            }
            else if (filterKeys[i] == 'city') {
                data = showroomrents.filter((elem) => {
                    return elem.city && filterCityName.includes(elem.city)
                })
            }
            else if (filterKeys[i] == 'accommodates') {
                data = showroomrents.filter((elem) => {
                    return elem.accomodates && filterAccomodatesNumber.includes(elem.accomodates)
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
        const { showroomrents } = this.state;
        let data1;
        let filteredData;

        for (var i = 0; i < filterKeys.length; i++) {
            if (i == 0) {
                if (filterKeys[i] == 'category') {
                    data1 = showroomrents.filter((elem) => {
                        return elem.subCategory && filterSubCategoryName.includes(elem.subCategory)
                    })
                }
                else if (filterKeys[i] == 'state') {
                    data1 = showroomrents.filter((elem) => {
                        return elem.state && filterStateName.includes(elem.state)
                    })
                }
                else if (filterKeys[i] == 'city') {
                    data1 = showroomrents.filter((elem) => {
                        return elem.city && filterCityName.includes(elem.city)
                    })
                }
                else if (filterKeys[i] == 'accommodates') {
                    data1 = showroomrents.filter((elem) => {
                        return elem.accomodates && filterAccomodatesNumber.includes(elem.accomodates)
                    })
                }
            }
            if (i == 1) {
                if (filterKeys[i] == 'category') {
                    filteredData = data1.filter((elem) => {
                        return elem.subCategory && filterSubCategoryName.includes(elem.subCategory)
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
                else if (filterKeys[i] == 'accommodates') {
                    filteredData = data1.filter((elem) => {
                        return elem.accomodates && filterAccomodatesNumber.includes(elem.accomodates)
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
        const { showroomrents } = this.state
        let data1;
        let data2;
        let filteredData;

        for (var i = 0; i < filterKeys.length; i++) {
            if (i == 0) {
                if (filterKeys[i] == 'category') {
                    data1 = showroomrents.filter((elem) => {
                        return elem.subCategory && filterSubCategoryName.includes(elem.subCategory)
                    })
                }
                else if (filterKeys[i] == 'state') {
                    data1 = showroomrents.filter((elem) => {
                        return elem.state && filterStateName.includes(elem.state)
                    })
                }
                else if (filterKeys[i] == 'city') {
                    data1 = showroomrents.filter((elem) => {
                        return elem.city && filterCityName.includes(elem.city)
                    })
                }
                else if (filterKeys[i] == 'accommodates') {
                    data1 = showroomrents.filter((elem) => {
                        return elem.accomodates && filterAccomodatesNumber.includes(elem.accomodates)
                    })
                }
            }
            if (i == 1) {
                if (filterKeys[i] == 'category') {
                    data2 = data1.filter((elem) => {
                        return elem.subCategory && filterSubCategoryName.includes(elem.subCategory)
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
                else if (filterKeys[i] == 'accommodates') {
                    data2 = data1.filter((elem) => {
                        return elem.accomodates && filterAccomodatesNumber.includes(elem.accomodates)
                    })
                }
            }
            if (i == 2) {
                if (filterKeys[i] == 'category') {
                    filteredData = data2.filter((elem) => {
                        return elem.subCategory && filterSubCategoryName.includes(elem.subCategory)
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
                else if (filterKeys[i] == 'accommodates') {
                    filteredData = data2.filter((elem) => {
                        return elem.accomodates && filterAccomodatesNumber.includes(elem.accomodates)
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


    filterDataWithFourKeys = (filterKeys) => {
        const { showroomrents } = this.state
        let data1;
        let data2;
        let data3;
        let filteredData;

        for (var i = 0; i < filterKeys.length; i++) {
            if (i == 0) {
                if (filterKeys[i] == 'category') {
                    data1 = showroomrents.filter((elem) => {
                        return elem.subCategory && filterSubCategoryName.includes(elem.subCategory)
                    })
                }
                else if (filterKeys[i] == 'state') {
                    data1 = showroomrents.filter((elem) => {
                        return elem.state && filterStateName.includes(elem.state)
                    })
                }
                else if (filterKeys[i] == 'city') {
                    data1 = showroomrents.filter((elem) => {
                        return elem.city && filterCityName.includes(elem.city)
                    })
                }
                else if (filterKeys[i] == 'accommodates') {
                    data1 = showroomrents.filter((elem) => {
                        return elem.accomodates && filterAccomodatesNumber.includes(elem.accomodates)
                    })
                }
            }
            if (i == 1) {
                if (filterKeys[i] == 'category') {
                    data2 = data1.filter((elem) => {
                        return elem.subCategory && filterSubCategoryName.includes(elem.subCategory)
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
                else if (filterKeys[i] == 'accommodates') {
                    data2 = data1.filter((elem) => {
                        return elem.accomodates && filterAccomodatesNumber.includes(elem.accomodates)
                    })
                }
            }
            if (i == 2) {
                if (filterKeys[i] == 'category') {
                    data3 = data2.filter((elem) => {
                        return elem.subCategory && filterSubCategoryName.includes(elem.subCategory)
                    })
                }
                else if (filterKeys[i] == 'state') {
                    data3 = data2.filter((elem) => {
                        return elem.state && filterStateName.includes(elem.state)
                    })
                }
                else if (filterKeys[i] == 'city') {
                    data3 = data2.filter((elem) => {
                        return elem.city && filterCityName.includes(elem.city)
                    })
                }
                else if (filterKeys[i] == 'accommodates') {
                    data3 = data2.filter((elem) => {
                        return elem.accomodates && filterAccomodatesNumber.includes(elem.accomodates)
                    })
                }
            }
            if (i == 3) {
                if (filterKeys[i] == 'category') {
                    filteredData = data3.filter((elem) => {
                        return elem.subCategory && filterSubCategoryName.includes(elem.subCategory)
                    })
                }
                else if (filterKeys[i] == 'state') {
                    filteredData = data3.filter((elem) => {
                        return elem.state && filterStateName.includes(elem.state)
                    })
                }
                else if (filterKeys[i] == 'city') {
                    filteredData = data3.filter((elem) => {
                        return elem.city && filterCityName.includes(elem.city)
                    })
                }
                else if (filterKeys[i] == 'accommodates') {
                    filteredData = data3.filter((elem) => {
                        return elem.accomodates && filterAccomodatesNumber.includes(elem.accomodates)
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
            filterSubCategoryName = arr
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
        else if (param == 'accommodates') {
            let arr1 = [];
            for (var i = 0; i < filterAccomodatesNumber.length; i++) {
                if (filterAccomodatesNumber[i] != value) {
                    arr1.push(filterAccomodatesNumber[i])
                }
            }
            filterAccomodatesNumber = arr1;
        }
        this.filterKeysGet();
        if (filterSubCategoryName.length == 0 && filterCityName.length == 0 && filterStateName.length == 0 && filterAccomodatesNumber.length == 0) {
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
        filterSubCategoryName = [];
        filterCityName = [];
        filterStateName = [];
        filterAccomodatesNumber = [];
        this.setState({
            showRecord: true,
            notFoundFilterData: false,
            billboardFilterdData: [],
            statusValue: '',
            categoryRoom: []
        })
        this.filterKeysGet();
    }


    filterRoomWithMinToMax = (minValue, maxValue) => {
        const { showroomrents, filteredData } = this.state;

        let rangeValues = [];
        if (filteredData.length > 0) {
            for (var i = 0; i < filteredData.length; i++) {
                if (filteredData[i].rent >= minValue && filteredData[i].rent <= maxValue) {
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
            for (var i = 0; i < showroomrents.length; i++) {
                if (showroomrents[i].rent >= minValue && showroomrents[i].rent <= maxValue) {
                    rangeValues.push(showroomrents[i])
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


    mainCategoryFilter = (param) => {
        const { showroomrents, filteredData } = this.state;
        let rangeValues = [];

        if (filteredData.length > 0) {
            for (var i = 0; i < filteredData.length; i++) {
                if (filteredData[i].category.toLowerCase() == param.toLowerCase()) {
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
            for (var i = 0; i < showroomrents.length; i++) {
                if (showroomrents[i].category.toLowerCase() == param.toLowerCase()) {
                    rangeValues.push(showroomrents[i])
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
        const { showroomrents, filteredData, categoroyOfRoom, stateOfRoom, cityOfRoom, accomodatesOfRoom, notFoundFilterData, showRecord, categoryRoom } = this.state;
        return (
            <div>
                <div className="row">
                    <div className="col-xs-12 col-sm-3 col-md-3 col-lg-3">
                        <Tabs defaultActiveKey="1">
                            <TabPane tab={
                                <span><Icon type="filter" /> Filter </span>}
                                key="1">
                                <RoomRentFilterContent
                                    onChange={this.onChange}
                                    getState={this.getState}
                                    getCities={this.getCities}
                                    categoroyOfRoom={categoroyOfRoom}
                                    stateOfRoom={stateOfRoom}
                                    cityOfRoom={cityOfRoom}
                                    categoryRoom={categoryRoom}
                                    accomodatesOfRoom={accomodatesOfRoom}
                                    filterRoomWithMinToMax={this.filterRoomWithMinToMax}
                                    onChangeCheckBoxes={this.onChangeCheckBoxes}
                                />
                            </TabPane>
                            <TabPane tab={
                                <span><i class="fa fa-list-alt" aria-hidden="true"></i> Category </span>}
                                key="2">
                                <RoomrentingCatagory
                                    mainCategoryFilter={this.mainCategoryFilter}
                                />
                            </TabPane>
                        </Tabs>
                    </div>
                    <div className="col-xs-12 col-sm-9 col-md-9 col-lg-9">
                        <Roomrenting1content
                            showroomrents={showroomrents}
                            filteredData={filteredData}
                            notFoundFilterData={notFoundFilterData}
                            showRecord={showRecord}
                            categoroyOfRoom={categoroyOfRoom}
                            stateOfRoom={stateOfRoom}
                            cityOfRoom={cityOfRoom}
                            accomodatesOfRoom={accomodatesOfRoom}
                            removeValue={this.removeValue}
                            showAllRooms={this.showAllRooms}
                        />
                    </div>
                </div>
            </div>
        )
    }
}
export default RoomRentTAB;
