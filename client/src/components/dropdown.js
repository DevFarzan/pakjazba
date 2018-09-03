import React, { Component } from 'react';
import { Menu, Dropdown, Icon, message  } from 'antd';
import AsyncStorage from '@callstack/async-storage';
import { Redirect } from 'react-router';

class Dropdowns extends Component{
    state = {
        toDashboard: false,
        logout: false
    }

    handleChangeLogout = () =>{
        AsyncStorage.removeItem('user')
            .then(() => {
                this.props.modalContent();
                this.setState({
                    logout: true
                })
            })
    }

    profilePage = () => {
        this.setState({toDashboard: true})
    }

    render(){
        if (this.state.toDashboard === true) {
            return <Redirect to='/profile_user' />
        }

        if(this.state.logout === true) {
            return <Redirect to='/'/>
        }

        const onClick = function ({ key }) {
            message.info(`Click on item ${key}`);
        };

        const menu = (
            <Menu onClick={onClick}>
                <Menu.Item key="1" onClick={this.profilePage}>My Profile</Menu.Item>
                <Menu.Item key="2">Settings</Menu.Item>
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