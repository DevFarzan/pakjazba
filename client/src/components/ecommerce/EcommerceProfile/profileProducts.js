import React, { Component } from 'react';
import EcomNine from './ecomNine';
import FourEcom from '../ecommercedetail/fourEcom';
import { Tabs } from 'antd';
import { HttpUtils } from "../../../Services/HttpUtils";

const { TabPane } = Tabs;

class ProfileProducts extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // allProducts: [],
      // categories: [],
      // color: [],
      // location: [],
      // brandName: [],
    }
  }

  // async componentDidMount() {
  //   const { shopId } = this.props;
  //   // let categoriesArr = [];
  //   // let colorArr = [];
  //   // let locationArr = [];
  //   // let brandNameArr = [];
  //   // let obj = {
  //   //   shopIdForProduct: shopId
  //   // }
  //   // let reqShopData = await HttpUtils.post('getShopProducts', obj)
  //   // if (reqShopData.code == 200) {
  //   //   let allProducts = reqShopData.content;
  //   //   for (var i = 0; i < allProducts.length; i++) {
  //   //     if (colorArr.indexOf(allProducts[i].color) == -1) {
  //   //       colorArr.push(allProducts[i].color)
  //   //     }
  //   //     if (locationArr.indexOf(allProducts[i].country) == -1) {
  //   //       locationArr.push(allProducts[i].country)
  //   //     }
  //   //     if (brandNameArr.indexOf(allProducts[i].brandName) == -1) {
  //   //       brandNameArr.push(allProducts[i].brandName)
  //   //     }
  //   //     for (var j = 0; j < allProducts[i].category.length; j++) {
  //   //       if (categoriesArr.indexOf(allProducts[i].category[1]) == -1) {
  //   //         categoriesArr.push(allProducts[i].category[1])
  //   //       }
  //   //     }
  //   //   }
  //   //   this.setState({
  //   //     allProducts: reqShopData.content,
  //   //     categories: categoriesArr,
  //   //     color: colorArr,
  //   //     location: locationArr,
  //   //     brandName: brandNameArr,
  //   //   })
  //   //   // console.log(categoriesArr, 'categoriesArr')
  //   //   // console.log(colorArr, 'colorArr')
  //   //   // console.log(locationArr, 'locationArr')
  //   //   // console.log(brandNameArr, 'brandNameArr')

  //   // }
  // }
  render() {
    const { allProducts, categories, color, location, brandName } = this.props;
    return (
      <div className="">
        <div className="row" style={{ padding: '0px' }}>
          <div className="col-md-12">
            <div className="col-md-3" style={{ backgroundColor: "whitesmoke" }}>
              <div className="row">
                <h2 style={{ fontWeight: '700', marginLeft: '15px' }}>Filters</h2>
                <FourEcom categories={categories} color={color} location={location} 
                brandName={brandName} onChange={this.props.onChange}/>
              </div>
            </div>
            <div className="col-md-9">
              <EcomNine allProducts={allProducts}  />
            </div>
          </div>
        </div>
      </div>

    )
  }
}

export default ProfileProducts;