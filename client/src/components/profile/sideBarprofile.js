import React, { Component } from 'react';
import './sideBarprofile.css';
import { Menu, Icon } from 'antd';


const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class ProfileSidebar extends React.Component {
  handleClick = (e) => {
    console.log('click ', e);
  }

  render(){
    return(

      <Menu
        onClick={this.handleClick}
        style={{ width: 256, height: 270 }}
        defaultSelectedKeys={['1']}
        mode="inline"
      >
        <SubMenu key="sub1" title={<span><Icon type="mail" /><span>Listing</span></span>}>

          <Menu.Item key="1">Business Listing</Menu.Item>
          <Menu.Item key="2">Room Renting</Menu.Item>
          <Menu.Item key="3">Buy & Sell</Menu.Item>
            <Menu.Item key="4">Job Listing</Menu.Item>
              <Menu.Item key="5">Education</Menu.Item>
        </SubMenu>
      </Menu>
      
    )
  }
}

export default ProfileSidebar;
