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
            categoryRoom: [],
            user: false,
            showroomrents: [],
            filteredData: [],
            city: [],
            state: [],
            accomodates: []
        }
    }

    componentDidMount() {
        this.getAllBusiness()
        this.handleLocalStorage();
    }

    onChange = (value) => {
        // const { showroomrents, filteredData } = this.state;

        let categoryValue = [];
        categoryValue.push(value[1]);
        this.setState({
            categoryRoom: categoryValue,
        })
        this.filterKeysGet()

        // if (filteredData.length == 0) {
        //     let data = showroomrents.filter((elem) => {
        //         return elem.subCategory && categoryValue.includes(elem.subCategory)
        //     })
        //     this.setState({
        //         filteredData: data
        //     })
        // }
        // else {
        //     let data = filteredData.filter((elem) => {
        //         return elem.subCategory && categoryValue.includes(elem.subCategory)
        //     })
        //     this.setState({
        //         filteredData: data
        //     })
        // }
    }

    getCitiesAndState = (state, city) => {
        // const { showroomrents, filteredData } = this.state;
        let stateValue = [];
        let cityValue = [];
        cityValue.push(city)
        stateValue.push(state)

        this.setState({
            city: cityValue,
            state: stateValue
        })

        filterCityName = cityValue;
        filterStateName = stateValue;
        this.filterKeysGet()

        // if (filteredData.length == 0) {
        //     let data = showroomrents.filter((elem) => {
        //         return elem.state && stateValue.includes(elem.state) && elem.state && cityValue.includes(elem.city)
        //     })
        //     this.setState({
        //         filteredData: data
        //     })
        // }
        // else {
        //     let data = filteredData.filter((elem) => {
        //         return elem.state && stateValue.includes(elem.state) && elem.state && cityValue.includes(elem.city)
        //     })
        //     this.setState({
        //         filteredData: data
        //     })
        // }
    }

    onChangeCheckBoxes = (value) => {
        // const { showroomrents, filteredData } = this.state;

        this.setState({
            accomodates: value
        })


        filterAccomodatesNumber = value
        this.filterKeysGet()


        // if (filteredData.length == 0) {
        //     let data = showroomrents.filter((elem) => {
        //         return elem.accomodates && value.includes(elem.accomodates)
        //     })
        //     this.setState({
        //         filteredData: data
        //     })
        // }
        // else {
        //     let data = filteredData.filter((elem) => {
        //         return elem.accomodates && value.includes(elem.accomodates)
        //     })
        //     this.setState({
        //         filteredData: data
        //     })
        // }
    }

    // mostPopular = () => {
    //     const { categoryRoom, city, state, accomodates } = this.state;
    //     console.log(categoryRoom, 'clicked')
    //     console.log(city, 'city')
    //     console.log(state, 'state')
    //     console.log(accomodates, 'accomodates')

    // }

    // filterKeysGet = () => {
    //     let categoroyOfRoom = [];
    //     let stateOfRoom = [];
    //     let cityOfRoom = [];
    //     let accomodatesOfRoom = [];

    //     let filterKeys = [];

    //     if (filterSubCategoryName.length > 0) {
    //         filterKeys.push('category')
    //     }
    //     if (filterCityName.length > 0) {
    //         filterKeys.push('state')
    //     }
    //     if (filterStateName.length > 0) {
    //         filterKeys.push('city')
    //     }
    //     if (filterAccomodatesNumber.length > 0) {
    //         filterKeys.push('accommodates')
    //     }

    //     for (var i = 0; i < filterSubCategoryName.length; i++) {
    //         categoroyOfRoom.push(filterSubCategoryName[i])
    //     }
    //     for (var i = 0; i < filterCityName.length; i++) {
    //         stateOfRoom.push(filterCityName[i])
    //     }
    //     for (var i = 0; i < filterStateName.length; i++) {
    //         cityOfRoom.push(filterStateName[i])
    //     }
    //     for (var i = 0; i < filterAccomodatesNumber.length; i++) {
    //         accomodatesOfRoom.push(filterAccomodatesNumber[i])
    //     }

    //     // this.setState({
    //     //     categoroyOfRoom: categoroyOfRoom,
    //     //     stateOfRoom: stateOfRoom,
    //     //     cityOfRoom: cityOfRoom,
    //     //     accomodatesOfRoom: accomodatesOfRoom,
    //     // })

    //     this.filterBillboardData(filterKeys)

    // }



    // filterBillboardData = (filterKeys) => {
    //     if (filterKeys.length == 1) {
    //         this.filterDataWithOneKey(filterKeys);
    //     }
    //     else if (filterKeys.length == 2) {
    //         this.filterDataWithTwoKeys(filterKeys);
    //     }
    //     else if (filterKeys.length == 3) {
    //         this.filterDataWithThreeKeys(filterKeys);
    //     }
    //     else if (filterKeys.length == 4) {
    //         this.filterDataWithFourKeys(filterKeys)
    //     }
    // }

    // filterDataWithOneKey = (filterKeys) => {
    //     const { showroomrents } = this.state;
    //     let data;
    //     for (var i = 0; i < filterKeys.length; i++) {
    //         if (filterKeys[i] == 'category') {
    //             data = showroomrents.filter((elem) => {
    //                 return elem.subCategory && filterSubCategoryName.includes(elem.subCategory)
    //             })
    //         }
    //         else if (filterKeys[i] == 'state') {

    //         }
    //         else if (filterKeys[i] == 'city') {
    //             data = showroomrents.filter((elem) => {
    //                 return elem.state && filterStateName.includes(elem.state) && elem.city && filterCityName.includes(elem.city)
    //             })
    //         }
    //         else if (filterKeys[i] == 'accommodates') {
    //             data = filteredData.filter((elem) => {
    //                 return elem.accomodates && filterAccomodatesNumber.includes(elem.accomodates)
    //             })
    //         }
    //     }
    // }

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

        if (res && res.code && res.code == 200) {
            // console.log(res.roomrentsdata, 'res.roomrentsdata')
            this.setState({
                showroomrents: res.roomrentsdata,
            });

        }
    }

    render() {
        const { TabPane } = Tabs;
        const { showroomrents, filteredData } = this.state;
        return (
            <div>
                <div className="row">
                    <div className="col-xs-12 col-sm-3 col-md-3 col-lg-3">
                        <Tabs defaultActiveKey="1">
                            <TabPane tab={
                                <span><Icon type="filter" /> Filter </span>}
                                key="1">
                                <RoomRentFilterContent onChange={this.onChange} getCitiesAndState={this.getCitiesAndState} onChangeCheckBoxes={this.onChangeCheckBoxes}
                                     />
                            </TabPane>
                            <TabPane tab={
                                <span><Icon type="android" /> Category </span>}
                                key="2">
                                <RoomrentingCatagory />
                            </TabPane>
                        </Tabs>
                    </div>
                    <div className="col-xs-12 col-sm-9 col-md-9 col-lg-9">
                        <Roomrenting1content showroomrents={showroomrents} filteredData={filteredData} />
                    </div>
                </div>
            </div>
        )
    }
}
export default RoomRentTAB;
