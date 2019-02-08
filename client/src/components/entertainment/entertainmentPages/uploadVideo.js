import React, { Component } from 'react';
import Burgermenu from '../../header/burgermenu';
import EHeader from '../entertainmenthome/entertainmentHeader';
import LatestNews from '../entertainmenthome/LatestnewsSec';
import { connect } from 'react-redux';
import Footer from '../../footer/footer';
import axios from "axios/index";
import Stories from '../entertainmenthome/LatestStories';
import { Rate } from 'antd';
import './uploadVideo.css';
import UploadFunction from './uploadFunction';



class UploadVideo extends Component{
  constructor(props) {
      super(props)
      this.state = {
          newsApi: 'https://api.dailymotion.com/videos?fields=description,duration,embed_html,embed_url,id,likes_total,thumbnail_url,title,&channel=news&country=pk&page=1&limit=100',
          sportsApi: 'https://api.dailymotion.com/videos?fields=description,duration,embed_html,embed_url,id,likes_total,thumbnail_url,title,&channel=sport&country=pk&page=1&limit=100',
          dramasApi: 'https://api.dailymotion.com/user/x1gdbvp/videos?fields=description,duration,embed_html,embed_url,id,thumbnail_url,title,&page=1&limit=100',
          moviesApi: 'https://api.dailymotion.com/channel/shortfilms/videos?fields=description,embed_url,id,thumbnail_url,title,&tags=Pakistani+Movies&page=1&limit=100',
          musicsApi: 'https://api.dailymotion.com/videos?fields=description,duration,embed_url,id,likes_total,thumbnail_url,title,&channel=music&country=pk&search=Pakistani+songs&page=1&limit=100',
          news: [],
          sports: [],
          dramas: [],
          movies: [],
          musics: [],
          blogs: {}
      };
  }

  componentDidMount() {
      window.scrollTo(0,0);
      this.callApi()
  }

  async callApi(){
      const { newsApi, sportsApi, dramasApi, moviesApi, musicsApi } = this.state,
      news = await axios.get(newsApi),
      sports = await axios.get(sportsApi),
      dramas = await axios.get(dramasApi),
      movies = await axios.get(moviesApi),
      musics = await axios.get(musicsApi);
      this.setState({
          news: news.data.list,
          sports: sports.data.list,
          dramas: dramas.data.list,
          movies: movies.data.list,
          musics: musics.data.list
      });
  }


render(){
      const { news, sports, dramas, movies, musics } = this.state;
  return(
    <div className="">
        <Burgermenu entertainment={{news, sports, dramas, movies, musics}}/>
        {/*<EHeader entertainment={{news, sports, dramas, movies, musics}} {...this.props}/>*/}
        <div style={{width:"100%",height:"67px",marginTop:"100px"}}>
        </div>
        <div className="container" style={{width:"70%"}}>
          <div className="row">
            <div className="col-md-8">
              <UploadFunction/>

            </div>
            <div className="col-md-4">

            </div>
          </div>

        </div>
        <Stories entertainment={{news, sports, dramas, movies, musics}} {...this.props}/>
    </div>

    )
  }
}

export default UploadVideo;
