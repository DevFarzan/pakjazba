import React, { Component } from 'react';
import Burgermenu from '../header/burgermenu';
import { InputNumber } from 'antd';
import './checkOutpage.css'

class CheckOutPage extends Component {
    constructor(props) {
        super(props)
    }


    onChange = (value) => {
        console.log('changed', value);
    }

    render() {
        return (
            <div className="">
                <Burgermenu />
                <div className='row'>
                    <div className="" style={{ textAlign: "center", marginTop: "25px" }}>
                        <h1 style={{ fontFamily: 'Crimson Text, serif', fontWeight: "bold", color: "white" }}></h1>
                        <div className="div">
                            <h2 className='cartHeader'>Check Out Product</h2>
                            <div className='cart'>Cart()</div>
                            <button className='checkoutbtn ant-btn post_need'>Checkout</button>
                            <button className='checkoutbtn ant-btn post_need'>Browse more</button>
                        </div>
                    </div>
                </div>
                <div className='container'>
                    <div className='panel-body'>
                        <div className='row'>
                            <div className="col-md-3 col-sm-3 col-xs-12">
                                <img className='' src='http://placekitten.com/200/126' />
                            </div>
                            <div className="col-md-6 col-sm-3 col-xs-12">
                                <ul className='cartDetail'>
                                    <li>Product Name</li>
                                    <li>Date</li>
                                    <li>Remove Product</li>
                                </ul>
                            </div>
                            <div className="col-md-3 cartPrice">
                                adsadsad
                    </div>
                            <div col-md-3>
                                <span> <InputNumber min={1} max={10} defaultValue={0} onChange={this.onChange} /></span>
                            </div>
                        </div>
                    </div>
                    <div className='panel-body'>
                        <div className='row'>
                            <div className="col-md-3 col-sm-3 col-xs-12">
                                <img className='' src='http://placekitten.com/200/126' />
                            </div>
                            <div className="col-md-6 col-sm-3 col-xs-12">
                                <ul className='cartDetail'>
                                    <li>Product Name</li>
                                    <li>Date</li>
                                    <li>Remove Product</li>
                                </ul>
                            </div>
                            <div className="col-md-3 cartPrice">
                                adsadsad
                    </div>
                            <div col-md-3>
                                <span> <InputNumber min={1} max={10} defaultValue={0} onChange={this.onChange} /></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div >

        )
    }
}
export default CheckOutPage;
