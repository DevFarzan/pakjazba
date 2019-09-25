import React, { Component } from 'react';
import Burgermenu from '../../header/burgermenu';
import Slider from '../../header/Slider';
import Footer from '../../footer/footer';
import PthreeColumn from './PthreeColumn';
import PeightColumn from './PeightColumn';
import { isMobile, isTablet, isBrowser } from 'react-device-detect';
import { HttpUtils } from "../../../Services/HttpUtils";
let addToCartArr = []

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
    console.log(userData, 'user data')
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
        user_Id: userData._id,
        profileId: userData.profileId,
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

  shoppingCartCount = (countCart) => {
    const { user_Id, profileId, objectId, images, productName, price, description, cartCount } = this.state;
    const addToCartData = JSON.parse(localStorage.getItem('addToCart'));

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
    // let count = cartCount + countCart;
    // this.setState({
    //   cartCount: count
    // // })
    if (addToCartData) {
      // let data = addToCartData.filter(function (element) {
      //   return element !== undefined;
      // });
      // console.log(data, 'data')
      for (var i = 0; i < addToCartData.length; i++) {
        // console.log(addToCartData[i], '(addToCartData[i])')
        if (addToCartData[i].objectId == objectId &&
          addToCartData[i].user_Id == user_Id &&
          addToCartData[i].productName == productName &&
          addToCartData[i].price == price &&
          addToCartData[i].description == description) {
          console.log('same product')
          addToCartData[i].cartCount = countCart;
          cartArr.push(addToCartData[i])
        }
        else if (addToCartData[i].objectId != objectId &&
          addToCartData[i].user_Id == user_Id &&
          addToCartData[i].productName != productName &&
          addToCartData[i].price != price &&
          addToCartData[i].description != description) {
          console.log('difrrent product')
          cartArr.push(addToCartObj)

        }
        // else {
        //   console.log('else product means locala storage other data');
        //   cartArr.push(addToCartData[i])
        // }
        // else if (addToCartData[i].profileId == profileId && addToCartData[i].objectId != objectId) {
        // arr.push(addToCartData[i])
        // cartArr.push(addToCartData[i])
        // if (addToCartData[i].profileId == profileId && addToCartData[i].productName != productName &&
        //   addToCartData[i].price != price && addToCartData[i].description != description) {
        //   // arr.push(addToCartObj)
        // }
        // }
      }
      // var objectsAreSame = true;
      // for (var x in previousCartData) {
      //   console.log(previousCartData[x], 'previousCartData')
      //   if (previousCartData[x] !== cartArr[x]) {
      //     combineArr.push(cartArr)
      //     // objectsAreSame = false;
      //     // break;
      //   }
      // }
      // return objectsAreSame;
      // combineArr = cartArr.concat(previousCartData);
    }
    else {
      // console.log('elese render')
      cartArr.push(addToCartObj)
      // combineArr = cartArr
    }
    // for (var x in previousCartData) {
    //   console.log(previousCartData[x], 'previousCartData')
    //   if (previousCartData[x] !== cartArr[x]) {
    //     combineArr.push(cartArr[x])
    //     // objectsAreSame = false;
    //     // break;
    //   }
    //   else {
    //     combineArr.push(previousCartData[x])
    //   }
    // }
    // console.log(cartArr, 'addToCartObj')
    // console.log(previousCartData, 'previousCartData')
    //if(previousCartData){
    //   for(var j=0;j<previousCartData.length;j++){
    //     if(previousCartData[j].objectId == cartArr[0].objectId){
    //       combineArr.push(cartArr[0])
    //     }
    //     else{
    //       combineArr.push(previousCartData[j])
    //     }
    //   }
    // //}
    let dataPush = false;
    if (previousCartData) {
      for (var j = 0; j < previousCartData.length; j++) {
        console.log(previousCartData[j], 'combine arr')
        if (previousCartData[j].objectId == cartArr[0].objectId) {
          console.log(previousCartData[j], 'previousCartData[j]')
          combineArr.push(cartArr[0])
        }
        else {
          console.log('eles')
          combineArr.push(previousCartData[j])
          // console.log(previousCartData[j], 'combineArr.push(previousCartData[j + 1])')
          dataPush = true
        }
        // else {
        //   console.log('else')
        //   combineArr.push(cartArr[0])
        // }
      }
      if (dataPush) {
        console.log(dataPush, 'data push')
        combineArr.push(cartArr[0])
        dataPush = false

      }
      // console.log(previousCartData[j], 'combine arr')
      // if (previousCartData[j] == undefined) {
      //   combineArr.push(cartArr[0])
      //   // else {
      //   //   console.log('else')
      //   //   combineArr.push(cartArr[0])
      //   // }
      // }
      // else {
      //   if (previousCartData[j].objectId == cartArr[0].objectId) {
      //     console.log(previousCartData[j], 'previousCartData[j]')
      //     combineArr.push(cartArr[0])
      //   }
      //   else if (previousCartData[j].objectId != cartArr[0].objectId) {
      //     combineArr.push(previousCartData[j])
      //     console.log(previousCartData[j], 'combineArr.push(previousCartData[j + 1])')
      //   }
      //   // combineArr.push(cartArr[0])
      // }
      console.log(combineArr, 'combineArr')
      // console.log('cartArr condition true')
      localStorage.setItem('addToCart', JSON.stringify(combineArr));
    }
    else {
      localStorage.setItem('addToCart', JSON.stringify(cartArr));

    }
    // console.log('aaaaaaaaaaaa', cartArr)
    // console.log(combineArr, 'arrrr')
  }
  render() {
    const { dataShow, data, productId } = this.state;
    return (
      <div>
        <span>
          <div className="" style={isMobile ? { "backgroundImage": "url('../images/bgc-images/buy-sell.png')", marginTop: "10px", backgroundSize: 'cover' } : { "backgroundImage": "url('../images/bgc-images/buy-sell.png')", marginTop: "105px", backgroundSize: 'cover' }}>
            <div className="background-image">
              <Burgermenu cartCount={this.state.cartCount} />
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
