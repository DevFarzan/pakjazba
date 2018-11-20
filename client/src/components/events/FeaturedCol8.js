import React, { Component } from 'react';
import ContactForm from '../main_Component/ContactForm'

class FeaturedCol extends Component{
  render(){
    return(
      <div>
        <div className="ecardoutset">
          <div className="row">
            <div className="col-md-12">
              <div className="col-md-3">
                <img src="../images/black.jpg" style={{width:"100%", height:"190px"}}/>
              </div>
              <div className="col-md-9">
                <div className="row">
                  <div className="col-md-12">
                    <h3 style={{fontWeight:"bold",fontFamily: 'Crimson Text, sans-serif',marginTop:'11px'}}>Organiser Name</h3>
                  </div>
                  <div className="col-md-6">
                    <h5> email: email@info.com </h5>
                  </div>
                  <div className="col-md-6">
                    <h5> Facebook/Faven-book </h5>
                  </div>

                  <div className="col-md-6">
                    <h5>Phone: +92-65311-66633 </h5>
                  </div>

                  <div className="col-md-6">
                    <h5> Twitter/ Twitter.coom</h5>
                  </div>

                  <div className="col-md-6">
                    <h5> website: www.website.com</h5>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>

      <ContactForm/>
    </div>
    )
  }
}
export default FeaturedCol;
