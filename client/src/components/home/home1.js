import React, { Component } from 'react';
import { Link } from "react-router-dom";
import App from "../../App";
import Footer from '../footer/footer'
import axios from "axios/index";
import { Tabs, Icon } from 'antd';
import Burgermenu from '../header/burgermenu';
import Slider from '../header/Slider';
import {HttpUtils} from "../../Services/HttpUtils";

const TabPane = Tabs.TabPane;

class Home1 extends Component{
    constructor(props) {
        super(props)
        this.state = {
            news: [],
            sports: []
        };
    }

    componentDidMount() {
        this.callApi()
        this.getAllBlogs()
    }

    async getAllBlogs(){
        let req = await HttpUtils.get('getblog');
        console.log(req, 'zzzzzzzzzzzzzzzzzzzzzz')
    }

    async callApi(){
        const sports = await axios.get('https://newsapi.org/v2/top-headlines?sources=bbc-sport&apiKey=6e7e6a696773424187f9bdb80954ded7');
        console.log(sports.data.articles, 'sportssssssssss')
        const news = await axios.get('https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=6e7e6a696773424187f9bdb80954ded7');
        console.log(news.data.articles, 'newssssssssssssssss')
        this.setState({news: news.data.articles, sports: sports.data.articles})

    }

    render(){
        const { news, sports } = this.state;

        return(
            <div>
                <App/>
                <div className="row" style={{marginTop: "125px"}}>
                    <div className="col-md-10">
                        <div className="col-md-4 col-sm-4">
                            <div className="card outset" >
                                <div className="card-body space tag1">
                                    <Link to={`/postad_Roommates`} style={{color: 'black'}}>
                                        <img alt='' src="./images/Rent room stockholm.jpg" height="82" width="95" style={{marginLeft: "-5px",marginTop: "-5px",marginBottom: "-5px"}} /><b className="tag1"> Room Renting</b>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-4">
                            <div className="card outset" >
                                <div className="card-body space tag1">
                                    <Link to={`/postad_business`} style={{color: 'black'}}>
                                        <img alt='' src="./images/busioness-listing.jpg" height="82" width="95" style={{marginLeft: "-5px",marginTop: "-5px",marginBottom: "-5px"}} /><b className="tag1"> Business Listing</b>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-4">
                            <div className="card outset" >
                                <div className="card-body space tag1">
                                    <Link to={`/postad_buysell`} style={{color: 'black'}}>
                                        <img alt='' src="./images/Where to Buy Hero Image.jpg" height="82" width="95" style={{marginLeft: "-5px",marginTop: "-5px",marginBottom: "-5px"}} /><b className="tag1"> Buy & Sell </b>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2">
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-10">
                        <div className="col-md-4">
                            <br/>
                            <hr/>
                        </div>
                        <div className="col-md-1">
                            <h3><b>Blog</b></h3>
                        </div>
                        <div className="col-md-5">
                            <br/>
                            <hr/>
                        </div>
                    </div>
                </div>
                <div className="row"> <br/></div>
                <div className="row">
                    <div className="col-md-5">
                        <Link to={`/detail_blog`}>
                            <img alt='' src="./images/shutterstock_1094843246.jpg" width="540" height="350" />
                        </Link>
                        <h4> </h4>
                        <h4 className="tag" style={{backgroundColor: "#008080",textAlign:"center"}}><b>Loram Ipsum </b></h4>
                        <h4><b>Loram Ipsum, Loram Ipsum, Loram Ipsum </b></h4>
                        <p>Loram Ipsum Loram Ipsum Loram Ipsum, Loram Ipsum Loram Ipsum Loram Ipsum. Loram Ipsum Loram Ipsum</p>
                        <p style={{paddingTop: "21px"}}><b><span style={{marginRight: "67px"}}>By Hills Estate</span>    <span>13.09.2018</span></b></p>
                    </div>
                    <div className="col-md-4">
                        <div className="col-md-4">
                            <Link to={`/detail_blog`}>
                                <img alt='' src="./images/shutterstock_536667610.jpg" width="130" height="120" />
                            </Link>
                        </div>
                        <div className="col-md-8">
                            <h5><b>Loram Ipsum, Loram Ipsum, Loram Ipsum </b></h5>
                            <p style={{paddingTop: "21px"}}><span style={{marginRight: "67px"}}>By Hills Estate</span>    <span>13.09.2018</span> <br/><br/></p>
                        </div>
                        <div className="col-md-4">
                            <Link to={`/detail_blog`}>
                                <img alt='' src="./images/blog1.jpg" width="130" height="120" />
                            </Link>
                        </div>
                        <div className="col-md-8">
                            <h5><b>Loram Ipsum, Loram Ipsum, Loram Ipsum </b></h5>
                            <p style={{paddingTop: "21px"}}><span style={{marginRight: "67px"}}>By Hills Estate</span>    <span>13.09.2018</span> <br/><br/></p>
                        </div>
                        <div className="col-md-4">
                            <Link to={`/detail_blog`}>
                                <img alt='' src="./images/shutterstock_536667610.jpg" width="130" height="120" />
                            </Link>
                        </div>
                        <div className="col-md-8">
                            <h5><b>Loram Ipsum, Loram Ipsum, Loram Ipsum </b></h5>
                            <p style={{paddingTop: "21px"}}><span style={{marginRight: "67px"}}>By Hills Estate</span>    <span>13.09.2018</span> <br/><br/></p>
                        </div>
                        <div className="col-md-4">
                            <Link to={`/detail_blog`}>
                                <img alt='' src="./images/black.jpg" width="130" height="120" />
                            </Link>
                        </div>
                        <div className="col-md-8">
                            <h5><b>Loram Ipsum, Loram Ipsum, Loram Ipsum </b></h5>
                            <p style={{paddingTop: "21px"}}><span style={{marginRight: "67px"}}>By Hills Estate</span>    <span>13.09.2018</span> <br/><br/></p>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <Tabs defaultActiveKey="2">
                            <TabPane style={{height: '450px', 'overflow-y': 'overlay'}} tab='SPORTS' key="1">
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
                        {/*<div className="b-sec">*/}
                            {/*<h4><b>Loram Ipsum, Loram Ipsum, Loram Ipsum </b></h4>*/}
                            {/*<h5><b>7-September-2018 </b></h5>*/}
                            {/*<p> Loram Ipsum Loram Ipsum, Loram IpsumLoram IpsumLoram Ipsum ,</p>*/}
                        {/*</div>*/}
                        {/*<div className="b-sec">*/}
                            {/*<h4><b>Loram Ipsum, Loram Ipsum, Loram Ipsum </b></h4>*/}
                            {/*<h5><b>7-September-2018 </b></h5>*/}
                            {/*<p> Loram Ipsum Loram Ipsum, Loram IpsumLoram IpsumLoram Ipsum ,</p>*/}
                        {/*</div>*/}
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-10">
                        <div className="col-md-4">
                            <br/>
                            <hr/>
                        </div>
                        <div className="col-md-1">
                            <h3><b>Blog</b></h3>
                        </div>
                        <div className="col-md-5">
                            <br/>
                            <hr/>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <br/>
                        <h4><b>Populer</b></h4>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="col-md-8">
                            <div className="col-md-6">
                                <div className="col-md-4">
                                    <img alt='' src="./images/black.jpg" width="120" height="110" />
                                </div>
                                <div className="col-md-8">
                                    <h5><b>Loram Ipsum, Loram Ipsum, Loram Ipsum </b></h5>
                                    <br/>
                                    <p><span style={{marginRight: "67px"}}>By Hills Estate</span>    <span>13.09.2018</span>  <br/><br/></p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="col-md-4">
                                    <img alt='' src="./images/black.jpg" width="120" height="110" />
                                </div>
                                <div className="col-md-8">
                                    <h5><b>Loram Ipsum, Loram Ipsum, Loram Ipsum </b></h5>
                                    <br/>
                                    <p><span style={{marginRight: "67px"}}>By Hills Estate</span>    <span>13.09.2018</span> <br/><br/></p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="col-md-4">
                                    <img alt='' src="./images/black.jpg" width="120" height="110" />
                                </div>
                                <div className="col-md-8">
                                    <h5><b>Loram Ipsum, Loram Ipsum, Loram Ipsum </b></h5>
                                    <br/>
                                    <p><span style={{marginRight: "67px"}}>By Hills Estate</span>    <span>13.09.2018</span> <br/><br/></p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="col-md-4">
                                    <img alt='' src="./images/black.jpg" width="120" height="110" />
                                </div>
                                <div className="col-md-8">
                                    <h5><b>Loram Ipsum, Loram Ipsum, Loram Ipsum </b></h5>
                                    <br/>
                                    <p><span style={{marginRight: "67px"}}>By Hills Estate</span>    <span>13.09.2018</span>  <br/><br/></p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="col-md-4">
                                    <img alt='' src="./images/black.jpg" width="120" height="110" />
                                </div>
                                <div className="col-md-8">
                                    <h5><b>Loram Ipsum, Loram Ipsum, Loram Ipsum </b></h5>
                                    <br/>
                                    <p><span style={{marginRight: "67px"}}>By Hills Estate</span>    <span>13.09.2018</span>  <br/><br/></p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="col-md-4">
                                    <img alt='' src="./images/black.jpg" width="120" height="110" />
                                </div>
                                <div className="col-md-8">
                                    <h5><b>Loram Ipsum, Loram Ipsum, Loram Ipsum </b></h5>
                                    <br/>
                                    <p><span style={{marginRight: "67px"}}>By Hills Estate</span>    <span>13.09.2018</span>  <br/><br/></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-1">
                        </div>
                        <div className="col-md-3">
                            <img alt='' src="./images/black.jpg" width="300" height="150" />
                            <h5><b>Loram Ipsum, Loram Ipsum, Loram Ipsum </b></h5>
                            <img alt='' src="./images/black.jpg" width="300" height="150" />
                            <h5><b>Loram Ipsum, Loram Ipsum, Loram Ipsum </b></h5>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-10">
                        <div className="col-md-4">
                            <br/>
                            <hr/>
                        </div>
                        <div className="col-md-1">
                            <h3><b>Blog</b></h3>
                        </div>
                        <div className="col-md-5">
                            <br/>
                            <hr/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="col-md-8">
                            <div className="col-md-6">
                                <div className="blog-bg">
                                    <br/><br/>
                                    <div className="text-center">
                                        <div className="marg">
                                            <h4 className="tag"><b>Loram Ipsum </b></h4>
                                        </div>
                                        <h5 className="white"><b>Loram Ipsum, Loram Ipsum, Loram Ipsum </b></h5>
                                        <br/>
                                        <p className="white">By Hills Estate    13.09.2018 <br/><br/></p>
                                    </div>
                                    <br/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="blog-bg">
                                    <br/><br/>
                                    <div className="text-center">
                                        <div className="marg">
                                            <h4 className="tag"><b>Loram Ipsum </b></h4>
                                        </div>
                                        <h5 className="white"><b>Loram Ipsum, Loram Ipsum, Loram Ipsum </b></h5>
                                        <br/>
                                        <p className="white">By Hills Estate    13.09.2018 <br/><br/></p>
                                    </div>
                                    <br/>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-1">
                        </div>
                        <div className="col-md-3">
                            <img alt='' src="./images/black.jpg" width="300" height="200" />
                            <h5><b>Loram Ipsum, Loram Ipsum, Loram Ipsum </b></h5>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-10">
                        <div className="col-md-4">
                            <br/>
                            <hr/>
                        </div>
                        <div className="col-md-1">
                            <h3><b>Blog</b></h3>
                        </div>
                        <div className="col-md-5">
                            <br/>
                            <hr/>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <br/>
                        <h4><b>Most Recent</b></h4>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="col-md-8">
                            <div className="col-md-6">
                                <div className="col-md-4">
                                    <img alt='' src="./images/black.jpg" width="120" height="110" />
                                </div>
                                <div className="col-md-8">
                                    <h5><b>Loram Ipsum, Loram Ipsum, Loram Ipsum </b></h5>
                                    <br/>
                                    <p><span style={{marginRight: "67px"}}>By Hills Estate</span>    <span>13.09.2018</span>  <br/><br/></p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="col-md-4">
                                    <img alt='' src="./images/black.jpg" width="120" height="110" />
                                </div>
                                <div className="col-md-8">
                                    <h5><b>Loram Ipsum, Loram Ipsum, Loram Ipsum </b></h5>
                                    <br/>
                                    <p><span style={{marginRight: "67px"}}>By Hills Estate</span>    <span>13.09.2018</span>  <br/><br/></p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="col-md-4">
                                    <img alt='' src="./images/black.jpg" width="120" height="110" />
                                </div>
                                <div className="col-md-8">
                                    <h5><b>Loram Ipsum, Loram Ipsum, Loram Ipsum </b></h5>
                                    <br/>
                                    <p><span style={{marginRight: "67px"}}>By Hills Estate</span>    <span>13.09.2018</span>  <br/><br/></p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="col-md-4">
                                    <img alt='' src="./images/black.jpg" width="120" height="110" />
                                </div>
                                <div className="col-md-8">
                                    <h5><b>Loram Ipsum, Loram Ipsum, Loram Ipsum </b></h5>
                                    <br/>
                                    <p><span style={{marginRight: "67px"}}>By Hills Estate</span>    <span>13.09.2018</span>  <br/><br/></p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="col-md-4">
                                    <img alt='' src="./images/black.jpg" width="120" height="110" />
                                </div>
                                <div className="col-md-8">
                                    <h5><b>Loram Ipsum, Loram Ipsum, Loram Ipsum </b></h5>
                                    <br/>
                                    <p><span style={{marginRight: "67px"}}>By Hills Estate</span>    <span>13.09.2018</span> <br/><br/></p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="col-md-4">
                                    <img alt='' src="./images/black.jpg" width="120" height="110" />
                                </div>
                                <div className="col-md-8">
                                    <h5><b>Loram Ipsum, Loram Ipsum, Loram Ipsum </b></h5>
                                    <br/>
                                    <p><span style={{marginRight: "67px"}}>By Hills Estate</span>    <span>13.09.2018</span>  <br/><br/></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-1">
                        </div>
                        <div className="col-md-3">
                            <img alt='' src="./images/black.jpg" width="300" height="150" />
                            <h5><b>Loram Ipsum, Loram Ipsum, Loram Ipsum </b></h5>
                            <img alt='' src="./images/black.jpg" width="300" height="150" />
                            <h5><b>Loram Ipsum, Loram Ipsum, Loram Ipsum </b></h5>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-10">
                        <div className="col-md-4">
                            <br/>
                            <hr/>
                        </div>
                        <div className="col-md-1">
                            <h3><b>Blog</b></h3>
                        </div>
                        <div className="col-md-5">
                            <br/>
                            <hr/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="col-md-8">
                            <div className="col-md-4">
                                <img alt='' src="./images/black.jpg" width="250px" height="120" />
                                <h5><br/><b>Loram Ipsum, Loram Ipsum, Loram Ipsum </b></h5>
                                <p>By Hills Estate    13.09.2018 <br/><br/></p>
                            </div>
                            <div className="col-md-4">
                                <img alt='' src="./images/black.jpg" width="250px" height="120" />
                                <h5><br/><b>Loram Ipsum, Loram Ipsum, Loram Ipsum </b></h5>
                                <p>By Hills Estate    13.09.2018 <br/><br/></p>
                            </div>
                            <div className="col-md-4">
                                <img alt='' src="./images/black.jpg" width="250px" height="120" />
                                <h5><br/><b>Loram Ipsum, Loram Ipsum, Loram Ipsum </b></h5>
                                <p>By Hills Estate    13.09.2018 <br/><br/></p>
                            </div>
                            <div className="col-md-4">
                                <img alt='' src="./images/black.jpg" width="250px" height="120" />
                                <h5><br/><b>Loram Ipsum, Loram Ipsum, Loram Ipsum </b></h5>
                                <p>By Hills Estate    13.09.2018 <br/><br/></p>
                            </div>
                            <div className="col-md-4">
                                <img alt='' src="./images/black.jpg" width="250px" height="120" />
                                <h5><br/><b>Loram Ipsum, Loram Ipsum, Loram Ipsum </b></h5>
                                <p>By Hills Estate    13.09.2018 <br/><br/></p>
                            </div>
                            <div className="col-md-4">
                                <img alt='' src="./images/black.jpg" width="250px" height="120" />
                                <h5><br/><b>Loram Ipsum, Loram Ipsum, Loram Ipsum </b></h5>
                                <p>By Hills Estate    13.09.2018 <br/></p>
                            </div>
                        </div>
                        <div className="col-md-1">
                        </div>
                        <div className="col-md-3">
                            <img alt='' src="./images/black.jpg" width="300" height="150" />
                            <h5><b>Loram Ipsum, Loram Ipsum, Loram Ipsum </b></h5>
                            <img alt='' src="./images/black.jpg" width="300" height="150" />
                            <h5><b>Loram Ipsum, Loram Ipsum, Loram Ipsum </b></h5>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-10">
                        <div className="col-md-4">
                            <br/>
                            <hr/>
                        </div>
                        <div className="col-md-1">
                            <h3><b>Blog</b></h3>
                        </div>
                        <div className="col-md-5">
                            <br/>
                            <hr/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-8">
                        <div className="col-md-6">
                            <img alt='' src="./images/black.jpg" width="100%" height="200" />
                        </div>
                        <div className="col-md-6">
                            <h4 className="tag"><b>Loram Ipsum </b></h4>
                            <h4><b>Loram Ipsum, Loram Ipsum, Loram Ipsum </b></h4>
                            <p>Loram Ipsum Loram Ipsum Loram Ipsum, Loram Ipsum Loram Ipsum Loram Ipsum. Loram Ipsum Loram Ipsum</p>
                            <p><b>By Hills Estate</b>  13.09.2018 <br/><br/><br/><br/></p>
                        </div>
                        <div className="col-md-6">
                            <img alt='' src="./images/black.jpg" width="100%" height="200" />
                        </div>
                        <div className="col-md-6">
                            <h4 className="tag"><b>Loram Ipsum </b></h4>
                            <h4><b>Loram Ipsum, Loram Ipsum, Loram Ipsum </b></h4>
                            <p>Loram Ipsum Loram Ipsum Loram Ipsum, Loram Ipsum Loram Ipsum Loram Ipsum. Loram Ipsum Loram Ipsum</p>
                            <p><b>By Hills Estate</b>  13.09.2018 <br/><br/><br/><br/></p>
                        </div>
                        <div className="col-md-6">
                            <img alt='' src="./images/black.jpg" width="100%" height="200" />
                        </div>
                        <div className="col-md-6">
                            <h4 className="tag"><b>Loram Ipsum </b></h4>
                            <h4><b>Loram Ipsum, Loram Ipsum, Loram Ipsum </b></h4>
                            <p>Loram Ipsum Loram Ipsum Loram Ipsum, Loram Ipsum Loram Ipsum Loram Ipsum. Loram Ipsum Loram Ipsum</p>
                            <p><b>By Hills Estate</b>  13.09.2018 </p>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Home1;
