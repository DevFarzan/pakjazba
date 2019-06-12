import React, { Component } from 'react';
import './PthreeColumn.css';
import { InputNumber } from 'antd';
import PTable from './Ptable'
import ProductInformation from './ProductInformation'
import ProductReviews from './ProductReviews'
import ProductFaq from './ProductFaq';

function onChange(value) {
  console.log('changed', value);
}


class PthreeColumn extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isData: true,
      data: {},
      images: [],
      imgUrl: ''
    }

  }

  componentDidMount() {
    window.scrollTo(0, 0);
    let data = this.props.data;
    console.log(data, 'dataaaaa')
    if (data === undefined) {
      this.setState({
        isData: false
      })
    } else {
      this.setState({
        isData: true,
        data: data,
        images: data.images,
        imgUrl: data.images[0]
      })
    }
    console.log(this.state.images , 'images')
  }

  renderImagesinLi = (img) => {
    // console.log(img)
    this.setState({
      imgUrl: img
    })
  }

  render() {
    const { data } = this.state
    return (
      <div class="container" style={{ width: "100%", padding: "0px" }}>
        <div class="card-three-column">
          <div class="row" style={{ padding: "0px" }}>
            <div class="preview col-md-4">
              <div className="row">
                <div className="col-md-2">
                  <ul class="preview-thumbnail enavigation enav-tabs">
                    {/* rendering li in dom & show images */}
                    {this.state.images.map(img => <li onClick={() => this.renderImagesinLi(img)}><a ><img src={img} /></a></li>)}
                    {/* {this.state.images.map(function (img) {
                      // console.log(img)
                    //   return <li class="active" ><a onClick={this.renderImagesinLi.bind(this,"img")}>
                    //   <img src={img} />
                    // </a></li>
                      return <li class="active"
                      onClick={this.renderImagesinLi}
                      // onClick={(e) => {this.renderImagesinLi(e, "someParameter")}}
                      // onClick={() => this.renderImagesinLi("index")}
                      // onClick={this.renderImagesinLi.bind(this,"img")}
                      // onClick={() => this.renderImagesinLi("e")} 
                      >
                        <a >
                        <img src={img} />
                      </a>
                      </li>
                    })} */}

                    {/* // <li class="active"><a data-target="#pic-1" data-toggle="tab">
                    //   <img src="./images/ecommerce/41pa5T0NGKL._AC_US218_.jpg" />
                    // </a></li>
                    // <li><a data-target="#pic-2" data-toggle="tab">
                    //   <img src="images/ecommerce/41Eu2E0X8xL._AC_US218_.jpg" />
                    // </a></li>
                    // <li><a data-target="#pic-3" data-toggle="tab">
                    //   <img src="images/ecommerce/41RPh1kjNpL._AC_US218_.jpg" />
                    // </a></li>
                    // <li><a data-target="#pic-4" data-toggle="tab">
                    //   <img src="images/ecommerce/51FaYCQow3L._SCLZZZZZZZ___AC_SY200_.jpg" />
                    // </a></li>
                    // <li><a data-target="#pic-5" data-toggle="tab">
                    //   <img src="http://placekitten.com/200/126" />
                    // </a></li> 
                  // } */}
                  </ul>
                </div>
                <div className="col-md-10">
                  <div class="preview-pic tab-content">
                    <div class="tab-pane active" id="pic-1"><img src={this.state.imgUrl} /></div>
                    {/* <div class="tab-pane" id="pic-2"><img src="images/ecommerce/41Eu2E0X8xL._AC_US218_.jpg" /></div>
                    <div class="tab-pane" id="pic-3"><img src="images/ecommerce/41RPh1kjNpL._AC_US218_.jpg" /></div>
                    <div class="tab-pane" id="pic-4"><img src="images/ecommerce/51FaYCQow3L._SCLZZZZZZZ___AC_SY200_.jpg" /></div>
                    <div class="tab-pane" id="pic-5"><img src="http://placekitten.com/400/252" /></div> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <div className="row">
                <div class="details col-md-7">
                  <h3 class="product-title"
                  >{data.product}</h3>
                  <p> By PakJazba </p>
                  <h3>{'$' + data.price} & Free Shipping</h3>
                  <p class="vote">Size: <strong>{data.size}</strong></p>
                  {/* <div className="row">
                    <div style={{ display: "flex" }}>
                      <span className="sizesbox">
                        <p>32 GB
                            <br />$7.49 </p>
                      </span>
                      <span className="sizesbox">
                        <p>32 GB
                            <br />$7.49 </p>
                      </span>
                      <span className="sizesbox">
                        <p>32 GB
                            <br />$7.49 </p>
                      </span>
                      <span className="sizesbox">
                        <p>32 GB
                            <br />$7.49 </p>
                      </span>
                    </div>
                  </div> */}

                  <div style={{ marginTop: "20px" }}>
                    <p> {data.productFeature} </p>
                    <ul className="margins">
                      <li>{data.description}</li>
                      {/* <li> Up to 100MB/s & 90MB/s read & write speeds respectively; Class 10 UHS-1</li> */}
                      {/* <li> UHS-1 High-performance for 4K UHD video recording, high resolution pictures, mobile gaming and music, for use in Smartphones, Drones, Android Tablets, Tablet PCs, Action Cameras, DSLRs and more</li>
                      <li> Includes: Full-Size adapter for use in Cameras and Laptop/Desktop Computers</li>
                      <li> 10-year limited warranty; Voltage 2.7~3.6V</li>
                      <li> Overwriting Temperature: -13 degree F to 185 degree F. Interface UHS-1 compatible to hs interface. </li> */}
                    </ul>
                  </div>

                  <div>
                    <h4> From The Manufacturer </h4>
                    <h5>{data.manufacturer} <br />{data.manufacturerPart}</h5>
                    {/* <p>With stunning speed and reliability, the Samsung 256GB MicroSDXC EVO Select memory card lets you get the most out of your devices.
                    Ultra-fast read & write speeds of up to 100MB/s & 90MB/s and backed by 4-proof protection,
                    keep your data safe against water, extreme temperatures, and other harsh conditions.
                    Feel confident to capture, store and transfer 4K UHD videos, photos, music and other large files effortlessly.
                      Your memories and adventures are irreplaceable, and now unforgettable. </p> */}
                    <p>Warranty Description: {data.warrantyDescription}</p>
                  </div>

                </div>
                <div className="col-md-5">
                  <p style={{ marginBottom: "0px" }}> Share: Email, Facebook, Twitter, Pinterest </p>
                  <div className="ecartbox">
                    <span>
                      <h4>{'$' + data.price} </h4>
                      <h4> & Free Shipping </h4>
                    </span>
                    <span>
                      <h4 className="efontcolor"> In Stock </h4>
                      <p> Ships from and sold by PakJazba.com </p>
                    </span>
                    <div>
                      <span>Qty:</span>
                      <span> <InputNumber min={1} max={10} defaultValue={0} onChange={onChange} /></span>
                    </div>
                    <div className="row center_global row">
                      <button style={{ textAlign: 'center', width: "90%", marginTop: "20px" }} className="btn button_custom">Add to cart</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              {/* <PTable /> */}
              <ProductInformation data={this.props.data} />
              <ProductFaq />
              <ProductReviews />
            </div>


          </div>
        </div>
      </div>
    )
  }
}
export default PthreeColumn;
