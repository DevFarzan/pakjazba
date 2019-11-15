import React, { Component } from 'react';
import ProfileContact from './profileContact';
import ProfileListing from './profileListing';
import { Link } from "react-router-dom";
import { Redirect } from 'react-router';
import AsyncStorage from "@callstack/async-storage";
import { HttpUtils } from "../../Services/HttpUtils";
import { Tabs, Radio } from 'antd';

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

    // componentWillMount(){
    //     console.log(this.props , 'test compenent')

    // }
    // componentDidMount() {
    //     window.scrollTo(0, 0);
    //     this.handleLocalStorage();
    // }

    // handleLocalStorage = () => {
    //     AsyncStorage.getItem('user')
    //         .then((obj) => {
    //             let userObj = JSON.parse(obj)
    //             if (!!userObj) {
    //                 this.getprofileData(userObj.profileId, userObj._id)
    //                 this.setState({
    //                     userId: userObj._id,
    //                     profileId: userObj.profileId
    //                 })
    //             }
    //         })
    // }

    // async getprofileData(id, userId) {
    //     let req = await HttpUtils.get('getprofile?profileId=' + id)
    //     let user = req.content;
    //     this.setState({
    //         name: user.name,
    //         email: user.email,
    //         location: user.location,
    //         description: user.description,
    //         desLen: user.description ? 500 - user.description.length : 500,
    //         phone: user.phone,
    //         twitter: user.twitterlink,
    //         facebook: user.facebooklink,
    //         imageUrl: user.imageurl,
    //         url: user.imageurl
    //     })
    //     this.getAllBusiness(userId)
    // }

    // async getAllBusiness(id) {
    //     let arr1 = [];
    //     let arr2 = [];
    //     let arr3 = [];
    //     let arr4 = [];
    //     let arr5 = [];
    //     let arr6 = [];

    //     let req = await HttpUtils.get('marketplace')
    //     req.business && req.business.map((elem) => {
    //         if (elem.user_id == id) {
    //             // console.log(id, 'Miljao yr')
    //             let data = { ...elem, ...{ route: 'business' } }
    //             arr1.push(data)
    //         }
    //         // console.log(elem, 'kahn ho tum')
    //     })
    //     req.roomrentsdata && req.roomrentsdata.map((elem) => {
    //         if (elem.user_id === id) {
    //             let data = { ...elem, ...{ route: 'rooms' } }
    //             arr2.push(data)
    //         }
    //     })
    //     req.busell && req.busell.map((elem) => {
    //         if (elem.user_id === id) {
    //             let data = { ...elem, ...{ route: 'buySell' } }
    //             arr3.push(data)
    //         }
    //     })
    //     req.jobPortalData && req.jobPortalData.map((elem) => {
    //         if (elem.user_id === id) {
    //             let data = { ...elem, ...{ route: 'jobPortal' } }
    //             arr4.push(data)
    //         }
    //     })
    //     req.ecommerce && req.ecommerce.map((elem) => {
    //         if (elem.user_Id === id) {
    //             let data = { ...elem, ...{ route: 'ecommerce' } }
    //             arr5.push(data)
    //         }
    //     })
    //     req.entertainment && req.entertainment.map((elem) => {
    //         if (elem.user_Id === id) {
    //             let data = { ...elem, ...{ route: 'ecommerce' } }
    //             arr5.push(data)
    //         }
    //     })
    //     this.setState({
    //         listData1: arr3,
    //         listData2: arr2,
    //         listData3: arr1,
    //         listData4: arr4,
    //         listData5: arr5,
    //         listData6: arr6
    //     })
    // }

    // funcIndexes(page) {
    //     let to = 6 * page;
    //     let from = to - 6;
    //     return { from: page === 1 ? 0 : from, to: page === 1 ? 6 : to }
    // }

    // onChange = (page) => {
    //     const { allData } = this.state;
    //     let indexes = this.funcIndexes(page)
    //     this.setState({
    //         current: page,
    //         listData: allData.slice(indexes.from, indexes.to)
    //     });
    // }

    // handleListing() {
    //     this.setState({
    //         listing: true,

    //     })
    // }

    // handleModeChange = (e) => {
    //     const mode = e.target.value;

    //     this.setState({ mode });
    // }

    render() {
        // const { listing, listData1, listData2, listData3, listData4, listData5, listData6, buySell, business, rooms, jobPortal, ecommerce, entertainment, data } = this.state;
        const { arr1, arr2, arr3, arr4, arr5 } = this.props.listing;

        // console.log(arr1 , 'arr1')
        // console.log(arr2 , 'arr2')
        // console.log(arr3 , 'arr3')
        // console.log(arr4 , 'arr4')
        console.log(arr5, 'arr5')


        // console.log(listData3, 'listData3')
        // if (buySell) {
        //     return (
        //         <Redirect to={{ pathname: '/postad_buysell', state: data }} />
        //     )
        // } else if (business) {
        //     return (
        //         <Redirect to={{ pathname: '/postad_business', state: data }} />
        //     )
        // } else if (rooms) {
        //     return (
        //         <Redirect to={{ pathname: '/postad_Roommates', state: data }} />
        //     )
        // } else if (jobPortal) {
        //     return (
        //         <Redirect to={{ pathname: '/postad_jobPortal', state: data }} />
        //     )
        // }
        // else if (ecommerce) {
        //     return (
        //         <Redirect to={{ pathname: '/Forms_Ecommerce', state: data }} />
        //     )
        // }
        // else if (entertainment) {
        //     return (
        //         <Redirect to={{ path: "/UploadVideo", state: data }} />
        //     )
        // }


        // let passObj = {
        //     arr1: listData3,
        //     arr2: listData2,
        //     arr3: listData1,
        //     arr4: listData4,
        //     arr5: listData5,
        //     arr6: listData6,
        // }

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
                    {<Tabs defaultActiveKey="2">
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
                                                <div className="col-md-4"
                                                    style={{
                                                        marginBottom: '20px',
                                                        marginTop: '20px'
                                                    }}>
                                                    <div className="card">
                                                        <Link to={{ pathname: `/detail_roomRent`, state: elem }}>
                                                            <img alt='' src={img} />
                                                            <h4>{title}</h4>
                                                            <p>{str}</p>
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
                                                <div className="col-md-4"
                                                    style={{
                                                        marginBottom: '20px',
                                                        marginTop: '20px'
                                                    }}>
                                                    <div className="card">
                                                        <Link to={{ pathname: `/detail_business`, state: elem }}>
                                                            <img alt='' src={img} />
                                                            <h4>{title}</h4>
                                                            <p>{str}</p>
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
                                                <div className="col-md-4"
                                                    style={{
                                                        marginBottom: '20px',
                                                        marginTop: '20px'
                                                    }}>
                                                    <div className="card">
                                                        <Link to={{ pathname: `/detail_buySell`, state: elem }}>
                                                            <img alt='' src={img} />
                                                            <h4>{title}</h4>
                                                            <p>{str}</p>
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
                                            // console.log(elem, 'elem')
                                            let img = elem.arr_url && elem.arr_url[0] || '../images/images.jpg';
                                            let title = elem.compName || ''
                                            let str = elem.compDescription || '';
                                            if (str.length > 45) {
                                                str = str.substring(0, 45);
                                                str = str + '...'
                                            }
                                            return (
                                                <div className="col-md-4"
                                                    style={{
                                                        marginBottom: '20px',
                                                        marginTop: '20px'
                                                    }}>
                                                    <div className="card">
                                                        <Link to={{ pathname: `/detail_jobPortal`, state: elem }}>
                                                            <img alt='' src={img} />
                                                            <h4>{title}</h4>
                                                            <p>{str}</p>
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
                                            console.log(elem, 'elem')
                                            let img = elem.images && elem.images[0] || '../images/images.jpg';

                                            let title = elem.product || ''
                                            let str = elem.brandName || '';
                                            if (str.length > 45) {
                                                str = str.substring(0, 45);
                                                str = str + '...'
                                            }
                                            return (
                                                <div className="col-md-3 col-sm-4" style={{
                                                    marginBottom: '20px',
                                                    marginTop: '20px'
                                                }}>
                                                    <div className="sellercardopacity" style={{ cursor: 'pointer' }}>
                                                        <div className="overlay1">
                                                            <Link to={{
                                                                pathname: `/EcommerceProfile/${elem._id}`,
                                                                state: elem
                                                            }}>
                                                                <div className="sellerstorecard" >
                                                                    <img alt='img' src={img} />
                                                                </div>
                                                                <h4 style={{ marginTop: "20px", textAlign: "left" }}>{elem.shopTitle}</h4>
                                                                <div class="middle">
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
