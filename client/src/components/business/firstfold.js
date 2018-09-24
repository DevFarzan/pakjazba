import React, { Component } from 'react';
import 'antd/dist/antd.css';
import './firstfold.css'


class Firstfold extends Component{
    render(){
        return(
            <div className="container">
                <h1 className="text-align" style={{fontWeight:"bold"}}>  What Do You Need To find? </h1>
                <div className="index-content">
                    <a href="blog-ici.html">
                        <div className="col-lg-3">
                            <div className="">
                                <img alt='' src="../images/icons/cafi.png" style={{width: "142%"}} />
                            </div>
                        </div>
                    </a>
                    <a href="blog-ici.html">
                        <div className="col-lg-3">
                            <div className="">
                                <img alt='' src="../images/icons/business.png" style={{width: "142%"}} />
                            </div>
                        </div>
                    </a>
                    <a href="blog-ici.html">
                        <div className="col-lg-3">
                            <div className="">
                                <img alt='' src="../images/icons/hospital.png" style={{width: "142%"}} />
                            </div>
                        </div>
                    </a>
                    <a href="blog-ici.html">
                        <div className="col-lg-3">
                            <div className="">
                                <img alt='' src="../images/icons/market.png" style={{width: "142%"}} />
                            </div>
                        </div>
                    </a>
                </div>
                <div className="index-content">
                    <a href="blog-ici.html">
                        <div className="col-lg-3">
                            <div className="">
                                <img alt='' src="../images/icons/restuarant.png" style={{width: "142%"}} />
                            </div>
                        </div>
                    </a>
                    <a href="blog-ici.html">
                        <div className="col-lg-3">
                            <div className="">
                                <img alt='' src="../images/icons/park.png" style={{width: "142%"}} />
                            </div>
                        </div>
                    </a>
                    <a href="blog-ici.html">
                        <div className="col-lg-3">
                            <div className="">
                                <img alt='' src="../images/icons/hatel.png " style={{width: "142%"}} />
                            </div>
                        </div>
                    </a>
                    <a href="blog-ici.html">
                        <div className="col-lg-3">
                            <div className="">
                                <img alt='' src="../images/icons/animal.png"  style={{width: "142%"}} />
                            </div>
                        </div>
                    </a>
                </div>
            </div>

        )
    }
}

export default Firstfold;
