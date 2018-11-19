import React, { Component } from 'react';

 class TicketFirst extends Component{
   render(){
     return(
      <div className="container" style={{width:"80%"}}>
        <div className="ecardoutset">
          <div className="row">
            <div className="col-md-12 col-sm-12">
              <div className="col-md-8">
                <h3> Music Concert of Atif Aslam </h3>
                <h3> Early Bird $ 204.25 </h3>
                <p style={{marginTop:"35px"}}> Naveda California hall, plano texas, united states </p>
                <p style={{marginTop:"-10px"}}> Monday 8 October 2018 at 9:00 - Tuesday 9 October 2018 at 18:00 (GMT) </p>
                <div className="row" style={{marginLeft:"-25px"}}>
                  <div className="col-md-7">
                    <h3> Pakjazba Completed </h3>
                    <p style={{marginTop:"-15px", color:"darkgray"}}> Order information </p>
                    <p style={{marginTop:"-25px"}}> Order no. 816986513, ordered by Khumar Raza on 1 september 2018 10:46 </p>
                  </div>
                  <div className="col-md-5">
                    <h3> Vat $ 2.25 </h3>
                    <p style={{marginTop:"-15px", color:"darkgray"}}> Name </p>
                    <p style={{marginTop:"-25px"}}> Syeda Khumar Raza </p>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <img src='./images/blog1.jpg' style={{width:"100%", height:"100px"}}/>
                <img src='./images/qr-code.jpg' style={{marginTop:"100px", marginLeft:"80px"}}/>
              </div>
            </div>
          </div>
        </div>
      </div>
     )
   }
 }

 export default TicketFirst;
