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
      productsData: ''
    }
  }

  async componentWillMount() {
    let res = await HttpUtils.get('getecommercedata');
    this.setState({
      productsData: res.content
    })
  }

  render() {
    const { productsData } = this.state;
    return (
      <div>
        <span>
          <div className="vissible-xs" style={{ "background": "#d8e7e4", marginTop: "102px", backgroundSize: 'cover' }}>
            <div className="visible-xs" style={{ marginTop: '-119px' }}></div>
            <div className="background-image">
              <Burgermenu />
              <Slider mainH1="Pakjazba Ecommerce" mainH2="" />
            </div>
          </div>
        </span>
        <div  className="" style={{marginTop: '40px'}}>
                  <h4 className="headingtext"> Featured Listing </h4>
                  <hr />
                  <div>
                      <CarouselHome/>
                  </div>
              </div>
        <div className="row" style={{ marginTop: "20px" }}>
          <h1 className="" style={{ fontWeight: "bold", textAlign: "center" }}> Feature Categories  </h1>
        </div>
        <div className="row" style={{ marginTop: "-10px" }}>
          <EcomCard />
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
