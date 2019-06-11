import React, { Component } from 'react';
import Burgermenu from '../../header/burgermenu';
import Slider from '../../header/Slider';
import Footer from '../../footer/footer';
import PthreeColumn from './PthreeColumn';
import PeightColumn from './PeightColumn';


class EproductDetail extends Component {
  constructor(props) {
    super(props)

  } 

  render() {
    return (
      <div>
        <span>
          <div className="" style={{ "backgroundImage": "url('../images/bgc-images/buy-sell.png')", marginTop: "105px", backgroundSize: 'cover' }}>
            <div className="background-image">
              <Burgermenu />
              <Slider mainH1="Your Market Hub for all Products" mainH2="Find what you need" />
            </div>
          </div>
        </span>

        <div className="row">
          <div className="col-md-12">

            <PthreeColumn data={this.props.location.state} />
          </div>

        </div>
      </div>

    )
  }
}

export default EproductDetail;
