import React, { Component } from "react";
import { Tabs, Icon } from 'antd';
import Headermenu from "../header/headermenu";
import RoomRentTAB from './RoomRentTAB';
import BusinesListing from './BusinessListingTAB';
import BuyNsell from './Buy&SellTAB';
import JobPortal from './JobPortalTAB';
import EventTab from './EventTab';
import EntertainmentTab from './EntertainmentTAB';
import EcommerceTab from './EcommerceTAB';
import "./explore.css";

class Explore extends Component {
    constructor(props) {
        super(props);
        this.state = {
            keyOfTab: '1',
            dataFromHome: ''
        };
    }

    componentWillMount() {
        window.scrollTo(0, 0);
        let data = this.props.location.state;
        if (data) {
            if (data.homefilter) {
                this.setState({
                    keyOfTab: data.keyOfTab,
                    dataFromHome: data
                })
            }
            else if (data) {
                this.setState({
                    keyOfTab: data
                })
            }
        }
    }

    render() {
        const { TabPane } = Tabs;
        const { keyOfTab, dataFromHome } = this.state;
        return (
            <div>
                <div className="headerDivv">
                    <div className="background-image">
                        <Headermenu />
                    </div>
                </div>
                <div className="row">
                    <div className="">
                        <h2 className="roomRentTabText">What are you looking for?</h2>
                        {keyOfTab && <Tabs defaultActiveKey={keyOfTab}>
                            <TabPane
                                tab={
                                    <span>
                                        <i className="fa fa-bed"></i> Room Renting{" "}
                                    </span>
                                }
                                key="1"
                            >
                                <RoomRentTAB dataFromHome={dataFromHome} />
                            </TabPane>
                            <TabPane
                                tab={
                                    <span>
                                        <i className="fa fa-briefcase"></i> Business Listing{" "}
                                    </span>
                                }
                                key="2"
                            >
                                <BusinesListing dataFromHome={dataFromHome} />
                            </TabPane>
                            <TabPane
                                tab={
                                    <span>
                                        <Icon type="shopping" /> Buy & Sell{" "}
                                    </span>
                                }
                                key="3"
                            >
                                <BuyNsell dataFromHome={dataFromHome}/>
                            </TabPane>
                            <TabPane
                                tab={
                                    <span>
                                        <i className="fa fa-user-md"></i> Job Portal{" "}
                                    </span>
                                }
                                key="4"
                            >
                                <JobPortal dataFromHome={dataFromHome}/>
                            </TabPane>
                            <TabPane
                                tab={
                                    <span>
                                        <i className="fa fa-microphone"></i> Events{" "}
                                    </span>
                                }
                                key="5"
                            >
                                <EventTab dataFromHome={dataFromHome}/>
                            </TabPane>
                            <TabPane
                                tab={
                                    <span>
                                        <i className="fa fa-tv"></i> Entertainment{" "}
                                    </span>
                                }
                                key="6"
                            >
                                <EntertainmentTab {...this.props} />
                            </TabPane>
                            <TabPane
                                tab={
                                    <span>
                                        <i className="fa fa-shopping-cart"></i> Ecommerce{" "}
                                    </span>
                                }
                                key="7"
                            >
                                <EcommerceTab dataFromHome={dataFromHome}/>
                            </TabPane>
                        </Tabs>
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default Explore;
