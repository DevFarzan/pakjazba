import React, { Component } from 'react';
import Burgermenu from '../../header/burgermenu';
import Slider from '../../header/Slider';
import Footer from '../../footer/footer';
import EcomTabs from './EcomTabs';
import VitalInfo from './EvitalInfo';
import OfferInfo from './OfferInfo';
import './ecomform.css'
import { isMobile, isTablet, isBrowser } from 'react-device-detect';

class EcomForms extends Component {
  constructor(props) {
    super(props)

    // this.state = {
    //   isData: true,
    //   data: {},
    // }
  }
  // componentDidMount() {
  //   // window.scrollTo(0, 0);
  //   let data = this.props.location.state;
  //   console.log(data, 'props.location.state')
  //   if (data === undefined) {
  //     this.setState({
  //       isData: false
  //     })
  //   } else {
  //     this.setState({
  //       isData: true,
  //       data: data
  //     })
  //   }
  // }
  render() {
    return (
      <div className="">
        <Burgermenu />
        <div className="row jobdetail-page" style={isMobile ? { backgroundColor: "#37a99b", marginTop: "0px" } : { backgroundColor: "#37a99b", marginTop: "100px" }}>
          <div className="col-md-12 col-sm-12 col-xs-12" style={{ textAlign: "center", marginTop: "25px" }}>
            <div className="">
              <h1 style={{ fontFamily: 'Crimson Text, serif', fontWeight: "bold", color: "white" }}>Add Your Product</h1>

            </div>
          </div>
        </div>
        <div>
          <EcomTabs data={this.props.location.state} />
        </div>
        <Footer />
      </div>


    )
  }
}
export default EcomForms;
