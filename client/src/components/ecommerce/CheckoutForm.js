import React, { Component } from 'react';
import { CardElement, injectStripe } from 'react-stripe-elements';
import { HttpUtils } from "../../Services/HttpUtils";
import './checkOutpage.css';

class CheckoutForm extends Component {
    constructor(props) {
        super(props);
        this.submit = this.submit.bind(this);
    }

    async submit() {
        const { chechkOutObj } = this.props;
        console.log(chechkOutObj, 'receivedData')
        let { token, error } = await this.props.stripe.createToken({ name: chechkOutObj.firstName });
        console.log(token, 'token')

        // if (error === undefined || token) {
        //     let response = await HttpUtils.post("charge", {
        //         method: "POST",
        //         headers: { "Content-Type": "text/plain" },
        //         body: {
        //             token: token.id,
        //             email: receivedData.email,
        //             amount: receivedData.total,
        //             name: receivedData.firstName
        //         }
        //     });
        // } else {
        //     this.props.onError(error.message);
        // }
    }

    render() {
        return (
            <div className="checkout">
                <div className="panel-body">
                    <div className="panel panel-default">
                        <div className="bold_c_text" style={{ backgroundColor: '#37a99b', color: 'white', padding: '8px', fontFamily: 'Crimson Text, serif !important' }}>
                            <icon type="info-circle" />
                            <span className="margin_font_location">Credit Card Details</span>
                        </div>
                        <div className="container" style={{ width: '90%' }}>
                            <section>
                                <div className="row" style={{ paddingBottom: '0px' }}>
                                    <div className="col-md-12">
                                        <div className="col-md-7"></div>
                                        <div className="col-md-5">
                                            <span>Pay Using Credit Card.</span>
                                            <span style={{ marginLeft: "10px" }}>
                                                <img src='../images/master visa.png' style={{ height: "35px" }} />
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="row" style={{ paddingTop: '0px' }}>
                                    <div className="col-md-12">
                                        <div className="col-md-8">
                                            <label style={{ fontSize: "initial" }}> Credit Card Number* </label>
                                            <div style={{ border: '1px solid gray', height: '35px', borderRadius: '5px', padding: '8px' }}>
                                                <CardElement />
                                            </div>
                                        </div>
                                        <div className="col-md-4" ></div>
                                    </div>
                                    {/* <div className="col-md-12">
                                        <div className="col-md-8">
                                            <p style={{ marginTop: '20px', fontWeight: 'bold', color: 'red' }}>{this.state.msg}</p>
                                        </div>
                                    </div> */}
                                </div>
                            </section>
                        </div>
                        <button 
                        className='checkoutbtn ant-btn post_need' 
                        onClick={this.submit}>Purchase</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default injectStripe(CheckoutForm);