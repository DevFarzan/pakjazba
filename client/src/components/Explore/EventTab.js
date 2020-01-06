import React, { Component } from 'react';
import RoomRentFilterContent from '../roomrenting/roomrenting2contentarea';
import { Tabs, Icon } from 'antd';
import EventAds from '../events/Eventfeaturedcard';
import { HttpUtils } from "../../Services/HttpUtils";
    
class EventTab extends Component{
    constructor(props) {
        super(props)
        this.state = {
            events: []
            
    }
}
componentDidMount() {
    window.scrollTo(0, 0);
    this.setState({ showBtn: true });
    this.getAllBusiness();
}

async getAllBusiness() {
    var res = await HttpUtils.get('marketplace');
    if (res) {
        if (res.code === 200) {
            let data = res.eventPortalData;
            this.setState({
                events: data ? data : [],
                showBtn: false
            });
        }
    }
    // this.handleLocalStorage();
}

componentWillUnmount() {
    let inputValue = '';
    if (this.props.text.length) {
        const { dispatch } = this.props;
        dispatch({ type: 'SEARCHON', inputValue })
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
                                
                            </TabPane>
                        </Tabs>
                    </div>
                    <div className="col-xs-12 col-sm-9 col-md-9 col-lg-9">
                        <EventAds events={this.state.events}/>
                    </div>
                </div>
            </div>
        )
    }
}
export default EventTab;
