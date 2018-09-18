import React, { Component } from 'react';
import './buythirdfold.css'

class Thirdfold extends Component{
    render(){
        return(
            <div className="thirdfold" style={{backgroundColor:"#008080"}}>
                <h3 style={{color:"white"}}> Selling With Us Is Easy </h3>
                <div className="row">
                    <div className="col-md-3">
                        <div className="media">
                            <div className="media-left">
                                <a>
                                    <img alt='' className="media-object" src="../images/how to upload/profile.png" alt="..." style={{width:"100px"}}/>
                                </a>
                            </div>
                            <div className="media-body col-md-3" style={{marginLeft: "-15px"}}>
                                <h4 className="text-white">Create an Account</h4>
                            </div>
                        </div>
                    </div>
                    {/*second card*/}
                    <div className="col-md-3">
                        <div className="media">
                            <div className="media-left">
                                <a>
                                    <img  alt='' className="media-object-2" src="../images/how to upload/upload.png" alt="..." style={{width:"100px"}}/>
                                </a>
                            </div>
                            <div className="media-body col-md-3" style={{marginLeft: "-15px"}}>
                                <h4 className="text-white">Submit Your Add</h4>
                            </div>
                        </div>
                    </div>
                    {/*third card*/}
                    <div className="col-md-3">
                        <div className="media">
                            <div className="media-left">
                                <a>
                                    <img alt='' className="media-object-2" src="../images/how to upload/deal-done.png" alt="..." style={{width:"100px"}}/>
                                </a>
                            </div>
                            <div className="media-body col-md-3">
                                <h4 className="text-white">Make A Deal</h4>
                            </div>
                        </div>
                    </div>
                    {/*forth card*/}
                    <div className="col-md-3">
                        <div className="media">
                            <div className="media-left">
                                <a>
                                    <img alt='' className="media-object-2" src="../images/how to upload/payment.png" alt="..." style={{width:"100px"}} />
                                </a>
                            </div>
                            <div className="media-body col-md-3">
                                <h4 className="text-white">Enjoy The Money</h4>
                                {/*<p className="text-white">Bed, Sofa, Garden..</p>*/}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Thirdfold;
