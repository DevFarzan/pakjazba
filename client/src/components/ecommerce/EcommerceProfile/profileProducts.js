import React, { Component } from 'react';
import Burgermenu from '../../header/burgermenu';
import Footer from '../../footer/footer';
import { Link } from "react-router-dom";
import EcomNine from './ecomNine';
import FourEcom from '../ecommercedetail/fourEcom';
import { isMobile, isTablet, isBrowser } from 'react-device-detect';
import { Tabs, Radio } from 'antd';
const { TabPane } = Tabs;

class ProfileProducts extends Component {
  render() {
    const { shopId } = this.props
    return (
      <div className="">
        <div className="row" style={{ padding: '0px' }}>
          <div className="col-md-12">
            <div className="col-md-3" style={{ backgroundColor: "whitesmoke" }}>
              <div className="row">
                <h2 style={{ fontWeight: '700', marginLeft: '15px' }}>Filters</h2>
                <FourEcom />
              </div>
            </div>
            <div className="col-md-9">
              <EcomNine shopId={shopId} />
            </div>
          </div>
        </div>
      </div>

    )
  }
}

export default ProfileProducts;