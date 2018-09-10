import React, { Component } from 'react';
// import Headerroomrenting from "./headerroomrenting";
// import Sliderroomrenting from "./roomrentingcontentarea";
import Roomrenting1content from "./roomrenting1content";
import Roomrentingtwocontentarea from "./roomrenting2contentarea";
//import Roomrentingthreecontentarea from "./roomrenting3contentarea";
import Footer from '../footer/footer';
import App from '../../App';


class MarketRoommates extends Component{
    render(){
        return(
            <div>
                <App />
                <div className="container" style={{width:"87%"}}>
                <Roomrenting1content />
                 
                </div>
                <Footer />
                MarketRoommates
            </div>
        )
    }
}

export default MarketRoommates;