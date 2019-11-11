import React, { Component } from 'react';
import MobileMenu from './mobilemenuEcom'
import './fourEcom.css';
import { Checkbox,  Input, Col, Row, Button, Radio, Rate} from 'antd';


function onChange(e) {
  console.log(`checked = ${e.target.checked}`);
}

class FourEcom extends Component{
  
  render(){
    return(

      <div>
        <div className="">
          <h4 style={{fontWeight: '700'}}>Related Categories</h4>
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
        <hr className="filterdivider"/>
        <div className="" style={{display:"grid"}}>
        <h4 style={{fontWeight: '700'}}>Brand</h4>
            <Checkbox onChange={onChange}>Hisense</Checkbox>
            <Checkbox onChange={onChange}>Apple</Checkbox>
            <Checkbox onChange={onChange}>SOGO</Checkbox>
            <Checkbox onChange={onChange}>Chinghong</Checkbox>
         </div>
         <hr className="filterdivider"/>
         <div class="" style={{display:"grid"}}>
        <h4 style={{fontWeight: '700'}}>Service</h4>
            <Checkbox onChange={onChange}>Installments</Checkbox>
            <Checkbox onChange={onChange}>Cash on delivery</Checkbox>
         </div>
         <hr className="filterdivider"/>
         <div class="" style={{display:"grid"}}>
        <h4 style={{fontWeight: '700'}}>Location</h4>
            <Checkbox onChange={onChange}>Arizona</Checkbox>
            <Checkbox onChange={onChange}>Dallas</Checkbox>
            <Checkbox onChange={onChange}>Texas</Checkbox>
            <Checkbox onChange={onChange}>South America</Checkbox>
         </div>
         <hr className="filterdivider"/>
         <div>
         <h4 style={{fontWeight: '700'}}>Price</h4>
        <div size="large" style={{marginLeft:'10px'}}>
          <Row gutter={8}>
            <Col span={8}>
              <Input defaultValue="Min" />
            </Col>
            <Col span={8}>
              <Input defaultValue="Max" />
            </Col>
            <Col>
                <Button type="primary" icon="caret-right" />
            </Col>
          </Row>
        </div>
        </div>
        <hr className="filterdivider"/>
        <div>
        <h4 style={{fontWeight: '700'}}>Rating</h4>
        <div style={{marginLeft: "15px", display: 'grid'}}>
            <Radio> <Rate  style={{paddingBottom: '20px', marginTop:"-20px",fontFamily: 'Source Sans Pro, sans-serif'}} allowHalf value={4.5}/></Radio>
            <Radio> <Rate  style={{paddingBottom: '20px', marginTop:"-20px",fontFamily: 'Source Sans Pro, sans-serif'}} allowHalf value={4}/></Radio>
            <Radio> <Rate  style={{paddingBottom: '20px', marginTop:"-20px",fontFamily: 'Source Sans Pro, sans-serif'}} allowHalf value={3.5}/></Radio>
            <Radio> <Rate  style={{paddingBottom: '20px', marginTop:"-20px",fontFamily: 'Source Sans Pro, sans-serif'}} allowHalf value={3}/></Radio>
            <Radio> <Rate  style={{paddingBottom: '20px', marginTop:"-20px",fontFamily: 'Source Sans Pro, sans-serif'}} allowHalf value={2}/></Radio>
        </div>
        </div>
        <hr className="filterdivider"/>
         <div class="" style={{display:"grid"}}>
        <h4 style={{fontWeight: '700'}}
        
        
        >Color Family</h4>
            <Checkbox onChange={onChange}>Black</Checkbox>
            <Checkbox onChange={onChange}>Silver</Checkbox>
            <Checkbox onChange={onChange}>Blue</Checkbox>
            <Checkbox onChange={onChange}>Green</Checkbox>
         </div>
      </div>
    )
  }
}

export default FourEcom;
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