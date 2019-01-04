import React, { Component } from 'react';
import VitalInfo from './EvitalInfo';
import OfferInfo from './OfferInfo';
import ImageForm from './imageForm';
import DescriptionForm from './descriptionForm';
import KeywordsForm from './keywordsForm';
import './ecomtabs.css';
import { Tabs, Radio } from 'antd';


const TabPane = Tabs.TabPane;

class EcomTabs extends Component{

  constructor(props) {
     super(props);
     this.state = {
       mode: 'top',
     };
   }

   handleModeChange = (e) => {
     const mode = e.target.value;
     this.setState({ mode });
   }


  render(){

    const { mode } = this.state

    return(
    <div className>
      <div className="container" style={{}}>
        <div className="row">
            <div className="col-md-12 hidden-xs">
                <div className="tab" role="tabpanel">
                    <ul className="nav nav-tabs" role="tablist">
                        <li role="presentation" className="active"><a href="#Section1" aria-controls="home" role="tab" data-toggle="tab">Vital Info</a></li>
                        <li role="presentation"><a href="#Section2" aria-controls="profile" role="tab" data-toggle="tab">Offer</a></li>
                        <li role="presentation"><a href="#Section3" aria-controls="messages" role="tab" data-toggle="tab">Images</a></li>
                        <li role="presentation"><a href="#Section4" aria-controls="messages" role="tab" data-toggle="tab">Description</a></li>
                        <li role="presentation"><a href="#Section5" aria-controls="messages" role="tab" data-toggle="tab">Keywords</a></li>
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
                    <TabPane tab="Vital Info" key="1"><a href="#Section1" aria-controls="home" role="tab" data-toggle="tab"></a></TabPane>
                    <TabPane tab="Offer" key="2"><a href="#Section2" aria-controls="profile" role="tab" data-toggle="tab"></a></TabPane>
                    <TabPane tab="Images" key="3"><a href="#Section3" aria-controls="messages" role="tab" data-toggle="tab">Keywords</a></TabPane>
                    <TabPane tab="Description" key="4">Description</TabPane>
                    <TabPane tab="Keywords" key="5"><a href="#Section3" aria-controls="messages" role="tab" data-toggle="tab">Keywords</a></TabPane>
                  </Tabs>
                </div>
              </div>
            </div>
        </div>
      </div>
      <div className="container" style={{width:"100%"}}>
        <div class="tab-content">
            <div role="tabpanel" class="tab-pane fade in active" id="Section1">
                <VitalInfo/>
            </div>
            <div role="tabpanel" class="tab-pane fade" id="Section2">
              <OfferInfo/>
            </div>
            <div role="tabpanel" class="tab-pane fade" id="Section3">
              <ImageForm/>
            </div>
            <div role="tabpanel" class="tab-pane fade" id="Section4">
              <DescriptionForm/>
            </div>
            <div role="tabpanel" class="tab-pane fade" id="Section5">
              <KeywordsForm/>
            </div>

        </div>
      </div>
    </div>
    )
  }
}

export default EcomTabs;
