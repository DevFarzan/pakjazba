import React, { Component } from 'react';
import './jobClassifiedicon.css';
import { connect } from 'react-redux'

class ClassifiedIcons extends Component {
  constructor(props) {
    super(props);
    this.clickItem = this.clickItem.bind(this);
  }

  clickItem(item) {
    const { dispatch } = this.props;
    var inputValue = item;
    dispatch({ type: 'SEARCHON', inputValue })
  }

  render() {
    return (
      <span>
        <div className="container" style={{width:'100%'}}>
          <div className="row">
            {/* <h1 className="headingtext" style={{fontWeight:'bold'}}> Browse Businessess by Category </h1> */}
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12" onClick={() => { this.clickItem('resturants') }} style={{ cursor: 'pointer' }}>
                <div className="wrimagecard wrimagecard-topimage">
                  <div className="wrimagecard-topimage_header">
                    <center>
                      <img src="../images/business icon/icons/resturant.png" style={{ width: "75%" }} />
                    </center>
                  </div>
                </div>
              </div>
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12" onClick={() => { this.clickItem('shopping') }} style={{ cursor: 'pointer' }}>
                <div className="wrimagecard wrimagecard-topimage">
                  <div className="wrimagecard-topimage_header">
                    <center>
                      <img src="../images/business icon/icons/shopping.png" style={{ width: "75%" }} />
                    </center>
                  </div>
                </div>
              </div>
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12" onClick={() => { this.clickItem('night life') }} style={{ cursor: 'pointer' }}>
                <div className="wrimagecard wrimagecard-topimage">
                  <div className="wrimagecard-topimage_header">
                    <center>
                      <img src="../images/business icon/icons/night-life.png" style={{ width: "75%" }} />
                    </center>
                  </div>
                </div>
              </div>
          </div>
        </div>

                    {/* <div className="container" style={{ width: '100%' }}>
                      <h2 style={{textAlign:"center", fontWeight:"bold", marginTop:"20px"}}> Categories </h2>
                      <div className="row">
                        <div className="col-md-12 col-sm-12 col-xs-12" onClick={() => { this.clickItem('Accounting') }} >
                          <div className="jobIconbox">
                            <div className="jobIconbox-topimage_header" style={{ border: '1px solid black', padding: '15px', textAlign: "center" }}>
                              <i className="fa fa-calculator margin_right_c" style={{ marginRight: "0" }}><p>Accounting</p></i>
                              <span className="margin_right_c"></span>

                            </div>
                          </div>
                        </div>
                        <div className="col-md-12 col-sm-12 col-xs-12" onClick={() => { this.clickItem('Admin & Clerical') }} >
                          <div className="jobIconbox">
                            <div className="jobIconbox-topimage_header" style={{ border: '1px solid black', padding: '15px', textAlign: "center" }}>
                              <i className="fa fa-plus-square margin_right_c" style={{ marginRight: "0" }}><p>Admin & Clerical</p></i>
                              <span className="margin_right_c"></span>

                            </div>
                          </div>
                        </div>
                        <div className="col-md-12 col-sm-12 col-xs-12" onClick={() => { this.clickItem('Customer Service') }} >
                          <div className="jobIconbox">
                            <div className="jobIconbox-topimage_header" style={{ border: '1px solid black', padding: '15px', textAlign: "center" }}>
                              <i className="fa fa-headphones margin_right_c" style={{ marginRight: "0" }}><p>Customer Service</p></i>
                              <span className="margin_right_c"></span>

                            </div>
                          </div>
                        </div>
                        <div className="col-md-12 col-sm-12 col-xs-12" onClick={() => { this.clickItem('Executive') }} >
                          <div className="jobIconbox">
                            <div className="jobIconbox-topimage_header" style={{ border: '1px solid black', padding: '15px', textAlign: "center" }}>
                              <i className="fa fa-user margin_right_c" style={{ marginRight: "0" }}><p>Executive</p></i>
                              <span className="margin_right_c"></span>

                            </div>
                          </div>
                        </div>
                        <div className="col-md-12 col-sm-12 col-xs-12" onClick={() => { this.clickItem('Contract & Freelance') }} >
                          <div className="jobIconbox">
                            <div className="jobIconbox-topimage_header" style={{ border: '1px solid black', padding: '15px', textAlign: "center" }}>
                              <i className="fa fa-file-text margin_right_c" style={{ marginRight: "0" }}><p>Contract & Freelance</p></i>
                              <span className="margin_right_c"></span>

                            </div>
                          </div>
                        </div>
                        <div className="col-md-12 col-sm-12 col-xs-12" onClick={() => { this.clickItem('Sales & Marketin') }} >
                          <div className="jobIconbox">
                            <div className="jobIconbox-topimage_header" style={{ border: '1px solid black', padding: '15px', textAlign: "center" }}>
                              <i className="fa fa-line-chart margin_right_c" style={{ marginRight: "0" }}><p>Sales & Marketing</p></i>
                              <span className="margin_right_c"></span>

                            </div>
                          </div>
                        </div>
                        <div className="col-md-12 col-sm-12 col-xs-12" onClick={() => { this.clickItem('Health Care') }} >
                          <div className="jobIconbox">
                            <div className="jobIconbox-topimage_header" style={{ border: '1px solid black', padding: '15px', textAlign: "center" }}>
                              <i className="fa fa-medkit margin_right_c" style={{ marginRight: "0" }}><p>Health Care</p></i>
                              <span className="margin_right_c"></span>

                            </div>
                          </div>
                        </div>
                        <div className="col-md-12 col-sm-12 col-xs-12" onClick={() => { this.clickItem('Retail') }} >
                          <div className="jobIconbox">
                            <div className="jobIconbox-topimage_header" style={{ border: '1px solid black', padding: '15px', textAlign: "center" }}>
                              <i className="fa fa-car margin_right_c" style={{ marginRight: "0" }}><p>Retail</p></i>
                              <span className="margin_right_c"></span>

                            </div>
                          </div>
                        </div>
                        <div className="col-md-12 col-sm-12 col-xs-12" onClick={() => { this.clickItem('Transporting') }} >
                          <div className="jobIconbox">
                            <div className="jobIconbox-topimage_header" style={{ border: '1px solid black', padding: '15px', textAlign: "center" }}>
                              <i className="fa fa-car margin_right_c" style={{ marginRight: "0" }}><p>Transporting</p></i>
                              <span className="margin_right_c"></span>

                            </div>
                          </div>
                        </div>
                        <span className="seemore" onClick={() => {this.clickItem('seemore')}}> <p> See More Category</p> </span>
                      </div>
                    </div> */}
      </span>
    )
  }
}

export default connect()(ClassifiedIcons);
