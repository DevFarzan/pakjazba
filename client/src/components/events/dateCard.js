import React, { Component } from 'react';
import './dateCard.css'
import { Checkbox, InputNumber, Modal, Icon, Tooltip } from 'antd';
import moment from 'moment';
import AsyncStorage from "@callstack/async-storage/lib/index";
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
import TicketTabs from './tickettabs';

class DateCard extends Component{
    constructor(props){
        super(props);
        this.state = {
            eBird : 1,
            nTicket: 1
        }
    }

    componentDidMount(){
        this.handleLocalStorage()
    }

    handleLocalStorage = () =>{
        AsyncStorage.getItem('user')
            .then((obj) => {
                let userObj = JSON.parse(obj)
                if(!!userObj){
                    this.setState({
                        user: true,
                    })
                }
                else {
                    this.setState({
                        user: false
                    })
                }
            })
    }

    purchaseTicket(){
        const { user } = this.state;
        if(user){
            this.setState({goForward: true})
        }else {
            this.setState({visible: true})
        }
    }

    handleCancel = (e) => {
        this.setState({visible: false});
    }

    handleLogin = (e) => {
        const { dispatch, data } = this.props;
        let otherData = data;
        console.log(otherData, 'otherDataaaaaaaaa')
        dispatch({type: 'ANOTHERDATA', otherData})
        this.setState({goForLogin: true, visible: false})
    }

    render(){
        const { eBird, nTicket, goForLogin, goForward } = this.state;
        const { data } = this.props;

        if (goForLogin) {
            return <Redirect to={{pathname: '/sigin', state: {from: { pathname: "/Buyer_Detailpage" }, state: data}}}/>;
        }
        if(goForward){
            return <Redirect to={{pathname: `/Buyer_Detailpage`, state: data}} />
        }

        let from = '';
        let to = '';
        let earlyBird = data && data.earlyBird;
        let normalTicket = data && data.normalTicket;

        let eBirdPrice = '';
        let nTicketPrice = '';

        if(data){
            eBirdPrice = data.earlyBirdPrice * eBird ;
            nTicketPrice = data.normalTicketPrice * nTicket ;
        }

        let totalPrice = eBirdPrice + nTicketPrice;

        if(data.dateRange !== undefined && data.dateRange[0] !== undefined){
            from = moment(data.dateRange[0].from, 'YYYY-MM-DD').format("LL");
            to = moment(data.dateRange[0].to, 'YYYY-MM-DD').format("LL");
        }
        return(
          <div>
            <TicketTabs/>
            <div className="container widthmobile">
              <h3 style={{fontWeight:"bold",fontFamily: 'Crimson Text, sans-serif',marginTop:'11px'}}><a name="headline1" style={{color: "black"}}>Ticket Information</a></h3>
                {(earlyBird || normalTicket) &&<div className="ticketbuy">
                  <div className="row" style={{padding:"0"}}>
                    <div className="col-md-5">
                      <div className="col-md-12" style={{marginTop:"15px"}}>
                          <h5 style={{padding:"0"}}><b>Available Early Bird Tickets :  {" " + data && data.earlyBirdAvailableTickets}</b></h5>
                      </div>
                    </div>
                    <div className="col-md-4 col-xs-6" style={{marginTop:"15px"}}>
                      <p style={{margin:"0"}}>{'$' + eBirdPrice}</p>
                    </div>
                    <div className="col-md-3 col-xs-6" style={{marginTop:"13px"}}>
                      <InputNumber min={0} max={data && data.earlyBirdAvailableTickets} defaultValue={1} disabled={!earlyBird} onChange={(e) => {this.setState({eBird: e})}} style={{width:"50px", height:"23px"}} />

                      <Tooltip placement="top" title='Early Bird Ticket is not Available'>
                          {!earlyBird && <Icon type="question-circle" theme="filled" style={{fontSize: '16px', marginLeft: '10px'}}/>}
                      </Tooltip>
                    </div>
                  </div>
                </div>}

                {(earlyBird || normalTicket) &&<div className="ticketbuy">
                  <div className="row" style={{padding:"0"}}>
                    <div className="col-md-5">
                      <div className="col-md-12" style={{marginTop:"15px"}}>
                          <h5 style={{padding:"0"}}><b>Available Normal Bird Tickets :  {" " + data && data.normalTicketAvailableTickets}</b></h5>
                      </div>
                    </div>
                    <div className="col-md-4 col-xs-6" style={{marginTop:"15px"}}>
                      <p style={{margin:"0"}}>{'$' + nTicketPrice}</p>
                    </div>
                    <div className="col-md-3 col-xs-6" style={{marginTop:"13px"}}>
                      <InputNumber min={0} max={data && data.normalTicketAvailableTickets} defaultValue={1} disabled={!normalTicket} onChange={(e) => {this.setState({nTicket: e})}} style={{width:"50px", height:"23px"}} />
                      <Tooltip placement="top" title='Normal Ticket is not Available'>
                          {!normalTicket && <Icon type="question-circle" theme="filled" style={{fontSize: '16px', marginLeft: '10px'}}/>}
                      </Tooltip>
                    </div>
                  </div>
                </div>}

                {(earlyBird || normalTicket) &&<div className="ticketbuy">
                  <div className="row" style={{padding:"0"}}>
                    <div className="col-md-5" style={{marginTop:"15px"}}>
                        <h4>Total Amount </h4>
                    </div>
                    <div className="col-md-4 col-xs-6" style={{marginTop:"15px"}}>
                      <p style={{margin:"0"}}>{'$' + totalPrice}</p>
                    </div>
                    <div className="col-md-3 col-xs-6">
                    <div className="text-center text-md-left" onClick={() => {this.purchaseTicket()}}>
                        <a className="btn button_custom" style={{width: "80%", marginTop:"10px", marginLeft:"-58px"}}>{earlyBird || normalTicket ? 'Purchase Ticket' : 'Collect Ticket'}</a>
                    </div>
                    </div>
                  </div>
                </div>}

                {this.state.visible && <Modal
                    title="Kindly Login first"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    <div className="row">
                        <div className="col-md-6" style={{textAlign:'center'}}><button className="btn btn-sm btn2-success" style={{width:'100%'}} onClick={this.handleLogin}>Login</button></div>
                        <div className="col-md-6" style={{textAlign:'center'}}><button className="btn btn-sm btn2-success" style={{width:'100%'}} onClick={this.handleCancel}>Cancel</button></div>
                    </div>
                </Modal>}

                <div className="">
                  <h3 style={{fontWeight:"bold",fontFamily: 'Crimson Text, sans-serif',marginTop:'11px'}}><a name="headline2" style={{color: "black"}}>Event Detail</a></h3>
                  <div className="ticketbuy" style={{textAlign:"center"}}>

                      <img src={data.bannerSrc}/>
                      <div className="textblock">
                        <p> {data.name} Presents</p>
                        <p> {data.eventTitle} </p>
                        <span  className="marginspan"><p> On {data.dateRange && data.dateRange.from} @ {data.openingTime} </p>
                        <p> {data.address}  </p>
                        <p> {data.city} {data.state} </p> </span>

                        <span className="marginspan"><p>Ticket Range: </p>
                        <p> ${data.normalTicketPrice}- ${data.earlyBirdPrice}</p> </span>

                      </div>
                  </div>
                </div>

                <div className="">
                  <h3 style={{fontWeight:"bold",fontFamily: 'Crimson Text, sans-serif',marginTop:'11px'}}><a name="headline3" style={{color: "black"}}>Terms And Conditions</a></h3>
                  <div className="ticketbuy" style={{padding:"20px"}}>
                    {/*<ol>
                      <li> All Sales are Final. </li>
                      <li> All tickets are NON-Refundable and NON-TRANSFERABLE.</li>
                      <li> The person min whose name the ticket is issued must also be present at the door with valid photo ID.</li>
                      <li> A printout of the order receipt issued by pakjazba.com should be produced at the venue.</li>
                      <li> If the event attendance is different from the credit card hlider, a copy of the credit card used for ticket purchase must be produced along with order.</li>
                      <li> Any failure in providing the aforementioned documents may result in denial admission to the event with no refund.</li>
                      <li> In case of event being cancelled/postponed Pakjazba will refund only the face value of the ticket NOT the service fee.</li>
                    </ol>*/}
                    {data.termsCondition && data.termsCondition.map((elem, idx) => {
                        return(
                            <p>{idx + 1}. {elem.name}</p>
                        )
                    })}
                  </div>

                </div>
                {/*<div className="row" style={{padding:"0px"}}>
                    <div className="col-lg-12 col-md-12 col-sm-12 " >

                        <div className="">
                            <div className="">

                                <div className="row" style={{marginTop:"-30px"}}>
                                    {(earlyBird || normalTicket) && <div className="col-md-12">
                                        <h3><b>Charges</b></h3>
                                        <hr className="ehr"/>
                                    </div>}
                                    {(earlyBird || normalTicket) && <div className="col-md-12">
                                        <h5><b>Available Early Bird Tickets :  {" " + data && data.earlyBirdAvailableTickets}</b></h5>
                                    </div>}
                                    {(earlyBird || normalTicket) && <div className="row">
                                        <div className="col-md-6 col-xs-6">
                                            <Checkbox checked={earlyBird}></Checkbox>
                                            <span>Early Bird</span>
                                        </div>
                                        <div className="col-md-6 col-xs-6">
                                            <InputNumber min={0} max={data && data.earlyBirdAvailableTickets} defaultValue={1} disabled={!earlyBird} onChange={(e) => {this.setState({eBird: e})}} style={{width:"50px", height:"23px"}} />
                                            <span style={{marginLeft:'7px'}}>{'$' + eBirdPrice}</span>
                                            <Tooltip placement="top" title='Early Bird Ticket is not Available'>
                                                {!earlyBird && <Icon type="question-circle" theme="filled" style={{fontSize: '16px', marginLeft: '10px'}}/>}
                                            </Tooltip>
                                        </div>
                                    </div>}
                                    {(earlyBird || normalTicket) && <div className="col-md-12">
                                        <h5><b>Available Normal Bird Tickets :  {" " + data && data.normalTicketAvailableTickets}</b></h5>
                                    </div>}
                                    {(earlyBird || normalTicket) && <div className="row">
                                        <div className="col-md-6 col-xs-6">
                                            <Checkbox checked={normalTicket}></Checkbox>
                                            <span>Normal Ticket</span>
                                        </div>
                                        <div className="col-md-6 col-xs-6">
                                            <InputNumber min={0} max={data && data.normalTicketAvailableTickets} defaultValue={1} disabled={!normalTicket} onChange={(e) => {this.setState({nTicket: e})}} style={{width:"50px", height:"23px"}} />
                                            <span style={{marginLeft:'7px'}}>{'$' + nTicketPrice}</span>
                                            <Tooltip placement="top" title='Normal Ticket is not Available'>
                                                {!normalTicket && <Icon type="question-circle" theme="filled" style={{fontSize: '16px', marginLeft: '10px'}}/>}
                                            </Tooltip>
                                        </div>
                                    </div>}
                                    {(earlyBird || normalTicket) && <div className="row">
                                        <div className="col-md-6 col-xs-6">
                                        </div>
                                        <div className="col-md-6 col-xs-6" style={{borderBottom:"2px solid black", width:"110px"}}>

                                        </div>
                                    </div>}
                                    {(earlyBird || normalTicket) && <div className="row" style={{marginTop:"-40px"}}>
                                        <div className="col-md-6 col-xs-6">
                                            <h4>Total Amount </h4>
                                        </div>
                                        <div className="col-md-6 col-xs-6" style={{textAlign:"center"}}>
                                            <span>{'$' + totalPrice}</span>
                                        </div>
                                    </div>}
                                    <div className="text-center text-md-left" onClick={() => {this.purchaseTicket()}}>
                                        <a className="btn button_custom" style={{width: "45%"}}>{earlyBird || normalTicket ? 'Purchase Ticket' : 'Collect Ticket'}</a>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>*/}
            </div>
          </div>
        )
    }
}

const mapStateToProps = (state) => {
    return({
        text: state.text
    })
}

export default connect(mapStateToProps)(DateCard);

{/*<div className="row">
    <div className="col-md-12">
        <h3><b>Date</b></h3>
        <hr className="ehr"/>
    </div>
</div>*/}
{/*<section className="" style={{marginLeft:"-20px", marginTop:"-30px"}}>
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
</section>*/}
{/*<div className="row" style={{marginTop:"-30px"}}>
    <div className="col-md-12">
        <h3><b>Location</b></h3>
        <hr className="ehr"/>
    </div>
</div>*/}
{/*<section className="" style={{marginTop:"-30px"}}>
    <div className="row" style={{marginTop:"-40px"}}>
        <div className="col-md-12">
            <span>
                <p className="font-style" style={{fontSize:"15px", marginLeft:"5px"}}>{data && data.address}</p>
            </span>
        </div>
    </div>
</section>*/}
