import React, {Component} from 'react';
import {Elements, StripeProvider} from 'react-stripe-elements';
import CheckoutForm from './CheckoutForm';

class MainPayment extends Component {
  render() {
    return (
      <StripeProvider apiKey="pk_test_Wz0od7toLgQyBf7vK5G5xPRG">
        <div className="example">
          <h1>React Stripe Elements Example</h1>
          <Elements>
            <CheckoutForm />
          </Elements>
        </div>
      </StripeProvider>
    );
  }
}

export default MainPayment;