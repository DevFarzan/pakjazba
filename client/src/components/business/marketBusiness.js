import React, { Component } from 'react';
import Burgermenu from '../header/burgermenu';
import Slider from '../header/Slider';
import Firstfold from "./firstfold";
import Secondfold from './secondfold'
import Footer from '../footer/footer';
import { connect } from 'react-redux';

class MarketBusiness extends Component{
    componentDidMount() {
        window.scrollTo(0,0);
    }
    
    
    componentWillUnmount(){
        let inputValue = '';
        if(this.props.text.length){
            const { dispatch } = this.props;
            dispatch({type: 'SEARCHON', inputValue})
        }
    }

    render(){
        return(
            <div>
                <span>
                    <span className="hidden-xs" style={{marginTop : "105px"}}></span>
                    <span className="visible-xs" style={{marginTop:'-19px'}}></span>
                    <div className ="" style={{"backgroundImage":"url('../images/bgc-images/busnes-listing.png')",backgroundSize: 'cover'}}>
                        <div className="background-image">
                            <Burgermenu/>
                            <Slider mainH1="Business Listing" mainH2="Businesses Near You"/>
                        </div>
                    </div>
                </span>
                {!this.props.text && <Firstfold/>}
                <Secondfold/>
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

export default connect(mapStateToProps)(MarketBusiness);
