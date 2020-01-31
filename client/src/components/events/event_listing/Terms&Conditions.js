import React, { Component } from 'react';
import  './OrderSummarycard.css';
class TermsandConditions extends Component{
  render(){
    return(
      <div className="panel-body">
          <div className="panel panel-default">
              <div className="bold_c_text formHeadEvent">
                  <icon type="info-circle"/>
                  <span className="margin_font_location">Terms & Conditions</span>
              </div>
              <div className="container" style={{width:'90%'}}>
                  <section>
                        <div className="row">
                          <div class="well col-sm-12">
                            <ul>
                                <li>Dapibus ac facilisis inDapibus ac facilisis i Dapibus ac facilisis iDapibus ac facilisis iDapibus ac facilisis i</li>
                                <li>Morbi leo risus</li>
                                <li>Porta ac consectetur ac</li>
                                <li>Vestibulum at eros</li>
                              </ul>
                          </div>
                        </div>
                  </section>
              </div>
          </div>
      </div>
    )
  }
}

export default TermsandConditions;
