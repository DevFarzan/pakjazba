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
            categoryRoom: '',
            user: false,
            showroomrents: [],
            filteredData: []
        }
    }

    componentDidMount() {
        this.getAllBusiness()
        this.handleLocalStorage();
    }

    onChange = (value) => {
        let categoryValue = [];
        categoryValue.push(value[1]);
        this.setState({
            categoryRoom: value[1],
        })

        // const { showroomrents, filteredData } = this.state;
        // if (filteredData.length == 0){
        //     let data = showroomrents.filter((elem) => {
        //         return elem.subCategory && categoryValue.includes(elem.subCategory)
        //     })
        // }
        // else{
        //     let data = filteredData.filter((elem) => {
        //         return elem.subCategory && categoryValue.includes(elem.subCategory)
        //     })
        // }

        // console.log(data)

    }

    getCitiesAndState = (state, city) => {
        let stateValue = [];
        let cityValue = [];
        stateValue.push(state)
        cityValue.push(city)
    }

    onChangeCheckBoxes = (value) => {
        console.log(value, 'value')

    }



    filterKeysGet = () => {
        let subCategoryName = [];
        let stateName = [];
        let cityName = [];
        let accomodatesNumber = [];

        let filterKeys = [];

        if (filterSubCategoryName.length > 0) {
            filterKeys.push('category')
        }
        if (filterCityName.length > 0) {
            filterKeys.push('city')
        }
        if (filterStateName.length > 0) {
            filterKeys.push('state')
        }
        if (filterAccomodatesNumber.length > 0) {
            filterKeys.push('audianceType')
        }
        for (var i = 0; i < filterSubCategoryName.length; i++) {
            subCategoryName.push(filterSubCategoryName[i])
        }
        for (var i = 0; i < filterCityName.length; i++) {
            stateName.push(filterCityName[i])
        }
        for (var i = 0; i < filterStateName.length; i++) {
            cityName.push(filterStateName[i])
        }
        for (var i = 0; i < filterAccomodatesNumber.length; i++) {
            accomodatesNumber.push(filterAccomodatesNumber[i])
        }
        // this.setState({
        //     subCategoryName: subCategoryName,
        //     stateName: stateName,
        //     cityName: cityName,
        //     accomodatesNumber: accomodatesNumber,
        // })

        // this.filterBillboardData(filterKeys)
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

        if (res && res.code && res.code == 200) {
            // console.log(res.roomrentsdata, 'res.roomrentsdata')
            this.setState({
                showroomrents: res.roomrentsdata,
            });

        }
    }

    // addingStarProp(arrforLoop, rateArr) {
    //     return arrforLoop && arrforLoop.map((elem) => {
    //         let rate = 0,
    //             len = 0;
    //         rateArr && rateArr.map((el) => {
    //             if (elem._id == el.objid) {
    //                 rate += el.star ? +el.star : 0;
    //                 len++
    //             }
    //         });
    //         let star = rate / len;
    //         if (rate > 0 && len > 0) {
    //             return { ...elem, ...{ star: star.toFixed(1) } };
    //         }
    //         return { ...elem, ...{ star: 0 } };
    //     });
    // }

    render() {
        const { TabPane } = Tabs;
        const { categoryRoom, showroomrents } = this.state;
        console.log(filterSubCategoryName, 'filterCategoryName')

        return (
            <div>
                <div className="row">
                    <div className="col-xs-12 col-sm-3 col-md-3 col-lg-3">
                        <Tabs defaultActiveKey="1">
                            <TabPane tab={
                                <span><Icon type="filter" /> Filter </span>}
                                key="1">
                                <RoomRentFilterContent onChange={this.onChange} getCitiesAndState={this.getCitiesAndState} onChangeCheckBoxes={this.onChangeCheckBoxes} />
                            </TabPane>
                            <TabPane tab={
                                <span><Icon type="android" /> Category </span>}
                                key="2">
                                <RoomrentingCatagory />
                            </TabPane>
                        </Tabs>
                    </div>
                    <div className="col-xs-12 col-sm-9 col-md-9 col-lg-9">
                        <Roomrenting1content showroomrents={showroomrents} />
                    </div>
                </div>
            </div>
        )
    }
}
export default RoomRentTAB;
