import React, { Component } from 'react';
import { Tabs, Icon } from 'antd';

class RoomRentTAB extends Component{
    constructor(props) {
        super(props);
        this.state = {
        
        }
    }
    render(){
        const { TabPane } = Tabs;
        return(
            <div>
                <div className="row">
                    <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                        <Tabs defaultActiveKey="1">
                            <TabPane tab={
                                <span> Filter </span>}
                                key="1">
                                    Tab 1
                            </TabPane>
                            <TabPane tab={
                                <span> Category </span>}
                                key="2">
                                    Tab 2
                            </TabPane>
                        </Tabs>
                    </div>
                    <div className="col-xs-9 col-sm-9 col-md-9 col-lg-9">
                        
                    </div>
                </div>
            </div>
        )
    }
}
export default RoomRentTAB;
