import React, { Component } from 'react';
import { Carousel } from 'antd';
import './buydetailfirstfold.css'

class Buydetailfirstfold extends Component{
    render(){
        console.log(this.props.data, 'propssssssssssss')
        var data = this.props.data;
        var images = this.props.data.images;
        return(
            <div className="">
                <h3 className="heading-padding"> Gallery </h3>
                <Carousel autoplay>
                    {images && images.map((elem) => {
                        return(
                            <div>
                            <img src={elem}/>
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
                <div className="features">
                    <h3 className="heading-padding">Features</h3><br/>
                    <label className="customcheck">
                        <input type="checkbox" defaultChecked="checked"/>
                        <span className="checkmark"> <p className="text-features">Quality Wood</p> </span>
                    </label>
                    <label className="customcheck">
                        <input type="checkbox"/>
                        <span className="checkmark"> <p className="text-features">Quality Wood</p>  </span>
                    </label>
                    <label className="customcheck">
                        <input type="checkbox"/>
                        <span className="checkmark"> <p className="text-features">Quality Wood</p>  </span>
                    </label>
                    <label className="customcheck">
                        <input type="checkbox"/>
                        <span className="checkmark"><p className="text-features">Quality Wood</p> </span>
                    </label>
                    <label className="customcheck">
                        <input type="checkbox"/>
                        <span className="checkmark"><p className="text-features">Quality Wood</p> </span>
                    </label>
                    <label className="customcheck">
                        <input type="checkbox"/>
                        <span className="checkmark"><p className="text-features">Quality Wood</p> </span>
                    </label>
                </div>
            </div>
        )
    }
}

export default Buydetailfirstfold;
