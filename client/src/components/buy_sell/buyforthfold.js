import React, { Component } from 'react';
import './buysecondfold.css'
import {HttpUtils} from "../../Services/HttpUtils";
import { Pagination, Spin, Icon, Modal } from 'antd';
import { connect } from 'react-redux';
import AsyncStorage from "@callstack/async-storage/lib/index";
import { Redirect } from 'react-router';
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
            add: 5,
            user: false,
            visible: false
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
                    showBuySell: buySell.slice(0, 7),
                    filteredArr: [],
                    add: 7
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
            showBuySell: filteredArr.slice(0, 7),
            add: 7
        })
    }

    async getAllBusiness(){
        let res = await HttpUtils.get('marketplace')
        this.setState({
            buySell: res.busell,
            showBuySell: res.busell.slice(0, 7),
            loader: false
        })
        this.handleLocalStorage();
    }

    handleLocalStorage = () =>{
        AsyncStorage.getItem('user')
            .then((obj) => {
                let userObj = JSON.parse(obj)
                if(!!userObj){
                    this.setState({
                        user: true,
                    })
                }
                else {
                    this.setState({
                        user: false
                    })
                }
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
                showBuySell: filteredArr.slice(0, add + 7),
                add: add + 7
            });
        }else {

            this.setState({
                showBuySell: buySell.slice(0, add + 7),
                add: add + 7
            });
        }
        if(this.props.text.length){
            let inputValue = '';
            const { dispatch } = this.props;
            dispatch({type: 'SEARCHON', inputValue})
        }
    }

    clickItem(){
        const { user } = this.state;
        if(user){
            this.setState({goDetail: true})
        }else {
            this.setState({visible: true})
        }
    }

    handleCancel = (e) => {
        this.setState({visible: false});
    }

    handleLogin = (e) => {
        this.setState({goForLogin: true, visible: false})
    }

    render(){
        const { buySell, showBuySell, filteredArr, goForLogin, goDetail } = this.state;
        const { text } = this.props;
        const antIcon = <Icon type="loading" style={{ fontSize: 120 }} spin />;

        if (goForLogin) {
            return <Redirect to={{pathname: '/sigin', state: {from: { pathname: "/postad_buysell" }}}}/>;
        }
        if(goDetail){
            return <Redirect to={{pathname: `/postad_buysell`}} />
        }

        return(
            <div className="secondfold">
                {text && !!filteredArr.length === false && <span style={{textAlign:"center"}}><h1>Not found....</h1></span>}
                {text && !!filteredArr.length === false && <span style={{textAlign:"center"}}><h5>you can find your search by type</h5></span>}
                {text && !!filteredArr.length === false && <div className="col-md-12" style={{textAlign:"center"}}><button type="button" className="btn2 btn2-success" onClick={this.onAddMore}>Go Back</button></div>}
                <div className="col-md-3"  style={{'marginTop': '21px'}} onClick={() => {this.clickItem()}}>
                    <img alt='' src='./images/blank-card.png' style={{border: '1px solid #3a252542', height: '385px', width: '100%', borderRadius: '13px'}}/>
                </div>
                <div className="row">
                    {showBuySell && showBuySell.map((elem, key) => {
                        let str = elem.address || '';
                        if(str.length > 25) {
                            str = str.substring(0, 25);
                            str = str + '...'
                        }
                        let des = elem.description || '';
                        if(des.length > 25) {
                            des = des.substring(0, 25);
                            des = des + '...'
                        }
                        return (
                            <Link key={key} to={{pathname: `/detail_buySell`, state: elem}}>
                                <div className="col-md-3">
                                    <div className="ibox">
                                        <div className="ibox-content product-box">
                                            <div className="product-imitation">
                                                <div className="card2">
                                                    <img alt='' src={elem.images.length ? elem.images[0] : './images/def_card_img.jpg'}/>
                                                    <span className="card-button">
                                                        <p className="categories-on-card" style={{backgroundColor:"#008080",textAlign: "center"}}>{elem.category}</p>
                                                        <i className="buyicon glyphicon-map-marker" style={{color: "white",marginLeft: "0", left:"0"}} /><p className="text" style={{color: "white",marginLeft: "27", marginTop:"-30"}}>{elem.state +" & "+ elem.city}</p>
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
                                                <div className="small m-t-xs" style={{color:'black'}}>{!elem.hideaddress ? des : ''}
                                                </div>
                                                {/*<div className="m-t text-righ" style={{marginTop:"58px",fontSize: "18px",textDecoration:"underline"}}>
                                                    <Link to={{pathname: `/detail_buySell`, state: elem}} className="" style={{color:"red"}}>Detail</Link>
                                                    <div className="location-padding">
                                                    
                                                    </div>
                                                </div>*/}
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
                
                {(showBuySell.length >= 7) && !(showBuySell.length === buySell.length) && <div className="col-md-12" style={{textAlign:"center"}}><button type="button" className="btn btn-success" onClick={this.onAddMore}>View More ...</button></div>}
                {/*!!showBuySell.length && <span style={{textAlign:"center"}}><Pagination defaultCurrent={1} defaultPageSize={6} total={!!filteredArr.length ? filteredArr.length :buySell.length} onChange={this.onChange} /></span>*/}
                {this.state.visible && <Modal
                    title="Kindly Login first"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    <div className="row">
                        <div className="col-md-6" style={{textAlign:'center'}}><button className="btn btn-sm btn2-success" style={{width:'100%'}} onClick={this.handleLogin}>Login</button></div>
                        <div className="col-md-6" style={{textAlign:'center'}}><button className="btn btn-sm btn2-success" style={{width:'100%'}} onClick={this.handleCancel}>Cancel</button></div>
                    </div>
                </Modal>}
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
