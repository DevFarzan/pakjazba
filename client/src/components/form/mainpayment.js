import React, {Component} from 'react';
import {Elements, StripeProvider} from 'react-stripe-elements';
import CheckoutForm from './CheckoutForm';
import {HttpUtils} from "../../Services/HttpUtils";

class MainPayment extends Component {
  constructor(props){
    super(props)
    this.state = {
      publickey :'strip'
    }
  }
  componentDidMount(){
      this.capturedKeys()
    }
    async capturedKeys (){
      let res = await HttpUtils.get('keys')
        this.setState({
          publickey:res.keys
        })
    } 


  render() {
    const { publickey } = this.state;
    //console.log(publickey,'ppppppuuubbbbliiiccc')
    return (
      <StripeProvider apiKey={publickey}>
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