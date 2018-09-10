import React, { Component } from 'react';
import "./headerroomrenting.css";
import { connect } from 'react-redux';
import {Link} from "react-router-dom";
import {HttpUtils} from "../../Services/HttpUtils";

class Roomrenting1content extends Component{
    constructor(props) {
        super(props);
        this.state = {
            roomrents: [],
            showroomrents: []
        }
    }
    componentDidMount(){
        this.getAllBusiness()
    }

    async getAllBusiness(){
        var res = await HttpUtils.get('marketplace')
        console.log(res, '///////////////////')
        this.setState({
            roomrents: res.roomrentsdata,
            showroomrents: res.roomrentsdata.slice(0, 10)
        })
    }

    render(){
        const { showroomrents } = this.state;
        console.log()
        return(
            <section id="about">
                <div className="secondfold">
                    <div className="row">
                        {showroomrents && showroomrents.map((elem) => {
                            console.log(elem, 'elemmmmmmmmmmmmmmm')
                            let str = elem.propertylocation;
                            if(str.length > 25) {
                                str = str.substring(0, 25);
                                str = str + '...'
                            }
                            let des = elem.discription;
                            if(des.length > 100) {
                                des = des.substring(0, 100);
                                des = des + '...'
                            }
                            return(
                                <Link to={{pathname: `/detail_roomRent`, state: elem}}>
                                    <div className="col-md-4">
                                        <div className="ibox">
                                            <div className="ibox-content product-box">
                                                <div className="product-imitation">
                                                    <div className="card2">
                                                        <img src={elem.imageurl[0]}/>
                                                        <span className="card-button">
                                                <p className="categories-on-card">{elem.category}</p>
                                                <i className="glyphicon glyphicon-map-marker"/><p className="text">{elem.state +" & "+ elem.city}</p>
                                            </span>
                                                    </div>
                                                </div>
                                                <div className="cust-margin">
                                                    <i className="glyphicon glyphicon-home"/>
                                                    <p className="text">{str}</p>
                                                </div>
                                                <div className="product-desc">
                                                    <span className="product-price">{elem.rent}</span>
                                                    <small className="text-muted">Category</small>
                                                    <a href="#" className="product-name">{elem.category}</a>
                                                    <div className="small m-t-xs">{des}</div>
                                                    <div className="m-t text-righ">
                                                        <Link to={{pathname: `/detail_buySell`}} className="btn btn-xs btn-outline btn-primary">Info <i className="fa fa-long-arrow-right"></i> </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            )
                        })
                        }
                    </div>
                </div>
            </section>
        )
    }
}

export default Roomrenting1content;