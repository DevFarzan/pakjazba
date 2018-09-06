import React, { Component } from 'react';
import Burgermenu from '../header/burgermenu';


class DetailBuySell extends Component{

    componentDidMount(){
        console.log(this.props.location.state, 'kia mila bhai props')
    }

    render(){
        return(
            <div>
            <div className="row">
                <div className="col-md-12">
                	{/*<span><img src="../images/business_detail.jpg" style={{"width": "100%","height": "260px","margin-top": "-38px"}} /></span>*/}
                	</div>
                </div>
                <span className="background_listing">
                	<Burgermenu/>
                </span>
                Detailed Buy Sell
            </div>
        )
    }
}

export default DetailBuySell;