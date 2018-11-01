import React, { Component } from 'react';

class EventFeatured extends Component{
  render(){
    return(
      <div className="container" style={{width:"90%"}}>
        <h2 style={{textAlign:"center", fontWeight:"bold", marginTop:"20px"}}> Great Events </h2>
        <div className="row">
          <div className="col-md-3"  style={{'marginBottom': '30px'}}>
              <div className="card" style={{border: '1px solid #3a252542',boxShadow: 'none',borderRadius:'13px',width:'100%'}}>
                  <img alt='' src='./images/job-category.jpeg' style={{height:'200px', width:"100%"}}/>
                  <h4 style={{marginTop:'15px', textAlign:"center",}}><b>Event Name</b></h4>
                  <div className="row">
                    <div className="col-md-6">
                      <p style={{marginTop:"-15px",marginLeft:"11px"}}><span className="glyphicon glyphicon-map-marker" style={{color: "#008080",margin:"2px"}}></span><span style={{color:"black"}}>Dallas</span></p>
                    </div>
                    <div className="col-md-6">
                      <p style={{marginTop:"-15px",marginLeft:"11px"}}><span className="glyphicon glyphicon-calendar" style={{color: "#008080",margin:"2px"}}></span><span style={{color:"black"}}>21.05.2018</span></p>
                    </div>
                      <img src='./images/event-icons/fashion.png' style={{marginLeft:"90px", height:"100px", marginTop:"-40px", marginBottom:"-35px"}}/>
                  </div>
              </div>
          </div>

          <div className="col-md-3"  style={{'marginBottom': '30px'}}>
              <div className="card" style={{border: '1px solid #3a252542',boxShadow: 'none',borderRadius:'13px',width:'100%'}}>
                  <img alt='' src='./images/Rent room stockholm.jpg' style={{height:'200px', width:"100%"}}/>
                  <h4 style={{marginTop:'15px', textAlign:"center"}}><b>Event Name</b></h4>
                  <div className="row">
                    <div className="col-md-6">
                      <p style={{marginTop:"-15px",marginLeft:"11px"}}><span className="glyphicon glyphicon-map-marker" style={{color: "#008080",margin:"2px"}}></span><span style={{color:"black"}}>Dallas</span></p>
                    </div>
                    <div className="col-md-6">
                      <p style={{marginTop:"-15px",marginLeft:"11px"}}><span className="glyphicon glyphicon-calendar" style={{color: "#008080",margin:"2px"}}></span><span style={{color:"black"}}>16.04.2018</span></p>
                    </div>
                      <img src='./images/event-icons/film.png' style={{marginLeft:"90px", height:"100px", marginTop:"-40px", marginBottom:"-35px"}}/>
                  </div>
              </div>
          </div>

          <div className="col-md-3"  style={{'marginBottom': '30px'}}>
              <div className="card" style={{border: '1px solid #3a252542',boxShadow: 'none',borderRadius:'13px',width:'100%'}}>
                  <img alt='' src='./images/business_detail.jpg' style={{height:'200px', width:"100%"}}/>
                  <h4 style={{marginTop:'15px', textAlign:"center", fontWieght:"bold"}}><b>Event Name</b></h4>
                  <div className="row">
                    <div className="col-md-6">
                      <p style={{marginTop:"-15px",marginLeft:"11px"}}><span className="glyphicon glyphicon-map-marker" style={{color: "#008080",margin:"2px"}}></span><span style={{color:"black"}}>Dallas</span></p>
                    </div>
                    <div className="col-md-6">
                      <p style={{marginTop:"-15px",marginLeft:"11px"}}><span className="glyphicon glyphicon-calendar" style={{color: "#008080",margin:"2px"}}></span><span style={{color:"black"}}>13.03.2017</span></p>
                    </div>
                    <img src='./images/event-icons/music.png' style={{marginLeft:"90px", height:"100px", marginTop:"-40px", marginBottom:"-35px"}}/>
                  </div>

              </div>
          </div>
        </div>
        <div className="row">
            <div className="col-md-12">
                <img src="../images/businesslistingimage.png" style={{width:'100%'}} />
            </div>
        </div>
      </div>
    )
  }
}

export default EventFeatured;
