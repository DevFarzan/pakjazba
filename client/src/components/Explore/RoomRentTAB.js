import React, { Component } from 'react';
import RoomRentFilterContent from '../roomrenting/roomrenting2contentarea';
import { Tabs, Icon } from 'antd';
import Roomrenting1content from "../roomrenting/roomrenting1content";
import RoomrentingCatagory from '../roomrenting/roomrentinficon';
    
class RoomRentTAB extends Component{
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
                                <RoomRentFilterContent />
                            </TabPane>
                            <TabPane tab={
                                <span><Icon type="android" /> Category </span>}
                                key="2">
                                <RoomrentingCatagory/>
                            </TabPane>
                        </Tabs>
                    </div>
                    <div className="col-xs-12 col-sm-9 col-md-9 col-lg-9">
                        <Roomrenting1content/>
                    </div>
                </div>
            </div>
        )
    }
}
export default RoomRentTAB;
