import React, { Component } from 'react';
import { Menu, Dropdown, Button } from 'antd';
import { Link } from 'react-router-dom';
// import axios from 'axios';


class getCategory extends Component{

    componentDidMount = () =>{
        this.handlecategory();
    }

    handlecategory = () =>{
        //axios.get('http://localhost:5000/api/getcategory').then(function(response){
        //console.log(response.data.data[0].categoryName);
        //var category = response.data.data[0].categoryName;
        //})
    }//handlecategory


    render(){
        const menu = (
            <Menu >
                <Menu.Item>
                    <Link rel="noopener noreferrer" to={`/postad_business`}>Publish Your Business</Link>
                </Menu.Item>
                <Menu.Item>
                    <Link rel="noopener noreferrer" to={`/postad_Roommates`}>Roommates / Rentals</Link>
                </Menu.Item>
                <Menu.Item>
                    <Link  rel="noopener noreferrer" to={`/postad_buysell`}>Buy & Sell</Link>
                </Menu.Item>
                <Menu.Item>
                    <Link  rel="noopener noreferrer" to={`/postad_jobPortal`}>Job Portal</Link>
                </Menu.Item>
                <Menu.Item>
                    <Link  rel="noopener noreferrer" to={`/postad_eventPortal`}>Organize an Event</Link>
                </Menu.Item>
                <Menu.Item>
                    <Link  rel="noopener noreferrer" to={`/Forms_Ecommerce`}>Publish Your Product</Link>
                </Menu.Item>
                <Menu.Item>
                    <Link  rel="noopener noreferrer" to={`/Forms_addproduct`}>Search Products</Link>
                </Menu.Item>
            </Menu>
        );

        return(
            <div>
                <Dropdown overlay={menu} placement="bottomRight">
                    <Button className="post_need" style={{backgroundColor:'#37a99b',color:'white'}}>Post Your Need</Button>
                </Dropdown>
            </div>
        )
    }
}
export default getCategory;
