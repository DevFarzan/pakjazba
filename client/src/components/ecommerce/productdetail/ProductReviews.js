import React, { Component } from 'react';
import { Carousel, Rate, notification, Icon, Spin, Modal } from 'antd';


class ProductReviews extends Component{
  render(){
    return(
      <div className="container" style={{width:"85%"}}>
        <div class="vitalbox">
          <div class="">
            <div class="row" style={{paddingRight:"80px",paddingLeft:"80px"}}>
                <div class="col-md-2">
                    <img src="https://image.ibb.co/jw55Ex/def_face.jpg" class="img img-rounded img-fluid"/>

                </div>
                <div class="col-md-10">
                    <div className="row" style={{padding:"0px"}}>
                      <div className="col-md-6">
                        <h4><strong>Maniruzzaman Akash</strong></h4>
                      </div>
                      <div className="col-md-6">
                        <p style={{marginBottom:"0px", textAlign:"right"}}> Written on 2018 </p>
                      </div>
                    </div>
                        <Rate allowHalf defaultValue={2.5} />
                   <div class="clearfix"></div>
                    <p>Lorem Ipsum is simply dummy text of the pr make  but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
            </div>
            <hr/>
            <div class="row" style={{paddingRight:"80px",paddingLeft:"80px"}}>
                <div class="col-md-2">
                    <img src="https://image.ibb.co/jw55Ex/def_face.jpg" class="img img-rounded img-fluid"/>

                </div>
                <div class="col-md-10">
                    <div className="row" style={{padding:"0px"}}>
                      <div className="col-md-6">
                        <h4><strong>Maniruzzaman Akash</strong></h4>
                      </div>
                      <div className="col-md-6">
                        <p style={{marginBottom:"0px", textAlign:"right"}}> Written on 2018 </p>
                      </div>
                    </div>
                        <Rate allowHalf defaultValue={2.5} />
                   <div class="clearfix"></div>
                    <p>Lorem Ipsum is simply dummy text of the pr make  but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
            </div>
            <hr/>

          </div>

          <div className="row">
              <div className="col-md-12">
                  {/*Section: Contact v.2*/}
                  <div>
                      <h4>Your Rating:
                          <Rate allowHalf value />
                      </h4>
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
                                              <input type="text" id="name1" name="name" className="form-control"/>
                                          </div>
                                      </div>
                                      {/*Grid column*/}
                                      {/*Grid column*/}
                                      <div className="col-md-6">
                                          <div className="md-form mb-0">
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
                                          <div className="md-form">
                                              <label>Your message</label>
                                              <textarea type="text" id="message1" name="message" rows="2" className="form-control md-textarea"></textarea>
                                          </div>
                                      </div>
                                  </div>
                                  {/*Grid row*/}
                              </form>
                              <div className="text-center text-md-left">

                                  <a  className="btn button_custom" style={{width: "35%"}}>Send</a>
                              </div>
                              <div className="status"></div>
                          </div>
                          {/*Grid column*/}
                      </div>
                  </div>
                  {/*Section: Contact v.2*/}
              </div>
          </div>
        </div>
    </div>
    )
  }
}

export default ProductReviews;
