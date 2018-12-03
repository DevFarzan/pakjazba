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
