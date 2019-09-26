import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from "axios/index";
import './Entslider.css';
import { isMobile, isTablet, isBrowser } from 'react-device-detect';


class EntSlider extends Component{
  constructor(props) {
        super(props)
        this.state = {
            featuresApi: 'https://api.dailymotion.com/videos?fields=description,duration,embed_url,id,thumbnail_url,title,&country=pk&sort=trending&tags=Pakistani+dramas',
            sportsApi: 'https://api.dailymotion.com/videos?fields=description,duration,embed_url,id,thumbnail_url,title,&tags=Pakistani+cricket',
            features: [],
            sports: []
        };
    }

    componentDidMount() {
        this.callApi()
    }

    async callApi(){
        const { featuresApi, sportsApi } = this.state,
        features = await axios.get(featuresApi),
        sports =await axios.get(sportsApi);
        console.log(features,'checkinggggggggggg');
        this.setState({
            features: features.data.list,
            sports: sports.data.list
        });
    }

    shuffleArr(arr, len){
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
        return arr.slice(0, len);
    }

    render(){
        const  { entertainment, match } = this.props,
        { news, dramas } = entertainment,
        { features, sports } = this.state,
        target = match.path.slice(1, match.path.length),
        target2 = match.params.value;
        console.log(features,'checkinggg header')
        let news1, assend, finalArr, final1, final2, final3, str, obj;
        if(target.toString() === 'entertainment_Home'){
            console.log('helloooooooooo');
            news1 = !!news.length && news[0],
            console.log(finalArr,'hellloooooooooooo1');
            assend = this.shuffleArr([1,2,3,4,5,6,7,8,9], 3),
            finalArr = features.filter((elem, key) => assend.includes(key)),
            final1 = !!finalArr.length && finalArr[0],
            final2 = !!finalArr.length && finalArr[1],
            final3 = !!finalArr.length && finalArr[2];
        }else {
            console.log('heloooooooo2');
            str = target2.split('')[0].toLowerCase() + target2.slice(1, target2.length),
            obj = entertainment[str];
            if(str.toString() === 'sports'){
                assend = this.shuffleArr([1,2,3,4,5,6,7,8,9], 4),
                finalArr = !!sports.length && sports.filter((elem, key) => assend.includes(key)),
                news1 = finalArr.length > 0 ? finalArr[0] : {id: 'sjdhlkj'},
                final1 = finalArr.length > 0 ? finalArr[1] : {id: 'sjdhlkj'},
                final2 = finalArr.length > 0 ? finalArr[2] : {id: 'sjdhlkj'},
                final3 = finalArr.length > 0 ? finalArr[3] : {id: 'sjdhlkj'};
            }else {
                console.log('helloooooooooooo3');
                news1 = !!obj.length && obj[0],
                final1 = !!obj.length && obj[1],
                final2 = !!obj.length && obj[2],
                final3 = !!obj.length && obj[3];
            }
        }

        return(
            <div className="container" style={isTablet ? {width:"95%"} : {width:"75%"} }>
                <div className="row" style={{marginTop:"120px"}}>
                    <div className="col-md-5 col-sm-4" style={{paddingLeft:"0px", paddingRight:"0px"}}>
                        <div className="videobox">
                            <Link to={{pathname: `/entertainment_detail/${news1.id}`, state: {news1, news, entertainment}}}
                                className="card bg-dark text-white" style={{cursor: 'pointer'}}
                            >
                                <img className="card-img img-fluid" src={news1.thumbnail_url} alt="" style={{width:"100%", height:"300px"}}/>
                                <div className="card-img-overlay d-flex linkfeat">
                                    <span className="badge">Ekspor</span>
                                    <h4 style={{color : 'white'}} className="card-title">{news1.title}</h4>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="col-md-7 col-sm-8">
                        <div className="row" style={{padding:"0px"}}>
                            <div className="col-md-6 col-sm-6" style={{paddingLeft:"0px", paddingRight:"0px", cursor: 'pointer'}}>
                                <Link to={{pathname: `/entertainment_detail/${final1.id}`, state: {final1, dramas, entertainment}}} className="videobox">
                                    <img src={final1.thumbnail_url} style={{height:"300px", width:"100%"}}/>
                                </Link>
                            </div>
                            <div className="col-md-6 col-sm-6" style={{paddingLeft:"0px", paddingRight:"0px"}}>
                                <div className="videobox">
                                    <Link to={{pathname: `/entertainment_detail/${final2.id}`, state: {final2, dramas, entertainment}}}>
                                        <img src={final2.thumbnail_url} style={{height:"150px", width:"100%", cursor: 'pointer'}}/>
                                    </Link>
                                    <Link to={{pathname: `/entertainment_detail/${final3.id}`, state: {final3, dramas, entertainment}}}>
                                        <img src={final3.thumbnail_url} style={{height:"150px", width:"100%", cursor: 'pointer'}}/>
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
