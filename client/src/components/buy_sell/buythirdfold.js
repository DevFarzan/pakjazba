import React, { Component } from 'react';
import './buythirdfold.css'

class Thirdfold extends Component{
    render(){
        return(
            <div className="thirdfold">
                <h3> Selling With Us Is Easy </h3>
                <div className="row">
                    <div className="col-md-3">
                        <div className="media">
                            <div className="media-left">
                                <a href="">
                                    <img className="media-object" src="./images/the-right-to-e-read-your-library_110x100.png" alt="..."/>
                                </a>
                            </div>
                            <div className="media-body col-md-3">
                                <h4 className="text-white">Furniture</h4>
                                <p className="text-white">Bed, Sofa, Garden..</p>
                            </div>
                        </div>
                    </div>
                    {/*second card*/}
                    <div className="col-md-3">
                        <div className="media">
                            <div className="media-left">
                                <a href="">
                                    <img className="media-object-2" src="./images/the-right-to-e-read-your-library_110x100.png" alt="..."/>
                                </a>
                            </div>
                            <div className="media-body col-md-3">
                                <h4 className="text-white">Furniture</h4>
                                <p className="text-white">Bed, Sofa, Garden..</p>
                            </div>
                        </div>
                    </div>
                    {/*third card*/}
                    <div className="col-md-3">
                        <div className="media">
                            <div className="media-left">
                                <a href="">
                                    <img className="media-object-2" src="./images/the-right-to-e-read-your-library_110x100.png" alt="..."/>
                                </a>
                            </div>
                            <div className="media-body col-md-3">
                                <h4 className="text-white">Furniture</h4>
                                <p className="text-white">Bed, Sofa, Garden..</p>
                            </div>
                        </div>
                    </div>
                    {/*forth card*/}
                    <div className="col-md-3">
                        <div className="media">
                            <div className="media-left">
                                <a href="">
                                    <img className="media-object-2" src="./images/the-right-to-e-read-your-library_110x100.png" alt="..."/>
                                </a>
                            </div>
                            <div className="media-body col-md-3">
                                <h4 className="text-white">Furniture</h4>
                                <p className="text-white">Bed, Sofa, Garden..</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Thirdfold;
