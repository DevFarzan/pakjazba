import React, { Component } from 'react';
import { Checkbox, InputNumber, Icon, Tooltip } from 'antd';
import './OrderSummarycard.css';

class MapOrderCard extends Component{

    render(){
        const { booked } = this.props;
        let totalPrice = 0;
        booked.map((elem) => {
            totalPrice += elem.pay
        });
        
        let webSiteRate = totalPrice > 0 ? (1*100/totalPrice).toFixed(2) : 0.00,
        stripeRate = totalPrice > 0 ? (2.9*100/totalPrice).toFixed(2) : 0.00,
        total = (+totalPrice + +webSiteRate + +stripeRate).toFixed(2);

        return(
            <span>
                {booked.length == 0 && <div style={{marginTop: '50px'}}>
                    <h3><b>You havn't select any seat yet.</b></h3>
                </div>}
                {booked.length > 0 && <div className="container" style={{width:"100%"}}>
                    <div className="summarycard">
                        <div className="row" style={{marginTop:"0px"}}>
                            <div className="col-md-12">
                                <h3><b>Order Summary</b></h3>
                                <hr className="ehr"/>
                            </div>                            
                            {booked.map((elem) => {
                                return (
                                    <div className="row">
                                        <div className="col-md-8 col-xs-8">
                                            <span className="orederform">{elem.str}</span>
                                        </div>
                                        <div className="col-md-4 col-xs-4">
                                            <span style={{marginLeft:'7px'}}>{elem.pay}</span>                                            
                                        </div>
                                    </div>
                                )
                            })  }                          
                            
                            <hr className="ohr"/>
                            <div className="row" style={{marginTop:"-20px", marginLeft:"10px"}}>
                                <div className="col-md-6 col-xs-6">
                                    <h4>Total Amount </h4>
                                </div>
                                <div className="col-md-6 col-xs-6" style={{textAlign:"center"}}>
                                    <span>{totalPrice}</span>
                                </div>
                            </div>
                            <div className="row" style={{marginTop:"-30px", marginLeft:"10px"}}>
                                <div className="col-md-6 col-xs-6">
                                    <h4>Pak Jazba Fee </h4>
                                </div>
                                <div className="col-md-6 col-xs-6" style={{textAlign:"center"}}>
                                    <span>{webSiteRate}</span>
                                </div>
                            </div>
                            <div className="row" style={{marginTop:"-30px", marginLeft:"10px"}}>
                                <div className="col-md-6 col-xs-6">
                                    <h4>Stripe </h4>
                                </div>
                                <div className="col-md-6 col-xs-6" style={{textAlign:"center"}}>
                                    <span>{stripeRate}</span>
                                </div>
                            </div>
                            <hr className="ohr" style={{marginTop:"-10px"}}/>
                            <div className="row" style={{marginTop:"-20px", marginLeft:"10px"}}>
                                <div className="col-md-6 col-xs-6">
                                    <h4>Sub  Total </h4>
                                </div>
                                <div className="col-md-6 col-xs-6" style={{textAlign:"center"}}>
                                    <span>{total}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>}
            </span>
        )
    }
}

export default MapOrderCard;
