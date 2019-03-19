import React, { Component } from 'react';
import LatestNews from '../entertainmenthome/LatestnewsSec';
import { connect } from 'react-redux';
import axios from "axios/index";
import { isMobile, isTablet, isBrowser } from 'react-device-detect';


class DramaSection extends Component{
    constructor(props) {
        super(props)
        this.state = {
            playList: [],
            searchApi: 'https://api.dailymotion.com/channel/shortfilms/videos?fields=description,embed_url,id,thumbnail_url,title,&tags=Pakistani+Movies&page=1&limit=100'
        }
    }

    componentDidMount(){
        const { params } = this.props.match;
        if(params.value === 'Dramas'){
            this.callPlayList()
        }
    }

    async callPlayList(){
        const { searchApi } = this.state;
        let playList = await axios.get(searchApi);
        this.setState({playList: playList.data.list})
    }

    nextVideo(obj){
        const { dispatch, entertainment } = this.props;
        let inputValue = '',
        elem = obj.elem,
        arr = obj.data || obj.arr;
        dispatch({type: 'SEARCHON', inputValue});
        this.props.history.push({pathname: `/entertainment_detail/${elem.id}`, state: {elem, arr, entertainment}})
    }

    render(){
        const { playList } = this.state;
        const { data, entertainment, match } = this.props,
        { news, sports } = entertainment;

        return(
            <div className="container" style={isTablet ? {width:"95%"} : {width:"75%"}}>
                <div className="row">
                    <div className="col-md-8 col-sm-8">
                        <div className="row" style={{padding:"0px"}}>
                            {data.map((elem, key) => {
                                let des = elem.description.length ? elem.description : elem.title;
                                if(des.length > 15){
                                    des = des.slice(0, 15)
                                    des += '...'
                                }
                                if(key <= 17){
                                    return (
                                        <div key={key}
                                            className="col-md-4 col-sm-4"
                                            style={{cursor: 'pointer'}}
                                            onClick={this.nextVideo.bind(this, {elem, data})}
                                        >
                                            <img style={{height:"130px", width:"100%"}} src={elem.thumbnail_url} />
                                            <p>{des}</p>
                                        </div>
                                    )
                                }
                            })}
                        </div>
                        {match.params.value == 'Dramas' && <hr style={{margin:"0px"}}/>}
                        {match.params.value == 'Dramas' && <div className="row" style={{padding:"0px"}}>
                            <h4><strong> Favourite Playlist </strong></h4>
                            {playList.map((elem, key) => {
                                let des = !!elem.description ? elem.description : elem.title;
                                if(des.length > 25){
                                    des = des.slice(0, 25)
                                    des += '...'
                                }
                                if(key <= 2){
                                    return (
                                        <div key={key} className="col-md-4 col-sm-4" onClick={this.nextVideo.bind(this, {elem, data})}>
                                            <img style={{height:"130px", width:"100%"}} src={elem.thumbnail_url} />
                                            <p>{des}</p>
                                        </div>
                                    )
                                }
                            })}
                        </div>}
                        {match.params.value == 'Dramas' && <hr style={{margin:"0px"}}/>}
                    </div>
                    <div className="col-md-4 col-sm-4">
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

export default connect(mapStateToProps)(DramaSection);
