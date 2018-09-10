import React, { Component } from 'react';
import "./headerroomrenting.css"
import {HttpUtils} from "../../Services/HttpUtils";

class Roomrenting1content extends Component{

    componentDidMount(){
        this.getAllBusiness()
    }

    async getAllBusiness(){
        var res = await HttpUtils.get('marketplace')
        console.log(res, '///////////////////')
        // this.setState({
        //     buySell: res.busell,
        //     showBuySell: res.busell.slice(0, 6)
        // })
    }

    render(){
        return(

            <section id="about">
                <div className="">
                    <div className="row about-container">
                        <div className="col-lg-4 col-md-4 col-sm-12 space-top" >
                            <div className="card outset" >
                                <img className="card-img-top" src="./images/black.jpg" alt="Card image" style={{"width":"100%"}} />
                                <div className="card-body space">
                                    <h4 className="card-title"><span className="glyphicon glyphicon-map-marker">Location</span></h4>
                                    <h4> $1700</h4>
                                    <div className="col-lg-5 col-md-5 col-sm-6" >
                                        <p className="card-text"><span className="glyphicon glyphicon-calendar">06-09-2018</span></p>
                                        <p className="card-text">Available From</p>
                                        <p className="card-text">Single Room</p>

                                    </div>
                                    <div className="col-lg-5 col-md-5 col-sm-6" >
                                        <p className="card-text"><span className="glyphicon glyphicon-user">Name</span></p>
                                        <p className="card-text">Male/Female</p>
                                        <p className="card-text">Area sq ft</p>

                                    </div>

                                    <div className="col-lg-12 col-md-12 col-sm-12" >
                                        <p className="card-text"><br />Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                    </div>
                                    <a href="#" className="btn btn-primary">See Profile</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>


        )
    }
}

export default Roomrenting1content;