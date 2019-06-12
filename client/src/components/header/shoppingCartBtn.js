import React, { Component } from 'react';
import './shoppingCartStyle.css';


class CartButton extends Component {
    render() {
        return (
            <div>
                <div  className="shoppingCart fa fa-shopping-cart" ></div>
                {/* <div class="icon-cart" style="float: left">
                    <div class="cart-line-1" style="background-color: #E5E9EA"></div>
                    <div class="cart-line-2" style="background-color: #E5E9EA"></div>
                    <div class="cart-line-3" style="background-color: #E5E9EA"></div>
                    <div class="cart-wheel" style="background-color: #E5E9EA"></div>
                </div> */}
                {/* <i class="far fa-shopping-cart"></i> */}
            </div>
        )
    }
}
export default CartButton;
