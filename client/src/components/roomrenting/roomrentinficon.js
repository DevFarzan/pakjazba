import React, { Component } from 'react';
import './roomrentingicon.css';
import { connect } from 'react-redux'

class RoomrentingIcon extends Component{
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
                <h2 style={{textAlign:"center", fontWeight:"bold", marginTop:"20px"}}> Categories </h2>
                <div className="row">
                    <div className="col-md-2 col-sm-2" style={{marginLeft:'96px'}}>
                            <div onClick={() => {this.clickItem('single family home')}}>
                              <div className="wrimagecard wrimagecard-topimage">
                                <div className="wrimagecard-topimage_header" onClick={() => {this.clickItem('exhibition')}}>
                                    <center>
                                        <img src="../images/PHR ICON ROOM/SINGLE-FAMILY.png" style={{width: "100%"}}/>
                                    </center>
                                 </div>
                        
                             </div>
                        </div>
                    </div>

                    <div className="col-md-2 col-sm-2">
                        <div onClick={() => {this.clickItem('single family home')}}>
                              <div className="wrimagecard wrimagecard-topimage">
                                <div className="wrimagecard-topimage_header" onClick={() => {this.clickItem('exhibition')}}>
                                    <center>
                                        <img src="../images/PHR ICON ROOM/APPARTMENT.png" style={{width: "100%"}}/>
                                    </center>
                                 </div>
                        
                             </div>
                        </div>
                    </div>

                    <div className="col-md-2 col-sm-2">
                         <div onClick={() => {this.clickItem('single family home')}}>
                              <div className="wrimagecard wrimagecard-topimage">
                                <div className="wrimagecard-topimage_header" onClick={() => {this.clickItem('exhibition')}}>
                                    <center>
                                        <img src="../images/PHR ICON ROOM/CONDO.png" style={{width: "100%"}}/>
                                    </center>
                                 </div>
                        
                             </div>
                        </div>
                    </div>

                    <div className="col-md-2 col-sm-2">
                        <div onClick={() => {this.clickItem('single family home')}}>
                              <div className="wrimagecard wrimagecard-topimage">
                                <div className="wrimagecard-topimage_header" onClick={() => {this.clickItem('exhibition')}}>
                                    <center>
                                        <img src="../images/PHR ICON ROOM/TOWN-HOUSE.png" style={{width: "100%"}}/>
                                    </center>
                                 </div>
                             </div>
                        </div>
                    </div>

                    <div className="col-md-2 col-sm-2">
                        <div onClick={() => {this.clickItem('single family home')}}>
                              <div className="wrimagecard wrimagecard-topimage">
                
                                <div className="wrimagecard-topimage_header" onClick={() => {this.clickItem('exhibition')}}>
                                    <center>
                                        <img src="../images/PHR ICON ROOM/HOME.png" style={{width: "100%"}}/>
                                    </center>
                                 </div>
                             </div>
                        </div>
                    </div>

                    {/*<div className="col-md-2 col-sm-2">
                        <div className="wrimagecard wrimagecard-topimage">
                            <div className="wrimagecard-topimage_header" onClick={() => {this.clickItem('sales and marketing')}}>
                                <center>
                                    <img src="../images/job-icons/sale-&-marketing.png"style={{width: "100%"}}/>
                                </center>
                            </div>
                        </div>
                    </div>*/}

                </div>
            </div>
        )
    }
}

export default connect()(RoomrentingIcon);
