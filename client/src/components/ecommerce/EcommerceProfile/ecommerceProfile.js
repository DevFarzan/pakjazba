import React, { Component } from 'react';
import Burgermenu from '../../header/burgermenu';
import Footer from '../../footer/footer';
import './ecommerceProfile.css';
import { Link } from "react-router-dom";
import EcomNine from './ecomNine';
import { isMobile, isTablet, isBrowser } from 'react-device-detect';
import { Tabs, Radio } from 'antd';
import ProfileHome from './profileHome';
import ProfileProducts from './profileProducts';
const { TabPane } = Tabs;
class EcomProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bannerPhotoSrc: 'http://res.cloudinary.com/dxk0bmtei/image/upload/v1573024250/b6mrz86sarrsakg5agf2.png',
      gridImageSrc: "http://res.cloudinary.com/dxk0bmtei/image/upload/v1573024250/gxy79pualaz1zc92scka.png",
      images: [
        "http://res.cloudinary.com/dxk0bmtei/image/upload/v1573024252/w2knkwgf37zcrctuq4v9.jpg",
        "http://res.cloudinary.com/dxk0bmtei/image/upload/v1573024252/wl5tq7bgmyvlk319ocld.jpg",
        "http://res.cloudinary.com/dxk0bmtei/image/upload/v1573024252/ofkyvr5gfeep2vzxx9ad.jpg",
        "http://res.cloudinary.com/dxk0bmtei/image/upload/v1573024252/o0cnk6k0nlebxfg9wqu9.png",
      ],
      shopLogo: ["http://res.cloudinary.com/dxk0bmtei/image/upload/v1573039162/gjbxapnb3m1uewu9l4aw.png"],
      shopAddress: 'karachi',
      shopCategories: ["Men,s Fashion", "Women,s Fashion"],
      shopCity: 'karachi',
      shopDescription: 'kjhikhkhkjkjhikhkhkjkjhikhkhkjkjhikhkhkjkjhikhkhkjkjhikhkhkjkjhikhkhkj',
      shopState: "sindh",
      shopTitle: "Pakjazba Ecommrece Shop",
      shopPurpose: "Gift Shop",
      obj: {}
    }
  }

  componentWillMount() {
    const { shopState, shopDescription, shopCity, shopCategories, shopAddress, images, gridImageSrc, bannerPhotoSrc, shopLogo, shopPurpose } = this.state;
    let obj = {};
    obj.shopState = shopState;
    obj.shopDescription = shopDescription;
    obj.shopCity = shopCity;
    obj.shopCategories = shopCategories;
    obj.shopAddress = shopAddress;
    obj.images = images;
    obj.gridImageSrc = gridImageSrc;
    obj.bannerPhotoSrc = bannerPhotoSrc;
    obj.shopLogo = shopLogo;
    obj.shopPurpose = shopPurpose;

    this.setState({
      obj: obj
    })

  }
  render() {
    const { shopTitle, shopLogo, obj } = this.state;

    return (
      <div>
        <span>
          <div className="" style={{ "backgroundImage": "url('../images/bgc-images/busnes-listing.png')", marginTop: "-20px", backgroundSize: 'cover' }}>
            <div className="background-image">
              <Burgermenu />
            </div>
          </div>
        </span>
        <div className="row jobdetail-page" style={{ marginTop: "100px" }}>
        </div>
        <div className>
          <div className="row">
            <div className="col-md-12">
              <div className="col-md-8 col-sm-7">
                <div className="row" style={{ padding: '0px' }}>
                  <div className="col-md-12">
                    <div className="col-md-2 col-sm-3 col-xs-3">
                      <div className="" style={{ borderRadius: '50px black' }}>
                        <img alt='' src={shopLogo} style={{ borderRadius: '50px !important' }} />
                      </div>
                    </div>
                    <div className="col-md-10 col-sm-9 col-xs-9">
                      <h2 style={isTablet ? { margin: "0", fontSize: '27px' } : { margin: '0', fontSize: '36px' }}>{shopTitle}</h2>
                      <p>73% postive seller ratings</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-5">
                <div className="col-md-6 col-sm-6 col-xs-6">
                  <div className="buttontoleft">
                    <button type="button" className="btn btn-sm btn-editprofile" style={{ width: "100%" }}>

                      {/* Edit Home */}
                      <Link className="font-style fontClolor" rel="noopener noreferrer" to={`/shopForm`}>Edit Home</Link>

                    </button>
                  </div>
                </div>
                <div className="col-md-6 col-sm-6 col-xs-6">
                  <div className="buttontoleft">
                    <button type="button" className="btn btn-sm btn-editprofile" style={{ width: "100%" }}>
                      {/* Add Product */}
                      <Link className="font-style fontClolor" rel="noopener noreferrer" to={`/Forms_Ecommerce`}>Publish Your Product</Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container" style={{ width: '98%' }}>
          <div className="row">
            <div className="col-md-12">
              <Tabs defaultActiveKey="1">
                <TabPane tab="Home" key="1">
                  <ProfileHome obj={obj} />
                </TabPane>
                <TabPane tab="All Products" key="2">
                  <ProfileProducts />
                </TabPane>
                <TabPane tab="Profile" key="3">
                  Content of Tab Pane 3
                    </TabPane>
              </Tabs>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}
export default EcomProfile;