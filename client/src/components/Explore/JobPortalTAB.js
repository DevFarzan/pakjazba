import React, { Component } from 'react';
import JobFilter from '../job_portal/CategoriesJobs';
import JobCategory from '../job_portal/jobClassifiedicon';
import { Tabs, Icon } from 'antd';
    
class JobPortal extends Component{
    constructor(props) {
        super(props)
        this.state = {
            
    }
}
    
    render(){
        const { TabPane } = Tabs;
        const { states, noText, showroomrents, roomrents, filteredArr, cities, to, from, loader, objData, goDetail } = this.state;
        const antIcon = <Icon type="loading" style={{ fontSize: 120 }} spin />;
        return(
            <div>
                <div className="row">
                    <div className="col-xs-12 col-sm-3 col-md-3 col-lg-3">
                        <Tabs defaultActiveKey="1">
                            <TabPane tab={
                                <span><Icon type="apple" /> Filter </span>}
                                key="1">
                                <JobFilter />
                            </TabPane>
                            <TabPane tab={
                                <span><Icon type="android" /> Category </span>}
                                key="2">
                                <JobCategory />
                            </TabPane>
                        </Tabs>
                    </div>
                    <div className="col-xs-12 col-sm-9 col-md-9 col-lg-9">
                        {/* <Roomrenting1content/> */}
                    </div>
                </div>
            </div>
        )
    }
}
export default JobPortal;
