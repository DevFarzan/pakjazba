import React, { Component } from 'react';
import BuySellFilterContent from '../buy_sell/filterBuySell';
import BuyCategory from '../buy_sell/buyfirstfold';
import BuyNsellData from '../buy_sell/buyforthfold';
import { Tabs, Icon } from 'antd';
import { HttpUtils } from "../../Services/HttpUtils";
import AsyncStorage from "@callstack/async-storage/lib/index";

let filterCityName = [];
let filterStateName = [];
let filterCondition = [];


class BuyNsell extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: false,
            showBuySell: [],
            filteredData: [],
            notFoundFilterData: false,
            showRecord: true,

            categoryRoom: [],
            state: [],
            city: [],
            condition: [],

            categoroyOfRoom: [],
            stateOfRoom: [],
            cityOfRoom: [],
            conditionOfRoom: [],
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
                showBuySell: res.busell,
            });
        }
        if (data) {
            filterCondition = data.filterCategoryBuy
            filterStateName = data.stateBuy
            this.setState({
                categoryRoom: data.filterCategoryBuy,
            })
            this.filterKeysGet()
        }
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
            condition: value
        })

        filterCondition = value;
        this.filterKeysGet();
    }


    filterKeysGet = () => {
        let stateOfRoom = [];
        let cityOfRoom = [];
        let conditionOfRoom = [];

        let filterKeys = [];
        if (filterStateName) {
            if (filterStateName.length > 0) {
                filterKeys.push('state')
            }
            for (var i = 0; i < filterStateName.length; i++) {
                stateOfRoom.push(filterStateName[i])
            }
        }
        if (filterCityName) {
            if (filterCityName.length > 0) {
                filterKeys.push('city')
            }
            for (var i = 0; i < filterCityName.length; i++) {
                cityOfRoom.push(filterCityName[i])
            }
        }
        if (filterCondition) {
            if (filterCondition.length > 0) {
                filterKeys.push('condition')
            }
            for (var i = 0; i < filterCondition.length; i++) {
                conditionOfRoom.push(filterCondition[i])
            }
        }

        this.setState({
            stateOfRoom: stateOfRoom,
            cityOfRoom: cityOfRoom,
            conditionOfRoom: conditionOfRoom,
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
        const { showBuySell } = this.state;
        let data;
        for (var i = 0; i < filterKeys.length; i++) {
            if (filterKeys[i] == 'state') {
                data = showBuySell.filter((elem) => {
                    return elem.state && filterStateName.includes(elem.state)
                })
            }
            else if (filterKeys[i] == 'city') {
                data = showBuySell.filter((elem) => {
                    return elem.city && filterCityName.includes(elem.city)
                })
            }
            else if (filterKeys[i] == 'condition') {
                data = showBuySell.filter((elem) => {
                    return elem.condition && filterCondition.includes(elem.condition)
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
        const { showBuySell } = this.state;
        let data1;
        let filteredData;

        for (var i = 0; i < filterKeys.length; i++) {
            if (i == 0) {
                if (filterKeys[i] == 'state') {
                    data1 = showBuySell.filter((elem) => {
                        return elem.state && filterStateName.includes(elem.state)
                    })
                }
                else if (filterKeys[i] == 'city') {
                    data1 = showBuySell.filter((elem) => {
                        return elem.city && filterCityName.includes(elem.city)
                    })
                }
                else if (filterKeys[i] == 'condition') {
                    data1 = showBuySell.filter((elem) => {
                        return elem.condition && filterCondition.includes(elem.condition)
                    })
                }
            }
            if (i == 1) {
                if (filterKeys[i] == 'state') {
                    filteredData = data1.filter((elem) => {
                        return elem.state && filterStateName.includes(elem.state)
                    })
                }
                else if (filterKeys[i] == 'city') {
                    filteredData = data1.filter((elem) => {
                        return elem.city && filterCityName.includes(elem.city)
                    })
                }
                else if (filterKeys[i] == 'condition') {
                    filteredData = data1.filter((elem) => {
                        return elem.condition && filterCondition.includes(elem.condition)
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
        const { showBuySell } = this.state
        let data1;
        let data2;
        let filteredData;

        for (var i = 0; i < filterKeys.length; i++) {
            if (i == 0) {
                if (filterKeys[i] == 'state') {
                    data1 = showBuySell.filter((elem) => {
                        return elem.state && filterStateName.includes(elem.state)
                    })
                }
                else if (filterKeys[i] == 'city') {
                    data1 = showBuySell.filter((elem) => {
                        return elem.city && filterCityName.includes(elem.city)
                    })
                }
                else if (filterKeys[i] == 'condition') {
                    data1 = showBuySell.filter((elem) => {
                        return elem.condition && filterCondition.includes(elem.condition)
                    })
                }
            }
            if (i == 1) {
                if (filterKeys[i] == 'state') {
                    data2 = data1.filter((elem) => {
                        return elem.state && filterStateName.includes(elem.state)
                    })
                }
                else if (filterKeys[i] == 'city') {
                    data2 = data1.filter((elem) => {
                        return elem.city && filterCityName.includes(elem.city)
                    })
                }
                else if (filterKeys[i] == 'condition') {
                    data2 = data1.filter((elem) => {
                        return elem.condition && filterCondition.includes(elem.condition)
                    })
                }
            }
            if (i == 2) {
                if (filterKeys[i] == 'state') {
                    filteredData = data2.filter((elem) => {
                        return elem.state && filterStateName.includes(elem.state)
                    })
                }
                else if (filterKeys[i] == 'city') {
                    filteredData = data2.filter((elem) => {
                        return elem.city && filterCityName.includes(elem.city)
                    })
                }
                else if (filterKeys[i] == 'condition') {
                    filteredData = data2.filter((elem) => {
                        return elem.condition && filterCondition.includes(elem.condition)
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
        const { showBuySell } = this.state
        let data1;
        let data2;
        let data3;
        let filteredData;

        for (var i = 0; i < filterKeys.length; i++) {
            if (i == 0) {
                if (filterKeys[i] == 'state') {
                    data1 = showBuySell.filter((elem) => {
                        return elem.state && filterStateName.includes(elem.state)
                    })
                }
                else if (filterKeys[i] == 'city') {
                    data1 = showBuySell.filter((elem) => {
                        return elem.city && filterCityName.includes(elem.city)
                    })
                }
                else if (filterKeys[i] == 'condition') {
                    data1 = showBuySell.filter((elem) => {
                        return elem.condition && filterCondition.includes(elem.condition)
                    })
                }
            }
            if (i == 1) {
                if (filterKeys[i] == 'state') {
                    data2 = data1.filter((elem) => {
                        return elem.state && filterStateName.includes(elem.state)
                    })
                }
                else if (filterKeys[i] == 'city') {
                    data2 = data1.filter((elem) => {
                        return elem.city && filterCityName.includes(elem.city)
                    })
                }
                else if (filterKeys[i] == 'condition') {
                    data2 = data1.filter((elem) => {
                        return elem.condition && filterCondition.includes(elem.condition)
                    })
                }
            }
            if (i == 2) {
                if (filterKeys[i] == 'state') {
                    data3 = data2.filter((elem) => {
                        return elem.state && filterStateName.includes(elem.state)
                    })
                }
                else if (filterKeys[i] == 'city') {
                    data3 = data2.filter((elem) => {
                        return elem.city && filterCityName.includes(elem.city)
                    })
                }
                else if (filterKeys[i] == 'condition') {
                    data3 = data2.filter((elem) => {
                        return elem.condition && filterCondition.includes(elem.condition)
                    })
                }
            }
            if (i == 3) {
                if (filterKeys[i] == 'state') {
                    filteredData = data3.filter((elem) => {
                        return elem.state && filterStateName.includes(elem.state)
                    })
                }
                else if (filterKeys[i] == 'city') {
                    filteredData = data3.filter((elem) => {
                        return elem.city && filterCityName.includes(elem.city)
                    })
                }
                else if (filterKeys[i] == 'condition') {
                    filteredData = data3.filter((elem) => {
                        return elem.condition && filterCondition.includes(elem.condition)
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
        if (param == "city") {
            filterCityName = arr
        }
        else if (param == "state") {
            filterStateName = arr
            filterCityName = arr
        }
        else if (param == 'accommodates') {
            let arr1 = [];
            for (var i = 0; i < filterCondition.length; i++) {
                if (filterCondition[i] != value) {
                    arr1.push(filterCondition[i])
                }
            }
            filterCondition = arr1;
        }
        this.filterKeysGet();
        if (filterCityName.length == 0 && filterStateName.length == 0 && filterCondition.length == 0) {
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
        filterCityName = [];
        filterStateName = [];
        filterCondition = [];
        this.setState({
            showRecord: true,
            notFoundFilterData: false,
            billboardFilterdData: [],
            statusValue: '',

        })
        this.filterKeysGet();
    }


    filterRoomWithMinToMax = (minValue, maxValue) => {
        const { showBuySell, filteredData } = this.state;

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
            for (var i = 0; i < showBuySell.length; i++) {
                if (showBuySell[i].rent >= minValue && showBuySell[i].rent <= maxValue) {
                    rangeValues.push(showBuySell[i])
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
        const { showBuySell, filteredData } = this.state;
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
            for (var i = 0; i < showBuySell.length; i++) {
                if (showBuySell[i].category.toLowerCase() == param.toLowerCase()) {
                    rangeValues.push(showBuySell[i])
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
        const { showBuySell, filteredData, stateOfRoom, cityOfRoom, conditionOfRoom, notFoundFilterData, showRecord } = this.state;

        // const { states, noText, showroomrents, roomrents, filteredArr, cities, to, from, loader, objData, goDetail } = this.state;
        // const antIcon = <Icon type="loading" style={{ fontSize: 120 }} spin />;
        return (
            <div>
                <div className="row">
                    <div className="col-xs-12 col-sm-3 col-md-3 col-lg-3">
                        <Tabs defaultActiveKey="1">
                            <TabPane tab={
                                <span><Icon type="filter" /> Filter </span>}
                                key="1">
                                <BuySellFilterContent
                                    onChange={this.onChange} getState={this.getState} getCities={this.getCities} onChangeCheckBoxes={this.onChangeCheckBoxes}
                                    stateOfRoom={stateOfRoom} cityOfRoom={cityOfRoom} conditionOfRoom={conditionOfRoom}
                                    filterRoomWithMinToMax={this.filterRoomWithMinToMax} cities={this.props.dataFromHome.citiesBuy} />
                            </TabPane>
                            <TabPane tab={
                                <span><i class="fa fa-list-alt" aria-hidden="true"></i> Category </span>}
                                key="2">
                                <BuyCategory mainCategoryFilter={this.mainCategoryFilter} />
                            </TabPane>
                        </Tabs>
                    </div>
                    <div className="col-xs-12 col-sm-9 col-md-9 col-lg-9">
                        <BuyNsellData showBuySell={showBuySell} filteredData={filteredData} notFoundFilterData={notFoundFilterData} showRecord={showRecord}
                            stateOfRoom={stateOfRoom} cityOfRoom={cityOfRoom} conditionOfRoom={conditionOfRoom}
                            removeValue={this.removeValue} showAllRooms={this.showAllRooms}
                        />
                    </div>
                </div>
            </div>
        )
    }
}
export default BuyNsell;
