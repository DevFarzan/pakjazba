import React, { Component } from 'react';
import { Tabs, Icon } from 'antd';
import EntertainmentHome from '../entertainment/entertainmenthome/EntertainmentHome';
import Stories from '../entertainment/entertainmenthome/LatestStories';
import EntertainmentCategory from '../entertainment/entertainmentPages/EntertainmentTabCategory';
import ECategory from './entertainment-category';
import axios from "axios/index";
    
class EntertainmentTab extends Component{
    componentDidMount(){
        window.scrollTo(0,0);
    }
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

        const { TabPane } = Tabs;
        
        const { states, noText, showroomrents, roomrents, filteredArr, cities, to, from, loader, objData, goDetail } = this.state;
        const antIcon = <Icon type="loading" style={{ fontSize: 120 }} spin />;
        const { news, sports, dramas, movies, musics } = this.state;
        
        return(
            <div>
                <div className="row">
                    <div className="col-xs-12 col-sm-3 col-md-3 col-lg-3">
                        <Tabs defaultActiveKey="2">
                            
                            <TabPane tab={
                                <span><Icon type="android" /> Category </span>}
                                key="2">
                                    <EntertainmentCategory/>
                            </TabPane>
                        </Tabs>
                    </div>
                    <div className="col-xs-12 col-sm-9 col-md-9 col-lg-9">
                        <Stories entertainment={{news, sports, dramas, movies, musics}} {...this.props}/>
                    </div>
                </div>
            </div>
        )
    }
}
export default EntertainmentTab;
