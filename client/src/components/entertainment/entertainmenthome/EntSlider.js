import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from "axios/index";
import './Entslider.css';

class EntSlider extends Component{
  constructor(props) {
        super(props)
        this.state = {
            featuresApi: 'https://api.dailymotion.com/videos?fields=description,duration,embed_url,id,thumbnail_url,title,&country=pk&sort=trending&tags=Pakistani+dramas',            
            features: [],
        };
    }

    componentDidMount() {
        this.callApi()
    }

    async callApi(){
        const { featuresApi } = this.state,      
        features = await axios.get(featuresApi);
        this.setState({            
            features: features.data.list
        });
    }

    shuffleArr(arr){
        var i = arr.length,
        j = 0,
        temp;
        while (i--) {
            j = Math.floor(Math.random() * (i+1));

            // swap randomly chosen element with current element
            temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
        return arr.slice(0, 3);
    }

    render(){
        const  { entertainment } = this.props,
        { news, dramas } = entertainment,
        { features } = this.state,        
        news1 = !!news.length && news[0],
        assend = this.shuffleArr([1,2,3,4,5,6,7,8,9]),
        finalArr = features.filter((elem, key) => assend.includes(key)),
        final1 = !!finalArr.length && finalArr[0],
        final2 = !!finalArr.length && finalArr[1],
        final3 = !!finalArr.length && finalArr[2];

        return(
            <div className="container" style={{width:"100%", marginTop:"100px"}}>
                <div className="row">
                    <div className="col-md-5" style={{paddingLeft:"0px", paddingRight:"0px"}}>
                        <div className="videobox">
                            <Link to={{pathname: `/entertainment_detail/${news1.id}`, state: {news1, news, entertainment}}}
                                className="card bg-dark text-white" style={{cursor: 'pointer'}}
                            >
                                <img className="card-img img-fluid" src={news1.thumbnail_url} alt="" style={{width:"100%", height:"400px"}}/>
                                <div className="card-img-overlay d-flex linkfeat">
                                    <span className="badge">Ekspor</span>
                                    <h4 style={{color : 'white'}} className="card-title">{news1.title}</h4>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="col-md-7">
                        <div className="row" style={{padding:"0px"}}>
                            <div className="col-md-6" style={{paddingLeft:"0px", paddingRight:"0px", cursor: 'pointer'}}>
                                <Link to={{pathname: `/entertainment_detail/${final1.id}`, state: {final1, dramas, entertainment}}} className="videobox">
                                    <img src={final1.thumbnail_url} style={{height:"400px", width:"100%"}}/>
                                </Link>
                            </div>
                            <div className="col-md-6" style={{paddingLeft:"0px", paddingRight:"0px"}}>
                                <div className="videobox">
                                    <Link to={{pathname: `/entertainment_detail/${final2.id}`, state: {final2, dramas, entertainment}}}>
                                        <img src={final2.thumbnail_url} style={{height:"200px", width:"100%", cursor: 'pointer'}}/>
                                    </Link>
                                    <Link to={{pathname: `/entertainment_detail/${final3.id}`, state: {final3, dramas, entertainment}}}>
                                        <img src={final3.thumbnail_url} style={{height:"200px", width:"100%", cursor: 'pointer'}}/>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default EntSlider;
