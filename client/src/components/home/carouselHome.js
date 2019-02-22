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

  handleEvent = (e) =>{
    console.log(e.target.id,'evennnnttttttttt');
    this.setState({
      to : this.state.to+3
    })
  }




  render(){
    const { arrayListing,to } = this.state;
    // console.log(this.props.data,'asdasdasd');
    // var marketPlaceArray = [];
    //marketPlaceArray = this.props.businessListing;
    return(
      <div class="carousel-reviews broun-block">
        <div class="container" style={{width:"100%"}}>
            <div class="row" style={{padding:"0"}}>
                <div id="carousel-reviews" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner">
                    {arrayListing.map((elem,key) => {
                      console.log(key,'sadasdsad')
                      if(key<to){
                      return (
                        <div class="item active">
                            <div class="col-md-4 col-sm-6">
                                <div class="block-text rel zmin">
                                  <BussinesCard cardDetails = { elem }/>
                                </div>
                            </div>
                        </div>
                        )
                      }
                      })
                    }
              </div>
              <a class="left carousel-control" href="#carousel-reviews" role="button" data-slide="prev">
                  <span class="glyphicon glyphicon-chevron-left" id="left" onClick={e => this.handleEvent(e)}></span>
              </a>
              <a class="right carousel-control" href="#carousel-reviews" role="button" data-slide="next">
                  <span class="glyphicon glyphicon-chevron-right" id="right" onClick={e => this.handleEvent(e)}></span>
              </a>
                </div>
            </div>
        </div>
      </div>

    )
  }
}

export default CarouselHome;
