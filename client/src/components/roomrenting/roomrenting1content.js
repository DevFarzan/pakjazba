import React, { Component } from 'react';
import "./headerroomrenting.css";
import { Pagination, Spin, Icon, Modal } from 'antd';
import AsyncStorage from "@callstack/async-storage/lib/index";
import {Link} from "react-router-dom";
import { Redirect } from 'react-router';
import {HttpUtils} from "../../Services/HttpUtils";

class Roomrenting1content extends Component{
    constructor(props) {
        super(props);
        this.state = {
            roomrents: [],
            showroomrents: [],
            filteredArr: [],
            loader: true,
            add: 7,
            user: false,
            visible: false
        }
    }

    componentDidMount(){
        this.getAllBusiness()
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

    async getAllBusiness(){
        let res = await HttpUtils.get('marketplace')
        this.setState({
            roomrents: res ? res.roomrentsdata : [],
            showroomrents: res ? res.roomrentsdata.slice(0, 7) : [],
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

    onAddMore = () => {
        const { add, roomrents, filteredArr } = this.state;
        if(!!filteredArr.length){
            this.setState({
                showroomrents: filteredArr.slice(0, add + 8),
                add: add + 8
            });
        }else {
            this.setState({
                showroomrents: roomrents.slice(0, add + 8),
                add: add + 8
            });
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
        const { showroomrents, filteredArr, roomrents, goForLogin, goDetail } = this.state;
        const antIcon = <Icon type="loading" style={{ fontSize: 120 }} spin />;

        if (goForLogin) {
            return <Redirect to={{pathname: '/sigin', state: {from: { pathname: "/postad_Roommates" }}}}/>;
        }
        if(goDetail){
            return <Redirect to={{pathname: `/postad_Roommates`}} />
        }

        return(
            <section id="about">
                <div className="">
                    <div className="row">
                        <div className="col-md-3" onClick={() => {this.clickItem()}}>>
                            <img alt='' src='./images/blank-card.png' style={{border: '1px solid #3a252542', height: '387px', width: '100%', borderRadius: '17px'}}/>
                        </div>
                        {showroomrents && showroomrents.map((elem, key) => {
                            let str = elem.propertylocation || '';
                            if(str.length > 25) {
                                str = str.substring(0, 25);
                                str = str + '...'
                            }
                            let des = elem.discription || '';
                            if(des.length > 30) {
                                des = des.substring(0, 30);
                                des = des + '...'
                            }
                            return(
                                <Link key={key} to={{pathname: `/detail_roomRent`, state: elem}}>
                                    <div className="col-md-3">
                                        <div className="ibox" style={{width: "100%"}}>
                                            <div className="ibox-content product-box" style={{backgroundColor:'white',border:'1px solid #80808038',borderRadius:'17px'}}>
                                                <div className="product-imitation">
                                                    <div className="card2">
                                                        <img alt='' src={elem.imageurl.length ? elem.imageurl[0] : './images/def_card_img.jpg'}/>
                                                        <span className="card-button" style={{width: "200px"}}>
                                                            <p className="categories-on-card" style={{backgroundColor:"#008080",textAlign: "center",width: "159px",marginBottom: "6px"}}>{elem.category}</p>
                                                            <i className="glyphicon glyphicon-map-marker" style={{color: "#008080",marginLeft: "-2px"}} /><p className="text" style={{color: "white",marginLeft: "14px"}}>{elem.state +" & "+ elem.city}</p>
                                                        </span>

                                                    </div>
                                                </div>
                                                <div>
                                                    <span className="product-price" style={{top: '-40px',position:'relative'}}>{elem.rent}</span>
                                                </div>
                                                {/*<div className="row" style={{textAlign:'center'}}>
                                                    <span className="col-md-6" style={{color: "#000000c7"}}>Posted By</span>
                                                    <div className="col-md-6">
                                                        <i className="glyphicon glyphicon-user" style={{color:"#008080"}} />
                                                        <span className="" style={{color: "#000000c7"}}>{elem.contactname}</span>
                                                    </div>
                                                </div>*/}
                                                <div className="row" style={{textAlign:'center',marginTop:'-15px'}}>
                                                <span className="col-md-6" style={{color: "#000000c7",fontSize:'13px'}}>Posted On</span>
                                                <div className="col-md-6">
                                                    <i className="glyphicon glyphicon-calendar" style={{color:"#008080"}} />
                                                    <span className="" style={{color: "#000000c7",fontSize:'13px'}}>10-17-2018</span>
                                                 </div>
                                                </div>
                                                <div className="row" style={{textAlign:'center',marginTop:'-15px'}}>
                                                <span className="col-md-6" style={{color: "#000000c7",fontSize:'13px'}}>Availible From</span>
                                                <div className="col-md-6">
                                                    <i className="glyphicon glyphicon-calendar" style={{color:"#008080"}} />
                                                    <span className="" style={{color: "#000000c7",fontSize:'13px'}}>{elem.startdate ? elem.startdate : '10-17-2018'}</span>
                                                 </div>
                                                </div>
                                                {/*<div className="cust-margin" style={{marginTop: "36px"}}>
                                                    <i className="glyphicon glyphicon-calendar" style={{color:"#008080"}} />
                                                <span className="text" style={{color: "#000000c7"}}>{elem.Date}</span>
                                                <i className="glyphicon glyphicon-user" style={{color:"#008080",marginLeft: "71px"}} />
                                                <span className="text" style={{color: "#000000c7"}}>{elem.contactname}</span>
                                                </div>*/}
                                                {/*<div className="product-desc">

                                                    <div className="product-name" style={{"fontSize": "14px"}}>{des}</div>
                                                    <div className="m-t text-righ" style={{marginTop:"58px",fontSize: "18px",textDecoration:"underline"}}>
                                                        <Link to={{pathname: `/detail_roomRent`, state: elem}} className="" style={{color:"red"}}>Detail</Link>
                                                    </div>
                                                </div>*/}
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            )
                        })
                        }
                    </div>
                    {this.state.loader && <div className="col-md-12" style={{textAlign: 'center', marginBottom: '20px', marginLeft: '-50px'}}>
                        <Spin indicator={antIcon} />
                    </div>}
                    {(filteredArr.length > showroomrents.length) || (roomrents.length > showroomrents.length) && <div className="col-md-12" style={{textAlign:"center"}}><button type="button" className="btn btn-success" onClick={this.onAddMore}>View More ...</button></div>}
                    {/*!!showroomrents.length && <span style={{textAlign:"center"}}><Pagination defaultCurrent={1} defaultPageSize={6} total={!!filteredArr.length ? filteredArr.length : roomrents.length} onChange={this.onChange} /></span>*/}
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
                <div className="thirdfold" style={{backgroundColor:"#008080",marginTop: '68px',textAlign:'center'}}>
                <h3 style={{color:"white"}}> Selling With Us Is Easy </h3>
                <div className="row">
                    <div className="container">
                    <div className="col-md-3">
                        <div className="media">
                            <div className="media-left">
                                <a>
                                    <img alt='' className="media-object" src="../images/how to upload/profile (1).png" alt="..." style={{width: '100%',marginTop: '6px'}}/>
                                </a>     
                            </div>
                            <div className="media-body col-md-3" style={{marginLeft: "-15px"}}>
                                {/*<h4 className="text-white">Create an Account</h4>*/}
                            </div>
                        </div>
                    </div>
                    {/*second card*/}
                    <div className="col-md-3">
                        <div className="media">
                            <div className="media-left">
                                <a>
                                    <img  alt='' className="media-object-2" src="../images/how to upload/submityourad.png" alt="..." style={{width:"100%",marginTop: '11px'}}/>
                                    
                                </a>
                            </div>
                            {/*<div className="media-body col-md-3" style={{marginLeft: "-15px"}}>
                                <h4 className="text-white">Submit Your Add</h4>
                            </div>*/}
                        </div>
                    </div>
                    {/*third card*/}
                    <div className="col-md-3">
                        <div className="media">
                            <div className="media-left">
                                <a>
                                    <img alt='' className="media-object-2" src="../images/how to upload/deal-done.png" alt="..." style={{width:"100%",marginTop:'18px'}}/>
                                    
                                </a>
                            </div>
                            {/*<div className="media-body col-md-3">
                                <h4 className="text-white">Make A Deal</h4>
                            </div>*/}
                        </div>
                    </div>
                    {/*forth card*/}
                    <div className="col-md-3">
                        <div className="media">
                            <div className="media-left">
                                <a>
                                    <img alt='' className="media-object-2" src="../images/how to upload/payment.png" alt="..." style={{width:"100%"}} />
                                    
                                </a>
                            </div>
                            {/*<div className="media-body col-md-3">
                                <h4 className="text-white">Enjoy The Money</h4>
                                {/*<p className="text-white">Bed, Sofa, Garden..</p>
                            </div>*/}
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
