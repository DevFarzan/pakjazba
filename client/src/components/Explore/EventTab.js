import React, { Component } from 'react';
import EventFilterContent from '../events/eventFilterContent';
import { Tabs, Icon } from 'antd';
import EventFeatured from '../events/bannerAndtop';
import EventCategory from '../events/eventCategory';
import { HttpUtils } from "../../Services/HttpUtils";
import AsyncStorage from "@callstack/async-storage/lib/index";


let filterEventCategory = [];
let filterCityName = [];
let filterStateName = [];

class EventTab extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: false,
            events: [],
            filteredData: [],
            notFoundFilterData: false,
            showRecord: true,

            categoryEvents: [],
            state: [],
            city: [],

            categoroyOfEvents: [],
            stateOfRoom: [],
            cityOfRoom: [],
        }

    }

    componentDidMount() {
        window.scrollTo(0, 0);
        this.setState({ showBtn: true });
        this.handleLocalStorage();
        this.getAllBusiness();

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
        var res = await HttpUtils.get('marketplace');
        if (res) {
            if (res.code === 200) {
                let data = res.eventPortalData;
                // console.log(data , 'data')
                this.setState({
                    events: data ? data : [],
                    showBtn: false
                });
            }
        }
        // this.handleLocalStorage();
    }

    // componentWillUnmount() {
    //     let inputValue = '';
    //     if (this.props.text.length) {
    //         const { dispatch } = this.props;
    //         dispatch({ type: 'SEARCHON', inputValue })
    //     }
    // }

    onChange = (value) => {

        this.setState({
            categoryEvents: value,
        })
        filterEventCategory = value
        // console.log(filterEventCategory, 'filterEventCategory')
        this.filterKeysGet()
    }

    getState = (state) => {
        this.setState({
            state: state
        })
        filterStateName = state;
        // console.log(filterStateName , 'filterStateName')
        this.filterKeysGet()
    }

    getCities = (city) => {
        this.setState({
            city: city,
        })
        filterCityName = city;
        // console.log(filterCityName , 'filterCityName')

        this.filterKeysGet()
    }

    filterKeysGet = () => {
        let categoroyOfRoom = [];
        let stateOfRoom = [];
        let cityOfRoom = [];

        let filterKeys = [];

        if (filterEventCategory.length > 0) {
            filterKeys.push('category')
        }
        if (filterStateName.length > 0) {
            filterKeys.push('state')
        }
        if (filterCityName.length > 0) {
            filterKeys.push('city')
        }

        for (var i = 0; i < filterEventCategory.length; i++) {
            categoroyOfRoom.push(filterEventCategory[i])
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
        else if (filterKeys.length == 4) {
            this.filterDataWithFourKeys(filterKeys)
        }
    }

    filterDataWithOneKey = (filterKeys) => {
        const { events } = this.state;
        let data;
        for (var i = 0; i < filterKeys.length; i++) {
            if (filterKeys[i] == 'category') {
                data = events.filter((elem) => {
                    return elem.eventCategory && filterEventCategory.includes(elem.eventCategory)
                })
            }
            else if (filterKeys[i] == 'state') {
                data = events.filter((elem) => {
                    return elem.state && filterStateName.includes(elem.state)
                })
            }
            else if (filterKeys[i] == 'city') {
                data = events.filter((elem) => {
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
        const { events } = this.state;
        let data1;
        let filteredData;

        for (var i = 0; i < filterKeys.length; i++) {
            if (i == 0) {
                if (filterKeys[i] == 'category') {
                    data1 = events.filter((elem) => {
                        return elem.eventCategory && filterEventCategory.includes(elem.eventCategory)
                    })
                }
                else if (filterKeys[i] == 'state') {
                    data1 = events.filter((elem) => {
                        return elem.state && filterStateName.includes(elem.state)
                    })
                }
                else if (filterKeys[i] == 'city') {
                    data1 = events.filter((elem) => {
                        return elem.city && filterCityName.includes(elem.city)
                    })
                }
            }
            if (i == 1) {
                if (filterKeys[i] == 'category') {
                    filteredData = data1.filter((elem) => {
                        return elem.eventCategory && filterEventCategory.includes(elem.eventCategory)
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
        const { events } = this.state
        let data1;
        let data2;
        let filteredData;

        for (var i = 0; i < filterKeys.length; i++) {
            if (i == 0) {
                if (filterKeys[i] == 'category') {
                    data1 = events.filter((elem) => {
                        return elem.eventCategory && filterEventCategory.includes(elem.eventCategory)
                    })
                }
                else if (filterKeys[i] == 'state') {
                    data1 = events.filter((elem) => {
                        return elem.state && filterStateName.includes(elem.state)
                    })
                }
                else if (filterKeys[i] == 'city') {
                    data1 = events.filter((elem) => {
                        return elem.city && filterCityName.includes(elem.city)
                    })
                }
            }
            if (i == 1) {
                if (filterKeys[i] == 'category') {
                    data2 = data1.filter((elem) => {
                        return elem.eventCategory && filterEventCategory.includes(elem.eventCategory)
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
                        return elem.eventCategory && filterEventCategory.includes(elem.eventCategory)
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
            filterEventCategory = arr
            this.setState({
                categoryEvents: arr
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
        if (filterEventCategory.length == 0 && filterCityName.length == 0 && filterStateName.length == 0) {
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
        filterEventCategory = [];
        filterCityName = [];
        filterStateName = [];
        this.setState({
            showRecord: true,
            notFoundFilterData: false,
            billboardFilterdData: [],
            statusValue: '',
            categoryEvents: [],
            stateOfRoom: [],

            cityOfRoom: []
        })
        this.filterKeysGet();
    }




    mainCategoryFilter = (param) => {
        const { events, filteredData } = this.state;
        let rangeValues = [];

        if (filteredData.length > 0) {
            for (var i = 0; i < filteredData.length; i++) {
                if (filteredData[i].eventCategory.toLowerCase() == param.toLowerCase()) {
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
            for (var i = 0; i < events.length; i++) {
                if (events[i].eventCategory.toLowerCase() == param.toLowerCase()) {
                    rangeValues.push(events[i])
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
        const { events, filteredData, categoroyOfEvents, stateOfRoom, cityOfRoom, notFoundFilterData, showRecord, categoryEvents } = this.state;
        // console.log(categoryEvents, 'categoryEvents')
        // const { states, noText, showroomrents, roomrents, filteredArr, cities, to, from, loader, objData, goDetail } = this.state;
        // const antIcon = <Icon type="loading" style={{ fontSize: 120 }} spin />;
        return (
            <div>
                <div className="row">
                    <div className="col-xs-12 col-sm-3 col-md-3 col-lg-3">
                        <Tabs defaultActiveKey="1">
                            <TabPane tab={
                                <span><Icon type="apple" /> Filter </span>}
                                key="1">
                                <EventFilterContent
                                    onChange={this.onChange}
                                    getState={this.getState}
                                    getCities={this.getCities}
                                    categoroyOfEvents={categoroyOfEvents}
                                    stateOfRoom={stateOfRoom}
                                    cityOfRoom={cityOfRoom}
                                    categoryEvents={categoryEvents}
                                    filterRoomWithMinToMax={this.filterRoomWithMinToMax}
                                />
                            </TabPane>
                            <TabPane tab={
                                <span><Icon type="android" /> Category </span>}
                                key="2">
                                <EventCategory  mainCategoryFilter={this.mainCategoryFilter}/>
                            </TabPane>
                        </Tabs>
                    </div>
                    <div className="col-xs-12 col-sm-9 col-md-9 col-lg-9">
                        <EventFeatured
                            events={events}
                            filteredData={filteredData}
                            notFoundFilterData={notFoundFilterData}
                            showRecord={showRecord}
                            categoroyOfEvents={categoryEvents}
                            stateOfRoom={stateOfRoom}
                            cityOfRoom={cityOfRoom}
                            removeValue={this.removeValue}
                            showAllRooms={this.showAllRooms}
                        />
                    </div>
                </div>
            </div>
        )
    }
}
export default EventTab;
