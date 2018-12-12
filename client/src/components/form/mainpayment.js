import React, {Component} from 'react';
import {Elements, StripeProvider} from 'react-stripe-elements';
import CheckoutForm from './CheckoutForm';
import {HttpUtils} from "../../Services/HttpUtils";

class MainPayment extends Component {
  constructor(props){
    super(props)
    this.state = {
      PUBLISHABLE :'strip'
    }
  }
  componentDidMount(){
      this.capturedKeys()
    }
    async capturedKeys (){
      let res = await HttpUtils.get('keys')
        this.setState({
          PUBLISHABLE:res.keys
        })
    } 


  render() {
    const { PUBLISHABLE } = this.state;
    console.log(PUBLISHABLE,'ppppppuuubbbbliiiccc')
    return (
      <StripeProvider apiKey= {PUBLISHABLE}>
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