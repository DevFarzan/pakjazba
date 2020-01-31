import React, { Component } from 'react';
import './LatestStories.css';
import { connect } from 'react-redux'
import LatestNews from './LatestnewsSec';
import './LatestStories.css';

class Stories extends Component {

    nextVideo(obj) {
        const { dispatch, entertainment } = this.props;

        let inputValue = '',
            elem = obj.elem,
            arr = obj.arr;
        this.props.history.push({ pathname: `/entertainment_detail/${elem.id}`, state: { elem, arr, entertainment } })
    }

    


    render() {
        const { news, sports, dramas, movies, musics } = this.props.entertainment;
        let detail = Object.values(this.props.entertainment);

        return (
            <div className="container" style={{ width: "100%" }}>
                <div className="row" style={{ padding: "0", marginTop: "45px" }}>
                    <div className="col-md-12 col-sm-12">
                        {detail && detail[0].length > 0 && detail[1].length > 0 && detail[2].length > 0 &&
                            detail[3].length > 0 && detail[4].length > 0 ? Object.keys(detail).map((el, k) => {
                                let arr = detail[k];
                                let str = el.split('')[0].toUpperCase() + el.slice(1, el.length);
                                if (str !== 'Musics') {
                                    return (
                                        <div key={k} className="row" style={{ padding: "0px" }}>
                                            {/* <h4><strong>{str}</strong></h4> */}
                                            {arr.map((elem, key) => {
                                                let des = !!elem.description ? elem.description : elem.title;
                                                if (des.length > 65) {
                                                    des = des.slice(0, 30)
                                                    des += '...'
                                                }
                                                if (key <= 5) {
                                                    return (
                                                        <div key={key} className="col-md-4 col-sm-4"
                                                            onClick={this.nextVideo.bind(this, { elem, arr })}
                                                            style={{ cursor: 'pointer' }}
                                                        >
                                                            <img style={{ height: "150px", width: "100%" }} src={elem.thumbnail_url} />
                                                            <p><strong>{des}</strong></p>
                                                        </div>
                                                    )
                                                }
                                            })}

                            

                                        </div>
                                    )
                                }
                            })

                            :
                            Object.keys(detail).map((el, k) => {
                                let arr = detail[k];
                                let str = el.split('')[0].toUpperCase() + el.slice(1, el.length);
                                if (str !== 'Musics') {
                                    return (
                                        <div key={k} className="row" style={{ padding: "0px" }}>
                                            {arr.map((elem, key) => {
                                                let des = !!elem.description ? elem.description : elem.title;
                                                if (des.length > 65) {
                                                    des = des.slice(0, 56)
                                                    des += '...'
                                                }
                                                if (key <= 17) {
                                                    return (
                                                        <div key={key} className="col-md-4 col-sm-4"
                                                            onClick={this.nextVideo.bind(this, { elem, arr })}
                                                            style={{ cursor: 'pointer' }}
                                                        >
                                                            <img style={{ height: "150px", width: "100%" }} src={elem.thumbnail_url} />
                                                            <p><strong>{des}</strong></p>
                                                        </div>
                                                    )
                                                }
                                            })}
                                        </div>
                                    )
                                }
                            })}
                        }
                    <div className="col-md-4 col-sm-4">
                            <LatestNews data={{ news, sports }} callRoute={this.nextVideo.bind(this)} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return ({
        text: state.text
    })
}

export default connect(mapStateToProps)(Stories);

// export default Stories;

