import React, { Component } from 'react';
import './EntertainmentTabCategory.css';
import { Link } from "react-router-dom";
import { connect } from 'react-redux'
import axios from "axios/index";

class EntertainmentCategory extends Component {
    
    render() {
       
        
        return (
            <div className="">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="wrimagecard wrimagecard-topimage">
                            <div className="wrimagecard-topimage_headerEntertain1">
                                <center>
                                    
                                        <h3 className="categoryInnerText">Drama</h3>
                                    
                                    
                                </center>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="wrimagecard wrimagecard-topimage">
                            <div className="wrimagecard-topimage_headerEntertain2">
                                <center>
                                    <h3 className="categoryInnerText">Movies</h3>                               
                               </center>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="wrimagecard wrimagecard-topimage">
                            <div className="wrimagecard-topimage_headerEntertain3">
                                <center>
                                    <h3 className="categoryInnerText">News</h3>
                                </center>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="wrimagecard wrimagecard-topimage">
                            <div className="wrimagecard-topimage_headerEntertain4">
                                <center>
                                    <h3 className="categoryInnerText">Sports</h3>
                                </center>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect()(EntertainmentCategory);
