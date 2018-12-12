import React, { Component } from 'react';
import Burgermenu from '../../header/burgermenu';
import Footer from '../../footer/footer';
import Slider from '../../header/Slider';
import CardDetail from '../event_listing/CardDetail';
import ContactDetail from '../event_listing/ContactDetails';
import TermsandConditions from '../event_listing/Terms&Conditions';
import OrderCard from '../event_listing/OrderSummarycard';
import ModalOrderCard from '../event_listing/ModalForm';
import {HttpUtils} from "../../../Services/HttpUtils";
import { Icon, Spin } from 'antd';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';

class BuyerDetail extends Component{
  constructor(props){
      super(props);
      this.state = {
          cardData: {},
          loader: false
      }
  }
  onClick = () => {
    this.setState({loader: true})
    this.child.handleSubmit() // do stuff
  }

  componentDidMount(){
      let data = this.props.location.state;
  }

  onReceiveData(e){
      let data = this.props.location.state || this.props.otherData;
      let obj = {...e, eventId: data._id};
      this.setState({cardData: obj});
  }

  async postTicketData(obj){
      let data = this.props.location.state || this.props.otherData;
      let objData = {data, obj}
      let req = await HttpUtils.post('eventTicket', objData)
      if(req.code === 200){
          this.setState({objData, msg: true, loader: false})
      }
  }

  render(){
    const { msg, objData } = this.state;
    let data = this.props.location.state || this.props.otherData;
    if(msg === true) {
        return <Redirect to={{pathname: '/Ticket_eventPortals', state: objData}} />
    }

    const antIcon = <Icon type="loading" style={{ fontSize: 24, marginRight: '10px' }} spin />;

    return(
      <div className="">
        <Burgermenu/>
        <div style={{backgroundColor:"#032a30",width:"100%",height:"67px",marginTop:"-20px"}}>
        </div>
        <div className="col-md-8" style={{marginTop: '70px'}}>
          <ContactDetail onRef={ref => (this.child = ref)} data={this.state.cardData} onPostTicketData={this.postTicketData.bind(this)}/>
          <CardDetail/>
          <TermsandConditions/>
          <div className="row center_global row">
              {this.state.loader && <Spin indicator={antIcon} />}
              <button disabled={!!this.state.loader} style={{textAlign: 'center', width:"45%"}} className="btn button_custom"  onClick={this.onClick}>Submit Event</button>
        </div>
        </div>
        <div className="col-md-4 hidden-xs hidden-sm" style={{marginTop: '50px'}}>
          <OrderCard data={data} onChange={this.onReceiveData.bind(this)}/>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
    return({
        otherData: state.otherData
    })
}

export default connect(mapStateToProps)(BuyerDetail);
