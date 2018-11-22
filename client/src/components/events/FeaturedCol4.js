import React, { Component } from 'react';
import '../main_Component/FeaturedCol4.css';
import {HttpUtils} from "../../Services/HttpUtils";
import { Link } from "react-router-dom";
import FeaturedCards from '../main_Component/Featured_cards';

class FeaturedCol4 extends Component{
  constructor(props){
      super(props);
      this.state = {
          showEvents: [],
      }
  }

  componentDidMount(){
      this.getAllBusiness()
  }

  async getAllBusiness(){
      var res = await HttpUtils.get('marketplace')
      if(res.code === 200){
          let data = res.eventPortalData;
          this.setState({
              events: data ? data : [],
              showEvents: data ? data.slice(0, 4) : [],
              loader: false
          });
      }
  }

  render(){
    const { showEvents } = this.state;
    return(
      <div className="row" style={{padding:"0px", marginTop:"40px"}}>
        <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
          <div className="ecardfeatured">
              <div className="card-body space" style={{padding: "0"}}>
                  <div className="row">
                      <div className="col-md-12">
                          <h4>Featured Events</h4>
                      </div>
                      {showEvents && showEvents.map((elem, key) => {
                        return (
                          <Link key={key} to={{pathname: `/detail_eventPortal/${elem.randomKey}`, state: elem}}>
                              <FeaturedCards/>
                          </Link>
                          )
                      })}
                  </div>
              </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FeaturedCol4;
