import React, { Component } from 'react';
import LowestPrice from './Lowestprice';
import BestSeats from './bestseats';
import { Tabs } from 'antd';

const TabPane = Tabs.TabPane;

function callback(key) {
  console.log(key);
}


class Sittingarrangements extends Component{
  render(){
    return(
      <div>
        <Tabs defaultActiveKey="1" onChange={callback}>
          <TabPane tab="Lowest Price" key="1"><LowestPrice/></TabPane>
          <TabPane tab="Best Seats" key="2"><BestSeats/></TabPane>
        </Tabs>
      </div>
    )
  }
}

export default Sittingarrangements;
