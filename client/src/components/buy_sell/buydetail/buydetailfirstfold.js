import React, { Component } from 'react';
import { Carousel, Icon } from 'antd';
import { Redirect } from 'react-router';
import Buydetailsecondfold from './buydetailsecondfold';
import './buydetailfirstfold.css';

class Buydetailfirstfold extends Component {
    constructor(props) {
        super(props)
        this.state = {
            goProfile: false,
            imgPath: '',
            images: [],
        }
    }
    componentDidMount() {
        window.scrollTo(0, 0);
        let data = this.props.data;
        this.setState({
            images: data.images,
        })
    }
    renderImagesPathinLi = (img) => {
        this.setState({
            imgPath: img
        })
    }
    // renderImagesinLi = (img) => {
    //     this.setState({
    //       imgUrl: img
    //     })
    //   }
    goToProfile() {
        this.setState({ goProfile: true })
    }
    render() {
        let data = this.props.data;
        // const { images } = this.state;
        // let images = data.images || data.arr_url;
        // console.log(data.sizedimension && data.sizedimension[0], 'data')
        if (this.state.goProfile) {
            return <Redirect to={{ pathname: `/profile_user/${data.profileid}`, state: { userId: data.userid, profileId: data.profileid } }} />
        }
        console.log(this.state.images, 'image state')
        console.log(data, 'dataaBuynsell');
        return (
            <div>
                <div className="row" style={{ marginTop: '-1.5vw' }}>
                    {data.images && <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" style={{ padding: '0' }}>
                        <img src={data.images[0]} alt="banner" className="BuySellBannertoP" />
                        <div className="row">
                            <div className="mainBuySellBanerPadMag">
                                <div className="col-xs-12 col-sm-7 col-md-8 col-lg-8">
                                    <h1 className="EventBanerTextCsS">{data.title}</h1>
                                    <p className="bannerSubtext">{data.category}</p>
                                </div>
                                <div className="col-xs-12 col-sm-2 col-md-2 col-lg-2" style={{ textAlign: 'center' }}>
                                    <div className="bannerPriceDivv">
                                        <h4 className="bannerPriceTag">
                                            ${data.price}
                                        </h4>
                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-3 col-md-2 col-lg-2">
                                    <a href={data.contactnumber}>
                                        <button className="btnCallEventbaner">
                                            <Icon type="phone" /> <span>Call Now</span>
                                        </button>
                                    </a>
                                    <span>
                                        <p className="adPOsted">Ad Posted On {data.posted}</p>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>}
                </div>
                <div style={{ backgroundColor: '#f7f5ed' }}>
                    <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-5">
                            {data.images && <div className="row RoomMainDivS" style={{ height: "auto", margin: '0px 0px 20px 0px' }}>
                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                    <div className="preview">
                                        <div class="preview-pic tab-content">
                                            <div class="tab-pane active" id="pic-1"><img src={data.images[0]} /></div>
                                        </div>
                                        <ul class="preview-thumbnail nav nav-tabs">
                                            {data.images.map(img =>
                                                <li onClick={() => this.renderImagesPathinLi(img)}>
                                                    <a >
                                                        <img src={img} />
                                                    </a>
                                                </li>
                                            )}
                                            {/* {this.state.images.map(img =>
                                                <li onClick={() => this.renderImagesinLi(img)}>
                                                    <a ><img src={img} /></a>
                                                </li>)
                                            } */}
                                        </ul>
                                    </div>
                                    {/* {data.images && <Carousel>
                                        {data.images.map((elem, key) => {
                                            return (
                                                <div key={key}>
                                                    <img alt='' src={elem} />
                                                </div>
                                            )
                                        })}
                                    </Carousel>} */}
                                </div>
                            </div>}
                            <div className="row RoomMainDivS" style={{ paddingBottom: '0px', margin: '0px 0px 20px 0px' }}>
                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" style={{ display: 'inline-flex' }}>
                                    <Icon type="unordered-list" /><h5 className="headingMainRoom">Description</h5>
                                </div>
                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                    <p className="paraTextDivs">{data.description}</p>
                                </div>
                            </div>
                            <div className="row RoomMainDivS" style={{ paddingBottom: '0px', margin: '0px 0px 20px 0px' }}>
                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" style={{ display: 'inline-flex' }}>
                                    <Icon type="unordered-list" /><h5 className="headingMainRoom">Contact Details</h5>
                                </div>
                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" style={{ marginTop: '15px' }}>
                                    <div className="row" style={{ padding: "0" }}>
                                        <div className="col-xs-3 col-md-3 col-sm-5">
                                            <div className="profile_img">
                                                <img onClick={() => { this.goToProfile() }} src={data.userImage && data.userImage.length ? data.userImage : '../images/images.jpg'} className="" alt="" style={{ width: '100%', cursor: 'pointer', marginBottom: "8px" }} />
                                            </div>
                                        </div>
                                        <div className="col-xs-9 col-md-9 col-sm-7 margMObileBuysell">
                                            <span style={{ fontWeight: 'bold' }}>{data.contactname}</span><br />
                                            <a onClick={() => { this.goToProfile() }} style={{ fontSize: '13px', cursor: 'pointer', color: 'rgb(55, 169, 155)' }}>
                                                View Profile
                                            </a>
                                            <h5 style={{ marginTop: '10px', marginBottom: '7px' }}>
                                                <span className="glyphicon glyphicon-phone" style={{ marginRight: "15px", color: "#236A4B" }}></span>
                                                <span style={{ color: "rgba(0, 0, 0, 0.65)" }}>{data.contactnumber}</span>
                                            </h5>
                                            <h5 style={{ marginBottom: '7px' }}>
                                                <span className="glyphicon glyphicon-globe" style={{ marginRight: "15px", color: "#236A4B" }}></span>
                                                <span style={{ color: "rgba(0, 0, 0, 0.65)" }}>{data.contactemail}</span>
                                            </h5>
                                            <h5>
                                                <span className="glyphicon glyphicon-home"
                                                    style={{ marginRight: "15px", color: "#36a89f" }}></span>
                                                <span style={{ color: "rgba(0, 0, 0, 0.65)" }}>{data.address}, {data.city}. {data.state}</span>
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {data.delivery && <div className="row RoomMainDivS" style={{ paddingBottom: '0px', margin: '0px 0px 20px 0px' }}>
                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" style={{ display: 'inline-flex' }}>
                                    <Icon type="unordered-list" />
                                    <h5 className="headingMainRoom">
                                        Delivery
                                    </h5>
                                </div><br />
                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                    <div className="row" style={{ textAlign: 'center' }}>
                                        <div className="hidden-xs col-md-2 col-sm-2 col-lg-2"></div>
                                        <div className="col-xs-12 col-md-8 col-sm-8 col-lg-8">
                                            <p className="eductionPara">
                                                {data.delivery.map((elem, key) => {
                                                    return (
                                                        <span style={{ marginLeft: '1vw' }}>
                                                            {elem},
                                                        </span>
                                                    )
                                                })}
                                            </p>
                                        </div>
                                        <div className="hidden-xs col-md-2 col-sm-2 col-lg-2"></div>
                                    </div>
                                </div>
                            </div>}
                        </div>
                        <div className="col-md-5">
                            <div className="row RoomMainDivS" style={{ margin: '0px' }}>
                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" style={{ display: 'inline-flex' }}>
                                    <Icon type="unordered-list" /><h5 className="headingMainRoom">Details</h5>
                                </div>
                                {data.condition != '' && <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" style={{ padding: '0' }}>
                                    <div className="row" style={{ paddingBottom: '0' }}>
                                        <div className="col-xs-6 col-sm-4 col-md-4 col-lg-4 borderDetailDev">
                                            <p style={{ margin: "0", fontWeight: 'bold' }}>Condition:</p>
                                        </div>
                                        <div className="col-xs-6 col-sm-4 col-md-4 col-lg-4 borderDetailDev" style={{ textAlign: 'right' }}>
                                            <span className="spaNTxtBuyNsel">{data.condition}</span>
                                        </div>
                                        <div className="hidden-xs col-sm-4 col-md-4 col-lg-4"></div>
                                    </div>
                                </div>}
                                {data.modelmake != '' && <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" style={{ padding: '0' }}>
                                    <div className="row" style={{ paddingBottom: '0' }}>
                                        <div className="col-xs-6 col-sm-4 col-md-4 col-lg-4 borderDetailDev">
                                            <p style={{ margin: "0", fontWeight: 'bold' }}>Model Make:</p>
                                        </div>
                                        <div className="col-xs-6 col-sm-4 col-md-4 col-lg-4 borderDetailDev" style={{ textAlign: 'right' }}>
                                            <span className="spaNTxtBuyNsel">{data.modelmake || data.make}</span>
                                        </div>
                                        <div className="hidden-xs col-sm-4 col-md-4 col-lg-4"></div>
                                    </div>
                                </div>}
                                {data.modelname != '' && <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" style={{ padding: '0' }}>
                                    <div className="row" style={{ paddingBottom: '0' }}>
                                        <div className="col-xs-6 col-sm-4 col-md-4 col-lg-4 borderDetailDev">
                                            <p style={{ margin: "0", fontWeight: 'bold' }}> Model Name: </p>
                                        </div>
                                        <div className="col-xs-6 col-sm-4 col-md-4 col-lg-4 borderDetailDev" style={{ textAlign: 'right' }}>
                                            <span className="spaNTxtBuyNsel">{data.modelname || data.modelName}</span>
                                        </div>
                                        <div className="hidden-xs col-sm-4 col-md-4 col-lg-4"></div>
                                    </div>
                                </div>}
                                {data.modelnumber != '' && <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" style={{ padding: '0' }}>
                                    <div className="row" style={{ paddingBottom: '0' }}>
                                        <div className="col-xs-6 col-sm-4 col-md-4 col-lg-4 borderDetailDev">
                                            <p style={{ margin: "0", fontWeight: 'bold' }}> Model Number:</p>
                                        </div>
                                        <div className="col-xs-6 col-sm-4 col-md-4 col-lg-4 borderDetailDev" style={{ textAlign: 'right' }}>
                                            <span className="spaNTxtBuyNsel">{data.modelnumber || data.number}</span>
                                        </div>
                                        <div className="hidden-xs col-sm-4 col-md-4 col-lg-4"></div>
                                    </div>
                                </div>}
                                {data.sizedimension && <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" style={{ padding: '0' }}>
                                    <div className="row" style={{ paddingBottom: '0' }}>
                                        <div className="col-xs-6 col-sm-4 col-md-4 col-lg-4 borderDetailDev">
                                            <p style={{ margin: "0", fontWeight: 'bold' }}>Length</p>
                                        </div>
                                        <div className="col-xs-6 col-sm-4 col-md-4 col-lg-4 borderDetailDev" style={{ textAlign: 'right' }}>
                                            <span className="spaNTxtBuyNsel">{data.sizedimension[0].length}</span>
                                        </div>
                                        <div className="hidden-xs col-sm-4 col-md-4 col-lg-4"></div>
                                    </div>
                                </div>}
                                {data.sizedimension && <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" style={{ padding: '0' }}>
                                    <div className="row" style={{ paddingBottom: '0' }}>
                                        <div className="col-xs-6 col-sm-4 col-md-4 col-lg-4 borderDetailDev">
                                            <p style={{ margin: "0", fontWeight: 'bold' }}>Width</p>
                                        </div>
                                        <div className="col-xs-6 col-sm-4 col-md-4 col-lg-4 borderDetailDev" style={{ textAlign: 'right' }}>
                                            <span className="spaNTxtBuyNsel">{data.sizedimension[0].width}</span>
                                        </div>
                                        <div className="hidden-xs col-sm-4 col-md-4 col-lg-4"></div>
                                    </div>
                                </div>}
                                {data.sizedimension && <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" style={{ padding: '0' }}>
                                    <div className="row" style={{ paddingBottom: '0' }}>
                                        <div className="col-xs-6 col-sm-4 col-md-4 col-lg-4 borderDetailDev">
                                            <p style={{ margin: "0", fontWeight: 'bold' }}>Height</p>
                                        </div>
                                        <div className="col-xs-6 col-sm-4 col-md-4 col-lg-4 borderDetailDev" style={{ textAlign: 'right' }}>
                                            <span className="spaNTxtBuyNsel">{data.sizedimension[0].height}</span>
                                        </div>
                                        <div className="hidden-xs col-sm-4 col-md-4 col-lg-4"></div>
                                    </div>
                                </div>}
                            </div>
                            <div className="row RoomMainDivS" style={{ margin: '0px', paddingBottom: '0px', marginTop: '20px' }}>
                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" style={{ display: 'inline-flex' }}>
                                    <Icon type="unordered-list" />
                                    <h5 className="headingMainRoom">
                                        Category
                                    </h5>
                                </div><br />
                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                    <div className="row" style={{ textAlign: 'center' }}>
                                        <div className="col-xs-1 col-md-2 col-sm-2 col-lg-2"></div>
                                        <div className="col-xs-10 col-md-8 col-sm-8 col-lg-8">
                                            <p className="eductionPara">
                                                {data.subcategory || data.category}<br />
                                                {data.subsubcategory || data.category}
                                            </p>
                                        </div>
                                        <div className="col-xs-1 col-md-2 col-sm-2 col-lg-2"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="row RoomMainDivS" style={{ margin: '0px', paddingBottom: '0px', marginTop: '20px' }}>
                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" style={{ display: 'inline-flex' }}>
                                    <Icon type="unordered-list" /><h5 className="headingMainRoom">Location</h5>
                                </div>
                                <div className="forimage" style={{ display: "inline" }}>
                                    <div className="row" style={{ padding: "0" }}>
                                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" style={{ textAlign: 'center', padding: '30px' }}>
                                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3621.6337348509687!2d67.03749541472551!3d24.807992284078704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33da992be1aa7%3A0x7646411a2d8e6ac5!2sKRL+Creatives!5e0!3m2!1sen!2s!4v1536302761580" width="100%" height="300" frameborder="0" style={{ "border": "0" }} allowfullscreen></iframe>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-1"></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Buydetailfirstfold;
