import React, { Component } from 'react';
import './LatestStories.css';
import {Link} from "react-router-dom";
import { connect } from 'react-redux'
import LatestNews from './LatestnewsSec';

class Stories extends Component{
    nextVideo(obj){
        const { dispatch, entertainment } = this.props;
        let inputValue = '',
        elem = obj.elem,
        arr = obj.arr;
        dispatch({type: 'SEARCHON', inputValue});        
        this.props.history.push({pathname: `/entertainment_detail/${elem.id}`, state: {elem, arr, entertainment}})
    }

    changeCat(obj){
        const { entertainment } = this.props;
        let arr = obj.arr;
        this.props.history.push({pathname: `/entertainment_Category/${obj.str}`, state: {arr,entertainment}})
    }

    render(){
        const { news, sports, dramas, movies } = this.props.entertainment;
        let detail = Object.values(this.props.entertainment);

        return(
            <div className="container" style={{width:"75%", marginTop:"-20px"}}>
                <div className="row">
                    <div className="col-md-8">
                        {Object.keys(this.props.entertainment).map((el, k) => {
                          let arr = detail[k];
                          let str = el.split('')[0].toUpperCase() + el.slice(1, el.length);
                          return (
                              <div key={k} className="row" style={{padding:"0px"}}>
                                  <h4><strong>{str}</strong></h4>
                                  {arr.map((elem, key) => {
                                    let des = !!elem.description ? elem.description : elem.title;
                                    if(des.length > 65){
                                        des = des.slice(0, 56)
                                        des += '...'
                                    }
                                    if(key <= 2){
                                        return (
                                            <div key={key} className="col-md-4 col-sm-4" onClick={this.nextVideo.bind(this, {elem, arr})}>
                                                <img style={{height:"130px", width:"100%"}} src={elem.thumbnail_url} />
                                                <p>{des}</p>
                                            </div>
                                        )
                                    }
                                  })} 
                                  <p className="col-md-offset-7" 
                                      style={{float: 'right', marginRight: '20px'}}
                                       onClick={this.changeCat.bind(this, {arr, str})}
                                      >See More...</p>                         
                                  <hr style={{margin:"0px"}}/>
                              </div>
                            )
                        })}                      
                        <hr style={{margin:"0px"}}/>
                        <div className="row" style={{padding:"0px"}}>
                            <h4><strong> LATEST MUSIC </strong></h4>
                            <div className="col-md-4 col-sm-4">
                                <img src="images/images (3).jpg"/>
                                <p> The one you and And the One Is the Only one </p>
                            </div>
                            <div className="col-md-4 col-sm-4">
                                <img src="images/images (3).jpg"/>
                                <p> The one you and And the One Is the Only one </p>
                            </div>
                            <div className="col-md-4 col-sm-4">
                                <img src="images/images (3).jpg"/>
                                <p> The one you and And the One Is the Only one </p>
                            </div>
                        </div>
                        <hr style={{margin:"0px"}}/>
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

export default connect(mapStateToProps)(Stories);
