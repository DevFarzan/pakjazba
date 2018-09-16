import React, { Component } from 'react';
import { Carousel } from 'antd';
import './buydetailfirstfold.css'

class Buydetailfirstfold extends Component{
    render(){
        let data = this.props.data;
        let images = this.props.data.images;
        return(
            <div className="">
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
                <h3 className="heading-padding"> Location </h3>
                <div className="googlemap">
                </div>
            </div>
        )
    }
}

export default Buydetailfirstfold;
