import React, { Component } from 'react';

 class TicketSecond extends Component{
   render(){
    const { data } = this.props;
    console.log(data, 'event hello bhaiiiiiiiiiii')
     return(
      <div className="row">
        <div className="col-md-8">
          <div className="container" style={{width:"73%"}}>
            <div className="ecardoutset">
              <div className="paragraph" style={{padding:"15px"}}>
              <p> Event Information </p>
              <p>{data.data.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
     )
   }
 }
 export default TicketSecond;
 
// <TicketFirst data={data}/>
//         <TicketSecond data={data}/>

 // purchaseTicket(){
 //      let data = this.props.location.state;
 //      let startDate = moment(data.data.dateRange[0].from).format('LL');
 //      let startDay = moment(data.data.dateRange[0].from).format('dddd');
 //      let endDate = moment(data.data.dateRange[0].to).format('LL');
 //      let endDay = moment(data.data.dateRange[0].to).format('dddd');
 //      let eventDayTime = startDay + ' ' + startDate + ' at ' + data.data.openingTime + ' - ' + endDay + ' ' + endDate + ' at ' + data.data.closingTime;
 //      let userDetail =  'Order no. ' + data.obj.docId + ', ordered by ' + data.obj.firstName + ' ' + data.obj.lastName + ' on ' + moment(data.obj.posted, 'LL').format('LLLL')
 //      let calIndex = data.obj.total.indexOf('.');
 //      let str = data.obj.total.substring(0, calIndex);
 //      let res = +data.obj.total - +str;
 //      const input = document.getElementById('divIdToPrint').innerHTML += `<span>
 //          <div className="" style={{width: '60%', marginLeft: '60px'}}>
 //              <div className="row">
 //                <div className="col-md-10 col-sm-12" style={{border: '1px solid #D3D3D3'}}>
 //                  <div className="col-md-8">
 //                    <h3>{data.data.eventTitle}</h3>
 //                    {data.data.earlyBird && <h3> Early Bird $ {data.data.earlyBirdPrice} </h3>}
 //                    {data.data.normalTicket && <h3> Normal Ticket $ {data.data.normalTicketPrice} </h3>}
 //                    <p style={{marginTop:"35px"}}>{data.data.address}</p>
 //                    <p style={{marginTop:"-10px"}}>{eventDayTime}</p>
 //                    <div className="row" style={{marginLeft:"-25px"}}>
 //                      <div className="col-md-7">
 //                        <h3> Pakjazba Completed </h3>
 //                        <p style={{marginTop:"-15px", color:"darkgray"}}> Order information </p>
 //                        <p style={{marginTop:"-25px"}}>{userDetail}</p>
 //                      </div>
 //                      <div className="col-md-5">
 //                        <h3> Vat ${res.toFixed(2)} </h3>
 //                        <p style={{marginTop:"-15px", color:"darkgray"}}> Name </p>
 //                        <p style={{marginTop:"-25px"}}>{data.obj.firstName + ' ' + data.obj.lastName}</p>
 //                      </div>
 //                    </div>
 //                  </div>
 //                  <div className="col-md-4">
 //                    <img src={data.data.images[0]} style={{width:"100%", height:"100px"}}/>
 //                    <QRCode value="helloFarzanBhai" style={{marginTop:"100px", marginLeft:"80px"}}/>
 //                  </div>
 //                </div>
 //              </div>
 //            </div>
 //          <div className="ecardoutset" style={{width: '50%', marginLeft: '60px'}}>
 //            <div className="paragraph" style={{padding:"15px"}}>
 //            <p> Event Information </p>
 //            <p>{data.data.description}</p>
 //            </div>
 //          </div>
 //      </span>`;
 //      console.log(input, 'inputttttttttt')
 //      html2canvas(input)
 //          .then((canvas) => {
 //              console.log(canvas, 'canvasssssssss')
 //              const imgData = canvas.toDataURL('image/png');
 //              console.log(imgData, 'imgDataaaaaaaa')
 //              const pdf = new jsPDF();
 //              pdf.addImage(imgData, 'PNG', 0, 0);
 //              pdf.save("download.pdf");
 //          });
 //  }
