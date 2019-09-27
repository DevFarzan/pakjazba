import React, { Component } from 'react';
import Burgermenu from '../header/burgermenu';
import Footer from '../footer/footer';
import Slider from '../header/Slider';
import EcomCard from './EcomCard';
import Eshopcard from './EcomShopcard';
import Additionalcard from './EcomAdditionalcard';
import DealsEcom from './EcomDeals';
import CarouselHome from '../home/carouselHome';
import { HttpUtils } from "../../Services/HttpUtils";



class EcommerceMarket extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productsData: '',
      featureData: '',
      allData: '',
      ecomSerchValue: ''
    }
  }

  async componentWillMount() {
    let res = await HttpUtils.get('getecommercedata');
    let featureData = [];
    for (var i = 0; i < 4; i++) {
      featureData.push(res.content[i])
    }
    console.log(featureData, 'featureData')
    this.setState({
      productsData: res.content,
      featureData: featureData,
      allData: res.content
    })
  }

  searcProduct = (e) => {
    const { allData } = this.state;
    this.setState({
      ecomSerchValue: e.target.value
    })
    if (e.target.value == '') {
      this.setState({
        productsData: allData
      })
    }
  }

  searchProduct = async (e) => {
    const { ecomSerchValue, allData } = this.state;
    e.preventDefault();
    if (ecomSerchValue != '') {
      let res = await HttpUtils.get('getecommercedata');
      let data = res.content
      let ecommreceFilterData = [];
      for (let i in data) {
        if (ecomSerchValue == data[i].product || ecomSerchValue == data[i].productFeature ||
          ecomSerchValue == data[i].brandName || ecomSerchValue == data[i].description ||
          ecomSerchValue == data[i].legalDesclaimer || ecomSerchValue == data[i].manufacturer ||
          ecomSerchValue == data[i].manufacturerPart) {
          ecommreceFilterData.push(data[i])
        }
      }
      this.setState({
        productsData: ecommreceFilterData,
      })
    }
    else {
      this.setState({
        productsData: allData
      })
    }
    // console.log(ecomSerchValue, 'search value')
  }
  render() {
    const { productsData, featureData } = this.state;
    return (
      <div>
        <span>
          <div className="vissible-xs" style={{ "background": "#d8e7e4", marginTop: "102px", backgroundSize: 'cover' }}>
            <div className="visible-xs" style={{ marginTop: '-119px' }}></div>
            <div className="background-image">
              <Burgermenu />
              <Slider mainH1="Pakjazba Ecommerce" mainH2="" searcProduct={this.searcProduct} searchProduct={this.searchProduct} />
            </div>
          </div>
        </span>
        <div className="" style={{ marginTop: '40px' }}>
          <h4 className="headingtext"> Featured Listing </h4>
          <hr />
          <div>
            <CarouselHome />
          </div>
        </div>
        <div className="row" style={{ marginTop: "20px" }}>
          <h1 className="" style={{ fontWeight: "bold", textAlign: "center" }}> Feature Categories  </h1>
        </div>
        <div className="row" style={{ marginTop: "-10px" }}>
          <EcomCard featureData={featureData} />
        </div>
        <div className="row">
          <Eshopcard productsData={productsData} />
        </div>
        {/* <div className="row">
          <Additionalcard />
        </div> */}
        <div className="row" style={{ marginTop: "-70px" }}>
          <DealsEcom />
        </div>
        <div className="row">
          <div className="col-md-12">
            <img src="../images/businesslistingimage.png" style={{ width: '100%' }} />
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default EcommerceMarket;
