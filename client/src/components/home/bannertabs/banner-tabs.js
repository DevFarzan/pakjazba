import React, { Component } from 'react';
import './banner-tabs.css';
import RoomTabs from './room-tabs';
import BusinessTabs from './BusinessTabs'
import BuyTab from './buy-tabs';
import JobTabs from './job-tabs';
import EventTabs from './event-tabs';
import EcommerceTabs from './ecommerce-tabs'

class BannerTabs extends Component {
    render() {
        return (
            <div class="container">
                <div class="row">
                    <section>
                        <div class="wizard">
                            <div class="wizard-inner">

                                <ul class="nav nav-tabs" role="tablist">

                                    <li role="presentation" class="active">
                                        <a href="#tab1" data-toggle="tab" aria-controls="tab1" role="tab" title="Room Renting">
                                            <span>
                                                <img src="./images/homeicon/roomRental.png" alt="" />
                                            </span>
                                        </a>
                                    </li>

                                    <li role="presentation">
                                        <a href="#tab2" data-toggle="tab" aria-controls="tab2" role="tab" title="Bussiness">
                                            <span>
                                                <img src="./images/homeicon/businessListing.png" alt="" />
                                            </span>
                                        </a>
                                    </li>
                                    <li role="presentation">
                                        <a href="#tab3" data-toggle="tab" aria-controls="tab3" role="tab" title="Buy & Sell">
                                            <span>
                                                <img src="./images/homeicon/buyNSell.png" alt="" />
                                            </span>
                                        </a>
                                    </li>

                                    <li role="presentation">
                                        <a href="#tab4" data-toggle="tab" aria-controls="tab6" role="tab" title="Jobs">
                                            <span>
                                                <img src="./images/homeicon/jobPortal.png" alt="" />
                                            </span>
                                        </a>
                                    </li>

                                    <li role="presentation">
                                        <a href="#tab5" data-toggle="tab" aria-controls="tab5" role="tab" title="Events">
                                            <span>
                                                <img src="./images/homeicon/events.png" alt="" />
                                            </span>
                                        </a>
                                    </li>
                                    <li role="presentation">
                                        <a href="#tab6" data-toggle="tab" aria-controls="tab4" role="tab" title="Ecommerce">
                                            <span>
                                                <img src="./images/homeicon/ecommerce.png" alt="" />
                                            </span>
                                        </a>
                                    </li>

                                </ul>
                            </div>

                            <form role="form">
                                <div className="cardinside">
                                    <div class="tab-content">
                                        <div class="tab-pane active" role="tabpanel" id="tab1">
                                            <RoomTabs />
                                        </div>
                                        <div class="tab-pane" role="tabpanel" id="tab2">
                                            <BusinessTabs />
                                        </div>
                                        <div class="tab-pane" role="tabpanel" id="tab3">
                                            <BuyTab />
                                        </div>
                                        <div class="tab-pane" role="tabpanel" id="tab4">
                                            <JobTabs />
                                        </div>
                                        <div class="tab-pane" role="tabpanel" id="tab5">
                                            <EventTabs />
                                        </div>
                                        <div class="tab-pane" role="tabpanel" id="tab6">
                                            <EcommerceTabs />
                                        </div>
                                        <div class="clearfix"></div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </section>
                </div>
            </div>
        )
    }
}

export default BannerTabs;