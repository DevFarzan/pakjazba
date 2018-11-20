import React, { Component } from 'react';

class ContactForm extends Component{
  render(){
    return(
      <div className="row">
          <div className="card outset" style={{ boxShadow: "none", border:"1px solid #D3D3D3", background: "white"}}>
              <div className="card-body space">
                  <div className="row">
                      <div className="col-md-12 col-sm-12 col-xs-12">
                          <h3><b><a name="linkReview" className="black">Comments</a></b></h3>
                          <hr/>
                      </div>
                  </div>
                  <div className="row">
                      <div className="col-md-12">
                          {/*Section: Contact v.2*/}
                          <section className="section">
                              <div className="row">
                                  {/*Grid column*/}
                                  <div className="col-md-9 mb-md-0 mb-5">
                                      <form id="contact-form" name="contact-form" action="mail.php" method="POST">
                                          {/*Grid row*/}
                                          <div className="row">
                                              {/*Grid column*/}
                                              <div className="col-md-6">
                                                  <div className="md-form mb-0">
                                                      <label className="">Your name</label>
                                                      <input type="text" id="name1" name="name" className="form-control"
                                                      />
                                                  </div>
                                              </div>
                                              {/*Grid column*/}
                                              {/*Grid column*/}
                                              <div className="col-md-6">
                                                  <div className="">
                                                      <label className="">Your email</label>
                                                      <input type="text" id="email1" name="email" className="form-control"/>
                                                  </div>
                                              </div>
                                              {/*Grid column*/}
                                          </div>
                                          {/*Grid row*/}
                                          {/*Grid row*/}
                                          <div className="row">
                                              {/*Grid column*/}
                                              <div className="col-md-12">
                                                  <div className="">
                                                      <label style={{display:"block"}}>Your message</label>
                                                      <textarea type="text" id="message1" name="message" rows="5" style={{width:"100%"}}></textarea>
                                                  </div>
                                              </div>
                                          </div>
                                          {/*Grid row*/}
                                      </form>
                                      <div className="text-center text-md-left">

                                          <a className="btn button_custom" style={{width: "35%"}}>Send</a>
                                      </div>
                                      <div className="status"></div>
                                  </div>
                                  {/*Grid column*/}
                              </div>
                          </section>
                          {/*Section: Contact v.2*/}
                      </div>
                  </div>
              </div>
          </div>
      </div>
    )
  }
}

export default ContactForm;
