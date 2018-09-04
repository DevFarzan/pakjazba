import React, { Component } from 'react';
import 'antd/dist/antd.css';
import './secondfold.css'
import { Pagination } from 'antd';
import {HttpUtils} from "../../Services/HttpUtils";


class Secondfold extends Component{
    constructor(props){
        super(props);
        this.state = {
            current: 1,
            business: [],
            showBusiness: []
        }
    }

    componentDidMount(){
        this.getAllBusiness()
    }

    async getAllBusiness(){
        var res = await HttpUtils.get('marketplace')
        this.setState({
            business: res.business,
            showBusiness: res.business.slice(0, 6)
        })
    }

    funcIndexes(page){
        var to = 6 * page + 1;
        var from = to - 6;
        return {from: page === 1 ? 0 : from, to: page === 1 ? 6 : to}

    }

    onChange = (page) => {
        const { business, showBusiness } = this.state;
        var indexes = this.funcIndexes(page)
        console.log(indexes, 'indexessssss')
        this.setState({
            current: page,
            showBusiness: business.slice(indexes.from, indexes.to)
        });
    }

    render(){
        const { business, showBusiness } = this.state;
        console.log(business, 'reqqqqqqqqqqqq')
        console.log(showBusiness, 'showBusiness')

        return(
            <div className="secondfold">
                <h1 className="text-align"> Great Places </h1>
                <div className="index-content">
                    <div className="row">
                        {showBusiness && showBusiness.map((elem) => {
                            return (<a href="blog-ici.html">
                            <div className="col-md-4"  style={{'marginBottom': '30px'}}>
                                <div className="card">
                                    <img src="http://cevirdikce.com/proje/hasem-2/images/finance-1.jpg"/>
                                    <h4>{elem.businessname}</h4>
                                    <p>{elem.description}</p>
                                    <a href="blog-ici.html" className="blue-button">Read More</a>
                                </div>
                            </div>
                        </a>)
                        })}
                    </div>
                    <Pagination defaultCurrent={1} total={business.length} onChange={this.onChange} />
                </div>
            </div>
        )
    }
}

export default Secondfold;
