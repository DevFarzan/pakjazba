import React, { Component } from 'react';
import './EdetailFirstfold.css';
import DetailSliders from './slider';
import DateCard from './dateCard';
import FeaturedCol4 from './FeaturedCol4';
import FeaturedCol8 from './FeaturedCol8';
import EventDetailTabIcons from './EventDetailTabIcon';
import EventDetailTab from './EventDetailTab';
import moment from 'moment';
import {
  Icon,
  Tabs
} from 'antd';

class EdetailFirstfold extends Component {
  render() {
    const { data } = this.props;
    let date = data.dateRange && (data.dateRange.from ? data.dateRange.from : data.dateRange[0].from);
    date = moment(date).format('LL');
    const { TabPane } = Tabs;
    // console.log(data,'Event Data');
    return (
      <div>
        <div className="row" style={{ marginTop: '-1.5vw' }}>
          {/* <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,.7), rgba(0,0,0,1.7)), url(${data.coverPhotoSrc})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center center"}}> */}
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" style={{ padding: '0' }}>
            <img src={data.coverPhotoSrc} alt="banner" className="JobBannertoP" />
            <div className="row mainEventBanerPadMarg">
              <div className="col-xs-12 col-sm-8 col-md-8 col-lg-8">
                <h1 className="EventBanerTextCsS">{data.eventTitle}</h1>
                <p className="BanerSmalTextCsS">{data.city + ": " + data.address}</p>
              </div>
              <div className="col-xs-12 col-sm-2 col-md-2 col-lg-2" style={{ textAlign: 'center' }}>
                <p className="eventDateBaner">Event starts</p>
                <h4 className="eventDayBaner">{date}</h4>
              </div>
              <div className="col-xs-12 col-sm-2 col-md-2 col-lg-2">
                <button className="btnCallEventbaner">
                  <Icon type="phone" /> <span>Call Now</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <EventDetailTabIcons />
                <EventDetailTab data={this.props.data} />
            {/* <Tabs defaultActiveKey="1">
              <TabPane
                tab={
                  <span>
                    Details{" "}
                  </span>
                }
                key="1"
              >
                <EventDetailTabIcons />
                <EventDetailTab data={this.props.data} />
              </TabPane>
              <TabPane
                tab={
                  <span>
                    Review{" "}
                  </span>
                }
                key="2"
              >
                <EventDetailTabIcons />
              </TabPane>
            </Tabs> */}
          </div>
        </div>
      </div>

    )
  }
}
export default EdetailFirstfold;

{/*<div className="row">
<div className="col-md-12" style={{paddingTop:"4px", paddingBottom:"10px"}}>
<div className="col-md-4 col-sm-12 col-xs-12 des-space">
<img alt='' src={this.props.data.images && this.props.data.images[0]} style={{width:"100%",height:"300px", borderRadius:"2px"}} />


<FeaturedCol4/>

</div>
<div className="col-md-8 col-sm-12 col-xs-12 des-space">
<div className="Event-borders">
<h3 style={{fontWeight:"bold",fontFamily: 'Crimson Text, sans-serif',marginTop:'11px'}}>{this.props.data && this.props.data.eventTitle}</h3>
<span >
<p className="job-time"></p>
</span>

            <p className="font-style">{this.props.data && this.props.data.description}</p>
            </div>
            
            <DetailSliders/>
            <FeaturedCol8 data={this.props.data}/>
            </div>
            </div>
          </div>*/}
{/*<div className="row">
              <div className="col-md-12" style={{paddingTop:"4px", paddingBottom:"10px"}}>
                  <div className="col-md-4 col-sm-12 col-xs-12 des-space">
                      <img alt='' src={this.props.data.images && this.props.data.images[0]} style={{width:"100%",height:"300px", borderRadius:"2px"}} />
          
          
                      <FeaturedCol4/>
          
                  </div>
                  <div className="col-md-8 col-sm-12 col-xs-12 des-space">
                    <div className="Event-borders">
                      <h3 style={{fontWeight:"bold",fontFamily: 'Crimson Text, sans-serif',marginTop:'11px'}}>{this.props.data && this.props.data.eventTitle}</h3>
                      <span >
                      <p className="job-time"></p>
                      </span>
          
                      <p className="font-style">{this.props.data && this.props.data.description}</p>
                    </div>
          
                    <DetailSliders/>
                    <FeaturedCol8 data={this.props.data}/>
                  </div>
              </div>
          </div>*/}