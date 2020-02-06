import React, { Component } from 'react';
import ProfileContact from './profileContact';
import ProfileListing from './profileListing';
import { Link } from "react-router-dom";
import { Redirect } from 'react-router';
import AsyncStorage from "@callstack/async-storage";
import { HttpUtils } from "../../Services/HttpUtils";
import { Tabs, Radio } from 'antd';
import { Rate } from 'antd';

const TabPane = Tabs.TabPane;

class TestComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            listing: true,
            listData1: [],
            listData2: [],
            listData3: [],
            listData4: [],
            listData5: [],
            listData6: [],
            allData: [],
            buySell: false,
            business: false,
            rooms: false,
            jobPortal: false,
            ecommerce: false,
            data: [],
        };
    }


    render() {
        const { arr1, arr2, arr3, arr4, arr5 } = this.props.listing;

        const noData = (
            <div style={{ marginTop: '125px' }}>
                <h1>
                    You dont have data to show...
            </h1>
            </div>
        )


        return (
            <div className="container" style={{ width: "90%" }}>
                <div className="row">
                    <h2 style={{ marginLeft: "15px" }}>Listings</h2>

                    {/* ===============Ad Listing start================= */}
                    {<Tabs defaultActiveKey="1">
                        <TabPane tab='Room Renting' key="1">
                            <div className="secondfold" style={{ backgroundColor: '#FBFAFA' }}>
                                <div className="index-content" style={{ marginTop: '20px' }}>
                                    <div className="row">
                                        {arr1 && arr1.length ? arr1.map((elem) => {
                                            let img = elem.imageurl && elem.imageurl[0] ||
                                                '../images/images.jpg';
                                            let title = elem.postingtitle || ''
                                            let str = elem.discription || '';
                                            if (str.length > 45) {
                                                str = str.substring(0, 45);
                                                str = str + '...'
                                            }
                                            return (
                                                <div className="col-sm-6 col-md-4" style={{ marginBottom: '20px', marginTop: '20px' }}>
                                                    <div className="card">
                                                        <Link to={{ pathname: `/detail_roomRent`, state: elem }}>
                                                            <div>
                                                                <img alt='' src={img} className="cardsImggRoom" style={{ marginBottom: '-10px' }} />
                                                            </div>
                                                            <div className="row" style={{ padding: "0" }}>
                                                                <div className="col-md-12" style={{ padding: "0" }}>
                                                                    <div className="col-md-6 col-sm-5 col-xs-5">
                                                                        <div className="pricingroomInProfileMyad">
                                                                            {'$' + elem.rent + ' ' + elem.pricemode}
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-6 col-sm-7 col-xs-7">
                                                                        <span className="rentstarInProfileMyad">
                                                                            <Rate disabled
                                                                                style={{ paddingBottom: '20px', marginTop: "-20px", fontFamily: 'Source Sans Pro, sans-serif', fontSize: "12px" }}
                                                                                allowHalf value={elem.star}
                                                                            />
                                                                            {elem.star}
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="roomdetailcardMainProfilefront">
                                                                <p style={{ fontFamily: 'Poppins, sans-serif' }}>
                                                                    {elem.postingtitle}
                                                                </p>

                                                                <p style={{ fontFamily: 'Poppins, sans-serif' }}>
                                                                    <span className="glyphicon glyphicon-map-marker"
                                                                        style={{ color: "#008080", margin: "0", left: "-3px" }}
                                                                    ></span>
                                                                    <span>
                                                                        <b>{elem.propertylocation.slice(0, 35)}</b></span>
                                                                    <br />
                                                                </p>
                                                            </div>
                                                            <table id="customers" className="margTopMobileDesk">
                                                                <tr>
                                                                    <td><span className="fa fa-inbox"
                                                                        style={{ color: "#236A4B", margin: "0", left: "-3px" }}
                                                                    ></span><span>{elem.furnished.slice(0, 9)}..</span></td>

                                                                    <td><span className="fa fa-users"
                                                                        style={{ color: "#236A4B", margin: "0", left: "-3px" }}
                                                                    ></span><span>{elem.accomodates} People</span></td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <span className="fa fa-shower" style={{ color: "#236A4B", margin: "0", left: "-3px" }}>
                                                                        </span>
                                                                        <span>Bathroom</span>
                                                                    </td>
                                                                    <td>
                                                                        <span className="fa fa-bed" style={{ color: "#236A4B", margin: "0", left: "-3px" }}>
                                                                        </span>
                                                                        <span>{elem.subSubCategory}</span>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </Link>
                                                    </div>
                                                </div>
                                            )
                                        }) :
                                            noData
                                        }
                                    </div>
                                </div>
                            </div>
                        </TabPane>
                        <TabPane tab='Bussiness Listing' key="2">
                            <div className="secondfold" style={{ backgroundColor: '#FBFAFA' }}>
                                <div className="index-content" style={{ marginTop: '20px' }}>
                                    <div className="row">
                                        {arr2 && arr2.length ? arr2.map((elem) => {
                                            let img = elem.businessImages && elem.businessImages[0] || '../images/images.jpg';
                                            let title = elem.businessname || ''
                                            let str = elem.description || '';
                                            if (str.length > 45) {
                                                str = str.substring(0, 45);
                                                str = str + '...'
                                            }
                                            return (
                                                <div className="col-sm-6 col-md-4" style={{ marginBottom: '20px', marginTop: '20px' }}>
                                                    <div className="card">
                                                        <Link to={{ pathname: `/detail_business`, state: elem }}>
                                                            <img alt='' src={img} className="cardsImgg" />
                                                            <div className="businessborder">
                                                                <div className="ratewithbox">
                                                                    <span>
                                                                        <Rate disabled
                                                                            style={{ fontSize: "12px" }}
                                                                            allowHalf value={elem.star}
                                                                        />
                                                                        {elem.star}
                                                                    </span>
                                                                </div>
                                                                <div className="businessname">
                                                                    <h4 style={{ fontSize: '15px', marginLeft: "-1px", marginBottom: "15px", marginTop: "10px !important" }}>
                                                                        <b>{elem.businessname}</b>
                                                                    </h4>

                                                                    <p style={{ marginTop: "-15px",paddingBottom: '10px' }}>

                                                                        <span className="glyphicon glyphicon-map-marker"
                                                                            style={{ color: "#008080", margin: "2px" }}
                                                                        ></span>
                                                                        <span style={{ color: "black" }}>{elem.city}, {elem.state}</span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                </div>
                                            )
                                        }) :
                                            noData
                                        }
                                    </div>
                                </div>
                            </div>
                        </TabPane>
                        <TabPane tab='Buy & Sell' key="3">
                            <div className="secondfold" style={{ backgroundColor: '#FBFAFA' }}>
                                <div className="index-content" style={{ marginTop: '20px' }}>
                                    <div className="row">
                                        {arr3 && arr3.length ? arr3.map((elem) => {
                                            let img = elem.images && elem.images[0] || '../images/images.jpg';
                                            let title = elem.title || ''
                                            let str = elem.description || '';
                                            if (str.length > 45) {
                                                str = str.substring(0, 45);
                                                str = str + '...'
                                            }
                                            return (
                                                // <div className="col-md-4"
                                                //     style={{
                                                //         marginBottom: '20px',
                                                //         marginTop: '20px'
                                                //     }}>
                                                //     <div className="card">
                                                //         <Link to={{ pathname: `/detail_buySell`, state: elem }}>
                                                //             <img alt='' src={img} />
                                                //             <h4>{title}</h4>
                                                //             <p>{str}</p>
                                                //         </Link>

                                                //     </div>
                                                // </div>
                                                <div className="col-sm-6 col-md-4" style={{ marginBottom: '20px', marginTop: '20px' }}>
                                                    <div className="card">
                                                        <Link to={{ pathname: `/detail_buySell`, state: elem }}>
                                                            <img alt='' src={img} className="cardsImgg" />
                                                            <div className="pricingSell">
                                                                {!elem.hideprice ? '$' + elem.price : 'Hide'}
                                                            </div>
                                                            <div className="buyCardProfile">
                                                                <h3 style={{ marginBottom: '5px', fontSize: '20px' }}>{elem.modelname}</h3>
                                                                <p style={{ fontFamily: 'Poppins, sans-serif' }}>
                                                                    <span className="glyphicon glyphicon-map-marker"
                                                                        style={{ color: "#008080", margin: "0", left: "-3px" }}
                                                                    ></span><span>{elem.address.slice(0, 7)},{elem.state}..</span>
                                                                </p>
                                                                <p style={{ fontFamily: 'Poppins, sans-serif' }}>
                                                                    <span className="glyphicon glyphicon-phone"
                                                                        style={{ color: "#008080", margin: "0", left: "-3px" }}></span>
                                                                    <span>{elem.contactnumber}</span>
                                                                </p>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                </div>
                                            )
                                        }) :
                                            noData
                                        }
                                    </div>
                                </div>
                            </div>
                        </TabPane>
                        <TabPane tab='Job Portal' key="4">
                            <div className="secondfold" style={{ backgroundColor: '#FBFAFA' }}>
                                <div className="index-content" style={{ marginTop: '20px' }}>
                                    <div className="row">
                                        {arr4 && arr4.length ? arr4.map((elem) => {
                                            let img = elem.arr_url && elem.arr_url[0] || '../images/images.jpg';
                                            let title = elem.compName || ''
                                            let str = elem.compDescription || '';
                                            if (str.length > 45) {
                                                str = str.substring(0, 45);
                                                str = str + '...'
                                            }
                                            return (
                                                // <div className="col-md-4"
                                                //     style={{
                                                //         marginBottom: '20px',
                                                //         marginTop: '20px'
                                                //     }}>
                                                //     <div className="card">
                                                //         <Link to={{ pathname: `/detail_jobPortal`, state: elem }}>
                                                //             <img alt='' src={img} />
                                                //             <h4>{title}</h4>
                                                //             <p>{str}</p>
                                                //         </Link>

                                                //     </div>
                                                // </div>
                                                <div className="col-sm-6 col-md-4" style={{ marginBottom: '20px', marginTop: '20px' }}>
                                                    <div className="card">
                                                        <Link to={{ pathname: `/detail_jobPortal`, state: elem }}>
                                                            <img alt='' src={img} className="cardsImgg" style={{ marginBottom: '-20px' }} />
                                                            <div className="jobcardcarouselProfile">
                                                                <div className="row">
                                                                    <div className="col-md-9 col-xs-9">
                                                                        <h5 className="jobCatProfile">
                                                                            <b>{elem.jobCat.slice(0, 9)}...</b>
                                                                        </h5>
                                                                        <div>
                                                                            <span className="glyphicon glyphicon-map-marker" style={{ color: "#236A4B", marginRight: "2px" }}></span>
                                                                            <span style={{ color: "black" }}>{elem.location.slice(0, 7)}..</span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-3 col-xs-3"></div>
                                                                </div>
                                                            </div>
                                                            <div className="jobcategorycarousel">
                                                                <div className="row">
                                                                    <div className="col-md-9">
                                                                        <span className="fa fa-bookmark das">
                                                                        </span>
                                                                        <span style={{ color: "black" }}>{elem.jobType && elem.jobType}</span>
                                                                    </div>
                                                                    <div className="col-md-3">

                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                </div>
                                            )
                                        }) :
                                            noData
                                        }
                                    </div>
                                </div>
                            </div>
                        </TabPane>
                        <TabPane tab='E Commerce' key="5">
                            <div className="secondfold" style={{ backgroundColor: '#FBFAFA' }}>
                                <div className="index-content" style={{ marginTop: '20px' }}>
                                    <div className="row">
                                        {arr5 && arr5.length ? arr5.map((elem) => {
                                            let img = elem.images && elem.shopLogo[0] || '../images/images.jpg';

                                            let title = elem.product || ''
                                            let str = elem.brandName || '';
                                            if (str.length > 45) {
                                                str = str.substring(0, 45);
                                                str = str + '...'
                                            }
                                            return (
                                                <div className="col-sm-6 col-md-4" style={{ marginBottom: '20px', marginTop: '20px' }}>
                                                    <div className="sellercardopacity" style={{ cursor: 'pointer' }}>
                                                        <div className="">
                                                            <Link to={{
                                                                pathname: `/EcommerceProfile/${elem._id}`,
                                                                state: elem
                                                            }}>
                                                                <div className="sellerstorecard" >
                                                                    <img alt='img' src={img} />
                                                                </div>
                                                                <div style={{ marginLeft: '15px', marginTop: "20px", textAlign: "left", marginBottom: "10px" }}>
                                                                    <h5 className="myProfileShoptitle">{elem.shopTitle}</h5>
                                                                    <span className="glyphicon glyphicon-map-marker"
                                                                        style={{ color: "#236A4B", marginRight: "2px" }}
                                                                    ></span>
                                                                    <span style={{ color: "black" }}>{elem.shopAddress.slice(0, 10)}..</span>
                                                                </div>
                                                                <div>
                                                                    <div class="text">View Shop</div>
                                                                </div>
                                                            </Link>
                                                        </div>

                                                    </div>
                                                </div>

                                            )
                                        }) :
                                            noData
                                        }
                                    </div>
                                </div>
                            </div>
                        </TabPane>
                    </Tabs>}
                </div>
            </div>
        )
    }
}

export default TestComponent;
