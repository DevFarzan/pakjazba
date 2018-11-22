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
            data: {}
          }
        }

  async componentDidMount(){
      window.scrollTo(0,0);
      let data = this.props.location.state;
      if(data === undefined){
          await this.getDetail(this.props.match.params.value);
      }else {
          this.setState({
              isData : true,
              data : data
          })
          this.getReviews(data);
      }
  }

  async componentDidUpdate(prevProps, prevState){
      if(prevProps.match.params.value !== this.props.match.params.value){
          await this.getDetail(this.props.match.params.value);
      }
  }

  async getDetail(val){
      let response = await HttpUtils.get('getSpecific?randomKey='+val);
      if(response.code === 200){
          this.setState({data: response.content, isData : true});
          this.getReviews(response.content);
      }else {
          this.setState({isData : false})
      }
  }

  async getReviews(data){
    console.log('abccccccccccccc')
      let res = await HttpUtils.get('getreviews')
      if(res.code === 200) {
          let filteredReviews = res.content.filter((elem) => elem.objid === data._id)
          this.setState({reviews: filteredReviews})
      }
  }

  render(){
    const { isData, data } = this.state;
    if(!isData){
        return <Redirect to='/' />
    }

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
        <EdetailFirstfold data={data}/>
        <Footer />
      </div>

    )
  }
}
export default EventDetail;
