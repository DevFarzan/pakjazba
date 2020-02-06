import React, { Component } from 'react';
//import Header from '../../Components/home/Header';
import Burgermenu from '../header/burgermenu';
//import Footer from '../../Components/home/headingf8';
import Termsofservices1 from './termsofservices1';
import Footer from '../footer/footer';
import './termsofservices.css'
import HeaderMenu from '../header/headermenu';

class Termsofservices extends Component {
  render() {
    return (
        <div>
            <HeaderMenu/>
        	<Termsofservices1/>
        <Footer/>
  		</div>
    );
  }
}
export default Termsofservices;
