import React, { Component } from 'react';
import JobFilter from '../job_portal/CategoriesJobs';
import JobCategory from '../job_portal/jobClassifiedicon';
import JobFeatured from '../job_portal/featuredJob';
import { Tabs, Icon } from 'antd';
import { HttpUtils } from "../../Services/HttpUtils";
import AsyncStorage from "@callstack/async-storage/lib/index";

let filterJobCat = [];
let filterCityName = [];
let filterStateName = [];
let filterJobType = [];

class JobPortal extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: false,
            showAllJobs: [],
            filteredData: [],
            notFoundFilterData: false,
            showRecord: true,

            categoryJob: [],
            state: [],
            city: [],
            typeSortJob: [],

            categoroyOfJob: [],
            stateOfJob: [],
            cityOfJob: [],
            TypeOfJob: [],
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
    
    onChange = (value) => {
        let categoryValue = [];
        categoryValue.push(value[1]);
        this.setState({
            categoryJob: value,
        })
        filterJobCat = categoryValue
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

    filterKeysGet= () => {
        // console.log("TCL", filterKeysGet);
    }

    render() {
        const { TabPane } = Tabs;
        const { states, noText, showAllJobs, roomrents, filteredArr, cities, to, from, loader, objData, goDetail } = this.state;
        const antIcon = <Icon type="loading" style={{ fontSize: 120 }} spin />;
        console.log("TCL: JobPortal -> getAllBusiness", showAllJobs);
        return (
            <div>
                <div className="row">
                    <div className="col-xs-12 col-sm-3 col-md-3 col-lg-3">
                        <Tabs defaultActiveKey="1">
                            <TabPane tab={
                                <span><Icon type="apple" /> Filter </span>}
                                key="1">
                                <JobFilter getState={this.getState} getCities={this.getCities} />
                            </TabPane>
                            <TabPane tab={
                                <span><Icon type="android" /> Category </span>}
                                key="2">
                                <JobCategory />
                            </TabPane>
                        </Tabs>
                    </div>
                    <div className="col-xs-12 col-sm-9 col-md-9 col-lg-9">
                        <JobFeatured />
                    </div>
                </div>
            </div>
        )
    }
}
export default JobPortal;
