import React, { Component } from 'react';
import { Tabs, Icon, Form } from 'antd';
import Slider from '../header/Slider';
import EcommerceFilter from './ecommerce-filter';
import { HttpUtils } from "../../Services/HttpUtils";
import Eshopcard from '../ecommerce/EcomShopcard';
import BuyCategory from '../buy_sell/buyfirstfold';
import EcomFilter from '../ecommerce/ecommerce-filter';
import DealsEcom from '../ecommerce/EcomDeals';

// const FormItem = Form.Item;
// const Option = Select.Option;





let filterSubCategoryName = [];
let filterBrand = [];
let filterColorFamily = [];

class EcommerceTAB extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: false,
            productsData: '',
            featureData: '',
            allData: true,
            ecomSerchValue: '',
            featuredCategories: true,
            noRecordFound: false,
            recordFound: true,
            loader: true,
            searchBy: '',
            checkRadioBtn: false,
            filteredData: [],
            notFoundFilterData: false,

            categoryofProduct: [],
            brandName: [],
            color: [],

            colorsofProduct: [],
            brandofProducts: [],

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
                            // featureData: featureData,
                            // allData: res.content,
                            // loader: false
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
                  else if (searchBy == 'brandName') {
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


    /*Color Filteration*/
    onChangeCheckBoxes = (value) => {
        this.setState({
            color: value
        })

        filterColorFamily = value;
        this.filterKeysGet();
    }

    /*Brand Filteration*/

    onChangeBrand = (value) => {
        this.setState({
            brandName: value
        })

        filterBrand = value;
        this.filterKeysGet();
    }

    /*category filteration*/

    onChange = (value) => {
        let categoryValue = [];
        categoryValue.push(value[2]);
        this.setState({
            categoryProduct: categoryValue,
        })
        filterSubCategoryName = categoryValue
        this.filterKeysGet()
        console.log(filterSubCategoryName, "categoryvalue")
    }

    filterKeysGet = () => {
        console.log("Get Products")
        let categoryofProduct = [];
        let colorsofProduct = [];
        let brandofProducts = [];

        let filterKeys = [];

        if (filterSubCategoryName.length > 0) {
            filterKeys.push('category')
        }
        if (filterColorFamily.length > 0) {
            filterKeys.push('color')
        }
        if (filterBrand.length > 0) {
            filterKeys.push('brandName')
        }
        for (var i = 0; i < filterSubCategoryName.length; i++) {
            categoryofProduct.push(filterSubCategoryName[i])
        }
        for (var i = 0; i < filterColorFamily.length; i++) {
            colorsofProduct.push(filterColorFamily[i])
        }
        for (var i = 0; i <filterBrand.length; i++){
            categoryofProduct.push(filterBrand[i])
        }

        this.setState({
            categoryofProduct: categoryofProduct,
            colorsofProduct: colorsofProduct,
            brandofProducts: brandofProducts,
        })

        this.filterProductsData(filterKeys)
    }

    filterProductsData = (filterKeys) => {
        console.log("Get Products 2")
        if (filterKeys.length == 1) {
            this.filterDataWithOneKey(filterKeys);
        }
        else if (filterKeys.length == 2) {
            this.filterDataWithTwoKeys(filterKeys);
        }
        else if (filterKeys.length == 3) {
            this.filterDataWithThreeKeys(filterKeys);
        }
        else if (filterKeys.length == 4) {
            this.filterDataWithFourKeys(filterKeys)
        }
    }

    filterDataWithOneKey = (filterKeys) => {
        console.log("Get Products 3")
        const { productsData } = this.state;
        let data;
        for (var i = 0; i < filterKeys.length; i++) {
            if (filterKeys[i] == 'category') {
                data = productsData.filter((elem) => {
                    return elem.category[2] && filterSubCategoryName.includes(elem.category[2])
                })
            }
            else if (filterKeys[i] == 'color') {
                data = productsData.filter((elem) => {
                    return elem.color && filterColorFamily.includes(elem.color)
                })
            }
            else if (filterKeys[i] == 'brandName') {
                data = productsData.filter((elem) => {
                    return elem.brandName && filterBrand.includes(elem.brandName)
                })
            }
            
        }
        console.log(data, "Products data")
        if (data.length == 0) {
            this.setState({
                notFoundFilterData: true,
                filteredData: data,
                allData: false
            })
        }
        else {
            this.setState({
                notFoundFilterData: false,
                filteredData: data,
                allData: false
            })
        }
    }

    filterDataWithTwoKeys = (filterKeys) => {
        const { productsData } = this.state;
        let data1;
        let filteredData;


        for (var i = 0; i < filterKeys.length; i++) {
            if (i == 0) {
                if (filterKeys[i] == 'category') {

                    data1 = productsData.filter((elem) => {
                        return elem.category[2] && filterSubCategoryName.includes(elem.category[2])
                    })
                }
                else if (filterKeys[i] == 'color') { 
                    data1 = productsData.filter((elem) => {
                        return elem.color && filterColorFamily.includes(elem.color)
                    })
                }
                else if (filterKeys[i] == 'brandName') { 
                    data1 = productsData.filter((elem) => {
                        return elem.brandName && filterBrand.includes(elem.brandName)
                    })
                }
            }
            if (i == 1) {
                if (filterKeys[i] == 'category') {
                    filteredData = data1.filter((elem) => {
                        return elem.category[2] && filterSubCategoryName.includes(elem.category[2])
                    })
                }
                else if (filterKeys[i] == 'color') {
                    filteredData = data1.filter((elem) => {
                        return elem.color && filterColorFamily.includes(elem.color)
                    })
                }
                else if (filterKeys[i] == 'brandName') {
                    filteredData = data1.filter((elem) => {
                        return elem.brandName && filterBrand.includes(elem.brandName)
                    })
                }
            }
        }
        if (filteredData.length == 0) {
            this.setState({
                notFoundFilterData: true,
                filteredData: filteredData,
                allData: false
            })
        }
        else {
            this.setState({
                notFoundFilterData: false,
                filteredData: filteredData,
                allData: false

            })
        }
    }


    filterDataWithThreeKeys = (filterKeys) => {
        const { productsData } = this.state
        let data1;
        let data2;
        let filteredData;

        for (var i = 0; i < filterKeys.length; i++) {
            if (i == 0) {
                if (filterKeys[i] == 'category') {
                    data1 = productsData.filter((elem) => {
                        return elem.category[2] && filterSubCategoryName.includes(elem.category[2])
                    })
                }
                else if (filterKeys[i] == 'color') {
                    data1 = productsData.filter((elem) => {
                        return elem.color && filterColorFamily.includes(elem.color)
                    })
                }
                else if (filterKeys[i] == 'brandName') {
                    data1 = productsData.filter((elem) => {
                        return elem.brandName && filterBrand.includes(elem.brandName)
                    })
                }
            }
            if (i == 1) {
                if (filterKeys[i] == 'category') {
                    data2 = data1.filter((elem) => {
                        return elem.category[2] && filterSubCategoryName.includes(elem.category[2])
                    })
                }
                else if (filterKeys[i] == 'color') {
                    data2 = data1.filter((elem) => {
                        return elem.color && filterColorFamily.includes(elem.color)
                    })
                }
                else if (filterKeys[i] == 'brandName') {
                    data2 = data1.filter((elem) => {
                        return elem.brandName && filterBrand.includes(elem.brandName)
                    })
                }
            }
            if (i == 2) {
                if (filterKeys[i] == 'category') {
                    filteredData = data2.filter((elem) => {
                        return elem.category[2] && filterSubCategoryName.includes(elem.category[2])
                    })
                }
                else if (filterKeys[i] == 'color') {
                    filteredData = data2.filter((elem) => {
                        return elem.color && filterColorFamily.includes(elem.color)
                    })
                }
                else if (filterKeys[i] == 'brandName') {
                    filteredData = data2.filter((elem) => {
                        return elem.brandName && filterBrand.includes(elem.brandName)
                    })
                }
            }
        }
        if (filteredData.length == 0) {
            this.setState({
                notFoundFilterData: true,
                filteredData: filteredData,
                allData: false
            })
        }
        else {
            this.setState({
                notFoundFilterData: false,
                filteredData: filteredData,
                allData: false

            })
        }
    }

    removeValue=(param, value) =>{
        let arr = [];
        if (param == "category") {
            filterSubCategoryName = arr
        }
        else if (param == "color") {
            filterColorFamily = arr
        }
        else if (param == 'brandName') {
            let arr1 = [];
            for (var i = 0; i < filterBrand.length; i++) {
                if (filterBrand[i] != value) {
                    arr1.push(filterBrand[i])
                }
            }
            filterBrand = arr1;
        }
        this.filterKeysGet();
        if (filterSubCategoryName.length == 0 && filterColorFamily.length == 0 && filterBrand.length == 0) {
            this.setState({
                showRecord: true,
                notFoundFilterData: false,
                filteredData: [],
            })
        }
        else {
            this.filterKeysGet();
        }
    
    }

    showAllProducts = () => {
        filterSubCategoryName = [];
        filterColorFamily = [];
        filterBrand = [];
        this.setState({
            showRecord: true,
            notFoundFilterData: false,
            billboardFilterdData: [],
            statusValue: ''
        })
        this.filterKeysGet();
    
    }
    render() {
        const { TabPane } = Tabs;
        const antIcon = <Icon type="loading" style={{ fontSize: 120 }} spin />;
        const { productsData, featureData, featuredCategories, noRecordFound, recordFound, loader, searchBy, checkRadioBtn, categoryofProduct, filteredData, notFoundFilterData, showAllProducts, allData, colorsofProduct, brandofProducts } = this.state;

        console.log(productsData, " color family")
        return (
            <div>
                <div className="row">
                    <div className="col-xs-12 col-sm-3 col-md-3 col-lg-3">
                        <Tabs defaultActiveKey="1">
                            <TabPane tab={
                                <span><Icon type="apple" /> Filter </span>}
                                key="1">
                                <EcomFilter onChange={this.onChange} categoryofProduct={categoryofProduct} colorsofProduct={colorsofProduct} onChangeCheckBoxes={this.onChangeCheckBoxes} 
                                brandofProducts={brandofProducts}    onChangeBrand={this.onChangeBrand} />
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
                        {recordFound ?
                            <Eshopcard
                                productsData={productsData} colorsofProduct={colorsofProduct} brandofProducts={brandofProducts}
                                filteredData={filteredData} notFoundFilterData={notFoundFilterData} removeValue={this.removeValue}
                                allData={allData} />
                            : null}

                    </div>
                </div>
            </div>
        )
    }
}
export default EcommerceTAB;
