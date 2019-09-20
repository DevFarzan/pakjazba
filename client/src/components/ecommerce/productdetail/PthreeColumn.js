import React, { Component } from 'react';
import './PthreeColumn.css';
import { InputNumber } from 'antd';
import PTable from './Ptable'
import ProductInformation from './ProductInformation'
import ProductReviews from './ProductReviews'
import ProductFaq from './ProductFaq';


class PthreeColumn extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isData: true,
      data: {},
      images: [],
      imgUrl: '',
      count: 0
    }
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    let data = this.props.data;
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
  }

  renderImagesinLi = (img) => {
    this.setState({
      imgUrl: img
    })
  }

  onChange = (value) => {
    console.log('changed', value);
    this.setState({
      count: value
    })
  }
  addTocart = () => {
    const { count } = this.state;
    let user = JSON.parse(localStorage.getItem('user'));
    if (user === undefined) {
    }
    else {
      this.props.shoppingCartCount(count)
    }
  }
  render() {
    const { data, count } = this.state

    return (
      <div class="container" style={{ width: "100%", padding: "0px" }}>
        <div class="card-three-column">
          <div class="row" style={{ padding: "0px" }}>
            <div class="preview col-md-5">
              <div className="row" style={{ padding: '0px' }}>
                <div className="col-md-3 col-xs-3">
                  <ul class="preview-thumbnail enavigation enav-tabs" style={{ listStyle: 'none' }}>
                    {/* rendering li in dom & show images */}
                    {this.state.images.map(img => <li onClick={() => this.renderImagesinLi(img)}><a ><img src={img} /></a></li>)}
                  </ul>
                </div>
                <div className="col-md-9 col-xs-9">
                  <div class="preview-pic tab-content">
                    <div class="tab-pane active" id="pic-1"><img src={this.state.imgUrl} /></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-7">
              <div className="row">
                <div class="details col-md-7">
                  <h3 class="product-title"
                  >{data.product}</h3>
                  <p> By PakJazba </p>
                  <h3>{'$' + data.price} & Free Shipping</h3>
                  <p class="vote">Size: <strong>{data.size}</strong></p>
                  <div style={{ marginTop: "20px" }}>
                    <p>Product Feature: {data.productFeature} </p>
                    <ul className="margins">
                      <p>Description: {data.description}</p>
                    </ul>
                  </div>
                  <div>
                    <h4 className="margin"> From The Manufacturer </h4>
                    <h5>{data.manufacturer} <br />{data.manufacturerPart}</h5>
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
                      <span> <InputNumber min={1} max={10} defaultValue={0} onChange={this.onChange} /></span>
                    </div>
                    <div className="row center_global row">
                      <button style={{ textAlign: 'center', width: "90%", marginTop: "20px" }} className="btn button_custom"
                        // onClick={() => this.props.shoppingCartCount(count)}
                        onClick={this.addTocart}
                      >Add to cart</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              {/* <PTable /> */}
              <ProductInformation data={this.props.data} />
              <ProductFaq />
              <ProductReviews productId={this.props.productId} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default PthreeColumn;
