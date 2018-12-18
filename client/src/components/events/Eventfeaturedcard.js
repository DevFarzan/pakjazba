import React, { Component } from 'react';
import {HttpUtils} from "../../Services/HttpUtils";
import { Spin, Icon, Pagination, Rate, Modal } from 'antd';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import AsyncStorage from "@callstack/async-storage/lib/index";
import { Redirect } from 'react-router';
import _ from 'underscore';
import moment from 'moment';

class EventFeatured extends Component{
    constructor(props){
        super(props);
        this.state = {
            loader: true,
            filteredArr: [],
            user: false,
            visible: false
        }
    }

    componentDidMount(){
        this.getAllBusiness()
    }

    componentDidUpdate(prevProps, prevState){
        const { events } = this.state;
        const { text } = this.props;
        if(prevProps.text !== text){
            if(!!text){
                this.setState({showEvents: []})
            }else {
                this.setState({
                    showEvents: events.slice(0, 7),
                    filteredArr: [],
                    add: 7
                })
            }
        }
    }

    searchedArr(text){
        const { events } = this.state;
        let filteredArr = events.filter((elem) => {
            return (elem.eventCategory && elem.eventCategory.toLowerCase().includes(text.toLowerCase()))
        })
        this.setState({
            filteredArr,
            showEvents: filteredArr.slice(0, 7),
            add: 7
        })
    }

    onAddMore = () => {
        const { add, events, filteredArr } = this.state;
        if(!!filteredArr.length){
            this.setState({
                showEvents: filteredArr.slice(0, add + 7),
                add: add + 7
            });
        }else {
            this.setState({
                showEvents: events.slice(0, add + 7),
                add: add + 7
            });
        }
        if(this.props.text.length){
            let inputValue = '';
            const { dispatch } = this.props;
            dispatch({type: 'SEARCHON', inputValue})
        }
    }

    async getAllBusiness(){
        var res = await HttpUtils.get('marketplace')
        if(res.code === 200){
            let data = res.eventPortalData;
            this.setState({
                events: data ? data : [],
                showEvents: data ? data.slice(0, 7) : [],
                loader: false
            });
        }
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
      const { events, showEvents, filteredArr, add, goForLogin, goDetail } = this.state;
      const { text } = this.props;
      const antIcon = <Icon type="loading" style={{ fontSize: 120 }} spin />;

      if (goForLogin) {
          return <Redirect to={{pathname: '/sigin', state: {from: { pathname: "/postad_eventPortal" }}}}/>;
      }
      if(goDetail){
          return <Redirect to={{pathname: `/postad_eventPortal`}} />
      }
      
      return(
        <div className="container" style={{width:"90%"}}>
          {!text && <h2 style={{textAlign:"center", fontWeight:"bold", marginTop:"20px"}}> Great Events </h2>}
              {text && !!filteredArr.length === false && <span style={{textAlign:"center"}}><h1>Not found....</h1></span>}
              {text && !!filteredArr.length === false && <span style={{textAlign:"center"}}><h5>you can find your search by type</h5></span>}
              {text && !!filteredArr.length === false && <div className="col-md-12" style={{textAlign:"center"}}><button type="button" className="btn2 btn2-success" onClick={this.onAddMore}>Go Back</button></div>}
          <div className="row">
              <div className="col-md-3"  style={{'marginBottom': '30px'}} onClick={() => {this.clickItem()}}>
                  <img alt='' src='./images/blank-card.png' style={{border: '1px solid #3a252542', height: '345px', width: '100%', borderRadius: '13px'}}/>
              </div>
            {showEvents && showEvents.map((elem, key) => {
                let postedOn = moment(elem.posted, "LL").format('YYYY-MM-DD');
                return(
                    <Link key={key} to={{pathname: `/detail_eventPortal/${elem.randomKey}`, state: elem}}>
                        <div className="col-md-3"  style={{'marginBottom': '30px'}}>
                            <div className="card" style={{border: '1px solid #3a252542',boxShadow: 'none',borderRadius:'13px',width:'100%'}}>
                                <img alt='' src={elem.images[0]} style={{height:'200px', width:"100%", borderTopLeftRadius: '12px', borderTopRightRadius: '12px'}}/>
                                <h4 style={{marginTop:'15px', textAlign:"center",}}><b>{elem.eventTitle}</b></h4>
                                <div className="row">
                                  <div className="col-md-6">
                                    <p style={{marginTop:"-15px"}}>
                                        <span className="glyphicon glyphicon-map-marker" style={{color: "#008080",margin:"2px"}}></span>
                                        <span style={{color:"black"}}>{elem.city}</span>
                                    </p>
                                  </div>
                                  <div className="col-md-6">
                                    <p style={{marginTop:"-15px", marginLeft: '11px'}}>
                                        <span className="glyphicon glyphicon-calendar" style={{color: "#008080",margin:"2px"}}></span>
                                        <span style={{color:"black"}}>{postedOn}</span>
                                    </p>
                                  </div>
                                    <img src='./images/event-icons/fashion.png' style={{marginLeft:"90px", height:"100px", marginTop:"-40px", marginBottom:"-35px"}}/>
                                </div>
                            </div>
                        </div>
                    </Link>
                )
            })}
          </div>
          {this.state.loader &&  <div  style={{textAlign: 'center', marginLeft:'-100px', marginBottom: '15px'}}>
              <Spin indicator={antIcon} />
          </div>}
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
          <div className="row">
              <div className="col-md-12">
                  <img src="../images/businesslistingimage.png" style={{width:'100%'}} />
              </div>
          </div>
        </div>
      )
    }
}

const mapStateToProps = (state) => {
    return({
        text: state.text
    })
}

export default connect(mapStateToProps)(EventFeatured);
