import React, { Component } from 'react';
import { Form, DatePicker, TimePicker, Button } from 'antd';
import { Input } from 'antd';
import moment from 'moment';
import Stripe from '../../form/mainpayment';

const { MonthPicker, RangePicker } = DatePicker;
const monthFormat = 'YYYY/MM';

class CardDetail extends Component{
  constructor(props) {
      super(props);
      this.state = {
          msg: ""
      }
  }

  componentDidMount(){
      this.props.onRef(this);
  }

  componentDidUpdate(prevProps, prevState){
    let fir = prevProps.data;
    let sec = this.props.data;
    if(fir !== sec){
        this.setState({receivedData: this.props.data});
    }
  }

  componentWillUnmount() {
     this.props.onRef(undefined)
  }

  creditCard = (e) => {
      this.setState({msg: ''})
      this.child.mainPayment()
  }

  changeHandler(data){
      this.props.onChange(data)
  }

  handleError = (msg) => {
      this.setState({msg})
      this.props.onError()
  }

  render(){
      return(
          <div className="panel-body">
              <div className="panel panel-default">
                  <div className="bold_c_text" style={{backgroundColor:'#37a99b',color:'white',padding:'8px',fontFamily:'Crimson Text, serif !important'}}>
                      <icon type="info-circle"/>
                      <span className="margin_font_location">Credit Card Details</span>
                  </div>
                  <div className="container" style={{width:'90%'}}>
                      <section>
                          <div className="row" style={{paddingBottom: '0px'}}>
                              <div className="col-md-12">
                                  <div className="col-md-7"></div>
                                  <div className="col-md-5">
                                      <span>Pay Using Credit Card.</span>
                                      <span style={{marginLeft:"10px"}}>
                                          <img src='../images/master visa.png' style={{height:"35px"}}/>
                                      </span>
                                  </div>
                              </div>
                          </div>
                          <div className="row" style={{paddingTop: '0px'}}>
                              <div className="col-md-12">
                                  <div className="col-md-8">
                                      <label style={{fontSize:"initial"}}> Credit Card Number* </label>
                                      <div style={{border: '1px solid gray', height: '35px', borderRadius: '5px', padding: '8px'}}>
                                          <Stripe 
                                              onRef={ref => (this.child = ref)} 
                                              onChange={this.changeHandler.bind(this)} 
                                              data={this.state.receivedData}
                                              onError={this.handleError}
                                          />
                                      </div>
                                  </div>
                                  <div className="col-md-4" ></div>
                              </div>
                              <div className="col-md-12">
                                  <div className="col-md-8">
                                      {this.state.msg.length > 0 && <p style={{marginTop: '20px', fontWeight: 'bold', color: 'red'}}>{this.state.msg}</p>}
                                  </div>
                              </div>
                          </div>
                      </section>
                  </div>
              </div>
          </div>
      )
  }
}

export default CardDetail;
