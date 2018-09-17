import React, { Component } from 'react';
import './footer.css'

class Footer extends Component{
    render(){
        return(
            <footer id="myFooter">

                <div className="container">
                    <div className="row">
                        <div className="col-sm-3">
                            <h5>Get started</h5>
                            <ul>
                                <li><a href="">Home</a></li>
                                <li><a href="">Sign up</a></li>
                                <li><a href="">Downloads</a></li>
                            </ul>
                        </div>
                        <div className="col-sm-3">
                            <h5>About us</h5>
                            <ul>
                                <li><a href="">Company Information</a></li>
                                <li><a href="">Contact us</a></li>
                                <li><a href="">Reviews</a></li>
                            </ul>
                        </div>
                        <div className="col-sm-3">
                            <h5>Support</h5>
                            <ul>
                                <li><a href="">FAQ</a></li>
                                <li><a href="">Help desk</a></li>
                                <li><a href="">Forums</a></li>
                            </ul>
                        </div>
                        <div className="col-sm-3 info">
                            <h5>Information</h5>
                            <p> Lorem ipsum dolor amet, consectetur adipiscing elit. Etiam consectetur aliquet aliquet. Interdum et malesuada fames ac ante ipsum primis in faucibus. </p>
                        </div>
                    </div>
                </div>
                {/*<div className="second-bar">
                    <div className="container">
                        <h2 className="logo"><a href=""> LOGO </a></h2>
                        <div className="social-icons">
                            <a href="" className="twitter"><i className="fa fa-twitter"></i></a>
                            <a href="" className="facebook"><i className="fa fa-facebook"></i></a>
                            <a href="" className="google"><i className="fa fa-google-plus"></i></a>
                        </div>
                    </div>
                </div>*/}
            </footer>
        )
    }
}

export default Footer;
