import React, { Component } from 'react';
import './subscription-banner.css';


class Subscriptionbanner extends Component{
    render(){
        return(
            <section className="home-newsletter">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="single">
                                <h2>Gets The Latest Ads in your Inbox</h2>
                                <div className="input-group">
                                    <input type="email" className="form-control" placeholder="Enter your email"/>
                                    <span className="input-group-btn">
                                        <button className="btn btn-theme" type="submit">Subscribe</button>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default Subscriptionbanner;
