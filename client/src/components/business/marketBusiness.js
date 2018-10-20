import React, { Component } from 'react';
import Burgermenu from '../header/burgermenu';
import Slider from '../header/Slider';
import Firstfold from "./firstfold";
import Secondfold from './secondfold'
import Footer from '../footer/footer';
import { connect } from 'react-redux';

class MarketBusiness extends Component{
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
                    <div className ="" style={{"backgroundImage":"url('http://res.cloudinary.com/dxk0bmtei/image/upload/v1537167325/bg-image-for-farzan-bhai_xjp7q7.png')","height": "407px",marginTop: "-65px",marginLeft:"-66px"}}>
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
