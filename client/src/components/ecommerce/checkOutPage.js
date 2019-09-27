import React, { Component } from 'react';
import Burgermenu from '../header/burgermenu';
import { InputNumber, Modal } from 'antd';
import { Link } from "react-router-dom";
// import CardDetail from '../../components/events/event_listing/CardDetail';
import { Elements, StripeProvider } from 'react-stripe-elements';
import CheckoutForm from './CheckoutForm';
import { HttpUtils } from "../../Services/HttpUtils";
import './checkOutpage.css';

class CheckOutPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cartValue: [],
            visible: false,
            cardData: '',
            stripe: null,
            email: '',
            amount: '',
            name: '',
            chechkOutObj: '',
            objectIds: '',
        }
    }
    componentDidMount() {
        const userData = JSON.parse(localStorage.getItem('user'));
        let addToCartData = JSON.parse(localStorage.getItem('addToCart'))
        this.setState({
            cartValue: addToCartData,
            email: userData.email,
            name: userData.name,
            userId: userData._id
        })
        this.capturedKeys();
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
        localStorage.setItem('addToCart', JSON.stringify(updateCartData));
        this.setState({
            cartValue: updateCartData,
        })
    }

    checkOutFunc = () => {
        const { name, email, amount, userId } = this.state;
        let addToCartData = JSON.parse(localStorage.getItem('addToCart'))
        let totalAmount = 0;
        let objIds = []
        for (var i = 0; i < addToCartData.length; i++) {
            let amount = Number(addToCartData[i].price);
            let count = Number(addToCartData[i].cartCount)
            totalAmount = (amount * count) + totalAmount;
            objIds.push(addToCartData[i].objectId)
        }
        let chechkOutObj = {
            name: name,
            email: email,
            amount: totalAmount,
            objectIds: objIds,
            userId: userId
        }
        this.setState({
            visible: true,
            amount: totalAmount,
            chechkOutObj: chechkOutObj
        })
    }

    handleCancel = (e) => {
        this.setState({ visible: false });
    }

    async capturedKeys() {
        let res = await HttpUtils.get('keys');
        console.log(res, 'res')
        if (window.Stripe) {
            this.setState({ stripe: window.Stripe(res.keys) });
        } else {
            document.querySelector('#stripe-js').addEventListener('load', () => {
                this.setState({ stripe: window.Stripe(res.keys) });
            });
        }
    }

    render() {
        const { cartValue, stripe, chechkOutObj } = this.state;
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
                                <button className='checkoutbtn ant-btn post_need col-md-2 col-sm-2 col-xs-12' onClick={this.checkOutFunc}>Checkout</button>
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
                    {this.state.visible &&
                        <Modal
                            title="Kindly enter credit cart detail"
                            visible={this.state.visible}
                            onOk={this.handleOk}
                            onCancel={this.handleCancel}
                            width="800px"
                        >
                            <div className="row">
                                <div className="col-md-12" style={{ textAlign: 'center' }}>
                                    <StripeProvider stripe={stripe}>
                                        <div className="example">
                                            <Elements style={{ boxSizing: 'border-box' }}>
                                                <CheckoutForm chechkOutObj={chechkOutObj} />
                                            </Elements>
                                        </div>
                                    </StripeProvider>
                                </div>
                            </div>
                        </Modal>
                    }
                    <div>

                    </div>
                </div>
            </div >
        )
    }
}
export default CheckOutPage;
