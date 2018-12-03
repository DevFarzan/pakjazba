import React, { Component } from 'react';
import Burgermenu from '../header/burgermenu';
import Slider from '../header/Slider';
import Footer from '../footer/footer';
import { connect } from 'react-redux';
import EventCategories from '../main_Component/EventCategories';
import EventFeatured from './Eventfeaturedcard';

class MarketEvent extends Component{
    componentDidMount() {
        window.scrollTo(0,0);
    }

    // componentWillUnmount(){
    //     let inputValue = '';
    //     if(this.props.text.length){
    //         const { dispatch } = this.props;
    //         dispatch({type: 'SEARCHON', inputValue})
    //     }
    // }

    render(){
        return(
            <div>
                <span>
                    <div className ="" style={{"backgroundImage":"url('../images/bgc-images/events.png')", marginTop : "105px",backgroundSize: 'cover'}}>
                        <div className="background-image">
                            <Burgermenu/>
                            <Slider mainH1="Events" mainH2="Find what you need"/>
                        </div>
                    </div>
                </span>
                {!this.props.text && <EventCategories/>}
                <EventFeatured/>
                <Footer/>
            </div>

        )
    }
}

const mapStateToProps = (state) => {
    return({
        text: state.text
    })
}

export default connect(mapStateToProps)(MarketEvent);
