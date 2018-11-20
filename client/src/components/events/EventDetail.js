import React, { Component } from 'react';
import Burgermenu from '../header/burgermenu';
import Footer from '../footer/footer';
import Slider from '../header/Slider';
import EdetailFirstfold from '../events/EdetailFirstfold';
import { Redirect } from 'react-router';
import {HttpUtils} from "../../Services/HttpUtils";

class EventDetail extends Component{
  constructor(props){
        super()
        this.state = {
            isData: true,
          }
        }

  componentDidMount(){
      window.scrollTo(0,0);
      let data = this.props.location.state;
      if(data === undefined){
          this.setState({
              isData: false
          })
      }else {
          this.setState({
              isData : true,
              data : data
          })
          this.getReviews(data)
      }
  }

  async getReviews(data){
      let res = await HttpUtils.get('getreviews')
      if(res.code === 200) {
          let filteredReviews = res.content.filter((elem) => elem.objid === data._id)
          this.setState({reviews: filteredReviews})
      }
  }

  render(){
    const { isData } = this.state;

    // if(isData){
    //     return <Redirect to='/' />
    // }

    return(
      <div className="">
      <Burgermenu/>
      <div style={{backgroundColor:"#032a30",width:"100%",height:"67px",marginTop:"-20px"}}></div>
        <div className="row jobdetail-page">
            <div className="col-md-12 col-sm-12 col-xs-12" style={{textAlign:"center"}}>
                <div className="">
                    <h1 style={{fontFamily: 'Crimson Text, serif', fontWeight:"bold"}}>Event Detail</h1>
                </div>
            </div>
        </div>
        <EdetailFirstfold/>
        <Footer />
      </div>

    )
  }
}
export default EventDetail;
