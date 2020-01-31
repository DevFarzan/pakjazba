import React, { Component } from 'react';
import JobFilter from '../job_portal/CategoriesJobs';
import JobCategory from '../job_portal/jobClassifiedicon';
import JobFeatured from '../job_portal/featuredJob';
import { Tabs, Icon } from 'antd';
import { HttpUtils } from "../../Services/HttpUtils";
import AsyncStorage from "@callstack/async-storage/lib/index";

let filterJobType = [];
let filterJobCat = [];
let filterCityName = [];
let filterStateName = [];

class JobPortal extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: false,
            showAllJobs: [],
            filteredData: [],
            notFoundFilterData: false,
            showRecord: true,

            typeSortJob: [],
            categoryJob: [],
            state: [],
            city: [],

            categoroyOfJob: [],
            TypeOfJob: [],
            stateOfJob: [],
            cityOfJob: [],
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
        if (res && res.code && res.code == 200) {
            this.setState({
                showAllJobs: res.jobPortalData,
            });
        }
    }

    getSortType = (value) => {
        console.log(value, 'getSortType')
        this.setState({
            typeSortJob: value
        })
        filterJobType = value;
        this.filterKeysGet();
    }

    onChange = (value) => {
        console.log(value, 'category')

        // let categoryValue = [];
        // categoryValue.push(value[1]);
        this.setState({
            categoryJob: value,
        })
        filterJobCat = value
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
        let TypeOfJob = [];
        let categoroyOfJob = [];
        let stateOfJob = [];
        let cityOfJob = [];

        let filterKeys = [];

        if (filterJobType.length > 0) {
            filterKeys.push('type')
        }
        if (filterJobCat.length > 0) {
            filterKeys.push('category')
        }
        if (filterStateName.length > 0) {
            filterKeys.push('state')
        }
        if (filterCityName.length > 0) {
            filterKeys.push('city')
        }

        for (var i = 0; i < filterJobType.length; i++) {
            TypeOfJob.push(filterJobType[i])
        }
        for (var i = 0; i < filterJobCat.length; i++) {
            categoroyOfJob.push(filterJobCat[i])
        }
        for (var i = 0; i < filterStateName.length; i++) {
            stateOfJob.push(filterStateName[i])
        }
        for (var i = 0; i < filterCityName.length; i++) {
            cityOfJob.push(filterCityName[i])
        }

        this.setState({
            TypeOfJob: TypeOfJob,
            categoroyOfJob: categoroyOfJob,
            stateOfJob: stateOfJob,
            cityOfJob: cityOfJob,
        })

        this.filterJobData(filterKeys)
    }

    filterJobData = (filterKeys) => {
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
        const { showAllJobs } = this.state;
        let data;
        for (var i = 0; i < filterKeys.length; i++) {
            if (filterKeys[i] == 'category') {
                data = showAllJobs.filter((elem) => {
                    return elem.jobCat && filterJobCat.includes(elem.jobCat)
                })
            }
            else if (filterKeys[i] == 'state') {
                data = showAllJobs.filter((elem) => {
                    return elem.state && filterStateName.includes(elem.state)
                })
            }
            else if (filterKeys[i] == 'city') {
                data = showAllJobs.filter((elem) => {
                    return elem.city && filterCityName.includes(elem.city)
                })
            }
            else if (filterKeys[i] == 'type') {
                data = showAllJobs.filter((elem) => {
                    return elem.jobType && filterJobType.includes(elem.jobType)
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
        const { showAllJobs } = this.state;
        let data1;
        let filteredData;

        for (var i = 0; i < filterKeys.length; i++) {
            if (i == 0) {
                if (filterKeys[i] == 'category') {
                    data1 = showAllJobs.filter((elem) => {
                        return elem.jobCat && filterJobCat.includes(elem.jobCat)
                    })
                }
                else if (filterKeys[i] == 'state') {
                    data1 = showAllJobs.filter((elem) => {
                        return elem.state && filterStateName.includes(elem.state)
                    })
                }
                else if (filterKeys[i] == 'city') {
                    data1 = showAllJobs.filter((elem) => {
                        return elem.city && filterCityName.includes(elem.city)
                    })
                }
                else if (filterKeys[i] == 'type') {
                    data1 = showAllJobs.filter((elem) => {
                        return elem.jobType && filterJobType.includes(elem.jobType)
                    })
                }
            }
            if (i == 1) {
                if (filterKeys[i] == 'category') {
                    filteredData = data1.filter((elem) => {
                        return elem.jobCat && filterJobCat.includes(elem.jobCat)
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
                else if (filterKeys[i] == 'type') {
                    filteredData = showAllJobs.filter((elem) => {
                        return elem.jobType && filterJobType.includes(elem.jobType)
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
        const { showAllJobs } = this.state
        let data1;
        let data2;
        let filteredData;

        for (var i = 0; i < filterKeys.length; i++) {
            if (i == 0) {
                if (filterKeys[i] == 'category') {
                    data1 = showAllJobs.filter((elem) => {
                        return elem.jobCat && filterJobCat.includes(elem.jobCat)
                    })
                }
                else if (filterKeys[i] == 'state') {
                    data1 = showAllJobs.filter((elem) => {
                        return elem.state && filterStateName.includes(elem.state)
                    })
                }
                else if (filterKeys[i] == 'city') {
                    data1 = showAllJobs.filter((elem) => {
                        return elem.city && filterCityName.includes(elem.city)
                    })
                }
                else if (filterKeys[i] == 'type') {
                    data1 = showAllJobs.filter((elem) => {
                        return elem.jobType && filterJobType.includes(elem.jobType)
                    })
                }
            }
            if (i == 1) {
                if (filterKeys[i] == 'category') {
                    data2 = data1.filter((elem) => {
                        return elem.jobCat && filterJobCat.includes(elem.jobCat)
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
                else if (filterKeys[i] == 'type') {
                    data2 = data1.filter((elem) => {
                        return elem.jobType && filterJobType.includes(elem.jobType)
                    })
                }
            }
            if (i == 2) {
                if (filterKeys[i] == 'category') {
                    filteredData = data2.filter((elem) => {
                        return elem.jobCat && filterJobCat.includes(elem.jobCat)
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
                else if (filterKeys[i] == 'type') {
                    filteredData = data2.filter((elem) => {
                        return elem.jobType && filterJobType.includes(elem.jobType)
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
        const { showAllJobs } = this.state
        let data1;
        let data2;
        let data3;
        let filteredData;

        for (var i = 0; i < filterKeys.length; i++) {
            if (i == 0) {
                if (filterKeys[i] == 'category') {
                    data1 = showAllJobs.filter((elem) => {
                        return elem.jobCat && filterJobCat.includes(elem.jobCat)
                    })
                }
                else if (filterKeys[i] == 'state') {
                    data1 = showAllJobs.filter((elem) => {
                        return elem.state && filterStateName.includes(elem.state)
                    })
                }
                else if (filterKeys[i] == 'city') {
                    data1 = showAllJobs.filter((elem) => {
                        return elem.city && filterCityName.includes(elem.city)
                    })
                }
                else if (filterKeys[i] == 'type') {
                    data1 = showAllJobs.filter((elem) => {
                        return elem.jobType && filterJobType.includes(elem.jobType)
                    })
                }
            }
            if (i == 1) {
                if (filterKeys[i] == 'category') {
                    data2 = data1.filter((elem) => {
                        return elem.jobCat && filterJobCat.includes(elem.jobCat)
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
                else if (filterKeys[i] == 'type') {
                    data2 = data1.filter((elem) => {
                        return elem.jobType && filterJobType.includes(elem.jobType)
                    })
                }
            }
            if (i == 2) {
                if (filterKeys[i] == 'category') {
                    data3 = data2.filter((elem) => {
                        return elem.jobCat && filterJobCat.includes(elem.jobCat)
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
                else if (filterKeys[i] == 'type') {
                    data3 = data2.filter((elem) => {
                        return elem.jobType && filterJobType.includes(elem.jobType)
                    })
                }
            }
            if (i == 3) {
                if (filterKeys[i] == 'category') {
                    filteredData = data3.filter((elem) => {
                        return elem.jobCat && filterJobCat.includes(elem.jobCat)
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
                else if (filterKeys[i] == 'type') {
                    filteredData = data3.filter((elem) => {
                        return elem.jobType && filterJobType.includes(elem.jobType)
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

    removeValue = (param) => {
        let arr = [];
        if (param == "category") {
            filterJobCat = arr
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
        else if (param == 'type') {
            filterJobType = arr;
        }
        this.filterKeysGet();
        if (filterJobCat.length == 0 && filterCityName.length == 0 && filterStateName.length == 0 && filterJobType.length == 0) {
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

        filterJobType = [];
        filterJobCat = [];
        filterCityName = [];
        filterStateName = [];

        this.setState({
            showRecord: true,
            notFoundFilterData: false,
        })
        this.filterKeysGet();
    }


    mainCategoryFilter = (param) => {
        const { showAllJobs, filteredData } = this.state;
        let rangeValues = [];
        if (filteredData.length > 0) {
            for (var i = 0; i < filteredData.length; i++) {
                if (filteredData[i].category == param) {
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
            for (var i = 0; i < showAllJobs.length; i++) {
                if (showAllJobs[i].category == param) {
                    rangeValues.push(showAllJobs[i])
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
        const { showAllJobs, filteredData, categoroyOfJob, categoryJob, stateOfJob, cityOfJob, TypeOfJob, notFoundFilterData, showRecord } = this.state;
        const antIcon = <Icon type="loading" style={{ fontSize: 120 }} spin />;
        // console.log("TCL: JobPortal -> getAllBusiness", showAllJobs);
        return (
            <div>
                <div className="row">
                    <div className="col-xs-12 col-sm-3 col-md-3 col-lg-3">
                        <Tabs defaultActiveKey="1">
                            <TabPane tab={
                                <span><Icon type="apple" /> Filter </span>}
                                key="1">
                                <JobFilter
                                    onChange={this.onChange}
                                    getState={this.getState}
                                    getCities={this.getCities}
                                    getSortType={this.getSortType}
                                    categoroyOfJob={categoroyOfJob}
                                    stateOfJob={stateOfJob}
                                    cityOfJob={cityOfJob}
                                    categoryJob={categoryJob}
                                    TypeOfJob={TypeOfJob}
                                />
                            </TabPane>
                            <TabPane tab={<span><Icon type="android" /> Category </span>} key="2">
                                <JobCategory
                                    mainCategoryFilter={this.mainCategoryFilter}
                                />
                            </TabPane>
                        </Tabs>
                    </div>
                    <div className="col-xs-12 col-sm-9 col-md-9 col-lg-9">
                        <JobFeatured
                            stateOfJob={stateOfJob}
                            cityOfJob={cityOfJob}
                            categoroyOfJob={categoroyOfJob}
                            TypeOfJob={TypeOfJob}
                            removeValue={this.removeValue}
                            showAllRooms={this.showAllRooms}
                            showAllJobs={showAllJobs}
                            filteredData={filteredData}
                            notFoundFilterData={notFoundFilterData}
                            showRecord={showRecord}
                        />
                    </div>
                </div>
            </div>
        )
    }
}
export default JobPortal;
