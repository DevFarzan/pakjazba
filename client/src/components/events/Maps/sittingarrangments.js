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
        const { data, range } = this.props,
        { lowestArr, bestSeats } = data;
        
        return(
            <div>
                <Tabs defaultActiveKey="1" onChange={callback}>
                    <TabPane tab="Lowest Price" key="1"><LowestPrice data={lowestArr} range={range}/></TabPane>
                    <TabPane tab="Best Seats" key="2"><BestSeats data={bestSeats} range={range}/></TabPane>
                </Tabs>
            </div>
        )
    }
}

export default Sittingarrangements;
