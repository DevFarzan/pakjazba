import React, { Component } from 'react';
import Burgermenu from '../../header/burgermenu';
import EHeader from '../entertainmenthome/entertainmentHeader';
import LatestNews from '../entertainmenthome/LatestnewsSec';
import { HttpUtils } from '../../../Services/HttpUtils';
import { connect } from 'react-redux';
// import { Media, Player, controls } from 'react-media-player';
import Footer from '../../footer/footer';
import axios from "axios/index";
import Stories from '../entertainmenthome/LatestStories';
import { Rate,Modal } from 'antd';
import Loader from 'react-loader-advanced';
import './uploadVideo.css';
import UploadFunction from './uploadFunction';
//import LatestNews from '../entertainmenthome/LatestnewsSec';

// const { PlayPause, MuteUnmute } = controls

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
          blogs: {},
          loader:false,
          videoData: [],
          visible: false,
          preview: ''
      };
  }

  componentDidMount() {
      window.scrollTo(0,0);
      this.callApi();
      this.getvideos();
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

  getvideos = async () => {
      let response = await HttpUtils.get('getcustomvideo');
      this.setState({ videoData:response.content });
  }

  showModal = () => {
      this.setState({ visible: true });
  }

  handleOk = (e) => {
      this.setState({ visible: false });
  }

  handleCancel = (e) => {
      this.setState({ visible: false });
  }

  addInPreview(e){
      let video = e.videoLink[0],
      URL = 'https' + video.slice(4, video.length);
      this.setState({ preview: URL });
      window.scrollTo(0, 400)
  }

  render(){
      const { news, sports, dramas, movies, musics, loader, videoData, preview } = this.state;

      return(
          <div className="">
              <Burgermenu entertainment={{news, sports, dramas, movies, musics}}/>
              {/*<EHeader entertainment={{news, sports, dramas, movies, musics}} {...this.props}/>*/}
              <div style={{width:"100%",height:"67px",marginTop:"100px"}}>
              </div>
              <div className="container" style={{width:"70%",marginTop:'10px'}}>
                  <UploadFunction onLoader={this.getvideos}/>
              <div className="row">
              <div className="col-md-8">
              

              {preview.length > 0 && <iframe
                  frameBorder="0"
                  width="100%"
                  height="400"
                  src={preview}
                  allowFullScreen
                  allow="autoplay"></iframe>}
              {/*<Media>
                  <div className="media">
                      <div className="media-player">
                          <Player src={this.state.preview} />
                      </div>
                      <div className="media-controls">
                          <PlayPause />
                          <MuteUnmute />
                      </div>
                  </div>
              </Media>*/}
                  {videoData.map((elem,key) => {
                      return (
                          <div key={key} className="col-md-4 col-sm-4" style={{cursor: 'pointer'}}>
                              <img onClick={this.addInPreview.bind(this, elem)} style={{height:"130px", width:"100%"}} src={elem.thumbnailImageLink} />
                              <p onClick={this.addInPreview.bind(this, elem)}>{elem.description.slice(0, 23)}</p>
                          </div>
                      );
                  })}

              </div>
                <div className="col-md-4 col-sm-4 col-xs-12">
                    <LatestNews data={{news, sports}} />
                </div>
                {/*====================showing news and sports start====================*/}

                {/*====================showing news and sports end====================*/}
              </div>
              </div>

              {/*<!-- Modal -->*/}
              <Modal
                title="Upload Video"
                visible={this.state.visible}
                onOk={this.handleOk}
                onCancel={this.handleCancel}
              >
                <iframe id="cartoonVideo" width="103%" height="274px" src={this.state.preview} frameborder="0" allow="autoplay" allowfullscreen></iframe>
              </Modal>
          </div>
      )
  }
}

export default UploadVideo;


// <div className="modal fade" id="myModal1" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
//   <div className="modal-dialog" role="document">
//     <div className="modal-content">
//       <div className="modal-header">
//         <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
//         <h4 className="modal-title" id="myModalLabel">Preview</h4>
//       </div>
//       <div className="modal-body">
//         <iframe id="cartoonVideo" width="560" height="315" src={this.state.preview} frameborder="0" allowfullscreen></iframe>
//       </div>
//       <div className="modal-footer">
//         <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
//       </div>
//     </div>
//   </div>
// </div>
