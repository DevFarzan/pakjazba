import React, { Component } from 'react';
import Burgermenu from '../header/burgermenu';
import { InputNumber } from 'antd';
import { Link } from "react-router-dom";

import './checkOutpage.css'

class CheckOutPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cartValue: []
        }
    }
    componentDidMount() {
        let addToCartData = JSON.parse(localStorage.getItem('addToCart'))
        this.setState({
            cartValue: addToCartData
        })
    }

    onChange = (data, cartCount) => {
        let addToCartData = JSON.parse(localStorage.getItem('addToCart'))
        let updateCartData = [];
        for (var i = 0; i < addToCartData.length; i++) {
            if (addToCartData[i].objectId == data.objectId) {
                let updateObj = {};
                updateObj.cartCount = cartCount;
                updateObj.description = addToCartData[i].description;
                updateObj.images = addToCartData[i].images;
                updateObj.objectId = addToCartData[i].objectId;
                updateObj.price = addToCartData[i].price;
                updateObj.productName = addToCartData[i].productName;
                updateObj.profileId = addToCartData[i].profileId;
                updateObj.user_Id = addToCartData[i].user_Id;
                updateCartData.push(updateObj)
            }
            else {
                updateCartData.push(addToCartData[i])
            }
        }
        console.log(updateCartData, 'updateCartData')
        localStorage.setItem('addToCart', JSON.stringify(updateCartData));
        this.setState({
            cartValue: updateCartData,
        })
    }
    removeCartData = (data, index) => {
        let addToCartData = JSON.parse(localStorage.getItem('addToCart'))
        let updateCartData = [];
        for (var i = 0; i < addToCartData.length; i++) {
            if (addToCartData[index] == addToCartData[i]) {
            }
            else {
                updateCartData.push(addToCartData[i])
            }
        }
        console.log(updateCartData, 'updateCartData')
        localStorage.setItem('addToCart', JSON.stringify(updateCartData));
        this.setState({
            cartValue: updateCartData,
        })
    }

    render() {
        const { cartValue } = this.state;
        console.log(cartValue, 'cartValue')
        return (
            <div >
                <Burgermenu />
                <div >
                    <div className="" style={{ textAlign: "center", marginTop: "25px" }}>
                        <h1 style={{ fontFamily: 'Crimson Text, serif', fontWeight: "bold", color: "white" }}></h1>
                        <div className="div">
                            <h2 className='cartHeader'>Check Out Product</h2>
                            <div className='row'>
                                <div className='cart col-md-5 col-sm-5 col-xs-12'></div>
                                <button className='checkoutbtn ant-btn post_need col-md-2 col-sm-2 col-xs-12'>Checkout</button>
                                <Link rel="noopener noreferrer" to={`/market_ecommerceMarket`} style={{ color: 'black', fontSize: '14px' }}>
                                    {/* <CartButton cartCount={this.props.cartCount} /> */}
                                    <button className='checkoutbtn ant-btn post_need col-md-2 col-sm-2 col-xs-12'>Browse more</button>
                                </Link>
                                <div className='col-md-3 col-sm-3 col-xs-12'></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='container'>
                    {cartValue.map((elem, key) => {
                        return (
                            <div className='panel-body'>
                                <div className='row'>
                                    <div className="col-md-3 col-sm-3 col-xs-12">
                                        <img className='imgClass' src={elem.images[0]} />
                                    </div>
                                    <div className="col-md-3 col-sm-3 col-xs-12">
                                        <ul className='cartDetail'>
                                            <li>Product Name : {elem.productName}</li>
                                            <li style={{ marginTop: "15px" }}>Quantity : {elem.cartCount}</li>
                                            <li style={{ marginTop: "15px" }}>Description : {elem.description}</li>
                                        </ul>
                                    </div>
                                    <div className="col-md-6 col-sm-6 col-xs-12 cartPrice text-right">
                                        <div className="col-md-4 col-sm-4 col-xs-12">$ {elem.price * elem.cartCount}</div>
                                        <div className="col-md-4 col-sm-4 col-xs-12">
                                            <span> <InputNumber min={1} max={10} defaultValue={elem.cartCount} onChange={this.onChange.bind(this, elem)} /></span>
                                        </div>
                                        <div className='col-md-4 col-sm-4 col-xs-12'>
                                            <button type="button" class="btn btn-link btn-xs" onClick={this.removeCartData.bind(this, elem, key)}>
                                                <span class="glyphicon glyphicon-trash"> </span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                    {/* <div className="col-md-3 col-sm-3 col-xs-12">
                                <img className='' src='http://placekitten.com/200/126' />
                            </div>
                            <div className="col-md-3 col-sm-3 col-xs-12">
                                <ul className='cartDetail'>
                                    <li>Product Name</li>
                                    <li>Quantity</li>
                                    <li>Description</li>
                                </ul>
                            </div>
                            <div className="col-md-6 col-sm-6 col-xs-12 cartPrice text-right">
                                <div className="col-md-4 col-sm-4 col-xs-12">$ 90</div>
                                <div className="col-md-4 col-sm-4 col-xs-12">
                                    <span> <InputNumber min={1} max={10} defaultValue={0} onChange={this.onChange} /></span>
                                </div>
                                <div className='col-md-4 col-sm-4 col-xs-12'>
                                    <button type="button" class="btn btn-link btn-xs">
                                        <span class="glyphicon glyphicon-trash"> </span>
                                    </button>
                                </div>
                            </div> */}
                    {/* <div className='panel-body'>
                        <div className='row'>
                            <div className="col-md-3 col-sm-3 col-xs-12">
                                <img className='' src='http://placekitten.com/200/126' />
                            </div>
                            <div className="col-md-3 col-sm-3 col-xs-12">
                                <ul className='cartDetail'>
                                    <li>Product Name</li>
                                    <li>Quantity</li>
                                    <li>Description</li>
                                </ul>
                            </div>
                            <div className="col-md-6 col-sm-6 col-xs-12 cartPrice text-right">
                                <div className="col-md-4 col-sm-4 col-xs-12">$ 90</div>
                                <div className="col-md-4 col-sm-4 col-xs-12">
                                    <span> <InputNumber min={1} max={10} defaultValue={0} onChange={this.onChange} /></span>
                                </div>
                                <div className='col-md-4 col-sm-4 col-xs-12'>
                                    <button type="button" class="btn btn-link btn-xs">
                                        <span class="glyphicon glyphicon-trash"> </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div >
        )
    }
}
export default CheckOutPage;
