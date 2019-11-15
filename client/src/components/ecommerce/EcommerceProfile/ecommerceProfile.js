import React, { Component } from 'react';
import Burgermenu from '../../header/burgermenu';
import Footer from '../../footer/footer';
import './ecommerceProfile.css';
import { Link, Redirect } from "react-router-dom";
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
      shopData: '',
      shopId: '',
      shopEdit: false,
      addProduct: false
    }

  }

  componentWillMount() {
    let shopId = this.props.location.pathname.slice(18)
    let shopData = this.props.location.state;
    this.setState({
      shopData: shopData,
      shopId: shopId
    })
  }

  editShop = () => {
    this.setState({
      shopEdit: true
    })
  }
  addProductOnShop = () => {
    this.setState({
      addProduct: true
    })
  }
  render() {
    const { shopData, shopId, shopEdit, addProduct } = this.state;
    // console.log(shopData, 'shopData')
    // console.log(shopId, 'shopId')
    if (shopEdit) {
      return (
        <Redirect to={{ pathname: '/shopForm', state: shopData }} />
      )
    } else if (addProduct) {
      return (
        <Redirect to={{ pathname: '/Forms_Ecommerce', state: shopId }} />
      )
    }
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
                        <img alt='' src={shopData.shopLogo} style={{ borderRadius: '50px !important' }} />
                      </div>
                    </div>
                    <div className="col-md-10 col-sm-9 col-xs-9">
                      <h2 style={isTablet ? { margin: "0", fontSize: '27px' } : { margin: '0', fontSize: '36px' }}>{shopData.shopTitle}</h2>
                      <p>73% postive seller ratings</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-5">
                <div className="col-md-6 col-sm-6 col-xs-6">
                  <div className="buttontoleft">
                    <button type="button" className="btn btn-sm btn-editprofile" style={{ width: "100%" }}
                      onClick={this.editShop}>
                      {/* Edit Home */}
                      {/* <Link className="font-style fontClolor" rel="noopener noreferrer" to={`/shopForm`}> */}
                      <div className="font-style fontClolor">
                        Edit Home
                        </div>
                      {/* </Link> */}
                    </button>
                  </div>
                </div>
                <div className="col-md-6 col-sm-6 col-xs-6">
                  <div className="buttontoleft">
                    <button type="button" className="btn btn-sm btn-editprofile" style={{ width: "100%" }}
                      onClick={this.addProductOnShop}>
                      {/* Add Product */}
                      {/* <Link className="font-style fontClolor" rel="noopener noreferrer" to={`/Forms_Ecommerce`}>Publish Your Product</Link> */}
                      <div className="font-style fontClolor">
                        Publish Your Product
                        </div>
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
                  <ProfileHome shopData={shopData} />
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