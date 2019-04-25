import React, { Component } from 'react';
import VitalInfo from './EvitalInfo';
import OfferInfo from './OfferInfo';
import ImageForm from './imageForm';
import DescriptionForm from './descriptionForm';
import KeywordsForm from './keywordsForm';
import './ecomtabs.css';
import { Tabs, Radio } from 'antd';


const TabPane = Tabs.TabPane;

class EcomTabs extends Component {

  constructor(props) {
    super(props);
    this.state = {
      mode: 'top',
      evitalInfo: true,
      offerInfo: false,
      images: false,
      description: false,
      keywords: false,
      herfSec:'',
    };
  }

  handleProps = (values) => {
    console.log(values, 'props value')
  }

  offerStates = () => {
    this.setState({
      offerInfo: true,
      evitalInfo: false,
    })
  }
  imgStates = () => {
    this.setState({
      images: true,
      offerInfo: false
    })
  }
  desStates = () => {
    this.setState({
      description: true,
      images: false
    })
  }
  keywordStates = () => {
    this.setState({
      keywords: true,
      description: false
    })
  }
  

  render() {
    const { mode, evitalInfo, offerInfo, images, description, keywords , herfSec} = this.state;
    // console.log(offerInfo, 'kia aay is main')
    return (
      <div className>
        <div className="container">
          <div className="row">
            <div className="col-md-12 hidden-xs">
              <div className="tab" role="tabpanel">
                <ul className="nav nav-tabs" role="tablist">
                  {evitalInfo ?
                    <li role="presentation" className={evitalInfo ? "active" : ''}>
                      <a href="#Section1" aria-controls="home" role="tab" data-toggle="tab">
                        Vital Info</a></li>
                    :
                    <li role="presentation" className="disableTabs">
                      <a href="#Section1" aria-controls="home" disabled role="tab" data-toggle="tab">
                        Vital Info</a></li>
                  }                  
                  {offerInfo ?
                    <li role="presentation" className={offerInfo ? "active" : ''}>
                      <a href="#Section2" aria-controls="profile" role="tab" data-toggle="tab">
                        Offer</a></li>
                    :
                    <li role="presentation" className='disableTabs'>
                      <a href="#Section2" aria-controls="profile" disabled role="tab" data-toggle="tab">
                        Offer</a></li>
                  }
                  {images ?
                    <li role="presentation" className={images ? "active" : ''}>
                      <a href="#Section3" aria-controls="messages" role="tab" data-toggle="tab">
                        Images</a></li>
                    :
                    <li role="presentation" className='disableTabs'>
                      <a href="#Section3" aria-controls="messages" disabled role="tab" data-toggle="tab">
                        Images</a></li>
                  }
                  {description ?
                    <li role="presentation" className={description ? "active" : ''}>
                      <a href="#Section4" aria-controls="messages" role="tab" data-toggle="tab">
                        Description</a></li>
                    :
                    <li role="presentation" className='disableTabs'>
                      <a href="#Section4" aria-controls="messages" disabled role="tab" data-toggle="tab">
                        Description</a></li>
                  }
                  {keywords ?
                    <li role="presentation" className={keywords ? "active" : ''}>
                      <a href="#Section5" aria-controls="messages" role="tab" data-toggle="tab"
                      >Keywords</a></li>
                    :
                    <li role="presentation" className='disableTabs'>
                      <a href="#Section5" aria-controls="messages" disabled role="tab" data-toggle="tab"
                      >Keywords</a></li>
                  }
                </ul>
              </div>
            </div>
            <div className="visible-xs">
              <div className="tab" role="tabpanel">
                <div className="nav nav-tabs" role="tablist">
                  <Tabs
                    defaultActiveKey="1"
                    tabPosition={mode}
                  >
                    <TabPane tab="Vital Info" key="1">
                      <a href="#Section1" aria-controls="home" role="tab" data-toggle="tab">
                        Vital Info
                      </a></TabPane>
                    <TabPane tab="Offer" disabled key="2" >
                      Offer</TabPane>
                    <TabPane tab="Images" key="3">
                      <a href="#Section3" aria-controls="messages" role="tab" data-toggle="tab">
                        Images</a></TabPane>
                    <TabPane tab="Description" key="4">Description</TabPane>
                    <TabPane tab="Keywords" key="5">
                      <a href="#Section3" aria-controls="messages" role="tab" data-toggle="tab">
                        Keywords</a></TabPane>
                  </Tabs>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container" style={{ width: "100%" }}>
          <div class="tab-content">
            {/* if (evitalInfo) { */}
            <div role="tabpanel" class="tab-pane fade in active" id="Section1">
              <VitalInfo
                // onClick={(e) => this.props.whenClicked(e.target.innerText)}
                // onClick={(e) => this.props.handleProps()}
                handleProps={this.handleProps}
                offerStates={this.offerStates}
              />
            </div>
            {/* // } elseIf(offerInfo){ */}
            <div role="tabpane2" class="tab-pane fade" id="Section2">
              <OfferInfo
                handleProps={this.handleProps}
                imgStates={this.imgStates}
              />
            </div>
            {/* // } elseIf(images){ */}
            <div role="tabpane3" class="tab-pane fade" id="Section3">
              <ImageForm
                handleProps={this.handleProps}
                desStates={this.desStates}
              />
            </div>
            {/* // }elseIf(description){ */}

            <div role="tabpane4" class="tab-pane fade" id="Section4">
              <DescriptionForm
                handleProps={this.handleProps}
                keywordStates={this.keywordStates}
              />
            </div>
            {/* // }else{ */}
            <div role="tabpane5" class="tab-pane fade" id="Section5">
              <KeywordsForm
                handleProps={this.handleProps}
              />
            </div>
            {/* // } */}
          </div>
        </div>
      </div>
    )
  }
}

export default EcomTabs;
