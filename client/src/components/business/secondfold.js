import React, { Component } from 'react';
import 'antd/dist/antd.css';
//import { Row, Col } from 'antd';
import './secondfold.css'


class Secondfold extends Component{
 render(){
  return(
    <div className="secondfold">
      <h1 className="text-align"> Great Places </h1>
        <div className="index-content">
        <div className="row">
            <a href="blog-ici.html">
                <div className="col-md-4 ">
                    <div className="card">
                        <img src="http://cevirdikce.com/proje/hasem-2/images/finance-1.jpg"/>
                        <h4>Investment Strategy</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <a href="blog-ici.html" className="blue-button">Read More</a>
                    </div>
                </div>
            </a>

            <a href="blog-ici.html">
                <div className="col-md-4">
                    <div className="card">
                        <img src="http://cevirdikce.com/proje/hasem-2/images/finance-2.jpg"/>
                        <h4>Investment Strategy</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <a href="blog-ici.html" className="blue-button">Read More</a>
                    </div>
                </div>
            </a>

            <a href="blog-ici.html">
                <div className="col-md-4">
                    <div className="card">
                        <img src="http://cevirdikce.com/proje/hasem-2/images/finance-3.jpg"/>
                        <h4>Investment Strategy</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <a href="blog-ici.html" className="blue-button">Read More</a>
                    </div>
                </div>
            </a>
            </div>
        </div>

        <div className="index-content">
        <div className="row">
            <a href="blog-ici.html">

                <div className="col-md-4">
                    <div className="card">
                        <img src="http://cevirdikce.com/proje/hasem-2/images/finance-1.jpg"/>
                        <h4>Investment Strategy</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <a href="blog-ici.html" className="blue-button">Read More</a>
                    </div>
                </div>
            </a>

            <a href="blog-ici.html">
                <div className="col-md-4">
                    <div className="card">
                        <img src="http://cevirdikce.com/proje/hasem-2/images/finance-2.jpg"/>
                        <h4>Investment Strategy</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <a href="blog-ici.html" className="blue-button">Read More</a>
                    </div>
                </div>
            </a>

            <a href="blog-ici.html">
                <div className="col-md-4">
                    <div className="card">
                        <img src="http://cevirdikce.com/proje/hasem-2/images/finance-3.jpg"/>
                        <h4>Investment Strategy</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <a href="blog-ici.html" className="blue-button">Read More</a>
                    </div>
                </div>
            </a>
        </div>
        </div>
    </div>
  )
}
}

export default Secondfold;
