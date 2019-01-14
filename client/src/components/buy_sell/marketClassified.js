import React, { Component } from 'react';
import Burgermenu from '../header/burgermenu';
import Slider from '../header/Slider';
import BuyFirstFold from './buyfirstfold'
import BuyThirdFold from './buythirdfold'
import BuyFourthFold from './buyforthfold'
import Footer from '../footer/footer';
import { connect } from 'react-redux';

class MarketClassified extends Component{
    componentDidMount() {
        window.scrollTo(0,0);
    }

    componentWillUnmount(){
        let inputValue = '';
        if(this.props.text){
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
                            <Slider mainH1="Pakjazba Classified" mainH2=""/>
                        </div>
                    </div>
                    <div className ="visible-xs" style={{"background":"#d8e7e4",marginTop : "-20px",backgroundSize: 'cover'}}>
                        <div className="background-image">
                            <Burgermenu/>
                            <Slider mainH1="Pakjazba Classified" mainH2=""/>
                        </div>
                    </div>
                
                {!this.props.text && <BuyFirstFold />}
                <BuyFourthFold />
                <div className="row" style={{marginTop:"40px"}}>
                  <div className="col-md-12">
                    {/*<BuyThirdFold />*/}
                  </div>
                </div>
                <div className="row">
                    {/*<div className="col-md-12">
                        <img src="../images/businesslistingimage.png" style={{width:'100%'}} />
                    </div>*/}
                </div>
                <Footer />
            </div>

        )
    }
}

const mapStateToProps = (state) => {
    return({
        text: state.text
    })
}

export default connect(mapStateToProps)(MarketClassified);
