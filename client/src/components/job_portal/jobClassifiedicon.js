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
            <div>
                <h2 style={{textAlign:"center", fontWeight:"bold", marginTop:"20px"}}> Browse Job </h2>
                <div className="row">
                    <div className="col-md-2 col-sm-3">
                        <div className="wrimagecard wrimagecard-topimage">
                            <div className="wrimagecard-topimage_header" onClick={() => {this.clickItem('information technology')}}>
                                <center>
                                    <img src="../images/job-icons/it.png" style={{width: "100%"}}/>
                                </center>
                            </div>
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
                    </div>
                </div>
            </div>
        )
    }
}

export default connect()(ClassifiedIcons);