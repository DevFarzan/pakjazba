import React, { Component } from 'react';
import './dateCard.css'
import { Checkbox, InputNumber } from 'antd';
import moment from 'moment';

function onChange(e) {
  console.log(`checked = ${e.target.checked}`);
}

function onChange(value) {
  console.log('changed', value);
}

class DateCard extends Component{
  constructor(props){
      super(props);
      this.state = {
          eBird : 1,
          nTicket: 1
      }
  }
  render(){
    const { eBird, nTicket } = this.state;
    const { data } = this.props;
    let from = '';
    let to = '';
    let earlyBird = data && data.earlyBird;
    let normalTicket = data && data.normalTicket;
    
    let eBirdPrice = '';
    let nTicketPrice = '';

    if(data){
      console.log(data.earlyBird, '1111111111')
      console.log(data.normalTicket, '2222222222')
        eBirdPrice = data.earlyBirdPrice * eBird ;
        nTicketPrice = data.normalTicketPrice * nTicket ;
    }

    let totalPrice = eBirdPrice + nTicketPrice;

    if(data.dateRange !== undefined && data.dateRange[0] !== undefined){
        console.log(data.dateRange[0], 'dataaaaaaaaaaaaaaa')
        from = moment(data.dateRange[0].from, 'YYYY-MM-DD').format("LL");
        to = moment(data.dateRange[0].to, 'YYYY-MM-DD').format("LL");
    }
    return(
      <div>
      <div className="row" style={{padding:"0px"}}>
          <div className="col-lg-12 col-md-12 col-sm-12 " >
              {/*Start 3rd tile */}
              <div className="ecardoutset">
                  <div className="card-body space" style={{padding: "17px"}}>
                      <div className="row">
                          <div className="col-md-12">
                              <h3><b>Date</b></h3>
                              <hr className="ehr"/>
                          </div>
                      </div>
                    <section className="" style={{marginLeft:"-20px", marginTop:"-30px"}}>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="col-md-3 col-sm-4 col-xs-12">
                                    <h4><b>START:</b></h4>
                                </div>
                                <div className="col-md-5 col-sm-4 col-xs-12">
                                  <span>
                                  <p className="font-style"><b>{from}</b></p>
                                  </span>
                                </div>
                                <div className="col-md-4 col-sm-4 col-xs-12">
                                  <h4><b>{data && data.openingTime}</b></h4>
                                </div>
                            </div>
                        </div>
                        <div className="row" style={{marginTop:"-40px"}}>
                            <div className="col-md-12">
                                <div className="col-md-3 col-sm-4 col-xs-12">
                                    <h4><b>END:</b></h4>
                                </div>
                                <div className="col-md-5 col-sm-4 col-xs-12">
                                  <span>
                                  <p className="font-style"><b>{to}</b></p>
                                  </span>
                                </div>
                                <div className="col-md-4 col-sm-4 col-xs-12 ">
                                  <h4><b>{data.closingTime}</b></h4>
                                </div>
                            </div>
                        </div>
                    </section>
                      <div className="row" style={{marginTop:"-30px"}}>
                          <div className="col-md-12">
                              <h3><b>Location</b></h3>
                              <hr className="ehr"/>
                          </div>
                      </div>
                    <section className="" style={{marginTop:"-30px"}}>
                      <div className="row" style={{marginTop:"-40px"}}>
                          <div className="col-md-12">
                              <span>
                                  <p className="font-style" style={{fontSize:"15px", marginLeft:"5px"}}>{data && data.address}</p>
                              </span>
                          </div>
                      </div>
                    </section>
                    <div className="row" style={{marginTop:"-30px"}}>
                        <div className="col-md-12">
                            <h3><b>Charges</b></h3>
                            <hr className="ehr"/>
                        </div>
                        <div className="col-md-12">
                            <h5><b>Available Early Bird Tickets :  {" " + data && data.earlyBirdAvailableTickets}</b></h5>
                        </div>
                      <div className="row">
                        <div className="col-md-6 col-xs-6">
                           <Checkbox checked={earlyBird}></Checkbox>
                           <span>Early Bird</span>
                        </div>
                        <div className="col-md-6 col-xs-6">
                              <InputNumber min={0} max={data && data.earlyBirdAvailableTickets} defaultValue={1} disabled={!earlyBird} onChange={(e) => {this.setState({eBird: e})}} style={{width:"50px", height:"23px"}} />
                              <span style={{marginLeft:'7px'}}>{'$' + eBirdPrice}</span>
                        </div>
                      </div>
                      <div className="col-md-12">
                            <h5><b>Available Normal Bird Tickets :  {" " + data && data.normalTicketAvailableTickets}</b></h5>
                        </div>
                      <div className="row">
                        <div className="col-md-6 col-xs-6">
                           <Checkbox checked={normalTicket}></Checkbox>
                            <span>Normal Ticket</span>
                        </div>
                        <div className="col-md-6 col-xs-6">
                              <InputNumber min={0} max={data && data.normalTicketAvailableTickets} defaultValue={1} disabled={!normalTicket} onChange={(e) => {this.setState({nTicket: e})}} style={{width:"50px", height:"23px"}} />
                              <span style={{marginLeft:'7px'}}>{'$' + nTicketPrice}</span>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6 col-xs-6">
                        </div>
                        <div className="col-md-6 col-xs-6" style={{borderBottom:"2px solid black", width:"110px"}}>
                          {/*<hr className="ehr" style={{width:"100px", marginTop:"0px"}}/>*/}
                        </div>
                      </div>
                      <div className="row" style={{marginTop:"-40px"}}>
                        <div className="col-md-6 col-xs-6">
                            <h4>Total Amount </h4>
                        </div>
                        <div className="col-md-6 col-xs-6" style={{textAlign:"center"}}>
                              <span>{'$' + totalPrice}</span>
                        </div>
                      </div>
                      <div className="text-center text-md-left">
                          <a className="btn button_custom" style={{width: "45%"}}>Purchase Yicket</a>
                      </div>
                    </div>

                  </div>
              </div>
            </div>
            </div>
      </div>

    )
  }
}
export default DateCard;
