import React, { Component } from 'react';
import Burgermenu from '../header/burgermenu';
import './checkOutpage.css'

class CheckOutPage extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="">
                <Burgermenu />
                {/* <br />
                <br />
                <br />
                <br />
                <br />
                <br /> */}
                <div className="col-md-12 col-sm-12 col-xs-12" style={{ textAlign: "center", marginTop: "25px" }}>
                    <div className="">
                        <h1 style={{ fontFamily: 'Crimson Text, serif', fontWeight: "bold", color: "white" }}></h1>
                        <br />
                        <br />
                        <br />
                        <h2 className='cartHeader'>Check Out Product</h2>
                        <div className='cart'>Cart()</div>
                        <button className='checkoutbtn ant-btn post_need'>Checkout</button>
                        <button className='checkoutbtn ant-btn post_need'>Browse more</button>
                    </div>
                    <div className='product'>
                        <img className='cartDetailImg' src='http://placekitten.com/200/126' />
                        <div className='cartDetail'>
                            <span className='productName'>Product Name</span>
                            <span className='date'>Date</span>
                            <span className='removeProduct'>Remove product</span>
                        </div>
                        <div className='price'>$ 90</div>
                    </div>
                </div>
            </div >
        )
    }
}
export default CheckOutPage;
