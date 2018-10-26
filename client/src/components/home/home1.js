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
        window.scrollTo(0,0);
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
                <div className="row">
                        <div className="col-md-12">
                          <h4 style={{color:'black',marginLeft:'15px',fontSize:'22px',fontWeight:'bold',marginTop: '13px'}}>Find what you need…</h4>
                        </div>
                      </div>
                <div className="row" style={{marginTop:'-23px'}}>
                    <div className="col-md-10">
                        <div className="col-md-3 col-sm-4">
                            <div className="card outset" style={{boxShadow:'none',border: '1px solid rgba(128, 128, 128, 0.56)',background: 'white'}}>
                                <div className="card-body space tag1">
                                    <Link to={`/market_roommates`} style={{color: 'black'}}>
                                        <img alt='' src="./images/Rent room stockholm.jpg" height="82" width="95" style={{marginLeft: "-5px",marginTop: "-5px",marginBottom: "-5px"}} /><b className="tag1"> Room Renting</b>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-4">
                            <div className="card outset" style={{boxShadow:'none',border: '1px solid rgba(128, 128, 128, 0.56)',background: 'white'}}>
                                <div className="card-body space tag1">
                                    <Link to={`/market_business`} style={{color: 'black'}}>
                                        <img alt='' src="./images/busioness-listing.jpg" height="82" width="95" style={{marginLeft: "-5px",marginTop: "-5px",marginBottom: "-5px"}} /><b className="tag1"> Business Listing</b>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-4">
                            <div className="card outset" style={{boxShadow:'none',border: '1px solid rgba(128, 128, 128, 0.56)',background: 'white'}}>
                                <div className="card-body space tag1">
                                    <Link to={`/market_classified`} style={{color: 'black'}}>
                                        <img alt='' src="./images/Where to Buy Hero Image.jpg" height="82" width="95" style={{marginLeft: "-5px",marginTop: "-5px",marginBottom: "-5px"}} /><b className="tag1"> Buy & Sell </b>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-4">
                            <div className="card outset" style={{boxShadow:'none',border: '1px solid rgba(128, 128, 128, 0.56)',background: 'white'}}>
                                <div className="card-body space tag1">
                                    <Link to={`/market_classified`} style={{color: 'black'}}>
                                    <img alt='' src="./images/bg.jpg" height="82" width="95" style={{marginLeft: "-5px",marginTop: "-5px",marginBottom: "-5px"}} /><b style={{paddingLeft:'9px'}}>JOBS</b></Link>
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
                            <hr style={{border: '1px solid #80808080'}} />
                        </div>
                        <div className="col-md-1" style={{marginTop: "25px"}}>
                            <h3><b>Blog</b></h3>
                        </div>
                        <div className="col-md-5">
                            <br/>
                            <hr style={{border: '1px solid #80808080'}} />
                        </div>
                    </div>
                </div>
                <div className="row"> <br/></div>
                <div className="row" style={{marginTop:'-76px'}}>
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
                                <img alt='' src="./images/default/shutterstock_67891210.png" width="130" height="120" />
                            </Link>
                        </div>
                        <div className="col-md-8" style={{paddingLeft: '30px'}}>
                            <h5><b>Loram Ipsum, Loram Ipsum, Loram Ipsum </b></h5>
                            <p style={{paddingTop: "21px"}}><span style={{marginRight: "67px"}}>By Hills Estate</span>    <span>13.09.2018</span> <br/><br/></p>
                        </div>
                        <div className="col-md-4">
                            <Link to={`/detail_blog`}>
                                <img alt='' src="./images/default/shutterstock_88612780.png" width="130" height="120" />
                            </Link>
                        </div>
                        <div className="col-md-8" style={{paddingLeft: '30px'}}>
                            <h5><b>Loram Ipsum, Loram Ipsum, Loram Ipsum </b></h5>
                            <p style={{paddingTop: "21px"}}><span style={{marginRight: "67px"}}>By Hills Estate</span>    <span>13.09.2018</span> <br/><br/></p>
                        </div>
                        <div className="col-md-4">
                            <Link to={`/detail_blog`}>
                                <img alt='' src="./images/default/shutterstock_103383050.png" width="130" height="120" />
                            </Link>
                        </div>
                        <div className="col-md-8" style={{paddingLeft: '30px'}}>
                            <h5><b>Loram Ipsum, Loram Ipsum, Loram Ipsum </b></h5>
                            <p style={{paddingTop: "21px"}}><span style={{marginRight: "67px"}}>By Hills Estate</span>    <span>13.09.2018</span> <br/><br/></p>
                        </div>
                        <div className="col-md-4">
                            <Link to={`/detail_blog`}>
                                <img alt='' src="./images/default/shutterstock_167474171.png" width="130" height="120" />
                            </Link>
                        </div>
                        <div className="col-md-8" style={{paddingLeft: '30px'}}>
                            <h5><b>Loram Ipsum, Loram Ipsum, Loram Ipsum </b></h5>
                            <p style={{paddingTop: "21px"}}><span style={{marginRight: "67px"}}>By Hills Estate</span>    <span>13.09.2018</span> <br/><br/></p>
                        </div>
                    </div>
                    <div className="col-md-3" style={{marginTop:'-34px'}}>
                        <Tabs defaultActiveKey="2" style={{border:'1px solid gray',backgroundColor:'rgba(119, 136, 153, 0.05)',padding: '10px'}}>
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
                            <hr style={{border: '1px solid #80808080'}} />
                        </div>
                        <div className="col-md-1" style={{marginTop: "25px"}}>
                            <h3><b>Blog</b></h3>
                        </div>
                        <div className="col-md-5">
                            <br/>
                            <hr style={{border: '1px solid #80808080'}} />
                        </div>
                    </div>
                    <div className="col-md-2">
                        <br/>
                        <h4><b>Popular</b></h4>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="col-md-8">
                            <div className="col-md-6">
                                <div className="col-md-4">
                                    <img alt='' src="./images/default/shutterstock_283141730.png" width="120" height="110" />
                                </div>
                                <div className="col-md-8" style={{paddingLeft: '30px'}}>
                                    <h5><b>Loram Ipsum, Loram Ipsum, Loram Ipsums</b></h5>
                                    <br/>
                                    <p><span style={{marginRight: "67px"}}>By Hills Estate</span>    <span>13.09.2018</span>  <br/><br/></p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="col-md-4">
                                    <img alt='' src="./images/default/shutterstock_287171087.png" width="120" height="110" />
                                </div>
                                <div className="col-md-8" style={{paddingLeft: '30px'}}>
                                    <h5><b>Loram Ipsum, Loram Ipsum, Loram Ipsum </b></h5>
                                    <br/>
                                    <p><span style={{marginRight: "67px"}}>By Hills Estate</span>    <span>13.09.2018</span> <br/><br/></p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="col-md-4">
                                    <img alt='' src="./images/default/shutterstock_332684105.png" width="120" height="110" />
                                </div>
                                <div className="col-md-8" style={{paddingLeft: '30px'}}>
                                    <h5><b>Loram Ipsum, Loram Ipsum, Loram Ipsum </b></h5>
                                    <br/>
                                    <p><span style={{marginRight: "67px"}}>By Hills Estate</span>    <span>13.09.2018</span> <br/><br/></p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="col-md-4">
                                    <img alt='' src="./images/default/shutterstock_416673679.png" width="120" height="110" />
                                </div>
                                <div className="col-md-8" style={{paddingLeft: '30px'}}>
                                    <h5><b>Loram Ipsum, Loram Ipsum, Loram Ipsum </b></h5>
                                    <br/>
                                    <p><span style={{marginRight: "67px"}}>By Hills Estate</span>    <span>13.09.2018</span>  <br/><br/></p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="col-md-4">
                                    <img alt='' src="./images/default/shutterstock_458805415.png" width="120" height="110" />
                                </div>
                                <div className="col-md-8" style={{paddingLeft: '30px'}}>
                                    <h5><b>Loram Ipsum, Loram Ipsum, Loram Ipsum </b></h5>
                                    <br/>
                                    <p><span style={{marginRight: "67px"}}>By Hills Estate</span>    <span>13.09.2018</span>  <br/><br/></p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="col-md-4">
                                    <img alt='' src="./images/default/shutterstock_500151964.png" width="120" height="110" />
                                </div>
                                <div className="col-md-8" style={{paddingLeft: '30px'}}>
                                    <h5><b>Loram Ipsum, Loram Ipsum, Loram Ipsum </b></h5>
                                    <br/>
                                    <p><span style={{marginRight: "67px"}}>By Hills Estate</span>    <span>13.09.2018</span>  <br/><br/></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-1">
                        </div>
                        <div className="col-md-3">
                            <img alt='' src="./images/default/shutterstock_519784624.png" width="300" height="150" />
                            <h5 style={{marginTop:'10px'}}><b>Loram Ipsum, Loram Ipsum, Loram Ipsum </b></h5>
                            <img alt='' src="./images/default/shutterstock_590486768.png" width="300" height="150" />
                            <h5 style={{marginTop:'10px'}}><b>Loram Ipsum, Loram Ipsum, Loram Ipsum </b></h5>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-10">
                        <div className="col-md-4">
                            <br/>
                            <hr style={{border: '1px solid #80808080'}} />
                        </div>
                        <div className="col-md-1" style={{marginTop: "25px"}}>
                            <h3><b>Blog</b></h3>
                        </div>
                        <div className="col-md-5">
                            <br/>
                            <hr style={{border: '1px solid #80808080'}} />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="col-md-8">
                            <div className="col-md-4">
                                <img alt='' src="./images/default/shutterstock_611045375.png" width="250px" height="120" />
                                <h5><br/><b>Loram Ipsum, Loram Ipsum, Loram Ipsum </b></h5>
                                <p>By Hills Estate    13.09.2018 <br/><br/></p>
                            </div>
                            <div className="col-md-4">
                                <img alt='' src="./images/default/shutterstock_620158250.png" width="250px" height="120" />
                                <h5><br/><b>Loram Ipsum, Loram Ipsum, Loram Ipsum </b></h5>
                                <p>By Hills Estate    13.09.2018 <br/><br/></p>
                            </div>
                            <div className="col-md-4">
                                <img alt='' src="./images/default/shutterstock_650457544.png" width="250px" height="120" />
                                <h5><br/><b>Loram Ipsum, Loram Ipsum, Loram Ipsum </b></h5>
                                <p>By Hills Estate    13.09.2018 <br/><br/></p>
                            </div>
                            <div className="col-md-4">
                                <img alt='' src="./images/default/shutterstock_653422798.png" width="250px" height="120" />
                                <h5><br/><b>Loram Ipsum, Loram Ipsum, Loram Ipsum </b></h5>
                                <p>By Hills Estate    13.09.2018 <br/><br/></p>
                            </div>
                            <div className="col-md-4">
                                <img alt='' src="./images/default/shutterstock_681199717.png" width="250px" height="120" />
                                <h5><br/><b>Loram Ipsum, Loram Ipsum, Loram Ipsum </b></h5>
                                <p>By Hills Estate    13.09.2018 <br/><br/></p>
                            </div>
                            <div className="col-md-4">
                                <img alt='' src="./images/default/shutterstock_692689633.png" width="250px" height="120" />
                                <h5><br/><b>Loram Ipsum, Loram Ipsum, Loram Ipsum </b></h5>
                                <p>By Hills Estate    13.09.2018 <br/></p>
                            </div>
                        </div>
                        <div className="col-md-1">
                        </div>
                        <div className="col-md-3">
                            <img alt='' src="./images/default/shutterstock_717281428.png" width="300" height="150" />
                            <h5 style={{marginTop:'10px'}}><b>Loram Ipsum, Loram Ipsum, Loram Ipsum </b></h5>
                            <img alt='' src="./images/default/shutterstock_722699410.png" width="300" height="150" />
                            <h5 style={{marginTop:'10px'}}><b>Loram Ipsum, Loram Ipsum, Loram Ipsum </b></h5>
                        </div>
                    </div>
                </div>

                <Footer />
            </div>
        )
    }
}

export default Home1;
