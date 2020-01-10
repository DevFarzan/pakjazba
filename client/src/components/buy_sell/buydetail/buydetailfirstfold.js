import React, { Component } from 'react';
import { Carousel , Icon } from 'antd';
import { Redirect } from 'react-router';
import Buydetailsecondfold from './buydetailsecondfold';
import './buydetailfirstfold.css'

class Buydetailfirstfold extends Component {
    constructor(props) {
        super(props)
        this.state = {
            goProfile: false
        }
    }
    goToProfile() {
        this.setState({ goProfile: true })
    }
    render() {
        let data = this.props.data;
        let images = data.images || data.arr_url;
        if (this.state.goProfile) {
            return <Redirect to={{ pathname: '/profile_userDetail', state: { userId: data.userid, profileId: data.profileid } }} />
        }
        console.log(data, 'dataaBuynsell');
        return (
            <div>
                <div className="row" style={{ marginTop: '-1.5vw' }}>
                    {data.images && <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" style={{ padding: '0' }}>
                        <img src={data.images[0]} alt="banner" className="JobBannertoP" />
                        <div className="row mainEventBanerPadMarg">
                            <div className="col-xs-12 col-sm-8 col-md-8 col-lg-8">
                                <h1 className="EventBanerTextCsS">{data.eventTitle}</h1>
                                <p className="BanerSmalTextCsS">{data.city + ": " + data.address}</p>
                            </div>
                            <div className="col-xs-12 col-sm-2 col-md-2 col-lg-2" style={{ textAlign: 'center' }}>
                                <p className="eventDateBaner">Event starts</p>
                                <h4 className="eventDayBaner"></h4>
                            </div>
                            <div className="col-xs-12 col-sm-2 col-md-2 col-lg-2">
                                <button className="btnCallEventbaner">
                                    <Icon type="phone" /> <span>Call Now</span>
                                </button>
                            </div>
                        </div>
                    </div>}
                </div>
                <div className="row" style={{ margin: "11vw 1vw 1vw 1vw" }}>
                    <div className="col-md-6">
                        <h2 className="">{data.subcategory || data.category}</h2>
                        <div className="location-padding">
                            <i className="buyicon glyphicon-map-marker" style={{ color: "#008080" }} />
                            <p>{data.city}</p>
                        </div>
                    </div>
                    <div className="col-md-6" style={{ textAlign: "right" }}>
                        <h3> ${data.price} </h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-7" style={{ border: '1px solid #80808030', height: "373px" }}>
                        <Carousel autoplay >
                            {images && images.map((elem, key) => {
                                return (
                                    <div key={key}>
                                        <img alt='' src={elem} />
                                    </div>
                                )
                            })}
                        </Carousel>
                    </div>
                    <div className="col-md-5">
                        {/*<Buydetailsecondfold data={data}/>*/}
                        <div style={{ border: '1px solid #80808030', width: '100%', paddingLeft: '15px', paddingTop: '5px' }}><h3 style={{ fontWeight: 'bold', textAlign: "left" }}>${data.price}</h3>
                            <div style={{ textAlign: "left" }}>{data.modelname || data.modelName},{data.modelmake || data.make}</div>
                            <div style={{ textAlign: "left" }}><i className="fa fa-map-marker"></i>{data.address},{data.state}</div>
                        </div>
                        <div style={{ border: '1px solid #80808030', width: '100%', paddingLeft: '15px', paddingTop: '5px', marginTop: "5px", paddingBottom: '22px' }}>
                            <h3 style={{ fontWeight: 'bold', textAlign: "left" }}>Contact Seller</h3>
                            <div className="row" style={{ padding: "0" }}>
                                <div className="col-md-7" style={{ marginLeft: "-30px", paddingLeft: "25px" }}>
                                    <div className="profile_img"><img onClick={() => { this.goToProfile() }} src={data.userImage && data.userImage.length ? data.userImage : '../images/images.jpg'} className="" alt="" style={{ width: '70%', cursor: 'pointer', marginTop: "-10px", marginBottom: "8px" }} /></div>
                                </div>
                                <div className="col-md-5" style={{ marginTop: '34px', marginLeft: '-20%' }}>
                                    <span style={{ fontWeight: 'bold' }}>{data.contactname}</span><br />
                                    <a onClick={() => { this.goToProfile() }} style={{ fontSize: '13px', cursor: 'pointer', color: 'rgb(55, 169, 155)' }}>View Profile</a>
                                </div>
                            </div>
                            <h5 style={{ width: '100%' }}><span className="glyphicon glyphicon-phone" style={{ marginRight: "15px", color: "#36a89f", float: 'left' }}></span><span style={{ color: "rgba(0, 0, 0, 0.65)", float: 'left' }}>{data.contactnumber}</span></h5>
                            <h5 style={{ width: '100%' }}><span className="glyphicon glyphicon-globe" style={{ marginRight: "15px", color: "#36a89f", float: 'left' }}></span><span style={{ color: "rgba(0, 0, 0, 0.65)", float: 'left' }}>{data.contactemail}</span></h5>
                        </div>
                        <div style={{ border: '1px solid #80808030', width: '100%', marginTop: '10px' }}>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3621.6337348509687!2d67.03749541472551!3d24.807992284078704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33da992be1aa7%3A0x7646411a2d8e6ac5!2sKRL+Creatives!5e0!3m2!1sen!2s!4v1536302761580" width="100%" height="100" frameborder="0" style={{ "border": "0" }} allowfullscreen></iframe>
                        </div>
                    </div>
                </div>
                <div className="row" style={{ padding: "0px", marginTop: '11px' }}>
                    <div className="col-md-12 col-sm-12 col-xs-12">
                        <h3 style={{ fontWeight: 'bold', marginLeft: '15px' }}> Details </h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3 col-sm-3 col-xs-12">
                        <p><b style={{ marginRight: "3px" }}>Condition:</b>{data.condition}</p>
                    </div>
                    <div className="col-md-3 col-sm-3 col-xs-12">
                        <p><b style={{ marginRight: "3px" }}>Model Make:</b>{data.modelmake || data.make}</p>
                    </div>
                    <div className="col-md-3 col-sm-3 col-xs-12">
                        <p><b style={{ marginRight: "3px" }}>Model Name:</b>{data.modelname || data.modelName}</p>
                    </div>
                    <div className="col-md-3 col-sm-3 col-xs-12">
                        <p><b style={{ marginRight: "3px" }}>Model Number:</b>{data.modelnumber || data.number}</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <h3> <b> Description </b> </h3>
                        <p>{data.description}</p>
                    </div>
                </div>
            </div>


        )
    }
}

export default Buydetailfirstfold;
