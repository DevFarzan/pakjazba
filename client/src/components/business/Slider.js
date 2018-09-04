import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Row, Col } from 'antd';
import { Button } from 'antd';


class Slider extends Component{
 render(){
   return (
     <div>
     
            <div style={{backgroundImage: 'url(https://images.alphacoders.com/633/633643.jpg)',"height": "407px","margin-top": "-19px"}}>
              <p className="paragragh-text">Lorem Forem</p>
              <h1 className="text-h1">Lorem Forem</h1>
                <section className="home-newsletter">
                     <div className="container">
                       <div className="row">
                         <div className="col-md-12 col-sm-12 col-xs-12">
                             <div className="single">
                                <div className="input-group">
                                <input type="email" className="form-control" placeholder="Enter your email"/>
                                <span className="input-group-btn">
                                <button className="btn btn-theme" type="submit">Search</button>
                                </span>
                               </div>
                             </div>
                         </div>
                       </div>
                     </div>
                 </section>
            </div>
    </div>
  );
 }
}

export default Slider;
