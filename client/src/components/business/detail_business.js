import React, { Component } from 'react';
import Burgermenu from '../header/burgermenu';
import Headermenu from '../header/headermenu';
import Slider from '../header/Slider';
import Footer from '../footer/footer';
import "./detail_business.css";
import moment from 'moment';
import { Carousel, Rate, notification, Icon, Spin, Modal } from 'antd';
import { Redirect } from 'react-router';
import { HttpUtils } from "../../Services/HttpUtils";
import AsyncStorage from "@callstack/async-storage/lib/index";
import { Tabs } from 'antd';
// import FbImageLibrary from '../../lib/react-fb-image-grid'

class DetailBusiness extends Component {
    constructor(props) {
        super()
        this.state = {
            isData: true,
            data: {},
            star: 0,
            name: '',
            email: '',
            msg: '',
            name1: '',
            email1: '',
            msg1: '',
            reviews: [],
            loader: false,
            goProfile: false,
            previewVisible: false,
            item: 4,
            rating: 0
        }
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        let data = this.props.location.state;
        if (data === undefined) {
            this.setState({
                isData: false
            })
        } else {
            this.setState({
                isData: true,
                data: data
            })
            this.getReviews(data);
            this.handleLocalStorage();
        }
    }

    handleLocalStorage = () => {
        AsyncStorage.getItem('user')
            .then((obj) => {
                let userObj = JSON.parse(obj)
                if (!!userObj) {
                    this.getProfile(userObj);
                }
            })
    }

    async getProfile(userObj) {
        let req = await HttpUtils.get('getprofile?profileId=' + userObj.profileId)
        this.setState({
            userId: userObj._id,
            profileId: userObj.profileId,
            userImg: req.content ? req.content.imageurl : '',
            userName: userObj.name
        })
    }

    async getReviews(data) {
        let res = await HttpUtils.get('getreviews')
        if (res.code === 200) {
            let filteredReviews = res.content.filter((elem) => elem.objid === data._id),
                rating = 0
            filteredReviews.map((elem) => rating += +elem.star)
            rating = rating / filteredReviews.length;

            this.setState({ reviews: filteredReviews, rating })
        }
    }

    handleChange(value) {
        this.setState({ star: value })
    }

    onChangeReview(e) {
        let target = e.target.id;
        if (target === 'name1') {
            this.setState({ name1: e.target.value })
        } else if (target === 'email1') {
            this.setState({ email1: e.target.value })
        } else if (target === 'message1') {
            this.setState({ msg1: e.target.value })
        }
    }

    async submitReview() {
        this.setState({ loader: true })
        let { name1, email1, msg1, star, reviews, data, userId, profileId, userImg } = this.state;
        let obj = {
            objId: data._id,
            name: name1,
            email: email1,
            message: msg1,
            star,
            written: moment().format('LL'),
            userId,
            profileId,
            userImg
        }
        let res = await HttpUtils.post('reviews', obj)
        reviews.push(obj)
        if (res.code === 200) {
            let message1 = 'Your review sent successfully'
            this.openNotification(message1)
            this.setState({ name1: '', email1: '', msg1: '', star: 0, reviews, loader: false })
        }
    }

    async submitMessage() {
        this.setState({ loader: true })
        const { name, email, msg, data } = this.state;
        let obj = {
            name,
            sender: email,
            msg,
            receiver: data.businessemail,
            written: moment().format('LL')
        }

        let res = await HttpUtils.post('sendmessage', obj)
        if (res.code === 200) {
            let message1 = 'Your message sent successfully'
            this.openNotification(message1)
            this.setState({ name: '', email: '', msg: '', loader: false })
        }
    }

    openNotification(msg) {
        notification.open({
            message: 'Success ',
            description: msg,
        });
    };

    onChangeInput(e) {
        let target = e.target.id;
        if (target === 'name') {
            this.setState({ name: e.target.value })
        } else if (target === 'email') {
            this.setState({ email: e.target.value })
        } else if (target === 'message') {
            this.setState({ msg: e.target.value })
        }
    }

    // goToProfile(){
    //     this.setState({goProfile : true})
    // }

    goToProfile = (reviewUserId, reviewProfileId) => {
        this.setState({ goProfile: true, reviewUserId, reviewProfileId })
    }

    handleCancel = () => {
        this.setState({ previewVisible: false })
    }

    render() {
        const { TabPane } = Tabs;
        const { isData, data, reviews, goProfile, previewVisible, previewImage, item, reviewUserId, reviewProfileId, rating } = this.state,
            hide = true,
            antIcon = <Icon type="loading" style={{ fontSize: 24, marginRight: '10px' }} spin />;
        let images = data.businessImages || data.arr_url;
        if (!isData) {
            return <Redirect to='/' />
        }
        if (goProfile) {
            return <Redirect to={{ pathname: '/profile_userDetail', state: { userId: reviewUserId, profileId: reviewProfileId } }} />
        }
        console.log("TCL: DetailBusiness -> reviews -> reviews", reviews);

        return (
            <div>
                <Headermenu />
                {images && <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" style={{ padding: '0' }}>
                    <img src={images[0]} alt="banner" className="bannerBusinessTop" />
                    <div className="row BannerTxtBusiness">
                        <div className="col-xs-12 col-sm-10 col-md-10 col-lg-10">
                            <h1 className="EventBanerTextCsS">{data.businessName || data.businessname}</h1>
                            <p className="bannerStarBusines">
                                <Rate disabled style={{ paddingBottom: '20px', marginTop: "-10px", fontSize: "19px" }} allowHalf value={rating} /> {rating}
                            </p>
                        </div>
                        <div className="col-xs-12 col-sm-2 col-md-2 col-lg-2">
                            <button className="btnCallEventbaner">
                                <Icon type="phone" /> <span>Call Now</span>
                            </button>
                        </div>
                    </div>
                </div>}
                <div className="row tabMainDiV tabTop">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <Tabs defaultActiveKey="1">
                            <TabPane
                                tab={
                                    <span>
                                        Detail{" "}
                                    </span>
                                }
                                key="1"
                            >
                                <div style={{ backgroundColor: "rgb(247, 245, 237)", paddingTop: '20px' }}>
                                    <div className="row">
                                        <div className="col-md-1"></div>
                                        <div className="col-md-5">
                                            <div className="row RoomMainDivS" style={{ margin: '0px 0px 20px 0px' }}>
                                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" style={{ display: 'inline-flex' }}>
                                                        <Icon type="unordered-list" /><h5 className="headingMainRoom">Description</h5>
                                                    </div>
                                                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                                        <p className="paraTextDivs">{data.description}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row RoomMainDivS" style={{ margin: '0px 0px 20px 0px' }}>
                                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" style={{ display: 'inline-flex' }}>
                                                        <Icon type="unordered-list" /><h5 className="headingMainRoom">Timing</h5>
                                                    </div><br /><br />
                                                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                                        <div className="row" style={{ padding: "0" }}>
                                                            <div className="col-xs-6 col-md-4">
                                                                <p><b>Opening Time</b></p>
                                                            </div>
                                                            <div className="col-xs-6 col-md-8">
                                                                <p><b>{data.openingTime}</b></p>
                                                            </div>
                                                        </div>
                                                        <div className="row" style={{ padding: "0" }}>
                                                            <div className="col-xs-6 col-md-4">
                                                                <p><b>Closing Time</b></p>
                                                            </div>
                                                            <div className="col-xs-6 col-md-8">
                                                                <p><b>{data.closingTime}</b></p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row RoomMainDivS" style={{ margin: '0px 0px 20px 0px' }}>
                                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" style={{ display: 'inline-flex', paddingTop: '15px' }}>
                                                    <Icon type="unordered-list" /><h5 className="headingMainRoom">Reviews</h5>
                                                </div>
                                                {!!reviews.length && <div>
                                                    {reviews && reviews.map((elem, key) => {
                                                        if (key <= item - 1)
                                                            return (

                                                                <div>
                                                                    <div key={key} className="" style={{ marginBottom: "0px" }}>
                                                                        <div className="row">
                                                                            <div className="col-md-2 col-sm-4 col-xs-12" style={{ paddingTop: "20px" }}>
                                                                                <img
                                                                                    src={elem.userImg ? elem.userImg : "../images/images.jpg"}
                                                                                    className="image-circle"
                                                                                    alt="" width="100" height="50"
                                                                                    style={{ cursor: 'pointer' }}
                                                                                    onClick={this.goToProfile.bind(this, elem.userId, elem.profileId)}
                                                                                />
                                                                            </div>
                                                                            <div className="col-md-2 col-sm-4" style={{ paddingTop: "30px" }}>
                                                                                <h5 className=""
                                                                                    style={{ margin: "0", cursor: 'pointer' }}
                                                                                    onClick={this.goToProfile.bind(this, elem.userId, elem.profileId)}
                                                                                >
                                                                                    {elem.name}
                                                                                </h5>
                                                                            </div>
                                                                            <div className="col-md-4 col-sm-4" style={{ paddingTop: "30px" }}>
                                                                                <Rate disabled allowHalf value={elem.star} />
                                                                            </div>
                                                                            <div className="col-md-4 col-sm-4 col-xs-12" style={{ paddingTop: "30px" }}>
                                                                                <a name="linkReview"><p className="star-space1">Writen On {elem.written} </p></a>
                                                                            </div>

                                                                            <div className="col-md-12 col-sm-12 col-xs-12">
                                                                                <p style={{ margin: '0' }}>{elem.message}.</p>
                                                                            </div>

                                                                        </div>
                                                                        <hr />
                                                                    </div>
                                                                </div>
                                                            )
                                                    })}
                                                </div>}
                                                {reviews.length > item && <div className="" style={{ marginBottom: '30px' }}>
                                                    <a className="btn btndetail-success"
                                                        style={{ display: "block", margin: "auto0" }}
                                                        onClick={() => this.setState({ item: item + 4 })}>More</a>
                                                </div>}
                                            </div>
                                        </div>
                                        <div className="col-md-5">
                                            <div className="row RoomMainDivS" style={{ margin: '0px 0px 20px 0px' }}>
                                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" style={{ display: 'inline-flex' }}>
                                                        <Icon type="unordered-list" /><h5 className="headingMainRoom">Location</h5>
                                                    </div>
                                                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" style={{ padding: '15px' }}>
                                                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7242.887220253883!2d67.02816338632098!3d24.814498692583676!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x74882ba91beb6409!2sBar.B.Q.+Tonight!5e0!3m2!1sen!2snl!4v1547465385394"
                                                            width="100%"
                                                            height="250"
                                                            frameBorder="0"
                                                            style={{ border: "0" }}
                                                            allowFullScreen>
                                                        </iframe><br />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row RoomMainDivS" style={{ margin: '0px 0px 20px 0px' }}>
                                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" style={{ display: 'inline-flex' }}>
                                                        <Icon type="unordered-list" /><h5 className="headingMainRoom">Contact Info</h5>
                                                    </div>
                                                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                                        <div className="" style={{ marginTop: '17px' }}>
                                                            <h5>
                                                                <span className="glyphicon glyphicon-home"
                                                                    style={{ marginRight: "15px", color: "#36a89f" }}></span>
                                                                <span style={{ color: "rgba(0, 0, 0, 0.65)" }}>{data.address || data.businessAddress}</span>
                                                            </h5>

                                                            <h5>
                                                                <span className="glyphicon glyphicon-phone"
                                                                    style={{ marginRight: "15px", color: "#36a89f" }}></span>
                                                                <span style={{ color: "rgba(0, 0, 0, 0.65)" }}>{data.businessnumber || data.businessNumber}</span>
                                                            </h5>

                                                            <h5>
                                                                <span className="glyphicon glyphicon-globe"
                                                                    style={{ marginRight: "15px", color: "#36a89f" }}></span>
                                                                <span style={{ color: "rgba(0, 0, 0, 0.65)" }}>{data.businessemail || data.businessEmail}</span>
                                                            </h5>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-1"></div>
                                    </div>
                                </div>

                            </TabPane>
                            <TabPane
                                tab={
                                    <span>
                                        Add Review{" "}
                                    </span>
                                }
                                key="2"
                            >
                                {/* <div className="col-md-12 col-sm-12 romRentForm" style={{ marginTop: "5%" }}>

                                </div>
                                <div className="container" style={{ marginTop: '5%', marginBottom: '5%' }}>
                                    <div className="col-md-7">

                                    </div>
                                </div> */}

                                <div style={{ backgroundColor: "rgb(247, 245, 237)", paddingTop: '20px' }}>
                                    <div className="row">
                                        <div className="col-md-1"></div>
                                        <div className="col-md-5">
                                            <div className="row RoomMainDivS" style={{ margin: '0px 0px 20px 0px' }}>
                                                <div className="col-md-2 col-sm-3">
                                                    <h4>
                                                        <b>Excellent </b>
                                                    </h4>
                                                </div>

                                                <div className="col-md-5 col-sm-5">
                                                    <Rate disabled allowHalf defaultValue={5} style={{ marginTop: "-6px", marginLeft: "10px" }} />
                                                </div>

                                                <div className="col-md-5 col-sm-4">
                                                    <div className="progres2">
                                                        <div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="60"
                                                            aria-valuemin="0" aria-valuemax="100" style={{ width: "100%", height: "50%" }}>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-md-2 col-sm-3">
                                                    <h4>
                                                        <b>Good </b>
                                                    </h4>
                                                </div>

                                                <div className="col-md-5 col-sm-5">
                                                    <Rate disabled allowHalf defaultValue={4} style={{ marginTop: "-6px", marginLeft: "10px" }} />
                                                </div>

                                                <div className="col-md-5 col-sm-4">
                                                    <div className="progres2">
                                                        <div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="60"
                                                            aria-valuemin="0" aria-valuemax="100" style={{ width: "60%", height: "50%" }}>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-md-2 col-sm-3">
                                                    <h4>
                                                        <b>Average </b>
                                                    </h4>
                                                </div>

                                                <div className="col-md-5 col-sm-5">
                                                    <Rate disabled allowHalf defaultValue={3} style={{ marginTop: "-6px", marginLeft: "10px" }} />
                                                </div>

                                                <div className="col-md-5 col-sm-4">
                                                    <div className="progres2">
                                                        <div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="60"
                                                            aria-valuemin="0" aria-valuemax="100" style={{ width: "45%", height: "50%" }}>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-md-2 col-sm-3">
                                                    <h4>
                                                        <b>Bad </b>
                                                    </h4>
                                                </div>

                                                <div className="col-md-5 col-sm-5">
                                                    <Rate disabled allowHalf defaultValue={2} style={{ marginTop: "-6px", marginLeft: "10px" }} />
                                                </div>

                                                <div className="col-md-5 col-sm-4">
                                                    <div className="progres2">
                                                        <div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="60"
                                                            aria-valuemin="0" aria-valuemax="100" style={{ width: "20%", height: "50%" }}>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-5">
                                            <div className="row RoomMainDivS" style={{ margin: '0px 0px 20px 0px' }}>
                                                <div className="row" style={{ }}>
                                                    <div className="col-md-12 col-sm-12 col-xs-12">
                                                        <h3><b><a name="linkReview" className="black" name="name_of_target">Add Review</a></b></h3>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <section className="section">
                                                            <h4>Your Rating:
                                                            <Rate onChange={this.handleChange.bind(this)} allowHalf value={this.state.star} />
                                                            </h4>
                                                        </section>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    {/*Grid column*/}
                                                    <div className="col-md-12 mb-md-0 mb-5">
                                                        <form id="contact-form" name="contact-form">
                                                            {/*Grid row*/}
                                                            <div className="row">
                                                                {/*Grid column*/}
                                                                <div className="col-md-6">
                                                                    <div className="md-form mb-0">
                                                                        <label className="">Your name</label>
                                                                        <input type="text" id="name1" name="name" className="form-control" value={this.state.name1} onChange={this.onChangeReview.bind(this)} />
                                                                    </div>
                                                                </div>
                                                                {/*Grid column*/}
                                                                {/*Grid column*/}
                                                                <div className="col-md-6">
                                                                    <div className="md-form mb-0">
                                                                        <label className="">Your email</label>
                                                                        <input type="text" id="email1" name="email" className="form-control" value={this.state.email1} onChange={this.onChangeReview.bind(this)} />
                                                                    </div>
                                                                </div>
                                                                {/*Grid column*/}
                                                            </div>
                                                            {/*Grid row*/}
                                                            {/*Grid row*/}
                                                            <div className="row">
                                                                {/*Grid column*/}
                                                                <div className="col-md-12">
                                                                    <div className="md-form">
                                                                        <label>Your message</label>
                                                                        <textarea type="text" id="message1" name="message" rows="2" value={this.state.msg1} className="form-control md-textarea" onChange={this.onChangeReview.bind(this)}></textarea>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            {/*Grid row*/}
                                                        </form>
                                                        <div className="text-center text-md-left">
                                                            {this.state.loader && <Spin indicator={antIcon} />}
                                                            <a disabled={!!this.state.loader} className="btn button_custom" onClick={this.submitReview.bind(this)} style={{ width: "35%" }}>Send</a>
                                                        </div>
                                                        <div className="status"></div>
                                                    </div>
                                                    {/*Grid column*/}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-1"></div>
                                    </div>
                                </div>
                            </TabPane>
                        </Tabs>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default DetailBusiness;
