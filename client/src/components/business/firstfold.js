import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Row, Col } from 'antd';
import './firstfold.css'



class Firstfold extends Component{
 render(){
  return(
    <div className="container">
    <h1 className="text-align">  What Do You Need To find? </h1>
      <div className="index-content">
          <a href="blog-ici.html">
              <div className="col-lg-3">
                  <div className="card">
                      <img src="http://cevirdikce.com/proje/hasem-2/images/finance-2.jpg"/>
                  </div>
              </div>
          </a>
          <a href="blog-ici.html">
              <div className="col-lg-3">
                  <div className="card">
                      <img src="http://cevirdikce.com/proje/hasem-2/images/finance-2.jpg"/>
                  </div>
              </div>
          </a>
          <a href="blog-ici.html">
              <div className="col-lg-3">
                  <div className="card">
                      <img src="http://cevirdikce.com/proje/hasem-2/images/finance-3.jpg"/>
                  </div>
              </div>
          </a>

          <a href="blog-ici.html">
              <div className="col-lg-3">
                  <div className="card">
                      <img src="http://cevirdikce.com/proje/hasem-2/images/finance-1.jpg"/>
                  </div>
              </div>
          </a>

      </div>

      <div className="index-content">
        <a href="blog-ici.html">
            <div className="col-lg-3">
                <div className="card">
                    <img src="http://cevirdikce.com/proje/hasem-2/images/finance-3.jpg"/>
                </div>
            </div>
        </a>
        <a href="blog-ici.html">
            <div className="col-lg-3">
                <div className="card">
                    <img src="http://cevirdikce.com/proje/hasem-2/images/finance-1.jpg"/>
                </div>
            </div>
        </a>
        <a href="blog-ici.html">
            <div className="col-lg-3">
                <div className="card">
                    <img src="http://cevirdikce.com/proje/hasem-2/images/finance-2.jpg"/>
                </div>
            </div>
        </a>

        <a href="blog-ici.html">
            <div className="col-lg-3">
                <div className="card">
                    <img src="http://cevirdikce.com/proje/hasem-2/images/finance-2.jpg"/>
                </div>
            </div>
        </a>
      </div>
    </div>

    )
  }
}

export default Firstfold;
