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
          loader: true
      }
  }

  componentDidMount(){
      this.getAllBusiness()
  }

  componentDidUpdate(prevProps, prevState){
      const { events } = this.state;
      const { text } = this.props;
      console.log(text, 'textttttttt')
      if(prevProps.text !== text){
          if(!!text){
              this.setState({showEvents: []})
              this.searchedArr(text)
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

  async getAllBusiness(){
      var res = await HttpUtils.get('marketplace')
      if(res.code === 200){
          let data = res.eventPortalData;
      console.log(data, 'responseeeeeeeee')
          this.setState({
              events: data ? data : [],
              showEvents: data ? data.slice(0, 7) : [],
              loader: false
          });
      }
      // this.getReviews(res.eventPortalData);
      // this.handleLocalStorage();
  }

  render(){
    const { events, showEvents } = this.state;
    const antIcon = <Icon type="loading" style={{ fontSize: 120 }} spin />;
    console.log(showEvents, '0000000000000000')
    return(
      <div className="container" style={{width:"90%"}}>
        <h2 style={{textAlign:"center", fontWeight:"bold", marginTop:"20px"}}> Great Events </h2>
        <div className="row">
            <div className="col-md-3"  style={{'marginBottom': '30px'}} onClick={() => {this.clickItem()}}>
                <img alt='' src='./images/blank-card.png' style={{border: '1px solid #3a252542', height: '350px', width: '100%', borderRadius: '13px'}}/>
            </div>
          {showEvents && showEvents.map((elem) => {
              let postedOn = moment(elem.posted, "LL").format('YYYY-MM-DD');
              return(
                  <div className="col-md-3"  style={{'marginBottom': '30px'}}>
                      <div className="card" style={{border: '1px solid #3a252542',boxShadow: 'none',borderRadius:'13px',width:'100%'}}>
                          <img alt='' src='./images/job-category.jpeg' style={{height:'200px', width:"100%"}}/>
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
              )
          })}
        </div>
        {this.state.loader &&  <div  style={{textAlign: 'center', marginLeft:'-100px', marginBottom: '15px'}}>
            <Spin indicator={antIcon} />
        </div>}
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
