import React, { Component } from 'react';
import NewsTab from '../../home/newsTab';
import './LatestStories.css';

class LatestNews extends Component {
    nextVideo(obj) {
        this.props.callRoute(obj);
    }
    render() {
        const { data } = this.props;
        let detail = data && Object.values(data);

        return (
            <div className="container" style={{ width: "100%" }}>
                <div className="row">
                    <NewsTab />
                </div>
                {Object.keys(data).map((el, key) => {
                    let str = el.split('')[0].toUpperCase() + el.slice(1, el.length),
                        arr = detail[key];
                    return (
                        <div key={key} className="newsBoxes">
                            <h4><strong>{str}</strong></h4>
                            <hr />
                            {arr.map((elem, k) => {
                                let des = elem.description.length ? elem.description : elem.title;
                                if (des.length > 35) {
                                    des = des.slice(0, 35)
                                    des += '...'
                                }
                                if (k <= 2) {
                                    return (
                                        <div key={k} className="row" style={{ cursor: 'pointer', paddingBottom: "10px", paddingTop: "0px" }} onClick={this.nextVideo.bind(this, { elem, arr })}>
                                            <div className="col-md-6 col-sm-5" style={{ paddingRight: "0px" }}>
                                                <img src={elem.thumbnail_url} alt='img' />
                                            </div>
                                            <div className="col-md-6 col-sm-7">
                                                <p>{des}</p>
                                            </div>
                                        </div>
                                    )
                                }
                            })}
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default LatestNews;
