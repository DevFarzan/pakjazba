import React, { Component } from 'react';
import BussinesCard from '../business/bussinessCard';
import './carouselHome.css';

class CarouselHome extends Component{
  constructor(props) {
      super(props)
      this.state = {
        arrayListing:[],
        // from: 0,
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

  handleBackward = (e) =>{
    this.setState({
      to : this.state.to+3
    })
  }


    handleFarward = e => {
      if(this.state.to >= 3){
        this.setState({
          to : this.state.to-3
        })
      }
    }


  render(){
    const { arrayListing,to } = this.state,
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
                      })
                    }
              </div>
              <a className="left carousel-control" href="#carousel-reviews" role="button" data-slide="prev">
                  <span className="glyphicon glyphicon-chevron-left" id="left" onClick={e => this.handleFarward(e)}></span>
              </a>
              <a className="right carousel-control" href="#carousel-reviews" role="button" data-slide="next">
                  <span className="glyphicon glyphicon-chevron-right" id="right" onClick={e => this.handleBackward(e)}></span>
              </a>
                </div>
            </div>
        </div>
      </div>

    )
  }
}

export default CarouselHome;
