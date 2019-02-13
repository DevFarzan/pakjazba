import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { Rate} from 'antd';

class BussinesCard extends Component{
  render(){
    console.log(this.props, 'businnescards')
    return(

        <Link key={1} to={{pathname: `/detail_business`, state: {}}}>
            <div className=""  style={{'marginBottom': '30px'}}>
                <div className="card" style={{width:'100%'}}>
                    <img alt='' src='./images/def_card_img.jpg' style={{height:'200px', width:"100%"}} />
                    <h4 style={{marginLeft:"-1px", marginBottom:"15px", marginTop:"20px"}}><b>Businnes Name</b></h4>
                    <span>
                    <Rate disabled style={{paddingBottom: '20px', marginTop:"-10px"}} allowHalf value={5}/> 5.0 </span>
                     <p style={{marginTop:"-15px"}}><span className="glyphicon glyphicon-map-marker" style={{color: "#008080",margin:"2px"}}></span><span style={{color:"black"}}>Sring</span></p>
                </div>
            </div>
        </Link>

    )
  }
}

export default BussinesCard;