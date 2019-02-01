import React, { Component } from 'react';
import './bannerevent.css';

class EventBanner extends Component{
  render(){
    return(
      <div className="container" style={{width:"70%"}}>
      <h4 style={{textAlign:"left", fontWeight:"bold", marginTop:"20px", marginBottom:"0"}}> Top Events   </h4>
        <div className="row">
          <div className="col-md-3">
            <div className="card">
                <img alt='' src="./images/afterpaginate.jpg" style={{height:'120px', width:"100%", borderTopLeftRadius: '12px', borderTopRightRadius: '12px'}}/>
                <h5 style={{marginTop:'5px', marginLeft:"0", marginBottom:"5px"}}><b>Junnon Reunion</b></h5>
                    <p style={{marginBottom:"0px"}}>
                        <span style={{color:"black"}}>DHA Pahse V, Karachi</span>
                    </p>

                    <p>
                        <span className="glyphicon glyphicon-calendar" style={{color: "#008080",margin:"-1px"}}></span>
                        <span style={{color:"black", marginLeft:"5px"}}>April. 2019</span>
                    </p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
                <img alt='' src="./images/bg.jpg" style={{height:'120px', width:"100%", borderTopLeftRadius: '12px', borderTopRightRadius: '12px'}}/>
                <h5 style={{marginTop:'5px', marginLeft:"0", marginBottom:"5px"}}><b>Coke Fest </b></h5>
                    <p style={{marginBottom:"0px"}}>
                        <span style={{color:"black"}}>Dallas, Texas</span>
                    </p>

                    <p>
                        <span className="glyphicon glyphicon-calendar" style={{color: "#008080",margin:"-1px"}}></span>
                        <span style={{color:"black", marginLeft:"5px"}}>March. 2019</span>
                    </p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
                <img alt='' src="./images/business_detail.jpg" style={{height:'120px', width:"100%", borderTopLeftRadius: '12px', borderTopRightRadius: '12px'}}/>
                <h5 style={{marginTop:'5px', marginLeft:"0", marginBottom:"5px"}}><b>Junnon Reunion</b></h5>
                    <p style={{marginBottom:"0px"}}>
                        <span style={{color:"black"}}>E-Street, DHA Phase VI , Karachi </span>
                    </p>

                    <p>
                        <span className="glyphicon glyphicon-calendar" style={{color: "#008080",margin:"-1px"}}></span>
                        <span style={{color:"black", marginLeft:"5px"}}>March 27. 2019</span>
                    </p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
                <img alt='' src="./images/shutterstock_1094843246.jpg" style={{height:'120px', width:"100%", borderTopLeftRadius: '12px', borderTopRightRadius: '12px'}}/>
                <h5 style={{marginTop:'5px', marginLeft:"0", marginBottom:"5px"}}><b>Master Cheif Pakistan</b></h5>
                    <p style={{marginBottom:"0px"}}>
                        <span style={{color:"black"}}>DHA Pahse V, Karachi</span>
                    </p>

                    <p>
                        <span className="glyphicon glyphicon-calendar" style={{color: "#008080",margin:"-1px"}}></span>
                        <span style={{color:"black", marginLeft:"5px"}}>April 29. 2019</span>
                    </p>
            </div>
          </div>
        </div>
        <div className="hidden-xs">
            <div className="EventBanner" style={{width:"100%", }}>
                <div className="row">
                    <div className="col-md-6">
                        <h1 style={{marginBottom:"5px"}}> Find Event near <br/> You with <br/> PakJazba </h1>
                        <p> <b> Events near you </b></p>
                    </div>
                    <div className="col-md-6">
                        <img src="images/business/busi-illus-2.png"/>
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
  }
}

export default EventBanner;
