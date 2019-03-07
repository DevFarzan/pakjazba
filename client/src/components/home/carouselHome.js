import React, { Component } from 'react';
import BussinesCard from '../business/bussinessCard';
import './carouselHome.css';

class CarouselHome extends Component{
    constructor(props) {
        super(props)
        this.state = {
            arrayListing:[],
            to:3
        }
    }

    componentDidUpdate(prevProps){
        if(prevProps.data !== this.props.data){
            this.setState({
                arrayListing:this.props.data
            })
        }
    }

    handleFarward = (e) =>{
        const { arrayListing, to } = this.state;
        if(to < arrayListing.length){
            this.setState({
              to : this.state.to+3, backward: false
            });        
        }else {
            this.setState({ farward: true, backward: false })
        }
    }


    handleBackward = e => {
        const { arrayListing, to } = this.state;
        if(to > 3){
            this.setState({
              to : this.state.to-3, farward: false
            })
        }else {
            this.setState({ backward: true, farward: false })
        }
    }


    render(){
        const { arrayListing, to, farward, backward } = this.state,
        { detail } = this.props;

        return(
            <div className="carousel-reviews broun-block">
                <div className="container" style={{width:"100%"}}>
                    <div className="row" style={{padding:"0"}}>
                        <div id="carousel-reviews" className="carousel slide" data-ride="carousel">
                            <div className="carousel-inner">
                                {arrayListing.map((elem,key) => {
                                    if(key >= to - 3 && key < to){
                                        return (
                                            <div key={key} className="item active">
                                                <div className="col-md-4 col-sm-6">
                                                    <div className="block-text rel zmin">
                                                        <BussinesCard cardDetails={ elem } detail={detail}/>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    }
                                })}
                            </div>
                            <a disabled={backward} className="left carousel-control" href="#carousel-reviews" role="button" data-slide="prev">
                                <span className="glyphicon glyphicon-chevron-left" id="left" onClick={e => this.handleBackward(e)}></span>
                            </a>
                            <a disabled={farward} className="right carousel-control" href="#carousel-reviews" role="button" data-slide="next">
                                <span className="glyphicon glyphicon-chevron-right" id="right" onClick={e => this.handleFarward(e)}></span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CarouselHome;
