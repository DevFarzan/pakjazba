import React, { Component } from 'react';
import { Tabs, Icon } from 'antd';
import { HttpUtils } from "../../Services/HttpUtils";
import Eshopcard from '../ecommerce/EcomShopcard';
import BuyCategory from '../buy_sell/buyfirstfold';
import EcomFilter from '../ecommerce/ecommerce-filter';

let filterCategoryName = [];
let filterColorFamily = [];
let filterBrand = [];

class EcommerceTAB extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: false,
            allProducts: [],
            filteredData: [],
            notFoundFilterData: false,
            showRecord: true,

            categoryProduct: [],
            colors: [],
            brands: [],

            categoryofProduct: [],
            colorsValues: [],
            brandValues: [],
        }
    }

    async componentDidMount() {
        let data = this.props.dataFromHome;
        let res = await HttpUtils.get('getecommercedata');
        if (res) {
            if (res.code == 200) {
                this.setState({
                    allProducts: res.content,
                })
            }
        }
        if (data) {
            filterCategoryName = data.filterCategoryEcom
            filterColorFamily = data.colorEcom
            filterBrand = data.brandEcom
            this.setState({
                categoryofProduct: data.dropdownCategoryEcom,
                colorsValues: data.colorEcom,
                brandValues: data.brandEcom
            })
            this.filterKeysGet()
        }
    }


    // /*category filteration*/

    onChange = (value) => {
        let categoryFilterValue = [];
        categoryFilterValue.push(value[2]);
        filterCategoryName = categoryFilterValue
        this.setState({
            categoryofProduct: value,
        })
        this.filterKeysGet()
    }

    /*Color Filteration*/
    onChangeCheckBoxes = (value) => {
        this.setState({
            colorsValues: value
        })
        filterColorFamily = value;
        this.filterKeysGet();
    }

    /*Brand Filteration*/

    onChangeBrand = (value) => {
        this.setState({
            brandValues: value
        })

        filterBrand = value;
        this.filterKeysGet();
    }


    filterKeysGet = () => {
        let categoryProduct = [];
        let colorsofProduct = [];
        let brandofProducts = [];

        let filterKeys = [];

        if (filterCategoryName.length > 0) {
            filterKeys.push('category')
        }
        if (filterColorFamily.length > 0) {
            filterKeys.push('color')
        }
        if (filterBrand.length > 0) {
            filterKeys.push('brandName')
        }
        for (var i = 0; i < filterCategoryName.length; i++) {
            categoryProduct.push(filterCategoryName[i])
        }
        for (var i = 0; i < filterColorFamily.length; i++) {
            colorsofProduct.push(filterColorFamily[i])
        }
        for (var i = 0; i < filterBrand.length; i++) {
            brandofProducts.push(filterBrand[i])
        }

        this.setState({
            categoryProduct: categoryProduct,
            colors: colorsofProduct,
            brands: brandofProducts,
        })

        this.filterProductsData(filterKeys)
    }

    filterProductsData = (filterKeys) => {
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
        const { allProducts } = this.state;
        let data;
        for (var i = 0; i < filterKeys.length; i++) {
            if (filterKeys[i] == 'category') {
                data = allProducts.filter((elem) => {
                    return elem.category[2] && filterCategoryName.includes(elem.category[2])
                })
            }
            else if (filterKeys[i] == 'color') {
                data = allProducts.filter((elem) => {
                    return elem.color && filterColorFamily.includes(elem.color)
                })
            }
            else if (filterKeys[i] == 'brandName') {
                data = allProducts.filter((elem) => {
                    return elem.brandName && filterBrand.includes(elem.brandName)
                })
            }

        }
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
        const { allProducts } = this.state;
        let data1;
        let filteredData;


        for (var i = 0; i < filterKeys.length; i++) {
            if (i == 0) {
                if (filterKeys[i] == 'category') {

                    data1 = allProducts.filter((elem) => {
                        return elem.category[2] && filterCategoryName.includes(elem.category[2])
                    })
                }
                else if (filterKeys[i] == 'color') {
                    data1 = allProducts.filter((elem) => {
                        return elem.color && filterColorFamily.includes(elem.color)
                    })
                }
                else if (filterKeys[i] == 'brandName') {
                    data1 = allProducts.filter((elem) => {
                        return elem.brandName && filterBrand.includes(elem.brandName)
                    })
                }
            }
            if (i == 1) {
                if (filterKeys[i] == 'category') {
                    filteredData = data1.filter((elem) => {
                        return elem.category[2] && filterCategoryName.includes(elem.category[2])
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
        const { allProducts } = this.state
        let data1;
        let data2;
        let filteredData;

        for (var i = 0; i < filterKeys.length; i++) {
            if (i == 0) {
                if (filterKeys[i] == 'category') {
                    data1 = allProducts.filter((elem) => {
                        return elem.category[2] && filterCategoryName.includes(elem.category[2])
                    })
                }
                else if (filterKeys[i] == 'color') {
                    data1 = allProducts.filter((elem) => {
                        return elem.color && filterColorFamily.includes(elem.color)
                    })
                }
                else if (filterKeys[i] == 'brandName') {
                    data1 = allProducts.filter((elem) => {
                        return elem.brandName && filterBrand.includes(elem.brandName)
                    })
                }
            }
            if (i == 1) {
                if (filterKeys[i] == 'category') {
                    data2 = data1.filter((elem) => {
                        return elem.category[2] && filterCategoryName.includes(elem.category[2])
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
                        return elem.category[2] && filterCategoryName.includes(elem.category[2])
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

    removeValue = (param, value) => {

        let arr = [];
        if (param == "category") {
            filterCategoryName = arr
            this.setState({
                categoryofProduct: arr
            })
        }
        else if (param == "color") {
            let arr1 = [];
            for (var i = 0; i < filterColorFamily.length; i++) {
                if (filterColorFamily[i] != value) {
                    arr1.push(filterColorFamily[i])
                }
            }
            filterColorFamily = arr1
            this.setState({
                colorsValues: arr1
            })
        }
        else if (param == 'brandName') {
            let arr1 = [];
            for (var i = 0; i < filterBrand.length; i++) {
                if (filterBrand[i] != value) {
                    arr1.push(filterBrand[i])
                }
            }
            this.setState({
                brandValues: arr1
            })
            filterBrand = arr1;
        }
        this.filterKeysGet();
        if (filterCategoryName.length == 0 && filterColorFamily.length == 0 && filterBrand.length == 0) {
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
        let arr = []
        filterCategoryName = [];
        filterColorFamily = [];
        filterBrand = [];
        this.setState({
            showRecord: true,
            notFoundFilterData: false,
            categoryofProduct: arr,
            colorsValues: arr,
            brandValues: arr
        })
        this.filterKeysGet();
    }




    mainCategoryFilter = (param) => {
        const { allProducts, filteredData } = this.state;
        let rangeValues = [];

        if (filteredData.length > 0) {
            for (var i = 0; i < filteredData.length; i++) {
                if (filteredData[i].category[2].toLowerCase() == param.toLowerCase()) {
                    rangeValues.push(filteredData[i])
                }
            }
            if (rangeValues.length == 0) {
                this.setState({
                    notFoundFilterData: true,
                    filteredData: rangeValues,
                    showRecord: false

                })
            }
            else {
                this.setState({
                    notFoundFilterData: false,
                    filteredData: rangeValues,
                    showRecord: false
                })
            }
        }
        else {
            for (var i = 0; i < allProducts.length; i++) {
                if (allProducts[i].category[2].toLowerCase() == param.toLowerCase()) {
                    rangeValues.push(allProducts[i])
                }
            }

            if (rangeValues.length == 0) {
                this.setState({
                    notFoundFilterData: true,
                    filteredData: rangeValues,
                    showRecord: false
                })
            }
            else {
                this.setState({
                    notFoundFilterData: false,
                    filteredData: rangeValues,
                    showRecord: false
                })
            }
        }
    }

    filterRoomWithMinToMax = (minValue, maxValue) => {
        const { allProducts, filteredData } = this.state;

        let rangeValues = [];
        if (filteredData.length > 0) {
            for (var i = 0; i < filteredData.length; i++) {
                if (filteredData[i].price >= minValue && filteredData[i].price <= maxValue) {
                    rangeValues.push(filteredData[i])
                }
            }

            if (rangeValues.length == 0) {
                this.setState({
                    notFoundFilterData: true,
                    filteredData: rangeValues,
                    showRecord: false
                })
            }
            else {
                this.setState({
                    notFoundFilterData: false,
                    filteredData: rangeValues,
                    showRecord: false
                })
            }
        }
        else {
            for (var i = 0; i < allProducts.length; i++) {
                if (allProducts[i].price >= minValue && allProducts[i].price <= maxValue) {
                    rangeValues.push(allProducts[i])
                }
            }
            if (rangeValues.length == 0) {
                this.setState({
                    notFoundFilterData: true,
                    filteredData: rangeValues,
                    showRecord: false
                })
            }
            else {
                this.setState({
                    notFoundFilterData: false,
                    filteredData: rangeValues,
                    showRecord: false
                })
            }
        }
    }


    render() {
        const { TabPane } = Tabs;
        const { allProducts, filteredData, notFoundFilterData, showRecord, categoryProduct, colors, brands,
            categoryofProduct, colorsValues, brandValues } = this.state;
        return (
            <div>
                <div className="row">
                    <div className="col-xs-12 col-sm-3 col-md-3 col-lg-3">
                        <Tabs defaultActiveKey="1">
                            <TabPane tab={
                                <span><Icon type="filter" /> Filter </span>}
                                key="1">
                                <EcomFilter categoryofProduct={categoryofProduct} colorsValues={colorsValues} brandValues={brandValues}
                                    onChange={this.onChange} onChangeCheckBoxes={this.onChangeCheckBoxes} onChangeBrand={this.onChangeBrand}
                                    filterRoomWithMinToMax={this.filterRoomWithMinToMax}
                                />
                            </TabPane>
                            <TabPane tab={
                                <span><i class="fa fa-list-alt" aria-hidden="true"></i> Category </span>}
                                key="2">
                                <BuyCategory mainCategoryFilter={this.mainCategoryFilter} />
                            </TabPane>
                        </Tabs>
                    </div>
                    <div className="col-xs-12 col-sm-9 col-md-9 col-lg-9">
                        {/* {noRecordFound && <span style={{ textAlign: "center" }}><h1>Not found....</h1></span>} */}
                        {/* {noRecordFound && <span style={{ textAlign: "center" }}><h5>you can find your search by type</h5></span>}
                        {noRecordFound && <div className="col-md-12" style={{ textAlign: "center" }}><button type="button" className="btn2 btn2-success" onClick={this.onAddMore}>Go Back</button></div>}
                        {recordFound ?
                           
                            : null} */}
                        <Eshopcard
                            categoryProduct={categoryProduct} colors={colors} brands={brands}
                            allProducts={allProducts} filteredData={filteredData} notFoundFilterData={notFoundFilterData} showRecord={showRecord}
                            removeValue={this.removeValue} showAllProducts={this.showAllProducts}
                        />

                    </div>
                </div>
            </div>
        )
    }
}
export default EcommerceTAB;
