import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Modal, Tabs, Icon } from 'antd';
import Headermenu from "../header/headermenu";
import RoomRentTAB from './RoomRentTAB';
import BusinesListing from './BusinessListingTAB';
import BuyNsell from './Buy&SellTAB';
import JobPortal from './JobPortalTAB';
import "./explore.css";

class Explore extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  componentDidUpdate() {}

  render() {
    const { TabPane } = Tabs;
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
                    <Tabs defaultActiveKey="1">
                        <TabPane
                            tab={
                                <span>
                                <Icon type="apple" /> Room Renting{" "}
                                </span>
                            }
                            key="1"
                            >
                                <RoomRentTAB />
                        </TabPane>
                        <TabPane
                            tab={
                                <span>
                                <Icon type="android" /> Business Listing{" "}
                                </span>
                            }
                            key="2"
                            >
                                <BusinesListing />
                        </TabPane>
                        <TabPane
                            tab={
                                <span>
                                <Icon type="apple" /> Buy & Sell{" "}
                                </span>
                            }
                            key="3"
                            >
                                <BuyNsell />
                        </TabPane>
                        <TabPane
                            tab={
                                <span>
                                <Icon type="android" /> Job Portal{" "}
                                </span>
                            }
                            key="4"
                            >
                                <JobPortal />
                        </TabPane>
                        <TabPane
                            tab={
                                <span>
                                <Icon type="apple" /> Events{" "}
                                </span>
                            }
                            key="5"
                            >
                                <RoomRentTAB />
                        </TabPane>
                        <TabPane
                            tab={
                                <span>
                                <Icon type="android" /> Entertainment{" "}
                                </span>
                            }
                            key="6"
                            >
                                <RoomRentTAB />
                        </TabPane>
                        <TabPane
                            tab={
                                <span>
                                <Icon type="android" /> Ecommerce{" "}
                                </span>
                            }
                            key="6"
                            >
                                <RoomRentTAB />
                        </TabPane>
                    </Tabs>
                </div>
            </div>
        </div>
    );
  }
}

export default Explore;
