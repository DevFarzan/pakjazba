import React, { Component } from 'react';
import './buysecondfold.css'
import {HttpUtils} from "../../Services/HttpUtils";
import { Pagination, Spin, Icon } from 'antd';
import { connect } from 'react-redux'
import {Link} from "react-router-dom";

class Forthfold extends Component{
    constructor(props){
        super(props);
        this.state = {
            current: 1,
            buySell: [],
            showBuySell: [],
            filteredArr: [],
            searchValue: '',
            loader: true,
            add: 5
        }
    }

    componentDidMount(){
        this.getAllBusiness()
    }

    componentDidUpdate(prevProps, prevState){
        const { buySell } = this.state;
        const { text } = this.props;
        if(prevProps.text !== text){
            if(!!text){
                this.searchedArr(text)
            }else {
                this.setState({
                    showBuySell: buySell.slice(0, 5),
                    filteredArr: [],
                    add: 5
                })
            }
        }
    }

    searchedArr(text){
        const { buySell } = this.state;
        let filteredArr = buySell.filter((elem) => {
            return (elem.category && elem.category.toLowerCase().includes(text.toLowerCase())) ||
                (elem.subcategory && elem.subcategory.toLowerCase().includes(text.toLowerCase()))
        })
        this.setState({
            filteredArr,
            showBuySell: filteredArr.slice(0, 5),
            add: 5
        })
    }

    async getAllBusiness(){
        let res = await HttpUtils.get('marketplace')
        this.setState({
            buySell: res.busell,
            showBuySell: res.busell.slice(0, 5),
            loader: false
        })
    }

    funcIndexes(page){
        let to = 6 * page;
        let from = to - 6;
        return {from: page === 1 ? 0 : from, to: page === 1 ? 6 : to}
    }

    onChange = (page) => {
        const { buySell, filteredArr } = this.state;
        let indexes = this.funcIndexes(page)
        if(!!filteredArr.length){
            this.setState({
                current: page,
                showBuySell: filteredArr.slice(indexes.from, indexes.to)
            });
        }else {

            this.setState({
                current: page,
                showBuySell: buySell.slice(indexes.from, indexes.to)
            });
        }
    }

    onAddMore = () => {
        const { add, buySell, filteredArr } = this.state;
        if(!!filteredArr.length){
            this.setState({
                showBuySell: filteredArr.slice(0, add + 6),
                add: add + 6
            });
        }else {

            this.setState({
                showBuySell: buySell.slice(0, add + 6),
                add: add + 6
            });
        }
        if(this.props.text.length){
            let inputValue = '';
            const { dispatch } = this.props;
            dispatch({type: 'SEARCHON', inputValue})
        }
    }

    render(){
        const { buySell, showBuySell, filteredArr } = this.state;
        const { text } = this.props;
        const antIcon = <Icon type="loading" style={{ fontSize: 120 }} spin />;

        return(
            <div className="secondfold">
                <Link to={{pathname: `/postad_buysell`}}>
                    <div className="col-md-4"  style={{'marginTop': '21px', height: '520px' }}>
                        <img alt='' src='./images/blank-card.png' style={{border: '1px solid #3a252542', height: '100%', width: '100%', borderRadius: '13px'}}/>
                    </div>
                </Link>
                <div className="row">
                    {showBuySell && showBuySell.map((elem, key) => {
                        let str = elem.address || '';
                        if(str.length > 25) {
                            str = str.substring(0, 25);
                            str = str + '...'
                        }
                        let des = elem.description || '';
                        if(des.length > 45) {
                            des = des.substring(0, 45);
                            des = des + '...'
                        }
                        return (
                            <Link key={key} to={{pathname: `/detail_buySell`, state: elem}}>
                                <div className="col-md-4">
                                    <div className="ibox">
                                        <div className="ibox-content product-box">
                                            <div className="product-imitation">
                                                <div className="card2">
                                                    <img alt='' src={elem.images.length ? elem.images[0] : './images/def_card_img.jpg'}/>
                                                    <span className="card-button">
                                                        <p className="categories-on-card" style={{backgroundColor:"#008080",textAlign: "center"}}>{elem.category}</p>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="cust-margin">
                                                {/*<i className="glyphicon glyphicon-calendar" style={{color:"#008080"}} />
                                                <span className="text" style={{color: "#000000c7"}}>{elem.Date}</span>
                                                <i className="glyphicon glyphicon-user" style={{color:"#008080",marginLeft: "71px"}} />
                                                <span className="text" style={{color: "#000000c7"}}>{elem.contactname}</span>*/}
                                            </div>
                                            <div className="product-desc">
                                                <span className="product-price">{!elem.hideprice ? elem.price : 'Hide'}</span>
                                                <p className="product-name">{elem.contactname}</p>
                                                <div className="small m-t-xs">{!elem.hideaddress ? des : ''}
                                                </div>
                                                <div className="m-t text-righ" style={{marginTop:"58px",fontSize: "18px",textDecoration:"underline"}}>
                                                    <Link to={{pathname: `/detail_buySell`, state: elem}} className="" style={{color:"red"}}>Detail</Link>
                                                    <div className="location-padding">
                                                    <i className="buyicon glyphicon-map-marker" style={{color: "#008080",marginLeft: "0", left:"0"}} /><p className="text" style={{color: "black",marginLeft: "27", marginTop:"-30"}}>{elem.state +" & "+ elem.city}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        )
                    })}
                </div>
                {this.state.loader && <div className="col-md-12" style={{textAlign: 'center', marginLeft: '-50px', marginBottom: '20px'}}>
                    <Spin indicator={antIcon} />
                </div>}
                {text && !!filteredArr.length === false &&<span style={{textAlign:"center"}}><h1>Not found....</h1></span>}
                {text && !!filteredArr.length === false &&<span style={{textAlign:"center"}}><h5>you can find your search by type</h5></span>}
                <div className="col-md-12" style={{textAlign:"center"}}><button type="button" className="btn btn-success" onClick={this.onAddMore}>View More ...</button></div>
                {/*!!showBuySell.length && <span style={{textAlign:"center"}}><Pagination defaultCurrent={1} defaultPageSize={6} total={!!filteredArr.length ? filteredArr.length :buySell.length} onChange={this.onChange} /></span>*/}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return({
        text: state.text
    })
}

export default connect(mapStateToProps)(Forthfold);
