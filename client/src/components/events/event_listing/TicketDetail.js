import React, { Component } from 'react';
import Burgermenu from '../../header/burgermenu';
import Footer from '../../footer/footer';
import Slider from '../../header/Slider';
import TicketFirst from '../event_listing/FirstCard';
import TicketSecond from '../event_listing/SecondCard';
import { Icon } from 'antd';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import moment from 'moment';

const QRCode = require('qrcode.react');

class TicketDetail extends Component{

  purchaseTicket(){
      const input = document.getElementById('divIdToPrint');
      html2canvas(input)
          .then((canvas) => {
              const imgData = canvas.toDataURL('image/png');
              const pdf = new jsPDF();
              pdf.addImage(imgData, 'PNG', 0, 0);
              pdf.save("download.pdf");
          });
  }

  render(){
    let data = this.props.location.state;
    let startDate = moment(data.data.dateRange[0].from).format('LL');
    let startDay = moment(data.data.dateRange[0].from).format('dddd');
    let endDate = moment(data.data.dateRange[0].to).format('LL');
    let endDay = moment(data.data.dateRange[0].to).format('dddd');
    let eventDayTime = startDay + ' ' + startDate + ' at ' + data.data.openingTime + ' - ' + endDay + ' ' + endDate + ' at ' + data.data.closingTime;
    let userDetail =  'Order no. ' + data.obj.docId + ', ordered by ' + data.obj.firstName + ' ' + data.obj.lastName + ' on ' + moment(data.obj.posted, 'LL').format('LLLL')
    let calIndex = data.obj.total.indexOf('.');
    let str = data.obj.total.substring(0, calIndex);
    let res = +data.obj.total - +str;
    let strForURL = data.obj.firstName + ' ' + data.obj.lastName + ' Order no. ' + data.obj.docId;
    return(
      <div className="" style={{marginTop:"100px"}}>
        <Burgermenu />
        <div className="row">
            <div className="col-md-12">
                <div className="col-md-3">
                </div>
                <div className="col-md-3">
                    <div className="" onClick={() => {this.purchaseTicket()}}>
                        <a className="btn button_custom" style={{float: 'right'}}><Icon type="download" />&nbsp;Download as PDF</a>
                    </div>
                </div>
                <div className="col-md-6"></div>
            </div>
        </div>  
        <div id="divIdToPrint" style={{marginTop: '-30px'}}>
            <span>
          <div className="" style={{width: '60%', marginLeft: '60px'}}>
              <div className="row">
                <div className="row">
                    <div className="col-md-6">
                        <h1 style={{marginLeft: '30px', color: '#37a99b'}}>PakJazba</h1>
                    </div>
                    <div className="col-md-6">
                        <h5 style={{marginTop: '20px'}}>orderNo: {data.obj.docId}</h5>
                    </div>
                </div>
                <div className="col-md-10 col-sm-12" style={{border: '1px solid #D3D3D3', marginTop: '-20px'}}>
                  <div className="col-md-8" style={{marginTop: '10px'}}>
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
                  <div className="col-md-4" style={{marginTop: '10px'}}>
                    <img src={data.data.images[0]} style={{width:"100%", height:"100px"}}/>
                    <QRCode value={strForURL} style={{marginTop:"100px"}}/>
                  </div>
                </div>
              </div>
            </div>
          <div className="ecardoutset" style={{width: '50%', marginLeft: '60px'}}>
            <div className="paragraph" style={{padding:"15px"}}>
            <p> Event Information </p>
            <p>{data.data.description}</p>
            </div>
          </div>
      </span>
        </div>
        <Footer />
      </div>
    )
  }
}

export default TicketDetail;
