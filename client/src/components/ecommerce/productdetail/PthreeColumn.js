import React, { Component } from 'react';
import './PthreeColumn.css';
import { InputNumber, Icon, Button, Tooltip } from 'antd';
import ProductInformation from './ProductInformation';
import ProductReviews from './ProductReviews';
import { Link, Redirect } from "react-router-dom";
import { isMobile, isTablet, isBrowser } from 'react-device-detect';


class PthreeColumn extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isData: true,
      data: {},
      images: [],
      imgUrl: '',
      count: 0,
      commentData: [],
      goProfile: false,
      editProduct: false
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
  onGoEditProduct() {
    this.setState({
      editProduct: true
    })
  }

  goToProfile() {
    this.setState({ goProfile: true })
  }
  render() {
    const { data, count, commentData, editProduct } = this.state;
    let length = data.itemLength;
    let weight = data.itemWeight;
    let width = data.itemWidth;
    const { profileId,shopEmail,shopContactNo } = this.props;
    if (editProduct) {
      return (
        <Redirect to={{ pathname: `/Forms_Ecommerce`, state: data }} />
      )
    }
    if (this.state.goProfile) {
      return <Redirect to={{ pathname: `/profile_user/${data.profileId}`, state: { userId: data.user_Id, profileId: data.profileId } }} />
    }
    console.log("TCL: ecommerce detail -> render -> data", data)
    return (

      <div class="">
        <div className="row" style={{ paddingBottom: '0px', marginTop: '3vw' }}>
          <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
          <div className="col-xs-12 col-sm-5 col-md-5 col-lg-5">
            <div className="row elementMainDivS" style={{ paddingBottom: '0px' }}>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" style={{ display: 'inline-flex' }}>
                
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div className="row" style={{ padding: '0px' }}>
                  <div className="preview">
                    <div class="preview-pic tab-content">
                      <div class="tab-pane active" id="pic-1"><img src={this.state.imgUrl} /></div>
                    </div>
                    <ul class="preview-thumbnail nav nav-tabs">
                      {this.state.images.map(img =>
                        <li onClick={() => this.renderImagesinLi(img)}>
                          <a ><img src={img} /></a>
                        </li>)
                      }
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="row elementMainDivS" style={{ paddingBottom: '0px' }}>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" style={{ display: 'inline-flex' }}>
                <Icon type="bars" /><h5 className="headMainDivs">Notes</h5>
              </div>
              <div className="row" style={{ paddingBottom: '0px', marginTop: '8px' }}>
                <div className="col-xs-12 col-md-12 col-sm-12 col-lg-12">
                  <p class="vote"><strong>Condition Note: </strong> {data.conditionNote} </p>
                  <p class="vote"><strong>Legal Desclaimer: </strong>{data.legalDesclaimer} </p>
                </div>
              </div>
            </div>
            <div className="row elementMainDivS" style={{ paddingBottom: '0px' }}>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" style={{ display: 'inline-flex' }}>
                <Icon type="bars" /><h5 className="headMainDivs">Manufacturer</h5>
              </div>
              <div className="row" style={{ paddingBottom: '0px', paddingTop: '0px' }}>
                <div className="col-xs-12 col-md-12 col-sm-12 col-lg-12">
                  <p style={{ marginTop: '8px' }}>Manufacturer: <strong>{data.manufacturer}</strong></p>
                  <p>Part Number: <strong>{data.manufacturerPart}</strong></p>
                  <h4>Warranty Desciption</h4>
                  <p>{data.warrantyDescription}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-5 col-md-5 col-lg-5">
            <div className="row elementMainDivS2" style={{ paddingBottom: '0px' }}>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" style={{ display: 'inline-flex' }}>
                <Icon type="bars" /><h5 className="headMainDivs">Product Details</h5>
              </div>
              <div className="row" style={{ paddingBottom: '0px', marginTop: '8px' }}>
                <div className="col-xs-12 col-md-12 col-sm-12 col-lg-12" >
                  <div className="row" style={{ padding: "0" }}>
                    <div className="col-md-10">
                      <h4>{data.product}</h4>
                      <span>
                        <h4>Price: {'$' + data.price} </h4>
                        <h4>Sale: {'$ ' + data.salePrice}</h4>
                        <h6 className="efontcolor"> In Stock </h6>
                      </span>
                      <span>
                        <div className="row" style={{ padding: "0" }}>
                          <div className="col-md-9">
                            <h6> & Free Shipping </h6>
                            <p> Ships from and sold by PakJazba.com </p>
                          </div>
                          <div className="col-md-3">
                            <Button type="primary" htmlType="submit" className="btn contact-button">
                              <span>Contact</span>
                            </Button>
                          </div>
                        </div>
                      </span>
                    </div>
                    <div className="col-md-2">
                      <Tooltip title="Edit your product">
                        {data.profileId == profileId ? <span className="fa fa-pencil-square-o icon-color"
                          type="edit" size={26}
                          style={{ marginLeft: '10%', cursor: 'pointer' }}
                          onClick={() => { this.onGoEditProduct() }}
                        >
                        </span>
                          : null}
                      </Tooltip>
                    </div>
                  </div>
                </div>
              </div>
            </div><br />
            <div className="row elementMainDivS2" style={{ paddingBottom: '0px' }}>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" style={{ display: 'inline-flex' }}>
                <Icon type="bars" /><h5 className="headMainDivs">Contact Details</h5>
              </div>
              <div className="row" style={{ paddingBottom: '0px', marginTop: '8px' }}>
                <div className="col-xs-12 col-md-12 col-sm-12 col-lg-12">
                  <div className="row" style={{ padding: "0" }}>
                    <div className="col-xs-3 col-md-3 col-sm-5">
                      <div className="profile_img">
                        <img onClick={() => { this.goToProfile() }} src={data.userImage && data.userImage.length ? data.userImage : '../images/images.jpg'} className="" alt="" style={{ width: '100%', cursor: 'pointer', marginBottom: "8px" }} />
                      </div>
                    </div>
                    <div className="col-xs-9 col-md-9 col-sm-7 margMObileBuysell">
                      <span style={{ fontWeight: 'bold' }}>{data.shopName}</span><br />
                      <a onClick={() => { this.goToProfile() }} style={{ fontSize: '13px', cursor: 'pointer', color: 'rgb(55, 169, 155)' }}>
                        View Profile
                          </a>
                      <h5 style={{ marginTop: '10px', marginBottom: '7px' }}>
                        <span className="glyphicon glyphicon-phone" style={{ marginRight: "15px", color: "#236A4B" }}></span>
                        <span style={{ color: "rgba(0, 0, 0, 0.65)" }}>{shopContactNo}</span>
                      </h5>
                      <h5 style={{ marginBottom: '7px' }}>
                        <span className="glyphicon glyphicon-globe" style={{ marginRight: "15px", color: "#236A4B" }}></span>
                        <span style={{ color: "rgba(0, 0, 0, 0.65)" }}>{shopEmail}</span>
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row elementMainDivS2" style={{ paddingBottom: '0px' }}>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" style={{ display: 'inline-flex' }}>
                <Icon type="bars" /><h5 className="headMainDivs">Product Features</h5>
              </div>
              <div className="row" style={{ paddingBottom: '0px', paddingTop: '0px' }}>
                <div className="col-xs-12 col-md-12 col-sm-12 col-lg-12">
                  <p style={{margin: '0',marginTop: '8px'}}>{data.productFeature}</p>
                  <div className="row">
                    <div className="col-md-4">
                      <p class="vote">Size: <strong>{data.size}</strong></p>
                      <p>Color: <strong>{data.color}</strong></p>
                    </div>
                    <div className="col-md-4">
                      <p class="vote">Condition: <strong>{data.condition}</strong></p>
                      <p class="vote">Material: <strong>{data.materialType}</strong></p>
                    </div>
                    <div className="col-md-4">
                      {weight ?
                        <p class="vote">Weight: <strong>{weight.itemWeightNumber} {weight.itemWeightUnit}</strong></p>
                        : null}
                      {width ?
                        <p class="vote">width: <strong>{width.itemWidthNumber} {width.itemWidthUnit}</strong></p>

                        : null}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row elementMainDivS2" style={{ paddingBottom: '0px' }}>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" style={{ display: 'inline-flex' }}>
                <Icon type="bars" /><h5 className="headMainDivs">Description</h5>
              </div>
              <div className="row" style={{ paddingBottom: '0px', paddingTop: '0px' }}>
                <div className="col-xs-12 col-md-12 col-sm-12 col-lg-12">
                  <p style={{marginTop: '8px'}}>{data.description}</p>
                </div>
              </div>
            </div>
            <div className="row elementMainDivS2" style={{ paddingBottom: '0px' }}>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" style={{ display: 'inline-flex' }}>
                <Icon type="bars" /><h5 className="headMainDivs">Product Information</h5>
              </div>
              <div className="row" style={{ paddingBottom: '0px', marginTop: '8px' }}>
                <div className="col-xs-12 col-md-12 col-sm-12 col-lg-12">
                  <ProductInformation data={this.props.data} />
                </div>
              </div>
            </div>
          </div>
          <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-1 col-md-1 col-lg-1"></div>
          <div className="col-xs-12 col-sm-10 col-md-10 col-lg-10">
            {data &&
              <ProductReviews shopId={this.props.shopId} productId={this.props.productId}
              />}
          </div>
          <div className="col-xs-12 col-sm-1 col-md-1 col-lg-1"></div>
        </div>



        {/* <div class="card-three-column">
          <div class="row" style={{ padding: "15px" }}>
            <div class="col-md-6" style={{ padding: "0" }}>
              <div className="preview">
                <div class="preview-pic tab-content">
                  <div class="tab-pane active" id="pic-1"><img src={this.state.imgUrl} /></div>
                </div>
                <ul class="preview-thumbnail nav nav-tabs">
                  {this.state.images.map(img =>
                    <li onClick={() => this.renderImagesinLi(img)}>
                      <a ><img src={img} /></a>
                    </li>)
                  }
                </ul>
              </div>
              <br />
              <div className="">
                <div className="produc-description">
                  <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 contctCardInner" style={{ marginTop: '15px' }}>
                    <span style={{ display: 'inline-flex' }}>
                      <Icon type="unordered-list" style={{ marginRight: "5px" }} />
                      <h5 style={{ fontWeight: '600' }}>Contact Details</h5>
                    </span>
                    <div className="row" style={{ padding: "0" }}>
                      <div className="col-xs-3 col-md-3 col-sm-5">
                        <div className="profile_img">
                          <img onClick={() => { this.goToProfile() }} src={data.userImage && data.userImage.length ? data.userImage : '../images/images.jpg'} className="" alt="" style={{ width: '100%', cursor: 'pointer', marginBottom: "8px" }} />
                        </div>
                      </div>
                      <div className="col-xs-9 col-md-9 col-sm-7 margMObileBuysell">
                        <span style={{ fontWeight: 'bold' }}>{data.shopName}</span><br />
                        <a onClick={() => { this.goToProfile() }} style={{ fontSize: '13px', cursor: 'pointer', color: 'rgb(55, 169, 155)' }}>
                          View Profile
                          </a>
                        <h5 style={{ marginTop: '10px', marginBottom: '7px' }}>
                          <span className="glyphicon glyphicon-phone" style={{ marginRight: "15px", color: "#236A4B" }}></span>
                          <span style={{ color: "rgba(0, 0, 0, 0.65)" }}>{data.contactNumber}</span>
                        </h5>
                        <h5 style={{ marginBottom: '7px' }}>
                          <span className="glyphicon glyphicon-globe" style={{ marginRight: "15px", color: "#236A4B" }}></span>
                          <span style={{ color: "rgba(0, 0, 0, 0.65)" }}>{data.contactEmail}</span>
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="new-card">
                <div>
                  <div className="row" style={{ padding: "0" }}>
                    <div className="col-md-10">
                      <h4>{data.product}</h4>
                    </div>
                    <div className="col-md-2">
                      <Tooltip title="Edit your product">
                        {data.profileId == profileId ? <span className="fa fa-pencil-square-o icon-color"
                          type="edit" size={26}
                          style={{ marginLeft: '10%', cursor: 'pointer' }}
                          onClick={() => { this.onGoEditProduct() }}
                        >
                        </span>
                          : null}
                      </Tooltip>
                    </div>
                  </div>
                  <span>
                    <h4>Price: {'$' + data.price} </h4>
                    <h4>Sale: {'$ ' + data.salePrice}</h4>
                    <h6 className="efontcolor"> In Stock </h6>
                  </span>
                  <span>
                    <div className="row" style={{ padding: "0" }}>
                      <div className="col-md-9">
                        <h6> & Free Shipping </h6>
                        <p> Ships from and sold by PakJazba.com </p>
                      </div>
                      <div className="col-md-3">
                        <Button type="primary" htmlType="submit" className="btn contact-button">
                          <span>Contact</span>
                        </Button>
                      </div>
                    </div>
                  </span>
                </div>
              </div>


              <div className="new-card" style={{ marginTop: "20px" }}>
                <div className="produc-features">
                  <span style={{ display: 'inline-flex' }}>
                    <Icon type="unordered-list" style={{ marginRight: "5px" }} />
                    <h5>Product Features</h5>
                  </span>
                  <p>{data.productFeature} </p>
                  <div className="row">
                    <div className="col-md-4">
                      <p class="vote">Size: <strong>{data.size}</strong></p>
                      <p>Color: <strong>{data.color}</strong></p>
                    </div>
                    <div className="col-md-4">
                      <p class="vote">Condition: <strong>{data.condition}</strong></p>
                      <p class="vote">Material: <strong>{data.materialType}</strong></p>
                    </div>
                    <div className="col-md-4">
                      {weight ?
                        <p class="vote">Weight: <strong>{weight.itemWeightNumber} {weight.itemWeightUnit}</strong></p>
                        : null}
                      {width ?
                        <p class="vote">width: <strong>{width.itemWidthNumber} {width.itemWidthUnit}</strong></p>

                        : null}
                    </div>
                  </div>



                </div>
              </div>


              <RelatedInformation/>
            </div>
            <div className="row" style={{ marginTop: "20px" }}>
              <div class="col-md-6">
                <div className="new-card">
                  <div className="produc-description">
                    <span style={{ display: 'inline-flex' }}>
                      <Icon type="unordered-list" style={{ marginRight: "5px" }} />
                      <h5>Description</h5>
                    </span>
                    <p>{data.description}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="row" style={{ marginTop: "20px" }}>
              <div className="col-md-6">
                <div className="new-card">
                  <div className="product-manufacturer">
                    <span style={{ display: 'inline-flex' }}>
                      <Icon type="unordered-list" style={{ marginRight: "5px" }} />
                      <h5>Manufacturer </h5>
                    </span>
                    <p>Manufacturer: <strong>{data.manufacturer}</strong></p>
                    <p>Part Number: <strong>{data.manufacturerPart}</strong></p>
                    <h4>Warranty Desciption</h4>
                    <p>{data.warrantyDescription}</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <ProductInformation data={this.props.data} />
              </div>
            </div>
            <div className="col-md-12">
              <div className="new-card">
                <span style={{ display: 'inline-flex' }}>
                  <Icon type="unordered-list" style={{ marginRight: "5px" }} />
                  <h5>Notes</h5>
                </span>
                <p class="vote"><strong>Condition Note: </strong> {data.conditionNote} </p>
                <p class="vote"><strong>Legal Desclaimer: </strong>{data.legalDesclaimer} </p>
              </div>
            </div>
            <div className="row">
                <div class="details col-md-7">
                  <h3 class="product-title"
                  >{data.product}</h3>
                  <Link to={{
                    pathname: `/EcommerceProfile/${data.shopId}`,
                    // state: data.shopId
                  }}>
                    <div className="sellerstorecard" >
                      <p>
                        {`By ${data.shopName}`}
                      </p>
                    </div>
                  </Link>
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
                {data.profileId == profileId ? <Icon
                  type="edit" size={26}
                  style={{ marginLeft: '10%', cursor: 'pointer' }}
                  onClick={() => { this.onGoEditProduct() }}
                >
                </Icon>
                  : null}
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
                      <span> <InputNumber min={0} max={10} defaultValue={1} onChange={this.onChange} /></span>
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


            <div>
              <PTable />

            </div>
          </div>

          
          <ProductFaq />
          
        </div> */}
      </div>
        
              // <div class="container" style={{ width: "100%", padding: "0px" }}>
              //   <div class="card-three-column">
              //     <div class="row" style={{ padding: "0px" }}>
              //       <div class="preview col-md-5">
              //         <div className="row" style={{ padding: '0px' }}>
              //           <div className="col-md-3 col-xs-3">
              //             <ul class="preview-thumbnail enavigation enav-tabs" style={{ listStyle: 'none' }}>
              //               {/* rendering li in dom & show images */}
              //               {this.state.images.map(img => <li onClick={() => this.renderImagesinLi(img)}><a ><img src={img} /></a></li>)}
              //             </ul>
              //           </div>
              //           <div className="col-md-9 col-xs-9">
              //             <div class="preview-pic tab-content">
              //               <div class="tab-pane active" id="pic-1"><img src={this.state.imgUrl} /></div>
              //             </div>
              //           </div>
              //         </div>
              //       </div>
              //       <div className="col-md-7">
              //         <div className="row">
              //           <div class="details col-md-7">
              //             <h3 class="product-title"
              //             >{data.product}</h3>
              //             <Link to={{
              //               pathname: `/EcommerceProfile/${data.shopId}`,
              //               // state: data.shopId
              //             }}>
              //               <div className="sellerstorecard" >
              //                 <p>
              //                   {`By ${data.shopName}`}
              //                 </p>
              //               </div>
              //             </Link>
              //             <h3>{'$' + data.price} & Free Shipping</h3>
              //             <p class="vote">Size: <strong>{data.size}</strong></p>
              //             <div style={{ marginTop: "20px" }}>
              //               <p>Product Feature: {data.productFeature} </p>
              //               <ul className="margins">
              //                 <p>Description: {data.description}</p>
              //               </ul>
              //             </div>
              //             <div>
              //               <h4 className="margin"> From The Manufacturer </h4>
              //               <h5>{data.manufacturer} <br />{data.manufacturerPart}</h5>
              //               <p>Warranty Description: {data.warrantyDescription}</p>
              //             </div>
              //           </div>
              //           {data.profileId == profileId ? <Icon
              //             type="edit" size={26}
              //             style={{ marginLeft: '10%', cursor: 'pointer' }}
              //             onClick={() => { this.onGoEditProduct() }}
              //           >
              //           </Icon>
              //             : null}
              //           <div className="col-md-5">
              //             <p style={{ marginBottom: "0px" }}> Share: Email, Facebook, Twitter, Pinterest </p>
              //             <div className="ecartbox">
              //               <span>
              //                 <h4>{'$' + data.price} </h4>
              //                 <h4> & Free Shipping </h4>
              //               </span>
              //               <span>
              //                 <h4 className="efontcolor"> In Stock </h4>
              //                 <p> Ships from and sold by PakJazba.com </p>
              //               </span>
              //               <div>
              //                 <span>Qty:</span>
              //                 <span> <InputNumber min={0} max={10} defaultValue={1} onChange={this.onChange} /></span>
              //               </div>
              //               <div className="row center_global row">
              //                 <button style={{ textAlign: 'center', width: "90%", marginTop: "20px" }} className="btn button_custom"
              //                   // onClick={() => this.props.shoppingCartCount(count)}
              //                   onClick={this.addTocart}
              //                 >Add to cart</button>
              //               </div>
              //             </div>
              //           </div>
              //         </div>
              //       </div>
              //       <div>
              //         {/* <PTable /> */}
              //         <ProductInformation data={this.props.data} />
              //         {/* <ProductFaq /> */}
              //         {data &&
              //           <ProductReviews shopId={this.props.shopId} productId={this.props.productId}
              //           />}
              //       </div>
              //     </div>
              //   </div>
              // </div>
    )
  }
}
export default PthreeColumn;
