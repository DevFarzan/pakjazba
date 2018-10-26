import React, { Component } from 'react';
import './Secondscreenjob.css';
import {  Link } from "react-router-dom";
import { Tabs, Icon } from 'antd';
import JobNews from './Rssforjob';
import axios from "axios/index";
import { connect } from 'react-redux';

const TabPane = Tabs.TabPane;

class Secondscreencard extends Component{
  constructor(props) {
        super(props)
        this.state = {
            news: [],
            sports: []
        };
    }

    componentDidMount() {
        window.scrollTo(0,0);
        this.callApi()
        console.log(this.props.text, 'texttttttt222222222')
    }

    async callApi(){
        const sports = await axios.get('https://newsapi.org/v2/top-headlines?sources=bbc-sport&apiKey=6e7e6a696773424187f9bdb80954ded7');
        const news = await axios.get('https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=6e7e6a696773424187f9bdb80954ded7');
        this.setState({news: news.data.articles, sports: sports.data.articles})

    }

  ViewAll(item){
      this.props.allData();
  }

  render(){
    const { news, sports } = this.state;
    const { data } = this.props;
    return(
      <div className="conatiner">
        <div className="row">
          <div className="col-md-9"> {/*col-md-9 open*/}
            <div className="row">
              {data && data.length ? data.map((elem) => {
                let str = elem.location || '';
                if(str.length > 10) {
                    str = str.substring(0, 8);
                    str = str + '...'
                }
                let des = elem.jobDescription || '';
                if(des.length > 30) {
                    des = des.substring(0, 40);
                    des = des + '...'
                }
                return (
                    <div className="col-md-4 col-sm-12 col-xs-12" style={{paddingRight:"6px"}}>
                    <div className="featuredbox width100">
                      <div className="marketjob-content featuredjob-box ">
                          <div className="featuredjob-imitation">
                              <div className="card2">
                                  <img alt='' src={elem.arr_url[0]}/>
                              </div>
                          </div>
                      </div>
                      <div className="customjob-margin">
                          <h4 className="heading-wight font-style">{elem.jobCat}</h4>
                          <div className="row" style={{marginLeft:"-32px"}}>
                            <div className="col-md-6 col-sm-12 col-xs-12">
                              <i className="glyphicon glyphicon-star"/>
                              <p className="textforjob font-style">{elem.jobType}</p>
                            </div>
                            <div className="col-md-6 col-sm-12 col-xs-12">
                              <div className="glyphicom">
                                  <i className="glyphicon glyphicon-map-marker"/>
                                  <p className="textforjob font-style ">{str}</p>
                              </div>
                            </div>
                          </div>
                      </div>
                      <div className="jobdetail-desc">
                          <div className="small m-t-xs font-style">
                              <p>{des}</p>
                          </div>
                          <div className="row">
                            <div className="col-md-6 col-sm-12 col-xs-12">
                              <Link to={{pathname: `/detail_jobPortal`, state: {...elem, sec: 'mainPart'}}}>
                                <button type="button" className="btn btn-sm btn2-success font-style" style={{width:"100%"}}>View Detail</button>
                              </Link>
                            </div>
                            <div className="col-md-6 col-sm-12 col-xs-12">
                              <Link to={{pathname: `/detail_jobPortal`, state: {...elem, sec: 'jobPart'}}}>
                                <button type="button" className="btn btn-sm btn2-success font-style" style={{width:"100%"}}>Apply Now</button>
                              </Link>
                            </div>
                          </div>
                      </div>
                    </div>
                </div>
                )
              })
                :<div className="col-md-12 col-sm-12 col-xs-12"> 
                <div className="col-md-4"></div>
                <div className="col-md-4">
                  <h3>Searched data not found</h3>
                  <button type="button" className="btn btn-sm btn2-success font-style"  style={{width:"100%"}}  onClick={() => {this.ViewAll()}}>View All</button>
                </div>
                <div className="col-md-4"></div>
                </div>
            }
            </div>
          </div>{/*col-md-9 close*/}

          {/*col-md-3 Open for Rss News feed*/}
          <div className="col-md-3">
            <div className="row">
              <Tabs defaultActiveKey="2" style={{border:'1px solid gray',backgroundColor:'rgba(119, 136, 153, 0.05)',padding: '10px', marginBottom: '20px'}}>
                  <TabPane style={{height: '450px', 'overflow-y': 'overlay', fontColor: 'black'}} tab='SPORTS' key="1">
                      {sports.map((elem) => {
                          return(
                              <div className="b-sec">
                                  <a href={elem.url} target="_blank">
                                      <img style={{width: '100%'}} src={elem.urlToImage} alt=""/>
                                      <p><b>{elem.title}</b></p>
                                  </a>
                              </div>
                          )
                      })}
                  </TabPane>
                  <TabPane style={{height: '450px', 'overflow-y': 'overlay'}} tab='NEWS' key="2">
                      {news.map((elem) => {
                          return(
                              <div className="b-sec">
                                  <a href={elem.url} target="_blank">
                                      <img style={{width: '100%'}} src={elem.urlToImage} alt=""/>
                                      <p><b>{elem.title}</b></p>
                                  </a>
                              </div>
                          )
                      })}
                  </TabPane>
              </Tabs>
              <JobNews/>
            </div>
          </div>
        </div> {/*row close*/}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
    return({
        text: state.text
    })
}

export default connect(mapStateToProps)(Secondscreencard);
