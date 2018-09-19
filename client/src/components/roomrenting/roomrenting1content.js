import React, { Component } from 'react';
import "./headerroomrenting.css";
import { Pagination } from 'antd';
import {Link} from "react-router-dom";
import {HttpUtils} from "../../Services/HttpUtils";

class Roomrenting1content extends Component{
    constructor(props) {
        super(props);
        this.state = {
            roomrents: [],
            showroomrents: [],
            filteredArr: [],
            loader: true
        }
    }

    componentDidMount(){
        this.getAllBusiness()
    }

    async getAllBusiness(){
        let res = await HttpUtils.get('marketplace')
        this.setState({
            roomrents: res ? res.roomrentsdata : [],
            showroomrents: res ? res.roomrentsdata.slice(0, 6) : [],
            loader: false
        })
    }

    funcIndexes(page){
        let to = 6 * page;
        let from = to - 6;
        return {from: page === 1 ? 0 : from, to: page === 1 ? 6 : to}
    }

    onChange = (page) => {
        const { roomrents, filteredArr } = this.state;
        let indexes = this.funcIndexes(page)

        if(!!filteredArr.length){
            this.setState({
                current: page,
                showroomrents: filteredArr.slice(indexes.from, indexes.to)
            });
        }else {
            this.setState({
                current: page,
                showroomrents: roomrents.slice(indexes.from, indexes.to)
            });
        }
    }

    render(){
        const { showroomrents, filteredArr, roomrents } = this.state;

        return(
            <section id="about">
                <div className="">
                    <div className="row">
                        {showroomrents && showroomrents.map((elem, key) => {
                            let str = elem.propertylocation || '';
                            if(str.length > 25) {
                                str = str.substring(0, 25);
                                str = str + '...'
                            }
                            let des = elem.discription || '';
                            if(des.length > 100) {
                                des = des.substring(0, 100);
                                des = des + '...'
                            }
                            return(
                                <Link key={key} to={{pathname: `/detail_roomRent`, state: elem}}>
                                    <div className="col-md-4">
                                        <div className="ibox">
                                            <div className="ibox-content product-box">
                                                <div className="product-imitation">
                                                    <div className="card2">
                                                        <img alt='' src={elem.imageurl.length ? elem.imageurl[0] : './images/def_card_img.jpg'}/>
                                                        <span className="card-button" style={{width: "200px"}}>
                                                            <p className="categories-on-card" style={{backgroundColor:"#008080",textAlign: "center",width: "190px",marginBottom: "6px"}}>{elem.category}</p>
                                                            <i className="glyphicon glyphicon-map-marker" style={{color: "#008080",marginLeft: "-2px"}} /><p className="text" style={{color: "white",marginLeft: "14px"}}>{elem.state +" & "+ elem.city}</p>
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="cust-margin" style={{marginTop: "36px"}}>
                                                    <i className="glyphicon glyphicon-calendar" style={{color:"#008080"}} />
                                                <span className="text" style={{color: "#000000c7"}}>{elem.Date}</span>
                                                <i className="glyphicon glyphicon-user" style={{color:"#008080",marginLeft: "71px"}} />
                                                <span className="text" style={{color: "#000000c7"}}>{elem.contactname}</span>
                                                </div>
                                                <div className="product-desc">
                                                    <span className="product-price">{elem.rent}</span>
                                                    <div className="product-name" style={{"fontSize": "14px"}}>{des}</div>
                                                    <div className="m-t text-righ" style={{marginTop:"58px",fontSize: "18px",textDecoration:"underline"}}>
                                                        <Link to={{pathname: `/detail_roomRent`, state: elem}} className="" style={{color:"red"}}>Detail</Link>
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
                    {this.state.loader && <div className="col-md-12" style={{textAlign: 'center'}}>
                        <img alt='' src={'./images/defLoader.apng'}/>
                    </div>}
                    {!!showroomrents.length && <span style={{textAlign:"center"}}><Pagination defaultCurrent={1} defaultPageSize={6} total={!!filteredArr.length ? filteredArr.length : roomrents.length} onChange={this.onChange} /></span>}
                </div>
            </section>
        )
    }
}

export default Roomrenting1content;
