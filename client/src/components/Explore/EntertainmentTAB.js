import React, { Component } from 'react';
import { Tabs, Icon } from 'antd';
import Stories from '../entertainment/entertainmenthome/LatestStories';
import EntertainmentCategory from '../entertainment/entertainmentPages/EntertainmentTabCategory';
import axios from "axios/index";
// import ECategory from './entertainment-category';
// import EntertainmentHome from '../entertainment/entertainmenthome/EntertainmentHome';

class EntertainmentTab extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
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
        window.scrollTo(0, 0);
        this.callApi()
    }

    async callApi() {
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

    onChange = async (keyValue) => {
        const { newsApi, sportsApi, dramasApi, moviesApi, musicsApi } = this.state;

        if (keyValue == 'entertainment') {
            let news = await axios.get(newsApi);
            let sports = await axios.get(sportsApi);
            let dramas = await axios.get(dramasApi);
            let movies = await axios.get(moviesApi);
            let musics = await axios.get(musicsApi);

            this.setState({
                news: news.data.list,
                sports: sports.data.list,
                dramas: dramas.data.list,
                movies: movies.data.list,
                musics: musics.data.list

            });
        }
        else if (keyValue == 'movies') {
            let movies = await axios.get(moviesApi);
            this.setState({
                news: [],
                sports: [],
                dramas: [],
                movies: movies.data.list,
                musics: []

            });
        }
        else if (keyValue == 'dramas') {
            let dramas = await axios.get(dramasApi);
            this.setState({
                news: [],
                sports: [],
                dramas: dramas.data.list,
                movies: [],
                musics: []

            });
        }
        else if (keyValue == 'news') {
            let news = await axios.get(newsApi);
            this.setState({
                news: news.data.list,
                sports: [],
                dramas: [],
                movies: [],
                musics: []

            });
        }
        else if (keyValue == 'sports') {
            let sports = await axios.get(sportsApi);
            this.setState({
                news: [],
                sports: sports.data.list,
                dramas: [],
                movies: [],
                musics: []

            });
        }
        // else if(keyValue == 'upload'){

        // }

    }

    render() {
        const { news, sports, dramas, movies, musics } = this.state;
        const { TabPane } = Tabs;
        console.log(this.props, 'this,props in entertainment tab')
        // const { states, noText, showroomrents, roomrents, filteredArr, cities, to, from, loader, objData, goDetail } = this.state;
        // const antIcon = <Icon type="loading" style={{ fontSize: 120 }} spin />;

        return (
            <div>
                <div className="row">
                    <div className="col-xs-12 col-sm-3 col-md-3 col-lg-3">
                        <Tabs defaultActiveKey="2">

                            <TabPane tab={
                                <span><Icon type="android" /> Category </span>}
                                key="2">
                                <EntertainmentCategory onChange={this.onChange} />
                            </TabPane>
                        </Tabs>
                    </div>
                    <div className="col-xs-12 col-sm-9 col-md-9 col-lg-9">
                        <Stories entertainment={{ news, sports, dramas, movies, musics }} {...this.props} />
                    </div>
                </div>
            </div>
        )
    }
}
export default EntertainmentTab;
