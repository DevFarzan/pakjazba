import React, { Component } from 'react';
import { Carousel } from 'antd';
import "./roomrenting2content.css";

class Roomrenting3contentarea extends Component{
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    componentDidMount(){
    }

    render(){
        console.log(this.props.data, 'dataaaaaaaaaaaaaaaa1234567890')
        const { data } = this.props;
        let images = data.imageurl;
        return(
            <div>
                <div classNameName="head-bg" >
                    <div classNameName="col-md-12">
                        <h2 classNameName="head-space">Luxary Room Available </h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 col-sm-12 col-xs-12">
                        <div className="col-md-2 col-sm-12 col-xs-12">
                        </div>
                        <div className="col-md-10 col-sm-12 col-xs-12">
                            <div className="col-md-3 col-sm-6 col-xs-12">
                                <h4> <span className="glyphicon glyphicon-calendar"></span>{data.startdate}</h4>
                                <h4> Available From</h4>
                            </div>
                            <div className="col-md-3 col-sm-6 col-xs-12">
                                <h4> <span className="glyphicon glyphicon-user"></span>{data.contactname}</h4>
                                <h4> Male/Female</h4>
                            </div>
                            <div className="col-md-3 col-sm-6 col-xs-12">
                                <h4> Single Room</h4>
                                <h4> Area Sq ft</h4>
                            </div>
                            <div className="col-md-3 col-sm-6 col-xs-12">
                                <h3> Furnished Room</h3>
                                <h4><span className="glyphicon glyphicon-map-marker"></span>{data.propertylocation}</h4>
                                <h3><span className="glyphicon glyphicon-usd"></span>{data.rent}</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-10 col-sm-12 col-xs-12">
                    <div className="row">
                        <div className="col-md-12">
                            <Carousel autoplay>
                                {images && images.map((elem) => {
                                    return(
                                        <div>
                                            <img src={elem}/>
                                        </div>
                                    )
                                })}
                            </Carousel>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 col-sm-12 col-xs-12 des-space">
                        <h3> Description </h3>
                        <p>{data.discription}</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 col-sm-12 col-xs-12 des-space">
                        <div className="col-md-4 col-sm-12 col-xs-12 des-space">
                            <h3> Details </h3>
                            <p><b>Date Added:</b> 09-07-2018</p>
                            <p><b>Type:</b> Offer</p>
                            <p><b>Status:</b> Used</p>
                            <p><b>First Owner:</b> Yes</p>
                            <p><b>Material:</b> Wood</p>
                            <p><b>Color:</b> White</p>
                        </div>
                        <div className="col-md-4 col-sm-12 col-xs-12 des-space">
                            <h3>Location </h3>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3621.6337348509687!2d67.03749541472551!3d24.807992284078704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33da992be1aa7%3A0x7646411a2d8e6ac5!2sKRL+Creatives!5e0!3m2!1sen!2s!4v1536302761580" width="600" height="400" frameborder="0" style={{"border":"0"}} allowfullscreen></iframe>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 col-sm-12 col-xs-12 des-space">
                        <h3> Features </h3>
                        <div className="col-md-3 col-sm-12 col-xs-12 ">
                            <div className="checkbox">
                                <h4> <label><input type="checkbox" value="" checked="checked"/>Quality Wood</label> </h4>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-12 col-xs-12 ">
                            <div className="checkbox">
                                <h4> <label><input type="checkbox" value="" checked="checked"/>Form Mattres</label> </h4>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-12 col-xs-12 ">
                            <div className="checkbox">
                                <h4> <label><input type="checkbox" value="" checked="checked"/>3 Fold Pull Out</label> </h4>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-12 col-xs-12 ">
                            <div className="checkbox">
                                <h4> <label><input type="checkbox" value="" checked="checked"/>Almunium</label> </h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 col-sm-12 col-xs-12 ">
                        <div className="col-md-3 col-sm-12 col-xs-12 ">
                            <div className="checkbox">
                                <h4> <label><input type="checkbox" value="" checked="checked"/>Handles</label> </h4>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-12 col-xs-12 ">
                            <div className="checkbox">
                                <h4> <label><input type="checkbox" value="" checked="checked"/>Detachable</label> </h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 col-sm-12 col-xs-12 des-space auther-border ">
                        <h3> Author </h3>
                        <div className="">
                            <div className="col-md-6 col-sm-12 col-xs-12">
                                <img src={data.userImage && data.userImage.length ? data.userImage : '../images/images.jpg'} class="img-circle" alt="" height="200" width="200"/>
                                <hr/>
                                <br/>
                                <h4><b> Phone: </b> 830-247-0972</h4>
                                <h4><b> Email: </b> asad@example.com</h4>
                            </div>
                            <div className="col-md-6 col-sm-12 col-xs-12">
                                <form action="#">
                                    <div className="form-group">
                                        <label for="Name">Name:</label>
                                        <input type="text" className="form-control" id=""/>
                                    </div>
                                    <div className="form-group">
                                        <label for="email">Email address:</label>
                                        <input type="email" className="form-control" id=""/>
                                    </div>
                                    <div className="form-group">
                                        <label for="Phone">Phone:</label>
                                        <input type="num" className="form-control" id=""/>
                                    </div>
                                    <div className="form-group">
                                        <label for="Massage">Massage:</label>
                                        <textarea className="form-control"> </textarea>
                                    </div>
                                    <button type="submit" className="btn search-btn">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Roomrenting3contentarea;

