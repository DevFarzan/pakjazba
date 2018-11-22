import React, { Component } from 'react';
import ContactForm from '../main_Component/ContactForm'

class FeaturedCol extends Component{
  render(){
    const { data } = this.props;
    return(
      <div>
        <div className="ecardoutset">
          <div className="row">
            <div className="col-md-12">
              <div className="col-md-3">
                <img src={this.props.data.images && this.props.data.images[0]} style={{width:"100%", height:"190px"}}/>
              </div>
              <div className="col-md-9">
                <div className="row">
                  <div className="col-md-12">
                    <h3 style={{fontWeight:"bold",fontFamily: 'Crimson Text, sans-serif',marginTop:'11px'}}>{this.props.data && this.props.data.name}</h3>
                  </div>
                  <div className="col-md-6">
                    <h5> email: {' ' + this.props.data && this.props.data.email}</h5>
                  </div>
                  <div className="col-md-6">
                    <h5>{this.props.data && this.props.data.faceBook}</h5>
                  </div>
                  <div className="col-md-6">
                    <h5>Phone: {this.props.data && this.props.data.number}</h5>
                  </div>
                  <div className="col-md-6">
                    <h5>{this.props.data && this.props.data.linkdIn}</h5>
                  </div>
                  <div className="col-md-6">
                    <h5> website: {this.props.data && this.props.data.website}</h5>
                  </div>
                  <div className="col-md-6">
                    <h5>{this.props.data && this.props.data.google}</h5>
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
