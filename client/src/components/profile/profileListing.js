import React, { Component } from 'react';
import BussinesCard from '../business/bussinessCard';


class ProfileListing extends Component{

  constructor(props){
      super(props)
  }

  componentDidMount(){
    console.log(this.props.data,'hgfhgfhghf')
    const business = this.props.data
  }



  render(){

    const listing = ['business', 'roomrent', 'buyandsell'];
    return(
        <span>sadsdsad</span>
      )
  }
}

export default ProfileListing;
