import React, { Component } from 'react';
import MobileMenu from './mobilemenuEcom'
import './fourEcom.css';

class FourEcom extends Component{
  render(){
    return(
      <div className="container">
        {/*<h3 style={{fontWeight:"bold"}}> Show Result </h3>
        <div>
          <h4 style={{fontWeight:"bold"}}> Electronics </h4>
            <ol> Accesories & Supplies </ol>
            <ol> Camera & Photo </ol>
            <ol> Car & Vehicle Electronics </ol>
            <ol> Cell Phones & Accesories</ol>
            <ol> Computers & Accesories</ol>
            <ol> GPS, Finders & Accesories </ol>
            <ol> Headphones </ol>
            <ol> Home Audio </ol>
            <ol> Office Electronics </ol>
            <ol> Portable Audio & Video </ol>
            <ol> Security & Surveillance </ol>
            <ol> Televison & Video </ol>
            <ol> Video Game Consoles & Accesories </ol>
            <ol> eBook Readers & Accesories</ol>
        </div>

        <div>
          <hr style={{borderColor:"black"}}/>
          <h4 style={{fontWeight:"bold", marginTop:"35px"}}> Refind By </h4>
          <h5 style={{fontWeight:"bold", marginTop:"-10px"}}> Featured Brands </h5>
          <div class="checkbox">
            <label> <input type="checkbox" value=""/> Accesories & Supplies </label>
            <label> <input type="checkbox" value=""/> Camera & Photo </label>
            <label> <input type="checkbox" value=""/> Car & Vehicle Electronics </label>
            <label> <input type="checkbox" value=""/> Cell Phones & Accesories </label>
            <label> <input type="checkbox" value=""/> Computers & Accesories </label>
            <label> <input type="checkbox" value=""/> GPS, Finders & Accesories </label>
            <label> <input type="checkbox" value=""/> Headphones </label>
            <label> <input type="checkbox" value=""/> Office Electronics </label>
          </div>
        </div>*/}
        <MobileMenu/>
      </div>


    )
  }
}

export default FourEcom;
