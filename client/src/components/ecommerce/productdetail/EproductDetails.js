import React, { Component } from 'react';
import Burgermenu from '../../header/burgermenu';
import Slider from '../../header/Slider';
import Footer from '../../footer/footer';
import PthreeColumn from './PthreeColumn';
import PeightColumn from './PeightColumn';


class EproductDetail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cartCount: 0,
      user_Id: '',
      profileId: '',
      objectId: '',
      addToCartObj: {},
      images: [],
      productName: '',
      price: '',
      description: ''
    }
  }
  componentDidMount() {
    let data = this.props.location.state;
    // console.log(data, 'data')
    this.setState({
      user_Id: data.user_Id,
      profileId: data.profileId,
      objectId: data._id,
      images: data.images,
      productName: data.product,
      price: data.price,
      description: data.description
    })
  }

  shoppingCartCount = (countCart) => {
    const { user_Id, profileId, objectId, images, productName, price, description, cartCount, addToCartObj } = this.state;
    let count = cartCount + countCart;
    this.setState({
      cartCount: count
    })

    addToCartObj.user_Id = user_Id;
    addToCartObj.profileId = profileId;
    addToCartObj.objectId = objectId;
    addToCartObj.cartCount = count;
    addToCartObj.images = images;
    addToCartObj.productName = productName;
    addToCartObj.price = price;
    addToCartObj.description = description;
    console.log('aaaaaaaaaaaa', addToCartObj)
  }
  render() {
    return (
      <div>
        <span>
          <div className="" style={{ "backgroundImage": "url('../images/bgc-images/buy-sell.png')", marginTop: "105px", backgroundSize: 'cover' }}>
            <div className="background-image">
              <Burgermenu cartCount={this.state.cartCount} />
              <Slider mainH1="Your Market Hub for all Products" mainH2="Find what you need" />
            </div>
          </div>
        </span>
        <div className="row">
          <div className="col-md-12">
            <PthreeColumn data={this.props.location.state}
              shoppingCartCount={this.shoppingCartCount}
            />
          </div>
        </div>
      </div>

    )
  }
}

export default EproductDetail;
