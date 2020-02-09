import React, { Component } from 'react';
import { Menu, Dropdown, Icon } from 'antd';
import { Link } from 'react-router-dom';
class Dropdowns extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {

        const moreMenu = (
            <Menu style={{ color: 'black' }}>
                <Menu.Item key="1" >
                    <Link rel="noopener noreferrer" to={`/aboutus`}>About us</Link>
                </Menu.Item>
                <Menu.Item key="2" >
                    <Link rel="noopener noreferrer" to={`/contactus`}>Contact us</Link>
                </Menu.Item>
            </Menu>
        );

        return (
            <Dropdown overlay={moreMenu} style={{ color: 'white', marginTop: '-23px' }}>
                <a className="ant-dropdown-link">
                    More<Icon type="down" />
                </a>
            </Dropdown>
        )
    }
}

export default Dropdowns;
