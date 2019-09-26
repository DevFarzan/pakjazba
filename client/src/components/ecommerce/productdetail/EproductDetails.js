import React, { Component } from 'react';
import Burgermenu from '../../header/burgermenu';
import Slider from '../../header/Slider';
import Footer from '../../footer/footer';
import PthreeColumn from './PthreeColumn';
import PeightColumn from './PeightColumn';
import { isMobile, isTablet, isBrowser } from 'react-device-detect';
import { HttpUtils } from "../../../Services/HttpUtils";

class EproductDetail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cartCount: 0,
      user_Id: '',
      profileId: '',
      objectId: '',
      images: [],
      productName: '',
      price: '',
      description: '',
      data: '',
      productId: '',
      dataShow: false
    }
  }
  async componentDidMount() {
    let data = this.props.location.state;
    const userData = JSON.parse(localStorage.getItem('user'));
    if (data) {
      this.setState({
        user_Id: userData._id,
        profileId: userData.profileId,
        objectId: data._id,
        images: data.images,
        productName: data.product,
        price: data.price,
        description: data.description,
        productId: data._id,
        data: data,
        dataShow: true
      })
    }
    else {
      let obj = {
        productId: this.props.location.pathname.slice(22)
      }
      let res = await HttpUtils.post('getspecificproductbyid', obj);
      let data = res.content[0]
      this.setState({
        objectId: data._id,
        images: data.images,
        productName: data.product,
        price: data.price,
        description: data.description,
        data: data,
        productId: data._id,
        dataShow: true
      })
    }
  }

  //add to cart funtion
  shoppingCartCount = (countCart) => {
    const { user_Id, profileId, objectId, images, productName, price, description, cartCount } = this.state;
    //get local storage data
    const addToCartData = JSON.parse(localStorage.getItem('addToCart'));

    //create obj for values
    let addToCartObj = {};
    let cartArr = [];
    let previousCartData = addToCartData;
    let combineArr = [];
    addToCartObj.user_Id = user_Id;
    addToCartObj.profileId = profileId;
    addToCartObj.objectId = objectId;
    addToCartObj.cartCount = countCart;
    addToCartObj.images = images;
    addToCartObj.productName = productName;
    addToCartObj.price = price;
    addToCartObj.description = description;
    //set state for props

    //get array if user previves record or new record
    if (addToCartData) {
      for (var i = 0; i < addToCartData.length; i++) {
        if (addToCartData[i].objectId == objectId &&
          addToCartData[i].user_Id == user_Id &&
          addToCartData[i].productName == productName &&
          addToCartData[i].price == price &&
          addToCartData[i].description == description) {
          // if user add same data of the previes record
          addToCartData[i].cartCount = countCart;
          cartArr.push(addToCartData[i])
          break;
        }
        else if (addToCartData[i].objectId != objectId &&
          addToCartData[i].user_Id == user_Id &&
          addToCartData[i].productName != productName &&
          addToCartData[i].price != price &&
          addToCartData[i].description != description) {
          //if user add to cart newe product
          cartArr.push(addToCartObj)
          break;
        }
      }
      // console.log(cartArr)
      this.setState({
        cartCount: cartArr[0].cartCount
      })
    }
    else {
      //if user add 1st time data 
      cartArr.push(addToCartObj)
      this.setState({
        cartCount: addToCartObj.cartCount
      })
    }
    let dataPush = false;
    var children;
    if (previousCartData) {
      for (var j = 0; j < previousCartData.length; j++) {
        if (previousCartData[j].objectId == cartArr[0].objectId) {
          //if user same record of the previous record
          combineArr.push(cartArr[0])
          dataPush = true;
        }
        else {
          // user previos record pus to array
          combineArr.push(previousCartData[j])
        }
      }
      if (!dataPush) {
        // combine array
        children = combineArr.concat(cartArr);
        localStorage.setItem('addToCart', JSON.stringify(children));
      } else {
        //all record
        localStorage.setItem('addToCart', JSON.stringify(combineArr));
      }
    }
    else {
      //add to local storage data in 1st time
      localStorage.setItem('addToCart', JSON.stringify(cartArr));
    }
  }
  render() {
    const { dataShow, data, productId, cartCount } = this.state;
    return (
      <div>
        <span>
          <div className="" style={isMobile ? { "backgroundImage": "url('../images/bgc-images/buy-sell.png')", marginTop: "10px", backgroundSize: 'cover' } : { "backgroundImage": "url('../images/bgc-images/buy-sell.png')", marginTop: "105px", backgroundSize: 'cover' }}>
            <div className="background-image">
              <Burgermenu cartCount={cartCount} />
              <Slider mainH1="Your Market Hub for all Products" mainH2="Find what you need" />
            </div>
          </div>
        </span>
        <div className="row">
          <div className="col-md-12">
            {dataShow ?
              <PthreeColumn data={data}
                shoppingCartCount={this.shoppingCartCount}
                productId={productId}
              />
              : null}
          </div>
        </div>
      </div>

    )
  }
}

export default EproductDetail;
