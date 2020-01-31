import React, { Component } from 'react';
import VideoDetail from './VideoDetail';
import EHeader from '../entertainmenthome/entertainmentHeader';
import Footer from '../../footer/footer';
import LatestNews from '../entertainmenthome/LatestnewsSec';
import Burgermenu from '../../header/burgermenu';
import HeaderMenu from '../../header/headermenu';

class VideoBox extends Component{
    constructor(props) {
        super(props)
        this.state = {};
    }

    componentDidMount(){
        window.scrollTo(0,0);
    }

    render(){
        let obj = this.props.location.state;
        return(
            <div className="">
                <HeaderMenu />
                {/* <Burgermenu entertainment={obj.entertainment}/> */}
                {/*<EHeader entertainment={obj.entertainment} {...this.props}/>*/}
                <div className="container" style={{width:"100%", marginTop:"40px"}}>
                    <div>
                        <VideoDetail data={obj} {...this.props}/>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default VideoBox;
