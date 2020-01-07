import React, { Component } from 'react';
import { Tabs, Icon } from 'antd';
import Slider from '../header/Slider';
import { HttpUtils } from "../../Services/HttpUtils";
import Eshopcard from '../ecommerce/EcomShopcard';
import BuyCategory from '../buy_sell/buyfirstfold';
import DealsEcom from '../ecommerce/EcomDeals';
    
class EcommerceTAB extends Component{
    constructor(props) {
        super(props)
        this.state = {
            productsData: '',
            featureData: '',
            allData: '',
            ecomSerchValue: '',
            featuredCategories: true,
            noRecordFound: false,
            recordFound: true,
            loader: true,
            searchBy: '',
            checkRadioBtn: false
        }
    }
    async componentDidMount() {
        let res = await HttpUtils.get('getecommercedata');
        let featureData = [];
        console.log(res, 'res.content.length')
        if (res.content.length >= 4) {
          for (var i = 0; i < 4; i++) {
            featureData.push(res.content[i])
            if (res) {
              if (res.code == 200) {
                if (res.content.length >= 4) {
                  for (var i = 0; i < 4; i++) {
                    featureData.push(res.content[i])
                  }
                }
                this.setState({
                  productsData: res.content,
                  featureData: featureData,
                  allData: res.content,
                  loader: false
                })
              }
            }
          }
        }
      }
    
          searcProduct = (e) => {
            const { allData } = this.state;
            this.setState({
              ecomSerchValue: e.target.value
            })
            if (e.target.value == '') {
              this.setState({
                productsData: allData,
                featuredCategories: true,
                noRecordFound: false,
                recordFound: true
              })
            }
          }
    
          searchProduct = async (e) => {
            const { ecomSerchValue, allData, searchBy } = this.state;
            e.preventDefault();
            let data;
            let res = await HttpUtils.get('getecommercedata');
            if (res) {
              if (res.code = 200) {
                data = res.content;
              }
            }
            let ecomSearchValue = ecomSerchValue.toLowerCase();
            let ecommreceFilterData = [];
            if (searchBy != '') {
              if (ecomSerchValue != '') {
                for (let i in data) {
                  if (searchBy == 'product') {
                    if (ecomSearchValue == data[i].product.toLowerCase()) {
                      ecommreceFilterData.push(data[i])
                    }
                  }
                  else if (searchBy == 'shop') {
                    if (ecomSearchValue == data[i].shopName.toLowerCase()) {
                      ecommreceFilterData.push(data[i])
                    }
                  }
                  else if (searchBy == 'brand') {
                    if (ecomSearchValue == data[i].brandName.toLowerCase() || ecomSearchValue == data[i].manufacturer.toLowerCase()) {
                      ecommreceFilterData.push(data[i])
                    }
                  }
                }
                if (ecommreceFilterData.length == 0) {
                  this.setState({
                    recordFound: false,
                    noRecordFound: true,
                    featuredCategories: false,
                  })
                }
                else {
                  this.setState({
                    productsData: ecommreceFilterData,
                    featuredCategories: false,
                    recordFound: true,
                    noRecordFound: false,
                  })
                }
              }
            }
            else {
              this.setState({
                checkRadioBtn: true
              })
            }
          }
    
          onAddMore = () => {
            const { allData } = this.state;
            this.setState({
              productsData: allData,
              featuredCategories: true,
              recordFound: true,
              noRecordFound: false
            })
          }
    
          onChange = e => {
            this.setState({
              searchBy: e.target.value,
              checkRadioBtn: false
            });
          };
    render(){
        const { TabPane } = Tabs;
        const antIcon = <Icon type="loading" style={{ fontSize: 120 }} spin />;
        const { productsData, featureData, featuredCategories, noRecordFound, recordFound, loader, searchBy, checkRadioBtn } = this.state;
        return(
            <div>
                <div className="row">
                    <div className="col-xs-12 col-sm-3 col-md-3 col-lg-3">
                        <Tabs defaultActiveKey="1">
                            <TabPane tab={
                                <span><Icon type="apple" /> Filter </span>}
                                key="1">
                                    <Slider mainH1="Pakjazba Ecommerce" mainH2="" searcProduct={this.searcProduct} searchProduct={this.searchProduct}
                                    onChange={this.onChange} searchBy={searchBy} checkRadioBtn={checkRadioBtn} />
                            </TabPane>
                            <TabPane tab={
                                <span><Icon type="android" /> Category </span>}
                                key="2">
                                <BuyCategory />
                            </TabPane>
                        </Tabs>
                    </div>
                    <div className="col-xs-12 col-sm-9 col-md-9 col-lg-9">
                    {noRecordFound && <span style={{ textAlign: "center" }}><h1>Not found....</h1></span>}
                    {noRecordFound && <span style={{ textAlign: "center" }}><h5>you can find your search by type</h5></span>}
                    {noRecordFound && <div className="col-md-12" style={{ textAlign: "center" }}><button type="button" className="btn2 btn2-success" onClick={this.onAddMore}>Go Back</button></div>}
                    {recordFound ? <div className="row">
                    <Eshopcard productsData={productsData} />
                    </div> : null}
                    
                    </div>
                </div>
            </div>
        )
    }
}
export default EcommerceTAB;
