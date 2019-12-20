import React, { Component } from 'react';
import moment from 'moment';
const QRCode = require('qrcode.react');

 class TicketFirst extends Component{
   render(){
    const { data } = this.props;
    let startDate = moment(data.data.dateRange[0].from).format('LL');
    let startDay = moment(data.data.dateRange[0].from).format('dddd');
    let endDate = moment(data.data.dateRange[0].to).format('LL');
    let endDay = moment(data.data.dateRange[0].to).format('dddd');
    let eventDayTime = startDay + ' ' + startDate + ' at ' + data.data.openingTime + ' - ' + endDay + ' ' + endDate + ' at ' + data.data.closingTime;
    let userDetail =  'Order no. ' + data.obj.docId + ', ordered by ' + data.obj.firstName + ' ' + data.obj.lastName + ' on ' + moment(data.obj.posted, 'LL').format('LLLL')
    let calIndex = data.obj.total.indexOf('.');
    let str = data.obj.total.substring(0, calIndex);
    let res = +data.obj.total - +str;
     return(
      <div className="container" style={{width:"80%"}}>
        <div className="ecardoutset">
          <div className="row">
            <div className="col-md-12 col-sm-12">
              <div className="col-md-8">
                <h3>{data.data.eventTitle}</h3>
                {data.data.earlyBird && <h3> Early Bird $ {data.data.earlyBirdPrice} </h3>}
                {data.data.normalTicket && <h3> Normal Ticket $ {data.data.normalTicketPrice} </h3>}
                <p style={{marginTop:"35px"}}>{data.data.address}</p>
                <p style={{marginTop:"-10px"}}>{eventDayTime}</p>
                <div className="row" style={{marginLeft:"-25px"}}>
                  <div className="col-md-7">
                    <h3> Pakjazba Completed </h3>
                    <p style={{marginTop:"-15px", color:"darkgray"}}> Order information </p>
                    <p style={{marginTop:"-25px"}}>{userDetail}</p>
                  </div>
                  <div className="col-md-5">
                    <h3> Vat ${res.toFixed(2)} </h3>
                    <p style={{marginTop:"-15px", color:"darkgray"}}> Name </p>
                    <p style={{marginTop:"-25px"}}>{data.obj.firstName + ' ' + data.obj.lastName}</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <img src={data.data.images[0]} style={{width:"100%", height:"100px"}}/>
                <QRCode value="helloFarzanBhai" style={{marginTop:"100px", marginLeft:"80px"}}/>
              </div>
            </div>
          </div>
        </div>
      </div>
     )
   }
 }

 export default TicketFirst;
