import React, { Component } from 'react';
import Burgermenu from '../header/burgermenu';
import Slider from '../header/Slider';
import Firstfold from "./firstfold";
import Secondfold from './secondfold'
import Footer from '../footer/footer';
import { connect } from 'react-redux';
import BusinessCategory from "./BusinessCategories";

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
              <div className ="hidden-xs" style={{"background":"#d8e7e4",marginTop:'86px',backgroundSize: 'cover'}}>
                  <div className="background-image">
                      <Burgermenu/>
                      <Slider mainH1="Pakjazba Business Listing" mainH2=""/>
                  </div>
              </div>
              <div className ="visible-xs" style={{"background":"#d8e7e4",marginTop : "-20px",backgroundSize: 'cover'}}>
                  <div className="background-image">
                      <Burgermenu/>
                      <Slider mainH1="Pakjazba Business Listing" mainH2=""/>
                  </div>
              </div>
              <div className ="hidden-xs" style={{"background":"#d8e7e4",marginTop:'86px',backgroundSize: 'cover'}}>
                  <div className="background-image">
                      <Burgermenu/>
                      <Slider mainH1="PakJazba Business Listing" mainH2=""/>
                  </div>
              </div>
                  {!this.props.text && <Firstfold/>}
                  <Secondfold/>
                  <BusinessCategory/>
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
