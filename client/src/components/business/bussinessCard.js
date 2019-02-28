import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { Rate} from 'antd';

class BussinesCard extends Component{
    callFunc(cardDetails, detail){
        let to = '';
        if(detail === 'businessData'){
            to = {pathname: `/detail_business`, state: cardDetails};            
        }else if(detail === 'roomRentData'){
            to = {pathname: `/detail_roomRent`, state: cardDetails};            
        }else if(detail === 'buySellData'){
            to = {pathname: `/detail_buySell`, state: cardDetails};
        }else if(detail === 'jobListData'){
            to = {pathname: `/detail_jobPortal`, state: {...cardDetails, sec: 'mainPart', user: true}};
        }else if(detail === 'eventPortalData'){
            to = {pathname: `/detail_eventPortal/${cardDetails.randomKey}`, state: cardDetails};
        }
        return to;
    }

    render(){
        const { cardDetails, detail } = this.props;
        let src = cardDetails.imageurl && cardDetails.imageurl[0] || cardDetails.businessImages && cardDetails.businessImages[0] || cardDetails.arr_url && cardDetails.arr_url[0] || cardDetails.images && cardDetails.images[0],
        locate = cardDetails.city + ", " + cardDetails.state,
        name = cardDetails.businessname || cardDetails.eventTitle || cardDetails.compName || cardDetails.postingtitle || cardDetails.title,
        obj = this.callFunc(cardDetails, detail);
        console.log(obj, 'objjjjjjjjjj')
        return(

            <Link key={1} to={obj}>
                <div className=""  style={{'marginBottom': '30px'}}>
                    <div className="card" style={{width:'100%'}}>
                        <img alt='' src={src} style={{height:'200px', width:"100%"}} />
                        <h4 style={{marginLeft:"-1px", marginBottom:"15px", marginTop:"20px"}}>
                            <b>{name}</b>
                        </h4>
                        <span>
                        <Rate disabled style={{paddingBottom: '20px', marginTop:"-10px"}} allowHalf value={5}/> 5.0 </span>
                        <p style={{marginTop:"-15px"}}>
                            <span className="glyphicon glyphicon-map-marker" style={{color: "#008080",margin:"2px"}}>
                            </span>
                            <span style={{color:"black"}}>
                                {locate}
                            </span>
                        </p>
                    </div>
                </div>
            </Link>

        )
    }
}

export default BussinesCard;
