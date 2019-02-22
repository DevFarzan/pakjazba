import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { Rate} from 'antd';

class BussinesCard extends Component{
  render(){
    const { cardDetails } = this.props;
    let src = cardDetails.imageurl && cardDetails.imageurl[0] || cardDetails.businessImages && cardDetails.businessImages[0] || cardDetails.arr_url && cardDetails.arr_url[0] || cardDetails.images && cardDetails.images[0]
    console.log(this.props.cardDetails, 'businnescards')
    return(

        <Link key={1} to={{pathname: `/detail_business`, state: {}}}>
            <div className=""  style={{'marginBottom': '30px'}}>
                <div className="card" style={{width:'100%'}}>
                    <img alt='' src={src} style={{height:'200px', width:"100%"}} />
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
