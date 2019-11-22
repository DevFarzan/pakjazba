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
import { HttpUtils } from "../../../Services/HttpUtils";

const { TabPane } = Tabs;

let categoriesArr = [];
let brandNameArr = [];
let locationArr = [];
let colorArr = [];

let filterValuesArr = [];
let filterFinalDataArr = [];
let filterData = [];

class EcomProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shopData: '',
      shopId: '',
      shopEdit: false,
      addProduct: false,
      profileId: '',
      userId: '',
      addProductObj: {},
      allProducts: [],
      categories: [],
      color: [],
      location: [],
      brandName: [],
    }
  }

  async componentWillMount() {
    let shopId = this.props.location.pathname.slice(18)
    let shopData = this.props.location.state;
    const userData = JSON.parse(localStorage.getItem('user'));
    if (userData) {
      this.setState({
        profileId: userData.profileId,
        userId: userData._id
      })
    }
    if (shopData) {
      this.setState({
        shopData: shopData,
        shopId: shopId,
      })
      this.getShopData(shopId)
    }
    else {
      let obj = {
        shopId: shopId
      }
      let reqShopData = await HttpUtils.post('getSpecificShopById', obj)
      this.setState({
        shopData: reqShopData.content[0],
        shopId: shopId,
      })
      this.getShopData(shopId)
    }
  }

  getShopData = async (shopId) => {
    let categoriesArr = [];
    let colorArr = [];
    let locationArr = [];
    let brandNameArr = [];
    let obj = {
      shopIdForProduct: shopId
    }
    let reqShopData = await HttpUtils.post('getShopProducts', obj)
    if (reqShopData.code == 200) {
      let allProducts = reqShopData.content;
      for (var i = 0; i < allProducts.length; i++) {
        if (colorArr.indexOf(allProducts[i].color) == -1) {
          const color = allProducts[i].color.charAt(0).toUpperCase() + allProducts[i].color.substring(1);
          colorArr.push(color)
        }
        if (locationArr.indexOf(allProducts[i].country) == -1) {
          const location = allProducts[i].country.charAt(0).toUpperCase() + allProducts[i].country.substring(1);
          locationArr.push(location)
        }
        if (brandNameArr.indexOf(allProducts[i].brandName) == -1) {
          const brandName = allProducts[i].brandName.charAt(0).toUpperCase() + allProducts[i].brandName.substring(1);
          brandNameArr.push(brandName)
        }
        for (var j = 0; j < allProducts[i].category.length; j++) {
          if (categoriesArr.indexOf(allProducts[i].category[1]) == -1) {
            const category = allProducts[i].category[1].charAt(0).toUpperCase() + allProducts[i].category[1].substring(1);
            categoriesArr.push(category)
          }
        }
      }
      this.setState({
        allProducts: reqShopData.content,
        categories: categoriesArr,
        color: colorArr,
        location: locationArr,
        brandName: brandNameArr,
      })
    }
  }

  editShop = () => {
    this.setState({
      shopEdit: true
    })
  }

  addProductOnShop = () => {
    const { shopId, shopData } = this.state;
    let addProductObj = {
      shopId: shopId,
      shopTitle: shopData.shopTitle
    }
    this.setState({
      addProduct: true,
      addProductObj: addProductObj
    })
  }

  onChange = (key, value) => {
    filterFinalDataArr = []
    if (key == 'categories') {
      categoriesArr = []
      categoriesArr.push(value)
      this.pushFilterArrayData()
    }
    else {
      if (key == 'brand name') {
        brandNameArr = [];
        for (var i = 0; i < value.length; i++) {
          brandNameArr.push(value[i])
        }
        this.pushFilterArrayData()
      }
      else if (key == 'location') {
        locationArr = [];
        for (var i = 0; i < value.length; i++) {
          locationArr.push(value[i])
        }
        this.pushFilterArrayData()
      }
      else if (key == 'color') {
        colorArr = [];
        for (var i = 0; i < value.length; i++) {
          colorArr.push(value[i])
        }
        this.pushFilterArrayData()
      }
    }
  }

  pushFilterArrayData = () => {
    const { allProducts } = this.state;
    filterValuesArr = [];

    console.log(categoriesArr, 'categoriesArr')

    for (var i = 0; i < brandNameArr.length; i++) {
      filterValuesArr.push(brandNameArr[i])
    }
    for (var j = 0; j < locationArr.length; j++) {
      filterValuesArr.push(locationArr[j])
    }
    for (var k = 0; k < colorArr.length; k++) {
      filterValuesArr.push(colorArr[i])
    }

    if (categoriesArr.length > 0) {
      filterData = [];
      for (var i = 0; i < allProducts.length; i++) {
        if (allProducts[i].category[1] == categoriesArr[0]) {
          filterData.push(allProducts[i]);
          // filterFinalDataArr.push(allProducts[i])
        }
      }
      if (filterValuesArr.length > 0) {
        for (var i = 0; i < filterValuesArr.length; i++) {
          for (var j = 0; j < filterData.length; j++) {
            if (filterData[j].brandName.toLowerCase() == filterValuesArr[i].toLowerCase()) {
              filterFinalDataArr.push(filterData[j])
            }
            else if (filterData[j].color.toLowerCase() == filterValuesArr[i].toLowerCase()) {
              filterFinalDataArr.push(filterData[j])
            }
            else if (filterData[j].country.toLowerCase() == filterValuesArr[i].toLowerCase()) {
              filterFinalDataArr.push(filterData[j])
            }
          }
        }
      }
    }
    else {
      for (var i = 0; i < filterValuesArr.length; i++) {
        for (var j = 0; j < allProducts.length; j++) {
          if (allProducts[j].brandName.toLowerCase() == filterValuesArr[i].toLowerCase()) {
            filterFinalDataArr.push(allProducts[j])
          }
          else if (allProducts[j].color.toLowerCase() == filterValuesArr[i].toLowerCase()) {
            filterFinalDataArr.push(allProducts[j])
          }
          else if (allProducts[j].country.toLowerCase() == filterValuesArr[i].toLowerCase()) {
            filterFinalDataArr.push(allProducts[j])
          }
        }
      }
    }
    console.log(filterValuesArr, 'filterValuesArr')
    console.log(filterData, 'filterData')
    console.log(filterFinalDataArr, 'filterFinalDataArr')

  }

  render() {
    const { shopData, shopId, shopEdit, addProduct, profileId, addProductObj,
      allProducts, categories, color, location, brandName } = this.state;
    if (shopEdit) {
      return (
        <Redirect to={{ pathname: '/shopForm', state: shopData }} />
      )
    } else if (addProduct) {
      return (
        <Redirect to={{ pathname: '/Forms_Ecommerce', state: addProductObj }} />
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
        {shopData &&
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
                {shopData.profileId == profileId &&
                  <div className="col-md-4 col-sm-5">
                    <div className="col-md-6 col-sm-6 col-xs-6">
                      <div className="buttontoleft">
                        <button type="button" className="btn btn-sm btn-editprofile" style={{ width: "100%" }}
                          onClick={this.editShop}>
                          {/* Edit Home */}
                          <div className="font-style fontClolor">
                            Edit Home
                        </div>
                        </button>
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-xs-6">
                      <div className="buttontoleft">
                        <button type="button" className="btn btn-sm btn-editprofile" style={{ width: "100%" }}
                          onClick={this.addProductOnShop}>
                          {/* Add Product */}
                          <div className="font-style fontClolor">
                            Publish Your Product
                        </div>
                        </button>
                      </div>
                    </div>
                  </div>
                }
              </div>
            </div>
          </div>
        }
        <div className="container" style={{ width: '98%' }}>
          <div className="row">
            <div className="col-md-12">
              <Tabs defaultActiveKey="1">
                <TabPane tab="Home" key="1">
                  {
                    shopData && <ProfileHome shopData={shopData} />

                  }
                </TabPane>
                <TabPane tab="All Products" key="2">
                  <ProfileProducts allProducts={allProducts} categories={categories} color={color}
                    location={location} brandName={brandName} onChange={this.onChange} />
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