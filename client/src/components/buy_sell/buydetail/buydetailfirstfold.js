import React, { Component } from 'react';
import { Carousel } from 'antd';
import './buydetailfirstfold.css'

class Buydetailfirstfold extends Component{
    render(){
        let data = this.props.data;
        console.log(data, 'lllllllllllllllll');
        let images = this.props.data.images;
        return(
            <div className="">
              <div className="row" style={{padding:"10px"}}>
                <div className="col-md-6" style={{paddingLeft:"0px"}}>
                  <h2 className="">{data.subcategory || data.category} For Sale  </h2>
                  <div className="location-padding" style={{marginTop:"-26px", marginLeft:"-4px"}}>
                  <i className="buyicon glyphicon-map-marker" style={{color: "#008080",marginLeft: "0", left:"0"}} /><p className="textforparagraph" style={{color: "black",marginLeft: "27", marginTop:"-30"}}>{data.city}</p>
                  </div>
                </div>

                <div className="col-md-6" style={{textAlign:"right"}}>
                  <h3> ${data.price} </h3>
                </div>
              </div>
                <h3 className="heading-padding"> Gallery </h3>
                <Carousel autoplay>
                    {images && images.map((elem, key) => {
                        return(
                            <div key={key}>
                            <img alt='' src={elem}/>
                            </div>
                        )
                    })}
                </Carousel>
                <div>
                    <h3 className="heading-padding"> Description </h3>
                    <p>{data.description}</p>
                </div>
                <div className="row" style={{padding:"0px"}}>

                        <div className="col-md-4 col-sm-12 col-xs-12 des-space">
                            <h3> Details </h3>
                            <p><b>Condition:</b>{data.condition}</p>
                            <p><b>Model Make:</b>{data.modelmake}</p>
                            <p><b>Model Name:</b>{data.modelname}</p>
                            <p><b>Model Number:</b>{data.modelnumber}</p>
                            <p><b>Type:</b>{data.subcategory}</p>
                        </div>
                        <div className="col-md-8 col-sm-12 col-xs-12 des-space">
                            <h3>Location </h3>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3621.6337348509687!2d67.03749541472551!3d24.807992284078704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33da992be1aa7%3A0x7646411a2d8e6ac5!2sKRL+Creatives!5e0!3m2!1sen!2s!4v1536302761580" width="100%" height="400" frameborder="0" style={{"border":"0"}} allowfullscreen></iframe>
                        </div>

                </div>
            </div>
        )
    }
}

export default Buydetailfirstfold;
