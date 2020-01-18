import React, { Component } from 'react';
import EntSlider from '../entertainmenthome/EntSlider';
import EHeader from '../entertainmenthome/entertainmentHeader';
import ECategory from '../../Explore/entertainment-category';
import Footer from '../../footer/footer';
import DramaSection from './CategorySelect';
import Burgermenu from '../../header/burgermenu';

class EntCategory extends Component{
    componentDidMount(){
        window.scrollTo(0,0);
    }

    render(){
        let obj = this.props.location.state;
        let keys = Object.keys(obj),
        arr = keys.includes('news') ? obj.news : keys.includes('sports') ? obj.sports : keys.includes('dramas') ? obj.dramas : keys.includes('movies') ? obj.movies : keys.includes('musics') ? obj.musics : obj.arr; 
        
        return(
            <div className="">
                <Burgermenu entertainment={obj.entertainment}/>
                {/* <EHeader entertainment={obj.entertainment} {...this.props}/> */}
                <div style={{backgroundColor:"#032a30",width:"100%",height:"67px",marginTop:"-20px"}}>
                </div>
                <div>
                    <EntSlider entertainment={obj.entertainment} {...this.props}/>
                    <DramaSection data={arr} entertainment={obj.entertainment} {...this.props}/>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default EntCategory;
