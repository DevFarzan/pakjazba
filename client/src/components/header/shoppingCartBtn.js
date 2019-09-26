import React, { Component } from 'react';
import './shoppingCartStyle.css';

class CartButton extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <div className="shoppingCart fa fa-shopping-cart">
                    {this.props.cartCount != undefined ?
                        <div className="badge shoppingBadges">{this.props.cartCount}</div>
                        :
                        <div className="badge shoppingBadges">0</div>
                    }
                </div>
            </div>
        )
    }
}
export default CartButton;
