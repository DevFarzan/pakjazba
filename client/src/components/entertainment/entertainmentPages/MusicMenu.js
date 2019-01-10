import React, { Component } from 'react';
import { Menu, Icon, Button } from 'antd';
import './EntMusic.css';

const SubMenu = Menu.SubMenu;

class MusicMenu extends Component {

  state = {
   collapsed: false,
 }

 toggleCollapsed = () => {
   this.setState({
     collapsed: !this.state.collapsed,
   });
 }

  render(){
    return(
      <div style={{ width: "100%" }}>

        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="dark"
          inlineCollapsed={this.state.collapsed}
        >
        <h4 className="music"> Pakjazba Music </h4>
          <Menu.Item key="1">
            <Icon type="pie-chart" />
            <span>Home</span>
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="desktop" />
            <span>Browse</span>
          </Menu.Item>
          <Menu.Item key="3">
            <Icon type="inbox" />
            <span>Favorites</span>
          </Menu.Item>
          <Menu.Item key="4">
            <Icon type="inbox" />
            <span>Playlist</span>
          </Menu.Item>
          <Menu.Item key="5">
            <Icon type="inbox" />
            <span>Queues</span>
          </Menu.Item>
        </Menu>
      </div>


    )
  }
}

export default MusicMenu;
