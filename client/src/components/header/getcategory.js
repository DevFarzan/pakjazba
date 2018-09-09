import React, { Component } from 'react';
import { Menu, Dropdown, Button } from 'antd';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';


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

  handleroute = () =>{

  }



  render(){
  		const menu = (
  <Menu>
    <Menu.Item>
      <Link rel="noopener noreferrer" to={`/postad_business`}>Publish Your Business</Link>
    </Menu.Item>
    <Menu.Item>
      <Link rel="noopener noreferrer" to={`/postad_Roommates`}>Roommates / Rentals</Link>
    </Menu.Item>
    <Menu.Item>
      <Link  rel="noopener noreferrer" to={`/postad_buysell`}>Buy & Sell</Link>
    </Menu.Item>
  </Menu>
);
  	return(
  		<div>
  			<Dropdown overlay={menu} placement="bottomRight">
      			<Button>Post Your Need</Button>
    		</Dropdown>
  		</div>
  		)
  }
}
export default getCategory;