import React, { Component } from 'react';
import './entertainmenthome.css';

class EntertainmentHome extends Component{
  render(){
    return(
      <div class="container" style={{width:"100%"}}>
        <h3 class="text-center">has taken so much from this site, hope this one be my contribution for <small>bootsnip</small></h3>
        <hr/>
        <div class="row">
	        <div class="col-sm-12 col-md-6 col-lg-6  py-0 pl-3 pr-1 featcard">
  	        <div id="featured" class="carousel slide carousel-fade" data-ride="carousel">
              <div class="carousel-inner">
                <div class="carousel-item active">
                	<div class="card bg-dark text-white">
    		              <img class="card-img img-fluid" src="http://admin.makro.id/media/post_img_sm/review-gsp-amerika-ingin-perdagangan-yang-adil-dan-saling-menguntungkan-1531307731.jpg" alt=""/>
                    <div class="card-img-overlay d-flex linkfeat">
      	               <a href="http://makro.id/review-gsp-amerika-ingin-perdagangan-saling-menguntungkan" class="align-self-end">
      		        	      <span class="badge">Ekspor</span>
      	                  <h4 class="card-title">Review GSP: Amerika Ingin Perdagangan Saling Menguntungkan</h4>
      	                  <p class="textfeat" style={{display:"none"}}>makro.id – Duta Besar Amerika Serikat untuk Indonesia Joseph R. Donovan menegaskan, langkah pemerintah Amerika Serikat meninjau ulang pemberian Generalized System od Preferenes (GSP) akan menguntungkan kedua belah pihak.
                          Menurut Donovan,</p>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div classaName="col-md-3">
          </div>
          <div classaName="col-md-3">
          </div>
        </div>
      </div>
    )
  }
};

export default EntertainmentHome;
