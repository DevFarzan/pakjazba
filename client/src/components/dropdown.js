import React, { Component } from 'react';
import { Menu, Dropdown, Icon, message  } from 'antd';
import AsyncStorage from '@callstack/async-storage';



class Dropdowns extends Component{

	handleChangeLogout = () =>{
        AsyncStorage.removeItem('user')
			.then(() => {
                this.props.modalContent();
			})
	}

		
	

	render(){
		const onClick = function ({ key }) {
  message.info(`Click on item ${key}`);
};
		const menu = (
  			<Menu onClick={onClick}>
    			<Menu.Item key="1">My Profile</Menu.Item>
    			<Menu.Item key="2">My Need</Menu.Item>
    			<Menu.Item key="3" onClick={this.handleChangeLogout}>Logout</Menu.Item>
  			</Menu>
);
		return(
				 <Dropdown overlay={menu}>
				    <a className="ant-dropdown-link" href="#">
				      {localStorage.getItem('name')}<Icon type="down" />
				    </a>
				 </Dropdown>
			)
	}

}
export default Dropdowns;