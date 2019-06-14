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
                <div >
                    <div className="" style={{ textAlign: "center", marginTop: "25px" }}>
                        <h1 style={{ fontFamily: 'Crimson Text, serif', fontWeight: "bold", color: "white" }}></h1>
                        <div className="div">
                            <h2 className='cartHeader'>Check Out Product</h2>
                            <div className='row'>
                                <div className='cart col-md-5 col-sm-5 col-xs-12'>Cart()</div>
                                <button className='checkoutbtn ant-btn post_need col-md-2 col-sm-2 col-xs-12'>Checkout</button>
                                <button className='checkoutbtn ant-btn post_need col-md-2 col-sm-2 col-xs-12'>Browse more</button>
                                <div className='col-md-3 col-sm-3 col-xs-12'></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='container'>
                    <div className='panel-body'>
                        <div className='row'>
                            <div className="col-md-2 col-sm-2 col-xs-12">
                                <img className='' src='http://placekitten.com/200/126' />
                            </div>
                            <div className="col-md-4 col-sm-4 col-xs-12">
                                <ul className='cartDetail'>
                                    <li>Product Name</li>
                                    <li>Quanitity</li>
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
                    </div>
                    <div className='panel-body'>
                        <div className='row'>
                            <div className="col-md-2 col-sm-2 col-xs-12">
                                <img className='' src='http://placekitten.com/200/126' />
                            </div>
                            <div className="col-md-4 col-sm-4 col-xs-12">
                                <ul className='cartDetail'>
                                    <li>Product Name</li>
                                    <li>Quanitity</li>
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
                    </div>
                </div>
            </div >
        )
    }
}
export default CheckOutPage;
