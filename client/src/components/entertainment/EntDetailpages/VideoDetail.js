import React, { Component } from 'react';
import './videodetail.css';
import LatestNews from '../entertainmenthome/LatestnewsSec';
import { connect } from 'react-redux'
import { Rate } from 'antd';

class VideoDetail extends Component{
    constructor(props) {
        super(props)
        this.state = {
            showDetail: 9
        };
    }

    componentDidMount(){
        const { text } = this.props,
        { showDetail } = this.state;
        this.setState({ showDetail: text.length > 0 ? text : showDetail});
    }

    componentDidUpdate(prevProps, prevState){
        window.scrollTo(0,0);
        if(prevProps.text !== this.props.text){
            this.setState({showDetail: this.props.text})
        }
    }

    nextVideo(el){
        const { data, dispatch } = this.props;
        let { showDetail } = this.state, 
        name = el.id || el.elem.id,
        elem = el.elem || el,
        entertainment = data.entertainment,
        detail = el.arr || data.arr || data.detail,
        inputValue = showDetail + 9;
        dispatch({type: 'SEARCHON', inputValue});
        this.props.history.push({pathname: `/entertainment_detail/${name}`, state: {elem, detail, entertainment}})
    }

  render(){
    const { data } = this.props,
    { showDetail } = this.state; 
    let video = data.elem || data.news1 || data.sports1 || data.movies1 || data.dramas1,
    { news, sports } = data.entertainment,
    detail = data.arr || data.detail || data.news || data.sports || data.movies || data.dramas,
    description = !!video.description ? video.description : video.title;
    if(description.length > 75){
        description = description.slice(0, 75)
    }

    return(
      <div className="container" style={{width:"75%", marginTop:"20px"}}>
        <div className="row">
          <div className="col-md-8">
            <div className="videoheading">
              <h6> DRAMA</h6>
              <h4 className="h4">{description}</h4>
              <div className="videotag">
                <iframe frameBorder="0" width="100%" height="400" src={video.embed_url} allowFullScreen allow="autoplay"></iframe>
                <div>
                  <a className="socialbox facebook" href="https://www.facebook.com/cghubs">
                    <div className="social-icon">
                      <i className="fa fa-fw fa-facebook"></i>
                    </div>
                    <div className="description">
                      <span className="ng-binding-shares"></span>
                      <span className="ng-binding-likes"></span>
                      <span>Like us on Facebook!</span>
                    </div>
                  </a>
                  <a className="socialbox twitter" href="https://twitter.com/cghubs">
                    <div className="social-icon">
                      <i className="fa fa-fw fa-twitter"></i>
                    </div>
                    <div className="description">
                      <span className="ng-binding"></span>
                      <span>Follow us on Twitter!</span>
                    </div>
                  </a>
                </div>
                <div className="videoheading">
                  <h4 className="h4"> Watch On Youtube </h4>
                  <p className="precomend">RECOMMENDED FOR YOU</p>
                  <div className="row" style={{padding:"0px"}}>
                      {detail && detail.map((elem, key) => {
                          let des = elem.description.length > 0 ? elem.description : elem.title;
                          if(des.length > 25){
                              des = des.slice(0, 25)
                              des += '...'
                          }
                          if(key >= (showDetail - 9) && key <= (showDetail - 1)){
                              return (
                                  <div key={key} className="col-md-4 col-sm-4" onClick={this.nextVideo.bind(this, elem)}>
                                      <img style={{height:"130px", width:"100%"}} src={elem.thumbnail_url} />
                                      <p>{des}</p>
                                  </div>
                              )
                          }
                      })}
                  </div>
                </div>
                <div>
                  <div className="row">
                    <span><Rate allowHalf defaultValue={2.5} />Rate This </span>
                    <h4> Comments </h4>
                    <p> 0 Comments </p>
                    <div className="col-md-2">
                      <img src="images/images.jpg"/>
                    </div>
                    <div className="col-md-10 col-sm-6 col-sm-offset-3">
                        <div id="imaginary_container">
                            <div className="input-group stylish-input-group">
                                <input type="text" className="form-control"  placeholder="Add a comment" />
                                <span className="input-group-addon">
                                  <div className="text-center text-md-left">
                                      <a className="btn button_custom" style={{width:"110%"}}>Send</a>
                                  </div>
                                </span>
                            </div>
                        </div>
                    </div>
            	    </div>
                </div>
                <div className="videoheading">
                  <p className="precomend">More from Dramas</p>
                  <div className="row" style={{padding:"0px"}}>
                    <div className="col-md-4 col-sm-4">
                      <iframe width="100%" height="130" src="https://www.youtube.com/embed/oewZnJX3er0" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                      <p> The one you and And the One Is the Only one </p>
                    </div>
                    <div className="col-md-4 col-sm-4">
                      <iframe width="100%" height="130" src="https://www.youtube.com/embed/0c6N052SMuY" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                      <p> The one you and And the One Is the Only one </p>
                    </div>
                    <div className="col-md-4 col-sm-4">
                      <iframe width="100%" height="130" src="https://www.youtube.com/embed/vHdwv7NqLs0" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                      <p> The one you and And the One Is the Only one </p>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <LatestNews data={{news, sports}} callRoute={this.nextVideo.bind(this)}/>
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

export default connect(mapStateToProps)(VideoDetail);
