import React, { Component } from 'react';
import './jobClassifiedicon.css';
import { connect } from 'react-redux'

class ClassifiedIcons extends Component{
    constructor(props){
        super(props);
        this.clickItem = this.clickItem.bind(this);
    }

    clickItem(item){
        const { dispatch } = this.props;
        var inputValue = item;
        dispatch({type: 'SEARCHON', inputValue})
    }

    render(){
        return(
            <div className="container" style={{width:"70%"}}>
                <h2 style={{textAlign:"center", fontWeight:"bold", marginTop:"20px"}}> Categories </h2>
                <div className="row">
                    <div className="col-md-4 col-sm-6 col-xs-12"  onClick={() => {this.clickItem('information technology')}} >
                      <div className="jobIconbox">
                        <div className="jobIconbox-topimage_header" style={{border:'1px solid black',padding:'15px', textAlign:"center"}}>
                            <i className="fa fa-car margin_right_c" style={{marginRight:"0"}}><p>Accounting</p></i>
                            <span className="margin_right_c"></span>
                            <span className="fa fa-chevron-circle-down visible-xs" style={{float:'right',fontSize:'27px'}}></span>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-6 col-xs-12"  onClick={() => {this.clickItem('information technology')}} >
                      <div className="jobIconbox">
                        <div className="jobIconbox-topimage_header" style={{border:'1px solid black',padding:'15px', textAlign:"center"}}>
                            <i className="fa fa-car margin_right_c" style={{marginRight:"0"}}><p>Admin & Clerical</p></i>
                            <span className="margin_right_c"></span>
                            <span className="fa fa-chevron-circle-down visible-xs" style={{float:'right',fontSize:'27px'}}></span>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-6 col-xs-12"  onClick={() => {this.clickItem('information technology')}} >
                      <div className="jobIconbox">
                        <div className="jobIconbox-topimage_header" style={{border:'1px solid black',padding:'15px', textAlign:"center"}}>
                            <i className="fa fa-car margin_right_c" style={{marginRight:"0"}}><p>Customer Service</p></i>
                            <span className="margin_right_c"></span>
                            <span className="fa fa-chevron-circle-down visible-xs" style={{float:'right',fontSize:'27px'}}></span>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-6 col-xs-12"  onClick={() => {this.clickItem('information technology')}} >
                      <div className="jobIconbox">
                        <div className="jobIconbox-topimage_header" style={{border:'1px solid black',padding:'15px', textAlign:"center"}}>
                            <i className="fa fa-car margin_right_c" style={{marginRight:"0"}}><p>Executive</p></i>
                            <span className="margin_right_c"></span>
                            <span className="fa fa-chevron-circle-down visible-xs" style={{float:'right',fontSize:'27px'}}></span>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-6 col-xs-12"  onClick={() => {this.clickItem('information technology')}} >
                      <div className="jobIconbox">
                        <div className="jobIconbox-topimage_header" style={{border:'1px solid black',padding:'15px', textAlign:"center"}}>
                            <i className="fa fa-car margin_right_c" style={{marginRight:"0"}}><p>Contract & Freelance</p></i>
                            <span className="margin_right_c"></span>
                            <span className="fa fa-chevron-circle-down visible-xs" style={{float:'right',fontSize:'27px'}}></span>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-6 col-xs-12"  onClick={() => {this.clickItem('information technology')}} >
                      <div className="jobIconbox">
                        <div className="jobIconbox-topimage_header" style={{border:'1px solid black',padding:'15px', textAlign:"center"}}>
                            <i className="fa fa-car margin_right_c" style={{marginRight:"0"}}><p>Sales & Marketing</p></i>
                            <span className="margin_right_c"></span>
                            <span className="fa fa-chevron-circle-down visible-xs" style={{float:'right',fontSize:'27px'}}></span>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-6 col-xs-12"  onClick={() => {this.clickItem('information technology')}} >
                      <div className="jobIconbox">
                        <div className="jobIconbox-topimage_header" style={{border:'1px solid black',padding:'15px', textAlign:"center"}}>
                            <i className="fa fa-car margin_right_c" style={{marginRight:"0"}}><p>Health Care</p></i>
                            <span className="margin_right_c"></span>
                            <span className="fa fa-chevron-circle-down visible-xs" style={{float:'right',fontSize:'27px'}}></span>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-6 col-xs-12"  onClick={() => {this.clickItem('information technology')}} >
                      <div className="jobIconbox">
                        <div className="jobIconbox-topimage_header" style={{border:'1px solid black',padding:'15px', textAlign:"center"}}>
                            <i className="fa fa-car margin_right_c" style={{marginRight:"0"}}><p>Retail</p></i>
                            <span className="margin_right_c"></span>
                            <span className="fa fa-chevron-circle-down visible-xs" style={{float:'right',fontSize:'27px'}}></span>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-6 col-xs-12"  onClick={() => {this.clickItem('information technology')}} >
                      <div className="jobIconbox">
                        <div className="jobIconbox-topimage_header" style={{border:'1px solid black',padding:'15px', textAlign:"center"}}>
                            <i className="fa fa-car margin_right_c" style={{marginRight:"0"}}><p>Transporting</p></i>
                            <span className="margin_right_c"></span>
                            <span className="fa fa-chevron-circle-down visible-xs" style={{float:'right',fontSize:'27px'}}></span>
                        </div>
                      </div>
                    </div>
                    <span className="seemore"> <p> See More Category</p> </span>
                </div>
                {/*<div className="wrimagecard wrimagecard-topimage">
                    <div className="wrimagecard-topimage_header" onClick={() => {this.clickItem('information technology')}}>
                        <center>
                            <img src="../images/job-icons/it.png" style={{width: "100%"}}/>
                        </center>
                    </div>
                </div>

            <div className="col-md-2 col-sm-3">
                <div className="wrimagecard wrimagecard-topimage">
                    <div className="wrimagecard-topimage_header" onClick={() => {this.clickItem('banking')}}>
                        <center>
                            <img src="../images/job-icons/banking.png" style={{width: "100%"}}/>
                        </center>
                    </div>
                </div>
            </div>

            <div className="col-md-2 col-sm-3">
                <div className="wrimagecard wrimagecard-topimage">
                    <div className="wrimagecard-topimage_header" onClick={() => {this.clickItem('accounting')}}>
                        <center>
                            <img src="../images/job-icons/account.png"style={{width: "100%"}}/>
                        </center>
                    </div>
                </div>
            </div>

            <div className="col-md-2 col-sm-3">
                <div className="wrimagecard wrimagecard-topimage">
                    <div className="wrimagecard-topimage_header" onClick={() => {this.clickItem('management')}}>
                        <center>
                            <img src="../images/job-icons/management.png"style={{width: "100%"}}/>
                        </center>
                    </div>
                </div>
            </div>

            <div className="col-md-2 col-sm-3">
                <div className="wrimagecard wrimagecard-topimage">
                    <div className="wrimagecard-topimage_header" onClick={() => {this.clickItem('digital and creative')}}>
                        <center>
                            <img src="../images/job-icons/creative-digital.png"style={{width: "100%"}}/>
                        </center>
                    </div>
                </div>
            </div>

            <div className="col-md-2 col-sm-3">
                <div className="wrimagecard wrimagecard-topimage">
                    <div className="wrimagecard-topimage_header" onClick={() => {this.clickItem('sales and marketing')}}>
                        <center>
                            <img src="../images/job-icons/sale-&-marketing.png"style={{width: "100%"}}/>
                        </center>
                    </div>
                </div>
            </div>*/}
            </div>

        )
    }
}

export default connect()(ClassifiedIcons);
